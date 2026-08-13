import { readFileSync } from 'node:fs';
import { join } from 'node:path';

interface RawMeta {
  fetched_at?: string;
  index_version?: string | null;
  n_models?: number;
}

/** Lee solo la cabecera del snapshot JSON, sin importar el TS autogenerado. */
export function readIndexMeta(): Required<RawMeta> {
  try {
    const raw = readFileSync(join(process.cwd(), 'data/intelligence-index.json'), 'utf8');
    const data = JSON.parse(raw) as RawMeta;
    return {
      fetched_at: data.fetched_at ?? new Date().toISOString(),
      index_version: data.index_version ?? null,
      n_models: data.n_models ?? 0,
    };
  } catch {
    return {
      fetched_at: new Date().toISOString(),
      index_version: null,
      n_models: 0,
    };
  }
}
