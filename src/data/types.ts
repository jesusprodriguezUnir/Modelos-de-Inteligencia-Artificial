// Esquema de datos del catálogo. Fuente de verdad tipada.
// Añadir un modelo = añadir un objeto a `models` en models.ts (con autocompletado).

export type Origin = 'US' | 'China' | 'EU' | 'Open';

export type Category =
  | 'coding'
  | 'reasoning'
  | 'agentic'
  | 'general'
  | 'multimodal'
  | 'fast'
  | 'budget'
  | 'tool';

export interface Pricing {
  /** USD por 1M tokens de entrada. null si no aplica (p.ej. suscripción o self-host). */
  inputPer1M: number | null;
  /** USD por 1M tokens de salida. */
  outputPer1M: number | null;
  currency?: 'USD';
  /** Texto libre para casos no tokenizados (suscripción, self-host, etc.). */
  note?: string;
  /** true si el precio es aproximado / pendiente de confirmar en web oficial. */
  approx?: boolean;
}

export interface CodeExample {
  lang: string; // python | typescript | bash | go ...
  title: string;
  code: string;
}

export interface VideoRef {
  title: string;
  url: string;
  source?: string; // YouTube, etc.
}

export interface Benchmarks {
  /** % en SWE-bench Pro (o Verified). */
  sweBenchPro?: number;
  /** % en LiveCodeBench. */
  liveCodeBench?: number;
  /** % en HumanEval. */
  humanEval?: number;
}

export interface Model {
  id: string;
  company: string;
  origin: Origin;
  displayName: string;
  /** 'model' para LLMs; 'tool' para agentes/plataformas (OpenCode, Copilot). */
  kind: 'model' | 'tool';
  category: Category[];
  /** Ventana de contexto en tokens. */
  context: number | null;
  pricing: Pricing;
  modalities: Array<'text' | 'image' | 'audio' | 'video'>;
  openWeight?: boolean;
  releaseDate?: string; // ISO o aproximado
  playgroundUrl?: string;
  docsUrl?: string;
  /** Identificador de modelo en la API. */
  apiModelString?: string;
  examples?: CodeExample[];
  videos?: VideoRef[];
  notes?: string;
  /** Scores de benchmarks conocidos. */
  benchmarks?: Benchmarks;
  /** Número de parámetros del modelo (en billones, i.e. 1e9). */
  parameters?: number;
  /** Licencia para modelos open-weight (MIT, Apache-2.0, Llama-3, etc.). */
  license?: string;
  /** Popularidad/uso relativo curado a mano, 0-100 (mayor = más usado). */
  popularity?: number;
  /** Slug en el Artificial Analysis Intelligence Index (enlace para refresco auto). */
  iiSlug?: string;
  /** true si el modelo se importó automáticamente del Intelligence Index. */
  autoImported?: boolean;
}

export interface CompanyMeta {
  name: string;
  origin: Origin;
  /** Color de acento (hex) para la marca. */
  accent: string;
  blurb: string;
}
