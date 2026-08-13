import type { Model } from '../data/types';

export interface ModelFilterState {
  origin: string;
  cat: string;
  openOnly: boolean;
  maxPrice: string;
  minContext: string;
  benchmark: string;
  company?: string;
  weight?: 'all' | 'open' | 'closed';
}

const DEFAULT_FILTERS: ModelFilterState = {
  origin: 'all',
  cat: 'all',
  openOnly: false,
  maxPrice: 'all',
  minContext: 'all',
  benchmark: 'all',
};

export function getDefaultModelFilters(): ModelFilterState {
  return { ...DEFAULT_FILTERS };
}

export function matchesModelFilters(model: Model, query: string, filters: ModelFilterState): boolean {
  const haystack = [
    model.displayName,
    model.company,
    model.apiModelString ?? '',
    model.notes ?? '',
    model.id,
  ]
    .join(' ')
    .toLowerCase();

  if (query && !haystack.includes(query.toLowerCase())) {
    return false;
  }

  if (filters.origin !== 'all' && model.origin !== filters.origin) {
    return false;
  }

  if (filters.cat !== 'all' && !model.category.includes(filters.cat as Model['category'][number])) {
    return false;
  }

  if (filters.company && filters.company !== 'all' && model.company !== filters.company) {
    return false;
  }

  const weight = filters.weight ?? (filters.openOnly ? 'open' : 'all');
  if (weight === 'open' && !model.openWeight) {
    return false;
  }
  if (weight === 'closed' && model.openWeight) {
    return false;
  }

  if (filters.openOnly && !model.openWeight) {
    return false;
  }

  if (filters.maxPrice !== 'all') {
    const max = Number(filters.maxPrice);
    if (Number.isFinite(max) && (model.pricing.inputPer1M == null || model.pricing.inputPer1M > max)) {
      return false;
    }
  }

  if (filters.minContext !== 'all') {
    const minContext = parseContextFilter(filters.minContext);
    if (minContext != null && (model.context == null || model.context < minContext)) {
      return false;
    }
  }

  if (filters.benchmark !== 'all') {
    const benchValue = model.benchmarks?.sweBenchPro ?? model.benchmarks?.humanEval ?? null;
    if (!matchesBenchmarkFilter(filters.benchmark, benchValue)) {
      return false;
    }
  }

  return true;
}

function parseContextFilter(value: string): number | null {
  switch (value) {
    case '128k': return 128_000;
    case '256k': return 256_000;
    case '500k': return 500_000;
    case '1m': return 1_000_000;
    case '2m': return 2_000_000;
    default: return null;
  }
}

function matchesBenchmarkFilter(value: string, bench: number | null): boolean {
  switch (value) {
    case 'swe70': return (bench ?? 0) >= 70;
    case 'swe80': return (bench ?? 0) >= 80;
    case 'human90': return (bench ?? 0) >= 90;
    default: return true;
  }
}
