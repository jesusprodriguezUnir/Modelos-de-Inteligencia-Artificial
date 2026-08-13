import type { Category, Origin } from '@/data/types';

export const CAT_LABELS: Record<Category, string> = {
  coding: 'Coding',
  reasoning: 'Razonamiento',
  agentic: 'Agéntico',
  general: 'General',
  multimodal: 'Multimodal',
  fast: 'Rápido',
  budget: 'Económico',
  tool: 'Herramienta',
};

export const ORIGIN_LABELS: Record<Origin, string> = {
  US: 'EE. UU.',
  EU: 'Europa',
  China: 'China',
  Open: 'Open',
};

export const SORT_LABELS = {
  relevance: 'Relevancia',
  price: 'Precio',
  context: 'Contexto',
  benchmark: 'SWE-bench',
  recency: 'Novedad',
  value: 'Calidad/precio',
} as const;
