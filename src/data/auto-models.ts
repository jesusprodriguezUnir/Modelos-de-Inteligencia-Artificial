// AUTOGENERADO por scripts/build_auto_catalog.py — NO EDITAR A MANO.
// Se regenera a diario a partir de data/intelligence-index-master.json.
// El catálogo curado (models.ts) SIEMPRE tiene prioridad sobre estos datos:
// la fusión de models.ts solo rellena huecos y añade modelos nuevos.

import type { Model, CompanyMeta } from './types';

/** Specs frescas por slug del Intelligence Index, para refrescar curados. */
export interface AutoSpec {
  pricing?: { inputPer1M: number | null; outputPer1M: number | null; approx: true };
  context?: number;
  benchmarks?: {
    liveCodeBench?: number;
    humanEval?: number;
    terminalBench?: number;
    sciCode?: number;
    intelligenceIndex?: number;
    designArenaElo?: number;
  };
  parameters?: number;
  releaseDate?: string;
}

export const autoModels: Model[] = [
  {
    "id": "claude-opus-5",
    "iiSlug": "claude-opus-5",
    "company": "Anthropic",
    "origin": "US",
    "displayName": "Claude Opus 5 (Adaptive Reasoning, Max Effort)",
    "kind": "model",
    "category": [
      "coding",
      "reasoning"
    ],
    "context": 1000000,
    "pricing": {
      "inputPer1M": 2.5,
      "outputPer1M": 12.5,
      "approx": true
    },
    "modalities": [
      "image",
      "text"
    ],
    "openWeight": false,
    "releaseDate": "2026-07-24",
    "benchmarks": {
      "terminalBench": 89.1,
      "sciCode": 55.7,
      "intelligenceIndex": 63.1,
      "designArenaElo": 1361.1
    },
    "notes": "Importado automáticamente del Artificial Analysis Intelligence Index (Score 107.3). Precios aproximados; verifica en la web oficial del proveedor."
  },
  {
    "id": "claude-opus-5-xhigh",
    "iiSlug": "claude-opus-5-xhigh",
    "company": "Anthropic",
    "origin": "US",
    "displayName": "Claude Opus 5 (Adaptive Reasoning, Xhigh Effort)",
    "kind": "model",
    "category": [
      "coding",
      "reasoning"
    ],
    "context": null,
    "pricing": {
      "inputPer1M": 5.0,
      "outputPer1M": 25.0,
      "approx": true
    },
    "modalities": [
      "text"
    ],
    "openWeight": false,
    "releaseDate": "2026-07-24",
    "benchmarks": {
      "terminalBench": 88.0,
      "sciCode": 55.0,
      "intelligenceIndex": 62.5
    },
    "notes": "Importado automáticamente del Artificial Analysis Intelligence Index (Score 106.1). Precios aproximados; verifica en la web oficial del proveedor."
  },
  {
    "id": "claude-fable-5",
    "iiSlug": "claude-fable-5",
    "company": "Anthropic",
    "origin": "US",
    "displayName": "Claude Fable 5 (Adaptive Reasoning, Max Effort, Opus 4.8 Fallback)",
    "kind": "model",
    "category": [
      "coding",
      "reasoning"
    ],
    "context": 1000000,
    "pricing": {
      "inputPer1M": 5.0,
      "outputPer1M": 25.0,
      "approx": true
    },
    "modalities": [
      "image",
      "text"
    ],
    "openWeight": false,
    "releaseDate": "2026-06-09",
    "benchmarks": {
      "terminalBench": 84.6,
      "sciCode": 60.2,
      "intelligenceIndex": 62.1,
      "designArenaElo": 1346.4
    },
    "notes": "Importado automáticamente del Artificial Analysis Intelligence Index (Score 105.9). Precios aproximados; verifica en la web oficial del proveedor."
  },
  {
    "id": "gpt-5-6-sol",
    "iiSlug": "gpt-5-6-sol",
    "company": "OpenAI",
    "origin": "US",
    "displayName": "GPT-5.6 Sol (max)",
    "kind": "model",
    "category": [
      "coding",
      "reasoning"
    ],
    "context": null,
    "pricing": {
      "inputPer1M": 4.0,
      "outputPer1M": 20.0,
      "approx": true
    },
    "modalities": [
      "text"
    ],
    "openWeight": false,
    "releaseDate": "2026-07-09",
    "benchmarks": {
      "terminalBench": 88.0,
      "sciCode": 56.1,
      "intelligenceIndex": 60.9
    },
    "notes": "Importado automáticamente del Artificial Analysis Intelligence Index (Score 105.7). Precios aproximados; verifica en la web oficial del proveedor."
  },
  {
    "id": "claude-opus-5-high",
    "iiSlug": "claude-opus-5-high",
    "company": "Anthropic",
    "origin": "US",
    "displayName": "Claude Opus 5 (Adaptive Reasoning, High Effort)",
    "kind": "model",
    "category": [
      "coding",
      "reasoning"
    ],
    "context": null,
    "pricing": {
      "inputPer1M": 5.0,
      "outputPer1M": 25.0,
      "approx": true
    },
    "modalities": [
      "text"
    ],
    "openWeight": false,
    "releaseDate": "2026-07-24",
    "benchmarks": {
      "terminalBench": 87.6,
      "sciCode": 54.3,
      "intelligenceIndex": 61.5
    },
    "notes": "Importado automáticamente del Artificial Analysis Intelligence Index (Score 105.0). Precios aproximados; verifica en la web oficial del proveedor."
  },
  {
    "id": "grok-4-6",
    "iiSlug": "grok-4-6",
    "company": "xAI",
    "origin": "US",
    "displayName": "Grok 4.6 (high)",
    "kind": "model",
    "category": [
      "coding",
      "reasoning"
    ],
    "context": null,
    "pricing": {
      "inputPer1M": 2.0,
      "outputPer1M": 6.0,
      "approx": true
    },
    "modalities": [
      "text"
    ],
    "openWeight": false,
    "releaseDate": "2026-08-12",
    "benchmarks": {
      "terminalBench": 88.4,
      "sciCode": 53.6,
      "intelligenceIndex": 60.9
    },
    "notes": "Importado automáticamente del Artificial Analysis Intelligence Index (Score 104.9). Precios aproximados; verifica en la web oficial del proveedor."
  },
  {
    "id": "kimi-k3",
    "iiSlug": "kimi-k3",
    "company": "Moonshot",
    "origin": "China",
    "displayName": "Kimi K3 (max)",
    "kind": "model",
    "category": [
      "coding",
      "reasoning"
    ],
    "context": 1048576,
    "pricing": {
      "inputPer1M": 3.0,
      "outputPer1M": 15.0,
      "approx": true
    },
    "modalities": [
      "image",
      "text",
      "video"
    ],
    "openWeight": true,
    "releaseDate": "2026-07-16",
    "parameters": 2800.0,
    "benchmarks": {
      "terminalBench": 85.0,
      "sciCode": 58.7,
      "intelligenceIndex": 59.7,
      "designArenaElo": 1394.1
    },
    "notes": "Importado automáticamente del Artificial Analysis Intelligence Index (Score 104.3). Precios aproximados; verifica en la web oficial del proveedor."
  },
  {
    "id": "glm-5-3",
    "iiSlug": "glm-5-3",
    "company": "Zhipu",
    "origin": "China",
    "displayName": "GLM-5.3 (max)",
    "kind": "model",
    "category": [
      "coding",
      "reasoning"
    ],
    "context": null,
    "pricing": {
      "inputPer1M": 1.4,
      "outputPer1M": 4.4,
      "approx": true
    },
    "modalities": [
      "text"
    ],
    "openWeight": true,
    "releaseDate": "2026-08-18",
    "parameters": 753.0,
    "benchmarks": {
      "terminalBench": 83.9,
      "sciCode": 56.5,
      "intelligenceIndex": 59.5
    },
    "notes": "Importado automáticamente del Artificial Analysis Intelligence Index (Score 102.7). Precios aproximados; verifica en la web oficial del proveedor."
  },
  {
    "id": "gpt-5-6-terra",
    "iiSlug": "gpt-5-6-terra",
    "company": "OpenAI",
    "origin": "US",
    "displayName": "GPT-5.6 Terra (max)",
    "kind": "model",
    "category": [
      "coding",
      "reasoning"
    ],
    "context": null,
    "pricing": {
      "inputPer1M": 2.0,
      "outputPer1M": 12.0,
      "approx": true
    },
    "modalities": [
      "text"
    ],
    "openWeight": false,
    "releaseDate": "2026-07-09",
    "benchmarks": {
      "terminalBench": 88.0,
      "sciCode": 53.9,
      "intelligenceIndex": 56.6
    },
    "notes": "Importado automáticamente del Artificial Analysis Intelligence Index (Score 102.7). Precios aproximados; verifica en la web oficial del proveedor."
  },
  {
    "id": "gemini-3-7-flash",
    "iiSlug": "gemini-3-7-flash",
    "company": "Google",
    "origin": "US",
    "displayName": "Gemini 3.7 Flash (high)",
    "kind": "model",
    "category": [
      "coding",
      "reasoning"
    ],
    "context": null,
    "pricing": {
      "inputPer1M": 0.75,
      "outputPer1M": 3.75,
      "approx": true
    },
    "modalities": [
      "text"
    ],
    "openWeight": false,
    "releaseDate": "2026-08-13",
    "benchmarks": {
      "terminalBench": 85.8,
      "sciCode": 56.8,
      "intelligenceIndex": 56.0
    },
    "notes": "Importado automáticamente del Artificial Analysis Intelligence Index (Score 102.2). Precios aproximados; verifica en la web oficial del proveedor."
  },
  {
    "id": "muse-spark-1-2",
    "iiSlug": "muse-spark-1-2",
    "company": "Meta",
    "origin": "Open",
    "displayName": "Muse Spark 1.2 (xhigh)",
    "kind": "model",
    "category": [
      "coding",
      "reasoning"
    ],
    "context": null,
    "pricing": {
      "inputPer1M": 1.25,
      "outputPer1M": 4.25,
      "approx": true
    },
    "modalities": [
      "text"
    ],
    "openWeight": false,
    "releaseDate": "2026-08-05",
    "benchmarks": {
      "terminalBench": 80.1,
      "sciCode": 56.4,
      "intelligenceIndex": 56.8
    },
    "notes": "Importado automáticamente del Artificial Analysis Intelligence Index (Score 99.0). Precios aproximados; verifica en la web oficial del proveedor."
  },
  {
    "id": "qwen3-8-2-4t-a95b",
    "iiSlug": "qwen3-8-2-4t-a95b",
    "company": "Alibaba",
    "origin": "China",
    "displayName": "Qwen3.8 2.4T A95B",
    "kind": "model",
    "category": [
      "coding",
      "reasoning"
    ],
    "context": null,
    "pricing": {
      "inputPer1M": 2.0,
      "outputPer1M": 6.0,
      "approx": true
    },
    "modalities": [
      "text"
    ],
    "openWeight": true,
    "releaseDate": "2026-08-12",
    "parameters": 2400.0,
    "benchmarks": {
      "terminalBench": 82.0,
      "sciCode": 51.6,
      "intelligenceIndex": 57.7
    },
    "notes": "Importado automáticamente del Artificial Analysis Intelligence Index (Score 98.7). Precios aproximados; verifica en la web oficial del proveedor."
  },
  {
    "id": "glm-5-3-flash",
    "iiSlug": "glm-5-3-flash",
    "company": "Zhipu",
    "origin": "China",
    "displayName": "GLM-5.3-Flash",
    "kind": "model",
    "category": [
      "coding",
      "reasoning",
      "budget"
    ],
    "context": null,
    "pricing": {
      "inputPer1M": 0.15,
      "outputPer1M": 0.5,
      "approx": true
    },
    "modalities": [
      "text"
    ],
    "openWeight": true,
    "releaseDate": "2026-08-26",
    "parameters": 320.0,
    "benchmarks": {
      "terminalBench": 84.3,
      "sciCode": 46.1,
      "intelligenceIndex": 57.5
    },
    "notes": "Importado automáticamente del Artificial Analysis Intelligence Index (Score 97.7). Precios aproximados; verifica en la web oficial del proveedor."
  },
  {
    "id": "gpt-5-6-luna",
    "iiSlug": "gpt-5-6-luna",
    "company": "OpenAI",
    "origin": "US",
    "displayName": "GPT-5.6 Luna (max)",
    "kind": "model",
    "category": [
      "coding",
      "reasoning",
      "budget"
    ],
    "context": null,
    "pricing": {
      "inputPer1M": 0.2,
      "outputPer1M": 1.2,
      "approx": true
    },
    "modalities": [
      "text"
    ],
    "openWeight": false,
    "releaseDate": "2026-07-09",
    "benchmarks": {
      "terminalBench": 80.9,
      "sciCode": 52.5,
      "intelligenceIndex": 52.3
    },
    "notes": "Importado automáticamente del Artificial Analysis Intelligence Index (Score 95.7). Precios aproximados; verifica en la web oficial del proveedor."
  },
  {
    "id": "deepseek-v4-pro",
    "iiSlug": "deepseek-v4-pro",
    "company": "DeepSeek",
    "origin": "China",
    "displayName": "DeepSeek V4 Pro 0813 (Reasoning, Max Effort)",
    "kind": "model",
    "category": [
      "coding",
      "reasoning"
    ],
    "context": 1048576,
    "pricing": {
      "inputPer1M": 0.66,
      "outputPer1M": 1.98,
      "approx": true
    },
    "modalities": [
      "text"
    ],
    "openWeight": true,
    "releaseDate": "2026-08-13",
    "parameters": 1600.0,
    "benchmarks": {
      "terminalBench": 78.7,
      "sciCode": 49.2,
      "intelligenceIndex": 53.2,
      "designArenaElo": 1239.4
    },
    "notes": "Importado automáticamente del Artificial Analysis Intelligence Index (Score 93.5). Precios aproximados; verifica en la web oficial del proveedor."
  },
  {
    "id": "qwen3-8-27b",
    "iiSlug": "qwen3-8-27b",
    "company": "Alibaba",
    "origin": "China",
    "displayName": "Qwen3.8 27B (xhigh)",
    "kind": "model",
    "category": [
      "coding",
      "reasoning",
      "budget"
    ],
    "context": null,
    "pricing": {
      "inputPer1M": 0.5,
      "outputPer1M": 3.0,
      "approx": true
    },
    "modalities": [
      "text"
    ],
    "openWeight": true,
    "releaseDate": "2026-08-14",
    "parameters": 27.0,
    "benchmarks": {
      "terminalBench": 79.8,
      "sciCode": 44.7,
      "intelligenceIndex": 52.0
    },
    "notes": "Importado automáticamente del Artificial Analysis Intelligence Index (Score 91.7). Precios aproximados; verifica en la web oficial del proveedor."
  },
  {
    "id": "motif-3",
    "iiSlug": "motif-3",
    "company": "MotifTechnologies",
    "origin": "China",
    "displayName": "Motif 3",
    "kind": "model",
    "category": [
      "coding",
      "reasoning"
    ],
    "context": null,
    "pricing": {
      "inputPer1M": null,
      "outputPer1M": null,
      "approx": true
    },
    "modalities": [
      "text"
    ],
    "openWeight": true,
    "releaseDate": "2026-08-12",
    "parameters": 314.0,
    "benchmarks": {
      "terminalBench": 74.9,
      "sciCode": 40.6,
      "intelligenceIndex": 47.4
    },
    "notes": "Importado automáticamente del Artificial Analysis Intelligence Index (Score 84.9). Precios aproximados; verifica en la web oficial del proveedor."
  },
  {
    "id": "minimax-m3",
    "iiSlug": "minimax-m3",
    "company": "MiniMax",
    "origin": "China",
    "displayName": "MiniMax-M3",
    "kind": "model",
    "category": [
      "coding",
      "reasoning",
      "budget"
    ],
    "context": 524288,
    "pricing": {
      "inputPer1M": 0.15,
      "outputPer1M": 0.6,
      "approx": true
    },
    "modalities": [
      "image",
      "text",
      "video"
    ],
    "openWeight": true,
    "releaseDate": "2026-06-01",
    "parameters": 428.0,
    "benchmarks": {
      "terminalBench": 65.2,
      "sciCode": 45.4,
      "intelligenceIndex": 45.4,
      "designArenaElo": 1247.6
    },
    "notes": "Importado automáticamente del Artificial Analysis Intelligence Index (Score 79.9). Precios aproximados; verifica en la web oficial del proveedor."
  },
  {
    "id": "inkling",
    "iiSlug": "inkling",
    "company": "ThinkingMachines",
    "origin": "US",
    "displayName": "Inkling (xhigh)",
    "kind": "model",
    "category": [
      "coding",
      "reasoning"
    ],
    "context": 524288,
    "pricing": {
      "inputPer1M": 0.5,
      "outputPer1M": 2.025,
      "approx": true
    },
    "modalities": [
      "audio",
      "image",
      "text"
    ],
    "openWeight": true,
    "releaseDate": "2026-07-15",
    "parameters": 975.0,
    "benchmarks": {
      "terminalBench": 55.1,
      "sciCode": 46.1,
      "intelligenceIndex": 42.3,
      "designArenaElo": 1208.0
    },
    "notes": "Importado automáticamente del Artificial Analysis Intelligence Index (Score 72.6). Precios aproximados; verifica en la web oficial del proveedor."
  },
  {
    "id": "nvidia-nemotron-3-ultra-550b-a55b",
    "iiSlug": "nvidia-nemotron-3-ultra-550b-a55b",
    "company": "NVIDIA",
    "origin": "US",
    "displayName": "Nemotron 3 Ultra 550B A55B (Reasoning)",
    "kind": "model",
    "category": [
      "coding",
      "reasoning"
    ],
    "context": null,
    "pricing": {
      "inputPer1M": 0.6,
      "outputPer1M": 2.75,
      "approx": true
    },
    "modalities": [
      "text"
    ],
    "openWeight": true,
    "releaseDate": "2026-06-04",
    "parameters": 550.0,
    "benchmarks": {
      "terminalBench": 53.9,
      "sciCode": 39.9,
      "intelligenceIndex": 38.3
    },
    "notes": "Importado automáticamente del Artificial Analysis Intelligence Index (Score 67.5). Precios aproximados; verifica en la web oficial del proveedor."
  },
  {
    "id": "gemini-3-5-flash-lite",
    "iiSlug": "gemini-3-5-flash-lite",
    "company": "Google",
    "origin": "US",
    "displayName": "Gemini 3.5 Flash-Lite",
    "kind": "model",
    "category": [
      "coding",
      "reasoning",
      "budget"
    ],
    "context": null,
    "pricing": {
      "inputPer1M": 0.3,
      "outputPer1M": 2.5,
      "approx": true
    },
    "modalities": [
      "text"
    ],
    "openWeight": false,
    "releaseDate": "2026-07-21",
    "benchmarks": {
      "terminalBench": 53.6,
      "sciCode": 40.9,
      "intelligenceIndex": 37.4
    },
    "notes": "Importado automáticamente del Artificial Analysis Intelligence Index (Score 67.2). Precios aproximados; verifica en la web oficial del proveedor."
  },
  {
    "id": "muse-glimmer",
    "iiSlug": "muse-glimmer",
    "company": "Meta",
    "origin": "Open",
    "displayName": "Muse Glimmer (high)",
    "kind": "model",
    "category": [
      "coding",
      "reasoning",
      "budget"
    ],
    "context": null,
    "pricing": {
      "inputPer1M": 0.325,
      "outputPer1M": 1.35,
      "approx": true
    },
    "modalities": [
      "text"
    ],
    "openWeight": true,
    "releaseDate": "2026-08-10",
    "parameters": 30.0,
    "benchmarks": {
      "terminalBench": 51.7,
      "sciCode": 43.6,
      "intelligenceIndex": 35.1
    },
    "notes": "Importado automáticamente del Artificial Analysis Intelligence Index (Score 66.0). Precios aproximados; verifica en la web oficial del proveedor."
  },
  {
    "id": "solar-open2-250b",
    "iiSlug": "solar-open2-250b",
    "company": "Upstage",
    "origin": "US",
    "displayName": "Solar Open2 250B",
    "kind": "model",
    "category": [
      "coding",
      "reasoning"
    ],
    "context": null,
    "pricing": {
      "inputPer1M": null,
      "outputPer1M": null,
      "approx": true
    },
    "modalities": [
      "text"
    ],
    "openWeight": true,
    "releaseDate": "2026-08-12",
    "parameters": 250.0,
    "benchmarks": {
      "terminalBench": 44.2,
      "sciCode": 45.6,
      "intelligenceIndex": 37.4
    },
    "notes": "Importado automáticamente del Artificial Analysis Intelligence Index (Score 63.5). Precios aproximados; verifica en la web oficial del proveedor."
  },
  {
    "id": "mistral-medium-3-5",
    "iiSlug": "mistral-medium-3-5",
    "company": "Mistral",
    "origin": "EU",
    "displayName": "Mistral Medium 3.5",
    "kind": "model",
    "category": [
      "coding",
      "reasoning"
    ],
    "context": 262144,
    "pricing": {
      "inputPer1M": 1.5,
      "outputPer1M": 7.5,
      "approx": true
    },
    "modalities": [
      "image",
      "text"
    ],
    "openWeight": true,
    "releaseDate": "2026-04-29",
    "parameters": 128.0,
    "benchmarks": {
      "terminalBench": 50.6,
      "sciCode": 39.6,
      "intelligenceIndex": 30.4
    },
    "notes": "Importado automáticamente del Artificial Analysis Intelligence Index (Score 61.4). Precios aproximados; verifica en la web oficial del proveedor."
  },
  {
    "id": "claude-4-5-haiku-reasoning",
    "iiSlug": "claude-4-5-haiku-reasoning",
    "company": "Anthropic",
    "origin": "US",
    "displayName": "Claude 4.5 Haiku (Reasoning)",
    "kind": "model",
    "category": [
      "coding",
      "reasoning"
    ],
    "context": null,
    "pricing": {
      "inputPer1M": 1.0,
      "outputPer1M": 5.0,
      "approx": true
    },
    "modalities": [
      "text"
    ],
    "openWeight": false,
    "releaseDate": "2025-10-15",
    "benchmarks": {
      "liveCodeBench": 0.6,
      "terminalBench": 44.2,
      "sciCode": 43.3,
      "intelligenceIndex": 29.9
    },
    "notes": "Importado automáticamente del Artificial Analysis Intelligence Index (Score 58.8). Precios aproximados; verifica en la web oficial del proveedor."
  },
  {
    "id": "a-x-k2",
    "iiSlug": "a-x-k2",
    "company": "SKTelecom",
    "origin": "US",
    "displayName": "A.X-K2",
    "kind": "model",
    "category": [
      "coding",
      "reasoning"
    ],
    "context": null,
    "pricing": {
      "inputPer1M": null,
      "outputPer1M": null,
      "approx": true
    },
    "modalities": [
      "text"
    ],
    "openWeight": true,
    "releaseDate": "2026-08-12",
    "parameters": 692.0,
    "benchmarks": {
      "terminalBench": 39.0,
      "sciCode": 38.5,
      "intelligenceIndex": 35.0
    },
    "notes": "Importado automáticamente del Artificial Analysis Intelligence Index (Score 56.3). Precios aproximados; verifica en la web oficial del proveedor."
  },
  {
    "id": "k-exaone-2-0-0803",
    "iiSlug": "k-exaone-2-0-0803",
    "company": "LGAIResearch",
    "origin": "US",
    "displayName": "K-EXAONE 2.0",
    "kind": "model",
    "category": [
      "coding",
      "reasoning"
    ],
    "context": null,
    "pricing": {
      "inputPer1M": null,
      "outputPer1M": null,
      "approx": true
    },
    "modalities": [
      "text"
    ],
    "openWeight": true,
    "releaseDate": "2026-08-12",
    "parameters": 750.0,
    "benchmarks": {
      "terminalBench": 40.4,
      "sciCode": 41.0,
      "intelligenceIndex": 31.0
    },
    "notes": "Importado automáticamente del Artificial Analysis Intelligence Index (Score 56.2). Precios aproximados; verifica en la web oficial del proveedor."
  },
  {
    "id": "gpt-oss-120b",
    "iiSlug": "gpt-oss-120b",
    "company": "OpenAI",
    "origin": "US",
    "displayName": "gpt-oss-120b (high)",
    "kind": "model",
    "category": [
      "coding",
      "reasoning",
      "budget"
    ],
    "context": 131072,
    "pricing": {
      "inputPer1M": 0.03,
      "outputPer1M": 0.17,
      "approx": true
    },
    "modalities": [
      "text"
    ],
    "openWeight": true,
    "releaseDate": "2025-08-05",
    "parameters": 117.0,
    "benchmarks": {
      "liveCodeBench": 0.9,
      "terminalBench": 26.2,
      "sciCode": 38.9,
      "intelligenceIndex": 24.1,
      "designArenaElo": 984.0
    },
    "notes": "Importado automáticamente del Artificial Analysis Intelligence Index (Score 43.3). Precios aproximados; verifica en la web oficial del proveedor."
  },
  {
    "id": "command-a-plus",
    "iiSlug": "command-a-plus",
    "company": "Cohere",
    "origin": "US",
    "displayName": "Command A+",
    "kind": "model",
    "category": [
      "coding",
      "reasoning",
      "budget"
    ],
    "context": null,
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "modalities": [
      "text"
    ],
    "openWeight": true,
    "releaseDate": "2026-05-20",
    "parameters": 218.0,
    "benchmarks": {
      "terminalBench": 22.8,
      "sciCode": 37.8,
      "intelligenceIndex": 22.8
    },
    "notes": "Importado automáticamente del Artificial Analysis Intelligence Index (Score 40.2). Precios aproximados; verifica en la web oficial del proveedor."
  },
  {
    "id": "nemotron-3-5-lightning",
    "iiSlug": "nemotron-3-5-lightning",
    "company": "NVIDIA",
    "origin": "US",
    "displayName": "Nemotron 3.5 Lightning",
    "kind": "model",
    "category": [
      "coding",
      "reasoning",
      "budget"
    ],
    "context": null,
    "pricing": {
      "inputPer1M": 0.07,
      "outputPer1M": 0.22,
      "approx": true
    },
    "modalities": [
      "text"
    ],
    "openWeight": true,
    "releaseDate": "2026-08-11",
    "parameters": 31.6,
    "benchmarks": {
      "terminalBench": 24.3,
      "sciCode": 31.6,
      "intelligenceIndex": 23.6
    },
    "notes": "Importado automáticamente del Artificial Analysis Intelligence Index (Score 39.0). Precios aproximados; verifica en la web oficial del proveedor."
  }
];

export const autoSpecs: Record<string, AutoSpec> = {
  "claude-opus-5": {
    "pricing": {
      "inputPer1M": 2.5,
      "outputPer1M": 12.5,
      "approx": true
    },
    "context": 1000000,
    "benchmarks": {
      "terminalBench": 89.1,
      "sciCode": 55.7,
      "intelligenceIndex": 63.1,
      "designArenaElo": 1361.1
    },
    "releaseDate": "2026-07-24"
  },
  "claude-opus-5-xhigh": {
    "pricing": {
      "inputPer1M": 5.0,
      "outputPer1M": 25.0,
      "approx": true
    },
    "benchmarks": {
      "terminalBench": 88.0,
      "sciCode": 55.0,
      "intelligenceIndex": 62.5
    },
    "releaseDate": "2026-07-24"
  },
  "claude-fable-5": {
    "pricing": {
      "inputPer1M": 5.0,
      "outputPer1M": 25.0,
      "approx": true
    },
    "context": 1000000,
    "benchmarks": {
      "terminalBench": 84.6,
      "sciCode": 60.2,
      "intelligenceIndex": 62.1,
      "designArenaElo": 1346.4
    },
    "releaseDate": "2026-06-09"
  },
  "claude-opus-5-high": {
    "pricing": {
      "inputPer1M": 5.0,
      "outputPer1M": 25.0,
      "approx": true
    },
    "benchmarks": {
      "terminalBench": 87.6,
      "sciCode": 54.3,
      "intelligenceIndex": 61.5
    },
    "releaseDate": "2026-07-24"
  },
  "gpt-5-6-sol": {
    "pricing": {
      "inputPer1M": 4.0,
      "outputPer1M": 20.0,
      "approx": true
    },
    "benchmarks": {
      "terminalBench": 88.0,
      "sciCode": 56.1,
      "intelligenceIndex": 60.9
    },
    "releaseDate": "2026-07-09"
  },
  "grok-4-6": {
    "pricing": {
      "inputPer1M": 2.0,
      "outputPer1M": 6.0,
      "approx": true
    },
    "benchmarks": {
      "terminalBench": 88.4,
      "sciCode": 53.6,
      "intelligenceIndex": 60.9
    },
    "releaseDate": "2026-08-12"
  },
  "kimi-k3": {
    "pricing": {
      "inputPer1M": 3.0,
      "outputPer1M": 15.0,
      "approx": true
    },
    "context": 1048576,
    "benchmarks": {
      "terminalBench": 85.0,
      "sciCode": 58.7,
      "intelligenceIndex": 59.7,
      "designArenaElo": 1394.1
    },
    "parameters": 2800.0,
    "releaseDate": "2026-07-16"
  },
  "glm-5-3": {
    "pricing": {
      "inputPer1M": 1.4,
      "outputPer1M": 4.4,
      "approx": true
    },
    "benchmarks": {
      "terminalBench": 83.9,
      "sciCode": 56.5,
      "intelligenceIndex": 59.5
    },
    "parameters": 753.0,
    "releaseDate": "2026-08-18"
  },
  "qwen3-8-2-4t-a95b": {
    "pricing": {
      "inputPer1M": 2.0,
      "outputPer1M": 6.0,
      "approx": true
    },
    "benchmarks": {
      "terminalBench": 82.0,
      "sciCode": 51.6,
      "intelligenceIndex": 57.7
    },
    "parameters": 2400.0,
    "releaseDate": "2026-08-12"
  },
  "glm-5-3-flash": {
    "pricing": {
      "inputPer1M": 0.15,
      "outputPer1M": 0.5,
      "approx": true
    },
    "benchmarks": {
      "terminalBench": 84.3,
      "sciCode": 46.1,
      "intelligenceIndex": 57.5
    },
    "parameters": 320.0,
    "releaseDate": "2026-08-26"
  },
  "muse-spark-1-2": {
    "pricing": {
      "inputPer1M": 1.25,
      "outputPer1M": 4.25,
      "approx": true
    },
    "benchmarks": {
      "terminalBench": 80.1,
      "sciCode": 56.4,
      "intelligenceIndex": 56.8
    },
    "releaseDate": "2026-08-05"
  },
  "gpt-5-6-terra": {
    "pricing": {
      "inputPer1M": 2.0,
      "outputPer1M": 12.0,
      "approx": true
    },
    "benchmarks": {
      "terminalBench": 88.0,
      "sciCode": 53.9,
      "intelligenceIndex": 56.6
    },
    "releaseDate": "2026-07-09"
  },
  "gemini-3-7-flash": {
    "pricing": {
      "inputPer1M": 0.75,
      "outputPer1M": 3.75,
      "approx": true
    },
    "benchmarks": {
      "terminalBench": 85.8,
      "sciCode": 56.8,
      "intelligenceIndex": 56.0
    },
    "releaseDate": "2026-08-13"
  },
  "deepseek-v4-pro": {
    "pricing": {
      "inputPer1M": 0.66,
      "outputPer1M": 1.98,
      "approx": true
    },
    "context": 1048576,
    "benchmarks": {
      "terminalBench": 78.7,
      "sciCode": 49.2,
      "intelligenceIndex": 53.2,
      "designArenaElo": 1239.4
    },
    "parameters": 1600.0,
    "releaseDate": "2026-08-13"
  },
  "gpt-5-6-luna": {
    "pricing": {
      "inputPer1M": 0.2,
      "outputPer1M": 1.2,
      "approx": true
    },
    "benchmarks": {
      "terminalBench": 80.9,
      "sciCode": 52.5,
      "intelligenceIndex": 52.3
    },
    "releaseDate": "2026-07-09"
  },
  "qwen3-8-27b": {
    "pricing": {
      "inputPer1M": 0.5,
      "outputPer1M": 3.0,
      "approx": true
    },
    "benchmarks": {
      "terminalBench": 79.8,
      "sciCode": 44.7,
      "intelligenceIndex": 52.0
    },
    "parameters": 27.0,
    "releaseDate": "2026-08-14"
  },
  "motif-3": {
    "benchmarks": {
      "terminalBench": 74.9,
      "sciCode": 40.6,
      "intelligenceIndex": 47.4
    },
    "parameters": 314.0,
    "releaseDate": "2026-08-12"
  },
  "minimax-m3": {
    "pricing": {
      "inputPer1M": 0.15,
      "outputPer1M": 0.6,
      "approx": true
    },
    "context": 524288,
    "benchmarks": {
      "terminalBench": 65.2,
      "sciCode": 45.4,
      "intelligenceIndex": 45.4,
      "designArenaElo": 1247.6
    },
    "parameters": 428.0,
    "releaseDate": "2026-06-01"
  },
  "inkling": {
    "pricing": {
      "inputPer1M": 0.5,
      "outputPer1M": 2.025,
      "approx": true
    },
    "context": 524288,
    "benchmarks": {
      "terminalBench": 55.1,
      "sciCode": 46.1,
      "intelligenceIndex": 42.3,
      "designArenaElo": 1208.0
    },
    "parameters": 975.0,
    "releaseDate": "2026-07-15"
  },
  "nvidia-nemotron-3-ultra-550b-a55b": {
    "pricing": {
      "inputPer1M": 0.6,
      "outputPer1M": 2.75,
      "approx": true
    },
    "benchmarks": {
      "terminalBench": 53.9,
      "sciCode": 39.9,
      "intelligenceIndex": 38.3
    },
    "parameters": 550.0,
    "releaseDate": "2026-06-04"
  },
  "gemini-3-5-flash-lite": {
    "pricing": {
      "inputPer1M": 0.3,
      "outputPer1M": 2.5,
      "approx": true
    },
    "benchmarks": {
      "terminalBench": 53.6,
      "sciCode": 40.9,
      "intelligenceIndex": 37.4
    },
    "releaseDate": "2026-07-21"
  },
  "solar-open2-250b": {
    "benchmarks": {
      "terminalBench": 44.2,
      "sciCode": 45.6,
      "intelligenceIndex": 37.4
    },
    "parameters": 250.0,
    "releaseDate": "2026-08-12"
  },
  "muse-glimmer": {
    "pricing": {
      "inputPer1M": 0.325,
      "outputPer1M": 1.35,
      "approx": true
    },
    "benchmarks": {
      "terminalBench": 51.7,
      "sciCode": 43.6,
      "intelligenceIndex": 35.1
    },
    "parameters": 30.0,
    "releaseDate": "2026-08-10"
  },
  "a-x-k2": {
    "benchmarks": {
      "terminalBench": 39.0,
      "sciCode": 38.5,
      "intelligenceIndex": 35.0
    },
    "parameters": 692.0,
    "releaseDate": "2026-08-12"
  },
  "k-exaone-2-0-0803": {
    "benchmarks": {
      "terminalBench": 40.4,
      "sciCode": 41.0,
      "intelligenceIndex": 31.0
    },
    "parameters": 750.0,
    "releaseDate": "2026-08-12"
  },
  "mistral-medium-3-5": {
    "pricing": {
      "inputPer1M": 1.5,
      "outputPer1M": 7.5,
      "approx": true
    },
    "context": 262144,
    "benchmarks": {
      "terminalBench": 50.6,
      "sciCode": 39.6,
      "intelligenceIndex": 30.4
    },
    "parameters": 128.0,
    "releaseDate": "2026-04-29"
  },
  "claude-4-5-haiku-reasoning": {
    "pricing": {
      "inputPer1M": 1.0,
      "outputPer1M": 5.0,
      "approx": true
    },
    "benchmarks": {
      "liveCodeBench": 0.6,
      "terminalBench": 44.2,
      "sciCode": 43.3,
      "intelligenceIndex": 29.9
    },
    "releaseDate": "2025-10-15"
  },
  "gpt-oss-120b": {
    "pricing": {
      "inputPer1M": 0.03,
      "outputPer1M": 0.17,
      "approx": true
    },
    "context": 131072,
    "benchmarks": {
      "liveCodeBench": 0.9,
      "terminalBench": 26.2,
      "sciCode": 38.9,
      "intelligenceIndex": 24.1,
      "designArenaElo": 984.0
    },
    "parameters": 117.0,
    "releaseDate": "2025-08-05"
  },
  "nemotron-3-5-lightning": {
    "pricing": {
      "inputPer1M": 0.07,
      "outputPer1M": 0.22,
      "approx": true
    },
    "benchmarks": {
      "terminalBench": 24.3,
      "sciCode": 31.6,
      "intelligenceIndex": 23.6
    },
    "parameters": 31.6,
    "releaseDate": "2026-08-11"
  },
  "command-a-plus": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "benchmarks": {
      "terminalBench": 22.8,
      "sciCode": 37.8,
      "intelligenceIndex": 22.8
    },
    "parameters": 218.0,
    "releaseDate": "2026-05-20"
  },
  "claude-opus-5-medium": {
    "releaseDate": "2026-07-24"
  },
  "claude-opus-4-8": {
    "releaseDate": "2026-05-28"
  },
  "claude-sonnet-5": {
    "pricing": {
      "inputPer1M": 1.0,
      "outputPer1M": 5.0,
      "approx": true
    },
    "context": 1000000,
    "benchmarks": {
      "designArenaElo": 1282.5
    },
    "releaseDate": "2026-06-30"
  },
  "claude-opus-4-7": {
    "releaseDate": "2026-04-16"
  },
  "claude-opus-5-low": {
    "releaseDate": "2026-07-24"
  },
  "claude-sonnet-4-6-adaptive": {
    "releaseDate": "2026-02-17"
  },
  "claude-opus-4-6-adaptive": {
    "releaseDate": "2026-02-05"
  },
  "claude-opus-4-7-non-reasoning": {
    "releaseDate": "2026-04-16"
  },
  "claude-sonnet-5-non-reasoning": {
    "releaseDate": "2026-06-30"
  },
  "claude-opus-4-5-thinking": {
    "releaseDate": "2025-11-24"
  },
  "claude-opus-4-6": {
    "releaseDate": "2026-02-05"
  },
  "claude-4-5-sonnet-thinking": {
    "releaseDate": "2025-09-29"
  },
  "claude-sonnet-4-6": {
    "releaseDate": "2026-02-17"
  },
  "claude-opus-4-5": {
    "releaseDate": "2025-11-24"
  },
  "claude-sonnet-4-6-non-reasoning-low-effort": {
    "releaseDate": "2026-02-17"
  },
  "claude-4-1-opus-thinking": {
    "releaseDate": "2025-08-05"
  },
  "claude-4-opus-thinking": {
    "releaseDate": "2025-05-22"
  },
  "claude-4-5-sonnet": {
    "releaseDate": "2025-09-29"
  },
  "claude-4-sonnet-thinking": {
    "releaseDate": "2025-05-22"
  },
  "claude-4-1-opus": {
    "releaseDate": "2025-08-05"
  },
  "claude-3-7-sonnet-thinking": {
    "releaseDate": "2025-02-24"
  },
  "claude-4-opus": {
    "releaseDate": "2025-05-22"
  },
  "claude-4-sonnet": {
    "releaseDate": "2025-05-22"
  },
  "claude-4-5-haiku": {
    "releaseDate": "2025-10-15"
  },
  "claude-3-7-sonnet": {
    "releaseDate": "2025-02-24"
  },
  "claude-3-5-haiku": {
    "releaseDate": "2024-10-22"
  },
  "claude-3-opus": {
    "releaseDate": "2024-03-04"
  },
  "claude-35-sonnet": {
    "releaseDate": "2024-10-22"
  },
  "claude-35-sonnet-june-24": {
    "releaseDate": "2024-06-21"
  },
  "claude-3-sonnet": {
    "releaseDate": "2024-03-04"
  },
  "claude-21": {
    "releaseDate": "2023-11-21"
  },
  "claude-3-haiku": {
    "pricing": {
      "inputPer1M": 0.25,
      "outputPer1M": 1.25,
      "approx": true
    },
    "context": 200000,
    "releaseDate": "2024-03-04"
  },
  "claude-2": {
    "releaseDate": "2023-07-11"
  },
  "claude-instant": {
    "releaseDate": "2023-03-14"
  },
  "claude-sonnet-5-medium": {
    "releaseDate": "2026-06-30"
  },
  "claude-sonnet-5-high": {
    "releaseDate": "2026-06-30"
  },
  "claude-sonnet-5-xhigh": {
    "releaseDate": "2026-06-30"
  },
  "claude-sonnet-5-low": {
    "releaseDate": "2026-06-30"
  },
  "gpt-5-6-sol-xhigh": {
    "releaseDate": "2026-07-09"
  },
  "gpt-5-6-sol-high": {
    "releaseDate": "2026-07-09"
  },
  "gpt-5-5": {
    "releaseDate": "2026-04-23"
  },
  "gpt-5-6-sol-medium": {
    "releaseDate": "2026-07-09"
  },
  "gpt-5-5-high": {
    "releaseDate": "2026-04-23"
  },
  "gpt-5-4": {
    "releaseDate": "2026-03-05"
  },
  "gpt-5-6-terra-xhigh": {
    "releaseDate": "2026-07-09"
  },
  "gpt-5-5-medium": {
    "releaseDate": "2026-04-23"
  },
  "gpt-5-6-sol-low": {
    "releaseDate": "2026-07-09"
  },
  "gpt-5-6-terra-high": {
    "releaseDate": "2026-07-09"
  },
  "gpt-5-6-luna-xhigh": {
    "releaseDate": "2026-07-09"
  },
  "gpt-5-6-luna-high": {
    "releaseDate": "2026-07-09"
  },
  "gpt-5-6-terra-medium": {
    "releaseDate": "2026-07-09"
  },
  "gpt-5-3-codex": {
    "releaseDate": "2026-02-05"
  },
  "gpt-5-5-low": {
    "releaseDate": "2026-04-23"
  },
  "gpt-5-2": {
    "releaseDate": "2025-12-11"
  },
  "gpt-5-6-sol-non-reasoning": {
    "releaseDate": "2026-07-09"
  },
  "gpt-5-6-terra-low": {
    "releaseDate": "2026-07-09"
  },
  "gpt-5-2-codex": {
    "releaseDate": "2025-12-11"
  },
  "gpt-5-4-mini": {
    "releaseDate": "2026-03-17"
  },
  "gpt-5-4-low": {
    "releaseDate": "2026-03-05"
  },
  "gpt-5-4-nano": {
    "releaseDate": "2026-03-17"
  },
  "gpt-5-2-medium": {
    "releaseDate": "2025-12-11"
  },
  "gpt-5-6-luna-medium": {
    "releaseDate": "2026-07-09"
  },
  "gpt-5-1": {
    "releaseDate": "2025-11-13"
  },
  "gpt-5-codex": {
    "pricing": {
      "inputPer1M": 0.625,
      "outputPer1M": 5.0,
      "approx": true
    },
    "context": 400000,
    "releaseDate": "2025-09-23"
  },
  "gpt-5-5-non-reasoning": {
    "releaseDate": "2026-04-23"
  },
  "gpt-5-1-codex": {
    "releaseDate": "2025-11-13"
  },
  "gpt-5": {
    "pricing": {
      "inputPer1M": 0.625,
      "outputPer1M": 5.0,
      "approx": true
    },
    "context": 400000,
    "benchmarks": {
      "designArenaElo": 1194.0
    },
    "releaseDate": "2025-08-07"
  },
  "gpt-5-6-terra-non-reasoning": {
    "releaseDate": "2026-07-09"
  },
  "gpt-5-medium": {
    "releaseDate": "2025-08-07"
  },
  "gpt-5-5-instant-05-26": {
    "releaseDate": "2026-05-05"
  },
  "gpt-5-6-luna-low": {
    "releaseDate": "2026-07-09"
  },
  "o3-pro": {
    "pricing": {
      "inputPer1M": 10.0,
      "outputPer1M": 40.0,
      "approx": true
    },
    "context": 200000,
    "releaseDate": "2025-06-10"
  },
  "gpt-5-low": {
    "releaseDate": "2025-08-07"
  },
  "gpt-5-mini-medium": {
    "releaseDate": "2025-08-07"
  },
  "gpt-5-1-codex-mini": {
    "releaseDate": "2025-11-13"
  },
  "o3": {
    "pricing": {
      "inputPer1M": 1.0,
      "outputPer1M": 4.0,
      "approx": true
    },
    "context": 200000,
    "benchmarks": {
      "designArenaElo": 1080.6
    },
    "releaseDate": "2025-04-16"
  },
  "gpt-5-4-nano-medium": {
    "releaseDate": "2026-03-17"
  },
  "gpt-5-4-mini-medium": {
    "releaseDate": "2026-03-17"
  },
  "gpt-5-5-instant-06-26": {
    "releaseDate": "2026-06-25"
  },
  "gpt-5-4-non-reasoning": {
    "releaseDate": "2026-03-05"
  },
  "gpt-5-6-luna-non-reasoning": {
    "releaseDate": "2026-07-09"
  },
  "gpt-5-2-non-reasoning": {
    "releaseDate": "2025-12-11"
  },
  "o4-mini": {
    "pricing": {
      "inputPer1M": 0.55,
      "outputPer1M": 2.2,
      "approx": true
    },
    "context": 200000,
    "benchmarks": {
      "designArenaElo": 993.0
    },
    "releaseDate": "2025-04-16"
  },
  "gpt-5-mini": {
    "pricing": {
      "inputPer1M": 0.125,
      "outputPer1M": 1.0,
      "approx": true
    },
    "context": 400000,
    "benchmarks": {
      "designArenaElo": 1135.8
    },
    "releaseDate": "2025-08-07"
  },
  "o1": {
    "pricing": {
      "inputPer1M": 7.5,
      "outputPer1M": 30.0,
      "approx": true
    },
    "context": 200000,
    "releaseDate": "2024-12-05"
  },
  "gpt-5-1-non-reasoning": {
    "releaseDate": "2025-11-13"
  },
  "gpt-5-nano": {
    "pricing": {
      "inputPer1M": 0.025,
      "outputPer1M": 0.2,
      "approx": true
    },
    "context": 400000,
    "benchmarks": {
      "designArenaElo": 1080.8
    },
    "releaseDate": "2025-08-07"
  },
  "gpt-4-1": {
    "releaseDate": "2025-04-14"
  },
  "gpt-5-nano-medium": {
    "releaseDate": "2025-08-07"
  },
  "o3-mini": {
    "pricing": {
      "inputPer1M": 0.55,
      "outputPer1M": 2.2,
      "approx": true
    },
    "context": 200000,
    "releaseDate": "2025-01-31"
  },
  "o1-pro": {
    "pricing": {
      "inputPer1M": 75.0,
      "outputPer1M": 300.0,
      "approx": true
    },
    "context": 200000,
    "releaseDate": "2025-03-19"
  },
  "gpt-5-4-nano-non-reasoning": {
    "releaseDate": "2026-03-17"
  },
  "gpt-5-minimal": {
    "releaseDate": "2025-08-07"
  },
  "o1-preview": {
    "releaseDate": "2024-09-12"
  },
  "gpt-5-4-mini-non-reasoning": {
    "releaseDate": "2026-03-17"
  },
  "o3-mini-high": {
    "pricing": {
      "inputPer1M": 0.55,
      "outputPer1M": 2.2,
      "approx": true
    },
    "context": 200000,
    "releaseDate": "2025-01-31"
  },
  "gpt-5-chatgpt": {
    "releaseDate": "2025-08-07"
  },
  "gpt-oss-20b": {
    "pricing": {
      "inputPer1M": 0.03,
      "outputPer1M": 0.13,
      "approx": true
    },
    "context": 131072,
    "benchmarks": {
      "designArenaElo": 908.0
    },
    "releaseDate": "2025-08-05"
  },
  "gpt-oss-120b-low": {
    "releaseDate": "2025-08-05"
  },
  "gpt-4-1-mini": {
    "releaseDate": "2025-04-14"
  },
  "gpt-oss-20b-low": {
    "releaseDate": "2025-08-05"
  },
  "gpt-5-mini-minimal": {
    "releaseDate": "2025-08-07"
  },
  "o1-mini": {
    "releaseDate": "2024-09-12"
  },
  "gpt-4-5": {
    "releaseDate": "2025-02-27"
  },
  "gpt-4o-chatgpt-03-25": {
    "releaseDate": "2025-03-27"
  },
  "gpt-4o": {
    "pricing": {
      "inputPer1M": 1.25,
      "outputPer1M": 5.0,
      "approx": true
    },
    "context": 128000,
    "benchmarks": {
      "designArenaElo": 895.7
    },
    "releaseDate": "2024-11-20"
  },
  "gpt-4-1-nano": {
    "releaseDate": "2025-04-14"
  },
  "gpt-4o-2024-08-06": {
    "pricing": {
      "inputPer1M": 2.5,
      "outputPer1M": 10.0,
      "approx": true
    },
    "context": 128000,
    "releaseDate": "2024-08-06"
  },
  "gpt-4o-2024-05-13": {
    "pricing": {
      "inputPer1M": 5.0,
      "outputPer1M": 15.0,
      "approx": true
    },
    "context": 128000,
    "releaseDate": "2024-05-13"
  },
  "gpt-4o-chatgpt": {
    "releaseDate": "2025-02-15"
  },
  "gpt-5-nano-minimal": {
    "releaseDate": "2025-08-07"
  },
  "gpt-4-turbo": {
    "pricing": {
      "inputPer1M": 5.0,
      "outputPer1M": 15.0,
      "approx": true
    },
    "context": 128000,
    "releaseDate": "2023-11-06"
  },
  "gpt-4": {
    "pricing": {
      "inputPer1M": 30.0,
      "outputPer1M": 60.0,
      "approx": true
    },
    "context": 8191,
    "releaseDate": "2023-03-14"
  },
  "gpt-4o-mini": {
    "pricing": {
      "inputPer1M": 0.075,
      "outputPer1M": 0.3,
      "approx": true
    },
    "context": 128000,
    "releaseDate": "2024-07-18"
  },
  "gpt-35-turbo": {
    "releaseDate": "2022-11-30"
  },
  "gpt-5-5-pro": {
    "releaseDate": "2026-04-23"
  },
  "gpt-5-4-pro": {
    "releaseDate": "2026-03-05"
  },
  "gpt-4o-mini-realtime-dec-2024": {
    "releaseDate": "2024-12-17"
  },
  "gpt-4o-realtime-dec-2024": {
    "releaseDate": "2024-12-17"
  },
  "gpt-3-5-turbo-0613": {
    "releaseDate": "2023-06-13"
  },
  "grok-4-6-xhigh": {
    "releaseDate": "2026-08-12"
  },
  "grok-4-6-medium": {
    "releaseDate": "2026-08-12"
  },
  "grok-4-5": {
    "releaseDate": "2026-07-08"
  },
  "grok-4-6-low": {
    "releaseDate": "2026-08-12"
  },
  "grok-build-0-1-06-16": {
    "releaseDate": "2026-06-16"
  },
  "grok-4-20": {
    "releaseDate": "2026-04-07"
  },
  "grok-4-3": {
    "releaseDate": "2026-04-30"
  },
  "grok-4-20-0309": {
    "releaseDate": "2026-03-10"
  },
  "grok-4-3-medium": {
    "releaseDate": "2026-04-30"
  },
  "grok-4-3-low": {
    "releaseDate": "2026-04-30"
  },
  "grok-4": {
    "releaseDate": "2025-07-10"
  },
  "grok-4-1-fast-reasoning": {
    "releaseDate": "2025-11-19"
  },
  "grok-4-fast-reasoning": {
    "releaseDate": "2025-09-19"
  },
  "grok-4-3-non-reasoning": {
    "releaseDate": "2026-04-30"
  },
  "grok-3-mini-reasoning": {
    "releaseDate": "2025-02-19"
  },
  "grok-4-20-0309-non-reasoning": {
    "releaseDate": "2026-03-10"
  },
  "grok-4-20-non-reasoning": {
    "releaseDate": "2026-04-07"
  },
  "grok-code-fast-1": {
    "releaseDate": "2025-08-28"
  },
  "grok-3": {
    "releaseDate": "2025-02-19"
  },
  "grok-4-1-fast": {
    "releaseDate": "2025-11-19"
  },
  "grok-4-fast": {
    "releaseDate": "2025-09-19"
  },
  "grok-3-reasoning": {
    "releaseDate": "2025-02-19"
  },
  "grok-2-1212": {
    "releaseDate": "2024-12-12"
  },
  "grok-beta": {
    "releaseDate": "2024-08-13"
  },
  "grok-1": {
    "releaseDate": "2024-03-17"
  },
  "kimi-k3-low": {
    "releaseDate": "2026-07-16"
  },
  "kimi-k2-6": {
    "releaseDate": "2026-04-20"
  },
  "kimi-k2-7-code": {
    "releaseDate": "2026-06-12"
  },
  "kimi-k2-5": {
    "releaseDate": "2026-01-27"
  },
  "kimi-k2-6-non-reasoning": {
    "releaseDate": "2026-04-20"
  },
  "kimi-k2-thinking": {
    "pricing": {
      "inputPer1M": 0.6,
      "outputPer1M": 2.5,
      "approx": true
    },
    "context": 262144,
    "benchmarks": {
      "designArenaElo": 1124.0
    },
    "releaseDate": "2025-11-06"
  },
  "kimi-k2-5-non-reasoning": {
    "releaseDate": "2026-01-27"
  },
  "kimi-k2-0905": {
    "pricing": {
      "inputPer1M": 0.6,
      "outputPer1M": 2.5,
      "approx": true
    },
    "context": 262144,
    "benchmarks": {
      "designArenaElo": 1117.5
    },
    "releaseDate": "2025-09-05"
  },
  "kimi-k2": {
    "pricing": {
      "inputPer1M": 0.57,
      "outputPer1M": 2.3,
      "approx": true
    },
    "context": 131072,
    "benchmarks": {
      "designArenaElo": 1044.0
    },
    "releaseDate": "2025-07-11"
  },
  "kimi-linear-48b-a3b-instruct": {
    "releaseDate": "2025-10-30"
  },
  "glm-5-2": {
    "releaseDate": "2026-06-16"
  },
  "glm-5-1": {
    "releaseDate": "2026-04-07"
  },
  "glm-5": {
    "pricing": {
      "inputPer1M": 0.6,
      "outputPer1M": 1.92,
      "approx": true
    },
    "context": 204800,
    "benchmarks": {
      "designArenaElo": 1246.8
    },
    "releaseDate": "2026-02-11"
  },
  "glm-5-turbo": {
    "pricing": {
      "inputPer1M": 1.2,
      "outputPer1M": 4.0,
      "approx": true
    },
    "context": 202752,
    "benchmarks": {
      "designArenaElo": 1270.4
    },
    "releaseDate": "2026-03-15"
  },
  "glm-5-1-non-reasoning": {
    "releaseDate": "2026-04-07"
  },
  "glm-5v-turbo": {
    "pricing": {
      "inputPer1M": 1.2,
      "outputPer1M": 4.0,
      "approx": true
    },
    "context": 202752,
    "benchmarks": {
      "designArenaElo": 1223.9
    },
    "releaseDate": "2026-04-01"
  },
  "glm-5-2-non-reasoning": {
    "releaseDate": "2026-06-16"
  },
  "glm-4-7": {
    "releaseDate": "2025-12-22"
  },
  "glm-5-non-reasoning": {
    "releaseDate": "2026-02-11"
  },
  "glm-4-6-reasoning": {
    "releaseDate": "2025-09-30"
  },
  "glm-4-7-non-reasoning": {
    "releaseDate": "2025-12-22"
  },
  "glm-4-6": {
    "releaseDate": "2025-09-30"
  },
  "glm-4-7-flash": {
    "releaseDate": "2026-01-19"
  },
  "glm-4.5": {
    "pricing": {
      "inputPer1M": 0.6,
      "outputPer1M": 2.2,
      "approx": true
    },
    "context": 131072,
    "benchmarks": {
      "designArenaElo": 1178.6
    },
    "releaseDate": "2025-07-28"
  },
  "glm-4-6v-reasoning": {
    "releaseDate": "2025-12-08"
  },
  "glm-4-5-air": {
    "releaseDate": "2025-07-28"
  },
  "glm-4-7-flash-non-reasoning": {
    "releaseDate": "2026-01-19"
  },
  "glm-4-6v": {
    "releaseDate": "2025-12-08"
  },
  "glm-4-5v-reasoning": {
    "releaseDate": "2025-08-11"
  },
  "glm-4-5v": {
    "releaseDate": "2025-08-11"
  },
  "qwen3-8-max": {
    "releaseDate": "2026-08-03"
  },
  "qwen3-8-flash-next": {
    "releaseDate": "2026-08-26"
  },
  "qwen3-7-max": {
    "releaseDate": "2026-05-19"
  },
  "qwen3-8-27b-medium": {
    "releaseDate": "2026-08-14"
  },
  "qwen3-8-27b-low": {
    "releaseDate": "2026-08-14"
  },
  "qwen3-6-max": {
    "releaseDate": "2026-04-20"
  },
  "qwen3-6-plus": {
    "releaseDate": "2026-04-02"
  },
  "qwen3-7-plus": {
    "releaseDate": "2026-06-01"
  },
  "qwen3-6-27b": {
    "releaseDate": "2026-04-22"
  },
  "qwen3-8-27b-non-reasoning": {
    "releaseDate": "2026-08-14"
  },
  "qwen3-5-27b": {
    "releaseDate": "2026-02-24"
  },
  "qwen3-5-397b-a17b": {
    "releaseDate": "2026-02-16"
  },
  "qwen3-5-122b-a10b": {
    "releaseDate": "2026-02-24"
  },
  "qwen3-5-397b-a17b-non-reasoning": {
    "releaseDate": "2026-02-16"
  },
  "qwen3-max-thinking": {
    "pricing": {
      "inputPer1M": 0.78,
      "outputPer1M": 3.9,
      "approx": true
    },
    "context": 262144,
    "releaseDate": "2026-01-26"
  },
  "qwen3-6-35b-a3b": {
    "releaseDate": "2026-04-16"
  },
  "qwen3-5-omni-plus": {
    "releaseDate": "2026-03-30"
  },
  "qwen3-6-27b-non-reasoning": {
    "releaseDate": "2026-04-22"
  },
  "qwen3-5-27b-non-reasoning": {
    "releaseDate": "2026-02-24"
  },
  "qwen3-5-35b-a3b": {
    "releaseDate": "2026-02-24"
  },
  "qwen3-5-122b-a10b-non-reasoning": {
    "releaseDate": "2026-02-24"
  },
  "qwen3-max-thinking-preview": {
    "releaseDate": "2025-11-03"
  },
  "qwen3-6-35b-a3b-non-reasoning": {
    "releaseDate": "2026-04-16"
  },
  "qwen3-max": {
    "pricing": {
      "inputPer1M": 0.78,
      "outputPer1M": 3.9,
      "approx": true
    },
    "context": 262144,
    "benchmarks": {
      "designArenaElo": 1118.1
    },
    "releaseDate": "2025-09-23"
  },
  "qwen3-5-35b-a3b-non-reasoning": {
    "releaseDate": "2026-02-24"
  },
  "qwen3-5-9b": {
    "releaseDate": "2026-03-02"
  },
  "qwen3-coder-next": {
    "pricing": {
      "inputPer1M": 0.12,
      "outputPer1M": 0.8,
      "approx": true
    },
    "context": 262144,
    "releaseDate": "2026-02-03"
  },
  "qwen3-vl-235b-a22b-reasoning": {
    "releaseDate": "2025-09-23"
  },
  "qwen3-5-9b-non-reasoning": {
    "releaseDate": "2026-03-02"
  },
  "qwen3-5-4b": {
    "releaseDate": "2026-03-02"
  },
  "qwen3-235b-a22b-instruct-2507-reasoning": {
    "releaseDate": "2025-07-25"
  },
  "qwen3-max-preview": {
    "releaseDate": "2025-09-05"
  },
  "qwen3-5-omni-flash": {
    "releaseDate": "2026-03-30"
  },
  "qwen3-235b-a22b-instruct-2507": {
    "releaseDate": "2025-07-21"
  },
  "qwen3-coder-480b-a35b-instruct": {
    "releaseDate": "2025-07-22"
  },
  "qwen3-vl-32b-reasoning": {
    "releaseDate": "2025-10-21"
  },
  "qwen3-next-80b-a3b-reasoning": {
    "releaseDate": "2025-09-11"
  },
  "qwen3-5-4b-non-reasoning": {
    "releaseDate": "2026-03-02"
  },
  "qwen3-30b-a3b-2507-reasoning": {
    "releaseDate": "2025-07-30"
  },
  "qwen3-vl-235b-a22b-instruct": {
    "pricing": {
      "inputPer1M": 0.21,
      "outputPer1M": 1.9,
      "approx": true
    },
    "context": 262144,
    "releaseDate": "2025-09-23"
  },
  "qwen3-next-80b-a3b-instruct": {
    "pricing": {
      "inputPer1M": 0.1,
      "outputPer1M": 1.1,
      "approx": true
    },
    "context": 262144,
    "releaseDate": "2025-09-11"
  },
  "qwen3-coder-30b-a3b-instruct": {
    "pricing": {
      "inputPer1M": 0.07,
      "outputPer1M": 0.28,
      "approx": true
    },
    "context": 262144,
    "benchmarks": {
      "designArenaElo": 1091.7
    },
    "releaseDate": "2025-07-31"
  },
  "qwen3-235b-a22b-instruct-reasoning": {
    "releaseDate": "2025-04-28"
  },
  "qwq-32b": {
    "releaseDate": "2025-03-05"
  },
  "qwen3-vl-30b-a3b-reasoning": {
    "releaseDate": "2025-10-03"
  },
  "qwen3-4b-2507-instruct-reasoning": {
    "releaseDate": "2025-08-06"
  },
  "qwen3-32b-instruct-reasoning": {
    "releaseDate": "2025-04-28"
  },
  "qwen3-vl-32b-instruct": {
    "pricing": {
      "inputPer1M": 0.104,
      "outputPer1M": 0.416,
      "approx": true
    },
    "context": 131072,
    "releaseDate": "2025-10-21"
  },
  "qwen3-235b-a22b-instruct": {
    "releaseDate": "2025-04-28"
  },
  "qwen3-vl-8b-reasoning": {
    "releaseDate": "2025-10-14"
  },
  "qwen3-14b-instruct-reasoning": {
    "releaseDate": "2025-04-28"
  },
  "qwen-2-5-max": {
    "releaseDate": "2025-01-28"
  },
  "qwen3-vl-30b-a3b-instruct": {
    "pricing": {
      "inputPer1M": 0.13,
      "outputPer1M": 0.52,
      "approx": true
    },
    "context": 262144,
    "releaseDate": "2025-10-03"
  },
  "qwen3-omni-30b-a3b-reasoning": {
    "releaseDate": "2025-09-22"
  },
  "qwen2-5-72b-instruct": {
    "releaseDate": "2024-09-19"
  },
  "qwen3-30b-a3b-instruct-reasoning": {
    "releaseDate": "2025-04-28"
  },
  "QwQ-32B-Preview": {
    "releaseDate": "2024-11-27"
  },
  "qwen3-30b-a3b-2507": {
    "releaseDate": "2025-07-29"
  },
  "qwen3-32b-instruct": {
    "releaseDate": "2025-04-28"
  },
  "qwen3-8b-instruct-reasoning": {
    "releaseDate": "2025-04-28"
  },
  "qwen3-vl-8b-instruct": {
    "pricing": {
      "inputPer1M": 0.117,
      "outputPer1M": 0.455,
      "approx": true
    },
    "context": 262144,
    "releaseDate": "2025-10-14"
  },
  "qwen3-4b-instruct-reasoning": {
    "releaseDate": "2025-04-28"
  },
  "qwen3-vl-4b-reasoning": {
    "releaseDate": "2025-10-14"
  },
  "qwen3-5-2b": {
    "releaseDate": "2026-03-02"
  },
  "qwen2.5-32b-instruct": {
    "releaseDate": "2024-09-19"
  },
  "qwen3-4b-2507-instruct": {
    "releaseDate": "2025-08-06"
  },
  "qwen2-5-coder-32b-instruct": {
    "releaseDate": "2024-11-11"
  },
  "qwen3-14b-instruct": {
    "releaseDate": "2025-04-28"
  },
  "qwen3-30b-a3b-instruct": {
    "releaseDate": "2025-04-28"
  },
  "qwen3-4b-instruct": {
    "releaseDate": "2025-04-28"
  },
  "qwen-turbo": {
    "releaseDate": "2024-11-18"
  },
  "qwen2-72b-instruct": {
    "releaseDate": "2024-06-07"
  },
  "qwen3-5-2b-non-reasoning": {
    "releaseDate": "2026-03-02"
  },
  "qwen3-5-0-8b": {
    "releaseDate": "2026-03-02"
  },
  "qwen3-omni-30b-a3b-instruct": {
    "releaseDate": "2025-09-22"
  },
  "qwen3-8b-instruct": {
    "releaseDate": "2025-04-28"
  },
  "qwen2-5-coder-7b-instruct": {
    "releaseDate": "2024-09-19"
  },
  "qwen3-vl-4b-instruct": {
    "releaseDate": "2025-10-14"
  },
  "qwen1.5-110b-chat": {
    "releaseDate": "2024-04-25"
  },
  "qwen-chat-72b": {
    "releaseDate": "2023-11-30"
  },
  "qwen3-5-0-8b-non-reasoning": {
    "releaseDate": "2026-03-02"
  },
  "qwen3-1.7b-instruct-reasoning": {
    "releaseDate": "2025-04-28"
  },
  "qwen-chat-14b": {
    "releaseDate": "2023-09-25"
  },
  "qwen3-1.7b-instruct": {
    "releaseDate": "2025-04-28"
  },
  "qwen3-0.6b-instruct": {
    "releaseDate": "2025-04-28"
  },
  "qwen3-0.6b-instruct-reasoning": {
    "releaseDate": "2025-04-28"
  },
  "muse-spark-1-1": {
    "releaseDate": "2026-07-09"
  },
  "muse-spark": {
    "releaseDate": "2026-04-08"
  },
  "llama-4-maverick": {
    "pricing": {
      "inputPer1M": 0.2,
      "outputPer1M": 0.8,
      "approx": true
    },
    "context": 1048576,
    "benchmarks": {
      "designArenaElo": 905.7
    },
    "releaseDate": "2025-04-05"
  },
  "llama-4-scout": {
    "pricing": {
      "inputPer1M": 0.1,
      "outputPer1M": 0.3,
      "approx": true
    },
    "context": 1310720,
    "benchmarks": {
      "designArenaElo": 818.2
    },
    "releaseDate": "2025-04-05"
  },
  "llama-3-3-instruct-70b": {
    "releaseDate": "2024-12-06"
  },
  "llama-3-1-instruct-405b": {
    "releaseDate": "2024-07-23"
  },
  "llama-3-1-instruct-8b": {
    "releaseDate": "2024-07-23"
  },
  "llama-3-1-instruct-70b": {
    "releaseDate": "2024-07-23"
  },
  "llama-3-2-instruct-90b-vision": {
    "releaseDate": "2024-09-25"
  },
  "llama-2-chat-7b": {
    "releaseDate": "2023-07-18"
  },
  "llama-3-2-instruct-3b": {
    "releaseDate": "2024-09-25"
  },
  "llama-3-instruct-70b": {
    "releaseDate": "2024-04-18"
  },
  "llama-3-2-instruct-11b-vision": {
    "releaseDate": "2024-09-25"
  },
  "llama-2-chat-70b": {
    "releaseDate": "2023-07-18"
  },
  "llama-2-chat-13b": {
    "releaseDate": "2023-07-18"
  },
  "llama-65b": {
    "releaseDate": "2023-02-24"
  },
  "llama-3-instruct-8b": {
    "releaseDate": "2024-04-18"
  },
  "llama-3-2-instruct-1b": {
    "releaseDate": "2024-09-25"
  },
  "gemini-3-7-flash-medium": {
    "releaseDate": "2026-08-13"
  },
  "gemini-3-5-flash": {
    "releaseDate": "2026-05-19"
  },
  "gemini-3-6-flash": {
    "releaseDate": "2026-07-21"
  },
  "gemini-3-7-flash-low": {
    "releaseDate": "2026-08-13"
  },
  "gemini-3-1-pro-preview": {
    "releaseDate": "2026-02-19"
  },
  "gemini-3-5-flash-medium": {
    "releaseDate": "2026-05-19"
  },
  "gemini-3-pro": {
    "releaseDate": "2025-11-18"
  },
  "gemini-3-flash-reasoning": {
    "releaseDate": "2025-12-17"
  },
  "gemini-3-5-flash-minimal": {
    "releaseDate": "2026-05-19"
  },
  "gemini-3-pro-low": {
    "releaseDate": "2025-11-18"
  },
  "gemma-4-31b": {
    "releaseDate": "2026-04-02"
  },
  "gemini-3-flash": {
    "releaseDate": "2025-12-17"
  },
  "gemma-4-26b-a4b": {
    "releaseDate": "2026-04-02"
  },
  "gemini-2-5-pro": {
    "releaseDate": "2025-06-05"
  },
  "gemini-3-1-flash-lite-preview": {
    "releaseDate": "2026-03-03"
  },
  "gemini-2-5-flash-preview-09-2025-reasoning": {
    "releaseDate": "2025-09-25"
  },
  "gemini-2-5-pro-03-25": {
    "releaseDate": "2025-03-25"
  },
  "gemini-2-5-pro-05-06": {
    "releaseDate": "2025-05-06"
  },
  "gemma-4-31b-non-reasoning": {
    "releaseDate": "2026-04-02"
  },
  "gemma-4-12b": {
    "releaseDate": "2026-06-03"
  },
  "gemma-4-26b-a4b-non-reasoning": {
    "releaseDate": "2026-04-02"
  },
  "gemini-2-5-flash-reasoning": {
    "releaseDate": "2025-05-20"
  },
  "gemini-2-5-flash-preview-09-2025": {
    "releaseDate": "2025-09-25"
  },
  "gemini-2-5-flash-reasoning-04-2025": {
    "releaseDate": "2025-04-17"
  },
  "gemini-2-5-flash-lite-preview-09-2025-reasoning": {
    "releaseDate": "2025-09-08"
  },
  "gemini-2-5-flash": {
    "releaseDate": "2025-05-20"
  },
  "diffusiongemma-26b-a4b": {
    "releaseDate": "2026-06-10"
  },
  "gemini-2-0-flash-thinking-exp-0121": {
    "releaseDate": "2025-01-21"
  },
  "gemma-4-12b-non-reasoning": {
    "releaseDate": "2026-06-03"
  },
  "gemini-2-5-flash-lite-preview-09-2025": {
    "releaseDate": "2025-09-25"
  },
  "gemini-2-0-flash": {
    "releaseDate": "2025-02-05"
  },
  "gemma-4-e4b": {
    "releaseDate": "2026-04-03"
  },
  "gemini-2-0-pro-experimental-02-05": {
    "releaseDate": "2025-02-05"
  },
  "gemini-2-5-flash-04-2025": {
    "releaseDate": "2025-04-17"
  },
  "gemini-2-5-flash-lite-reasoning": {
    "releaseDate": "2025-06-17"
  },
  "gemini-2-0-flash-experimental": {
    "releaseDate": "2024-12-11"
  },
  "gemini-1-5-pro": {
    "releaseDate": "2024-09-24"
  },
  "gemma-4-e2b": {
    "releaseDate": "2026-04-02"
  },
  "gemma-4-e4b-non-reasoning": {
    "releaseDate": "2026-04-03"
  },
  "gemini-2-0-flash-lite-001": {
    "releaseDate": "2025-02-25"
  },
  "gemini-2-0-flash-lite-preview": {
    "releaseDate": "2025-02-05"
  },
  "gemini-1-5-flash": {
    "releaseDate": "2024-09-24"
  },
  "gemma-3-27b": {
    "releaseDate": "2025-03-12"
  },
  "gemini-2-5-flash-lite": {
    "releaseDate": "2025-06-17"
  },
  "gemini-2-0-flash-thinking-exp-1219": {
    "releaseDate": "2024-12-19"
  },
  "gemma-4-e2b-non-reasoning": {
    "releaseDate": "2026-04-02"
  },
  "gemini-1-5-pro-may-2024": {
    "releaseDate": "2024-05-15"
  },
  "gemma-3-12b": {
    "releaseDate": "2025-03-12"
  },
  "gemini-1-5-flash-8b": {
    "releaseDate": "2024-10-03"
  },
  "gemini-1-5-flash-may-2024": {
    "releaseDate": "2024-05-14"
  },
  "gemini-1-0-ultra": {
    "releaseDate": "2023-12-06"
  },
  "gemma-3n-e4b-preview-0520": {
    "releaseDate": "2025-05-20"
  },
  "palm-2": {
    "releaseDate": "2023-05-10"
  },
  "gemini-1-0-pro": {
    "releaseDate": "2023-12-06"
  },
  "gemma-3-270m": {
    "releaseDate": "2025-08-14"
  },
  "gemma-3-1b": {
    "releaseDate": "2025-03-13"
  },
  "gemma-3-4b": {
    "releaseDate": "2025-03-12"
  },
  "gemma-3n-e2b": {
    "releaseDate": "2025-06-26"
  },
  "gemma-3n-e4b": {
    "releaseDate": "2025-06-26"
  },
  "gemini-3-deep-think": {
    "releaseDate": "2026-02-05"
  },
  "deepseek-v4-flash": {
    "pricing": {
      "inputPer1M": 0.0798,
      "outputPer1M": 0.1596,
      "approx": true
    },
    "context": 1048576,
    "benchmarks": {
      "designArenaElo": 1198.5
    },
    "releaseDate": "2026-07-31"
  },
  "deepseek-v4-flash-vision": {
    "releaseDate": "2026-08-21"
  },
  "deepseek-v4-pro-0424": {
    "releaseDate": "2026-04-24"
  },
  "deepseek-v4-pro-0424-high": {
    "releaseDate": "2026-04-24"
  },
  "deepseek-v4-flash-0420": {
    "releaseDate": "2026-04-24"
  },
  "deepseek-v4-flash-0420-high": {
    "releaseDate": "2026-04-24"
  },
  "deepseek-v3-2-reasoning": {
    "releaseDate": "2025-12-01"
  },
  "deepseek-v4-pro-0424-non-reasoning": {
    "releaseDate": "2026-04-24"
  },
  "deepseek-v3-1-terminus-reasoning": {
    "releaseDate": "2025-09-22"
  },
  "deepseek-v4-flash-non-reasoning": {
    "releaseDate": "2026-04-24"
  },
  "deepseek-v3-2-reasoning-0925": {
    "releaseDate": "2025-09-29"
  },
  "deepseek-v3-2": {
    "releaseDate": "2025-12-01"
  },
  "deepseek-v3-2-speciale": {
    "releaseDate": "2025-12-01"
  },
  "deepseek-v3-1-terminus": {
    "releaseDate": "2025-09-22"
  },
  "deepseek-v3-2-0925": {
    "releaseDate": "2025-09-29"
  },
  "deepseek-v3-1": {
    "releaseDate": "2025-08-21"
  },
  "deepseek-v3-1-reasoning": {
    "releaseDate": "2025-08-21"
  },
  "deepseek-r1": {
    "pricing": {
      "inputPer1M": 0.7,
      "outputPer1M": 2.5,
      "approx": true
    },
    "context": 64000,
    "releaseDate": "2025-05-28"
  },
  "deepseek-r1-0120": {
    "releaseDate": "2025-01-20"
  },
  "deepseek-v3-0324": {
    "releaseDate": "2025-03-25"
  },
  "deepseek-v3": {
    "releaseDate": "2024-12-26"
  },
  "deepseek-r1-distill-qwen-32b": {
    "releaseDate": "2025-01-20"
  },
  "deepseek-r1-qwen3-8b": {
    "releaseDate": "2025-05-29"
  },
  "deepseek-r1-distill-llama-70b": {
    "pricing": {
      "inputPer1M": 0.8,
      "outputPer1M": 0.8,
      "approx": true
    },
    "context": 8192,
    "releaseDate": "2025-01-20"
  },
  "deepseek-r1-distill-qwen-14b": {
    "releaseDate": "2025-01-20"
  },
  "deepseek-v2-5": {
    "releaseDate": "2024-12-10"
  },
  "deepseek-v2-5-sep-2024": {
    "releaseDate": "2024-09-06"
  },
  "deepseek-r1-distill-llama-8b": {
    "releaseDate": "2025-01-20"
  },
  "deepseek-coder-v2": {
    "releaseDate": "2024-06-17"
  },
  "deepseek-r1-distill-qwen-1-5b": {
    "releaseDate": "2025-01-20"
  },
  "deepseek-v2": {
    "releaseDate": "2024-05-06"
  },
  "deepseek-coder-v2-lite": {
    "releaseDate": "2024-06-17"
  },
  "deepseek-llm-67b-chat": {
    "releaseDate": "2023-11-29"
  },
  "agnes-2-5-pro-beta": {
    "releaseDate": "2026-08-26"
  },
  "agnes-2-5-pro-alpha": {
    "releaseDate": "2026-07-24"
  },
  "motif-0714": {
    "releaseDate": "2026-07-14"
  },
  "motif-2-12-7b": {
    "releaseDate": "2025-12-04"
  },
  "minimax-m2-7": {
    "releaseDate": "2026-03-18"
  },
  "minimax-m2-5": {
    "releaseDate": "2026-02-12"
  },
  "minimax-m2-1": {
    "releaseDate": "2025-12-23"
  },
  "minimax-m2": {
    "pricing": {
      "inputPer1M": 0.255,
      "outputPer1M": 1.02,
      "approx": true
    },
    "context": 204800,
    "benchmarks": {
      "designArenaElo": 1152.6
    },
    "releaseDate": "2025-10-26"
  },
  "minimax-m1-80k": {
    "releaseDate": "2025-06-17"
  },
  "minimax-m1-40k": {
    "releaseDate": "2025-06-17"
  },
  "mimo-v2-5-pro": {
    "releaseDate": "2026-04-22"
  },
  "mimo-v2-pro": {
    "releaseDate": "2026-03-18"
  },
  "mimo-v2-5-0424": {
    "releaseDate": "2026-04-22"
  },
  "mimo-v2-omni-0327": {
    "releaseDate": "2026-03-27"
  },
  "mimo-v2-omni": {
    "releaseDate": "2026-03-19"
  },
  "mimo-v2-0206": {
    "releaseDate": "2025-12-16"
  },
  "mimo-v2-flash-reasoning": {
    "releaseDate": "2025-12-16"
  },
  "mimo-v2-5-pro-non-reasoning": {
    "releaseDate": "2026-04-22"
  },
  "mimo-v2-flash": {
    "releaseDate": "2025-12-16"
  },
  "inkling-small": {
    "pricing": {
      "inputPer1M": 0.45,
      "outputPer1M": 1.2,
      "approx": true
    },
    "context": 524288,
    "releaseDate": "2026-07-30"
  },
  "hy3": {
    "pricing": {
      "inputPer1M": 0.132,
      "outputPer1M": 0.528,
      "approx": true
    },
    "context": 262144,
    "benchmarks": {
      "designArenaElo": 1188.5
    },
    "releaseDate": "2026-07-06"
  },
  "hy3-preview": {
    "pricing": {
      "inputPer1M": 0.18,
      "outputPer1M": 0.6,
      "approx": true
    },
    "context": 262144,
    "releaseDate": "2026-04-23"
  },
  "hy3-non-reasoning": {
    "releaseDate": "2026-04-23"
  },
  "nex-n2-pro": {
    "pricing": {
      "inputPer1M": 0.25,
      "outputPer1M": 1.0,
      "approx": true
    },
    "context": 262144,
    "benchmarks": {
      "designArenaElo": 1238.2
    },
    "releaseDate": "2026-06-02"
  },
  "solar-pro4": {
    "pricing": {
      "inputPer1M": 0.03,
      "outputPer1M": 0.12,
      "approx": true
    },
    "context": 524288,
    "benchmarks": {
      "designArenaElo": 1153.5
    },
    "releaseDate": "2026-08-06"
  },
  "solar-open-100b-reasoning": {
    "releaseDate": "2025-12-17"
  },
  "solar-pro-3": {
    "pricing": {
      "inputPer1M": 0.15,
      "outputPer1M": 0.6,
      "approx": true
    },
    "context": 131072,
    "releaseDate": "2026-04-06"
  },
  "solar-pro-2-preview-reasoning": {
    "releaseDate": "2025-05-20"
  },
  "solar-pro-2-preview": {
    "releaseDate": "2025-05-20"
  },
  "solar-pro-2-reasoning": {
    "releaseDate": "2025-07-09"
  },
  "solar-pro-2": {
    "releaseDate": "2025-07-09"
  },
  "solar-mini": {
    "releaseDate": "2024-01-25"
  },
  "jt-4-1-flash-236b-a21b": {
    "releaseDate": "2026-07-09"
  },
  "jt-35b-flash": {
    "releaseDate": "2026-05-14"
  },
  "jt-mini": {
    "releaseDate": "2026-04-15"
  },
  "nvidia-nemotron-3-super-120b-a12b": {
    "releaseDate": "2026-03-11"
  },
  "nemotron-cascade-2-30b-a3b": {
    "releaseDate": "2026-03-19"
  },
  "nemotron-3-nano-omni-30b-a3b": {
    "releaseDate": "2026-04-29"
  },
  "nvidia-nemotron-3-nano-30b-a3b-reasoning": {
    "releaseDate": "2025-12-15"
  },
  "llama-nemotron-super-49b-v1-5-reasoning": {
    "releaseDate": "2025-07-25"
  },
  "llama-3-3-nemotron-super-49b-reasoning": {
    "releaseDate": "2025-03-18"
  },
  "llama-3-1-nemotron-ultra-253b-v1-reasoning": {
    "releaseDate": "2025-04-07"
  },
  "nvidia-nemotron-nano-12b-v2-vl-reasoning": {
    "releaseDate": "2025-10-28"
  },
  "nvidia-nemotron-nano-9b-v2-reasoning": {
    "releaseDate": "2025-08-18"
  },
  "nvidia-nemotron-3-nano-4b": {
    "releaseDate": "2026-03-16"
  },
  "llama-nemotron-super-49b-v1-5": {
    "releaseDate": "2025-07-25"
  },
  "llama-3-1-nemotron-nano-4b-reasoning": {
    "releaseDate": "2025-05-20"
  },
  "llama-3-3-nemotron-super-49b": {
    "releaseDate": "2025-03-18"
  },
  "llama-3-1-nemotron-instruct-70b": {
    "releaseDate": "2024-10-15"
  },
  "nvidia-nemotron-3-nano-30b-a3b": {
    "releaseDate": "2025-12-15"
  },
  "nvidia-nemotron-nano-9b-v2": {
    "releaseDate": "2025-08-18"
  },
  "nvidia-nemotron-nano-12b-v2-vl": {
    "releaseDate": "2025-10-28"
  },
  "ling-3-0-flash": {
    "releaseDate": "2026-08-04"
  },
  "ring-2-6-1t": {
    "releaseDate": "2026-05-08"
  },
  "ling-2-6-1t": {
    "releaseDate": "2026-04-23"
  },
  "ling-3-0-tiny": {
    "releaseDate": "2026-08-06"
  },
  "ring-1t": {
    "releaseDate": "2025-10-13"
  },
  "ling-2-6-flash": {
    "releaseDate": "2026-04-21"
  },
  "ling-1t": {
    "releaseDate": "2025-10-08"
  },
  "ling-flash-2-0": {
    "releaseDate": "2025-09-17"
  },
  "ring-flash-2-0": {
    "releaseDate": "2025-09-19"
  },
  "ling-mini-2-0": {
    "releaseDate": "2025-09-09"
  },
  "g9v3-39a5b": {
    "releaseDate": "2026-08-20"
  },
  "g9v3-3b": {
    "releaseDate": "2026-07-23"
  },
  "longcat-2-0": {
    "releaseDate": "2026-06-29"
  },
  "longcat-flash-lite": {
    "releaseDate": "2026-01-28"
  },
  "kat-coder-pro-v2": {
    "pricing": {
      "inputPer1M": 0.3,
      "outputPer1M": 1.2,
      "approx": true
    },
    "context": 262144,
    "releaseDate": "2026-03-27"
  },
  "kat-coder-pro-v1": {
    "releaseDate": "2025-11-11"
  },
  "k-exaone": {
    "releaseDate": "2025-12-31"
  },
  "exaone-4-5-33b": {
    "releaseDate": "2026-04-09"
  },
  "k-exaone-non-reasoning": {
    "releaseDate": "2025-12-31"
  },
  "exaone-4-0-32b-reasoning": {
    "releaseDate": "2025-07-15"
  },
  "exaone-4-0-32b": {
    "releaseDate": "2025-07-15"
  },
  "exaone-4-0-1-2b-reasoning": {
    "releaseDate": "2025-07-15"
  },
  "exaone-4-0-1-2b": {
    "releaseDate": "2025-07-15"
  },
  "exaone-4-5-33b-non-reasoning": {
    "releaseDate": "2026-04-09"
  },
  "step-3-7-flash": {
    "releaseDate": "2026-05-29"
  },
  "step-3-5-flash": {
    "releaseDate": "2026-04-02"
  },
  "step-3-5-flash-0202": {
    "releaseDate": "2026-02-02"
  },
  "step-3-vl-10b": {
    "releaseDate": "2026-01-20"
  },
  "mistral-small-4": {
    "releaseDate": "2026-03-16"
  },
  "devstral-2": {
    "releaseDate": "2025-12-09"
  },
  "magistral-medium-2509": {
    "releaseDate": "2025-09-18"
  },
  "devstral-small-2": {
    "releaseDate": "2025-12-09"
  },
  "mistral-large-3": {
    "releaseDate": "2025-12-02"
  },
  "mistral-small-3-1": {
    "releaseDate": "2025-03-17"
  },
  "mistral-medium-3-1": {
    "releaseDate": "2025-08-12"
  },
  "magistral-medium": {
    "releaseDate": "2025-06-10"
  },
  "mistral-medium-3": {
    "pricing": {
      "inputPer1M": 0.4,
      "outputPer1M": 2.0,
      "approx": true
    },
    "context": 131072,
    "benchmarks": {
      "designArenaElo": 1078.8
    },
    "releaseDate": "2025-05-07"
  },
  "devstral-medium": {
    "releaseDate": "2025-07-10"
  },
  "mistral-small-4-non-reasoning": {
    "releaseDate": "2026-03-16"
  },
  "devstral-small-2505": {
    "releaseDate": "2025-05-21"
  },
  "magistral-small-2509": {
    "releaseDate": "2025-09-17"
  },
  "ministral-3-14b": {
    "releaseDate": "2025-12-02"
  },
  "mistral-small-3-2": {
    "releaseDate": "2025-06-20"
  },
  "magistral-small": {
    "releaseDate": "2025-06-10"
  },
  "devstral-small": {
    "releaseDate": "2025-07-10"
  },
  "mistral-large-2": {
    "releaseDate": "2024-11-18"
  },
  "ministral-3-8b": {
    "releaseDate": "2025-12-02"
  },
  "pixtral-large-2411": {
    "releaseDate": "2024-11-18"
  },
  "ministral-3-3b": {
    "releaseDate": "2025-12-02"
  },
  "mistral-large-2407": {
    "pricing": {
      "inputPer1M": 2.0,
      "outputPer1M": 6.0,
      "approx": true
    },
    "context": 131072,
    "releaseDate": "2024-07-24"
  },
  "mistral-small-3": {
    "releaseDate": "2025-01-30"
  },
  "mistral-saba": {
    "pricing": {
      "inputPer1M": 0.2,
      "outputPer1M": 0.6,
      "approx": true
    },
    "context": 32768,
    "releaseDate": "2025-02-17"
  },
  "mistral-small": {
    "releaseDate": "2024-09-17"
  },
  "mistral-large": {
    "pricing": {
      "inputPer1M": 2.0,
      "outputPer1M": 6.0,
      "approx": true
    },
    "context": 128000,
    "releaseDate": "2024-02-26"
  },
  "mistral-8x22b-instruct": {
    "releaseDate": "2024-04-17"
  },
  "mistral-small-2402": {
    "releaseDate": "2024-02-26"
  },
  "mistral-medium": {
    "releaseDate": "2023-12-11"
  },
  "mixtral-8x7b-instruct": {
    "releaseDate": "2023-12-11"
  },
  "mistral-7b-instruct": {
    "releaseDate": "2023-09-27"
  },
  "doubao-seed-code": {
    "releaseDate": "2025-11-11"
  },
  "seed-oss-36b-instruct": {
    "releaseDate": "2025-08-20"
  },
  "granite-4-2-30b": {
    "releaseDate": "2026-08-25"
  },
  "granite-4-2-8b": {
    "releaseDate": "2026-08-25"
  },
  "granite-4-2-3b": {
    "releaseDate": "2026-08-25"
  },
  "granite-4-1-30b": {
    "releaseDate": "2026-04-29"
  },
  "granite-4-1-8b": {
    "releaseDate": "2026-04-29"
  },
  "granite-4-0-h-small": {
    "releaseDate": "2025-09-22"
  },
  "granite-4-1-3b": {
    "releaseDate": "2026-04-29"
  },
  "granite-4-0-h-nano-1b": {
    "releaseDate": "2025-10-28"
  },
  "granite-4-0-micro": {
    "releaseDate": "2025-09-22"
  },
  "granite-4-0-nano-1b": {
    "releaseDate": "2025-10-28"
  },
  "granite-3-3-8b-instruct": {
    "releaseDate": "2025-04-16"
  },
  "granite-4-0-350m": {
    "releaseDate": "2025-10-28"
  },
  "granite-4-0-h-350m": {
    "releaseDate": "2025-10-28"
  },
  "north-mini-code": {
    "releaseDate": "2026-06-09"
  },
  "command-a": {
    "pricing": {
      "inputPer1M": 2.5,
      "outputPer1M": 10.0,
      "approx": true
    },
    "context": 256000,
    "releaseDate": "2025-03-13"
  },
  "command-r-plus-04-2024": {
    "releaseDate": "2024-04-04"
  },
  "command-r-03-2024": {
    "releaseDate": "2024-03-12"
  },
  "tiny-aya-global": {
    "releaseDate": "2026-02-17"
  },
  "ernie-5-0-thinking-preview": {
    "releaseDate": "2025-11-13"
  },
  "ernie-4-5-300b-a47b": {
    "releaseDate": "2025-06-30"
  },
  "nova-2-0-pro-reasoning-medium": {
    "releaseDate": "2025-11-27"
  },
  "nova-2-0-omni-reasoning-medium": {
    "releaseDate": "2025-11-26"
  },
  "nova-2-0-lite-reasoning": {
    "releaseDate": "2025-10-29"
  },
  "nova-2-0-pro-reasoning-low": {
    "releaseDate": "2025-11-27"
  },
  "nova-2-0-lite-reasoning-medium": {
    "releaseDate": "2025-10-29"
  },
  "nova-2-0-lite-reasoning-low": {
    "releaseDate": "2025-10-29"
  },
  "nova-2-0-omni-reasoning-low": {
    "releaseDate": "2025-11-26"
  },
  "nova-2-0-pro": {
    "releaseDate": "2025-11-27"
  },
  "nova-premier": {
    "releaseDate": "2025-04-30"
  },
  "nova-2-0-lite": {
    "releaseDate": "2025-10-29"
  },
  "nova-2-0-omni": {
    "releaseDate": "2025-11-26"
  },
  "nova-pro": {
    "releaseDate": "2024-12-03"
  },
  "nova-lite": {
    "releaseDate": "2024-12-03"
  },
  "nova-micro": {
    "releaseDate": "2024-12-03"
  },
  "mercury-2": {
    "pricing": {
      "inputPer1M": 0.25,
      "outputPer1M": 0.75,
      "approx": true
    },
    "context": 128000,
    "benchmarks": {
      "designArenaElo": 1017.0
    },
    "releaseDate": "2026-02-20"
  },
  "apriel-v1-5-15b-thinker": {
    "releaseDate": "2025-09-30"
  },
  "apriel-v1-6-15b-thinker": {
    "releaseDate": "2025-11-25"
  },
  "trinity-large-thinking": {
    "pricing": {
      "inputPer1M": 0.22,
      "outputPer1M": 0.85,
      "approx": true
    },
    "context": 262144,
    "benchmarks": {
      "designArenaElo": 1106.1
    },
    "releaseDate": "2026-04-01"
  },
  "hypernova-60b": {
    "releaseDate": "2026-05-26"
  },
  "sonar-reasoning-pro": {
    "pricing": {
      "inputPer1M": 2.0,
      "outputPer1M": 8.0,
      "approx": true
    },
    "context": 128000,
    "releaseDate": "2025-01-28"
  },
  "sonar-reasoning": {
    "releaseDate": "2025-01-28"
  },
  "sonar": {
    "pricing": {
      "inputPer1M": 1.0,
      "outputPer1M": 1.0,
      "approx": true
    },
    "context": 127072,
    "releaseDate": "2025-01-21"
  },
  "sonar-pro": {
    "pricing": {
      "inputPer1M": 3.0,
      "outputPer1M": 15.0,
      "approx": true
    },
    "context": 200000,
    "releaseDate": "2025-01-21"
  },
  "r1-1776": {
    "releaseDate": "2025-02-18"
  },
  "k2-think-v2": {
    "releaseDate": "2025-12-15"
  },
  "k2-v2": {
    "releaseDate": "2025-12-05"
  },
  "k2-v2-medium": {
    "releaseDate": "2025-12-05"
  },
  "k2-v2-low": {
    "releaseDate": "2025-12-05"
  },
  "hyperclova-x-seed-think-32b": {
    "releaseDate": "2025-12-26"
  },
  "mi-dm-k-2-5-pro-dec28": {
    "releaseDate": "2025-12-11"
  },
  "midm-250-pro-rsnsft": {
    "releaseDate": "2025-12-11"
  },
  "intellect-3": {
    "releaseDate": "2025-11-27"
  },
  "tri-21b-think-preview": {
    "releaseDate": "2026-02-10"
  },
  "tri-21b-think-v0-5": {
    "releaseDate": "2026-02-10"
  },
  "celeris-1": {
    "releaseDate": "2026-07-24"
  },
  "minicpm5-1b": {
    "releaseDate": "2026-05-25"
  },
  "minicpm5-1b-non-reasoning": {
    "releaseDate": "2026-05-25"
  },
  "minicpm-v4-6-1-3b": {
    "releaseDate": "2026-05-11"
  },
  "sarvam-105b": {
    "releaseDate": "2026-03-06"
  },
  "sarvam-30b": {
    "releaseDate": "2026-03-06"
  },
  "sarvam-m-reasoning": {
    "releaseDate": "2025-05-23"
  },
  "nanbeige4-1-3b": {
    "releaseDate": "2026-02-11"
  },
  "lfm2-5-2-6b": {
    "releaseDate": "2026-08-04"
  },
  "lfm2-5-8b-a1b": {
    "releaseDate": "2026-05-28"
  },
  "lfm2-24b-a2b": {
    "releaseDate": "2026-02-25"
  },
  "lfm-40b": {
    "releaseDate": "2024-09-30"
  },
  "lfm2-5-1-2b-thinking": {
    "releaseDate": "2026-01-20"
  },
  "lfm2-2-6b": {
    "releaseDate": "2025-09-23"
  },
  "lfm2-5-1-2b-instruct": {
    "releaseDate": "2026-01-05"
  },
  "lfm2-8b-a1b": {
    "releaseDate": "2025-10-07"
  },
  "lfm2-5-vl-1-6b": {
    "releaseDate": "2026-01-05"
  },
  "lfm2-1-2b": {
    "releaseDate": "2025-07-10"
  },
  "hermes-4-llama-3-1-70b-reasoning": {
    "releaseDate": "2025-08-27"
  },
  "hermes-4-llama-3-1-405b-reasoning": {
    "releaseDate": "2025-08-27"
  },
  "hermes-4-llama-3-1-405b": {
    "releaseDate": "2025-08-27"
  },
  "hermes-4-llama-3-1-70b": {
    "releaseDate": "2025-08-27"
  },
  "deephermes-3-mistral-24b-preview": {
    "releaseDate": "2025-03-13"
  },
  "hermes-3-llama-3-1-70b": {
    "releaseDate": "2024-08-15"
  },
  "deephermes-3-llama-3-1-8b-preview": {
    "releaseDate": "2025-02-13"
  },
  "falcon-h1r-7b": {
    "releaseDate": "2026-01-04"
  },
  "tulu3-405b": {
    "releaseDate": "2025-01-30"
  },
  "olmo-3-1-32b-think": {
    "releaseDate": "2025-12-12"
  },
  "olmo-3-1-32b-instruct": {
    "releaseDate": "2026-01-13"
  },
  "olmo-3-32b-think": {
    "pricing": {
      "inputPer1M": 0.15,
      "outputPer1M": 0.5,
      "approx": true
    },
    "context": 65536,
    "releaseDate": "2025-11-20"
  },
  "olmo-2-32b": {
    "releaseDate": "2025-03-13"
  },
  "olmo-3-7b-think": {
    "releaseDate": "2025-11-20"
  },
  "olmo-2-7b": {
    "releaseDate": "2024-11-26"
  },
  "molmo-7b-d": {
    "releaseDate": "2024-09-25"
  },
  "olmo-3-7b-instruct": {
    "releaseDate": "2025-11-20"
  },
  "molmo2-8b": {
    "releaseDate": "2025-12-11"
  },
  "reka-flash": {
    "releaseDate": "2024-10-04"
  },
  "reka-flash-3": {
    "pricing": {
      "inputPer1M": 0.1,
      "outputPer1M": 0.2,
      "approx": true
    },
    "context": 65536,
    "releaseDate": "2025-03-10"
  },
  "phi-4-mini": {
    "releaseDate": "2024-02-26"
  },
  "phi-4": {
    "pricing": {
      "inputPer1M": 0.07,
      "outputPer1M": 0.14,
      "approx": true
    },
    "context": 16384,
    "releaseDate": "2024-12-12"
  },
  "phi-3-mini": {
    "releaseDate": "2024-04-23"
  },
  "phi-4-multimodal": {
    "releaseDate": "2025-02-26"
  },
  "jamba-1-7-large": {
    "releaseDate": "2025-07-07"
  },
  "jamba-1-5-large": {
    "releaseDate": "2024-08-22"
  },
  "jamba-1-6-large": {
    "releaseDate": "2025-03-06"
  },
  "jamba-reasoning-3b": {
    "releaseDate": "2025-10-08"
  },
  "jamba-1-7-mini": {
    "releaseDate": "2025-07-07"
  },
  "jamba-1-5-mini": {
    "releaseDate": "2024-08-22"
  },
  "jamba-1-6-mini": {
    "releaseDate": "2025-03-06"
  },
  "arctic-instruct": {
    "releaseDate": "2024-04-24"
  },
  "openchat-35": {
    "releaseDate": "2023-12-18"
  },
  "dbrx": {
    "releaseDate": "2024-03-27"
  },
  "apertus-70b-instruct": {
    "releaseDate": "2025-09-02"
  },
  "apertus-8b-instruct": {
    "releaseDate": "2025-09-02"
  },
  "cogito-v2-1-reasoning": {
    "releaseDate": "2025-11-18"
  }
};

export const autoCompanies: Record<string, CompanyMeta> = {
  "MotifTechnologies": {
    "name": "Motif Technologies",
    "origin": "China",
    "accent": "#64748b",
    "blurb": "Motif Technologies — datos del Artificial Analysis Intelligence Index."
  },
  "NVIDIA": {
    "name": "NVIDIA",
    "origin": "US",
    "accent": "#64748b",
    "blurb": "NVIDIA — datos del Artificial Analysis Intelligence Index."
  },
  "Upstage": {
    "name": "Upstage",
    "origin": "US",
    "accent": "#64748b",
    "blurb": "Upstage — datos del Artificial Analysis Intelligence Index."
  },
  "SKTelecom": {
    "name": "SK Telecom",
    "origin": "US",
    "accent": "#64748b",
    "blurb": "SK Telecom — datos del Artificial Analysis Intelligence Index."
  },
  "LGAIResearch": {
    "name": "LG AI Research",
    "origin": "US",
    "accent": "#64748b",
    "blurb": "LG AI Research — datos del Artificial Analysis Intelligence Index."
  },
  "Cohere": {
    "name": "Cohere",
    "origin": "US",
    "accent": "#64748b",
    "blurb": "Cohere — datos del Artificial Analysis Intelligence Index."
  }
};
