// AUTOGENERADO por scripts/build_auto_catalog.py — NO EDITAR A MANO.
// Se regenera a diario a partir de data/intelligence-index-master.json.
// El catálogo curado (models.ts) SIEMPRE tiene prioridad sobre estos datos:
// la fusión de models.ts solo rellena huecos y añade modelos nuevos.

import type { Model, CompanyMeta } from './types';

/** Specs frescas por slug del Intelligence Index, para refrescar curados. */
export interface AutoSpec {
  pricing?: { inputPer1M: number | null; outputPer1M: number | null; approx: true };
  context?: number;
  benchmarks?: { liveCodeBench?: number; humanEval?: number };
  parameters?: number;
  releaseDate?: string;
}

export const autoModels: Model[] = [
  {
    "id": "claude-fable-5",
    "iiSlug": "claude-fable-5",
    "company": "Anthropic",
    "origin": "US",
    "displayName": "Claude Fable 5 (with fallback)",
    "kind": "model",
    "category": [
      "coding",
      "reasoning",
      "agentic"
    ],
    "context": 1000000,
    "pricing": {
      "inputPer1M": 10.0,
      "outputPer1M": 50.0,
      "approx": true
    },
    "modalities": [
      "text"
    ],
    "openWeight": false,
    "releaseDate": "2026-06-09",
    "notes": "Importado automáticamente del Artificial Analysis Intelligence Index (Coding Index 76.5). Precios aproximados; verifica en la web oficial del proveedor."
  },
  {
    "id": "gpt-5-5",
    "iiSlug": "gpt-5-5",
    "company": "OpenAI",
    "origin": "US",
    "displayName": "GPT-5.5 (xhigh)",
    "kind": "model",
    "category": [
      "coding",
      "reasoning",
      "agentic"
    ],
    "context": 922000,
    "pricing": {
      "inputPer1M": 5.0,
      "outputPer1M": 30.0,
      "approx": true
    },
    "modalities": [
      "text"
    ],
    "openWeight": false,
    "releaseDate": "2026-04-23",
    "notes": "Importado automáticamente del Artificial Analysis Intelligence Index (Coding Index 74.9). Precios aproximados; verifica en la web oficial del proveedor."
  },
  {
    "id": "claude-opus-4-8",
    "iiSlug": "claude-opus-4-8",
    "company": "Anthropic",
    "origin": "US",
    "displayName": "Claude Opus 4.8 (max)",
    "kind": "model",
    "category": [
      "coding",
      "reasoning",
      "agentic"
    ],
    "context": 1000000,
    "pricing": {
      "inputPer1M": 5.0,
      "outputPer1M": 25.0,
      "approx": true
    },
    "modalities": [
      "text"
    ],
    "openWeight": false,
    "releaseDate": "2026-05-28",
    "notes": "Importado automáticamente del Artificial Analysis Intelligence Index (Coding Index 74.3). Precios aproximados; verifica en la web oficial del proveedor."
  },
  {
    "id": "claude-opus-4-7",
    "iiSlug": "claude-opus-4-7",
    "company": "Anthropic",
    "origin": "US",
    "displayName": "Claude Opus 4.7 (max)",
    "kind": "model",
    "category": [
      "coding",
      "reasoning",
      "agentic"
    ],
    "context": 1000000,
    "pricing": {
      "inputPer1M": 5.0,
      "outputPer1M": 25.0,
      "approx": true
    },
    "modalities": [
      "text"
    ],
    "openWeight": false,
    "releaseDate": "2026-04-16",
    "notes": "Importado automáticamente del Artificial Analysis Intelligence Index (Coding Index 73.6). Precios aproximados; verifica en la web oficial del proveedor."
  },
  {
    "id": "gpt-5-5-high",
    "iiSlug": "gpt-5-5-high",
    "company": "OpenAI",
    "origin": "US",
    "displayName": "GPT-5.5 (high)",
    "kind": "model",
    "category": [
      "coding",
      "reasoning",
      "agentic"
    ],
    "context": 922000,
    "pricing": {
      "inputPer1M": 5.0,
      "outputPer1M": 30.0,
      "approx": true
    },
    "modalities": [
      "text"
    ],
    "openWeight": false,
    "releaseDate": "2026-04-23",
    "notes": "Importado automáticamente del Artificial Analysis Intelligence Index (Coding Index 71.6). Precios aproximados; verifica en la web oficial del proveedor."
  },
  {
    "id": "claude-sonnet-5",
    "iiSlug": "claude-sonnet-5",
    "company": "Anthropic",
    "origin": "US",
    "displayName": "Claude Sonnet 5 (max)",
    "kind": "model",
    "category": [
      "coding",
      "reasoning",
      "agentic"
    ],
    "context": 1000000,
    "pricing": {
      "inputPer1M": 3.0,
      "outputPer1M": 15.0,
      "approx": true
    },
    "modalities": [
      "text"
    ],
    "openWeight": false,
    "releaseDate": "2026-06-30",
    "notes": "Importado automáticamente del Artificial Analysis Intelligence Index (Coding Index 71.5). Precios aproximados; verifica en la web oficial del proveedor."
  },
  {
    "id": "gpt-5-5-medium",
    "iiSlug": "gpt-5-5-medium",
    "company": "OpenAI",
    "origin": "US",
    "displayName": "GPT-5.5 (medium)",
    "kind": "model",
    "category": [
      "coding",
      "reasoning",
      "agentic"
    ],
    "context": 922000,
    "pricing": {
      "inputPer1M": 5.0,
      "outputPer1M": 30.0,
      "approx": true
    },
    "modalities": [
      "text"
    ],
    "openWeight": false,
    "releaseDate": "2026-04-23",
    "notes": "Importado automáticamente del Artificial Analysis Intelligence Index (Coding Index 71.5). Precios aproximados; verifica en la web oficial del proveedor."
  },
  {
    "id": "gemini-3-5-flash",
    "iiSlug": "gemini-3-5-flash",
    "company": "Google",
    "origin": "US",
    "displayName": "Gemini 3.5 Flash",
    "kind": "model",
    "category": [
      "coding",
      "reasoning",
      "agentic"
    ],
    "context": 1000000,
    "pricing": {
      "inputPer1M": 1.5,
      "outputPer1M": 9.0,
      "approx": true
    },
    "modalities": [
      "text"
    ],
    "openWeight": false,
    "releaseDate": "2026-05-19",
    "notes": "Importado automáticamente del Artificial Analysis Intelligence Index (Coding Index 70.1). Precios aproximados; verifica en la web oficial del proveedor."
  },
  {
    "id": "gemini-3-1-pro-preview",
    "iiSlug": "gemini-3-1-pro-preview",
    "company": "Google",
    "origin": "US",
    "displayName": "Gemini 3.1 Pro Preview",
    "kind": "model",
    "category": [
      "coding",
      "reasoning",
      "agentic"
    ],
    "context": 1000000,
    "pricing": {
      "inputPer1M": 2.0,
      "outputPer1M": 12.0,
      "approx": true
    },
    "modalities": [
      "text"
    ],
    "openWeight": false,
    "releaseDate": "2026-02-19",
    "notes": "Importado automáticamente del Artificial Analysis Intelligence Index (Coding Index 68.8). Precios aproximados; verifica en la web oficial del proveedor."
  },
  {
    "id": "glm-5-2",
    "iiSlug": "glm-5-2",
    "company": "Zhipu",
    "origin": "China",
    "displayName": "GLM-5.2 (max)",
    "kind": "model",
    "category": [
      "coding",
      "reasoning",
      "agentic"
    ],
    "context": 1000000,
    "pricing": {
      "inputPer1M": 1.4,
      "outputPer1M": 4.4,
      "approx": true
    },
    "modalities": [
      "text"
    ],
    "openWeight": true,
    "releaseDate": "2026-06-16",
    "parameters": 753.0,
    "notes": "Importado automáticamente del Artificial Analysis Intelligence Index (Coding Index 68.8). Precios aproximados; verifica en la web oficial del proveedor."
  },
  {
    "id": "claude-sonnet-5-non-reasoning",
    "iiSlug": "claude-sonnet-5-non-reasoning",
    "company": "Anthropic",
    "origin": "US",
    "displayName": "Claude Sonnet 5 (Non-reasoning)",
    "kind": "model",
    "category": [
      "coding",
      "agentic"
    ],
    "context": 1000000,
    "pricing": {
      "inputPer1M": 3.0,
      "outputPer1M": 15.0,
      "approx": true
    },
    "modalities": [
      "text"
    ],
    "openWeight": false,
    "releaseDate": "2026-06-30",
    "notes": "Importado automáticamente del Artificial Analysis Intelligence Index (Coding Index 66.4). Precios aproximados; verifica en la web oficial del proveedor."
  },
  {
    "id": "qwen3-7-max",
    "iiSlug": "qwen3-7-max",
    "company": "Alibaba",
    "origin": "China",
    "displayName": "Qwen3.7 Max",
    "kind": "model",
    "category": [
      "coding",
      "reasoning",
      "agentic"
    ],
    "context": 1000000,
    "pricing": {
      "inputPer1M": 2.5,
      "outputPer1M": 7.5,
      "approx": true
    },
    "modalities": [
      "text"
    ],
    "openWeight": false,
    "releaseDate": "2026-05-19",
    "notes": "Importado automáticamente del Artificial Analysis Intelligence Index (Coding Index 66.0). Precios aproximados; verifica en la web oficial del proveedor."
  },
  {
    "id": "gpt-5-5-low",
    "iiSlug": "gpt-5-5-low",
    "company": "OpenAI",
    "origin": "US",
    "displayName": "GPT-5.5 (low)",
    "kind": "model",
    "category": [
      "coding",
      "reasoning",
      "agentic"
    ],
    "context": 922000,
    "pricing": {
      "inputPer1M": 5.0,
      "outputPer1M": 30.0,
      "approx": true
    },
    "modalities": [
      "text"
    ],
    "openWeight": false,
    "releaseDate": "2026-04-23",
    "notes": "Importado automáticamente del Artificial Analysis Intelligence Index (Coding Index 60.9). Precios aproximados; verifica en la web oficial del proveedor."
  },
  {
    "id": "kimi-k2-7-code",
    "iiSlug": "kimi-k2-7-code",
    "company": "Moonshot",
    "origin": "China",
    "displayName": "Kimi K2.7 Code",
    "kind": "model",
    "category": [
      "coding",
      "reasoning",
      "agentic"
    ],
    "context": 256000,
    "pricing": {
      "inputPer1M": 0.95,
      "outputPer1M": 4.0,
      "approx": true
    },
    "modalities": [
      "text"
    ],
    "openWeight": true,
    "releaseDate": "2026-06-12",
    "parameters": 1000.0,
    "notes": "Importado automáticamente del Artificial Analysis Intelligence Index (Coding Index 60.8). Precios aproximados; verifica en la web oficial del proveedor."
  },
  {
    "id": "mimo-v2-5-pro",
    "iiSlug": "mimo-v2-5-pro",
    "company": "Xiaomi",
    "origin": "China",
    "displayName": "MiMo-V2.5-Pro",
    "kind": "model",
    "category": [
      "coding",
      "reasoning",
      "agentic",
      "budget"
    ],
    "context": 1000000,
    "pricing": {
      "inputPer1M": 0.435,
      "outputPer1M": 0.87,
      "approx": true
    },
    "modalities": [
      "text"
    ],
    "openWeight": true,
    "releaseDate": "2026-04-22",
    "parameters": 1023.0,
    "notes": "Importado automáticamente del Artificial Analysis Intelligence Index (Coding Index 60.2). Precios aproximados; verifica en la web oficial del proveedor."
  },
  {
    "id": "deepseek-v4-pro",
    "iiSlug": "deepseek-v4-pro",
    "company": "DeepSeek",
    "origin": "China",
    "displayName": "DeepSeek V4 Pro (max)",
    "kind": "model",
    "category": [
      "coding",
      "reasoning",
      "agentic",
      "budget"
    ],
    "context": 1000000,
    "pricing": {
      "inputPer1M": 0.435,
      "outputPer1M": 0.87,
      "approx": true
    },
    "modalities": [
      "text"
    ],
    "openWeight": true,
    "releaseDate": "2026-04-24",
    "parameters": 1600.0,
    "notes": "Importado automáticamente del Artificial Analysis Intelligence Index (Coding Index 59.4). Precios aproximados; verifica en la web oficial del proveedor."
  },
  {
    "id": "nex-n2-pro",
    "iiSlug": "nex-n2-pro",
    "company": "NexAGI",
    "origin": "US",
    "displayName": "Nex-N2-Pro",
    "kind": "model",
    "category": [
      "coding",
      "reasoning",
      "agentic",
      "budget"
    ],
    "context": 262000,
    "pricing": {
      "inputPer1M": 0.5,
      "outputPer1M": 2.5,
      "approx": true
    },
    "modalities": [
      "text"
    ],
    "openWeight": true,
    "releaseDate": "2026-06-02",
    "parameters": 397.0,
    "notes": "Importado automáticamente del Artificial Analysis Intelligence Index (Coding Index 59.1). Precios aproximados; verifica en la web oficial del proveedor."
  },
  {
    "id": "kat-coder-pro-v1",
    "iiSlug": "kat-coder-pro-v1",
    "company": "KwaiKAT",
    "origin": "China",
    "displayName": "KAT-Coder-Pro V1",
    "kind": "model",
    "category": [
      "coding",
      "agentic",
      "budget"
    ],
    "context": 256000,
    "pricing": {
      "inputPer1M": 0.3,
      "outputPer1M": 1.2,
      "approx": true
    },
    "modalities": [
      "text"
    ],
    "openWeight": false,
    "releaseDate": "2025-11-11",
    "benchmarks": {
      "liveCodeBench": 0.7
    },
    "notes": "Importado automáticamente del Artificial Analysis Intelligence Index (Coding Index 58.9). Precios aproximados; verifica en la web oficial del proveedor."
  },
  {
    "id": "muse-spark",
    "iiSlug": "muse-spark",
    "company": "Meta",
    "origin": "Open",
    "displayName": "Muse Spark",
    "kind": "model",
    "category": [
      "coding",
      "reasoning",
      "agentic",
      "budget"
    ],
    "context": 262144,
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "modalities": [
      "text"
    ],
    "openWeight": false,
    "releaseDate": "2026-04-08",
    "notes": "Importado automáticamente del Artificial Analysis Intelligence Index (Coding Index 58.6). Precios aproximados; verifica en la web oficial del proveedor."
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
      "agentic",
      "budget"
    ],
    "context": 1000000,
    "pricing": {
      "inputPer1M": 0.3,
      "outputPer1M": 1.2,
      "approx": true
    },
    "modalities": [
      "text"
    ],
    "openWeight": true,
    "releaseDate": "2026-06-01",
    "parameters": 428.0,
    "notes": "Importado automáticamente del Artificial Analysis Intelligence Index (Coding Index 58.6). Precios aproximados; verifica en la web oficial del proveedor."
  },
  {
    "id": "gpt-5-5-non-reasoning",
    "iiSlug": "gpt-5-5-non-reasoning",
    "company": "OpenAI",
    "origin": "US",
    "displayName": "GPT-5.5 (Non-reasoning)",
    "kind": "model",
    "category": [
      "coding",
      "agentic"
    ],
    "context": 922000,
    "pricing": {
      "inputPer1M": 5.0,
      "outputPer1M": 30.0,
      "approx": true
    },
    "modalities": [
      "text"
    ],
    "openWeight": false,
    "releaseDate": "2026-04-23",
    "notes": "Importado automáticamente del Artificial Analysis Intelligence Index (Coding Index 56.5). Precios aproximados; verifica en la web oficial del proveedor."
  },
  {
    "id": "deepseek-v4-flash",
    "iiSlug": "deepseek-v4-flash",
    "company": "DeepSeek",
    "origin": "China",
    "displayName": "DeepSeek V4 Flash (max)",
    "kind": "model",
    "category": [
      "coding",
      "reasoning",
      "agentic",
      "budget"
    ],
    "context": 1000000,
    "pricing": {
      "inputPer1M": 0.14,
      "outputPer1M": 0.28,
      "approx": true
    },
    "modalities": [
      "text"
    ],
    "openWeight": true,
    "releaseDate": "2026-04-24",
    "parameters": 284.0,
    "notes": "Importado automáticamente del Artificial Analysis Intelligence Index (Coding Index 56.2). Precios aproximados; verifica en la web oficial del proveedor."
  },
  {
    "id": "gpt-5-4-mini",
    "iiSlug": "gpt-5-4-mini",
    "company": "OpenAI",
    "origin": "US",
    "displayName": "GPT-5.4 mini (xhigh)",
    "kind": "model",
    "category": [
      "coding",
      "reasoning",
      "agentic"
    ],
    "context": 400000,
    "pricing": {
      "inputPer1M": 0.75,
      "outputPer1M": 4.5,
      "approx": true
    },
    "modalities": [
      "text"
    ],
    "openWeight": false,
    "releaseDate": "2026-03-17",
    "notes": "Importado automáticamente del Artificial Analysis Intelligence Index (Coding Index 56.1). Precios aproximados; verifica en la web oficial del proveedor."
  },
  {
    "id": "gpt-5-4-nano",
    "iiSlug": "gpt-5-4-nano",
    "company": "OpenAI",
    "origin": "US",
    "displayName": "GPT-5.4 nano (xhigh)",
    "kind": "model",
    "category": [
      "coding",
      "reasoning",
      "agentic",
      "budget"
    ],
    "context": 400000,
    "pricing": {
      "inputPer1M": 0.2,
      "outputPer1M": 1.25,
      "approx": true
    },
    "modalities": [
      "text"
    ],
    "openWeight": false,
    "releaseDate": "2026-03-17",
    "notes": "Importado automáticamente del Artificial Analysis Intelligence Index (Coding Index 56.1). Precios aproximados; verifica en la web oficial del proveedor."
  },
  {
    "id": "kimi-k2-6",
    "iiSlug": "kimi-k2-6",
    "company": "Moonshot",
    "origin": "China",
    "displayName": "Kimi K2.6",
    "kind": "model",
    "category": [
      "coding",
      "reasoning",
      "agentic"
    ],
    "context": 256000,
    "pricing": {
      "inputPer1M": 0.95,
      "outputPer1M": 4.0,
      "approx": true
    },
    "modalities": [
      "text"
    ],
    "openWeight": true,
    "releaseDate": "2026-04-20",
    "parameters": 1000.0,
    "notes": "Importado automáticamente del Artificial Analysis Intelligence Index (Coding Index 56.0). Precios aproximados; verifica en la web oficial del proveedor."
  },
  {
    "id": "qwen3-7-plus",
    "iiSlug": "qwen3-7-plus",
    "company": "Alibaba",
    "origin": "China",
    "displayName": "Qwen3.7 Plus",
    "kind": "model",
    "category": [
      "coding",
      "reasoning",
      "agentic",
      "budget"
    ],
    "context": 1000000,
    "pricing": {
      "inputPer1M": 0.4,
      "outputPer1M": 1.16,
      "approx": true
    },
    "modalities": [
      "text"
    ],
    "openWeight": false,
    "releaseDate": "2026-06-01",
    "notes": "Importado automáticamente del Artificial Analysis Intelligence Index (Coding Index 55.9). Precios aproximados; verifica en la web oficial del proveedor."
  },
  {
    "id": "glm-5-1",
    "iiSlug": "glm-5-1",
    "company": "Zhipu",
    "origin": "China",
    "displayName": "GLM-5.1",
    "kind": "model",
    "category": [
      "coding",
      "reasoning",
      "agentic"
    ],
    "context": 200000,
    "pricing": {
      "inputPer1M": 1.4,
      "outputPer1M": 4.4,
      "approx": true
    },
    "modalities": [
      "text"
    ],
    "openWeight": true,
    "releaseDate": "2026-04-07",
    "parameters": 744.0,
    "notes": "Importado automáticamente del Artificial Analysis Intelligence Index (Coding Index 55.8). Precios aproximados; verifica en la web oficial del proveedor."
  },
  {
    "id": "qwen3-6-plus",
    "iiSlug": "qwen3-6-plus",
    "company": "Alibaba",
    "origin": "China",
    "displayName": "Qwen3.6 Plus",
    "kind": "model",
    "category": [
      "coding",
      "reasoning",
      "agentic",
      "budget"
    ],
    "context": 1000000,
    "pricing": {
      "inputPer1M": 0.5,
      "outputPer1M": 3.0,
      "approx": true
    },
    "modalities": [
      "text"
    ],
    "openWeight": false,
    "releaseDate": "2026-04-02",
    "notes": "Importado automáticamente del Artificial Analysis Intelligence Index (Coding Index 54.5). Precios aproximados; verifica en la web oficial del proveedor."
  },
  {
    "id": "qwen3-6-27b",
    "iiSlug": "qwen3-6-27b",
    "company": "Alibaba",
    "origin": "China",
    "displayName": "Qwen3.6 27B",
    "kind": "model",
    "category": [
      "coding",
      "reasoning",
      "agentic"
    ],
    "context": 262144,
    "pricing": {
      "inputPer1M": 0.6,
      "outputPer1M": 3.6,
      "approx": true
    },
    "modalities": [
      "text"
    ],
    "openWeight": true,
    "releaseDate": "2026-04-22",
    "parameters": 27.8,
    "notes": "Importado automáticamente del Artificial Analysis Intelligence Index (Coding Index 53.7). Precios aproximados; verifica en la web oficial del proveedor."
  },
  {
    "id": "minimax-m2-7",
    "iiSlug": "minimax-m2-7",
    "company": "MiniMax",
    "origin": "China",
    "displayName": "MiniMax-M2.7",
    "kind": "model",
    "category": [
      "coding",
      "reasoning",
      "agentic",
      "budget"
    ],
    "context": 204800,
    "pricing": {
      "inputPer1M": 0.3,
      "outputPer1M": 1.2,
      "approx": true
    },
    "modalities": [
      "text"
    ],
    "openWeight": true,
    "releaseDate": "2026-03-18",
    "parameters": 230.0,
    "notes": "Importado automáticamente del Artificial Analysis Intelligence Index (Coding Index 52.6). Precios aproximados; verifica en la web oficial del proveedor."
  },
  {
    "id": "grok-build-0-1-06-16",
    "iiSlug": "grok-build-0-1-06-16",
    "company": "xAI",
    "origin": "US",
    "displayName": "Grok Build 0.1 0616",
    "kind": "model",
    "category": [
      "coding",
      "reasoning",
      "agentic"
    ],
    "context": 256000,
    "pricing": {
      "inputPer1M": 1.0,
      "outputPer1M": 2.0,
      "approx": true
    },
    "modalities": [
      "text"
    ],
    "openWeight": false,
    "notes": "Importado automáticamente del Artificial Analysis Intelligence Index (Coding Index 51.5). Precios aproximados; verifica en la web oficial del proveedor."
  },
  {
    "id": "mimo-v2-flash",
    "iiSlug": "mimo-v2-flash",
    "company": "Xiaomi",
    "origin": "China",
    "displayName": "MiMo-V2-Flash",
    "kind": "model",
    "category": [
      "coding",
      "agentic",
      "budget"
    ],
    "context": 256000,
    "pricing": {
      "inputPer1M": 0.1,
      "outputPer1M": 0.3,
      "approx": true
    },
    "modalities": [
      "text"
    ],
    "openWeight": true,
    "releaseDate": "2025-12-16",
    "parameters": 309.0,
    "benchmarks": {
      "liveCodeBench": 0.4
    },
    "notes": "Importado automáticamente del Artificial Analysis Intelligence Index (Coding Index 49.8). Precios aproximados; verifica en la web oficial del proveedor."
  },
  {
    "id": "nvidia-nemotron-3-ultra-550b-a55b",
    "iiSlug": "nvidia-nemotron-3-ultra-550b-a55b",
    "company": "NVIDIA",
    "origin": "US",
    "displayName": "Nemotron 3 Ultra",
    "kind": "model",
    "category": [
      "coding",
      "reasoning",
      "agentic"
    ],
    "context": 262144,
    "pricing": {
      "inputPer1M": 0.675,
      "outputPer1M": 2.675,
      "approx": true
    },
    "modalities": [
      "text"
    ],
    "openWeight": true,
    "releaseDate": "2026-06-04",
    "parameters": 550.0,
    "notes": "Importado automáticamente del Artificial Analysis Intelligence Index (Coding Index 49.3). Precios aproximados; verifica en la web oficial del proveedor."
  },
  {
    "id": "qwen3-5-397b-a17b",
    "iiSlug": "qwen3-5-397b-a17b",
    "company": "Alibaba",
    "origin": "China",
    "displayName": "Qwen3.5 397B A17B",
    "kind": "model",
    "category": [
      "coding",
      "reasoning",
      "agentic"
    ],
    "context": 262144,
    "pricing": {
      "inputPer1M": 0.6,
      "outputPer1M": 3.6,
      "approx": true
    },
    "modalities": [
      "text"
    ],
    "openWeight": true,
    "releaseDate": "2026-02-16",
    "parameters": 397.0,
    "notes": "Importado automáticamente del Artificial Analysis Intelligence Index (Coding Index 48.2). Precios aproximados; verifica en la web oficial del proveedor."
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
      "reasoning",
      "agentic"
    ],
    "context": 256000,
    "pricing": {
      "inputPer1M": 1.5,
      "outputPer1M": 7.5,
      "approx": true
    },
    "modalities": [
      "text"
    ],
    "openWeight": true,
    "releaseDate": "2026-04-29",
    "parameters": 128.0,
    "notes": "Importado automáticamente del Artificial Analysis Intelligence Index (Coding Index 46.9). Precios aproximados; verifica en la web oficial del proveedor."
  },
  {
    "id": "qwen3-6-27b-non-reasoning",
    "iiSlug": "qwen3-6-27b-non-reasoning",
    "company": "Alibaba",
    "origin": "China",
    "displayName": "Qwen3.6 27B",
    "kind": "model",
    "category": [
      "coding"
    ],
    "context": 262144,
    "pricing": {
      "inputPer1M": 0.6,
      "outputPer1M": 3.6,
      "approx": true
    },
    "modalities": [
      "text"
    ],
    "openWeight": true,
    "releaseDate": "2026-04-22",
    "parameters": 27.8,
    "notes": "Importado automáticamente del Artificial Analysis Intelligence Index (Coding Index 46.6). Precios aproximados; verifica en la web oficial del proveedor."
  },
  {
    "id": "qwen3-5-122b-a10b",
    "iiSlug": "qwen3-5-122b-a10b",
    "company": "Alibaba",
    "origin": "China",
    "displayName": "Qwen3.5 122B A10B",
    "kind": "model",
    "category": [
      "coding",
      "reasoning",
      "agentic",
      "budget"
    ],
    "context": 262144,
    "pricing": {
      "inputPer1M": 0.4,
      "outputPer1M": 3.2,
      "approx": true
    },
    "modalities": [
      "text"
    ],
    "openWeight": true,
    "releaseDate": "2026-02-24",
    "parameters": 125.0,
    "notes": "Importado automáticamente del Artificial Analysis Intelligence Index (Coding Index 45.7). Precios aproximados; verifica en la web oficial del proveedor."
  },
  {
    "id": "claude-4-5-haiku-reasoning",
    "iiSlug": "claude-4-5-haiku-reasoning",
    "company": "Anthropic",
    "origin": "US",
    "displayName": "Claude 4.5 Haiku",
    "kind": "model",
    "category": [
      "coding",
      "reasoning",
      "agentic"
    ],
    "context": 200000,
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
      "liveCodeBench": 0.6
    },
    "notes": "Importado automáticamente del Artificial Analysis Intelligence Index (Coding Index 43.9). Precios aproximados; verifica en la web oficial del proveedor."
  },
  {
    "id": "gemma-4-31b",
    "iiSlug": "gemma-4-31b",
    "company": "Google",
    "origin": "US",
    "displayName": "Gemma 4 31B",
    "kind": "model",
    "category": [
      "coding",
      "reasoning",
      "agentic",
      "budget"
    ],
    "context": 256000,
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "modalities": [
      "text"
    ],
    "openWeight": true,
    "releaseDate": "2026-04-02",
    "parameters": 30.7,
    "notes": "Importado automáticamente del Artificial Analysis Intelligence Index (Coding Index 43.4). Precios aproximados; verifica en la web oficial del proveedor."
  },
  {
    "id": "ring-2-6-1t",
    "iiSlug": "ring-2-6-1t",
    "company": "InclusionAI",
    "origin": "China",
    "displayName": "Ring-2.6-1T",
    "kind": "model",
    "category": [
      "coding",
      "reasoning",
      "agentic",
      "budget"
    ],
    "context": 262144,
    "pricing": {
      "inputPer1M": 0.3,
      "outputPer1M": 2.5,
      "approx": true
    },
    "modalities": [
      "text"
    ],
    "openWeight": true,
    "releaseDate": "2026-05-08",
    "parameters": 1000.0,
    "notes": "Importado automáticamente del Artificial Analysis Intelligence Index (Coding Index 42.8). Precios aproximados; verifica en la web oficial del proveedor."
  },
  {
    "id": "grok-4-3",
    "iiSlug": "grok-4-3",
    "company": "xAI",
    "origin": "US",
    "displayName": "Grok 4.3 (high)",
    "kind": "model",
    "category": [
      "coding",
      "reasoning",
      "agentic"
    ],
    "context": 1000000,
    "pricing": {
      "inputPer1M": 1.25,
      "outputPer1M": 2.5,
      "approx": true
    },
    "modalities": [
      "text"
    ],
    "openWeight": false,
    "releaseDate": "2026-04-30",
    "notes": "Importado automáticamente del Artificial Analysis Intelligence Index (Coding Index 42.2). Precios aproximados; verifica en la web oficial del proveedor."
  },
  {
    "id": "qwen3-6-35b-a3b",
    "iiSlug": "qwen3-6-35b-a3b",
    "company": "Alibaba",
    "origin": "China",
    "displayName": "Qwen3.6 35B A3B",
    "kind": "model",
    "category": [
      "coding",
      "reasoning",
      "agentic",
      "budget"
    ],
    "context": 262144,
    "pricing": {
      "inputPer1M": 0.248,
      "outputPer1M": 1.485,
      "approx": true
    },
    "modalities": [
      "text"
    ],
    "openWeight": true,
    "releaseDate": "2026-04-16",
    "parameters": 36.0,
    "notes": "Importado automáticamente del Artificial Analysis Intelligence Index (Coding Index 41.9). Precios aproximados; verifica en la web oficial del proveedor."
  },
  {
    "id": "gpt-5-5-instant-06-26",
    "iiSlug": "gpt-5-5-instant-06-26",
    "company": "OpenAI",
    "origin": "US",
    "displayName": "GPT-5.5 Instant (June 2026)",
    "kind": "model",
    "category": [
      "coding",
      "reasoning",
      "agentic"
    ],
    "context": 400000,
    "pricing": {
      "inputPer1M": 5.0,
      "outputPer1M": 30.0,
      "approx": true
    },
    "modalities": [
      "text"
    ],
    "openWeight": false,
    "releaseDate": "2026-06-25",
    "notes": "Importado automáticamente del Artificial Analysis Intelligence Index (Coding Index 39.4). Precios aproximados; verifica en la web oficial del proveedor."
  },
  {
    "id": "gemma-4-26b-a4b",
    "iiSlug": "gemma-4-26b-a4b",
    "company": "Google",
    "origin": "US",
    "displayName": "Gemma 4 26B A4B",
    "kind": "model",
    "category": [
      "coding",
      "reasoning",
      "agentic",
      "budget"
    ],
    "context": 256000,
    "pricing": {
      "inputPer1M": 0.13,
      "outputPer1M": 0.4,
      "approx": true
    },
    "modalities": [
      "text"
    ],
    "openWeight": true,
    "releaseDate": "2026-04-02",
    "parameters": 25.2,
    "notes": "Importado automáticamente del Artificial Analysis Intelligence Index (Coding Index 39.3). Precios aproximados; verifica en la web oficial del proveedor."
  },
  {
    "id": "nvidia-nemotron-3-super-120b-a12b",
    "iiSlug": "nvidia-nemotron-3-super-120b-a12b",
    "company": "NVIDIA",
    "origin": "US",
    "displayName": "NVIDIA Nemotron 3 Super",
    "kind": "model",
    "category": [
      "coding",
      "reasoning",
      "agentic",
      "budget"
    ],
    "context": 1000000,
    "pricing": {
      "inputPer1M": 0.3,
      "outputPer1M": 0.75,
      "approx": true
    },
    "modalities": [
      "text"
    ],
    "openWeight": true,
    "releaseDate": "2026-03-11",
    "parameters": 120.6,
    "notes": "Importado automáticamente del Artificial Analysis Intelligence Index (Coding Index 37.7). Precios aproximados; verifica en la web oficial del proveedor."
  },
  {
    "id": "step-3-7-flash",
    "iiSlug": "step-3-7-flash",
    "company": "StepFun",
    "origin": "China",
    "displayName": "Step 3.7 Flash",
    "kind": "model",
    "category": [
      "coding",
      "reasoning",
      "agentic",
      "budget"
    ],
    "context": 262144,
    "pricing": {
      "inputPer1M": 0.2,
      "outputPer1M": 1.15,
      "approx": true
    },
    "modalities": [
      "text"
    ],
    "openWeight": true,
    "releaseDate": "2026-05-29",
    "parameters": 198.0,
    "notes": "Importado automáticamente del Artificial Analysis Intelligence Index (Coding Index 37.3). Precios aproximados; verifica en la web oficial del proveedor."
  },
  {
    "id": "grok-4-3-non-reasoning",
    "iiSlug": "grok-4-3-non-reasoning",
    "company": "xAI",
    "origin": "US",
    "displayName": "Grok 4.3 (Non-reasoning)",
    "kind": "model",
    "category": [
      "coding",
      "agentic"
    ],
    "context": 1000000,
    "pricing": {
      "inputPer1M": 1.25,
      "outputPer1M": 2.5,
      "approx": true
    },
    "modalities": [
      "text"
    ],
    "openWeight": false,
    "releaseDate": "2026-04-30",
    "notes": "Importado automáticamente del Artificial Analysis Intelligence Index (Coding Index 35.2). Precios aproximados; verifica en la web oficial del proveedor."
  },
  {
    "id": "gemini-3-1-flash-lite-preview",
    "iiSlug": "gemini-3-1-flash-lite-preview",
    "company": "Google",
    "origin": "US",
    "displayName": "Gemini 3.1 Flash-Lite",
    "kind": "model",
    "category": [
      "coding",
      "reasoning",
      "agentic",
      "budget"
    ],
    "context": 1000000,
    "pricing": {
      "inputPer1M": 0.25,
      "outputPer1M": 1.5,
      "approx": true
    },
    "modalities": [
      "text"
    ],
    "openWeight": false,
    "releaseDate": "2026-03-03",
    "notes": "Importado automáticamente del Artificial Analysis Intelligence Index (Coding Index 34.7). Precios aproximados; verifica en la web oficial del proveedor."
  },
  {
    "id": "nova-2-0-pro-reasoning-medium",
    "iiSlug": "nova-2-0-pro-reasoning-medium",
    "company": "Amazon",
    "origin": "US",
    "displayName": "Nova 2.0 Pro Preview (medium)",
    "kind": "model",
    "category": [
      "coding",
      "reasoning",
      "agentic"
    ],
    "context": 256000,
    "pricing": {
      "inputPer1M": 1.25,
      "outputPer1M": 10.0,
      "approx": true
    },
    "modalities": [
      "text"
    ],
    "openWeight": false,
    "releaseDate": "2025-11-27",
    "benchmarks": {
      "liveCodeBench": 0.7
    },
    "notes": "Importado automáticamente del Artificial Analysis Intelligence Index (Coding Index 34.0). Precios aproximados; verifica en la web oficial del proveedor."
  },
  {
    "id": "gemini-2-5-pro",
    "iiSlug": "gemini-2-5-pro",
    "company": "Google",
    "origin": "US",
    "displayName": "Gemini 2.5 Pro",
    "kind": "model",
    "category": [
      "coding",
      "reasoning",
      "agentic"
    ],
    "context": 1000000,
    "pricing": {
      "inputPer1M": 1.25,
      "outputPer1M": 10.0,
      "approx": true
    },
    "modalities": [
      "text"
    ],
    "openWeight": false,
    "releaseDate": "2025-06-05",
    "benchmarks": {
      "liveCodeBench": 0.8
    },
    "notes": "Importado automáticamente del Artificial Analysis Intelligence Index (Coding Index 33.3). Precios aproximados; verifica en la web oficial del proveedor."
  }
];

export const autoSpecs: Record<string, AutoSpec> = {
  "claude-fable-5": {
    "pricing": {
      "inputPer1M": 10.0,
      "outputPer1M": 50.0,
      "approx": true
    },
    "context": 1000000,
    "releaseDate": "2026-06-09"
  },
  "claude-opus-4-8": {
    "pricing": {
      "inputPer1M": 5.0,
      "outputPer1M": 25.0,
      "approx": true
    },
    "context": 1000000,
    "releaseDate": "2026-05-28"
  },
  "gpt-5-5": {
    "pricing": {
      "inputPer1M": 5.0,
      "outputPer1M": 30.0,
      "approx": true
    },
    "context": 922000,
    "releaseDate": "2026-04-23"
  },
  "claude-opus-4-7": {
    "pricing": {
      "inputPer1M": 5.0,
      "outputPer1M": 25.0,
      "approx": true
    },
    "context": 1000000,
    "releaseDate": "2026-04-16"
  },
  "claude-sonnet-5": {
    "pricing": {
      "inputPer1M": 3.0,
      "outputPer1M": 15.0,
      "approx": true
    },
    "context": 1000000,
    "releaseDate": "2026-06-30"
  },
  "gpt-5-5-high": {
    "pricing": {
      "inputPer1M": 5.0,
      "outputPer1M": 30.0,
      "approx": true
    },
    "context": 922000,
    "releaseDate": "2026-04-23"
  },
  "gpt-5-4": {
    "pricing": {
      "inputPer1M": 2.5,
      "outputPer1M": 15.0,
      "approx": true
    },
    "context": 1050000,
    "releaseDate": "2026-03-05"
  },
  "glm-5-2": {
    "pricing": {
      "inputPer1M": 1.4,
      "outputPer1M": 4.4,
      "approx": true
    },
    "context": 1000000,
    "parameters": 753.0,
    "releaseDate": "2026-06-16"
  },
  "gpt-5-5-medium": {
    "pricing": {
      "inputPer1M": 5.0,
      "outputPer1M": 30.0,
      "approx": true
    },
    "context": 922000,
    "releaseDate": "2026-04-23"
  },
  "gemini-3-5-flash": {
    "pricing": {
      "inputPer1M": 1.5,
      "outputPer1M": 9.0,
      "approx": true
    },
    "context": 1000000,
    "releaseDate": "2026-05-19"
  },
  "claude-sonnet-4-6-adaptive": {
    "pricing": {
      "inputPer1M": 3.0,
      "outputPer1M": 15.0,
      "approx": true
    },
    "context": 1000000,
    "releaseDate": "2026-02-17"
  },
  "gemini-3-1-pro-preview": {
    "pricing": {
      "inputPer1M": 2.0,
      "outputPer1M": 12.0,
      "approx": true
    },
    "context": 1000000,
    "releaseDate": "2026-02-19"
  },
  "qwen3-7-max": {
    "pricing": {
      "inputPer1M": 2.5,
      "outputPer1M": 7.5,
      "approx": true
    },
    "context": 1000000,
    "releaseDate": "2026-05-19"
  },
  "gemini-3-5-flash-medium": {
    "pricing": {
      "inputPer1M": 1.5,
      "outputPer1M": 9.0,
      "approx": true
    },
    "context": 1000000,
    "releaseDate": "2026-05-19"
  },
  "minimax-m3": {
    "pricing": {
      "inputPer1M": 0.3,
      "outputPer1M": 1.2,
      "approx": true
    },
    "context": 1000000,
    "parameters": 428.0,
    "releaseDate": "2026-06-01"
  },
  "deepseek-v4-pro": {
    "pricing": {
      "inputPer1M": 0.435,
      "outputPer1M": 0.87,
      "approx": true
    },
    "context": 1000000,
    "parameters": 1600.0,
    "releaseDate": "2026-04-24"
  },
  "gpt-5-3-codex": {
    "pricing": {
      "inputPer1M": 1.75,
      "outputPer1M": 14.0,
      "approx": true
    },
    "context": 400000,
    "releaseDate": "2026-02-05"
  },
  "claude-opus-4-6-adaptive": {
    "pricing": {
      "inputPer1M": 5.0,
      "outputPer1M": 25.0,
      "approx": true
    },
    "context": 1000000,
    "releaseDate": "2026-02-05"
  },
  "gpt-5-5-low": {
    "pricing": {
      "inputPer1M": 5.0,
      "outputPer1M": 30.0,
      "approx": true
    },
    "context": 922000,
    "releaseDate": "2026-04-23"
  },
  "muse-spark": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 262144,
    "releaseDate": "2026-04-08"
  },
  "kimi-k2-6": {
    "pricing": {
      "inputPer1M": 0.95,
      "outputPer1M": 4.0,
      "approx": true
    },
    "context": 256000,
    "parameters": 1000.0,
    "releaseDate": "2026-04-20"
  },
  "claude-opus-4-7-non-reasoning": {
    "pricing": {
      "inputPer1M": 5.0,
      "outputPer1M": 25.0,
      "approx": true
    },
    "context": 1000000,
    "releaseDate": "2026-04-16"
  },
  "mimo-v2-5-pro": {
    "pricing": {
      "inputPer1M": 0.435,
      "outputPer1M": 0.87,
      "approx": true
    },
    "context": 1000000,
    "parameters": 1023.0,
    "releaseDate": "2026-04-22"
  },
  "gpt-5-2": {
    "pricing": {
      "inputPer1M": 1.75,
      "outputPer1M": 14.0,
      "approx": true
    },
    "context": 400000,
    "benchmarks": {
      "liveCodeBench": 0.9
    },
    "releaseDate": "2025-12-11"
  },
  "kimi-k2-7-code": {
    "pricing": {
      "inputPer1M": 0.95,
      "outputPer1M": 4.0,
      "approx": true
    },
    "context": 256000,
    "parameters": 1000.0,
    "releaseDate": "2026-06-12"
  },
  "claude-sonnet-5-non-reasoning": {
    "pricing": {
      "inputPer1M": 3.0,
      "outputPer1M": 15.0,
      "approx": true
    },
    "context": 1000000,
    "releaseDate": "2026-06-30"
  },
  "nex-n2-pro": {
    "pricing": {
      "inputPer1M": 0.5,
      "outputPer1M": 2.5,
      "approx": true
    },
    "context": 262000,
    "parameters": 397.0,
    "releaseDate": "2026-06-02"
  },
  "deepseek-v4-pro-high": {
    "pricing": {
      "inputPer1M": 0.435,
      "outputPer1M": 0.87,
      "approx": true
    },
    "context": 1000000,
    "parameters": 1600.0,
    "releaseDate": "2026-04-24"
  },
  "claude-opus-4-5-thinking": {
    "pricing": {
      "inputPer1M": 5.0,
      "outputPer1M": 25.0,
      "approx": true
    },
    "context": 200000,
    "benchmarks": {
      "liveCodeBench": 0.9
    },
    "releaseDate": "2025-11-24"
  },
  "mimo-v2-pro": {
    "pricing": {
      "inputPer1M": 1.0,
      "outputPer1M": 3.0,
      "approx": true
    },
    "context": 1000000,
    "releaseDate": "2026-03-18"
  },
  "deepseek-v4-flash": {
    "pricing": {
      "inputPer1M": 0.14,
      "outputPer1M": 0.28,
      "approx": true
    },
    "context": 1000000,
    "parameters": 284.0,
    "releaseDate": "2026-04-24"
  },
  "glm-5-1": {
    "pricing": {
      "inputPer1M": 1.4,
      "outputPer1M": 4.4,
      "approx": true
    },
    "context": 200000,
    "parameters": 744.0,
    "releaseDate": "2026-04-07"
  },
  "gpt-5-2-codex": {
    "pricing": {
      "inputPer1M": 1.75,
      "outputPer1M": 14.0,
      "approx": true
    },
    "context": 400000,
    "releaseDate": "2025-12-11"
  },
  "mimo-v2-5-0424": {
    "pricing": {
      "inputPer1M": 0.14,
      "outputPer1M": 0.28,
      "approx": true
    },
    "context": 1000000,
    "parameters": 310.0,
    "releaseDate": "2026-04-22"
  },
  "qwen3-6-max": {
    "pricing": {
      "inputPer1M": 1.3,
      "outputPer1M": 7.8,
      "approx": true
    },
    "context": 256000,
    "releaseDate": "2026-04-20"
  },
  "gpt-5-4-mini": {
    "pricing": {
      "inputPer1M": 0.75,
      "outputPer1M": 4.5,
      "approx": true
    },
    "context": 400000,
    "releaseDate": "2026-03-17"
  },
  "grok-build-0-1-06-16": {
    "pricing": {
      "inputPer1M": 1.0,
      "outputPer1M": 2.0,
      "approx": true
    },
    "context": 256000
  },
  "qwen3-6-plus": {
    "pricing": {
      "inputPer1M": 0.5,
      "outputPer1M": 3.0,
      "approx": true
    },
    "context": 1000000,
    "releaseDate": "2026-04-02"
  },
  "gemini-3-pro": {
    "pricing": {
      "inputPer1M": 2.0,
      "outputPer1M": 12.0,
      "approx": true
    },
    "context": 1000000,
    "benchmarks": {
      "liveCodeBench": 0.9
    },
    "releaseDate": "2025-11-18"
  },
  "glm-5": {
    "pricing": {
      "inputPer1M": 1.0,
      "outputPer1M": 3.2,
      "approx": true
    },
    "context": 200000,
    "parameters": 744.0,
    "releaseDate": "2026-02-11"
  },
  "gpt-5-4-low": {
    "pricing": {
      "inputPer1M": 2.5,
      "outputPer1M": 15.0,
      "approx": true
    },
    "context": 1050000,
    "releaseDate": "2026-03-05"
  },
  "qwen3-7-plus": {
    "pricing": {
      "inputPer1M": 0.4,
      "outputPer1M": 1.16,
      "approx": true
    },
    "context": 1000000,
    "releaseDate": "2026-06-01"
  },
  "gpt-5-4-nano": {
    "pricing": {
      "inputPer1M": 0.2,
      "outputPer1M": 1.25,
      "approx": true
    },
    "context": 400000,
    "releaseDate": "2026-03-17"
  },
  "minimax-m2-7": {
    "pricing": {
      "inputPer1M": 0.3,
      "outputPer1M": 1.2,
      "approx": true
    },
    "context": 204800,
    "parameters": 230.0,
    "releaseDate": "2026-03-18"
  },
  "kimi-k2-5": {
    "pricing": {
      "inputPer1M": 0.6,
      "outputPer1M": 3.0,
      "approx": true
    },
    "context": 256000,
    "parameters": 1000.0,
    "releaseDate": "2026-01-27"
  },
  "glm-5-turbo": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 200000,
    "releaseDate": "2026-03-15"
  },
  "gpt-5-2-medium": {
    "pricing": {
      "inputPer1M": 1.75,
      "outputPer1M": 14.0,
      "approx": true
    },
    "context": 400000,
    "benchmarks": {
      "liveCodeBench": 0.9
    },
    "releaseDate": "2025-12-11"
  },
  "claude-opus-4-6": {
    "pricing": {
      "inputPer1M": 5.0,
      "outputPer1M": 25.0,
      "approx": true
    },
    "context": 1000000,
    "releaseDate": "2026-02-05"
  },
  "nvidia-nemotron-3-ultra-550b-a55b": {
    "pricing": {
      "inputPer1M": 0.675,
      "outputPer1M": 2.675,
      "approx": true
    },
    "context": 262144,
    "parameters": 550.0,
    "releaseDate": "2026-06-04"
  },
  "gemini-3-flash-reasoning": {
    "pricing": {
      "inputPer1M": 0.5,
      "outputPer1M": 3.0,
      "approx": true
    },
    "context": 1000000,
    "benchmarks": {
      "liveCodeBench": 0.9
    },
    "releaseDate": "2025-12-17"
  },
  "grok-4-3": {
    "pricing": {
      "inputPer1M": 1.25,
      "outputPer1M": 2.5,
      "approx": true
    },
    "context": 1000000,
    "releaseDate": "2026-04-30"
  },
  "deepseek-v4-flash-high": {
    "pricing": {
      "inputPer1M": 0.14,
      "outputPer1M": 0.28,
      "approx": true
    },
    "context": 1000000,
    "parameters": 284.0,
    "releaseDate": "2026-04-24"
  },
  "qwen3-6-27b": {
    "pricing": {
      "inputPer1M": 0.6,
      "outputPer1M": 3.6,
      "approx": true
    },
    "context": 262144,
    "parameters": 27.8,
    "releaseDate": "2026-04-22"
  },
  "grok-4-20": {
    "pricing": {
      "inputPer1M": 2.0,
      "outputPer1M": 6.0,
      "approx": true
    },
    "context": 2000000,
    "releaseDate": "2026-04-07"
  },
  "gpt-5-1": {
    "pricing": {
      "inputPer1M": 1.25,
      "outputPer1M": 10.0,
      "approx": true
    },
    "context": 272000,
    "benchmarks": {
      "liveCodeBench": 0.9
    },
    "releaseDate": "2025-11-13"
  },
  "grok-4-20-0309": {
    "pricing": {
      "inputPer1M": 2.0,
      "outputPer1M": 6.0,
      "approx": true
    },
    "context": 2000000,
    "releaseDate": "2026-03-10"
  },
  "claude-4-5-sonnet-thinking": {
    "pricing": {
      "inputPer1M": 3.0,
      "outputPer1M": 15.0,
      "approx": true
    },
    "context": 1000000,
    "benchmarks": {
      "liveCodeBench": 0.7
    },
    "releaseDate": "2025-09-29"
  },
  "mimo-v2-omni-0327": {
    "pricing": {
      "inputPer1M": 0.4,
      "outputPer1M": 2.0,
      "approx": true
    },
    "context": 256000,
    "releaseDate": "2026-03-27"
  },
  "gpt-5-codex": {
    "pricing": {
      "inputPer1M": 1.25,
      "outputPer1M": 10.0,
      "approx": true
    },
    "context": 400000,
    "benchmarks": {
      "liveCodeBench": 0.8
    },
    "releaseDate": "2025-09-23"
  },
  "gpt-5": {
    "pricing": {
      "inputPer1M": 1.25,
      "outputPer1M": 10.0,
      "approx": true
    },
    "context": 400000,
    "benchmarks": {
      "liveCodeBench": 0.8,
      "humanEval": 1.0
    },
    "releaseDate": "2025-08-07"
  },
  "grok-4-3-medium": {
    "pricing": {
      "inputPer1M": 1.25,
      "outputPer1M": 2.5,
      "approx": true
    },
    "context": 1000000,
    "releaseDate": "2026-04-30"
  },
  "claude-sonnet-4-6": {
    "pricing": {
      "inputPer1M": 3.0,
      "outputPer1M": 15.0,
      "approx": true
    },
    "context": 1000000,
    "releaseDate": "2026-02-17"
  },
  "grok-4-3-low": {
    "pricing": {
      "inputPer1M": 1.25,
      "outputPer1M": 2.5,
      "approx": true
    },
    "context": 1000000,
    "releaseDate": "2026-04-30"
  },
  "kat-coder-pro-v2": {
    "pricing": {
      "inputPer1M": 0.3,
      "outputPer1M": 1.2,
      "approx": true
    },
    "context": 256000,
    "releaseDate": "2026-03-27"
  },
  "gpt-5-5-non-reasoning": {
    "pricing": {
      "inputPer1M": 5.0,
      "outputPer1M": 30.0,
      "approx": true
    },
    "context": 922000,
    "releaseDate": "2026-04-23"
  },
  "glm-5-1-non-reasoning": {
    "pricing": {
      "inputPer1M": 1.4,
      "outputPer1M": 4.4,
      "approx": true
    },
    "context": 200000,
    "parameters": 744.0,
    "releaseDate": "2026-04-07"
  },
  "mimo-v2-omni": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 256000,
    "releaseDate": "2026-03-19"
  },
  "gemini-3-5-flash-minimal": {
    "pricing": {
      "inputPer1M": 1.5,
      "outputPer1M": 9.0,
      "approx": true
    },
    "context": 1000000,
    "releaseDate": "2026-05-19"
  },
  "gpt-5-1-codex": {
    "pricing": {
      "inputPer1M": 1.25,
      "outputPer1M": 10.0,
      "approx": true
    },
    "context": 400000,
    "benchmarks": {
      "liveCodeBench": 0.8
    },
    "releaseDate": "2025-11-13"
  },
  "claude-opus-4-5": {
    "pricing": {
      "inputPer1M": 5.0,
      "outputPer1M": 25.0,
      "approx": true
    },
    "context": 200000,
    "benchmarks": {
      "liveCodeBench": 0.7
    },
    "releaseDate": "2025-11-24"
  },
  "kat-coder-pro-v1": {
    "pricing": {
      "inputPer1M": 0.3,
      "outputPer1M": 1.2,
      "approx": true
    },
    "context": 256000,
    "benchmarks": {
      "liveCodeBench": 0.7
    },
    "releaseDate": "2025-11-11"
  },
  "kimi-k2-6-non-reasoning": {
    "pricing": {
      "inputPer1M": 0.95,
      "outputPer1M": 4.0,
      "approx": true
    },
    "context": 256000,
    "parameters": 1000.0,
    "releaseDate": "2026-04-20"
  },
  "glm-5v-turbo": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 200000,
    "releaseDate": "2026-04-01"
  },
  "claude-sonnet-4-6-non-reasoning-low-effort": {
    "pricing": {
      "inputPer1M": 3.0,
      "outputPer1M": 15.0,
      "approx": true
    },
    "context": 1000000,
    "releaseDate": "2026-02-17"
  },
  "qwen3-5-27b": {
    "pricing": {
      "inputPer1M": 0.3,
      "outputPer1M": 2.4,
      "approx": true
    },
    "context": 262144,
    "parameters": 27.8,
    "releaseDate": "2026-02-24"
  },
  "gpt-5-medium": {
    "pricing": {
      "inputPer1M": 1.25,
      "outputPer1M": 10.0,
      "approx": true
    },
    "context": 400000,
    "benchmarks": {
      "liveCodeBench": 0.7,
      "humanEval": 1.0
    },
    "releaseDate": "2025-08-07"
  },
  "claude-4-1-opus-thinking": {
    "pricing": {
      "inputPer1M": 15.0,
      "outputPer1M": 75.0,
      "approx": true
    },
    "context": 200000,
    "benchmarks": {
      "liveCodeBench": 0.7
    },
    "releaseDate": "2025-08-05"
  },
  "glm-4-7": {
    "pricing": {
      "inputPer1M": 0.6,
      "outputPer1M": 2.2,
      "approx": true
    },
    "context": 200000,
    "benchmarks": {
      "liveCodeBench": 0.9
    },
    "parameters": 357.0,
    "releaseDate": "2025-12-22"
  },
  "qwen3-5-397b-a17b": {
    "pricing": {
      "inputPer1M": 0.6,
      "outputPer1M": 3.6,
      "approx": true
    },
    "context": 262144,
    "parameters": 397.0,
    "releaseDate": "2026-02-16"
  },
  "minimax-m2-5": {
    "pricing": {
      "inputPer1M": 0.3,
      "outputPer1M": 1.2,
      "approx": true
    },
    "context": 204800,
    "parameters": 230.0,
    "releaseDate": "2026-02-12"
  },
  "hy3": {
    "pricing": {
      "inputPer1M": 0.123,
      "outputPer1M": 0.43,
      "approx": true
    },
    "context": 256000,
    "parameters": 295.0,
    "releaseDate": "2026-04-23"
  },
  "gpt-5-5-instant-05-26": {
    "pricing": {
      "inputPer1M": 5.0,
      "outputPer1M": 30.0,
      "approx": true
    },
    "context": 400000,
    "releaseDate": "2026-05-05"
  },
  "deepseek-v3-2-reasoning": {
    "pricing": {
      "inputPer1M": 0.28,
      "outputPer1M": 0.42,
      "approx": true
    },
    "context": 128000,
    "benchmarks": {
      "liveCodeBench": 0.9
    },
    "parameters": 685.0,
    "releaseDate": "2025-12-01"
  },
  "grok-4": {
    "pricing": {
      "inputPer1M": 5.5,
      "outputPer1M": 27.5,
      "approx": true
    },
    "context": 256000,
    "benchmarks": {
      "liveCodeBench": 0.8,
      "humanEval": 1.0
    },
    "releaseDate": "2025-07-10"
  },
  "mimo-v2-0206": {
    "pricing": {
      "inputPer1M": 0.1,
      "outputPer1M": 0.3,
      "approx": true
    },
    "context": 256000,
    "parameters": 309.0,
    "releaseDate": "2025-12-16"
  },
  "gemini-3-pro-low": {
    "pricing": {
      "inputPer1M": 2.0,
      "outputPer1M": 12.0,
      "approx": true
    },
    "context": 1000000,
    "benchmarks": {
      "liveCodeBench": 0.9
    },
    "releaseDate": "2025-11-18"
  },
  "kimi-k2-thinking": {
    "pricing": {
      "inputPer1M": 0.6,
      "outputPer1M": 2.5,
      "approx": true
    },
    "context": 256000,
    "benchmarks": {
      "liveCodeBench": 0.9
    },
    "parameters": 1000.0,
    "releaseDate": "2025-11-06"
  },
  "o3-pro": {
    "pricing": {
      "inputPer1M": 20.0,
      "outputPer1M": 80.0,
      "approx": true
    },
    "context": 200000,
    "releaseDate": "2025-06-10"
  },
  "glm-5-non-reasoning": {
    "pricing": {
      "inputPer1M": 1.0,
      "outputPer1M": 3.2,
      "approx": true
    },
    "context": 200000,
    "parameters": 744.0,
    "releaseDate": "2026-02-11"
  },
  "qwen3-5-122b-a10b": {
    "pricing": {
      "inputPer1M": 0.4,
      "outputPer1M": 3.2,
      "approx": true
    },
    "context": 262144,
    "parameters": 125.0,
    "releaseDate": "2026-02-24"
  },
  "qwen3-5-397b-a17b-non-reasoning": {
    "pricing": {
      "inputPer1M": 0.6,
      "outputPer1M": 3.6,
      "approx": true
    },
    "context": 262144,
    "parameters": 397.0,
    "releaseDate": "2026-02-16"
  },
  "qwen3-max-thinking": {
    "pricing": {
      "inputPer1M": 1.2,
      "outputPer1M": 6.0,
      "approx": true
    },
    "context": 256000,
    "releaseDate": "2026-01-26"
  },
  "qwen3-6-35b-a3b": {
    "pricing": {
      "inputPer1M": 0.248,
      "outputPer1M": 1.485,
      "approx": true
    },
    "context": 262144,
    "parameters": 36.0,
    "releaseDate": "2026-04-16"
  },
  "minimax-m2-1": {
    "pricing": {
      "inputPer1M": 0.3,
      "outputPer1M": 1.2,
      "approx": true
    },
    "context": 204800,
    "benchmarks": {
      "liveCodeBench": 0.8
    },
    "parameters": 230.0,
    "releaseDate": "2025-12-23"
  },
  "deepseek-v4-pro-non-reasoning": {
    "pricing": {
      "inputPer1M": 0.435,
      "outputPer1M": 0.87,
      "approx": true
    },
    "context": 1000000,
    "parameters": 1600.0,
    "releaseDate": "2026-04-24"
  },
  "mimo-v2-flash-reasoning": {
    "pricing": {
      "inputPer1M": 0.1,
      "outputPer1M": 0.3,
      "approx": true
    },
    "context": 256000,
    "benchmarks": {
      "liveCodeBench": 0.9
    },
    "parameters": 309.0,
    "releaseDate": "2025-12-16"
  },
  "gpt-5-low": {
    "pricing": {
      "inputPer1M": 1.25,
      "outputPer1M": 10.0,
      "approx": true
    },
    "context": 400000,
    "benchmarks": {
      "liveCodeBench": 0.8,
      "humanEval": 1.0
    },
    "releaseDate": "2025-08-07"
  },
  "claude-4-opus-thinking": {
    "pricing": {
      "inputPer1M": 15.0,
      "outputPer1M": 75.0,
      "approx": true
    },
    "context": 200000,
    "benchmarks": {
      "liveCodeBench": 0.6
    },
    "releaseDate": "2025-05-22"
  },
  "gpt-5-mini-medium": {
    "pricing": {
      "inputPer1M": 0.25,
      "outputPer1M": 2.0,
      "approx": true
    },
    "context": 400000,
    "benchmarks": {
      "liveCodeBench": 0.7
    },
    "releaseDate": "2025-08-07"
  },
  "qwen3-5-omni-plus": {
    "pricing": {
      "inputPer1M": 0.4,
      "outputPer1M": 4.8,
      "approx": true
    },
    "context": 256000,
    "releaseDate": "2026-03-30"
  },
  "gpt-5-1-codex-mini": {
    "pricing": {
      "inputPer1M": 0.25,
      "outputPer1M": 2.0,
      "approx": true
    },
    "context": 400000,
    "benchmarks": {
      "liveCodeBench": 0.8
    },
    "releaseDate": "2025-11-13"
  },
  "grok-4-1-fast-reasoning": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 2000000,
    "benchmarks": {
      "liveCodeBench": 0.8
    },
    "releaseDate": "2025-11-19"
  },
  "ring-2-6-1t": {
    "pricing": {
      "inputPer1M": 0.3,
      "outputPer1M": 2.5,
      "approx": true
    },
    "context": 262144,
    "parameters": 1000.0,
    "releaseDate": "2026-05-08"
  },
  "o3": {
    "pricing": {
      "inputPer1M": 2.0,
      "outputPer1M": 8.0,
      "approx": true
    },
    "context": 200000,
    "benchmarks": {
      "liveCodeBench": 0.8,
      "humanEval": 1.0
    },
    "releaseDate": "2025-04-16"
  },
  "gpt-5-4-nano-medium": {
    "pricing": {
      "inputPer1M": 0.2,
      "outputPer1M": 1.25,
      "approx": true
    },
    "context": 400000,
    "releaseDate": "2026-03-17"
  },
  "mistral-medium-3-5": {
    "pricing": {
      "inputPer1M": 1.5,
      "outputPer1M": 7.5,
      "approx": true
    },
    "context": 256000,
    "parameters": 128.0,
    "releaseDate": "2026-04-29"
  },
  "gpt-5-4-mini-medium": {
    "pricing": {
      "inputPer1M": 0.75,
      "outputPer1M": 4.5,
      "approx": true
    },
    "context": 400000,
    "releaseDate": "2026-03-17"
  },
  "step-3-7-flash": {
    "pricing": {
      "inputPer1M": 0.2,
      "outputPer1M": 1.15,
      "approx": true
    },
    "context": 262144,
    "parameters": 198.0,
    "releaseDate": "2026-05-29"
  },
  "claude-4-5-haiku-reasoning": {
    "pricing": {
      "inputPer1M": 1.0,
      "outputPer1M": 5.0,
      "approx": true
    },
    "context": 200000,
    "benchmarks": {
      "liveCodeBench": 0.6
    },
    "releaseDate": "2025-10-15"
  },
  "kimi-k2-5-non-reasoning": {
    "pricing": {
      "inputPer1M": 0.6,
      "outputPer1M": 3.0,
      "approx": true
    },
    "context": 256000,
    "parameters": 1000.0,
    "releaseDate": "2026-01-27"
  },
  "gemma-4-31b": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 256000,
    "parameters": 30.7,
    "releaseDate": "2026-04-02"
  },
  "qwen3-5-27b-non-reasoning": {
    "pricing": {
      "inputPer1M": 0.3,
      "outputPer1M": 2.4,
      "approx": true
    },
    "context": 262144,
    "parameters": 27.8,
    "releaseDate": "2026-02-24"
  },
  "qwen3-6-27b-non-reasoning": {
    "pricing": {
      "inputPer1M": 0.6,
      "outputPer1M": 3.6,
      "approx": true
    },
    "context": 262144,
    "parameters": 27.8,
    "releaseDate": "2026-04-22"
  },
  "claude-4-5-sonnet": {
    "pricing": {
      "inputPer1M": 3.0,
      "outputPer1M": 15.0,
      "approx": true
    },
    "context": 1000000,
    "benchmarks": {
      "liveCodeBench": 0.6
    },
    "releaseDate": "2025-09-29"
  },
  "qwen3-5-35b-a3b": {
    "pricing": {
      "inputPer1M": 0.25,
      "outputPer1M": 2.0,
      "approx": true
    },
    "context": 262144,
    "parameters": 36.0,
    "releaseDate": "2026-02-24"
  },
  "claude-4-sonnet-thinking": {
    "pricing": {
      "inputPer1M": 3.0,
      "outputPer1M": 15.0,
      "approx": true
    },
    "context": 1000000,
    "benchmarks": {
      "liveCodeBench": 0.7
    },
    "releaseDate": "2025-05-22"
  },
  "gpt-5-5-instant-06-26": {
    "pricing": {
      "inputPer1M": 5.0,
      "outputPer1M": 30.0,
      "approx": true
    },
    "context": 400000,
    "releaseDate": "2026-06-25"
  },
  "deepseek-v4-flash-non-reasoning": {
    "pricing": {
      "inputPer1M": 0.14,
      "outputPer1M": 0.28,
      "approx": true
    },
    "context": 1000000,
    "parameters": 284.0,
    "releaseDate": "2026-04-24"
  },
  "jt-35b-flash": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 256000,
    "parameters": 35.0,
    "releaseDate": "2026-05-14"
  },
  "minimax-m2": {
    "pricing": {
      "inputPer1M": 0.3,
      "outputPer1M": 1.2,
      "approx": true
    },
    "context": 204800,
    "benchmarks": {
      "liveCodeBench": 0.8
    },
    "parameters": 230.0,
    "releaseDate": "2025-10-26"
  },
  "claude-4-1-opus": {
    "pricing": {
      "inputPer1M": 15.0,
      "outputPer1M": 75.0,
      "approx": true
    },
    "context": 200000,
    "releaseDate": "2025-08-05"
  },
  "qwen3-5-122b-a10b-non-reasoning": {
    "pricing": {
      "inputPer1M": 0.4,
      "outputPer1M": 3.2,
      "approx": true
    },
    "context": 262144,
    "parameters": 125.0,
    "releaseDate": "2026-02-24"
  },
  "mimo-v2-5-pro-non-reasoning": {
    "pricing": {
      "inputPer1M": 0.9,
      "outputPer1M": 2.7,
      "approx": true
    },
    "context": 1000000,
    "parameters": 1023.0,
    "releaseDate": "2026-04-22"
  },
  "gpt-5-4-non-reasoning": {
    "pricing": {
      "inputPer1M": 2.5,
      "outputPer1M": 15.0,
      "approx": true
    },
    "context": 1050000,
    "releaseDate": "2026-03-05"
  },
  "grok-4-fast-reasoning": {
    "pricing": {
      "inputPer1M": 0.2,
      "outputPer1M": 0.5,
      "approx": true
    },
    "context": 2000000,
    "benchmarks": {
      "liveCodeBench": 0.8
    },
    "releaseDate": "2025-09-19"
  },
  "gemini-3-flash": {
    "pricing": {
      "inputPer1M": 0.5,
      "outputPer1M": 3.0,
      "approx": true
    },
    "context": 1000000,
    "benchmarks": {
      "liveCodeBench": 0.8
    },
    "releaseDate": "2025-12-17"
  },
  "claude-3-7-sonnet-thinking": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 200000,
    "benchmarks": {
      "liveCodeBench": 0.5,
      "humanEval": 1.0
    },
    "releaseDate": "2025-02-24"
  },
  "glm-4-7-non-reasoning": {
    "pricing": {
      "inputPer1M": 0.6,
      "outputPer1M": 2.2,
      "approx": true
    },
    "context": 200000,
    "benchmarks": {
      "liveCodeBench": 0.6
    },
    "parameters": 357.0,
    "releaseDate": "2025-12-22"
  },
  "deepseek-v3-1-terminus-reasoning": {
    "pricing": {
      "inputPer1M": 1.635,
      "outputPer1M": 2.75,
      "approx": true
    },
    "context": 128000,
    "benchmarks": {
      "liveCodeBench": 0.8
    },
    "parameters": 685.0,
    "releaseDate": "2025-09-22"
  },
  "hy3-non-reasoning": {
    "pricing": {
      "inputPer1M": 0.123,
      "outputPer1M": 0.43,
      "approx": true
    },
    "context": 256000,
    "parameters": 295.0,
    "releaseDate": "2026-04-23"
  },
  "ling-2-6-1t": {
    "pricing": {
      "inputPer1M": 0.3,
      "outputPer1M": 2.5,
      "approx": true
    },
    "context": 262144,
    "parameters": 1026.0,
    "releaseDate": "2026-04-23"
  },
  "gpt-5-2-non-reasoning": {
    "pricing": {
      "inputPer1M": 1.75,
      "outputPer1M": 14.0,
      "approx": true
    },
    "context": 400000,
    "benchmarks": {
      "liveCodeBench": 0.7
    },
    "releaseDate": "2025-12-11"
  },
  "step-3-5-flash": {
    "pricing": {
      "inputPer1M": 0.1,
      "outputPer1M": 0.3,
      "approx": true
    },
    "context": 256000,
    "releaseDate": "2026-04-02"
  },
  "doubao-seed-code": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 256000,
    "benchmarks": {
      "liveCodeBench": 0.8
    },
    "releaseDate": "2025-11-11"
  },
  "gemini-2-5-pro": {
    "pricing": {
      "inputPer1M": 1.25,
      "outputPer1M": 10.0,
      "approx": true
    },
    "context": 1000000,
    "benchmarks": {
      "liveCodeBench": 0.8
    },
    "releaseDate": "2025-06-05"
  },
  "gemma-4-26b-a4b": {
    "pricing": {
      "inputPer1M": 0.13,
      "outputPer1M": 0.4,
      "approx": true
    },
    "context": 256000,
    "parameters": 25.2,
    "releaseDate": "2026-04-02"
  },
  "o4-mini": {
    "pricing": {
      "inputPer1M": 1.1,
      "outputPer1M": 4.4,
      "approx": true
    },
    "context": 200000,
    "benchmarks": {
      "liveCodeBench": 0.9,
      "humanEval": 1.0
    },
    "releaseDate": "2025-04-16"
  },
  "step-3-5-flash-0202": {
    "pricing": {
      "inputPer1M": 0.1,
      "outputPer1M": 0.3,
      "approx": true
    },
    "context": 256000,
    "parameters": 196.0,
    "releaseDate": "2026-02-02"
  },
  "claude-4-opus": {
    "pricing": {
      "inputPer1M": 15.0,
      "outputPer1M": 75.0,
      "approx": true
    },
    "context": 200000,
    "benchmarks": {
      "liveCodeBench": 0.5,
      "humanEval": 1.0
    },
    "releaseDate": "2025-05-22"
  },
  "claude-4-sonnet": {
    "pricing": {
      "inputPer1M": 3.0,
      "outputPer1M": 15.0,
      "approx": true
    },
    "context": 1000000,
    "benchmarks": {
      "liveCodeBench": 0.4,
      "humanEval": 1.0
    },
    "releaseDate": "2025-05-22"
  },
  "deepseek-v3-2-reasoning-0925": {
    "pricing": {
      "inputPer1M": 0.28,
      "outputPer1M": 0.42,
      "approx": true
    },
    "context": 128000,
    "benchmarks": {
      "liveCodeBench": 0.8
    },
    "parameters": 685.0,
    "releaseDate": "2025-09-29"
  },
  "nvidia-nemotron-3-super-120b-a12b": {
    "pricing": {
      "inputPer1M": 0.3,
      "outputPer1M": 0.75,
      "approx": true
    },
    "context": 1000000,
    "parameters": 120.6,
    "releaseDate": "2026-03-11"
  },
  "mercury-2": {
    "pricing": {
      "inputPer1M": 0.25,
      "outputPer1M": 0.75,
      "approx": true
    },
    "context": 128000,
    "releaseDate": "2026-02-20"
  },
  "gpt-5-mini": {
    "pricing": {
      "inputPer1M": 0.25,
      "outputPer1M": 2.0,
      "approx": true
    },
    "context": 400000,
    "benchmarks": {
      "liveCodeBench": 0.8
    },
    "releaseDate": "2025-08-07"
  },
  "glm-4-6-reasoning": {
    "pricing": {
      "inputPer1M": 0.55,
      "outputPer1M": 2.2,
      "approx": true
    },
    "context": 200000,
    "benchmarks": {
      "liveCodeBench": 0.7
    },
    "parameters": 357.0,
    "releaseDate": "2025-09-30"
  },
  "gemini-3-1-flash-lite-preview": {
    "pricing": {
      "inputPer1M": 0.25,
      "outputPer1M": 1.5,
      "approx": true
    },
    "context": 1000000,
    "releaseDate": "2026-03-03"
  },
  "qwen3-max-thinking-preview": {
    "pricing": {
      "inputPer1M": 1.2,
      "outputPer1M": 6.0,
      "approx": true
    },
    "context": 262144,
    "benchmarks": {
      "liveCodeBench": 0.5
    },
    "releaseDate": "2025-11-03"
  },
  "gemma-4-31b-non-reasoning": {
    "pricing": {
      "inputPer1M": 0.14,
      "outputPer1M": 0.4,
      "approx": true
    },
    "context": 256000,
    "parameters": 30.7,
    "releaseDate": "2026-04-02"
  },
  "grok-4-3-non-reasoning": {
    "pricing": {
      "inputPer1M": 1.25,
      "outputPer1M": 2.5,
      "approx": true
    },
    "context": 1000000,
    "releaseDate": "2026-04-30"
  },
  "k-exaone": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 256000,
    "benchmarks": {
      "liveCodeBench": 0.8
    },
    "parameters": 236.0,
    "releaseDate": "2025-12-31"
  },
  "mimo-v2-flash": {
    "pricing": {
      "inputPer1M": 0.1,
      "outputPer1M": 0.3,
      "approx": true
    },
    "context": 256000,
    "benchmarks": {
      "liveCodeBench": 0.4
    },
    "parameters": 309.0,
    "releaseDate": "2025-12-16"
  },
  "deepseek-v3-2": {
    "pricing": {
      "inputPer1M": 0.28,
      "outputPer1M": 0.42,
      "approx": true
    },
    "context": 128000,
    "benchmarks": {
      "liveCodeBench": 0.6
    },
    "parameters": 685.0,
    "releaseDate": "2025-12-01"
  },
  "trinity-large-thinking": {
    "pricing": {
      "inputPer1M": 0.235,
      "outputPer1M": 0.875,
      "approx": true
    },
    "context": 512000,
    "parameters": 399.0,
    "releaseDate": "2026-04-01"
  },
  "qwen3-6-35b-a3b-non-reasoning": {
    "pricing": {
      "inputPer1M": 0.375,
      "outputPer1M": 2.25,
      "approx": true
    },
    "context": 262144,
    "parameters": 36.0,
    "releaseDate": "2026-04-16"
  },
  "qwen3-max": {
    "pricing": {
      "inputPer1M": 1.2,
      "outputPer1M": 6.0,
      "approx": true
    },
    "context": 262144,
    "benchmarks": {
      "liveCodeBench": 0.8
    },
    "releaseDate": "2025-09-23"
  },
  "gpt-oss-120b": {
    "pricing": {
      "inputPer1M": 0.15,
      "outputPer1M": 0.6,
      "approx": true
    },
    "context": 131072,
    "benchmarks": {
      "liveCodeBench": 0.9
    },
    "parameters": 117.0,
    "releaseDate": "2025-08-05"
  },
  "gemini-2-5-flash-preview-09-2025-reasoning": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 1000000,
    "benchmarks": {
      "liveCodeBench": 0.7
    },
    "releaseDate": "2025-09-25"
  },
  "claude-4-5-haiku": {
    "pricing": {
      "inputPer1M": 1.0,
      "outputPer1M": 5.0,
      "approx": true
    },
    "context": 200000,
    "benchmarks": {
      "liveCodeBench": 0.5
    },
    "releaseDate": "2025-10-15"
  },
  "kimi-k2-0905": {
    "pricing": {
      "inputPer1M": 0.6,
      "outputPer1M": 2.5,
      "approx": true
    },
    "context": 256000,
    "benchmarks": {
      "liveCodeBench": 0.6
    },
    "parameters": 1000.0,
    "releaseDate": "2025-09-05"
  },
  "claude-3-7-sonnet": {
    "pricing": {
      "inputPer1M": 3.0,
      "outputPer1M": 15.0,
      "approx": true
    },
    "context": 200000,
    "benchmarks": {
      "liveCodeBench": 0.4,
      "humanEval": 0.9
    },
    "releaseDate": "2025-02-24"
  },
  "o1": {
    "pricing": {
      "inputPer1M": 15.0,
      "outputPer1M": 60.0,
      "approx": true
    },
    "context": 200000,
    "benchmarks": {
      "liveCodeBench": 0.7,
      "humanEval": 1.0
    },
    "releaseDate": "2024-12-05"
  },
  "qwen3-5-35b-a3b-non-reasoning": {
    "pricing": {
      "inputPer1M": 0.25,
      "outputPer1M": 2.0,
      "approx": true
    },
    "context": 262144,
    "parameters": 36.0,
    "releaseDate": "2026-02-24"
  },
  "gemini-2-5-pro-03-25": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 1000000,
    "benchmarks": {
      "liveCodeBench": 0.8,
      "humanEval": 1.0
    },
    "releaseDate": "2025-03-25"
  },
  "glm-4-6": {
    "pricing": {
      "inputPer1M": 0.6,
      "outputPer1M": 2.2,
      "approx": true
    },
    "context": 200000,
    "benchmarks": {
      "liveCodeBench": 0.6
    },
    "parameters": 357.0,
    "releaseDate": "2025-09-30"
  },
  "exaone-4-5-33b": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 262144,
    "parameters": 34.4,
    "releaseDate": "2026-04-09"
  },
  "glm-4-7-flash": {
    "pricing": {
      "inputPer1M": 0.07,
      "outputPer1M": 0.4,
      "approx": true
    },
    "context": 200000,
    "parameters": 31.2,
    "releaseDate": "2026-01-19"
  },
  "command-a-plus": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 192000,
    "parameters": 218.0,
    "releaseDate": "2026-05-20"
  },
  "grok-3-mini-reasoning": {
    "pricing": {
      "inputPer1M": 0.3,
      "outputPer1M": 0.5,
      "approx": true
    },
    "context": 1000000,
    "benchmarks": {
      "liveCodeBench": 0.7,
      "humanEval": 1.0
    },
    "releaseDate": "2025-02-19"
  },
  "grok-4-20-0309-non-reasoning": {
    "pricing": {
      "inputPer1M": 2.0,
      "outputPer1M": 6.0,
      "approx": true
    },
    "context": 2000000,
    "releaseDate": "2026-03-10"
  },
  "gemini-2-5-pro-05-06": {
    "pricing": {
      "inputPer1M": 1.25,
      "outputPer1M": 10.0,
      "approx": true
    },
    "context": 1000000,
    "benchmarks": {
      "liveCodeBench": 0.8,
      "humanEval": 1.0
    },
    "releaseDate": "2025-05-06"
  },
  "deepseek-v3-2-speciale": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 128000,
    "benchmarks": {
      "liveCodeBench": 0.9
    },
    "parameters": 685.0,
    "releaseDate": "2025-12-01"
  },
  "hypernova-60b": {
    "pricing": {
      "inputPer1M": 0.04,
      "outputPer1M": 0.14,
      "approx": true
    },
    "context": 131072,
    "parameters": 58.7,
    "releaseDate": "2026-05-26"
  },
  "gemma-4-12b": {
    "pricing": {
      "inputPer1M": 0.1,
      "outputPer1M": 0.3,
      "approx": true
    },
    "context": 256000,
    "parameters": 12.0,
    "releaseDate": "2026-06-03"
  },
  "ernie-5-0-thinking-preview": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 128000,
    "benchmarks": {
      "liveCodeBench": 0.8
    },
    "releaseDate": "2025-11-13"
  },
  "grok-4-20-non-reasoning": {
    "pricing": {
      "inputPer1M": 2.0,
      "outputPer1M": 6.0,
      "approx": true
    },
    "context": 2000000,
    "releaseDate": "2026-04-07"
  },
  "nova-2-0-pro-reasoning-medium": {
    "pricing": {
      "inputPer1M": 1.25,
      "outputPer1M": 10.0,
      "approx": true
    },
    "context": 256000,
    "benchmarks": {
      "liveCodeBench": 0.7
    },
    "releaseDate": "2025-11-27"
  },
  "grok-code-fast-1": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 256000,
    "benchmarks": {
      "liveCodeBench": 0.7
    },
    "releaseDate": "2025-08-28"
  },
  "qwen3-5-9b": {
    "pricing": {
      "inputPer1M": 0.1,
      "outputPer1M": 0.15,
      "approx": true
    },
    "context": 262144,
    "parameters": 9.65,
    "releaseDate": "2026-03-02"
  },
  "deepseek-v3-1-terminus": {
    "pricing": {
      "inputPer1M": 0.27,
      "outputPer1M": 1.0,
      "approx": true
    },
    "context": 128000,
    "benchmarks": {
      "liveCodeBench": 0.5
    },
    "parameters": 685.0,
    "releaseDate": "2025-09-22"
  },
  "deepseek-v3-2-0925": {
    "pricing": {
      "inputPer1M": 0.28,
      "outputPer1M": 0.42,
      "approx": true
    },
    "context": 128000,
    "benchmarks": {
      "liveCodeBench": 0.6
    },
    "parameters": 685.0,
    "releaseDate": "2025-09-29"
  },
  "nemotron-cascade-2-30b-a3b": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 1000000,
    "parameters": 31.6,
    "releaseDate": "2026-03-19"
  },
  "apriel-v1-5-15b-thinker": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 128000,
    "benchmarks": {
      "liveCodeBench": 0.7
    },
    "parameters": 15.0,
    "releaseDate": "2025-09-30"
  },
  "qwen3-coder-next": {
    "pricing": {
      "inputPer1M": 0.35,
      "outputPer1M": 1.2,
      "approx": true
    },
    "context": 256000,
    "parameters": 79.7,
    "releaseDate": "2026-02-03"
  },
  "deepseek-v3-1": {
    "pricing": {
      "inputPer1M": 0.555,
      "outputPer1M": 1.67,
      "approx": true
    },
    "context": 128000,
    "benchmarks": {
      "liveCodeBench": 0.6
    },
    "parameters": 685.0,
    "releaseDate": "2025-08-21"
  },
  "nova-2-0-omni-reasoning-medium": {
    "pricing": {
      "inputPer1M": 0.3,
      "outputPer1M": 2.5,
      "approx": true
    },
    "context": 1000000,
    "benchmarks": {
      "liveCodeBench": 0.7
    },
    "releaseDate": "2025-11-26"
  },
  "deepseek-v3-1-reasoning": {
    "pricing": {
      "inputPer1M": 0.59,
      "outputPer1M": 1.69,
      "approx": true
    },
    "context": 128000,
    "benchmarks": {
      "liveCodeBench": 0.8
    },
    "parameters": 685.0,
    "releaseDate": "2025-08-21"
  },
  "qwen3-vl-235b-a22b-reasoning": {
    "pricing": {
      "inputPer1M": 0.7,
      "outputPer1M": 8.4,
      "approx": true
    },
    "context": 262144,
    "benchmarks": {
      "liveCodeBench": 0.6
    },
    "parameters": 235.0,
    "releaseDate": "2025-09-23"
  },
  "north-mini-code": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 256000,
    "parameters": 30.0,
    "releaseDate": "2026-06-09"
  },
  "apriel-v1-6-15b-thinker": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 128000,
    "benchmarks": {
      "liveCodeBench": 0.8
    },
    "parameters": 15.0,
    "releaseDate": "2025-11-25"
  },
  "gpt-5-1-non-reasoning": {
    "pricing": {
      "inputPer1M": 1.25,
      "outputPer1M": 10.0,
      "approx": true
    },
    "context": 400000,
    "benchmarks": {
      "liveCodeBench": 0.5
    },
    "releaseDate": "2025-11-13"
  },
  "qwen3-5-9b-non-reasoning": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 262144,
    "parameters": 9.65,
    "releaseDate": "2026-03-02"
  },
  "gemma-4-26b-a4b-non-reasoning": {
    "pricing": {
      "inputPer1M": 0.13,
      "outputPer1M": 0.4,
      "approx": true
    },
    "context": 256000,
    "parameters": 25.2,
    "releaseDate": "2026-04-02"
  },
  "qwen3-5-4b": {
    "pricing": {
      "inputPer1M": 0.03,
      "outputPer1M": 0.15,
      "approx": true
    },
    "context": 262144,
    "parameters": 4.66,
    "releaseDate": "2026-03-02"
  },
  "deepseek-r1": {
    "pricing": {
      "inputPer1M": 1.35,
      "outputPer1M": 4.2,
      "approx": true
    },
    "context": 128000,
    "benchmarks": {
      "liveCodeBench": 0.8,
      "humanEval": 1.0
    },
    "parameters": 685.0,
    "releaseDate": "2025-05-28"
  },
  "gemini-2-5-flash-reasoning": {
    "pricing": {
      "inputPer1M": 0.3,
      "outputPer1M": 2.5,
      "approx": true
    },
    "context": 1000000,
    "benchmarks": {
      "liveCodeBench": 0.7,
      "humanEval": 1.0
    },
    "releaseDate": "2025-05-20"
  },
  "gpt-5-nano": {
    "pricing": {
      "inputPer1M": 0.05,
      "outputPer1M": 0.4,
      "approx": true
    },
    "context": 400000,
    "benchmarks": {
      "liveCodeBench": 0.8
    },
    "releaseDate": "2025-08-07"
  },
  "qwen3-235b-a22b-instruct-2507-reasoning": {
    "pricing": {
      "inputPer1M": 0.7,
      "outputPer1M": 8.4,
      "approx": true
    },
    "context": 256000,
    "benchmarks": {
      "liveCodeBench": 0.8,
      "humanEval": 1.0
    },
    "parameters": 235.0,
    "releaseDate": "2025-07-25"
  },
  "nova-2-0-pro-reasoning-low": {
    "pricing": {
      "inputPer1M": 1.25,
      "outputPer1M": 10.0,
      "approx": true
    },
    "context": 256000,
    "benchmarks": {
      "liveCodeBench": 0.6
    },
    "releaseDate": "2025-11-27"
  },
  "mistral-small-4": {
    "pricing": {
      "inputPer1M": 0.15,
      "outputPer1M": 0.6,
      "approx": true
    },
    "context": 256000,
    "parameters": 119.0,
    "releaseDate": "2026-03-16"
  },
  "glm-4.5": {
    "pricing": {
      "inputPer1M": 0.6,
      "outputPer1M": 2.2,
      "approx": true
    },
    "context": 128000,
    "benchmarks": {
      "liveCodeBench": 0.7,
      "humanEval": 1.0
    },
    "parameters": 355.0,
    "releaseDate": "2025-07-28"
  },
  "kimi-k2": {
    "pricing": {
      "inputPer1M": 0.585,
      "outputPer1M": 2.4,
      "approx": true
    },
    "context": 128000,
    "benchmarks": {
      "liveCodeBench": 0.6,
      "humanEval": 0.9
    },
    "parameters": 1000.0,
    "releaseDate": "2025-07-11"
  },
  "gpt-4-1": {
    "pricing": {
      "inputPer1M": 2.0,
      "outputPer1M": 8.0,
      "approx": true
    },
    "context": 1000000,
    "benchmarks": {
      "liveCodeBench": 0.5,
      "humanEval": 1.0
    },
    "releaseDate": "2025-04-14"
  },
  "ling-2-6-flash": {
    "pricing": {
      "inputPer1M": 0.1,
      "outputPer1M": 0.3,
      "approx": true
    },
    "context": 262144,
    "parameters": 107.0,
    "releaseDate": "2026-04-21"
  },
  "qwen3-max-preview": {
    "pricing": {
      "inputPer1M": 1.2,
      "outputPer1M": 6.0,
      "approx": true
    },
    "context": 262144,
    "benchmarks": {
      "liveCodeBench": 0.7
    },
    "releaseDate": "2025-09-05"
  },
  "devstral-2": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 256000,
    "benchmarks": {
      "liveCodeBench": 0.4
    },
    "parameters": 125.0,
    "releaseDate": "2025-12-09"
  },
  "nova-2-0-lite-reasoning-medium": {
    "pricing": {
      "inputPer1M": 0.3,
      "outputPer1M": 2.5,
      "approx": true
    },
    "context": 1000000,
    "benchmarks": {
      "liveCodeBench": 0.7
    },
    "releaseDate": "2025-10-29"
  },
  "gpt-5-nano-medium": {
    "pricing": {
      "inputPer1M": 0.05,
      "outputPer1M": 0.4,
      "approx": true
    },
    "context": 400000,
    "benchmarks": {
      "liveCodeBench": 0.8
    },
    "releaseDate": "2025-08-07"
  },
  "qwen3-5-omni-flash": {
    "pricing": {
      "inputPer1M": 0.1,
      "outputPer1M": 0.8,
      "approx": true
    },
    "context": 256000,
    "releaseDate": "2026-03-30"
  },
  "o3-mini": {
    "pricing": {
      "inputPer1M": 1.1,
      "outputPer1M": 4.4,
      "approx": true
    },
    "context": 200000,
    "benchmarks": {
      "liveCodeBench": 0.7,
      "humanEval": 1.0
    },
    "releaseDate": "2025-01-31"
  },
  "o1-pro": {
    "pricing": {
      "inputPer1M": 150.0,
      "outputPer1M": 600.0,
      "approx": true
    },
    "context": 200000,
    "releaseDate": "2025-03-19"
  },
  "gemini-2-5-flash-preview-09-2025": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 1000000,
    "benchmarks": {
      "liveCodeBench": 0.6
    },
    "releaseDate": "2025-09-25"
  },
  "jt-mini": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 128000,
    "releaseDate": "2026-04-15"
  },
  "deepseek-r1-0120": {
    "pricing": {
      "inputPer1M": 1.675,
      "outputPer1M": 4.7,
      "approx": true
    },
    "context": 128000,
    "benchmarks": {
      "liveCodeBench": 0.6,
      "humanEval": 1.0
    },
    "parameters": 685.0,
    "releaseDate": "2025-01-20"
  },
  "grok-3": {
    "pricing": {
      "inputPer1M": 4.0,
      "outputPer1M": 20.0,
      "approx": true
    },
    "context": 1000000,
    "benchmarks": {
      "liveCodeBench": 0.4,
      "humanEval": 0.9
    },
    "releaseDate": "2025-02-19"
  },
  "seed-oss-36b-instruct": {
    "pricing": {
      "inputPer1M": 0.21,
      "outputPer1M": 0.57,
      "approx": true
    },
    "context": 512000,
    "benchmarks": {
      "liveCodeBench": 0.8
    },
    "parameters": 36.2,
    "releaseDate": "2025-08-20"
  },
  "nova-2-0-lite-reasoning": {
    "pricing": {
      "inputPer1M": 0.3,
      "outputPer1M": 2.5,
      "approx": true
    },
    "context": 1000000,
    "benchmarks": {
      "liveCodeBench": 0.7
    },
    "releaseDate": "2025-10-29"
  },
  "qwen3-235b-a22b-instruct-2507": {
    "pricing": {
      "inputPer1M": 0.7,
      "outputPer1M": 2.8,
      "approx": true
    },
    "context": 256000,
    "benchmarks": {
      "liveCodeBench": 0.5,
      "humanEval": 1.0
    },
    "parameters": 235.0,
    "releaseDate": "2025-07-21"
  },
  "qwen3-coder-480b-a35b-instruct": {
    "pricing": {
      "inputPer1M": 1.5,
      "outputPer1M": 7.5,
      "approx": true
    },
    "context": 262144,
    "benchmarks": {
      "liveCodeBench": 0.6,
      "humanEval": 1.0
    },
    "parameters": 480.0,
    "releaseDate": "2025-07-22"
  },
  "qwen3-vl-32b-reasoning": {
    "pricing": {
      "inputPer1M": 0.7,
      "outputPer1M": 8.4,
      "approx": true
    },
    "context": 256000,
    "benchmarks": {
      "liveCodeBench": 0.7
    },
    "parameters": 33.4,
    "releaseDate": "2025-10-21"
  },
  "magistral-medium-2509": {
    "pricing": {
      "inputPer1M": 2.0,
      "outputPer1M": 5.0,
      "approx": true
    },
    "context": 128000,
    "benchmarks": {
      "liveCodeBench": 0.8
    },
    "releaseDate": "2025-09-18"
  },
  "sonar-reasoning-pro": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 127000,
    "releaseDate": "2025-01-28"
  },
  "nova-2-0-lite-reasoning-low": {
    "pricing": {
      "inputPer1M": 0.3,
      "outputPer1M": 2.5,
      "approx": true
    },
    "context": 1000000,
    "benchmarks": {
      "liveCodeBench": 0.5
    },
    "releaseDate": "2025-10-29"
  },
  "gpt-oss-120b-low": {
    "pricing": {
      "inputPer1M": 0.15,
      "outputPer1M": 0.6,
      "approx": true
    },
    "context": 131072,
    "benchmarks": {
      "liveCodeBench": 0.7
    },
    "parameters": 117.0,
    "releaseDate": "2025-08-05"
  },
  "minimax-m1-80k": {
    "pricing": {
      "inputPer1M": 0.55,
      "outputPer1M": 2.2,
      "approx": true
    },
    "context": 1000000,
    "benchmarks": {
      "liveCodeBench": 0.7
    },
    "parameters": 456.0,
    "releaseDate": "2025-06-17"
  },
  "gpt-5-4-nano-non-reasoning": {
    "pricing": {
      "inputPer1M": 0.2,
      "outputPer1M": 1.25,
      "approx": true
    },
    "context": 400000,
    "releaseDate": "2026-03-17"
  },
  "gemini-2-5-flash-reasoning-04-2025": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 1000000,
    "benchmarks": {
      "liveCodeBench": 0.5
    },
    "releaseDate": "2025-04-17"
  },
  "devstral-small-2": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 256000,
    "benchmarks": {
      "liveCodeBench": 0.3
    },
    "parameters": 24.0,
    "releaseDate": "2025-12-09"
  },
  "k2-think-v2": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 262144,
    "parameters": 70.0,
    "releaseDate": "2025-12-15"
  },
  "longcat-flash-lite": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 256000,
    "parameters": 68.5,
    "releaseDate": "2026-01-28"
  },
  "gpt-5-minimal": {
    "pricing": {
      "inputPer1M": 1.25,
      "outputPer1M": 10.0,
      "approx": true
    },
    "context": 400000,
    "benchmarks": {
      "liveCodeBench": 0.6,
      "humanEval": 1.0
    },
    "releaseDate": "2025-08-07"
  },
  "o1-preview": {
    "pricing": {
      "inputPer1M": 16.5,
      "outputPer1M": 66.0,
      "approx": true
    },
    "context": 128000,
    "benchmarks": {
      "humanEval": 1.0
    },
    "releaseDate": "2024-09-12"
  },
  "hyperclova-x-seed-think-32b": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 128000,
    "benchmarks": {
      "liveCodeBench": 0.6
    },
    "parameters": 32.0,
    "releaseDate": "2025-12-26"
  },
  "grok-4-1-fast": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 2000000,
    "benchmarks": {
      "liveCodeBench": 0.4
    },
    "releaseDate": "2025-11-19"
  },
  "glm-4-6v-reasoning": {
    "pricing": {
      "inputPer1M": 0.3,
      "outputPer1M": 0.9,
      "approx": true
    },
    "context": 128000,
    "benchmarks": {
      "liveCodeBench": 0.2
    },
    "parameters": 108.0,
    "releaseDate": "2025-12-08"
  },
  "k-exaone-non-reasoning": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 256000,
    "parameters": 236.0,
    "releaseDate": "2025-12-31"
  },
  "qwen3-next-80b-a3b-reasoning": {
    "pricing": {
      "inputPer1M": 0.5,
      "outputPer1M": 6.0,
      "approx": true
    },
    "context": 262144,
    "benchmarks": {
      "liveCodeBench": 0.8
    },
    "parameters": 80.0,
    "releaseDate": "2025-09-11"
  },
  "gpt-5-4-mini-non-reasoning": {
    "pricing": {
      "inputPer1M": 0.75,
      "outputPer1M": 4.5,
      "approx": true
    },
    "context": 400000,
    "releaseDate": "2026-03-17"
  },
  "nova-2-0-omni-reasoning-low": {
    "pricing": {
      "inputPer1M": 0.3,
      "outputPer1M": 2.5,
      "approx": true
    },
    "context": 1000000,
    "benchmarks": {
      "liveCodeBench": 0.6
    },
    "releaseDate": "2025-11-26"
  },
  "glm-4-5-air": {
    "pricing": {
      "inputPer1M": 0.17,
      "outputPer1M": 0.98,
      "approx": true
    },
    "context": 128000,
    "benchmarks": {
      "liveCodeBench": 0.7,
      "humanEval": 0.9
    },
    "parameters": 106.0,
    "releaseDate": "2025-07-28"
  },
  "grok-4-fast": {
    "pricing": {
      "inputPer1M": 0.2,
      "outputPer1M": 0.5,
      "approx": true
    },
    "context": 2000000,
    "benchmarks": {
      "liveCodeBench": 0.4
    },
    "releaseDate": "2025-09-19"
  },
  "mi-dm-k-2-5-pro-dec28": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 128000,
    "benchmarks": {
      "liveCodeBench": 0.7
    },
    "parameters": 32.0,
    "releaseDate": "2025-12-11"
  },
  "ring-1t": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 128000,
    "benchmarks": {
      "liveCodeBench": 0.6
    },
    "parameters": 1000.0,
    "releaseDate": "2025-10-13"
  },
  "qwen3-5-4b-non-reasoning": {
    "pricing": {
      "inputPer1M": 0.03,
      "outputPer1M": 0.15,
      "approx": true
    },
    "context": 262144,
    "parameters": 4.66,
    "releaseDate": "2026-03-02"
  },
  "mistral-large-3": {
    "pricing": {
      "inputPer1M": 0.5,
      "outputPer1M": 1.5,
      "approx": true
    },
    "context": 256000,
    "benchmarks": {
      "liveCodeBench": 0.5
    },
    "parameters": 675.0,
    "releaseDate": "2025-12-02"
  },
  "o3-mini-high": {
    "pricing": {
      "inputPer1M": 1.1,
      "outputPer1M": 4.4,
      "approx": true
    },
    "context": 200000,
    "benchmarks": {
      "liveCodeBench": 0.7
    },
    "releaseDate": "2025-01-31"
  },
  "intellect-3": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 131100,
    "benchmarks": {
      "liveCodeBench": 0.8
    },
    "parameters": 107.0,
    "releaseDate": "2025-11-27"
  },
  "glm-4-7-flash-non-reasoning": {
    "pricing": {
      "inputPer1M": 0.07,
      "outputPer1M": 0.4,
      "approx": true
    },
    "context": 200000,
    "parameters": 31.2,
    "releaseDate": "2026-01-19"
  },
  "deepseek-v3-0324": {
    "pricing": {
      "inputPer1M": 1.195,
      "outputPer1M": 1.25,
      "approx": true
    },
    "context": 128000,
    "benchmarks": {
      "liveCodeBench": 0.4,
      "humanEval": 0.9
    },
    "parameters": 671.0,
    "releaseDate": "2025-03-25"
  },
  "gpt-5-chatgpt": {
    "pricing": {
      "inputPer1M": 1.25,
      "outputPer1M": 10.0,
      "approx": true
    },
    "context": 128000,
    "benchmarks": {
      "liveCodeBench": 0.5
    },
    "releaseDate": "2025-08-07"
  },
  "solar-open-100b-reasoning": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 128000,
    "parameters": 102.0,
    "releaseDate": "2025-12-17"
  },
  "grok-3-reasoning": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 1000000,
    "releaseDate": "2025-02-19"
  },
  "gemini-2-5-flash-lite-preview-09-2025-reasoning": {
    "pricing": {
      "inputPer1M": 0.1,
      "outputPer1M": 0.4,
      "approx": true
    },
    "context": 1000000,
    "benchmarks": {
      "liveCodeBench": 0.7
    },
    "releaseDate": "2025-09-08"
  },
  "nemotron-3-nano-omni-30b-a3b": {
    "pricing": {
      "inputPer1M": 0.075,
      "outputPer1M": 0.3,
      "approx": true
    },
    "context": 256000,
    "parameters": 30.0,
    "releaseDate": "2026-04-29"
  },
  "gpt-oss-20b": {
    "pricing": {
      "inputPer1M": 0.05,
      "outputPer1M": 0.2,
      "approx": true
    },
    "context": 131072,
    "benchmarks": {
      "liveCodeBench": 0.8
    },
    "parameters": 21.0,
    "releaseDate": "2025-08-05"
  },
  "gpt-4-1-mini": {
    "pricing": {
      "inputPer1M": 0.4,
      "outputPer1M": 1.6,
      "approx": true
    },
    "context": 1000000,
    "benchmarks": {
      "liveCodeBench": 0.5,
      "humanEval": 0.9
    },
    "releaseDate": "2025-04-14"
  },
  "mistral-small-3-1": {
    "pricing": {
      "inputPer1M": 0.1,
      "outputPer1M": 0.3,
      "approx": true
    },
    "context": 128000,
    "benchmarks": {
      "liveCodeBench": 0.2,
      "humanEval": 0.9
    },
    "parameters": 24.0,
    "releaseDate": "2025-03-17"
  },
  "mistral-medium-3-1": {
    "pricing": {
      "inputPer1M": 0.4,
      "outputPer1M": 2.0,
      "approx": true
    },
    "context": 128000,
    "benchmarks": {
      "liveCodeBench": 0.4
    },
    "releaseDate": "2025-08-12"
  },
  "qwen3-30b-a3b-2507-reasoning": {
    "pricing": {
      "inputPer1M": 0.2,
      "outputPer1M": 2.4,
      "approx": true
    },
    "context": 262144,
    "benchmarks": {
      "liveCodeBench": 0.7
    },
    "parameters": 30.5,
    "releaseDate": "2025-07-30"
  },
  "minimax-m1-40k": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 1000000,
    "benchmarks": {
      "liveCodeBench": 0.7
    },
    "parameters": 456.0,
    "releaseDate": "2025-06-17"
  },
  "nova-2-0-pro": {
    "pricing": {
      "inputPer1M": 1.25,
      "outputPer1M": 10.0,
      "approx": true
    },
    "context": 256000,
    "benchmarks": {
      "liveCodeBench": 0.5
    },
    "releaseDate": "2025-11-27"
  },
  "gpt-oss-20b-low": {
    "pricing": {
      "inputPer1M": 0.06,
      "outputPer1M": 0.2,
      "approx": true
    },
    "context": 131072,
    "benchmarks": {
      "liveCodeBench": 0.7
    },
    "parameters": 21.0,
    "releaseDate": "2025-08-05"
  },
  "qwen3-vl-235b-a22b-instruct": {
    "pricing": {
      "inputPer1M": 0.7,
      "outputPer1M": 2.8,
      "approx": true
    },
    "context": 262144,
    "benchmarks": {
      "liveCodeBench": 0.6
    },
    "parameters": 235.0,
    "releaseDate": "2025-09-23"
  },
  "llama-4-maverick": {
    "pricing": {
      "inputPer1M": 0.35,
      "outputPer1M": 0.85,
      "approx": true
    },
    "context": 1000000,
    "benchmarks": {
      "liveCodeBench": 0.4,
      "humanEval": 0.9
    },
    "parameters": 402.0,
    "releaseDate": "2025-04-05"
  },
  "gpt-5-mini-minimal": {
    "pricing": {
      "inputPer1M": 0.25,
      "outputPer1M": 2.0,
      "approx": true
    },
    "context": 400000,
    "benchmarks": {
      "liveCodeBench": 0.5
    },
    "releaseDate": "2025-08-07"
  },
  "k2-v2": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 512000,
    "benchmarks": {
      "liveCodeBench": 0.7
    },
    "parameters": 70.0,
    "releaseDate": "2025-12-05"
  },
  "nvidia-nemotron-3-nano-30b-a3b-reasoning": {
    "pricing": {
      "inputPer1M": 0.055,
      "outputPer1M": 0.22,
      "approx": true
    },
    "context": 1000000,
    "benchmarks": {
      "liveCodeBench": 0.7
    },
    "parameters": 31.6,
    "releaseDate": "2025-12-15"
  },
  "deepseek-v3": {
    "pricing": {
      "inputPer1M": 0.4,
      "outputPer1M": 0.89,
      "approx": true
    },
    "context": 128000,
    "benchmarks": {
      "liveCodeBench": 0.4,
      "humanEval": 0.9
    },
    "parameters": 671.0,
    "releaseDate": "2024-12-26"
  },
  "gemini-2-5-flash": {
    "pricing": {
      "inputPer1M": 0.3,
      "outputPer1M": 2.5,
      "approx": true
    },
    "context": 1000000,
    "benchmarks": {
      "liveCodeBench": 0.5,
      "humanEval": 1.0
    },
    "releaseDate": "2025-05-20"
  },
  "solar-pro-3": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 128000,
    "parameters": 102.0,
    "releaseDate": "2026-04-06"
  },
  "o1-mini": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 128000,
    "benchmarks": {
      "liveCodeBench": 0.6,
      "humanEval": 1.0
    },
    "releaseDate": "2024-09-12"
  },
  "qwen3-next-80b-a3b-instruct": {
    "pricing": {
      "inputPer1M": 0.5,
      "outputPer1M": 2.0,
      "approx": true
    },
    "context": 262144,
    "benchmarks": {
      "liveCodeBench": 0.7
    },
    "parameters": 80.0,
    "releaseDate": "2025-09-11"
  },
  "tri-21b-think-preview": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 32000,
    "parameters": 21.0,
    "releaseDate": "2026-02-10"
  },
  "qwen3-coder-30b-a3b-instruct": {
    "pricing": {
      "inputPer1M": 0.45,
      "outputPer1M": 2.25,
      "approx": true
    },
    "context": 262144,
    "benchmarks": {
      "liveCodeBench": 0.4,
      "humanEval": 0.9
    },
    "parameters": 30.5,
    "releaseDate": "2025-07-31"
  },
  "gpt-4-5": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 128000,
    "releaseDate": "2025-02-27"
  },
  "diffusiongemma-26b-a4b": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 256000,
    "parameters": 25.2,
    "releaseDate": "2026-06-10"
  },
  "qwen3-235b-a22b-instruct-reasoning": {
    "pricing": {
      "inputPer1M": 0.7,
      "outputPer1M": 8.4,
      "approx": true
    },
    "context": 32768,
    "benchmarks": {
      "liveCodeBench": 0.6
    },
    "parameters": 235.0,
    "releaseDate": "2025-04-28"
  },
  "qwq-32b": {
    "pricing": {
      "inputPer1M": 0.66,
      "outputPer1M": 1.0,
      "approx": true
    },
    "context": 131072,
    "benchmarks": {
      "liveCodeBench": 0.6,
      "humanEval": 1.0
    },
    "parameters": 32.8,
    "releaseDate": "2025-03-05"
  },
  "qwen3-vl-30b-a3b-reasoning": {
    "pricing": {
      "inputPer1M": 0.2,
      "outputPer1M": 2.4,
      "approx": true
    },
    "context": 256000,
    "benchmarks": {
      "liveCodeBench": 0.7
    },
    "parameters": 30.0,
    "releaseDate": "2025-10-03"
  },
  "gemini-2-0-flash-thinking-exp-0121": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 1000000,
    "benchmarks": {
      "liveCodeBench": 0.3
    },
    "releaseDate": "2025-01-21"
  },
  "gemma-4-12b-non-reasoning": {
    "pricing": {
      "inputPer1M": 0.1,
      "outputPer1M": 0.3,
      "approx": true
    },
    "context": 262144,
    "parameters": 12.0,
    "releaseDate": "2026-06-03"
  },
  "gemini-2-5-flash-lite-preview-09-2025": {
    "pricing": {
      "inputPer1M": 0.1,
      "outputPer1M": 0.4,
      "approx": true
    },
    "context": 1000000,
    "benchmarks": {
      "liveCodeBench": 0.6
    },
    "releaseDate": "2025-09-25"
  },
  "motif-2-12-7b": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 128000,
    "benchmarks": {
      "liveCodeBench": 0.7
    },
    "parameters": 12.7,
    "releaseDate": "2025-12-04"
  },
  "ling-1t": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 128000,
    "benchmarks": {
      "liveCodeBench": 0.7
    },
    "parameters": 1000.0,
    "releaseDate": "2025-10-08"
  },
  "nova-premier": {
    "pricing": {
      "inputPer1M": 2.5,
      "outputPer1M": 12.5,
      "approx": true
    },
    "context": 1000000,
    "benchmarks": {
      "liveCodeBench": 0.3,
      "humanEval": 0.9
    },
    "releaseDate": "2025-04-30"
  },
  "solar-pro-2-preview-reasoning": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 64000,
    "benchmarks": {
      "liveCodeBench": 0.5
    },
    "parameters": 30.9,
    "releaseDate": "2025-05-20"
  },
  "magistral-medium": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 40000,
    "benchmarks": {
      "liveCodeBench": 0.5
    },
    "releaseDate": "2025-06-10"
  },
  "gemma-4-e4b": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 128000,
    "parameters": 8.0,
    "releaseDate": "2026-04-03"
  },
  "mistral-medium-3": {
    "pricing": {
      "inputPer1M": 0.4,
      "outputPer1M": 2.0,
      "approx": true
    },
    "context": 128000,
    "benchmarks": {
      "liveCodeBench": 0.4,
      "humanEval": 0.9
    },
    "releaseDate": "2025-05-07"
  },
  "k2-v2-medium": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 512000,
    "benchmarks": {
      "liveCodeBench": 0.5
    },
    "parameters": 70.0,
    "releaseDate": "2025-12-05"
  },
  "llama-nemotron-super-49b-v1-5-reasoning": {
    "pricing": {
      "inputPer1M": 0.1,
      "outputPer1M": 0.4,
      "approx": true
    },
    "context": 128000,
    "benchmarks": {
      "liveCodeBench": 0.7,
      "humanEval": 1.0
    },
    "parameters": 49.0,
    "releaseDate": "2025-07-25"
  },
  "devstral-medium": {
    "pricing": {
      "inputPer1M": 0.4,
      "outputPer1M": 2.0,
      "approx": true
    },
    "context": 256000,
    "benchmarks": {
      "liveCodeBench": 0.3,
      "humanEval": 0.9
    },
    "releaseDate": "2025-07-10"
  },
  "mistral-small-4-non-reasoning": {
    "pricing": {
      "inputPer1M": 0.15,
      "outputPer1M": 0.6,
      "approx": true
    },
    "context": 256000,
    "parameters": 119.0,
    "releaseDate": "2026-03-16"
  },
  "tri-21b-think-v0-5": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 32000,
    "parameters": 21.0,
    "releaseDate": "2026-02-10"
  },
  "gpt-4o-chatgpt-03-25": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 128000,
    "benchmarks": {
      "liveCodeBench": 0.4,
      "humanEval": 1.0
    },
    "releaseDate": "2025-03-27"
  },
  "gemini-2-0-flash": {
    "pricing": {
      "inputPer1M": 0.15,
      "outputPer1M": 0.6,
      "approx": true
    },
    "context": 1000000,
    "benchmarks": {
      "liveCodeBench": 0.3,
      "humanEval": 0.9
    },
    "releaseDate": "2025-02-05"
  },
  "claude-3-5-haiku": {
    "pricing": {
      "inputPer1M": 0.8,
      "outputPer1M": 4.0,
      "approx": true
    },
    "context": 200000,
    "benchmarks": {
      "liveCodeBench": 0.3,
      "humanEval": 0.9
    },
    "releaseDate": "2024-10-22"
  },
  "llama-3-3-nemotron-super-49b-reasoning": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 128000,
    "benchmarks": {
      "liveCodeBench": 0.3,
      "humanEval": 1.0
    },
    "parameters": 49.0,
    "releaseDate": "2025-03-18"
  },
  "qwen3-4b-2507-instruct-reasoning": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 262144,
    "benchmarks": {
      "liveCodeBench": 0.6
    },
    "parameters": 4.02,
    "releaseDate": "2025-08-06"
  },
  "minicpm5-1b": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 128000,
    "parameters": 1.0,
    "releaseDate": "2026-05-25"
  },
  "sarvam-105b": {
    "pricing": {
      "inputPer1M": 0.042,
      "outputPer1M": 0.17,
      "approx": true
    },
    "context": 128000,
    "parameters": 106.0,
    "releaseDate": "2026-03-06"
  },
  "gemini-2-0-pro-experimental-02-05": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 2000000,
    "benchmarks": {
      "liveCodeBench": 0.3,
      "humanEval": 1.0
    },
    "releaseDate": "2025-02-05"
  },
  "nova-2-0-lite": {
    "pricing": {
      "inputPer1M": 0.3,
      "outputPer1M": 2.5,
      "approx": true
    },
    "context": 1000000,
    "benchmarks": {
      "liveCodeBench": 0.3
    },
    "releaseDate": "2025-10-29"
  },
  "devstral-small-2505": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 256000,
    "benchmarks": {
      "liveCodeBench": 0.3,
      "humanEval": 0.8
    },
    "parameters": 23.6,
    "releaseDate": "2025-05-21"
  },
  "claude-3-opus": {
    "pricing": {
      "inputPer1M": 15.0,
      "outputPer1M": 75.0,
      "approx": true
    },
    "context": 200000,
    "benchmarks": {
      "liveCodeBench": 0.3,
      "humanEval": 0.8
    },
    "releaseDate": "2024-03-04"
  },
  "minicpm5-1b-non-reasoning": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 128000,
    "parameters": 1.0,
    "releaseDate": "2026-05-25"
  },
  "sonar-reasoning": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 127000,
    "releaseDate": "2025-01-28"
  },
  "gemini-2-5-flash-04-2025": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 1000000,
    "benchmarks": {
      "liveCodeBench": 0.4
    },
    "releaseDate": "2025-04-17"
  },
  "qwen3-32b-instruct-reasoning": {
    "pricing": {
      "inputPer1M": 0.7,
      "outputPer1M": 8.4,
      "approx": true
    },
    "context": 32768,
    "benchmarks": {
      "liveCodeBench": 0.5
    },
    "parameters": 32.8,
    "releaseDate": "2025-04-28"
  },
  "gemini-2-5-flash-lite-reasoning": {
    "pricing": {
      "inputPer1M": 0.1,
      "outputPer1M": 0.4,
      "approx": true
    },
    "context": 1000000,
    "benchmarks": {
      "liveCodeBench": 0.6,
      "humanEval": 1.0
    },
    "releaseDate": "2025-06-17"
  },
  "magistral-small-2509": {
    "pricing": {
      "inputPer1M": 0.5,
      "outputPer1M": 1.5,
      "approx": true
    },
    "context": 128000,
    "benchmarks": {
      "liveCodeBench": 0.7
    },
    "parameters": 24.0,
    "releaseDate": "2025-09-17"
  },
  "gpt-4o": {
    "pricing": {
      "inputPer1M": 2.5,
      "outputPer1M": 10.0,
      "approx": true
    },
    "context": 128000,
    "benchmarks": {
      "liveCodeBench": 0.3,
      "humanEval": 0.9
    },
    "releaseDate": "2024-11-20"
  },
  "qwen3-vl-32b-instruct": {
    "pricing": {
      "inputPer1M": 0.7,
      "outputPer1M": 2.8,
      "approx": true
    },
    "context": 256000,
    "benchmarks": {
      "liveCodeBench": 0.5
    },
    "parameters": 33.4,
    "releaseDate": "2025-10-21"
  },
  "ministral-3-14b": {
    "pricing": {
      "inputPer1M": 0.2,
      "outputPer1M": 0.2,
      "approx": true
    },
    "context": 256000,
    "benchmarks": {
      "liveCodeBench": 0.4
    },
    "parameters": 14.0,
    "releaseDate": "2025-12-02"
  },
  "deepseek-r1-distill-qwen-32b": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 128000,
    "benchmarks": {
      "liveCodeBench": 0.3,
      "humanEval": 0.9
    },
    "parameters": 32.0,
    "releaseDate": "2025-01-20"
  },
  "glm-4-6v": {
    "pricing": {
      "inputPer1M": 0.3,
      "outputPer1M": 0.9,
      "approx": true
    },
    "context": 128000,
    "benchmarks": {
      "liveCodeBench": 0.4
    },
    "parameters": 108.0,
    "releaseDate": "2025-12-08"
  },
  "qwen3-235b-a22b-instruct": {
    "pricing": {
      "inputPer1M": 0.7,
      "outputPer1M": 2.8,
      "approx": true
    },
    "context": 32768,
    "benchmarks": {
      "liveCodeBench": 0.3
    },
    "parameters": 235.0,
    "releaseDate": "2025-04-28"
  },
  "magistral-small": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 40000,
    "benchmarks": {
      "liveCodeBench": 0.5,
      "humanEval": 1.0
    },
    "parameters": 23.6,
    "releaseDate": "2025-06-10"
  },
  "gemini-2-0-flash-experimental": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 1000000,
    "benchmarks": {
      "liveCodeBench": 0.2,
      "humanEval": 0.9
    },
    "releaseDate": "2024-12-11"
  },
  "exaone-4-0-32b-reasoning": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 131000,
    "benchmarks": {
      "liveCodeBench": 0.7,
      "humanEval": 1.0
    },
    "parameters": 32.0,
    "releaseDate": "2025-07-15"
  },
  "qwen3-vl-8b-reasoning": {
    "pricing": {
      "inputPer1M": 0.18,
      "outputPer1M": 2.1,
      "approx": true
    },
    "context": 256000,
    "benchmarks": {
      "liveCodeBench": 0.4
    },
    "parameters": 8.77,
    "releaseDate": "2025-10-14"
  },
  "mistral-small-3-2": {
    "pricing": {
      "inputPer1M": 0.1,
      "outputPer1M": 0.3,
      "approx": true
    },
    "context": 128000,
    "benchmarks": {
      "liveCodeBench": 0.3,
      "humanEval": 0.9
    },
    "parameters": 24.0,
    "releaseDate": "2025-06-20"
  },
  "nova-2-0-omni": {
    "pricing": {
      "inputPer1M": 0.3,
      "outputPer1M": 2.5,
      "approx": true
    },
    "context": 1000000,
    "benchmarks": {
      "liveCodeBench": 0.3
    },
    "releaseDate": "2025-11-26"
  },
  "qwen3-14b-instruct-reasoning": {
    "pricing": {
      "inputPer1M": 0.35,
      "outputPer1M": 4.2,
      "approx": true
    },
    "context": 32768,
    "benchmarks": {
      "liveCodeBench": 0.5,
      "humanEval": 1.0
    },
    "parameters": 14.8,
    "releaseDate": "2025-04-28"
  },
  "deepseek-r1-qwen3-8b": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 32768,
    "benchmarks": {
      "liveCodeBench": 0.5,
      "humanEval": 0.9
    },
    "parameters": 8.19,
    "releaseDate": "2025-05-29"
  },
  "qwen3-5-2b": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 262144,
    "parameters": 2.27,
    "releaseDate": "2026-03-02"
  },
  "qwen-2-5-max": {
    "pricing": {
      "inputPer1M": 1.6,
      "outputPer1M": 6.4,
      "approx": true
    },
    "context": 32000,
    "benchmarks": {
      "liveCodeBench": 0.4,
      "humanEval": 0.9
    },
    "releaseDate": "2025-01-28"
  },
  "nanbeige4-1-3b": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 256000,
    "parameters": 3.93,
    "releaseDate": "2026-02-11"
  },
  "llama-4-scout": {
    "pricing": {
      "inputPer1M": 0.17,
      "outputPer1M": 0.66,
      "approx": true
    },
    "context": 10000000,
    "benchmarks": {
      "liveCodeBench": 0.3,
      "humanEval": 0.8
    },
    "parameters": 109.0,
    "releaseDate": "2025-04-05"
  },
  "qwen3-vl-30b-a3b-instruct": {
    "pricing": {
      "inputPer1M": 0.2,
      "outputPer1M": 0.8,
      "approx": true
    },
    "context": 256000,
    "benchmarks": {
      "liveCodeBench": 0.5
    },
    "parameters": 30.0,
    "releaseDate": "2025-10-03"
  },
  "hermes-4-llama-3-1-70b-reasoning": {
    "pricing": {
      "inputPer1M": 0.13,
      "outputPer1M": 0.4,
      "approx": true
    },
    "context": 128000,
    "benchmarks": {
      "liveCodeBench": 0.7
    },
    "parameters": 70.6,
    "releaseDate": "2025-08-27"
  },
  "gemini-1-5-pro": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 2000000,
    "benchmarks": {
      "liveCodeBench": 0.3,
      "humanEval": 0.9
    },
    "releaseDate": "2024-09-24"
  },
  "solar-pro-2-preview": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 64000,
    "benchmarks": {
      "liveCodeBench": 0.4,
      "humanEval": 0.9
    },
    "parameters": 30.9,
    "releaseDate": "2025-05-20"
  },
  "deepseek-r1-distill-llama-70b": {
    "pricing": {
      "inputPer1M": 0.7,
      "outputPer1M": 1.05,
      "approx": true
    },
    "context": 128000,
    "benchmarks": {
      "liveCodeBench": 0.3,
      "humanEval": 1.0
    },
    "parameters": 70.0,
    "releaseDate": "2025-01-20"
  },
  "claude-35-sonnet": {
    "pricing": {
      "inputPer1M": 3.0,
      "outputPer1M": 15.0,
      "approx": true
    },
    "context": 200000,
    "benchmarks": {
      "liveCodeBench": 0.4,
      "humanEval": 0.9
    },
    "releaseDate": "2024-10-22"
  },
  "deepseek-r1-distill-qwen-14b": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 128000,
    "benchmarks": {
      "liveCodeBench": 0.4,
      "humanEval": 0.9
    },
    "parameters": 14.0,
    "releaseDate": "2025-01-20"
  },
  "falcon-h1r-7b": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 256000,
    "benchmarks": {
      "liveCodeBench": 0.7
    },
    "parameters": 7.0,
    "releaseDate": "2026-01-04"
  },
  "ling-flash-2-0": {
    "pricing": {
      "inputPer1M": 0.14,
      "outputPer1M": 0.57,
      "approx": true
    },
    "context": 128000,
    "benchmarks": {
      "liveCodeBench": 0.6
    },
    "parameters": 103.0,
    "releaseDate": "2025-09-17"
  },
  "qwen3-omni-30b-a3b-reasoning": {
    "pricing": {
      "inputPer1M": 0.25,
      "outputPer1M": 0.97,
      "approx": true
    },
    "context": 65536,
    "benchmarks": {
      "liveCodeBench": 0.7
    },
    "parameters": 35.3,
    "releaseDate": "2025-09-22"
  },
  "gpt-4o-2024-08-06": {
    "pricing": {
      "inputPer1M": 2.5,
      "outputPer1M": 10.0,
      "approx": true
    },
    "context": 128000,
    "benchmarks": {
      "liveCodeBench": 0.3,
      "humanEval": 0.9
    },
    "releaseDate": "2024-08-06"
  },
  "gpt-4-1-nano": {
    "pricing": {
      "inputPer1M": 0.1,
      "outputPer1M": 0.4,
      "approx": true
    },
    "context": 1000000,
    "benchmarks": {
      "liveCodeBench": 0.3,
      "humanEval": 0.9
    },
    "releaseDate": "2025-04-14"
  },
  "qwen2-5-72b-instruct": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 131072,
    "benchmarks": {
      "liveCodeBench": 0.3,
      "humanEval": 0.9
    },
    "parameters": 72.0,
    "releaseDate": "2024-09-19"
  },
  "sonar": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 127000,
    "benchmarks": {
      "liveCodeBench": 0.3,
      "humanEval": 0.8
    },
    "releaseDate": "2025-01-21"
  },
  "step-3-vl-10b": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 65536,
    "parameters": 10.2,
    "releaseDate": "2026-01-20"
  },
  "qwen3-30b-a3b-instruct-reasoning": {
    "pricing": {
      "inputPer1M": 0.2,
      "outputPer1M": 2.4,
      "approx": true
    },
    "context": 32768,
    "benchmarks": {
      "liveCodeBench": 0.5
    },
    "parameters": 30.5,
    "releaseDate": "2025-04-28"
  },
  "sonar-pro": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 200000,
    "benchmarks": {
      "liveCodeBench": 0.3,
      "humanEval": 0.8
    },
    "releaseDate": "2025-01-21"
  },
  "devstral-small": {
    "pricing": {
      "inputPer1M": 0.1,
      "outputPer1M": 0.3,
      "approx": true
    },
    "context": 256000,
    "benchmarks": {
      "liveCodeBench": 0.3,
      "humanEval": 0.8
    },
    "parameters": 24.0,
    "releaseDate": "2025-07-10"
  },
  "gemma-4-e2b": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 128000,
    "parameters": 5.1,
    "releaseDate": "2026-04-02"
  },
  "QwQ-32B-Preview": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 32768,
    "benchmarks": {
      "liveCodeBench": 0.3,
      "humanEval": 0.9
    },
    "parameters": 32.8,
    "releaseDate": "2024-11-27"
  },
  "glm-4-5v-reasoning": {
    "pricing": {
      "inputPer1M": 0.6,
      "outputPer1M": 1.8,
      "approx": true
    },
    "context": 64000,
    "benchmarks": {
      "liveCodeBench": 0.6
    },
    "parameters": 108.0,
    "releaseDate": "2025-08-11"
  },
  "mistral-large-2": {
    "pricing": {
      "inputPer1M": 2.0,
      "outputPer1M": 6.0,
      "approx": true
    },
    "context": 128000,
    "benchmarks": {
      "liveCodeBench": 0.3,
      "humanEval": 0.9
    },
    "parameters": 123.0,
    "releaseDate": "2024-11-18"
  },
  "llama-3-1-nemotron-ultra-253b-v1-reasoning": {
    "pricing": {
      "inputPer1M": 0.6,
      "outputPer1M": 1.8,
      "approx": true
    },
    "context": 128000,
    "benchmarks": {
      "liveCodeBench": 0.6
    },
    "parameters": 253.0,
    "releaseDate": "2025-04-07"
  },
  "qwen3-30b-a3b-2507": {
    "pricing": {
      "inputPer1M": 0.2,
      "outputPer1M": 0.8,
      "approx": true
    },
    "context": 262144,
    "benchmarks": {
      "liveCodeBench": 0.5,
      "humanEval": 0.9
    },
    "parameters": 30.5,
    "releaseDate": "2025-07-29"
  },
  "ernie-4-5-300b-a47b": {
    "pricing": {
      "inputPer1M": 0.28,
      "outputPer1M": 1.1,
      "approx": true
    },
    "context": 131072,
    "benchmarks": {
      "liveCodeBench": 0.5,
      "humanEval": 0.9
    },
    "parameters": 300.0,
    "releaseDate": "2025-06-30"
  },
  "hermes-4-llama-3-1-405b-reasoning": {
    "pricing": {
      "inputPer1M": 1.0,
      "outputPer1M": 3.0,
      "approx": true
    },
    "context": 128000,
    "benchmarks": {
      "liveCodeBench": 0.7
    },
    "parameters": 406.0,
    "releaseDate": "2025-08-27"
  },
  "solar-pro-2-reasoning": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 65536,
    "benchmarks": {
      "liveCodeBench": 0.6,
      "humanEval": 1.0
    },
    "releaseDate": "2025-07-09"
  },
  "nvidia-nemotron-nano-12b-v2-vl-reasoning": {
    "pricing": {
      "inputPer1M": 0.2,
      "outputPer1M": 0.6,
      "approx": true
    },
    "context": 128000,
    "benchmarks": {
      "liveCodeBench": 0.7
    },
    "parameters": 13.2,
    "releaseDate": "2025-10-28"
  },
  "ministral-3-8b": {
    "pricing": {
      "inputPer1M": 0.15,
      "outputPer1M": 0.15,
      "approx": true
    },
    "context": 256000,
    "benchmarks": {
      "liveCodeBench": 0.3
    },
    "parameters": 8.0,
    "releaseDate": "2025-12-02"
  },
  "gemma-4-e4b-non-reasoning": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 128000,
    "parameters": 8.0,
    "releaseDate": "2026-04-03"
  },
  "granite-4-1-30b": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 131072,
    "parameters": 30.0,
    "releaseDate": "2026-04-29"
  },
  "nvidia-nemotron-nano-9b-v2-reasoning": {
    "pricing": {
      "inputPer1M": 0.04,
      "outputPer1M": 0.16,
      "approx": true
    },
    "context": 131072,
    "benchmarks": {
      "liveCodeBench": 0.7
    },
    "parameters": 9.0,
    "releaseDate": "2025-08-18"
  },
  "hermes-4-llama-3-1-405b": {
    "pricing": {
      "inputPer1M": 1.0,
      "outputPer1M": 3.0,
      "approx": true
    },
    "context": 128000,
    "benchmarks": {
      "liveCodeBench": 0.5
    },
    "parameters": 406.0,
    "releaseDate": "2025-08-27"
  },
  "gemini-2-0-flash-lite-001": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 1000000,
    "benchmarks": {
      "liveCodeBench": 0.2,
      "humanEval": 0.9
    },
    "releaseDate": "2025-02-25"
  },
  "nvidia-nemotron-3-nano-4b": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 262000,
    "parameters": 3.97,
    "releaseDate": "2026-03-16"
  },
  "qwen3-5-2b-non-reasoning": {
    "pricing": {
      "inputPer1M": 0.02,
      "outputPer1M": 0.1,
      "approx": true
    },
    "context": 262144,
    "parameters": 2.27,
    "releaseDate": "2026-03-02"
  },
  "llama-nemotron-super-49b-v1-5": {
    "pricing": {
      "inputPer1M": 0.1,
      "outputPer1M": 0.4,
      "approx": true
    },
    "context": 128000,
    "benchmarks": {
      "liveCodeBench": 0.3,
      "humanEval": 0.9
    },
    "parameters": 49.0,
    "releaseDate": "2025-07-25"
  },
  "qwen3-32b-instruct": {
    "pricing": {
      "inputPer1M": 0.7,
      "outputPer1M": 2.8,
      "approx": true
    },
    "context": 32768,
    "benchmarks": {
      "liveCodeBench": 0.3,
      "humanEval": 0.9
    },
    "parameters": 32.8,
    "releaseDate": "2025-04-28"
  },
  "gpt-4o-2024-05-13": {
    "pricing": {
      "inputPer1M": 5.0,
      "outputPer1M": 15.0,
      "approx": true
    },
    "context": 128000,
    "benchmarks": {
      "liveCodeBench": 0.3,
      "humanEval": 0.9
    },
    "releaseDate": "2024-05-13"
  },
  "llama-3-3-instruct-70b": {
    "pricing": {
      "inputPer1M": 0.58,
      "outputPer1M": 0.71,
      "approx": true
    },
    "context": 128000,
    "benchmarks": {
      "liveCodeBench": 0.3,
      "humanEval": 0.9
    },
    "parameters": 70.0,
    "releaseDate": "2024-12-06"
  },
  "gemini-2-0-flash-lite-preview": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 1000000,
    "benchmarks": {
      "liveCodeBench": 0.2,
      "humanEval": 0.9
    },
    "releaseDate": "2025-02-05"
  },
  "k2-v2-low": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 512000,
    "benchmarks": {
      "liveCodeBench": 0.4
    },
    "parameters": 70.0,
    "releaseDate": "2025-12-05"
  },
  "llama-3-1-nemotron-nano-4b-reasoning": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 128000,
    "benchmarks": {
      "liveCodeBench": 0.5
    },
    "parameters": 4.51,
    "releaseDate": "2025-05-20"
  },
  "kimi-linear-48b-a3b-instruct": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 1000000,
    "benchmarks": {
      "liveCodeBench": 0.4
    },
    "parameters": 49.1,
    "releaseDate": "2025-10-30"
  },
  "llama-3-1-instruct-405b": {
    "pricing": {
      "inputPer1M": 2.75,
      "outputPer1M": 6.5,
      "approx": true
    },
    "context": 128000,
    "benchmarks": {
      "liveCodeBench": 0.3,
      "humanEval": 0.9
    },
    "parameters": 405.0,
    "releaseDate": "2024-07-23"
  },
  "llama-3-3-nemotron-super-49b": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 128000,
    "benchmarks": {
      "liveCodeBench": 0.3,
      "humanEval": 0.8
    },
    "parameters": 49.0,
    "releaseDate": "2025-03-18"
  },
  "qwen3-vl-8b-instruct": {
    "pricing": {
      "inputPer1M": 0.18,
      "outputPer1M": 0.7,
      "approx": true
    },
    "context": 256000,
    "benchmarks": {
      "liveCodeBench": 0.3
    },
    "parameters": 8.77,
    "releaseDate": "2025-10-14"
  },
  "qwen3-4b-instruct-reasoning": {
    "pricing": {
      "inputPer1M": 0.11,
      "outputPer1M": 1.26,
      "approx": true
    },
    "context": 32000,
    "benchmarks": {
      "liveCodeBench": 0.5,
      "humanEval": 0.9
    },
    "parameters": 4.02,
    "releaseDate": "2025-04-28"
  },
  "lfm2-5-8b-a1b": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 32768,
    "parameters": 8.3,
    "releaseDate": "2026-05-28"
  },
  "claude-35-sonnet-june-24": {
    "pricing": {
      "inputPer1M": 3.0,
      "outputPer1M": 15.0,
      "approx": true
    },
    "context": 200000,
    "benchmarks": {
      "humanEval": 0.9
    },
    "releaseDate": "2024-06-21"
  },
  "qwen3-8b-instruct-reasoning": {
    "pricing": {
      "inputPer1M": 0.18,
      "outputPer1M": 2.1,
      "approx": true
    },
    "context": 131072,
    "benchmarks": {
      "liveCodeBench": 0.4
    },
    "parameters": 8.19,
    "releaseDate": "2025-04-28"
  },
  "tulu3-405b": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 128000,
    "benchmarks": {
      "liveCodeBench": 0.3,
      "humanEval": 0.9
    },
    "parameters": 405.0,
    "releaseDate": "2025-01-30"
  },
  "gpt-4o-chatgpt": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 128000,
    "benchmarks": {
      "humanEval": 0.9
    },
    "releaseDate": "2025-02-15"
  },
  "ring-flash-2-0": {
    "pricing": {
      "inputPer1M": 0.14,
      "outputPer1M": 0.57,
      "approx": true
    },
    "context": 128000,
    "benchmarks": {
      "liveCodeBench": 0.6
    },
    "parameters": 103.0,
    "releaseDate": "2025-09-19"
  },
  "pixtral-large-2411": {
    "pricing": {
      "inputPer1M": 2.0,
      "outputPer1M": 6.0,
      "approx": true
    },
    "context": 128000,
    "benchmarks": {
      "liveCodeBench": 0.3,
      "humanEval": 0.8
    },
    "parameters": 124.0,
    "releaseDate": "2024-11-18"
  },
  "olmo-3-1-32b-think": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 65500,
    "benchmarks": {
      "liveCodeBench": 0.7
    },
    "parameters": 32.2,
    "releaseDate": "2025-12-12"
  },
  "grok-2-1212": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 131072,
    "benchmarks": {
      "liveCodeBench": 0.3,
      "humanEval": 0.9
    },
    "parameters": 270.0,
    "releaseDate": "2024-12-12"
  },
  "gpt-5-nano-minimal": {
    "pricing": {
      "inputPer1M": 0.05,
      "outputPer1M": 0.4,
      "approx": true
    },
    "context": 400000,
    "benchmarks": {
      "liveCodeBench": 0.5
    },
    "releaseDate": "2025-08-07"
  },
  "gemini-1-5-flash": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 1000000,
    "benchmarks": {
      "liveCodeBench": 0.3,
      "humanEval": 0.8
    },
    "releaseDate": "2024-09-24"
  },
  "qwen3-vl-4b-reasoning": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 256000,
    "benchmarks": {
      "liveCodeBench": 0.3
    },
    "parameters": 4.44,
    "releaseDate": "2025-10-14"
  },
  "gpt-4-turbo": {
    "pricing": {
      "inputPer1M": 10.0,
      "outputPer1M": 30.0,
      "approx": true
    },
    "context": 128000,
    "benchmarks": {
      "liveCodeBench": 0.3,
      "humanEval": 0.9
    },
    "releaseDate": "2023-11-06"
  },
  "solar-pro-2": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 65536,
    "benchmarks": {
      "liveCodeBench": 0.4,
      "humanEval": 0.9
    },
    "releaseDate": "2025-07-09"
  },
  "nova-pro": {
    "pricing": {
      "inputPer1M": 0.8,
      "outputPer1M": 3.2,
      "approx": true
    },
    "context": 300000,
    "benchmarks": {
      "liveCodeBench": 0.2,
      "humanEval": 0.8
    },
    "releaseDate": "2024-12-03"
  },
  "command-a": {
    "pricing": {
      "inputPer1M": 2.5,
      "outputPer1M": 10.0,
      "approx": true
    },
    "context": 256000,
    "benchmarks": {
      "liveCodeBench": 0.3,
      "humanEval": 0.8
    },
    "parameters": 111.0,
    "releaseDate": "2025-03-13"
  },
  "llama-3-1-nemotron-instruct-70b": {
    "pricing": {
      "inputPer1M": 1.2,
      "outputPer1M": 1.2,
      "approx": true
    },
    "context": 128000,
    "benchmarks": {
      "liveCodeBench": 0.2,
      "humanEval": 0.8
    },
    "parameters": 70.0,
    "releaseDate": "2024-10-15"
  },
  "llama-3-1-instruct-8b": {
    "pricing": {
      "inputPer1M": 0.075,
      "outputPer1M": 0.095,
      "approx": true
    },
    "context": 128000,
    "benchmarks": {
      "liveCodeBench": 0.1,
      "humanEval": 0.7
    },
    "parameters": 8.0,
    "releaseDate": "2024-07-23"
  },
  "grok-beta": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 128000,
    "benchmarks": {
      "liveCodeBench": 0.2,
      "humanEval": 0.9
    },
    "releaseDate": "2024-08-13"
  },
  "qwen2.5-32b-instruct": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 128000,
    "benchmarks": {
      "liveCodeBench": 0.2,
      "humanEval": 0.9
    },
    "parameters": 32.0,
    "releaseDate": "2024-09-19"
  },
  "gemma-3-27b": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 128000,
    "benchmarks": {
      "liveCodeBench": 0.1,
      "humanEval": 0.9
    },
    "parameters": 27.4,
    "releaseDate": "2025-03-12"
  },
  "nvidia-nemotron-3-nano-30b-a3b": {
    "pricing": {
      "inputPer1M": 0.05,
      "outputPer1M": 0.2,
      "approx": true
    },
    "context": 1000000,
    "benchmarks": {
      "liveCodeBench": 0.4
    },
    "parameters": 31.6,
    "releaseDate": "2025-12-15"
  },
  "nvidia-nemotron-nano-9b-v2": {
    "pricing": {
      "inputPer1M": 0.05,
      "outputPer1M": 0.195,
      "approx": true
    },
    "context": 131072,
    "benchmarks": {
      "liveCodeBench": 0.7
    },
    "parameters": 9.0,
    "releaseDate": "2025-08-18"
  },
  "mistral-large-2407": {
    "pricing": {
      "inputPer1M": 2.0,
      "outputPer1M": 6.0,
      "approx": true
    },
    "context": 128000,
    "benchmarks": {
      "liveCodeBench": 0.3,
      "humanEval": 0.9
    },
    "parameters": 123.0,
    "releaseDate": "2024-07-24"
  },
  "qwen3-4b-2507-instruct": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 262144,
    "benchmarks": {
      "liveCodeBench": 0.4
    },
    "parameters": 4.02,
    "releaseDate": "2025-08-06"
  },
  "qwen2-5-coder-32b-instruct": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 131072,
    "benchmarks": {
      "liveCodeBench": 0.3,
      "humanEval": 0.9
    },
    "parameters": 32.0,
    "releaseDate": "2024-11-11"
  },
  "qwen3-14b-instruct": {
    "pricing": {
      "inputPer1M": 0.35,
      "outputPer1M": 1.4,
      "approx": true
    },
    "context": 32768,
    "benchmarks": {
      "liveCodeBench": 0.3
    },
    "parameters": 14.8,
    "releaseDate": "2025-04-28"
  },
  "gpt-4": {
    "pricing": {
      "inputPer1M": 30.0,
      "outputPer1M": 60.0,
      "approx": true
    },
    "context": 8192,
    "releaseDate": "2023-03-14"
  },
  "glm-4-5v": {
    "pricing": {
      "inputPer1M": 0.6,
      "outputPer1M": 1.8,
      "approx": true
    },
    "context": 64000,
    "benchmarks": {
      "liveCodeBench": 0.4
    },
    "parameters": 108.0,
    "releaseDate": "2025-08-11"
  },
  "mistral-small-3": {
    "pricing": {
      "inputPer1M": 0.1,
      "outputPer1M": 0.3,
      "approx": true
    },
    "context": 32000,
    "benchmarks": {
      "liveCodeBench": 0.3,
      "humanEval": 0.9
    },
    "parameters": 24.0,
    "releaseDate": "2025-01-30"
  },
  "gemini-2-5-flash-lite": {
    "pricing": {
      "inputPer1M": 0.1,
      "outputPer1M": 0.4,
      "approx": true
    },
    "context": 1000000,
    "benchmarks": {
      "liveCodeBench": 0.4,
      "humanEval": 0.9
    },
    "releaseDate": "2025-06-17"
  },
  "nova-lite": {
    "pricing": {
      "inputPer1M": 0.06,
      "outputPer1M": 0.24,
      "approx": true
    },
    "context": 300000,
    "benchmarks": {
      "liveCodeBench": 0.2,
      "humanEval": 0.8
    },
    "releaseDate": "2024-12-03"
  },
  "gpt-4o-mini": {
    "pricing": {
      "inputPer1M": 0.15,
      "outputPer1M": 0.6,
      "approx": true
    },
    "context": 128000,
    "benchmarks": {
      "liveCodeBench": 0.2,
      "humanEval": 0.9
    },
    "releaseDate": "2024-07-18"
  },
  "hermes-4-llama-3-1-70b": {
    "pricing": {
      "inputPer1M": 0.13,
      "outputPer1M": 0.4,
      "approx": true
    },
    "context": 128000,
    "benchmarks": {
      "liveCodeBench": 0.3
    },
    "parameters": 70.6,
    "releaseDate": "2025-08-27"
  },
  "qwen3-30b-a3b-instruct": {
    "pricing": {
      "inputPer1M": 0.2,
      "outputPer1M": 0.8,
      "approx": true
    },
    "context": 32768,
    "benchmarks": {
      "liveCodeBench": 0.3
    },
    "parameters": 30.5,
    "releaseDate": "2025-04-28"
  },
  "ministral-3-3b": {
    "pricing": {
      "inputPer1M": 0.1,
      "outputPer1M": 0.1,
      "approx": true
    },
    "context": 256000,
    "benchmarks": {
      "liveCodeBench": 0.2
    },
    "parameters": 3.0,
    "releaseDate": "2025-12-02"
  },
  "deepseek-v2-5": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 128000,
    "benchmarks": {
      "humanEval": 0.9
    },
    "parameters": 236.0,
    "releaseDate": "2024-12-10"
  },
  "qwen3-4b-instruct": {
    "pricing": {
      "inputPer1M": 0.11,
      "outputPer1M": 0.42,
      "approx": true
    },
    "context": 32000,
    "benchmarks": {
      "liveCodeBench": 0.2
    },
    "parameters": 4.02,
    "releaseDate": "2025-04-28"
  },
  "llama-3-1-instruct-70b": {
    "pricing": {
      "inputPer1M": 0.56,
      "outputPer1M": 0.56,
      "approx": true
    },
    "context": 128000,
    "benchmarks": {
      "liveCodeBench": 0.2,
      "humanEval": 0.8
    },
    "parameters": 70.0,
    "releaseDate": "2024-07-23"
  },
  "granite-4-1-8b": {
    "pricing": {
      "inputPer1M": 0.05,
      "outputPer1M": 0.1,
      "approx": true
    },
    "context": 131072,
    "parameters": 8.0,
    "releaseDate": "2026-04-29"
  },
  "sarvam-30b": {
    "pricing": {
      "inputPer1M": 0.026,
      "outputPer1M": 0.11,
      "approx": true
    },
    "context": 65536,
    "parameters": 32.2,
    "releaseDate": "2026-03-06"
  },
  "gemini-2-0-flash-thinking-exp-1219": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 2000000,
    "benchmarks": {
      "humanEval": 0.9
    },
    "releaseDate": "2024-12-19"
  },
  "deepseek-v2-5-sep-2024": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 128000,
    "benchmarks": {
      "humanEval": 0.9
    },
    "parameters": 236.0,
    "releaseDate": "2024-09-06"
  },
  "olmo-3-1-32b-instruct": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 65536,
    "parameters": 32.2,
    "releaseDate": "2026-01-13"
  },
  "mistral-saba": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 32000,
    "benchmarks": {
      "humanEval": 0.9
    },
    "parameters": 24.0,
    "releaseDate": "2025-02-17"
  },
  "deepseek-r1-distill-llama-8b": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 128000,
    "benchmarks": {
      "liveCodeBench": 0.2,
      "humanEval": 0.8
    },
    "parameters": 8.0,
    "releaseDate": "2025-01-20"
  },
  "gemma-4-e2b-non-reasoning": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 128000,
    "parameters": 5.1,
    "releaseDate": "2026-04-02"
  },
  "olmo-3-32b-think": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 65536,
    "benchmarks": {
      "liveCodeBench": 0.7
    },
    "parameters": 32.2,
    "releaseDate": "2025-11-20"
  },
  "gemini-1-5-pro-may-2024": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 2000000,
    "benchmarks": {
      "liveCodeBench": 0.2,
      "humanEval": 0.8
    },
    "releaseDate": "2024-05-15"
  },
  "r1-1776": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 128000,
    "parameters": 671.0,
    "releaseDate": "2025-02-18"
  },
  "qwen-turbo": {
    "pricing": {
      "inputPer1M": 0.05,
      "outputPer1M": 0.2,
      "approx": true
    },
    "context": 1000000,
    "benchmarks": {
      "liveCodeBench": 0.2,
      "humanEval": 0.8
    },
    "releaseDate": "2024-11-18"
  },
  "reka-flash": {
    "pricing": {
      "inputPer1M": 0.2,
      "outputPer1M": 0.8,
      "approx": true
    },
    "context": 128000,
    "benchmarks": {
      "humanEval": 0.7
    },
    "parameters": 21.0,
    "releaseDate": "2024-10-04"
  },
  "llama-3-2-instruct-90b-vision": {
    "pricing": {
      "inputPer1M": 1.38,
      "outputPer1M": 1.38,
      "approx": true
    },
    "context": 128000,
    "benchmarks": {
      "liveCodeBench": 0.2,
      "humanEval": 0.8
    },
    "parameters": 90.0,
    "releaseDate": "2024-09-25"
  },
  "solar-mini": {
    "pricing": {
      "inputPer1M": 0.15,
      "outputPer1M": 0.15,
      "approx": true
    },
    "context": 4096,
    "benchmarks": {
      "humanEval": 0.6
    },
    "parameters": 10.7,
    "releaseDate": "2024-01-25"
  },
  "grok-1": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 8192,
    "parameters": 314.0,
    "releaseDate": "2024-03-17"
  },
  "qwen2-72b-instruct": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 131072,
    "benchmarks": {
      "liveCodeBench": 0.2,
      "humanEval": 0.8
    },
    "parameters": 72.0,
    "releaseDate": "2024-06-07"
  },
  "exaone-4-0-32b": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 131000,
    "benchmarks": {
      "liveCodeBench": 0.5,
      "humanEval": 0.9
    },
    "parameters": 32.0,
    "releaseDate": "2025-07-15"
  },
  "gemini-1-5-flash-8b": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 1048576,
    "benchmarks": {
      "liveCodeBench": 0.2,
      "humanEval": 0.1
    },
    "parameters": 8.0,
    "releaseDate": "2024-10-03"
  },
  "deephermes-3-mistral-24b-preview": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 32000,
    "benchmarks": {
      "liveCodeBench": 0.2,
      "humanEval": 0.7
    },
    "parameters": 24.0,
    "releaseDate": "2025-03-13"
  },
  "jamba-1-7-large": {
    "pricing": {
      "inputPer1M": 2.0,
      "outputPer1M": 8.0,
      "approx": true
    },
    "context": 256000,
    "benchmarks": {
      "liveCodeBench": 0.2,
      "humanEval": 0.7
    },
    "parameters": 398.0,
    "releaseDate": "2025-07-07"
  },
  "granite-4-0-h-small": {
    "pricing": {
      "inputPer1M": 0.06,
      "outputPer1M": 0.25,
      "approx": true
    },
    "context": 128000,
    "benchmarks": {
      "liveCodeBench": 0.3
    },
    "parameters": 32.0,
    "releaseDate": "2025-09-22"
  },
  "jamba-1-5-large": {
    "pricing": {
      "inputPer1M": 2.0,
      "outputPer1M": 8.0,
      "approx": true
    },
    "context": 256000,
    "benchmarks": {
      "liveCodeBench": 0.1,
      "humanEval": 0.2
    },
    "parameters": 398.0,
    "releaseDate": "2024-08-22"
  },
  "qwen3-omni-30b-a3b-instruct": {
    "pricing": {
      "inputPer1M": 0.25,
      "outputPer1M": 0.97,
      "approx": true
    },
    "context": 65536,
    "benchmarks": {
      "liveCodeBench": 0.4
    },
    "parameters": 35.3,
    "releaseDate": "2025-09-22"
  },
  "hermes-3-llama-3-1-70b": {
    "pricing": {
      "inputPer1M": 0.3,
      "outputPer1M": 0.3,
      "approx": true
    },
    "context": 128000,
    "benchmarks": {
      "liveCodeBench": 0.2,
      "humanEval": 0.8
    },
    "parameters": 70.6,
    "releaseDate": "2024-08-15"
  },
  "qwen3-8b-instruct": {
    "pricing": {
      "inputPer1M": 0.18,
      "outputPer1M": 0.7,
      "approx": true
    },
    "context": 32768,
    "benchmarks": {
      "liveCodeBench": 0.2
    },
    "parameters": 8.19,
    "releaseDate": "2025-04-28"
  },
  "deepseek-coder-v2": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 128000,
    "benchmarks": {
      "humanEval": 0.9
    },
    "parameters": 236.0,
    "releaseDate": "2024-06-17"
  },
  "olmo-2-32b": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 4096,
    "benchmarks": {
      "liveCodeBench": 0.1
    },
    "parameters": 32.2,
    "releaseDate": "2025-03-13"
  },
  "jamba-1-6-large": {
    "pricing": {
      "inputPer1M": 2.0,
      "outputPer1M": 8.0,
      "approx": true
    },
    "context": 256000,
    "benchmarks": {
      "liveCodeBench": 0.2,
      "humanEval": 0.7
    },
    "parameters": 398.0,
    "releaseDate": "2025-03-06"
  },
  "qwen3-5-0-8b": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 262144,
    "parameters": 0.873,
    "releaseDate": "2026-03-02"
  },
  "lfm2-24b-a2b": {
    "pricing": {
      "inputPer1M": 0.03,
      "outputPer1M": 0.12,
      "approx": true
    },
    "context": 32768,
    "parameters": 23.8,
    "releaseDate": "2026-02-25"
  },
  "gemini-1-5-flash-may-2024": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 1000000,
    "benchmarks": {
      "liveCodeBench": 0.2,
      "humanEval": 0.7
    },
    "releaseDate": "2024-05-14"
  },
  "phi-4": {
    "pricing": {
      "inputPer1M": 0.125,
      "outputPer1M": 0.5,
      "approx": true
    },
    "context": 16000,
    "benchmarks": {
      "liveCodeBench": 0.2,
      "humanEval": 0.9
    },
    "parameters": 14.0,
    "releaseDate": "2024-12-12"
  },
  "claude-3-sonnet": {
    "pricing": {
      "inputPer1M": 3.0,
      "outputPer1M": 15.0,
      "approx": true
    },
    "context": 200000,
    "benchmarks": {
      "liveCodeBench": 0.2,
      "humanEval": 0.7
    },
    "releaseDate": "2024-03-04"
  },
  "nova-micro": {
    "pricing": {
      "inputPer1M": 0.035,
      "outputPer1M": 0.14,
      "approx": true
    },
    "context": 130000,
    "benchmarks": {
      "liveCodeBench": 0.1,
      "humanEval": 0.8
    },
    "releaseDate": "2024-12-03"
  },
  "mistral-small": {
    "pricing": {
      "inputPer1M": 0.2,
      "outputPer1M": 0.6,
      "approx": true
    },
    "context": 32768,
    "benchmarks": {
      "liveCodeBench": 0.1,
      "humanEval": 0.8
    },
    "parameters": 22.0,
    "releaseDate": "2024-09-17"
  },
  "gemini-1-0-ultra": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 32768,
    "releaseDate": "2023-12-06"
  },
  "phi-3-mini": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 4096,
    "benchmarks": {
      "liveCodeBench": 0.1,
      "humanEval": 0.3
    },
    "parameters": 3.8,
    "releaseDate": "2024-04-23"
  },
  "nvidia-nemotron-nano-12b-v2-vl": {
    "pricing": {
      "inputPer1M": 0.2,
      "outputPer1M": 0.6,
      "approx": true
    },
    "context": 128000,
    "benchmarks": {
      "liveCodeBench": 0.3
    },
    "parameters": 13.2,
    "releaseDate": "2025-10-28"
  },
  "gemma-3n-e4b-preview-0520": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 32000,
    "benchmarks": {
      "liveCodeBench": 0.1,
      "humanEval": 0.8
    },
    "parameters": 8.39,
    "releaseDate": "2025-05-20"
  },
  "phi-4-multimodal": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 128000,
    "benchmarks": {
      "liveCodeBench": 0.1,
      "humanEval": 0.7
    },
    "parameters": 5.6,
    "releaseDate": "2025-02-26"
  },
  "qwen2-5-coder-7b-instruct": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 131072,
    "benchmarks": {
      "liveCodeBench": 0.1,
      "humanEval": 0.9
    },
    "parameters": 7.62,
    "releaseDate": "2024-09-19"
  },
  "qwen3-5-0-8b-non-reasoning": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 262144,
    "parameters": 0.873,
    "releaseDate": "2026-03-02"
  },
  "mistral-large": {
    "pricing": {
      "inputPer1M": 4.0,
      "outputPer1M": 12.0,
      "approx": true
    },
    "context": 32768,
    "benchmarks": {
      "liveCodeBench": 0.2,
      "humanEval": 0.7
    },
    "releaseDate": "2024-02-26"
  },
  "mistral-8x22b-instruct": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 65384,
    "benchmarks": {
      "liveCodeBench": 0.1,
      "humanEval": 0.7
    },
    "parameters": 141.0,
    "releaseDate": "2024-04-17"
  },
  "llama-2-chat-7b": {
    "pricing": {
      "inputPer1M": 0.05,
      "outputPer1M": 0.25,
      "approx": true
    },
    "context": 4096,
    "benchmarks": {
      "liveCodeBench": 0.0,
      "humanEval": 0.1
    },
    "parameters": 7.0,
    "releaseDate": "2023-07-18"
  },
  "llama-3-2-instruct-3b": {
    "pricing": {
      "inputPer1M": 0.15,
      "outputPer1M": 0.15,
      "approx": true
    },
    "context": 128000,
    "benchmarks": {
      "liveCodeBench": 0.1,
      "humanEval": 0.6
    },
    "parameters": 3.0,
    "releaseDate": "2024-09-25"
  },
  "minicpm-v4-6-1-3b": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 262000,
    "parameters": 1.3,
    "releaseDate": "2026-05-11"
  },
  "jamba-reasoning-3b": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 262000,
    "benchmarks": {
      "liveCodeBench": 0.2
    },
    "parameters": 3.0,
    "releaseDate": "2025-10-08"
  },
  "qwen3-vl-4b-instruct": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 256000,
    "benchmarks": {
      "liveCodeBench": 0.3
    },
    "parameters": 4.44,
    "releaseDate": "2025-10-14"
  },
  "qwen1.5-110b-chat": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 32000,
    "parameters": 110.0,
    "releaseDate": "2024-04-25"
  },
  "reka-flash-3": {
    "pricing": {
      "inputPer1M": 0.2,
      "outputPer1M": 0.8,
      "approx": true
    },
    "context": 128000,
    "benchmarks": {
      "liveCodeBench": 0.4,
      "humanEval": 0.9
    },
    "parameters": 21.0,
    "releaseDate": "2025-03-10"
  },
  "olmo-3-7b-think": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 65536,
    "benchmarks": {
      "liveCodeBench": 0.6
    },
    "parameters": 7.0,
    "releaseDate": "2025-11-20"
  },
  "claude-21": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 200000,
    "benchmarks": {
      "liveCodeBench": 0.2,
      "humanEval": 0.2
    },
    "releaseDate": "2023-11-21"
  },
  "claude-3-haiku": {
    "pricing": {
      "inputPer1M": 0.25,
      "outputPer1M": 1.25,
      "approx": true
    },
    "context": 200000,
    "benchmarks": {
      "liveCodeBench": 0.2,
      "humanEval": 0.8
    },
    "releaseDate": "2024-03-04"
  },
  "olmo-2-7b": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 4096,
    "benchmarks": {
      "liveCodeBench": 0.0
    },
    "parameters": 7.3,
    "releaseDate": "2024-11-26"
  },
  "molmo-7b-d": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 4096,
    "benchmarks": {
      "liveCodeBench": 0.0
    },
    "parameters": 8.02,
    "releaseDate": "2024-09-25"
  },
  "ling-mini-2-0": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 131000,
    "benchmarks": {
      "liveCodeBench": 0.4
    },
    "parameters": 16.3,
    "releaseDate": "2025-09-09"
  },
  "deepseek-r1-distill-qwen-1-5b": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 128000,
    "benchmarks": {
      "liveCodeBench": 0.1,
      "humanEval": 0.5
    },
    "parameters": 1.5,
    "releaseDate": "2025-01-20"
  },
  "claude-2": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 100000,
    "benchmarks": {
      "liveCodeBench": 0.2
    },
    "releaseDate": "2023-07-11"
  },
  "deepseek-v2": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 128000,
    "benchmarks": {
      "humanEval": 0.9
    },
    "parameters": 236.0,
    "releaseDate": "2024-05-06"
  },
  "mistral-small-2402": {
    "pricing": {
      "inputPer1M": 1.0,
      "outputPer1M": 3.0,
      "approx": true
    },
    "context": 32768,
    "benchmarks": {
      "liveCodeBench": 0.1,
      "humanEval": 0.8
    },
    "releaseDate": "2024-02-26"
  },
  "mistral-medium": {
    "pricing": {
      "inputPer1M": 2.75,
      "outputPer1M": 8.1,
      "approx": true
    },
    "context": 32768,
    "benchmarks": {
      "liveCodeBench": 0.1
    },
    "releaseDate": "2023-12-11"
  },
  "gpt-35-turbo": {
    "pricing": {
      "inputPer1M": 0.5,
      "outputPer1M": 1.5,
      "approx": true
    },
    "context": 4096,
    "benchmarks": {
      "humanEval": 0.7
    },
    "releaseDate": "2022-11-30"
  },
  "llama-3-instruct-70b": {
    "pricing": {
      "inputPer1M": 0.65,
      "outputPer1M": 2.75,
      "approx": true
    },
    "context": 8192,
    "benchmarks": {
      "liveCodeBench": 0.2,
      "humanEval": 0.8
    },
    "parameters": 70.0,
    "releaseDate": "2024-04-18"
  },
  "arctic-instruct": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 4000,
    "benchmarks": {
      "humanEval": 0.7
    },
    "parameters": 480.0,
    "releaseDate": "2024-04-24"
  },
  "qwen-chat-72b": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 33792,
    "parameters": 72.0,
    "releaseDate": "2023-11-30"
  },
  "gemma-3-12b": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 128000,
    "benchmarks": {
      "liveCodeBench": 0.1,
      "humanEval": 0.8
    },
    "parameters": 12.2,
    "releaseDate": "2025-03-12"
  },
  "lfm-40b": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 32000,
    "benchmarks": {
      "liveCodeBench": 0.1,
      "humanEval": 0.5
    },
    "parameters": 40.3,
    "releaseDate": "2024-09-30"
  },
  "llama-3-2-instruct-11b-vision": {
    "pricing": {
      "inputPer1M": 0.245,
      "outputPer1M": 0.245,
      "approx": true
    },
    "context": 128000,
    "benchmarks": {
      "liveCodeBench": 0.1,
      "humanEval": 0.7
    },
    "parameters": 11.0,
    "releaseDate": "2024-09-25"
  },
  "palm-2": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 8000,
    "releaseDate": "2023-05-10"
  },
  "granite-4-1-3b": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 131072,
    "parameters": 3.0,
    "releaseDate": "2026-04-29"
  },
  "gemini-1-0-pro": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 32768,
    "benchmarks": {
      "liveCodeBench": 0.1,
      "humanEval": 0.0
    },
    "releaseDate": "2023-12-06"
  },
  "deepseek-coder-v2-lite": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 128000,
    "benchmarks": {
      "liveCodeBench": 0.2
    },
    "parameters": 16.0,
    "releaseDate": "2024-06-17"
  },
  "sarvam-m-reasoning": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 32768,
    "benchmarks": {
      "liveCodeBench": 0.3,
      "humanEval": 0.8
    },
    "parameters": 23.6,
    "releaseDate": "2025-05-23"
  },
  "phi-4-mini": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 128000,
    "benchmarks": {
      "liveCodeBench": 0.1,
      "humanEval": 0.7
    },
    "parameters": 3.84,
    "releaseDate": "2024-02-26"
  },
  "llama-2-chat-70b": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 4096,
    "benchmarks": {
      "liveCodeBench": 0.1,
      "humanEval": 0.3
    },
    "parameters": 70.0,
    "releaseDate": "2023-07-18"
  },
  "deepseek-llm-67b-chat": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 4096,
    "benchmarks": {
      "humanEval": 0.8
    },
    "parameters": 7.0,
    "releaseDate": "2023-11-29"
  },
  "llama-2-chat-13b": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 4096,
    "benchmarks": {
      "liveCodeBench": 0.1,
      "humanEval": 0.0
    },
    "parameters": 13.0,
    "releaseDate": "2023-07-18"
  },
  "command-r-plus-04-2024": {
    "pricing": {
      "inputPer1M": 3.0,
      "outputPer1M": 15.0,
      "approx": true
    },
    "context": 128000,
    "benchmarks": {
      "liveCodeBench": 0.1,
      "humanEval": 0.6
    },
    "parameters": 104.0,
    "releaseDate": "2024-04-04"
  },
  "openchat-35": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 8192,
    "benchmarks": {
      "liveCodeBench": 0.1,
      "humanEval": 0.7
    },
    "parameters": 7.0,
    "releaseDate": "2023-12-18"
  },
  "dbrx": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 32768,
    "benchmarks": {
      "liveCodeBench": 0.1,
      "humanEval": 0.7
    },
    "parameters": 132.0,
    "releaseDate": "2024-03-27"
  },
  "exaone-4-0-1-2b-reasoning": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 64000,
    "benchmarks": {
      "liveCodeBench": 0.5
    },
    "parameters": 1.28,
    "releaseDate": "2025-07-15"
  },
  "olmo-3-7b-instruct": {
    "pricing": {
      "inputPer1M": 0.1,
      "outputPer1M": 0.2,
      "approx": true
    },
    "context": 65536,
    "benchmarks": {
      "liveCodeBench": 0.3
    },
    "parameters": 7.0,
    "releaseDate": "2025-11-20"
  },
  "exaone-4-0-1-2b": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 64000,
    "benchmarks": {
      "liveCodeBench": 0.3
    },
    "parameters": 1.28,
    "releaseDate": "2025-07-15"
  },
  "lfm2-5-1-2b-thinking": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 32000,
    "parameters": 1.17,
    "releaseDate": "2026-01-20"
  },
  "jamba-1-7-mini": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 258000,
    "benchmarks": {
      "liveCodeBench": 0.1,
      "humanEval": 0.5
    },
    "parameters": 52.0,
    "releaseDate": "2025-07-07"
  },
  "lfm2-2-6b": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 32768,
    "benchmarks": {
      "liveCodeBench": 0.1
    },
    "parameters": 2.57,
    "releaseDate": "2025-09-23"
  },
  "lfm2-5-1-2b-instruct": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 32000,
    "parameters": 1.17,
    "releaseDate": "2026-01-05"
  },
  "jamba-1-5-mini": {
    "pricing": {
      "inputPer1M": 0.2,
      "outputPer1M": 0.4,
      "approx": true
    },
    "context": 256000,
    "benchmarks": {
      "liveCodeBench": 0.1,
      "humanEval": 0.6
    },
    "parameters": 52.0,
    "releaseDate": "2024-08-22"
  },
  "granite-4-0-h-nano-1b": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 128000,
    "benchmarks": {
      "liveCodeBench": 0.1
    },
    "parameters": 1.5,
    "releaseDate": "2025-10-28"
  },
  "qwen3-1.7b-instruct-reasoning": {
    "pricing": {
      "inputPer1M": 0.11,
      "outputPer1M": 1.26,
      "approx": true
    },
    "context": 32000,
    "benchmarks": {
      "liveCodeBench": 0.3,
      "humanEval": 0.9
    },
    "parameters": 2.03,
    "releaseDate": "2025-04-28"
  },
  "jamba-1-6-mini": {
    "pricing": {
      "inputPer1M": 0.2,
      "outputPer1M": 0.4,
      "approx": true
    },
    "context": 256000,
    "benchmarks": {
      "liveCodeBench": 0.1,
      "humanEval": 0.4
    },
    "parameters": 52.0,
    "releaseDate": "2025-03-06"
  },
  "mixtral-8x7b-instruct": {
    "pricing": {
      "inputPer1M": 0.45,
      "outputPer1M": 0.7,
      "approx": true
    },
    "context": 32768,
    "benchmarks": {
      "liveCodeBench": 0.1,
      "humanEval": 0.0
    },
    "parameters": 46.7,
    "releaseDate": "2023-12-11"
  },
  "gemma-3-270m": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 32000,
    "benchmarks": {
      "liveCodeBench": 0.0
    },
    "parameters": 0.268,
    "releaseDate": "2025-08-14"
  },
  "apertus-70b-instruct": {
    "pricing": {
      "inputPer1M": 0.82,
      "outputPer1M": 2.92,
      "approx": true
    },
    "context": 65536,
    "parameters": 70.0,
    "releaseDate": "2025-09-02"
  },
  "granite-4-0-micro": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 128000,
    "benchmarks": {
      "liveCodeBench": 0.2
    },
    "parameters": 3.0,
    "releaseDate": "2025-09-22"
  },
  "deephermes-3-llama-3-1-8b-preview": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 128000,
    "benchmarks": {
      "liveCodeBench": 0.1,
      "humanEval": 0.5
    },
    "parameters": 8.0,
    "releaseDate": "2025-02-13"
  },
  "llama-65b": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 2048,
    "parameters": 65.0,
    "releaseDate": "2023-02-24"
  },
  "qwen-chat-14b": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 8192,
    "parameters": 14.0,
    "releaseDate": "2023-09-25"
  },
  "claude-instant": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 100000,
    "benchmarks": {
      "liveCodeBench": 0.1,
      "humanEval": 0.0
    },
    "releaseDate": "2023-03-14"
  },
  "mistral-7b-instruct": {
    "pricing": {
      "inputPer1M": 0.25,
      "outputPer1M": 0.25,
      "approx": true
    },
    "context": 8192,
    "benchmarks": {
      "liveCodeBench": 0.0,
      "humanEval": 0.4
    },
    "parameters": 7.0,
    "releaseDate": "2023-09-27"
  },
  "command-r-03-2024": {
    "pricing": {
      "inputPer1M": 0.5,
      "outputPer1M": 1.5,
      "approx": true
    },
    "context": 128000,
    "benchmarks": {
      "liveCodeBench": 0.0,
      "humanEval": 0.4
    },
    "parameters": 35.0,
    "releaseDate": "2024-03-12"
  },
  "granite-4-0-nano-1b": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 128000,
    "benchmarks": {
      "liveCodeBench": 0.0
    },
    "parameters": 1.6,
    "releaseDate": "2025-10-28"
  },
  "molmo2-8b": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 36864,
    "parameters": 8.66,
    "releaseDate": "2025-12-11"
  },
  "lfm2-8b-a1b": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 32768,
    "benchmarks": {
      "liveCodeBench": 0.2
    },
    "parameters": 8.34,
    "releaseDate": "2025-10-07"
  },
  "granite-3-3-8b-instruct": {
    "pricing": {
      "inputPer1M": 0.03,
      "outputPer1M": 0.25,
      "approx": true
    },
    "context": 128000,
    "benchmarks": {
      "liveCodeBench": 0.1,
      "humanEval": 0.7
    },
    "parameters": 8.17,
    "releaseDate": "2025-04-16"
  },
  "qwen3-1.7b-instruct": {
    "pricing": {
      "inputPer1M": 0.11,
      "outputPer1M": 0.42,
      "approx": true
    },
    "context": 32000,
    "benchmarks": {
      "liveCodeBench": 0.1
    },
    "parameters": 2.03,
    "releaseDate": "2025-04-28"
  },
  "qwen3-0.6b-instruct-reasoning": {
    "pricing": {
      "inputPer1M": 0.11,
      "outputPer1M": 1.26,
      "approx": true
    },
    "context": 32000,
    "benchmarks": {
      "liveCodeBench": 0.1,
      "humanEval": 0.5
    },
    "parameters": 0.752,
    "releaseDate": "2025-04-28"
  },
  "llama-3-instruct-8b": {
    "pricing": {
      "inputPer1M": 0.045,
      "outputPer1M": 0.145,
      "approx": true
    },
    "context": 8192,
    "benchmarks": {
      "liveCodeBench": 0.1,
      "humanEval": 0.7
    },
    "parameters": 8.0,
    "releaseDate": "2024-04-18"
  },
  "gemma-3n-e4b": {
    "pricing": {
      "inputPer1M": 0.02,
      "outputPer1M": 0.04,
      "approx": true
    },
    "context": 32000,
    "benchmarks": {
      "liveCodeBench": 0.1
    },
    "parameters": 8.39,
    "releaseDate": "2025-06-26"
  },
  "lfm2-1-2b": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 32768,
    "benchmarks": {
      "liveCodeBench": 0.0
    },
    "parameters": 1.17,
    "releaseDate": "2025-07-10"
  },
  "gemma-3-4b": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 128000,
    "benchmarks": {
      "liveCodeBench": 0.1,
      "humanEval": 0.7
    },
    "parameters": 4.3,
    "releaseDate": "2025-03-12"
  },
  "llama-3-2-instruct-1b": {
    "pricing": {
      "inputPer1M": 0.05,
      "outputPer1M": 0.05,
      "approx": true
    },
    "context": 128000,
    "benchmarks": {
      "liveCodeBench": 0.0,
      "humanEval": 0.4
    },
    "parameters": 1.0,
    "releaseDate": "2024-09-25"
  },
  "lfm2-5-vl-1-6b": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 32000,
    "parameters": 1.6,
    "releaseDate": "2026-01-05"
  },
  "granite-4-0-350m": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 32768,
    "benchmarks": {
      "liveCodeBench": 0.0
    },
    "parameters": 0.35,
    "releaseDate": "2025-10-28"
  },
  "granite-4-0-h-350m": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 32768,
    "benchmarks": {
      "liveCodeBench": 0.0
    },
    "parameters": 0.34,
    "releaseDate": "2025-10-28"
  },
  "apertus-8b-instruct": {
    "pricing": {
      "inputPer1M": 0.1,
      "outputPer1M": 0.2,
      "approx": true
    },
    "context": 65536,
    "parameters": 8.0,
    "releaseDate": "2025-09-02"
  },
  "tiny-aya-global": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 8192,
    "parameters": 3.35,
    "releaseDate": "2026-02-17"
  },
  "gemma-3-1b": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 32000,
    "benchmarks": {
      "liveCodeBench": 0.0,
      "humanEval": 0.3
    },
    "parameters": 1.0,
    "releaseDate": "2025-03-13"
  },
  "gemma-3n-e2b": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 32000,
    "benchmarks": {
      "liveCodeBench": 0.1
    },
    "parameters": 5.98,
    "releaseDate": "2025-06-26"
  },
  "qwen3-0.6b-instruct": {
    "pricing": {
      "inputPer1M": 0.11,
      "outputPer1M": 0.42,
      "approx": true
    },
    "context": 32000,
    "benchmarks": {
      "liveCodeBench": 0.1,
      "humanEval": 0.3
    },
    "parameters": 0.752,
    "releaseDate": "2025-04-28"
  }
};

export const autoCompanies: Record<string, CompanyMeta> = {
  "NexAGI": {
    "name": "Nex AGI",
    "origin": "US",
    "accent": "#64748b",
    "blurb": "Nex AGI — datos del Artificial Analysis Intelligence Index."
  },
  "KwaiKAT": {
    "name": "KwaiKAT",
    "origin": "China",
    "accent": "#64748b",
    "blurb": "KwaiKAT — datos del Artificial Analysis Intelligence Index."
  },
  "NVIDIA": {
    "name": "NVIDIA",
    "origin": "US",
    "accent": "#64748b",
    "blurb": "NVIDIA — datos del Artificial Analysis Intelligence Index."
  },
  "InclusionAI": {
    "name": "InclusionAI",
    "origin": "China",
    "accent": "#64748b",
    "blurb": "InclusionAI — datos del Artificial Analysis Intelligence Index."
  },
  "Amazon": {
    "name": "Amazon",
    "origin": "US",
    "accent": "#64748b",
    "blurb": "Amazon — datos del Artificial Analysis Intelligence Index."
  }
};
