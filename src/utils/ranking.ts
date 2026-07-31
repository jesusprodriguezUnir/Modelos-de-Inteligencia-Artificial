export type ModelSortMode = 'relevance' | 'value' | 'context' | 'benchmark';

export function getRecencyBonus(releaseDate?: string | null): number {
  if (!releaseDate) return 0;

  const parsed = new Date(releaseDate);
  if (Number.isNaN(parsed.getTime())) return 0;

  const now = Date.now();
  const ageDays = Math.max(0, (now - parsed.getTime()) / (1000 * 60 * 60 * 24));

  if (ageDays <= 90) return 18;
  if (ageDays <= 180) return 11;
  if (ageDays <= 365) return 6;
  return 0;
}

export function getPopularityScore(popularity?: number, releaseDate?: string | null): number {
  const base = popularity ?? 0;
  return base + getRecencyBonus(releaseDate) * 1.2;
}

export function getBenchScore(sweBenchPro?: number, releaseDate?: string | null): number {
  const base = sweBenchPro ?? 0;
  return base + getRecencyBonus(releaseDate) / 1.6;
}

export function getValueScore(popularity?: number, sweBenchPro?: number, context?: number | null, inputPrice?: number | null): number {
  const safeInput = inputPrice ?? 999;
  return (sweBenchPro ?? 0) * 1.4 + Math.min((context ?? 0) / 200000, 80) + (popularity ?? 0) / 10 - safeInput * 12;
}

function getInputPriceValue(value: { inputPrice?: number | null; pricing?: { inputPer1M?: number | null } | null } | null | undefined): number | null {
  if (!value) return null;
  if (typeof value.inputPrice === 'number') return value.inputPrice;
  if (value.pricing && typeof value.pricing.inputPer1M === 'number') return value.pricing.inputPer1M;
  return null;
}

export function getHighlightBadge(popularity?: number, sweBenchPro?: number, releaseDate?: string | null): string | null {
  const isRecent = getRecencyBonus(releaseDate) > 0;
  if (isRecent) return 'Novedad';
  if ((sweBenchPro ?? 0) >= 70) return 'Top benchmark';
  if ((popularity ?? 0) >= 80) return 'Popular';
  return null;
}

export function sortModelsByMode<T extends { highlightBadge?: string | null; popularity?: number | null; releaseDate?: string | null; context?: number | null; swe?: number | null; valueScore?: number | null; inputPrice?: number | null; pricing?: { inputPer1M?: number | null } | null }>(models: T[], mode: ModelSortMode = 'relevance'): T[] {
  const normalized = [...models];
  normalized.sort((a, b) => {
    if (mode === 'value') {
      const valueA = a.valueScore ?? getValueScore(a.popularity ?? 0, a.swe ?? 0, a.context ?? 0, getInputPriceValue(a));
      const valueB = b.valueScore ?? getValueScore(b.popularity ?? 0, b.swe ?? 0, b.context ?? 0, getInputPriceValue(b));
      if (valueA !== valueB) return valueB - valueA;
    }
    if (mode === 'context') {
      const contextA = a.context ?? 0;
      const contextB = b.context ?? 0;
      if (contextA !== contextB) return contextB - contextA;
    }
    if (mode === 'benchmark') {
      const sweA = a.swe ?? 0;
      const sweB = b.swe ?? 0;
      if (sweA !== sweB) return sweB - sweA;
    }

    const badgeA = a.highlightBadge ? 1 : 0;
    const badgeB = b.highlightBadge ? 1 : 0;
    if (badgeA !== badgeB) return badgeB - badgeA;

    const scoreA = getPopularityScore(a.popularity ?? 0, a.releaseDate);
    const scoreB = getPopularityScore(b.popularity ?? 0, b.releaseDate);
    if (scoreA !== scoreB) return scoreB - scoreA;

    return (b.popularity ?? 0) - (a.popularity ?? 0);
  });
  return normalized;
}
