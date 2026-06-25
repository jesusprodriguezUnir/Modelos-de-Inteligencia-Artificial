import type { AutoSpec } from './auto-models';
import type { Model } from './types';

export interface PopularityTier {
  key: string;
  label: string;
  /** Umbral mínimo (inclusive). */
  min: number;
}

export const POPULARITY_TIERS: PopularityTier[] = [
  { key: 'top', label: 'Más usados', min: 70 },
  { key: 'popular', label: 'Populares', min: 40 },
  { key: 'emerging', label: 'Emergentes', min: 0 },
];

/** Devuelve el nivel de popularidad de un valor 0-100. */
export function popularityTier(p: number | undefined): PopularityTier {
  const v = p ?? 0;
  return POPULARITY_TIERS.find((t) => v >= t.min) ?? POPULARITY_TIERS[POPULARITY_TIERS.length - 1];
}

/** Clave de enlace de un modelo curado con el Intelligence Index. */
export function iiKeyOf(m: Pick<Model, 'iiSlug' | 'id'>): string {
  return m.iiSlug ?? m.id;
}

/** Refresca un modelo curado con specs frescas, sin pisar lo ya definido. */
export function refreshCuratedModel(m: Model, autoSpecs: Record<string, AutoSpec>): Model {
  const spec = autoSpecs[iiKeyOf(m)];
  if (!spec) return m;

  const next: Model = { ...m };

  if (spec.pricing && (!m.pricing || m.pricing.approx || m.pricing.inputPer1M == null)) {
    next.pricing = { ...m.pricing, ...spec.pricing };
  }

  if (spec.context != null && m.context == null) next.context = spec.context;
  if (spec.parameters != null && m.parameters == null) next.parameters = spec.parameters;

  if (spec.benchmarks) {
    next.benchmarks = {
      ...spec.benchmarks,
      ...m.benchmarks,
    };
  }

  return next;
}

export function buildCuratedModels(rawModels: Model[], popularity: Record<string, number>, autoSpecs: Record<string, AutoSpec>): Model[] {
  return rawModels.map((m) => ({
    ...refreshCuratedModel(m, autoSpecs),
    popularity: m.popularity ?? popularity[m.id] ?? 30,
  }));
}

export function buildCuratedKeySet(models: Model[]): Set<string> {
  const keys = new Set<string>();
  for (const m of models) {
    keys.add(m.id);
    if (m.iiSlug) keys.add(m.iiSlug);
    if (m.apiModelString) keys.add(m.apiModelString);
  }
  return keys;
}

export function buildImportedModels(autoModels: Model[], curatedKeys: Set<string>, popularity: Record<string, number>): Model[] {
  return autoModels
    .filter((m) => !curatedKeys.has(m.id) && !(m.iiSlug && curatedKeys.has(m.iiSlug)))
    .map((m) => ({
      ...m,
      autoImported: true,
      popularity: popularity[m.id] ?? 30,
    }));
}
