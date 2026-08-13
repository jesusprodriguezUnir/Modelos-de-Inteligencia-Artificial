import { companies, models } from '@/data/models';
import type { BadgeKind, Category, Model, Origin } from '@/data/types';
import { readIndexMeta } from '@/lib/index-meta';
import { CAT_LABELS, ORIGIN_LABELS } from '@/lib/labels';
import { getAffiliateLinks, getOfficialApiUrl } from '@/lib/affiliates';
import { deriveInsights } from '@/lib/insights';
import { fmtCtx, fmtDate, fmtPrice } from '@/utils/format';
import { getHighlightBadge, getPopularityScore, getRecencyBonus } from '@/utils/ranking';

export interface CatalogBadge {
  kind: BadgeKind;
  label: string;
}

export interface CatalogCard {
  id: string;
  slug: string;
  displayName: string;
  company: string;
  companyName: string;
  accent: string;
  origin: Origin;
  originLabel: string;
  categoryKeys: Category[];
  tags: string[];
  context: number | null;
  contextText: string;
  priceIn: number | null;
  priceOut: number | null;
  priceInText: string;
  priceOutText: string;
  approx: boolean;
  priceNote?: string;
  swe: number | null;
  sweText: string;
  liveCodeBench?: number;
  humanEval?: number;
  openWeight: boolean;
  releaseDate?: string;
  releaseLabel: string;
  isRecent: boolean;
  highlightBadge: string | null;
  badges: CatalogBadge[];
  apiModelString?: string;
  playgroundUrl?: string;
  docsUrl?: string;
  officialUrl?: string;
  affiliateUrl?: string;
  sponsored: boolean;
  notes?: string;
  popularity: number;
  modalities: Model['modalities'];
  license?: string;
  parameters?: number;
  kind: Model['kind'];
}

export interface HighlightPick {
  key: 'cheap' | 'context' | 'swe' | 'new';
  title: string;
  subtitle: string;
  model: CatalogCard;
  value: string;
}

export interface UseCasePick {
  title: string;
  subtitle: string;
  reason: string;
  badge: string;
  tone: 'signal' | 'info' | 'warn' | 'sponsored';
  model: CatalogCard;
}

function isRecent(releaseDate?: string): boolean {
  return getRecencyBonus(releaseDate) >= 11;
}

function priceText(value: number | null, approx?: boolean): string {
  return fmtPrice(value) + (approx && value != null ? '~' : '');
}

function buildBadges(model: Model): CatalogBadge[] {
  const badges: CatalogBadge[] = [];
  if (model.sponsored) badges.push({ kind: 'sponsored', label: 'Destacado' });
  if (isRecent(model.releaseDate)) badges.push({ kind: 'new', label: 'Novedad' });
  if (model.openWeight) badges.push({ kind: 'open', label: 'Open-weight' });
  if (model.pricing.inputPer1M != null && model.pricing.inputPer1M <= 3) {
    badges.push({ kind: 'cheap', label: 'Más barato' });
  }
  if (model.context != null && model.context >= 1_000_000) {
    badges.push({ kind: 'context', label: '1M+ contexto' });
  }
  if ((model.benchmarks?.sweBenchPro ?? 0) >= 70) {
    badges.push({ kind: 'swe', label: 'SWE ≥ 70' });
  }
  if (model.modalities.includes('image') || model.category.includes('multimodal')) {
    badges.push({ kind: 'multimodal', label: 'Multimodal' });
  }
  if (!isRecent(model.releaseDate) && (model.popularity ?? 0) >= 80) {
    badges.push({ kind: 'popular', label: 'Popular' });
  }
  return badges.slice(0, 3);
}

export function toCatalogCard(model: Model): CatalogCard {
  const company = companies[model.company] ?? {
    name: model.company,
    accent: '#8b90a0',
    origin: model.origin,
  };
  const affiliates = getAffiliateLinks(model);
  const swe = model.benchmarks?.sweBenchPro ?? null;

  return {
    id: model.id,
    slug: model.id,
    displayName: model.displayName,
    company: model.company,
    companyName: company.name,
    accent: company.accent,
    origin: model.origin,
    originLabel: ORIGIN_LABELS[model.origin],
    categoryKeys: model.category,
    tags: model.category.slice(0, 4).map((key) => CAT_LABELS[key] ?? key),
    context: model.context,
    contextText: fmtCtx(model.context),
    priceIn: model.pricing.inputPer1M,
    priceOut: model.pricing.outputPer1M,
    priceInText: priceText(model.pricing.inputPer1M, model.pricing.approx),
    priceOutText: priceText(model.pricing.outputPer1M, model.pricing.approx),
    approx: !!model.pricing.approx,
    priceNote: model.pricing.note,
    swe,
    sweText: swe != null ? `${swe}%` : '—',
    liveCodeBench: model.benchmarks?.liveCodeBench,
    humanEval: model.benchmarks?.humanEval,
    openWeight: !!model.openWeight,
    releaseDate: model.releaseDate,
    releaseLabel: fmtDate(model.releaseDate),
    isRecent: isRecent(model.releaseDate),
    highlightBadge: getHighlightBadge(model.popularity, swe ?? undefined, model.releaseDate),
    badges: buildBadges(model),
    apiModelString: model.apiModelString,
    playgroundUrl: model.playgroundUrl,
    docsUrl: model.docsUrl,
    officialUrl: getOfficialApiUrl(model),
    affiliateUrl: affiliates[0]?.url,
    sponsored: !!model.sponsored,
    notes: model.notes,
    popularity: model.popularity ?? 0,
    modalities: model.modalities,
    license: model.license,
    parameters: model.parameters,
    kind: model.kind,
  };
}

export function getCatalogModels(): Model[] {
  return models.filter((model) => model.kind === 'model');
}

export function getToolModels(): Model[] {
  return models.filter((model) => model.kind === 'tool');
}

export function getCatalogCards(): CatalogCard[] {
  return getCatalogModels()
    .map(toCatalogCard)
    .sort((a, b) => {
      const scoreA = getPopularityScore(a.popularity, a.releaseDate);
      const scoreB = getPopularityScore(b.popularity, b.releaseDate);
      return scoreB - scoreA;
    });
}

export function getModelBySlug(slug: string): Model | undefined {
  return models.find((model) => model.id === slug);
}

export function getIndexMeta() {
  const meta = readIndexMeta();
  const fetched = new Date(meta.fetched_at);
  return {
    fetchedAt: meta.fetched_at,
    fetchedLabel: fetched.toLocaleDateString('es-ES', { month: 'long', year: 'numeric' }),
    fetchedShort: fetched.toLocaleDateString('es-ES', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    }),
    version: meta.index_version,
    nModels: meta.n_models,
  };
}

export function getHighlights(cards: CatalogCard[]): HighlightPick[] {
  const priced = cards.filter((m) => m.priceIn != null);
  const cheap = [...priced].sort((a, b) => (a.priceIn ?? 999) - (b.priceIn ?? 999))[0];
  const context = [...cards].sort((a, b) => (b.context ?? 0) - (a.context ?? 0))[0];
  const swe = [...cards].filter((m) => m.swe != null).sort((a, b) => (b.swe ?? 0) - (a.swe ?? 0))[0];
  const newest = [...cards]
    .filter((m) => m.releaseDate)
    .sort((a, b) => new Date(b.releaseDate!).getTime() - new Date(a.releaseDate!).getTime())[0];

  const picks: HighlightPick[] = [];
  if (cheap) {
    picks.push({
      key: 'cheap',
      title: 'Más barato',
      subtitle: 'Entrada por 1M de tokens',
      model: cheap,
      value: cheap.priceInText,
    });
  }
  if (context) {
    picks.push({
      key: 'context',
      title: 'Mayor contexto',
      subtitle: 'Para repos grandes',
      model: context,
      value: context.contextText,
    });
  }
  if (swe) {
    picks.push({
      key: 'swe',
      title: 'Mejor SWE-bench',
      subtitle: 'Ingeniería de software',
      model: swe,
      value: swe.sweText,
    });
  }
  if (newest) {
    picks.push({
      key: 'new',
      title: 'Novedad',
      subtitle: newest.releaseLabel,
      model: newest,
      value: newest.displayName,
    });
  }
  return picks;
}

export function getUseCases(cards: CatalogCard[]): UseCasePick[] {
  const swe = [...cards].filter((m) => m.swe != null).sort((a, b) => (b.swe ?? 0) - (a.swe ?? 0))[0];
  const context = [...cards].sort((a, b) => (b.context ?? 0) - (a.context ?? 0))[0];
  const cheap = [...cards]
    .filter((m) => m.priceIn != null)
    .sort((a, b) => (a.priceIn ?? 999) - (b.priceIn ?? 999))[0];
  const open = [...cards]
    .filter((m) => m.openWeight)
    .sort((a, b) => b.popularity - a.popularity)[0];
  const newest = [...cards]
    .filter((m) => m.releaseDate)
    .sort((a, b) => new Date(b.releaseDate!).getTime() - new Date(a.releaseDate!).getTime())[0];

  return [
    swe && {
      title: 'Coding agéntico',
      subtitle: 'Tareas reales de ingeniería',
      reason: 'Prioriza SWE-bench alto y buen rendimiento en flujos complejos.',
      badge: 'SWE',
      tone: 'signal' as const,
      model: swe,
    },
    context && {
      title: 'Repos grandes',
      subtitle: 'Mucho código en una sola ventana',
      reason: 'Elige el modelo con mayor contexto del catálogo.',
      badge: '1M+',
      tone: 'info' as const,
      model: context,
    },
    cheap && {
      title: 'Presupuesto bajo',
      subtitle: 'Probar sin disparar la factura',
      reason: 'Se centra en el precio de entrada más bajo.',
      badge: '$',
      tone: 'signal' as const,
      model: cheap,
    },
    open && {
      title: 'Open-weight',
      subtitle: 'Privacidad y hosting propio',
      reason: 'Apuesta por pesos abiertos con buena adopción.',
      badge: 'Open',
      tone: 'warn' as const,
      model: open,
    },
    newest && {
      title: 'Lo más reciente',
      subtitle: 'Novedades del mercado',
      reason: 'El lanzamiento más nuevo del catálogo.',
      badge: 'Nuevo',
      tone: 'warn' as const,
      model: newest,
    },
  ].filter(Boolean) as UseCasePick[];
}

export function getCatalogStats(cards: CatalogCard[]) {
  const open = cards.filter((m) => m.openWeight).length;
  const companiesCount = new Set(cards.map((m) => m.company)).size;
  return {
    models: cards.length,
    open,
    companies: companiesCount,
  };
}

export { deriveInsights, getAffiliateLinks };
