// Tipos para el snapshot del Artificial Analysis Intelligence Index.
// AUTOGENERADO por la skill update-intelligence-index.

export interface IntelligenceIndexMeta {
  fetched_at: string;
  source_url: string;
  index_version: string | null;
  method: 'rsc-html' | 'playwright';
  n_models: number;
  n_default_data: number;
  sections_captured: string[];
  sections_failed: string[];
}

export interface MasterRow {
  slug: string | null;
  name: string | null;
  short_name?: string | null;
  creator?: string | null;
  intelligence_index?: number | null;
  intelligence_index_v4_1?: number | null;
  coding_index?: number | null;
  agentic_index?: number | null;
  gdpval_v2?: number | null;
  gdpval_elo?: number | null;
  omniscience?: number | null;
  scicode?: number | null;
  hle?: number | null;
  gpqa?: number | null;
  critpt?: number | null;
  lcr?: number | null;
  terminalbench_v2_1?: number | null;
  tau_banking?: number | null;
  ifbench?: number | null;
  livecodebench?: number | null;
  humaneval?: number | null;
  aime?: number | null;
  mmlu_pro?: number | null;
  mmmu_pro?: number | null;
  briefcase?: number | null;
  is_open_weights?: boolean | null;
  context_window_tokens?: number | null;
  parameters?: number | null;
  activeParams?: number | null;
  release_date?: string | null;
  reasoning_model?: boolean | null;
  frontier_model?: boolean | null;
  deprecated?: boolean | null;
  price_1m_input?: number | null;
  price_1m_output?: number | null;
  price_1m_blended_7_2_1?: number | null;
  cost_per_task_total?: number | null;
  time_per_task?: number | null;
  output_tokens_per_task?: number | null;
}

// Snapshot completo (en data/intelligence-index.json). La interfaz detallada
// de las secciones es Record<string, unknown> por simplicidad; usa master_table
// para acceder a las métricas por modelo con tipado.
export interface IntelligenceIndexSnapshot extends IntelligenceIndexMeta {
  data: {
    master_table: MasterRow[];
    [section: string]: unknown;
  };
}
