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
    "displayName": "Claude Opus 5 (max)",
    "kind": "model",
    "category": [
      "coding",
      "reasoning",
      "agentic"
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
      "designArenaElo": 1364.3
    },
    "notes": "Importado automáticamente del Artificial Analysis Intelligence Index (Score 125.0). Precios aproximados; verifica en la web oficial del proveedor."
  },
  {
    "id": "claude-opus-5-xhigh",
    "iiSlug": "claude-opus-5-xhigh",
    "company": "Anthropic",
    "origin": "US",
    "displayName": "Claude Opus 5 (xhigh)",
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
    "releaseDate": "2026-07-24",
    "benchmarks": {
      "terminalBench": 88.0,
      "sciCode": 55.0,
      "intelligenceIndex": 62.5
    },
    "notes": "Importado automáticamente del Artificial Analysis Intelligence Index (Score 123.6). Precios aproximados; verifica en la web oficial del proveedor."
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
      "reasoning",
      "agentic"
    ],
    "context": 1000000,
    "pricing": {
      "inputPer1M": 5.0,
      "outputPer1M": 30.0,
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
    "notes": "Importado automáticamente del Artificial Analysis Intelligence Index (Score 123.1). Precios aproximados; verifica en la web oficial del proveedor."
  },
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
      "designArenaElo": 1347.0
    },
    "notes": "Importado automáticamente del Artificial Analysis Intelligence Index (Score 122.9). Precios aproximados; verifica en la web oficial del proveedor."
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
      "reasoning",
      "agentic"
    ],
    "context": 500000,
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
    "notes": "Importado automáticamente del Artificial Analysis Intelligence Index (Score 122.5). Precios aproximados; verifica en la web oficial del proveedor."
  },
  {
    "id": "claude-opus-5-high",
    "iiSlug": "claude-opus-5-high",
    "company": "Anthropic",
    "origin": "US",
    "displayName": "Claude Opus 5 (high)",
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
    "releaseDate": "2026-07-24",
    "benchmarks": {
      "terminalBench": 87.6,
      "sciCode": 54.3,
      "intelligenceIndex": 61.5
    },
    "notes": "Importado automáticamente del Artificial Analysis Intelligence Index (Score 121.9). Precios aproximados; verifica en la web oficial del proveedor."
  },
  {
    "id": "gpt-5-6-sol-xhigh",
    "iiSlug": "gpt-5-6-sol-xhigh",
    "company": "OpenAI",
    "origin": "US",
    "displayName": "GPT-5.6 Sol (xhigh)",
    "kind": "model",
    "category": [
      "coding",
      "reasoning",
      "agentic"
    ],
    "context": 1000000,
    "pricing": {
      "inputPer1M": 5.0,
      "outputPer1M": 30.0,
      "approx": true
    },
    "modalities": [
      "text"
    ],
    "openWeight": false,
    "releaseDate": "2026-07-09",
    "benchmarks": {
      "terminalBench": 89.5,
      "sciCode": 56.0,
      "intelligenceIndex": 59.0
    },
    "notes": "Importado automáticamente del Artificial Analysis Intelligence Index (Score 121.7). Precios aproximados; verifica en la web oficial del proveedor."
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
      "reasoning",
      "agentic"
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
      "designArenaElo": 1393.6
    },
    "notes": "Importado automáticamente del Artificial Analysis Intelligence Index (Score 120.6). Precios aproximados; verifica en la web oficial del proveedor."
  },
  {
    "id": "gpt-5-6-sol-high",
    "iiSlug": "gpt-5-6-sol-high",
    "company": "OpenAI",
    "origin": "US",
    "displayName": "GPT-5.6 Sol (high)",
    "kind": "model",
    "category": [
      "coding",
      "reasoning",
      "agentic"
    ],
    "context": 1000000,
    "pricing": {
      "inputPer1M": 5.0,
      "outputPer1M": 30.0,
      "approx": true
    },
    "modalities": [
      "text"
    ],
    "openWeight": false,
    "releaseDate": "2026-07-09",
    "benchmarks": {
      "terminalBench": 87.3,
      "sciCode": 56.9,
      "intelligenceIndex": 57.3
    },
    "notes": "Importado automáticamente del Artificial Analysis Intelligence Index (Score 119.0). Precios aproximados; verifica en la web oficial del proveedor."
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
    "releaseDate": "2026-07-09",
    "benchmarks": {
      "terminalBench": 88.0,
      "sciCode": 53.9,
      "intelligenceIndex": 56.6
    },
    "notes": "Importado automáticamente del Artificial Analysis Intelligence Index (Score 117.7). Precios aproximados; verifica en la web oficial del proveedor."
  },
  {
    "id": "qwen3-8-max",
    "iiSlug": "qwen3-8-max",
    "company": "Alibaba",
    "origin": "China",
    "displayName": "Qwen3.8 Max",
    "kind": "model",
    "category": [
      "coding",
      "reasoning",
      "agentic"
    ],
    "context": 1000000,
    "pricing": {
      "inputPer1M": 2.0,
      "outputPer1M": 6.0,
      "approx": true
    },
    "modalities": [
      "text"
    ],
    "openWeight": false,
    "releaseDate": "2026-08-03",
    "benchmarks": {
      "terminalBench": 81.3,
      "sciCode": 52.9,
      "intelligenceIndex": 58.1
    },
    "notes": "Importado automáticamente del Artificial Analysis Intelligence Index (Score 116.5). Precios aproximados; verifica en la web oficial del proveedor."
  },
  {
    "id": "gpt-5-6-sol-medium",
    "iiSlug": "gpt-5-6-sol-medium",
    "company": "OpenAI",
    "origin": "US",
    "displayName": "GPT-5.6 Sol (medium)",
    "kind": "model",
    "category": [
      "coding",
      "reasoning",
      "agentic"
    ],
    "context": 1000000,
    "pricing": {
      "inputPer1M": 5.0,
      "outputPer1M": 30.0,
      "approx": true
    },
    "modalities": [
      "text"
    ],
    "openWeight": false,
    "releaseDate": "2026-07-09",
    "benchmarks": {
      "terminalBench": 86.1,
      "sciCode": 56.5,
      "intelligenceIndex": 55.6
    },
    "notes": "Importado automáticamente del Artificial Analysis Intelligence Index (Score 116.4). Precios aproximados; verifica en la web oficial del proveedor."
  },
  {
    "id": "claude-opus-5-medium",
    "iiSlug": "claude-opus-5-medium",
    "company": "Anthropic",
    "origin": "US",
    "displayName": "Claude Opus 5 (medium)",
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
    "releaseDate": "2026-07-24",
    "benchmarks": {
      "terminalBench": 86.1,
      "sciCode": 50.7,
      "intelligenceIndex": 58.6
    },
    "notes": "Importado automáticamente del Artificial Analysis Intelligence Index (Score 116.4). Precios aproximados; verifica en la web oficial del proveedor."
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
      "reasoning",
      "agentic"
    ],
    "context": 983616,
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
    "notes": "Importado automáticamente del Artificial Analysis Intelligence Index (Score 115.8). Precios aproximados; verifica en la web oficial del proveedor."
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
      "reasoning",
      "agentic"
    ],
    "context": 1000000,
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
    "notes": "Importado automáticamente del Artificial Analysis Intelligence Index (Score 115.7). Precios aproximados; verifica en la web oficial del proveedor."
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
      "reasoning",
      "agentic"
    ],
    "context": 1048576,
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
    "notes": "Importado automáticamente del Artificial Analysis Intelligence Index (Score 113.8). Precios aproximados; verifica en la web oficial del proveedor."
  },
  {
    "id": "grok-4-5",
    "iiSlug": "grok-4-5",
    "company": "xAI",
    "origin": "US",
    "displayName": "Grok 4.5 (high)",
    "kind": "model",
    "category": [
      "coding",
      "reasoning",
      "agentic"
    ],
    "context": 500000,
    "pricing": {
      "inputPer1M": 2.0,
      "outputPer1M": 6.0,
      "approx": true
    },
    "modalities": [
      "text"
    ],
    "openWeight": false,
    "releaseDate": "2026-07-08",
    "benchmarks": {
      "terminalBench": 81.6,
      "sciCode": 54.1,
      "intelligenceIndex": 55.8
    },
    "notes": "Importado automáticamente del Artificial Analysis Intelligence Index (Score 113.1). Precios aproximados; verifica en la web oficial del proveedor."
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
      "inputPer1M": 1.0,
      "outputPer1M": 5.0,
      "approx": true
    },
    "modalities": [
      "image",
      "text"
    ],
    "openWeight": false,
    "releaseDate": "2026-06-30",
    "benchmarks": {
      "terminalBench": 80.5,
      "sciCode": 53.6,
      "intelligenceIndex": 55.3,
      "designArenaElo": 1283.8
    },
    "notes": "Importado automáticamente del Artificial Analysis Intelligence Index (Score 112.3). Precios aproximados; verifica en la web oficial del proveedor."
  },
  {
    "id": "gemini-3-7-flash-medium",
    "iiSlug": "gemini-3-7-flash-medium",
    "company": "Google",
    "origin": "US",
    "displayName": "Gemini 3.7 Flash (medium)",
    "kind": "model",
    "category": [
      "coding",
      "reasoning",
      "agentic"
    ],
    "context": 1000000,
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
      "terminalBench": 78.3,
      "sciCode": 57.9,
      "intelligenceIndex": 53.4
    },
    "notes": "Importado automáticamente del Artificial Analysis Intelligence Index (Score 110.4). Precios aproximados; verifica en la web oficial del proveedor."
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
      "agentic",
      "budget"
    ],
    "context": 1000000,
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
    "notes": "Importado automáticamente del Artificial Analysis Intelligence Index (Score 109.8). Precios aproximados; verifica en la web oficial del proveedor."
  },
  {
    "id": "gpt-5-6-terra-xhigh",
    "iiSlug": "gpt-5-6-terra-xhigh",
    "company": "OpenAI",
    "origin": "US",
    "displayName": "GPT-5.6 Terra (xhigh)",
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
    "releaseDate": "2026-07-09",
    "benchmarks": {
      "terminalBench": 80.1,
      "sciCode": 51.6,
      "intelligenceIndex": 52.8
    },
    "notes": "Importado automáticamente del Artificial Analysis Intelligence Index (Score 109.1). Precios aproximados; verifica en la web oficial del proveedor."
  },
  {
    "id": "deepseek-v4-pro",
    "iiSlug": "deepseek-v4-pro",
    "company": "DeepSeek",
    "origin": "China",
    "displayName": "DeepSeek V4 Pro 0813 (max)",
    "kind": "model",
    "category": [
      "coding",
      "reasoning",
      "agentic"
    ],
    "context": 1000000,
    "pricing": {
      "inputPer1M": 1.168,
      "outputPer1M": 2.336,
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
      "designArenaElo": 1239.6
    },
    "notes": "Importado automáticamente del Artificial Analysis Intelligence Index (Score 108.3). Precios aproximados; verifica en la web oficial del proveedor."
  },
  {
    "id": "deepseek-v4-flash",
    "iiSlug": "deepseek-v4-flash",
    "company": "DeepSeek",
    "origin": "China",
    "displayName": "DeepSeek V4 Flash 0731 (max)",
    "kind": "model",
    "category": [
      "coding",
      "reasoning",
      "agentic",
      "budget"
    ],
    "context": 1000000,
    "pricing": {
      "inputPer1M": 0.0615,
      "outputPer1M": 0.1229,
      "approx": true
    },
    "modalities": [
      "text"
    ],
    "openWeight": true,
    "releaseDate": "2026-07-31",
    "parameters": 284.0,
    "benchmarks": {
      "terminalBench": 78.7,
      "sciCode": 49.9,
      "intelligenceIndex": 51.8,
      "designArenaElo": 1199.1
    },
    "notes": "Importado automáticamente del Artificial Analysis Intelligence Index (Score 107.6). Precios aproximados; verifica en la web oficial del proveedor."
  },
  {
    "id": "gemini-3-7-flash-low",
    "iiSlug": "gemini-3-7-flash-low",
    "company": "Google",
    "origin": "US",
    "displayName": "Gemini 3.7 Flash (low)",
    "kind": "model",
    "category": [
      "coding",
      "reasoning",
      "agentic"
    ],
    "context": 1000000,
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
      "terminalBench": 79.8,
      "sciCode": 53.6,
      "intelligenceIndex": 50.9
    },
    "notes": "Importado automáticamente del Artificial Analysis Intelligence Index (Score 107.2). Precios aproximados; verifica en la web oficial del proveedor."
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
    "benchmarks": {
      "terminalBench": 77.9,
      "sciCode": 50.5,
      "intelligenceIndex": 52.6
    },
    "notes": "Importado automáticamente del Artificial Analysis Intelligence Index (Score 106.9). Precios aproximados; verifica en la web oficial del proveedor."
  },
  {
    "id": "gpt-5-6-sol-low",
    "iiSlug": "gpt-5-6-sol-low",
    "company": "OpenAI",
    "origin": "US",
    "displayName": "GPT-5.6 Sol (low)",
    "kind": "model",
    "category": [
      "coding",
      "reasoning",
      "agentic"
    ],
    "context": 1000000,
    "pricing": {
      "inputPer1M": 5.0,
      "outputPer1M": 30.0,
      "approx": true
    },
    "modalities": [
      "text"
    ],
    "openWeight": false,
    "releaseDate": "2026-07-09",
    "benchmarks": {
      "terminalBench": 76.8,
      "sciCode": 55.4,
      "intelligenceIndex": 50.7
    },
    "notes": "Importado automáticamente del Artificial Analysis Intelligence Index (Score 106.1). Precios aproximados; verifica en la web oficial del proveedor."
  },
  {
    "id": "kimi-k3-low",
    "iiSlug": "kimi-k3-low",
    "company": "Moonshot",
    "origin": "China",
    "displayName": "Kimi K3 (low)",
    "kind": "model",
    "category": [
      "coding",
      "reasoning",
      "agentic"
    ],
    "context": 1048576,
    "pricing": {
      "inputPer1M": 3.0,
      "outputPer1M": 15.0,
      "approx": true
    },
    "modalities": [
      "text"
    ],
    "openWeight": true,
    "releaseDate": "2026-07-16",
    "parameters": 2780.0,
    "benchmarks": {
      "terminalBench": 82.4,
      "sciCode": 51.2,
      "intelligenceIndex": 48.3
    },
    "notes": "Importado automáticamente del Artificial Analysis Intelligence Index (Score 105.9). Precios aproximados; verifica en la web oficial del proveedor."
  },
  {
    "id": "gemini-3-6-flash",
    "iiSlug": "gemini-3-6-flash",
    "company": "Google",
    "origin": "US",
    "displayName": "Gemini 3.6 Flash",
    "kind": "model",
    "category": [
      "coding",
      "reasoning",
      "agentic"
    ],
    "context": 1000000,
    "pricing": {
      "inputPer1M": 1.5,
      "outputPer1M": 7.5,
      "approx": true
    },
    "modalities": [
      "text"
    ],
    "openWeight": false,
    "releaseDate": "2026-07-21",
    "benchmarks": {
      "terminalBench": 77.5,
      "sciCode": 52.7,
      "intelligenceIndex": 51.6
    },
    "notes": "Importado automáticamente del Artificial Analysis Intelligence Index (Score 105.5). Precios aproximados; verifica en la web oficial del proveedor."
  },
  {
    "id": "gpt-5-6-luna-xhigh",
    "iiSlug": "gpt-5-6-luna-xhigh",
    "company": "OpenAI",
    "origin": "US",
    "displayName": "GPT-5.6 Luna (xhigh)",
    "kind": "model",
    "category": [
      "coding",
      "reasoning",
      "agentic",
      "budget"
    ],
    "context": 1000000,
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
      "terminalBench": 77.9,
      "sciCode": 50.0,
      "intelligenceIndex": 50.1
    },
    "notes": "Importado automáticamente del Artificial Analysis Intelligence Index (Score 105.1). Precios aproximados; verifica en la web oficial del proveedor."
  },
  {
    "id": "claude-opus-5-low",
    "iiSlug": "claude-opus-5-low",
    "company": "Anthropic",
    "origin": "US",
    "displayName": "Claude Opus 5 (low)",
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
    "releaseDate": "2026-07-24",
    "benchmarks": {
      "terminalBench": 76.4,
      "sciCode": 48.0,
      "intelligenceIndex": 52.5
    },
    "notes": "Importado automáticamente del Artificial Analysis Intelligence Index (Score 103.9). Precios aproximados; verifica en la web oficial del proveedor."
  },
  {
    "id": "gpt-5-6-terra-high",
    "iiSlug": "gpt-5-6-terra-high",
    "company": "OpenAI",
    "origin": "US",
    "displayName": "GPT-5.6 Terra (high)",
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
    "releaseDate": "2026-07-09",
    "benchmarks": {
      "terminalBench": 75.7,
      "sciCode": 50.1,
      "intelligenceIndex": 50.1
    },
    "notes": "Importado automáticamente del Artificial Analysis Intelligence Index (Score 103.5). Precios aproximados; verifica en la web oficial del proveedor."
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
    "benchmarks": {
      "terminalBench": 73.8,
      "sciCode": 58.9,
      "intelligenceIndex": 47.7
    },
    "notes": "Importado automáticamente del Artificial Analysis Intelligence Index (Score 98.6). Precios aproximados; verifica en la web oficial del proveedor."
  },
  {
    "id": "gpt-5-6-terra-medium",
    "iiSlug": "gpt-5-6-terra-medium",
    "company": "OpenAI",
    "origin": "US",
    "displayName": "GPT-5.6 Terra (medium)",
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
    "releaseDate": "2026-07-09",
    "benchmarks": {
      "terminalBench": 72.3,
      "sciCode": 49.7,
      "intelligenceIndex": 46.8
    },
    "notes": "Importado automáticamente del Artificial Analysis Intelligence Index (Score 98.3). Precios aproximados; verifica en la web oficial del proveedor."
  },
  {
    "id": "gpt-5-6-luna-high",
    "iiSlug": "gpt-5-6-luna-high",
    "company": "OpenAI",
    "origin": "US",
    "displayName": "GPT-5.6 Luna (high)",
    "kind": "model",
    "category": [
      "coding",
      "reasoning",
      "agentic",
      "budget"
    ],
    "context": 1000000,
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
      "terminalBench": 69.7,
      "sciCode": 50.7,
      "intelligenceIndex": 47.0
    },
    "notes": "Importado automáticamente del Artificial Analysis Intelligence Index (Score 97.9). Precios aproximados; verifica en la web oficial del proveedor."
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
      "inputPer1M": 2.0,
      "outputPer1M": 10.0,
      "approx": true
    },
    "modalities": [
      "text"
    ],
    "openWeight": false,
    "releaseDate": "2026-06-30",
    "benchmarks": {
      "terminalBench": 75.3,
      "sciCode": 48.6,
      "intelligenceIndex": 42.6
    },
    "notes": "Importado automáticamente del Artificial Analysis Intelligence Index (Score 96.2). Precios aproximados; verifica en la web oficial del proveedor."
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
    "openWeight": true,
    "releaseDate": "2026-08-12",
    "parameters": 314.0,
    "benchmarks": {
      "terminalBench": 74.9,
      "sciCode": 40.6,
      "intelligenceIndex": 47.4
    },
    "notes": "Importado automáticamente del Artificial Analysis Intelligence Index (Score 96.1). Precios aproximados; verifica en la web oficial del proveedor."
  },
  {
    "id": "gpt-5-6-sol-non-reasoning",
    "iiSlug": "gpt-5-6-sol-non-reasoning",
    "company": "OpenAI",
    "origin": "US",
    "displayName": "GPT-5.6 Sol (Non-reasoning)",
    "kind": "model",
    "category": [
      "coding",
      "agentic"
    ],
    "context": 1000000,
    "pricing": {
      "inputPer1M": 5.0,
      "outputPer1M": 30.0,
      "approx": true
    },
    "modalities": [
      "text"
    ],
    "openWeight": false,
    "releaseDate": "2026-07-09",
    "benchmarks": {
      "terminalBench": 74.2,
      "sciCode": 47.1,
      "intelligenceIndex": 41.9
    },
    "notes": "Importado automáticamente del Artificial Analysis Intelligence Index (Score 95.1). Precios aproximados; verifica en la web oficial del proveedor."
  },
  {
    "id": "deepseek-v4-pro-0424",
    "iiSlug": "deepseek-v4-pro-0424",
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
    "benchmarks": {
      "terminalBench": 64.0,
      "sciCode": 50.0,
      "intelligenceIndex": 45.3
    },
    "notes": "Importado automáticamente del Artificial Analysis Intelligence Index (Score 92.4). Precios aproximados; verifica en la web oficial del proveedor."
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
      "designArenaElo": 1248.6
    },
    "notes": "Importado automáticamente del Artificial Analysis Intelligence Index (Score 90.8). Precios aproximados; verifica en la web oficial del proveedor."
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
    "benchmarks": {
      "terminalBench": 67.4,
      "sciCode": 47.5,
      "intelligenceIndex": 43.0
    },
    "notes": "Importado automáticamente del Artificial Analysis Intelligence Index (Score 90.0). Precios aproximados; verifica en la web oficial del proveedor."
  },
  {
    "id": "deepseek-v4-pro-0424-high",
    "iiSlug": "deepseek-v4-pro-0424-high",
    "company": "DeepSeek",
    "origin": "China",
    "displayName": "DeepSeek V4 Pro (high)",
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
    "benchmarks": {
      "terminalBench": 64.8,
      "sciCode": 46.4,
      "intelligenceIndex": 43.7
    },
    "notes": "Importado automáticamente del Artificial Analysis Intelligence Index (Score 89.9). Precios aproximados; verifica en la web oficial del proveedor."
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
    "benchmarks": {
      "terminalBench": 65.2,
      "sciCode": 50.2,
      "intelligenceIndex": 42.9
    },
    "notes": "Importado automáticamente del Artificial Analysis Intelligence Index (Score 89.5). Precios aproximados; verifica en la web oficial del proveedor."
  },
  {
    "id": "hy3",
    "iiSlug": "hy3",
    "company": "Tencent",
    "origin": "China",
    "displayName": "Hy3",
    "kind": "model",
    "category": [
      "coding",
      "reasoning",
      "agentic",
      "budget"
    ],
    "context": 256000,
    "pricing": {
      "inputPer1M": 0.132,
      "outputPer1M": 0.528,
      "approx": true
    },
    "modalities": [
      "text"
    ],
    "openWeight": true,
    "releaseDate": "2026-07-06",
    "parameters": 299.0,
    "benchmarks": {
      "terminalBench": 64.4,
      "sciCode": 47.6,
      "intelligenceIndex": 42.2,
      "designArenaElo": 1189.2
    },
    "notes": "Importado automáticamente del Artificial Analysis Intelligence Index (Score 88.2). Precios aproximados; verifica en la web oficial del proveedor."
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
      "inputPer1M": 0.25,
      "outputPer1M": 1.0,
      "approx": true
    },
    "modalities": [
      "image",
      "text"
    ],
    "openWeight": true,
    "releaseDate": "2026-06-02",
    "parameters": 397.0,
    "benchmarks": {
      "terminalBench": 67.8,
      "sciCode": 41.8,
      "intelligenceIndex": 41.7,
      "designArenaElo": 1240.2
    },
    "notes": "Importado automáticamente del Artificial Analysis Intelligence Index (Score 87.6). Precios aproximados; verifica en la web oficial del proveedor."
  },
  {
    "id": "gpt-5-6-terra-low",
    "iiSlug": "gpt-5-6-terra-low",
    "company": "OpenAI",
    "origin": "US",
    "displayName": "GPT-5.6 Terra (low)",
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
    "releaseDate": "2026-07-09",
    "benchmarks": {
      "terminalBench": 62.5,
      "sciCode": 49.2,
      "intelligenceIndex": 41.3
    },
    "notes": "Importado automáticamente del Artificial Analysis Intelligence Index (Score 87.3). Precios aproximados; verifica en la web oficial del proveedor."
  },
  {
    "id": "agnes-2-5-pro-alpha",
    "iiSlug": "agnes-2-5-pro-alpha",
    "company": "SapiensAI",
    "origin": "US",
    "displayName": "Agnes 2.5 Pro Alpha",
    "kind": "model",
    "category": [
      "coding",
      "reasoning",
      "agentic",
      "budget"
    ],
    "context": 1000000,
    "pricing": {
      "inputPer1M": 0.45,
      "outputPer1M": 0.9,
      "approx": true
    },
    "modalities": [
      "text"
    ],
    "openWeight": false,
    "releaseDate": "2026-07-24",
    "benchmarks": {
      "terminalBench": 67.0,
      "sciCode": 42.2,
      "intelligenceIndex": 39.7
    },
    "notes": "Importado automáticamente del Artificial Analysis Intelligence Index (Score 84.6). Precios aproximados; verifica en la web oficial del proveedor."
  },
  {
    "id": "motif-0714",
    "iiSlug": "motif-0714",
    "company": "MotifTechnologies",
    "origin": "China",
    "displayName": "Motif 3 (Beta)",
    "kind": "model",
    "category": [
      "coding",
      "reasoning",
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
    "releaseDate": "2026-07-14",
    "parameters": 314.0,
    "benchmarks": {
      "terminalBench": 70.8,
      "sciCode": 44.3,
      "intelligenceIndex": 45.3
    },
    "notes": "Importado automáticamente del Artificial Analysis Intelligence Index (Score 82.9). Precios aproximados; verifica en la web oficial del proveedor."
  },
  {
    "id": "inkling",
    "iiSlug": "inkling",
    "company": "ThinkingMachines",
    "origin": "US",
    "displayName": "Inkling",
    "kind": "model",
    "category": [
      "coding",
      "reasoning",
      "agentic"
    ],
    "context": 1000000,
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
      "designArenaElo": 1207.8
    },
    "notes": "Importado automáticamente del Artificial Analysis Intelligence Index (Score 82.8). Precios aproximados; verifica en la web oficial del proveedor."
  },
  {
    "id": "solar-pro4",
    "iiSlug": "solar-pro4",
    "company": "Upstage",
    "origin": "US",
    "displayName": "Solar Pro 4",
    "kind": "model",
    "category": [
      "coding",
      "reasoning",
      "agentic",
      "budget"
    ],
    "context": 512000,
    "pricing": {
      "inputPer1M": 0.03,
      "outputPer1M": 0.12,
      "approx": true
    },
    "modalities": [
      "text"
    ],
    "openWeight": false,
    "releaseDate": "2026-08-06",
    "benchmarks": {
      "terminalBench": 57.3,
      "sciCode": 43.6,
      "intelligenceIndex": 41.6,
      "designArenaElo": 1149.3
    },
    "notes": "Importado automáticamente del Artificial Analysis Intelligence Index (Score 82.7). Precios aproximados; verifica en la web oficial del proveedor."
  },
  {
    "id": "inkling-small",
    "iiSlug": "inkling-small",
    "company": "ThinkingMachines",
    "origin": "US",
    "displayName": "Inkling Small",
    "kind": "model",
    "category": [
      "coding",
      "reasoning",
      "agentic",
      "budget"
    ],
    "context": 1000000,
    "pricing": {
      "inputPer1M": 0.45,
      "outputPer1M": 1.2,
      "approx": true
    },
    "modalities": [
      "audio",
      "image",
      "text"
    ],
    "openWeight": true,
    "releaseDate": "2026-07-30",
    "parameters": 266.0,
    "benchmarks": {
      "terminalBench": 55.1,
      "sciCode": 48.7,
      "intelligenceIndex": 41.2
    },
    "notes": "Importado automáticamente del Artificial Analysis Intelligence Index (Score 82.7). Precios aproximados; verifica en la web oficial del proveedor."
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
      "designArenaElo": 1364.3
    },
    "releaseDate": "2026-07-24"
  },
  "claude-opus-5-xhigh": {
    "pricing": {
      "inputPer1M": 5.0,
      "outputPer1M": 25.0,
      "approx": true
    },
    "context": 1000000,
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
      "designArenaElo": 1347.0
    },
    "releaseDate": "2026-06-09"
  },
  "claude-opus-5-high": {
    "pricing": {
      "inputPer1M": 5.0,
      "outputPer1M": 25.0,
      "approx": true
    },
    "context": 1000000,
    "benchmarks": {
      "terminalBench": 87.6,
      "sciCode": 54.3,
      "intelligenceIndex": 61.5
    },
    "releaseDate": "2026-07-24"
  },
  "gpt-5-6-sol": {
    "pricing": {
      "inputPer1M": 5.0,
      "outputPer1M": 30.0,
      "approx": true
    },
    "context": 1000000,
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
    "context": 500000,
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
      "designArenaElo": 1393.6
    },
    "parameters": 2800.0,
    "releaseDate": "2026-07-16"
  },
  "gpt-5-6-sol-xhigh": {
    "pricing": {
      "inputPer1M": 5.0,
      "outputPer1M": 30.0,
      "approx": true
    },
    "context": 1000000,
    "benchmarks": {
      "terminalBench": 89.5,
      "sciCode": 56.0,
      "intelligenceIndex": 59.0
    },
    "releaseDate": "2026-07-09"
  },
  "claude-opus-5-medium": {
    "pricing": {
      "inputPer1M": 5.0,
      "outputPer1M": 25.0,
      "approx": true
    },
    "context": 1000000,
    "benchmarks": {
      "terminalBench": 86.1,
      "sciCode": 50.7,
      "intelligenceIndex": 58.6
    },
    "releaseDate": "2026-07-24"
  },
  "qwen3-8-max": {
    "pricing": {
      "inputPer1M": 2.0,
      "outputPer1M": 6.0,
      "approx": true
    },
    "context": 1000000,
    "benchmarks": {
      "terminalBench": 81.3,
      "sciCode": 52.9,
      "intelligenceIndex": 58.1
    },
    "releaseDate": "2026-08-03"
  },
  "qwen3-8-2-4t-a95b": {
    "pricing": {
      "inputPer1M": 2.0,
      "outputPer1M": 6.0,
      "approx": true
    },
    "context": 983616,
    "benchmarks": {
      "terminalBench": 82.0,
      "sciCode": 51.6,
      "intelligenceIndex": 57.7
    },
    "parameters": 2400.0,
    "releaseDate": "2026-08-12"
  },
  "gpt-5-6-sol-high": {
    "pricing": {
      "inputPer1M": 5.0,
      "outputPer1M": 30.0,
      "approx": true
    },
    "context": 1000000,
    "benchmarks": {
      "terminalBench": 87.3,
      "sciCode": 56.9,
      "intelligenceIndex": 57.3
    },
    "releaseDate": "2026-07-09"
  },
  "claude-opus-4-8": {
    "pricing": {
      "inputPer1M": 5.0,
      "outputPer1M": 25.0,
      "approx": true
    },
    "context": 1000000,
    "benchmarks": {
      "terminalBench": 84.6,
      "sciCode": 53.5,
      "intelligenceIndex": 57.3
    },
    "releaseDate": "2026-05-28"
  },
  "muse-spark-1-2": {
    "pricing": {
      "inputPer1M": 1.25,
      "outputPer1M": 4.25,
      "approx": true
    },
    "context": 1048576,
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
    "context": 1000000,
    "benchmarks": {
      "terminalBench": 88.0,
      "sciCode": 53.9,
      "intelligenceIndex": 56.6
    },
    "releaseDate": "2026-07-09"
  },
  "gpt-5-5": {
    "pricing": {
      "inputPer1M": 5.0,
      "outputPer1M": 30.0,
      "approx": true
    },
    "context": 922000,
    "benchmarks": {
      "terminalBench": 84.3,
      "sciCode": 56.1,
      "intelligenceIndex": 56.3
    },
    "releaseDate": "2026-04-23"
  },
  "gemini-3-7-flash": {
    "pricing": {
      "inputPer1M": 0.75,
      "outputPer1M": 3.75,
      "approx": true
    },
    "context": 1000000,
    "benchmarks": {
      "terminalBench": 85.8,
      "sciCode": 56.8,
      "intelligenceIndex": 56.0
    },
    "releaseDate": "2026-08-13"
  },
  "grok-4-5": {
    "pricing": {
      "inputPer1M": 2.0,
      "outputPer1M": 6.0,
      "approx": true
    },
    "context": 500000,
    "benchmarks": {
      "terminalBench": 81.6,
      "sciCode": 54.1,
      "intelligenceIndex": 55.8
    },
    "releaseDate": "2026-07-08"
  },
  "gpt-5-6-sol-medium": {
    "pricing": {
      "inputPer1M": 5.0,
      "outputPer1M": 30.0,
      "approx": true
    },
    "context": 1000000,
    "benchmarks": {
      "terminalBench": 86.1,
      "sciCode": 56.5,
      "intelligenceIndex": 55.6
    },
    "releaseDate": "2026-07-09"
  },
  "claude-sonnet-5": {
    "pricing": {
      "inputPer1M": 1.0,
      "outputPer1M": 5.0,
      "approx": true
    },
    "context": 1000000,
    "benchmarks": {
      "terminalBench": 80.5,
      "sciCode": 53.6,
      "intelligenceIndex": 55.3,
      "designArenaElo": 1283.8
    },
    "releaseDate": "2026-06-30"
  },
  "claude-opus-4-7": {
    "pricing": {
      "inputPer1M": 5.0,
      "outputPer1M": 25.0,
      "approx": true
    },
    "context": 1000000,
    "benchmarks": {
      "terminalBench": 83.1,
      "sciCode": 54.5,
      "intelligenceIndex": 55.0
    },
    "releaseDate": "2026-04-16"
  },
  "gpt-5-5-high": {
    "pricing": {
      "inputPer1M": 5.0,
      "outputPer1M": 30.0,
      "approx": true
    },
    "context": 922000,
    "benchmarks": {
      "terminalBench": 79.4,
      "sciCode": 55.9,
      "intelligenceIndex": 54.7
    },
    "releaseDate": "2026-04-23"
  },
  "gemini-3-7-flash-medium": {
    "pricing": {
      "inputPer1M": 0.75,
      "outputPer1M": 3.75,
      "approx": true
    },
    "context": 1000000,
    "benchmarks": {
      "terminalBench": 78.3,
      "sciCode": 57.9,
      "intelligenceIndex": 53.4
    },
    "releaseDate": "2026-08-13"
  },
  "muse-spark-1-1": {
    "pricing": {
      "inputPer1M": 1.25,
      "outputPer1M": 4.25,
      "approx": true
    },
    "context": 1048576,
    "benchmarks": {
      "terminalBench": 77.9,
      "sciCode": 58.2,
      "intelligenceIndex": 53.2
    },
    "releaseDate": "2026-07-09"
  },
  "deepseek-v4-pro": {
    "pricing": {
      "inputPer1M": 1.168,
      "outputPer1M": 2.336,
      "approx": true
    },
    "context": 1000000,
    "benchmarks": {
      "terminalBench": 78.7,
      "sciCode": 49.2,
      "intelligenceIndex": 53.2,
      "designArenaElo": 1239.6
    },
    "parameters": 1600.0,
    "releaseDate": "2026-08-13"
  },
  "gpt-5-4": {
    "pricing": {
      "inputPer1M": 2.5,
      "outputPer1M": 15.0,
      "approx": true
    },
    "context": 1050000,
    "benchmarks": {
      "terminalBench": 78.3,
      "sciCode": 56.6,
      "intelligenceIndex": 53.1
    },
    "releaseDate": "2026-03-05"
  },
  "gpt-5-6-terra-xhigh": {
    "pricing": {
      "inputPer1M": 2.0,
      "outputPer1M": 12.0,
      "approx": true
    },
    "context": 1000000,
    "benchmarks": {
      "terminalBench": 80.1,
      "sciCode": 51.6,
      "intelligenceIndex": 52.8
    },
    "releaseDate": "2026-07-09"
  },
  "glm-5-2": {
    "pricing": {
      "inputPer1M": 1.4,
      "outputPer1M": 4.4,
      "approx": true
    },
    "context": 1000000,
    "benchmarks": {
      "terminalBench": 77.9,
      "sciCode": 50.5,
      "intelligenceIndex": 52.6
    },
    "parameters": 753.0,
    "releaseDate": "2026-06-16"
  },
  "claude-opus-5-low": {
    "pricing": {
      "inputPer1M": 5.0,
      "outputPer1M": 25.0,
      "approx": true
    },
    "context": 1000000,
    "benchmarks": {
      "terminalBench": 76.4,
      "sciCode": 48.0,
      "intelligenceIndex": 52.5
    },
    "releaseDate": "2026-07-24"
  },
  "gpt-5-6-luna": {
    "pricing": {
      "inputPer1M": 0.2,
      "outputPer1M": 1.2,
      "approx": true
    },
    "context": 1000000,
    "benchmarks": {
      "terminalBench": 80.9,
      "sciCode": 52.5,
      "intelligenceIndex": 52.3
    },
    "releaseDate": "2026-07-09"
  },
  "gemini-3-5-flash": {
    "pricing": {
      "inputPer1M": 1.5,
      "outputPer1M": 9.0,
      "approx": true
    },
    "context": 1000000,
    "benchmarks": {
      "terminalBench": 78.7,
      "sciCode": 53.1,
      "intelligenceIndex": 52.0
    },
    "releaseDate": "2026-05-19"
  },
  "deepseek-v4-flash": {
    "pricing": {
      "inputPer1M": 0.0615,
      "outputPer1M": 0.1229,
      "approx": true
    },
    "context": 1000000,
    "benchmarks": {
      "terminalBench": 78.7,
      "sciCode": 49.9,
      "intelligenceIndex": 51.8,
      "designArenaElo": 1199.1
    },
    "parameters": 284.0,
    "releaseDate": "2026-07-31"
  },
  "gemini-3-6-flash": {
    "pricing": {
      "inputPer1M": 1.5,
      "outputPer1M": 7.5,
      "approx": true
    },
    "context": 1000000,
    "benchmarks": {
      "terminalBench": 77.5,
      "sciCode": 52.7,
      "intelligenceIndex": 51.6
    },
    "releaseDate": "2026-07-21"
  },
  "gpt-5-5-medium": {
    "pricing": {
      "inputPer1M": 5.0,
      "outputPer1M": 30.0,
      "approx": true
    },
    "context": 922000,
    "benchmarks": {
      "terminalBench": 80.5,
      "sciCode": 53.5,
      "intelligenceIndex": 51.4
    },
    "releaseDate": "2026-04-23"
  },
  "gemini-3-7-flash-low": {
    "pricing": {
      "inputPer1M": 0.75,
      "outputPer1M": 3.75,
      "approx": true
    },
    "context": 1000000,
    "benchmarks": {
      "terminalBench": 79.8,
      "sciCode": 53.6,
      "intelligenceIndex": 50.9
    },
    "releaseDate": "2026-08-13"
  },
  "gpt-5-6-sol-low": {
    "pricing": {
      "inputPer1M": 5.0,
      "outputPer1M": 30.0,
      "approx": true
    },
    "context": 1000000,
    "benchmarks": {
      "terminalBench": 76.8,
      "sciCode": 55.4,
      "intelligenceIndex": 50.7
    },
    "releaseDate": "2026-07-09"
  },
  "gpt-5-6-terra-high": {
    "pricing": {
      "inputPer1M": 2.0,
      "outputPer1M": 12.0,
      "approx": true
    },
    "context": 1000000,
    "benchmarks": {
      "terminalBench": 75.7,
      "sciCode": 50.1,
      "intelligenceIndex": 50.1
    },
    "releaseDate": "2026-07-09"
  },
  "gpt-5-6-luna-xhigh": {
    "pricing": {
      "inputPer1M": 0.2,
      "outputPer1M": 1.2,
      "approx": true
    },
    "context": 1000000,
    "benchmarks": {
      "terminalBench": 77.9,
      "sciCode": 50.0,
      "intelligenceIndex": 50.1
    },
    "releaseDate": "2026-07-09"
  },
  "claude-sonnet-4-6-adaptive": {
    "pricing": {
      "inputPer1M": 3.0,
      "outputPer1M": 15.0,
      "approx": true
    },
    "context": 1000000,
    "benchmarks": {
      "terminalBench": 71.2,
      "sciCode": 46.8,
      "intelligenceIndex": 48.4
    },
    "releaseDate": "2026-02-17"
  },
  "kimi-k3-low": {
    "pricing": {
      "inputPer1M": 3.0,
      "outputPer1M": 15.0,
      "approx": true
    },
    "context": 1048576,
    "benchmarks": {
      "terminalBench": 82.4,
      "sciCode": 51.2,
      "intelligenceIndex": 48.3
    },
    "parameters": 2780.0,
    "releaseDate": "2026-07-16"
  },
  "gemini-3-1-pro-preview": {
    "pricing": {
      "inputPer1M": 2.0,
      "outputPer1M": 12.0,
      "approx": true
    },
    "context": 1000000,
    "benchmarks": {
      "terminalBench": 73.8,
      "sciCode": 58.9,
      "intelligenceIndex": 47.7
    },
    "releaseDate": "2026-02-19"
  },
  "motif-3": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 262144,
    "benchmarks": {
      "terminalBench": 74.9,
      "sciCode": 40.6,
      "intelligenceIndex": 47.4
    },
    "parameters": 314.0,
    "releaseDate": "2026-08-12"
  },
  "gpt-5-6-luna-high": {
    "pricing": {
      "inputPer1M": 0.2,
      "outputPer1M": 1.2,
      "approx": true
    },
    "context": 1000000,
    "benchmarks": {
      "terminalBench": 69.7,
      "sciCode": 50.7,
      "intelligenceIndex": 47.0
    },
    "releaseDate": "2026-07-09"
  },
  "gpt-5-6-terra-medium": {
    "pricing": {
      "inputPer1M": 2.0,
      "outputPer1M": 12.0,
      "approx": true
    },
    "context": 1000000,
    "benchmarks": {
      "terminalBench": 72.3,
      "sciCode": 49.7,
      "intelligenceIndex": 46.8
    },
    "releaseDate": "2026-07-09"
  },
  "qwen3-7-max": {
    "pricing": {
      "inputPer1M": 2.5,
      "outputPer1M": 7.5,
      "approx": true
    },
    "context": 1000000,
    "benchmarks": {
      "terminalBench": 74.5,
      "sciCode": 48.8,
      "intelligenceIndex": 46.7
    },
    "releaseDate": "2026-05-19"
  },
  "gemini-3-5-flash-medium": {
    "pricing": {
      "inputPer1M": 1.5,
      "outputPer1M": 9.0,
      "approx": true
    },
    "context": 1000000,
    "benchmarks": {
      "sciCode": 53.0,
      "intelligenceIndex": 46.7
    },
    "releaseDate": "2026-05-19"
  },
  "gpt-5-3-codex": {
    "pricing": {
      "inputPer1M": 1.75,
      "outputPer1M": 14.0,
      "approx": true
    },
    "context": 400000,
    "benchmarks": {
      "sciCode": 53.2,
      "intelligenceIndex": 45.5
    },
    "releaseDate": "2026-02-05"
  },
  "minimax-m3": {
    "pricing": {
      "inputPer1M": 0.15,
      "outputPer1M": 0.6,
      "approx": true
    },
    "context": 1000000,
    "benchmarks": {
      "terminalBench": 65.2,
      "sciCode": 45.4,
      "intelligenceIndex": 45.4,
      "designArenaElo": 1248.6
    },
    "parameters": 428.0,
    "releaseDate": "2026-06-01"
  },
  "motif-0714": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 262144,
    "benchmarks": {
      "terminalBench": 70.8,
      "sciCode": 44.3,
      "intelligenceIndex": 45.3
    },
    "parameters": 314.0,
    "releaseDate": "2026-07-14"
  },
  "deepseek-v4-pro-0424": {
    "pricing": {
      "inputPer1M": 0.435,
      "outputPer1M": 0.87,
      "approx": true
    },
    "context": 1000000,
    "benchmarks": {
      "terminalBench": 64.0,
      "sciCode": 50.0,
      "intelligenceIndex": 45.3
    },
    "parameters": 1600.0,
    "releaseDate": "2026-04-24"
  },
  "kimi-k2-6": {
    "pricing": {
      "inputPer1M": 0.95,
      "outputPer1M": 4.0,
      "approx": true
    },
    "context": 256000,
    "benchmarks": {
      "terminalBench": 65.9,
      "sciCode": 53.5,
      "intelligenceIndex": 45.1
    },
    "parameters": 1000.0,
    "releaseDate": "2026-04-20"
  },
  "claude-opus-4-6-adaptive": {
    "pricing": {
      "inputPer1M": 5.0,
      "outputPer1M": 25.0,
      "approx": true
    },
    "context": 1000000,
    "benchmarks": {
      "sciCode": 51.9,
      "intelligenceIndex": 44.9
    },
    "releaseDate": "2026-02-05"
  },
  "gpt-5-5-low": {
    "pricing": {
      "inputPer1M": 5.0,
      "outputPer1M": 30.0,
      "approx": true
    },
    "context": 922000,
    "benchmarks": {
      "terminalBench": 65.5,
      "sciCode": 51.6,
      "intelligenceIndex": 44.5
    },
    "releaseDate": "2026-04-23"
  },
  "muse-spark": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 262144,
    "benchmarks": {
      "terminalBench": 62.2,
      "sciCode": 51.5,
      "intelligenceIndex": 44.3
    },
    "releaseDate": "2026-04-08"
  },
  "claude-opus-4-7-non-reasoning": {
    "pricing": {
      "inputPer1M": 5.0,
      "outputPer1M": 25.0,
      "approx": true
    },
    "context": 1000000,
    "benchmarks": {
      "sciCode": 50.1,
      "intelligenceIndex": 43.9
    },
    "releaseDate": "2026-04-16"
  },
  "deepseek-v4-pro-0424-high": {
    "pricing": {
      "inputPer1M": 0.435,
      "outputPer1M": 0.87,
      "approx": true
    },
    "context": 1000000,
    "benchmarks": {
      "terminalBench": 64.8,
      "sciCode": 46.4,
      "intelligenceIndex": 43.7
    },
    "parameters": 1600.0,
    "releaseDate": "2026-04-24"
  },
  "gpt-5-2": {
    "pricing": {
      "inputPer1M": 1.75,
      "outputPer1M": 14.0,
      "approx": true
    },
    "context": 400000,
    "benchmarks": {
      "liveCodeBench": 0.9,
      "sciCode": 52.1,
      "intelligenceIndex": 43.3
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
    "benchmarks": {
      "terminalBench": 67.4,
      "sciCode": 47.5,
      "intelligenceIndex": 43.0
    },
    "parameters": 1000.0,
    "releaseDate": "2026-06-12"
  },
  "mimo-v2-5-pro": {
    "pricing": {
      "inputPer1M": 0.435,
      "outputPer1M": 0.87,
      "approx": true
    },
    "context": 1000000,
    "benchmarks": {
      "terminalBench": 65.2,
      "sciCode": 50.2,
      "intelligenceIndex": 42.9
    },
    "parameters": 1023.0,
    "releaseDate": "2026-04-22"
  },
  "claude-sonnet-5-non-reasoning": {
    "pricing": {
      "inputPer1M": 2.0,
      "outputPer1M": 10.0,
      "approx": true
    },
    "context": 1000000,
    "benchmarks": {
      "terminalBench": 75.3,
      "sciCode": 48.6,
      "intelligenceIndex": 42.6
    },
    "releaseDate": "2026-06-30"
  },
  "inkling": {
    "pricing": {
      "inputPer1M": 0.5,
      "outputPer1M": 2.025,
      "approx": true
    },
    "context": 1000000,
    "benchmarks": {
      "terminalBench": 55.1,
      "sciCode": 46.1,
      "intelligenceIndex": 42.3,
      "designArenaElo": 1207.8
    },
    "parameters": 975.0,
    "releaseDate": "2026-07-15"
  },
  "hy3": {
    "pricing": {
      "inputPer1M": 0.132,
      "outputPer1M": 0.528,
      "approx": true
    },
    "context": 256000,
    "benchmarks": {
      "terminalBench": 64.4,
      "sciCode": 47.6,
      "intelligenceIndex": 42.2,
      "designArenaElo": 1189.2
    },
    "parameters": 299.0,
    "releaseDate": "2026-07-06"
  },
  "deepseek-v4-flash-0420": {
    "pricing": {
      "inputPer1M": 0.13,
      "outputPer1M": 0.28,
      "approx": true
    },
    "context": 1000000,
    "benchmarks": {
      "terminalBench": 61.8,
      "sciCode": 44.9,
      "intelligenceIndex": 42.1
    },
    "parameters": 284.0,
    "releaseDate": "2026-04-24"
  },
  "gpt-5-6-sol-non-reasoning": {
    "pricing": {
      "inputPer1M": 5.0,
      "outputPer1M": 30.0,
      "approx": true
    },
    "context": 1000000,
    "benchmarks": {
      "terminalBench": 74.2,
      "sciCode": 47.1,
      "intelligenceIndex": 41.9
    },
    "releaseDate": "2026-07-09"
  },
  "claude-opus-4-5-thinking": {
    "pricing": {
      "inputPer1M": 5.0,
      "outputPer1M": 25.0,
      "approx": true
    },
    "context": 200000,
    "benchmarks": {
      "liveCodeBench": 0.9,
      "sciCode": 49.5,
      "intelligenceIndex": 41.9
    },
    "releaseDate": "2025-11-24"
  },
  "nex-n2-pro": {
    "pricing": {
      "inputPer1M": 0.25,
      "outputPer1M": 1.0,
      "approx": true
    },
    "context": 262000,
    "benchmarks": {
      "terminalBench": 67.8,
      "sciCode": 41.8,
      "intelligenceIndex": 41.7,
      "designArenaElo": 1240.2
    },
    "parameters": 397.0,
    "releaseDate": "2026-06-02"
  },
  "solar-pro4": {
    "pricing": {
      "inputPer1M": 0.03,
      "outputPer1M": 0.12,
      "approx": true
    },
    "context": 512000,
    "benchmarks": {
      "terminalBench": 57.3,
      "sciCode": 43.6,
      "intelligenceIndex": 41.6,
      "designArenaElo": 1149.3
    },
    "releaseDate": "2026-08-06"
  },
  "mimo-v2-pro": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 1000000,
    "benchmarks": {
      "sciCode": 42.5,
      "intelligenceIndex": 41.4
    },
    "releaseDate": "2026-03-18"
  },
  "gpt-5-6-terra-low": {
    "pricing": {
      "inputPer1M": 2.0,
      "outputPer1M": 12.0,
      "approx": true
    },
    "context": 1000000,
    "benchmarks": {
      "terminalBench": 62.5,
      "sciCode": 49.2,
      "intelligenceIndex": 41.3
    },
    "releaseDate": "2026-07-09"
  },
  "gpt-5-2-codex": {
    "pricing": {
      "inputPer1M": 1.75,
      "outputPer1M": 14.0,
      "approx": true
    },
    "context": 400000,
    "benchmarks": {
      "sciCode": 54.6,
      "intelligenceIndex": 41.2
    },
    "releaseDate": "2025-12-11"
  },
  "inkling-small": {
    "pricing": {
      "inputPer1M": 0.45,
      "outputPer1M": 1.2,
      "approx": true
    },
    "context": 1000000,
    "benchmarks": {
      "terminalBench": 55.1,
      "sciCode": 48.7,
      "intelligenceIndex": 41.2
    },
    "parameters": 266.0,
    "releaseDate": "2026-07-30"
  },
  "qwen3-6-max": {
    "pricing": {
      "inputPer1M": 1.3,
      "outputPer1M": 7.8,
      "approx": true
    },
    "context": 256000,
    "benchmarks": {
      "sciCode": 46.9,
      "intelligenceIndex": 41.1
    },
    "releaseDate": "2026-04-20"
  },
  "glm-5-1": {
    "pricing": {
      "inputPer1M": 1.38,
      "outputPer1M": 4.4,
      "approx": true
    },
    "context": 200000,
    "benchmarks": {
      "terminalBench": 61.8,
      "sciCode": 43.8,
      "intelligenceIndex": 41.0
    },
    "parameters": 744.0,
    "releaseDate": "2026-04-07"
  },
  "gpt-5-4-mini": {
    "pricing": {
      "inputPer1M": 0.75,
      "outputPer1M": 4.5,
      "approx": true
    },
    "context": 400000,
    "benchmarks": {
      "terminalBench": 59.2,
      "sciCode": 49.9,
      "intelligenceIndex": 40.9
    },
    "releaseDate": "2026-03-17"
  },
  "grok-build-0-1-06-16": {
    "pricing": {
      "inputPer1M": 1.0,
      "outputPer1M": 2.0,
      "approx": true
    },
    "context": 256000,
    "benchmarks": {
      "terminalBench": 52.1,
      "sciCode": 50.2,
      "intelligenceIndex": 40.6
    },
    "releaseDate": "2026-06-16"
  },
  "gemini-3-pro": {
    "pricing": {
      "inputPer1M": 2.0,
      "outputPer1M": 12.0,
      "approx": true
    },
    "context": 1000000,
    "benchmarks": {
      "liveCodeBench": 0.9,
      "sciCode": 56.1,
      "intelligenceIndex": 40.6
    },
    "releaseDate": "2025-11-18"
  },
  "glm-5": {
    "pricing": {
      "inputPer1M": 0.6,
      "outputPer1M": 1.92,
      "approx": true
    },
    "context": 200000,
    "benchmarks": {
      "sciCode": 46.2,
      "intelligenceIndex": 40.6,
      "designArenaElo": 1247.4
    },
    "parameters": 744.0,
    "releaseDate": "2026-02-11"
  },
  "qwen3-6-plus": {
    "pricing": {
      "inputPer1M": 0.5,
      "outputPer1M": 3.0,
      "approx": true
    },
    "context": 1000000,
    "benchmarks": {
      "terminalBench": 61.4,
      "sciCode": 40.7,
      "intelligenceIndex": 40.5
    },
    "releaseDate": "2026-04-02"
  },
  "gpt-5-4-low": {
    "pricing": {
      "inputPer1M": 2.5,
      "outputPer1M": 15.0,
      "approx": true
    },
    "context": 1050000,
    "benchmarks": {
      "sciCode": 50.3,
      "intelligenceIndex": 40.2
    },
    "releaseDate": "2026-03-05"
  },
  "jt-4-1-flash-236b-a21b": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 256000,
    "benchmarks": {
      "terminalBench": 59.6,
      "sciCode": 38.2,
      "intelligenceIndex": 39.9
    },
    "parameters": 236.0,
    "releaseDate": "2026-07-09"
  },
  "gpt-5-4-nano": {
    "pricing": {
      "inputPer1M": 0.2,
      "outputPer1M": 1.25,
      "approx": true
    },
    "context": 400000,
    "benchmarks": {
      "terminalBench": 60.7,
      "sciCode": 46.9,
      "intelligenceIndex": 39.7
    },
    "releaseDate": "2026-03-17"
  },
  "agnes-2-5-pro-alpha": {
    "pricing": {
      "inputPer1M": 0.45,
      "outputPer1M": 0.9,
      "approx": true
    },
    "context": 1000000,
    "benchmarks": {
      "terminalBench": 67.0,
      "sciCode": 42.2,
      "intelligenceIndex": 39.7
    },
    "releaseDate": "2026-07-24"
  },
  "qwen3-7-plus": {
    "pricing": {
      "inputPer1M": 0.4,
      "outputPer1M": 1.6,
      "approx": true
    },
    "context": 1000000,
    "benchmarks": {
      "terminalBench": 61.0,
      "sciCode": 45.5,
      "intelligenceIndex": 39.4
    },
    "releaseDate": "2026-06-01"
  },
  "glm-5-turbo": {
    "pricing": {
      "inputPer1M": 1.2,
      "outputPer1M": 4.0,
      "approx": true
    },
    "context": 200000,
    "benchmarks": {
      "sciCode": 43.6,
      "intelligenceIndex": 39.1,
      "designArenaElo": 1270.9
    },
    "releaseDate": "2026-03-15"
  },
  "deepseek-v4-flash-0420-high": {
    "pricing": {
      "inputPer1M": 0.14,
      "outputPer1M": 0.28,
      "approx": true
    },
    "context": 1000000,
    "benchmarks": {
      "terminalBench": 56.9,
      "sciCode": 42.0,
      "intelligenceIndex": 39.0
    },
    "parameters": 284.0,
    "releaseDate": "2026-04-24"
  },
  "gpt-5-2-medium": {
    "pricing": {
      "inputPer1M": 1.75,
      "outputPer1M": 14.0,
      "approx": true
    },
    "context": 400000,
    "benchmarks": {
      "liveCodeBench": 0.9,
      "sciCode": 46.2,
      "intelligenceIndex": 38.9
    },
    "releaseDate": "2025-12-11"
  },
  "gpt-5-6-luna-medium": {
    "pricing": {
      "inputPer1M": 0.2,
      "outputPer1M": 1.2,
      "approx": true
    },
    "context": 1000000,
    "benchmarks": {
      "terminalBench": 53.2,
      "sciCode": 45.8,
      "intelligenceIndex": 38.9
    },
    "releaseDate": "2026-07-09"
  },
  "minimax-m2-7": {
    "pricing": {
      "inputPer1M": 0.3,
      "outputPer1M": 1.2,
      "approx": true
    },
    "context": 204800,
    "benchmarks": {
      "terminalBench": 55.4,
      "sciCode": 47.0,
      "intelligenceIndex": 38.9
    },
    "parameters": 230.0,
    "releaseDate": "2026-03-18"
  },
  "claude-opus-4-6": {
    "pricing": {
      "inputPer1M": 5.0,
      "outputPer1M": 25.0,
      "approx": true
    },
    "context": 1000000,
    "benchmarks": {
      "sciCode": 45.7,
      "intelligenceIndex": 38.8
    },
    "releaseDate": "2026-02-05"
  },
  "gemini-3-flash-reasoning": {
    "pricing": {
      "inputPer1M": 0.5,
      "outputPer1M": 3.0,
      "approx": true
    },
    "context": 1000000,
    "benchmarks": {
      "liveCodeBench": 0.9,
      "sciCode": 50.6,
      "intelligenceIndex": 38.7
    },
    "releaseDate": "2025-12-17"
  },
  "nvidia-nemotron-3-ultra-550b-a55b": {
    "pricing": {
      "inputPer1M": 0.6,
      "outputPer1M": 2.75,
      "approx": true
    },
    "context": 262144,
    "benchmarks": {
      "terminalBench": 53.9,
      "sciCode": 39.9,
      "intelligenceIndex": 38.3
    },
    "parameters": 550.0,
    "releaseDate": "2026-06-04"
  },
  "mimo-v2-5-0424": {
    "pricing": {
      "inputPer1M": 0.14,
      "outputPer1M": 0.28,
      "approx": true
    },
    "context": 1000000,
    "benchmarks": {
      "terminalBench": 63.7,
      "sciCode": 43.1,
      "intelligenceIndex": 38.0
    },
    "parameters": 310.0,
    "releaseDate": "2026-04-22"
  },
  "grok-4-20": {
    "pricing": {
      "inputPer1M": 1.25,
      "outputPer1M": 2.5,
      "approx": true
    },
    "context": 2000000,
    "benchmarks": {
      "sciCode": 45.6,
      "intelligenceIndex": 38.0
    },
    "releaseDate": "2026-04-07"
  },
  "grok-4-3": {
    "pricing": {
      "inputPer1M": 1.25,
      "outputPer1M": 2.5,
      "approx": true
    },
    "context": 1000000,
    "benchmarks": {
      "terminalBench": 39.7,
      "sciCode": 47.3,
      "intelligenceIndex": 37.9
    },
    "releaseDate": "2026-04-30"
  },
  "ling-3-0-flash": {
    "pricing": {
      "inputPer1M": 0.075,
      "outputPer1M": 0.22,
      "approx": true
    },
    "context": 262144,
    "benchmarks": {
      "terminalBench": 55.4,
      "sciCode": 41.1,
      "intelligenceIndex": 37.8
    },
    "parameters": 124.0,
    "releaseDate": "2026-08-04"
  },
  "qwen3-6-27b": {
    "pricing": {
      "inputPer1M": 0.6,
      "outputPer1M": 3.6,
      "approx": true
    },
    "context": 262144,
    "benchmarks": {
      "terminalBench": 60.7,
      "sciCode": 39.8,
      "intelligenceIndex": 37.7
    },
    "parameters": 27.8,
    "releaseDate": "2026-04-22"
  },
  "gpt-5-1": {
    "pricing": {
      "inputPer1M": 1.25,
      "outputPer1M": 10.0,
      "approx": true
    },
    "context": 272000,
    "benchmarks": {
      "liveCodeBench": 0.9,
      "terminalBench": 52.4,
      "sciCode": 43.3,
      "intelligenceIndex": 37.5
    },
    "releaseDate": "2025-11-13"
  },
  "gemini-3-5-flash-lite": {
    "pricing": {
      "inputPer1M": 0.3,
      "outputPer1M": 2.5,
      "approx": true
    },
    "context": 1000000,
    "benchmarks": {
      "terminalBench": 53.6,
      "sciCode": 40.9,
      "intelligenceIndex": 37.4
    },
    "releaseDate": "2026-07-21"
  },
  "grok-4-20-0309": {
    "pricing": {
      "inputPer1M": 2.0,
      "outputPer1M": 6.0,
      "approx": true
    },
    "context": 2000000,
    "benchmarks": {
      "sciCode": 44.7,
      "intelligenceIndex": 37.4
    },
    "releaseDate": "2026-03-10"
  },
  "solar-open2-250b": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 1048576,
    "benchmarks": {
      "terminalBench": 44.2,
      "sciCode": 45.6,
      "intelligenceIndex": 37.4
    },
    "parameters": 250.0,
    "releaseDate": "2026-08-12"
  },
  "claude-4-5-sonnet-thinking": {
    "pricing": {
      "inputPer1M": 3.0,
      "outputPer1M": 15.0,
      "approx": true
    },
    "context": 1000000,
    "benchmarks": {
      "liveCodeBench": 0.7,
      "terminalBench": 55.8,
      "sciCode": 44.7,
      "intelligenceIndex": 37.4
    },
    "releaseDate": "2025-09-29"
  },
  "mimo-v2-omni-0327": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 256000,
    "benchmarks": {
      "sciCode": 39.5,
      "intelligenceIndex": 37.3
    },
    "releaseDate": "2026-03-27"
  },
  "gpt-5-codex": {
    "pricing": {
      "inputPer1M": 0.625,
      "outputPer1M": 5.0,
      "approx": true
    },
    "context": 400000,
    "benchmarks": {
      "liveCodeBench": 0.8,
      "sciCode": 40.9,
      "intelligenceIndex": 37.0
    },
    "releaseDate": "2025-09-23"
  },
  "grok-4-3-medium": {
    "pricing": {
      "inputPer1M": 1.25,
      "outputPer1M": 2.5,
      "approx": true
    },
    "context": 1000000,
    "benchmarks": {
      "sciCode": 44.6,
      "intelligenceIndex": 36.9
    },
    "releaseDate": "2026-04-30"
  },
  "claude-sonnet-4-6": {
    "pricing": {
      "inputPer1M": 3.0,
      "outputPer1M": 15.0,
      "approx": true
    },
    "context": 1000000,
    "benchmarks": {
      "sciCode": 46.9,
      "intelligenceIndex": 36.8
    },
    "releaseDate": "2026-02-17"
  },
  "grok-4-3-low": {
    "pricing": {
      "inputPer1M": 1.25,
      "outputPer1M": 2.5,
      "approx": true
    },
    "context": 1000000,
    "benchmarks": {
      "sciCode": 41.9,
      "intelligenceIndex": 36.3
    },
    "releaseDate": "2026-04-30"
  },
  "glm-5-1-non-reasoning": {
    "pricing": {
      "inputPer1M": 1.38,
      "outputPer1M": 4.4,
      "approx": true
    },
    "context": 200000,
    "benchmarks": {
      "sciCode": 36.1,
      "intelligenceIndex": 36.3
    },
    "parameters": 744.0,
    "releaseDate": "2026-04-07"
  },
  "kimi-k2-5": {
    "pricing": {
      "inputPer1M": 0.6,
      "outputPer1M": 3.0,
      "approx": true
    },
    "context": 256000,
    "benchmarks": {
      "terminalBench": 45.7,
      "sciCode": 49.0,
      "intelligenceIndex": 36.0
    },
    "parameters": 1000.0,
    "releaseDate": "2026-01-27"
  },
  "mimo-v2-omni": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 256000,
    "benchmarks": {
      "sciCode": 36.7,
      "intelligenceIndex": 35.9
    },
    "releaseDate": "2026-03-19"
  },
  "gemini-3-5-flash-minimal": {
    "pricing": {
      "inputPer1M": 1.5,
      "outputPer1M": 9.0,
      "approx": true
    },
    "context": 1000000,
    "benchmarks": {
      "sciCode": 48.8,
      "intelligenceIndex": 35.8
    },
    "releaseDate": "2026-05-19"
  },
  "gpt-5-5-non-reasoning": {
    "pricing": {
      "inputPer1M": 5.0,
      "outputPer1M": 30.0,
      "approx": true
    },
    "context": 922000,
    "benchmarks": {
      "terminalBench": 61.0,
      "sciCode": 47.3,
      "intelligenceIndex": 35.8
    },
    "releaseDate": "2026-04-23"
  },
  "gpt-5-1-codex": {
    "pricing": {
      "inputPer1M": 1.25,
      "outputPer1M": 10.0,
      "approx": true
    },
    "context": 400000,
    "benchmarks": {
      "liveCodeBench": 0.8,
      "sciCode": 40.2,
      "intelligenceIndex": 35.6
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
      "liveCodeBench": 0.7,
      "sciCode": 47.0,
      "intelligenceIndex": 35.6
    },
    "releaseDate": "2025-11-24"
  },
  "kimi-k2-6-non-reasoning": {
    "pricing": {
      "inputPer1M": 0.95,
      "outputPer1M": 4.0,
      "approx": true
    },
    "context": 256000,
    "benchmarks": {
      "sciCode": 39.5,
      "intelligenceIndex": 35.4
    },
    "parameters": 1000.0,
    "releaseDate": "2026-04-20"
  },
  "glm-5v-turbo": {
    "pricing": {
      "inputPer1M": 1.2,
      "outputPer1M": 4.0,
      "approx": true
    },
    "context": 200000,
    "benchmarks": {
      "sciCode": 43.5,
      "intelligenceIndex": 35.3,
      "designArenaElo": 1224.8
    },
    "releaseDate": "2026-04-01"
  },
  "gpt-5": {
    "pricing": {
      "inputPer1M": 0.625,
      "outputPer1M": 5.0,
      "approx": true
    },
    "context": 400000,
    "benchmarks": {
      "liveCodeBench": 0.8,
      "humanEval": 1.0,
      "terminalBench": 35.2,
      "sciCode": 42.9,
      "intelligenceIndex": 35.3,
      "designArenaElo": 1194.6
    },
    "releaseDate": "2025-08-07"
  },
  "claude-sonnet-4-6-non-reasoning-low-effort": {
    "pricing": {
      "inputPer1M": 3.0,
      "outputPer1M": 15.0,
      "approx": true
    },
    "context": 1000000,
    "benchmarks": {
      "sciCode": 44.1,
      "intelligenceIndex": 35.1
    },
    "releaseDate": "2026-02-17"
  },
  "muse-glimmer": {
    "pricing": {
      "inputPer1M": 0.325,
      "outputPer1M": 1.35,
      "approx": true
    },
    "context": 131072,
    "benchmarks": {
      "terminalBench": 51.7,
      "sciCode": 43.6,
      "intelligenceIndex": 35.1
    },
    "parameters": 30.0,
    "releaseDate": "2026-08-10"
  },
  "a-x-k2": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 262144,
    "benchmarks": {
      "terminalBench": 39.0,
      "sciCode": 38.5,
      "intelligenceIndex": 35.0
    },
    "releaseDate": "2026-08-12"
  },
  "glm-5-2-non-reasoning": {
    "pricing": {
      "inputPer1M": 1.4,
      "outputPer1M": 4.4,
      "approx": true
    },
    "context": 1000000,
    "benchmarks": {
      "terminalBench": 51.7,
      "sciCode": 36.1,
      "intelligenceIndex": 34.8
    },
    "parameters": 753.0,
    "releaseDate": "2026-06-16"
  },
  "gpt-5-6-terra-non-reasoning": {
    "pricing": {
      "inputPer1M": 2.0,
      "outputPer1M": 12.0,
      "approx": true
    },
    "context": 1000000,
    "benchmarks": {
      "terminalBench": 56.2,
      "sciCode": 44.6,
      "intelligenceIndex": 34.6
    },
    "releaseDate": "2026-07-09"
  },
  "qwen3-5-27b": {
    "pricing": {
      "inputPer1M": 0.3,
      "outputPer1M": 2.4,
      "approx": true
    },
    "context": 262144,
    "benchmarks": {
      "sciCode": 39.5,
      "intelligenceIndex": 34.6
    },
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
      "humanEval": 1.0,
      "sciCode": 41.1,
      "intelligenceIndex": 34.6
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
      "liveCodeBench": 0.7,
      "sciCode": 40.9,
      "intelligenceIndex": 34.5
    },
    "releaseDate": "2025-08-05"
  },
  "minimax-m2-5": {
    "pricing": {
      "inputPer1M": 0.3,
      "outputPer1M": 1.2,
      "approx": true
    },
    "context": 204800,
    "benchmarks": {
      "sciCode": 42.6,
      "intelligenceIndex": 34.5
    },
    "parameters": 230.0,
    "releaseDate": "2026-02-12"
  },
  "glm-4-7": {
    "pricing": {
      "inputPer1M": 0.6,
      "outputPer1M": 2.2,
      "approx": true
    },
    "context": 200000,
    "benchmarks": {
      "liveCodeBench": 0.9,
      "terminalBench": 45.3,
      "sciCode": 45.1,
      "intelligenceIndex": 34.5
    },
    "parameters": 357.0,
    "releaseDate": "2025-12-22"
  },
  "hy3-preview": {
    "pricing": {
      "inputPer1M": 0.18,
      "outputPer1M": 0.6,
      "approx": true
    },
    "context": 256000,
    "benchmarks": {
      "sciCode": 41.2,
      "intelligenceIndex": 34.4
    },
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
    "benchmarks": {
      "sciCode": 50.3,
      "intelligenceIndex": 34.3
    },
    "releaseDate": "2026-05-05"
  },
  "qwen3-5-397b-a17b": {
    "pricing": {
      "inputPer1M": 0.6,
      "outputPer1M": 3.6,
      "approx": true
    },
    "context": 262144,
    "benchmarks": {
      "terminalBench": 51.3,
      "sciCode": 42.0,
      "intelligenceIndex": 34.3
    },
    "parameters": 397.0,
    "releaseDate": "2026-02-16"
  },
  "grok-4": {
    "pricing": {
      "inputPer1M": 3.0,
      "outputPer1M": 15.0,
      "approx": true
    },
    "context": 256000,
    "benchmarks": {
      "liveCodeBench": 0.8,
      "humanEval": 1.0,
      "sciCode": 45.7,
      "intelligenceIndex": 34.1
    },
    "releaseDate": "2025-07-10"
  },
  "mimo-v2-0206": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 256000,
    "benchmarks": {
      "sciCode": 38.3,
      "intelligenceIndex": 34.0
    },
    "parameters": 309.0,
    "releaseDate": "2025-12-16"
  },
  "longcat-2-0": {
    "pricing": {
      "inputPer1M": 0.75,
      "outputPer1M": 2.95,
      "approx": true
    },
    "context": 1000000,
    "benchmarks": {
      "terminalBench": 50.2,
      "sciCode": 35.4,
      "intelligenceIndex": 34.0
    },
    "parameters": 1600.0,
    "releaseDate": "2026-06-29"
  },
  "gemini-3-pro-low": {
    "pricing": {
      "inputPer1M": 2.0,
      "outputPer1M": 12.0,
      "approx": true
    },
    "context": 1000000,
    "benchmarks": {
      "liveCodeBench": 0.9,
      "sciCode": 49.9,
      "intelligenceIndex": 33.9
    },
    "releaseDate": "2025-11-18"
  },
  "gpt-5-6-luna-low": {
    "pricing": {
      "inputPer1M": 0.2,
      "outputPer1M": 1.2,
      "approx": true
    },
    "context": 1000000,
    "benchmarks": {
      "terminalBench": 43.4,
      "sciCode": 45.6,
      "intelligenceIndex": 33.9
    },
    "releaseDate": "2026-07-09"
  },
  "kat-coder-pro-v2": {
    "pricing": {
      "inputPer1M": 0.3,
      "outputPer1M": 1.2,
      "approx": true
    },
    "context": 256000,
    "benchmarks": {
      "terminalBench": 70.0,
      "sciCode": 38.3,
      "intelligenceIndex": 33.7
    },
    "releaseDate": "2026-03-27"
  },
  "kimi-k2-thinking": {
    "pricing": {
      "inputPer1M": 0.6,
      "outputPer1M": 2.5,
      "approx": true
    },
    "context": 256000,
    "benchmarks": {
      "liveCodeBench": 0.9,
      "sciCode": 42.4,
      "intelligenceIndex": 33.5,
      "designArenaElo": 1124.0
    },
    "parameters": 1000.0,
    "releaseDate": "2025-11-06"
  },
  "o3-pro": {
    "pricing": {
      "inputPer1M": 10.0,
      "outputPer1M": 40.0,
      "approx": true
    },
    "context": 200000,
    "benchmarks": {
      "intelligenceIndex": 33.3
    },
    "releaseDate": "2025-06-10"
  },
  "glm-5-non-reasoning": {
    "pricing": {
      "inputPer1M": 1.0,
      "outputPer1M": 3.2,
      "approx": true
    },
    "context": 200000,
    "benchmarks": {
      "sciCode": 38.3,
      "intelligenceIndex": 33.2
    },
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
    "benchmarks": {
      "terminalBench": 47.6,
      "sciCode": 42.0,
      "intelligenceIndex": 32.8
    },
    "parameters": 125.0,
    "releaseDate": "2026-02-24"
  },
  "deepseek-v3-2-reasoning": {
    "pricing": {
      "inputPer1M": 0.28,
      "outputPer1M": 0.42,
      "approx": true
    },
    "context": 128000,
    "benchmarks": {
      "liveCodeBench": 0.9,
      "terminalBench": 46.8,
      "sciCode": 38.9,
      "intelligenceIndex": 32.8
    },
    "parameters": 685.0,
    "releaseDate": "2025-12-01"
  },
  "qwen3-5-397b-a17b-non-reasoning": {
    "pricing": {
      "inputPer1M": 0.6,
      "outputPer1M": 3.6,
      "approx": true
    },
    "context": 262144,
    "benchmarks": {
      "sciCode": 41.1,
      "intelligenceIndex": 32.7
    },
    "parameters": 397.0,
    "releaseDate": "2026-02-16"
  },
  "qwen3-max-thinking": {
    "pricing": {
      "inputPer1M": 0.78,
      "outputPer1M": 3.9,
      "approx": true
    },
    "context": 256000,
    "benchmarks": {
      "sciCode": 43.1,
      "intelligenceIndex": 32.5
    },
    "releaseDate": "2026-01-26"
  },
  "qwen3-6-35b-a3b": {
    "pricing": {
      "inputPer1M": 0.375,
      "outputPer1M": 2.25,
      "approx": true
    },
    "context": 262144,
    "benchmarks": {
      "terminalBench": 44.9,
      "sciCode": 35.8,
      "intelligenceIndex": 32.1
    },
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
      "liveCodeBench": 0.8,
      "sciCode": 40.7,
      "intelligenceIndex": 32.1
    },
    "parameters": 230.0,
    "releaseDate": "2025-12-23"
  },
  "deepseek-v4-pro-0424-non-reasoning": {
    "pricing": {
      "inputPer1M": 0.435,
      "outputPer1M": 0.87,
      "approx": true
    },
    "context": 1000000,
    "benchmarks": {
      "sciCode": 42.4,
      "intelligenceIndex": 31.9
    },
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
      "liveCodeBench": 0.9,
      "sciCode": 39.4,
      "intelligenceIndex": 31.9
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
      "humanEval": 1.0,
      "sciCode": 39.1,
      "intelligenceIndex": 31.9
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
      "liveCodeBench": 0.6,
      "sciCode": 39.8,
      "intelligenceIndex": 31.7
    },
    "releaseDate": "2025-05-22"
  },
  "ring-2-6-1t": {
    "pricing": {
      "inputPer1M": 0.3,
      "outputPer1M": 2.5,
      "approx": true
    },
    "context": 262144,
    "benchmarks": {
      "terminalBench": 43.1,
      "sciCode": 42.4,
      "intelligenceIndex": 31.7
    },
    "parameters": 1000.0,
    "releaseDate": "2026-05-08"
  },
  "g9v3-39a5b": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 131072,
    "benchmarks": {
      "terminalBench": 28.5,
      "sciCode": 38.2,
      "intelligenceIndex": 31.6
    },
    "parameters": 39.0,
    "releaseDate": "2026-08-03"
  },
  "gpt-5-mini-medium": {
    "pricing": {
      "inputPer1M": 0.25,
      "outputPer1M": 2.0,
      "approx": true
    },
    "context": 400000,
    "benchmarks": {
      "liveCodeBench": 0.7,
      "sciCode": 41.0,
      "intelligenceIndex": 31.6
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
    "benchmarks": {
      "sciCode": 40.5,
      "intelligenceIndex": 31.3
    },
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
      "liveCodeBench": 0.8,
      "sciCode": 42.6,
      "intelligenceIndex": 31.3
    },
    "releaseDate": "2025-11-13"
  },
  "qwen3-6-27b-non-reasoning": {
    "pricing": {
      "inputPer1M": 0.6,
      "outputPer1M": 3.6,
      "approx": true
    },
    "context": 262144,
    "benchmarks": {
      "terminalBench": 51.3,
      "sciCode": 37.3,
      "intelligenceIndex": 31.3
    },
    "parameters": 27.8,
    "releaseDate": "2026-04-22"
  },
  "grok-4-1-fast-reasoning": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 2000000,
    "benchmarks": {
      "liveCodeBench": 0.8,
      "sciCode": 44.2,
      "intelligenceIndex": 31.3
    },
    "releaseDate": "2025-11-19"
  },
  "deepseek-v3-1-terminus-reasoning": {
    "pricing": {
      "inputPer1M": 1.635,
      "outputPer1M": 2.75,
      "approx": true
    },
    "context": 128000,
    "benchmarks": {
      "liveCodeBench": 0.8,
      "terminalBench": 44.9,
      "sciCode": 40.6,
      "intelligenceIndex": 31.1
    },
    "parameters": 685.0,
    "releaseDate": "2025-09-22"
  },
  "o3": {
    "pricing": {
      "inputPer1M": 1.0,
      "outputPer1M": 4.0,
      "approx": true
    },
    "context": 200000,
    "benchmarks": {
      "liveCodeBench": 0.8,
      "humanEval": 1.0,
      "sciCode": 41.0,
      "intelligenceIndex": 31.1,
      "designArenaElo": 1080.6
    },
    "releaseDate": "2025-04-16"
  },
  "k-exaone-2-0-0803": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 262144,
    "benchmarks": {
      "terminalBench": 40.4,
      "sciCode": 41.0,
      "intelligenceIndex": 31.0
    },
    "parameters": 750.0,
    "releaseDate": "2026-08-12"
  },
  "step-3-7-flash": {
    "pricing": {
      "inputPer1M": 0.2,
      "outputPer1M": 1.15,
      "approx": true
    },
    "context": 262144,
    "benchmarks": {
      "terminalBench": 39.3,
      "sciCode": 40.0,
      "intelligenceIndex": 30.9
    },
    "parameters": 198.0,
    "releaseDate": "2026-05-29"
  },
  "gpt-5-4-nano-medium": {
    "pricing": {
      "inputPer1M": 0.2,
      "outputPer1M": 1.25,
      "approx": true
    },
    "context": 400000,
    "benchmarks": {
      "sciCode": 38.4,
      "intelligenceIndex": 30.8
    },
    "releaseDate": "2026-03-17"
  },
  "gpt-5-4-mini-medium": {
    "pricing": {
      "inputPer1M": 0.75,
      "outputPer1M": 4.5,
      "approx": true
    },
    "context": 400000,
    "benchmarks": {
      "sciCode": 44.2,
      "intelligenceIndex": 30.5
    },
    "releaseDate": "2026-03-17"
  },
  "mistral-medium-3-5": {
    "pricing": {
      "inputPer1M": 1.5,
      "outputPer1M": 7.5,
      "approx": true
    },
    "context": 256000,
    "benchmarks": {
      "terminalBench": 50.6,
      "sciCode": 39.6,
      "intelligenceIndex": 30.4
    },
    "parameters": 128.0,
    "releaseDate": "2026-04-29"
  },
  "kimi-k2-5-non-reasoning": {
    "pricing": {
      "inputPer1M": 0.6,
      "outputPer1M": 3.0,
      "approx": true
    },
    "context": 256000,
    "benchmarks": {
      "sciCode": 39.6,
      "intelligenceIndex": 30.1
    },
    "parameters": 1000.0,
    "releaseDate": "2026-01-27"
  },
  "qwen3-5-27b-non-reasoning": {
    "pricing": {
      "inputPer1M": 0.3,
      "outputPer1M": 2.4,
      "approx": true
    },
    "context": 262144,
    "benchmarks": {
      "sciCode": 36.7,
      "intelligenceIndex": 30.0
    },
    "parameters": 27.8,
    "releaseDate": "2026-02-24"
  },
  "claude-4-5-sonnet": {
    "pricing": {
      "inputPer1M": 3.0,
      "outputPer1M": 15.0,
      "approx": true
    },
    "context": 1000000,
    "benchmarks": {
      "liveCodeBench": 0.6,
      "sciCode": 42.8,
      "intelligenceIndex": 29.9
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
    "benchmarks": {
      "sciCode": 37.7,
      "intelligenceIndex": 29.9
    },
    "parameters": 36.0,
    "releaseDate": "2026-02-24"
  },
  "claude-4-5-haiku-reasoning": {
    "pricing": {
      "inputPer1M": 1.0,
      "outputPer1M": 5.0,
      "approx": true
    },
    "context": 200000,
    "benchmarks": {
      "liveCodeBench": 0.6,
      "terminalBench": 44.2,
      "sciCode": 43.3,
      "intelligenceIndex": 29.9
    },
    "releaseDate": "2025-10-15"
  },
  "claude-4-sonnet-thinking": {
    "pricing": {
      "inputPer1M": 3.0,
      "outputPer1M": 15.0,
      "approx": true
    },
    "context": 1000000,
    "benchmarks": {
      "liveCodeBench": 0.7,
      "terminalBench": 36.3,
      "sciCode": 40.0,
      "intelligenceIndex": 29.8
    },
    "releaseDate": "2025-05-22"
  },
  "gemma-4-31b": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 256000,
    "benchmarks": {
      "terminalBench": 43.4,
      "sciCode": 43.4,
      "intelligenceIndex": 29.7
    },
    "parameters": 30.7,
    "releaseDate": "2026-04-02"
  },
  "glm-4-6-reasoning": {
    "pricing": {
      "inputPer1M": 0.55,
      "outputPer1M": 2.2,
      "approx": true
    },
    "context": 200000,
    "benchmarks": {
      "liveCodeBench": 0.7,
      "terminalBench": 49.4,
      "sciCode": 38.4,
      "intelligenceIndex": 29.3
    },
    "parameters": 357.0,
    "releaseDate": "2025-09-30"
  },
  "deepseek-v4-flash-non-reasoning": {
    "pricing": {
      "inputPer1M": 0.14,
      "outputPer1M": 0.28,
      "approx": true
    },
    "context": 1000000,
    "benchmarks": {
      "sciCode": 37.3,
      "intelligenceIndex": 29.3
    },
    "parameters": 284.0,
    "releaseDate": "2026-04-24"
  },
  "gpt-5-5-instant-06-26": {
    "pricing": {
      "inputPer1M": 5.0,
      "outputPer1M": 30.0,
      "approx": true
    },
    "context": 400000,
    "benchmarks": {
      "terminalBench": 34.8,
      "sciCode": 48.6,
      "intelligenceIndex": 29.2
    },
    "releaseDate": "2026-06-25"
  },
  "jt-35b-flash": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 256000,
    "benchmarks": {
      "sciCode": 29.1,
      "intelligenceIndex": 29.0
    },
    "parameters": 35.0,
    "releaseDate": "2026-05-14"
  },
  "minimax-m2": {
    "pricing": {
      "inputPer1M": 0.255,
      "outputPer1M": 1.02,
      "approx": true
    },
    "context": 204800,
    "benchmarks": {
      "liveCodeBench": 0.8,
      "sciCode": 36.1,
      "intelligenceIndex": 28.9,
      "designArenaElo": 1153.3
    },
    "parameters": 230.0,
    "releaseDate": "2025-10-26"
  },
  "kat-coder-pro-v1": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 256000,
    "benchmarks": {
      "liveCodeBench": 0.7,
      "sciCode": 36.6,
      "intelligenceIndex": 28.9
    },
    "releaseDate": "2025-11-11"
  },
  "claude-4-1-opus": {
    "pricing": {
      "inputPer1M": 15.0,
      "outputPer1M": 75.0,
      "approx": true
    },
    "context": 200000,
    "benchmarks": {
      "intelligenceIndex": 28.8
    },
    "releaseDate": "2025-08-05"
  },
  "mimo-v2-5-pro-non-reasoning": {
    "pricing": {
      "inputPer1M": 0.435,
      "outputPer1M": 0.87,
      "approx": true
    },
    "context": 1000000,
    "benchmarks": {
      "sciCode": 39.1,
      "intelligenceIndex": 28.4
    },
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
    "benchmarks": {
      "sciCode": 47.1,
      "intelligenceIndex": 28.3
    },
    "releaseDate": "2026-03-05"
  },
  "qwen3-5-122b-a10b-non-reasoning": {
    "pricing": {
      "inputPer1M": 0.4,
      "outputPer1M": 3.2,
      "approx": true
    },
    "context": 262144,
    "benchmarks": {
      "terminalBench": 47.2,
      "sciCode": 35.6,
      "intelligenceIndex": 28.2
    },
    "parameters": 125.0,
    "releaseDate": "2026-02-24"
  },
  "grok-4-fast-reasoning": {
    "pricing": {
      "inputPer1M": 0.2,
      "outputPer1M": 0.5,
      "approx": true
    },
    "context": 2000000,
    "benchmarks": {
      "liveCodeBench": 0.8,
      "sciCode": 44.2,
      "intelligenceIndex": 27.9
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
      "liveCodeBench": 0.8,
      "sciCode": 49.9,
      "intelligenceIndex": 27.9
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
      "humanEval": 1.0,
      "sciCode": 40.3,
      "intelligenceIndex": 27.6
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
      "liveCodeBench": 0.6,
      "sciCode": 35.4,
      "intelligenceIndex": 27.1
    },
    "parameters": 357.0,
    "releaseDate": "2025-12-22"
  },
  "gpt-5-6-luna-non-reasoning": {
    "pricing": {
      "inputPer1M": 0.2,
      "outputPer1M": 1.2,
      "approx": true
    },
    "context": 1000000,
    "benchmarks": {
      "terminalBench": 39.0,
      "sciCode": 39.9,
      "intelligenceIndex": 26.8
    },
    "releaseDate": "2026-07-09"
  },
  "hy3-non-reasoning": {
    "pricing": {
      "inputPer1M": 0.063,
      "outputPer1M": 0.21,
      "approx": true
    },
    "context": 256000,
    "benchmarks": {
      "sciCode": 39.4,
      "intelligenceIndex": 26.6
    },
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
    "benchmarks": {
      "sciCode": 37.0,
      "intelligenceIndex": 26.6
    },
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
      "liveCodeBench": 0.7,
      "sciCode": 40.4,
      "intelligenceIndex": 26.5
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
    "benchmarks": {
      "sciCode": 38.5,
      "intelligenceIndex": 26.5
    },
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
      "liveCodeBench": 0.8,
      "sciCode": 40.7,
      "intelligenceIndex": 26.5
    },
    "releaseDate": "2025-11-11"
  },
  "gemma-4-26b-a4b": {
    "pricing": {
      "inputPer1M": 0.13,
      "outputPer1M": 0.4,
      "approx": true
    },
    "context": 256000,
    "benchmarks": {
      "terminalBench": 39.0,
      "sciCode": 40.0,
      "intelligenceIndex": 26.1
    },
    "parameters": 25.2,
    "releaseDate": "2026-04-02"
  },
  "o4-mini": {
    "pricing": {
      "inputPer1M": 0.55,
      "outputPer1M": 2.2,
      "approx": true
    },
    "context": 200000,
    "benchmarks": {
      "liveCodeBench": 0.9,
      "humanEval": 1.0,
      "sciCode": 46.5,
      "intelligenceIndex": 26.1,
      "designArenaElo": 993.8
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
    "benchmarks": {
      "sciCode": 40.4,
      "intelligenceIndex": 26.0
    },
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
      "humanEval": 1.0,
      "sciCode": 40.9,
      "intelligenceIndex": 26.0
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
      "humanEval": 1.0,
      "sciCode": 37.3,
      "intelligenceIndex": 26.0
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
      "liveCodeBench": 0.8,
      "sciCode": 37.7,
      "intelligenceIndex": 25.9
    },
    "parameters": 685.0,
    "releaseDate": "2025-09-29"
  },
  "gemini-2-5-pro": {
    "pricing": {
      "inputPer1M": 1.25,
      "outputPer1M": 10.0,
      "approx": true
    },
    "context": 1000000,
    "benchmarks": {
      "liveCodeBench": 0.8,
      "terminalBench": 28.5,
      "sciCode": 42.8,
      "intelligenceIndex": 25.9
    },
    "releaseDate": "2025-06-05"
  },
  "gpt-5-mini": {
    "pricing": {
      "inputPer1M": 0.125,
      "outputPer1M": 1.0,
      "approx": true
    },
    "context": 400000,
    "benchmarks": {
      "liveCodeBench": 0.8,
      "terminalBench": 3.7,
      "sciCode": 39.2,
      "intelligenceIndex": 25.8,
      "designArenaElo": 1136.5
    },
    "releaseDate": "2025-08-07"
  },
  "nvidia-nemotron-3-super-120b-a12b": {
    "pricing": {
      "inputPer1M": 0.2,
      "outputPer1M": 0.8,
      "approx": true
    },
    "context": 1000000,
    "benchmarks": {
      "terminalBench": 38.6,
      "sciCode": 36.0,
      "intelligenceIndex": 25.7
    },
    "parameters": 120.6,
    "releaseDate": "2026-03-11"
  },
  "gemini-3-1-flash-lite-preview": {
    "pricing": {
      "inputPer1M": 0.25,
      "outputPer1M": 1.5,
      "approx": true
    },
    "context": 1000000,
    "benchmarks": {
      "terminalBench": 31.1,
      "sciCode": 41.9,
      "intelligenceIndex": 25.6
    },
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
      "liveCodeBench": 0.5,
      "sciCode": 38.7,
      "intelligenceIndex": 25.5
    },
    "releaseDate": "2025-11-03"
  },
  "mimo-v2-flash": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 256000,
    "benchmarks": {
      "liveCodeBench": 0.4,
      "terminalBench": 61.8,
      "sciCode": 25.9,
      "intelligenceIndex": 25.1
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
      "liveCodeBench": 0.6,
      "sciCode": 38.7,
      "intelligenceIndex": 25.1
    },
    "parameters": 685.0,
    "releaseDate": "2025-12-01"
  },
  "grok-4-3-non-reasoning": {
    "pricing": {
      "inputPer1M": 1.25,
      "outputPer1M": 2.5,
      "approx": true
    },
    "context": 1000000,
    "benchmarks": {
      "terminalBench": 34.1,
      "sciCode": 37.4,
      "intelligenceIndex": 25.0
    },
    "releaseDate": "2026-04-30"
  },
  "qwen3-6-35b-a3b-non-reasoning": {
    "pricing": {
      "inputPer1M": 0.375,
      "outputPer1M": 2.25,
      "approx": true
    },
    "context": 262144,
    "benchmarks": {
      "terminalBench": 41.6,
      "sciCode": 1.3,
      "intelligenceIndex": 24.6
    },
    "parameters": 36.0,
    "releaseDate": "2026-04-16"
  },
  "ling-3-0-tiny": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 262144,
    "benchmarks": {
      "terminalBench": 27.7,
      "sciCode": 24.2,
      "intelligenceIndex": 24.5
    },
    "parameters": 7.9,
    "releaseDate": "2026-08-06"
  },
  "qwen3-max": {
    "pricing": {
      "inputPer1M": 0.78,
      "outputPer1M": 3.9,
      "approx": true
    },
    "context": 262144,
    "benchmarks": {
      "liveCodeBench": 0.8,
      "sciCode": 38.3,
      "intelligenceIndex": 24.5,
      "designArenaElo": 1118.8
    },
    "releaseDate": "2025-09-23"
  },
  "qwen3-5-35b-a3b-non-reasoning": {
    "pricing": {
      "inputPer1M": 0.25,
      "outputPer1M": 2.0,
      "approx": true
    },
    "context": 262144,
    "benchmarks": {
      "terminalBench": 40.8,
      "sciCode": 29.3,
      "intelligenceIndex": 24.3
    },
    "parameters": 36.0,
    "releaseDate": "2026-02-24"
  },
  "gemini-2-5-flash-preview-09-2025-reasoning": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 1000000,
    "benchmarks": {
      "liveCodeBench": 0.7,
      "sciCode": 40.5,
      "intelligenceIndex": 24.2
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
      "liveCodeBench": 0.5,
      "sciCode": 34.4,
      "intelligenceIndex": 24.1
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
      "designArenaElo": 984.8
    },
    "parameters": 117.0,
    "releaseDate": "2025-08-05"
  },
  "kimi-k2-0905": {
    "pricing": {
      "inputPer1M": 0.6,
      "outputPer1M": 2.5,
      "approx": true
    },
    "context": 256000,
    "benchmarks": {
      "liveCodeBench": 0.6,
      "sciCode": 30.7,
      "intelligenceIndex": 24.0,
      "designArenaElo": 1117.5
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
      "humanEval": 0.9,
      "sciCode": 37.6,
      "intelligenceIndex": 23.9
    },
    "releaseDate": "2025-02-24"
  },
  "o1": {
    "pricing": {
      "inputPer1M": 7.5,
      "outputPer1M": 30.0,
      "approx": true
    },
    "context": 200000,
    "benchmarks": {
      "liveCodeBench": 0.7,
      "humanEval": 1.0,
      "sciCode": 35.8,
      "intelligenceIndex": 23.9
    },
    "releaseDate": "2024-12-05"
  },
  "nemotron-3-5-lightning": {
    "pricing": {
      "inputPer1M": 0.05,
      "outputPer1M": 0.2,
      "approx": true
    },
    "context": 1000000,
    "benchmarks": {
      "terminalBench": 24.3,
      "sciCode": 31.6,
      "intelligenceIndex": 23.6
    },
    "parameters": 31.6,
    "releaseDate": "2026-08-11"
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
      "humanEval": 1.0,
      "sciCode": 39.5,
      "intelligenceIndex": 23.4
    },
    "releaseDate": "2025-03-25"
  },
  "glm-4-6": {
    "pricing": {
      "inputPer1M": 0.575,
      "outputPer1M": 2.2,
      "approx": true
    },
    "context": 200000,
    "benchmarks": {
      "liveCodeBench": 0.6,
      "sciCode": 33.1,
      "intelligenceIndex": 23.4
    },
    "parameters": 357.0,
    "releaseDate": "2025-09-30"
  },
  "glm-4-7-flash": {
    "pricing": {
      "inputPer1M": 0.07,
      "outputPer1M": 0.4,
      "approx": true
    },
    "context": 200000,
    "benchmarks": {
      "sciCode": 33.7,
      "intelligenceIndex": 23.3
    },
    "parameters": 31.2,
    "releaseDate": "2026-01-19"
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
      "humanEval": 1.0,
      "sciCode": 40.6,
      "intelligenceIndex": 22.9
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
    "benchmarks": {
      "sciCode": 32.2,
      "intelligenceIndex": 22.9
    },
    "releaseDate": "2026-03-10"
  },
  "command-a-plus": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 192000,
    "benchmarks": {
      "terminalBench": 22.8,
      "sciCode": 37.8,
      "intelligenceIndex": 22.8
    },
    "parameters": 218.0,
    "releaseDate": "2026-05-20"
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
      "humanEval": 1.0,
      "sciCode": 41.6,
      "intelligenceIndex": 22.7
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
      "liveCodeBench": 0.9,
      "sciCode": 44.0,
      "intelligenceIndex": 22.6
    },
    "parameters": 685.0,
    "releaseDate": "2025-12-01"
  },
  "k-exaone": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 256000,
    "benchmarks": {
      "liveCodeBench": 0.8,
      "terminalBench": 30.3,
      "sciCode": 35.6,
      "intelligenceIndex": 22.5
    },
    "parameters": 236.0,
    "releaseDate": "2025-12-31"
  },
  "ernie-5-0-thinking-preview": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 128000,
    "benchmarks": {
      "liveCodeBench": 0.8,
      "sciCode": 37.5,
      "intelligenceIndex": 22.3
    },
    "releaseDate": "2025-11-13"
  },
  "gemma-4-31b-non-reasoning": {
    "pricing": {
      "inputPer1M": 0.145,
      "outputPer1M": 0.4,
      "approx": true
    },
    "context": 256000,
    "benchmarks": {
      "terminalBench": 29.2,
      "sciCode": 41.1,
      "intelligenceIndex": 22.3
    },
    "parameters": 30.7,
    "releaseDate": "2026-04-02"
  },
  "grok-4-20-non-reasoning": {
    "pricing": {
      "inputPer1M": 1.25,
      "outputPer1M": 2.5,
      "approx": true
    },
    "context": 2000000,
    "benchmarks": {
      "sciCode": 32.8,
      "intelligenceIndex": 22.2
    },
    "releaseDate": "2026-04-07"
  },
  "gemma-4-12b": {
    "pricing": {
      "inputPer1M": 0.1,
      "outputPer1M": 0.3,
      "approx": true
    },
    "context": 256000,
    "benchmarks": {
      "terminalBench": 27.3,
      "sciCode": 38.2,
      "intelligenceIndex": 22.2
    },
    "parameters": 12.0,
    "releaseDate": "2026-06-03"
  },
  "nova-2-0-pro-reasoning-medium": {
    "pricing": {
      "inputPer1M": 1.25,
      "outputPer1M": 10.0,
      "approx": true
    },
    "context": 256000,
    "benchmarks": {
      "liveCodeBench": 0.7,
      "terminalBench": 29.6,
      "sciCode": 42.7,
      "intelligenceIndex": 22.1
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
      "liveCodeBench": 0.7,
      "sciCode": 36.2,
      "intelligenceIndex": 22.0
    },
    "releaseDate": "2025-08-28"
  },
  "mercury-2": {
    "pricing": {
      "inputPer1M": 0.25,
      "outputPer1M": 0.75,
      "approx": true
    },
    "context": 128000,
    "benchmarks": {
      "terminalBench": 27.3,
      "sciCode": 38.7,
      "intelligenceIndex": 21.9,
      "designArenaElo": 1017.5
    },
    "releaseDate": "2026-02-20"
  },
  "qwen3-5-9b": {
    "pricing": {
      "inputPer1M": 0.135,
      "outputPer1M": 0.2,
      "approx": true
    },
    "context": 262144,
    "benchmarks": {
      "terminalBench": 29.2,
      "sciCode": 27.5,
      "intelligenceIndex": 21.8
    },
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
      "liveCodeBench": 0.5,
      "sciCode": 32.1,
      "intelligenceIndex": 21.7
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
      "liveCodeBench": 0.6,
      "sciCode": 39.9,
      "intelligenceIndex": 21.7
    },
    "parameters": 685.0,
    "releaseDate": "2025-09-29"
  },
  "apriel-v1-5-15b-thinker": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 128000,
    "benchmarks": {
      "liveCodeBench": 0.7,
      "sciCode": 34.8,
      "intelligenceIndex": 21.6
    },
    "parameters": 15.0,
    "releaseDate": "2025-09-30"
  },
  "deepseek-v3-1": {
    "pricing": {
      "inputPer1M": 0.56,
      "outputPer1M": 1.68,
      "approx": true
    },
    "context": 128000,
    "benchmarks": {
      "liveCodeBench": 0.6,
      "sciCode": 36.7,
      "intelligenceIndex": 21.4
    },
    "parameters": 685.0,
    "releaseDate": "2025-08-21"
  },
  "qwen3-coder-next": {
    "pricing": {
      "inputPer1M": 0.12,
      "outputPer1M": 0.8,
      "approx": true
    },
    "context": 256000,
    "benchmarks": {
      "terminalBench": 38.2,
      "sciCode": 32.3,
      "intelligenceIndex": 21.3
    },
    "parameters": 79.7,
    "releaseDate": "2026-02-03"
  },
  "nova-2-0-omni-reasoning-medium": {
    "pricing": {
      "inputPer1M": 0.3,
      "outputPer1M": 2.5,
      "approx": true
    },
    "context": 1000000,
    "benchmarks": {
      "liveCodeBench": 0.7,
      "sciCode": 36.2,
      "intelligenceIndex": 21.3
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
      "liveCodeBench": 0.8,
      "sciCode": 39.1,
      "intelligenceIndex": 21.0
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
      "liveCodeBench": 0.6,
      "sciCode": 39.9,
      "intelligenceIndex": 20.9
    },
    "parameters": 235.0,
    "releaseDate": "2025-09-23"
  },
  "apriel-v1-6-15b-thinker": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 128000,
    "benchmarks": {
      "liveCodeBench": 0.8,
      "sciCode": 37.3,
      "intelligenceIndex": 20.8
    },
    "parameters": 15.0,
    "releaseDate": "2025-11-25"
  },
  "nova-2-0-lite-reasoning": {
    "pricing": {
      "inputPer1M": 0.3,
      "outputPer1M": 2.5,
      "approx": true
    },
    "context": 1000000,
    "benchmarks": {
      "liveCodeBench": 0.7,
      "terminalBench": 16.1,
      "sciCode": 36.9,
      "intelligenceIndex": 20.8
    },
    "releaseDate": "2025-10-29"
  },
  "gpt-5-1-non-reasoning": {
    "pricing": {
      "inputPer1M": 1.25,
      "outputPer1M": 10.0,
      "approx": true
    },
    "context": 400000,
    "benchmarks": {
      "liveCodeBench": 0.5,
      "sciCode": 36.5,
      "intelligenceIndex": 20.7
    },
    "releaseDate": "2025-11-13"
  },
  "qwen3-5-9b-non-reasoning": {
    "pricing": {
      "inputPer1M": 0.17,
      "outputPer1M": 0.25,
      "approx": true
    },
    "context": 262144,
    "benchmarks": {
      "terminalBench": 21.3,
      "sciCode": 27.7,
      "intelligenceIndex": 20.6
    },
    "parameters": 9.65,
    "releaseDate": "2026-03-02"
  },
  "exaone-4-5-33b": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 262144,
    "benchmarks": {
      "terminalBench": 21.3,
      "sciCode": 28.0,
      "intelligenceIndex": 20.5
    },
    "parameters": 34.4,
    "releaseDate": "2026-04-09"
  },
  "gemma-4-26b-a4b-non-reasoning": {
    "pricing": {
      "inputPer1M": 0.13,
      "outputPer1M": 0.4,
      "approx": true
    },
    "context": 256000,
    "benchmarks": {
      "sciCode": 37.3,
      "intelligenceIndex": 20.4
    },
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
    "benchmarks": {
      "terminalBench": 25.8,
      "sciCode": 16.1,
      "intelligenceIndex": 20.4
    },
    "parameters": 4.66,
    "releaseDate": "2026-03-02"
  },
  "deepseek-r1": {
    "pricing": {
      "inputPer1M": 0.7,
      "outputPer1M": 2.5,
      "approx": true
    },
    "context": 128000,
    "benchmarks": {
      "liveCodeBench": 0.8,
      "humanEval": 1.0,
      "sciCode": 40.3,
      "intelligenceIndex": 20.4
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
      "humanEval": 1.0,
      "sciCode": 39.4,
      "intelligenceIndex": 20.3
    },
    "releaseDate": "2025-05-20"
  },
  "north-mini-code": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 256000,
    "benchmarks": {
      "terminalBench": 35.6,
      "sciCode": 38.2,
      "intelligenceIndex": 20.2
    },
    "parameters": 30.0,
    "releaseDate": "2026-06-09"
  },
  "gpt-5-nano": {
    "pricing": {
      "inputPer1M": 0.025,
      "outputPer1M": 0.2,
      "approx": true
    },
    "context": 400000,
    "benchmarks": {
      "liveCodeBench": 0.8,
      "sciCode": 36.6,
      "intelligenceIndex": 20.1,
      "designArenaElo": 1081.7
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
      "humanEval": 1.0,
      "terminalBench": 12.0,
      "sciCode": 42.4,
      "intelligenceIndex": 19.9
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
      "liveCodeBench": 0.6,
      "terminalBench": 19.5,
      "sciCode": 38.7,
      "intelligenceIndex": 19.8
    },
    "releaseDate": "2025-11-27"
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
      "humanEval": 1.0,
      "sciCode": 34.8,
      "intelligenceIndex": 19.7,
      "designArenaElo": 1179.1
    },
    "parameters": 355.0,
    "releaseDate": "2025-07-28"
  },
  "mistral-small-4": {
    "pricing": {
      "inputPer1M": 0.15,
      "outputPer1M": 0.6,
      "approx": true
    },
    "context": 256000,
    "benchmarks": {
      "terminalBench": 21.0,
      "sciCode": 38.0,
      "intelligenceIndex": 19.7
    },
    "parameters": 119.0,
    "releaseDate": "2026-03-16"
  },
  "kimi-k2": {
    "pricing": {
      "inputPer1M": 0.57,
      "outputPer1M": 2.3,
      "approx": true
    },
    "context": 128000,
    "benchmarks": {
      "liveCodeBench": 0.6,
      "humanEval": 0.9,
      "sciCode": 34.5,
      "intelligenceIndex": 19.7,
      "designArenaElo": 1044.6
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
      "humanEval": 1.0,
      "sciCode": 38.1,
      "intelligenceIndex": 19.6
    },
    "releaseDate": "2025-04-14"
  },
  "qwen3-max-preview": {
    "pricing": {
      "inputPer1M": 1.2,
      "outputPer1M": 6.0,
      "approx": true
    },
    "context": 262144,
    "benchmarks": {
      "liveCodeBench": 0.7,
      "sciCode": 37.0,
      "intelligenceIndex": 19.4
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
      "liveCodeBench": 0.4,
      "terminalBench": 30.3,
      "sciCode": 33.1,
      "intelligenceIndex": 19.2
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
      "liveCodeBench": 0.7,
      "sciCode": 36.8,
      "intelligenceIndex": 19.2
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
      "liveCodeBench": 0.8,
      "sciCode": 33.8,
      "intelligenceIndex": 19.2
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
    "benchmarks": {
      "sciCode": 25.5,
      "intelligenceIndex": 19.2
    },
    "releaseDate": "2026-03-30"
  },
  "o3-mini": {
    "pricing": {
      "inputPer1M": 0.55,
      "outputPer1M": 2.2,
      "approx": true
    },
    "context": 200000,
    "benchmarks": {
      "liveCodeBench": 0.7,
      "humanEval": 1.0,
      "sciCode": 39.9,
      "intelligenceIndex": 19.2
    },
    "releaseDate": "2025-01-31"
  },
  "o1-pro": {
    "pricing": {
      "inputPer1M": 75.0,
      "outputPer1M": 300.0,
      "approx": true
    },
    "context": 200000,
    "benchmarks": {
      "intelligenceIndex": 19.1
    },
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
      "liveCodeBench": 0.6,
      "sciCode": 37.5,
      "intelligenceIndex": 19.1
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
    "benchmarks": {
      "sciCode": 27.2,
      "intelligenceIndex": 18.8
    },
    "releaseDate": "2026-04-15"
  },
  "trinity-large-thinking": {
    "pricing": {
      "inputPer1M": 0.22,
      "outputPer1M": 0.85,
      "approx": true
    },
    "context": 512000,
    "benchmarks": {
      "terminalBench": 20.6,
      "sciCode": 36.1,
      "intelligenceIndex": 18.7,
      "designArenaElo": 1106.9
    },
    "parameters": 399.0,
    "releaseDate": "2026-04-01"
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
      "humanEval": 1.0,
      "terminalBench": 19.1,
      "sciCode": 35.7,
      "intelligenceIndex": 18.6
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
      "humanEval": 0.9,
      "sciCode": 36.8,
      "intelligenceIndex": 18.6
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
      "liveCodeBench": 0.8,
      "sciCode": 36.5,
      "intelligenceIndex": 18.5
    },
    "parameters": 36.2,
    "releaseDate": "2025-08-20"
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
      "humanEval": 1.0,
      "sciCode": 36.0,
      "intelligenceIndex": 18.4
    },
    "parameters": 235.0,
    "releaseDate": "2025-07-21"
  },
  "hypernova-60b": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 131072,
    "benchmarks": {
      "terminalBench": 18.4,
      "sciCode": 33.0,
      "intelligenceIndex": 18.3
    },
    "parameters": 58.7,
    "releaseDate": "2026-05-26"
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
      "humanEval": 1.0,
      "sciCode": 35.9,
      "intelligenceIndex": 18.2
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
      "liveCodeBench": 0.7,
      "sciCode": 28.5,
      "intelligenceIndex": 18.1
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
      "liveCodeBench": 0.8,
      "terminalBench": 12.4,
      "sciCode": 39.2,
      "intelligenceIndex": 18.0
    },
    "releaseDate": "2025-09-18"
  },
  "sonar-reasoning-pro": {
    "pricing": {
      "inputPer1M": 2.0,
      "outputPer1M": 8.0,
      "approx": true
    },
    "context": 127000,
    "benchmarks": {
      "intelligenceIndex": 18.0
    },
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
      "liveCodeBench": 0.5,
      "sciCode": 33.3,
      "intelligenceIndex": 18.0
    },
    "releaseDate": "2025-10-29"
  },
  "minimax-m1-80k": {
    "pricing": {
      "inputPer1M": 0.55,
      "outputPer1M": 2.2,
      "approx": true
    },
    "context": 1000000,
    "benchmarks": {
      "liveCodeBench": 0.7,
      "sciCode": 37.4,
      "intelligenceIndex": 17.9
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
    "benchmarks": {
      "sciCode": 35.2,
      "intelligenceIndex": 17.8
    },
    "releaseDate": "2026-03-17"
  },
  "nemotron-cascade-2-30b-a3b": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 1000000,
    "benchmarks": {
      "terminalBench": 20.6,
      "sciCode": 34.8,
      "intelligenceIndex": 17.8
    },
    "parameters": 31.6,
    "releaseDate": "2026-03-19"
  },
  "gemini-2-5-flash-reasoning-04-2025": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 1000000,
    "benchmarks": {
      "liveCodeBench": 0.5,
      "sciCode": 35.9,
      "intelligenceIndex": 17.7
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
      "liveCodeBench": 0.3,
      "terminalBench": 29.6,
      "sciCode": 28.8,
      "intelligenceIndex": 17.7
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
    "benchmarks": {
      "terminalBench": 15.0,
      "sciCode": 33.0,
      "intelligenceIndex": 17.4
    },
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
    "benchmarks": {
      "sciCode": 28.4,
      "intelligenceIndex": 17.4
    },
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
      "humanEval": 1.0,
      "sciCode": 38.8,
      "intelligenceIndex": 17.3
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
      "humanEval": 1.0,
      "intelligenceIndex": 17.2
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
      "liveCodeBench": 0.6,
      "sciCode": 28.4,
      "intelligenceIndex": 17.2
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
      "liveCodeBench": 0.4,
      "sciCode": 29.6,
      "intelligenceIndex": 17.0
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
      "liveCodeBench": 0.2,
      "sciCode": 30.4,
      "intelligenceIndex": 16.9
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
    "benchmarks": {
      "sciCode": 27.0,
      "intelligenceIndex": 16.9
    },
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
      "liveCodeBench": 0.8,
      "terminalBench": 6.7,
      "sciCode": 38.8,
      "intelligenceIndex": 16.9
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
    "benchmarks": {
      "sciCode": 39.6,
      "intelligenceIndex": 16.8
    },
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
      "liveCodeBench": 0.6,
      "sciCode": 34.3,
      "intelligenceIndex": 16.7
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
      "humanEval": 0.9,
      "sciCode": 30.6,
      "intelligenceIndex": 16.7
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
      "liveCodeBench": 0.4,
      "sciCode": 32.9,
      "intelligenceIndex": 16.6
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
      "liveCodeBench": 0.7,
      "sciCode": 33.2,
      "intelligenceIndex": 16.6
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
      "liveCodeBench": 0.6,
      "sciCode": 36.7,
      "intelligenceIndex": 16.3
    },
    "parameters": 1000.0,
    "releaseDate": "2025-10-13"
  },
  "g9v3-3b": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 131072,
    "benchmarks": {
      "terminalBench": 6.0,
      "sciCode": 17.7,
      "intelligenceIndex": 16.2
    },
    "parameters": 3.0,
    "releaseDate": "2026-07-23"
  },
  "qwen3-5-4b-non-reasoning": {
    "pricing": {
      "inputPer1M": 0.03,
      "outputPer1M": 0.15,
      "approx": true
    },
    "context": 262144,
    "benchmarks": {
      "terminalBench": 21.3,
      "sciCode": 18.3,
      "intelligenceIndex": 16.1
    },
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
      "liveCodeBench": 0.5,
      "terminalBench": 12.0,
      "sciCode": 36.2,
      "intelligenceIndex": 15.9
    },
    "parameters": 675.0,
    "releaseDate": "2025-12-02"
  },
  "intellect-3": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 131100,
    "benchmarks": {
      "liveCodeBench": 0.8,
      "sciCode": 39.1,
      "intelligenceIndex": 15.7
    },
    "parameters": 107.0,
    "releaseDate": "2025-11-27"
  },
  "o3-mini-high": {
    "pricing": {
      "inputPer1M": 0.55,
      "outputPer1M": 2.2,
      "approx": true
    },
    "context": 200000,
    "benchmarks": {
      "liveCodeBench": 0.7,
      "terminalBench": 4.5,
      "sciCode": 39.8,
      "intelligenceIndex": 15.7
    },
    "releaseDate": "2025-01-31"
  },
  "glm-4-7-flash-non-reasoning": {
    "pricing": {
      "inputPer1M": 0.07,
      "outputPer1M": 0.4,
      "approx": true
    },
    "context": 200000,
    "benchmarks": {
      "sciCode": 25.5,
      "intelligenceIndex": 15.6
    },
    "parameters": 31.2,
    "releaseDate": "2026-01-19"
  },
  "gpt-5-chatgpt": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 128000,
    "benchmarks": {
      "liveCodeBench": 0.5,
      "sciCode": 37.8,
      "intelligenceIndex": 15.4
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
    "benchmarks": {
      "sciCode": 26.9,
      "intelligenceIndex": 15.2
    },
    "parameters": 102.0,
    "releaseDate": "2025-12-17"
  },
  "deepseek-v3-0324": {
    "pricing": {
      "inputPer1M": 0.27,
      "outputPer1M": 1.12,
      "approx": true
    },
    "context": 128000,
    "benchmarks": {
      "liveCodeBench": 0.4,
      "humanEval": 0.9,
      "terminalBench": 13.9,
      "sciCode": 35.8,
      "intelligenceIndex": 15.2
    },
    "parameters": 671.0,
    "releaseDate": "2025-03-25"
  },
  "gpt-oss-20b": {
    "pricing": {
      "inputPer1M": 0.03,
      "outputPer1M": 0.13,
      "approx": true
    },
    "context": 131072,
    "benchmarks": {
      "liveCodeBench": 0.8,
      "terminalBench": 13.9,
      "sciCode": 34.4,
      "intelligenceIndex": 15.2,
      "designArenaElo": 908.5
    },
    "parameters": 21.0,
    "releaseDate": "2025-08-05"
  },
  "grok-3-reasoning": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 1000000,
    "benchmarks": {
      "intelligenceIndex": 15.2
    },
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
      "liveCodeBench": 0.7,
      "sciCode": 28.7,
      "intelligenceIndex": 15.2
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
    "benchmarks": {
      "terminalBench": 6.7,
      "sciCode": 27.8,
      "intelligenceIndex": 15.0
    },
    "parameters": 30.0,
    "releaseDate": "2026-04-29"
  },
  "gpt-oss-120b-low": {
    "pricing": {
      "inputPer1M": 0.15,
      "outputPer1M": 0.595,
      "approx": true
    },
    "context": 131072,
    "benchmarks": {
      "liveCodeBench": 0.7,
      "terminalBench": 13.9,
      "sciCode": 36.0,
      "intelligenceIndex": 14.9
    },
    "parameters": 117.0,
    "releaseDate": "2025-08-05"
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
      "humanEval": 0.9,
      "terminalBench": 26.2,
      "sciCode": 26.5,
      "intelligenceIndex": 14.9
    },
    "parameters": 24.0,
    "releaseDate": "2025-03-17"
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
      "humanEval": 0.9,
      "terminalBench": 10.1,
      "sciCode": 40.4,
      "intelligenceIndex": 14.8
    },
    "releaseDate": "2025-04-14"
  },
  "mistral-medium-3-1": {
    "pricing": {
      "inputPer1M": 0.4,
      "outputPer1M": 2.0,
      "approx": true
    },
    "context": 128000,
    "benchmarks": {
      "liveCodeBench": 0.4,
      "terminalBench": 13.9,
      "sciCode": 33.8,
      "intelligenceIndex": 14.7
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
      "liveCodeBench": 0.7,
      "terminalBench": 1.5,
      "sciCode": 33.3,
      "intelligenceIndex": 14.6
    },
    "parameters": 30.5,
    "releaseDate": "2025-07-30"
  },
  "nvidia-nemotron-3-nano-30b-a3b-reasoning": {
    "pricing": {
      "inputPer1M": 0.05,
      "outputPer1M": 0.2,
      "approx": true
    },
    "context": 1000000,
    "benchmarks": {
      "liveCodeBench": 0.7,
      "terminalBench": 6.7,
      "sciCode": 29.6,
      "intelligenceIndex": 14.5
    },
    "parameters": 31.6,
    "releaseDate": "2025-12-15"
  },
  "solar-pro-3": {
    "pricing": {
      "inputPer1M": 0.15,
      "outputPer1M": 0.6,
      "approx": true
    },
    "context": 128000,
    "benchmarks": {
      "terminalBench": 12.0,
      "sciCode": 24.7,
      "intelligenceIndex": 14.5
    },
    "parameters": 102.0,
    "releaseDate": "2026-04-06"
  },
  "llama-4-maverick": {
    "pricing": {
      "inputPer1M": 0.2,
      "outputPer1M": 0.8,
      "approx": true
    },
    "context": 1000000,
    "benchmarks": {
      "liveCodeBench": 0.4,
      "humanEval": 0.9,
      "terminalBench": 7.9,
      "sciCode": 33.1,
      "intelligenceIndex": 14.5,
      "designArenaElo": 907.0
    },
    "parameters": 402.0,
    "releaseDate": "2025-04-05"
  },
  "minimax-m1-40k": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 1000000,
    "benchmarks": {
      "liveCodeBench": 0.7,
      "sciCode": 37.8,
      "intelligenceIndex": 14.5
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
      "liveCodeBench": 0.5,
      "terminalBench": 17.2,
      "sciCode": 28.1,
      "intelligenceIndex": 14.4
    },
    "releaseDate": "2025-11-27"
  },
  "gpt-oss-20b-low": {
    "pricing": {
      "inputPer1M": 0.07,
      "outputPer1M": 0.2,
      "approx": true
    },
    "context": 131072,
    "benchmarks": {
      "liveCodeBench": 0.7,
      "sciCode": 34.0,
      "intelligenceIndex": 14.4
    },
    "parameters": 21.0,
    "releaseDate": "2025-08-05"
  },
  "qwen3-vl-235b-a22b-instruct": {
    "pricing": {
      "inputPer1M": 0.26,
      "outputPer1M": 1.04,
      "approx": true
    },
    "context": 262144,
    "benchmarks": {
      "liveCodeBench": 0.6,
      "sciCode": 35.9,
      "intelligenceIndex": 14.4
    },
    "parameters": 235.0,
    "releaseDate": "2025-09-23"
  },
  "gpt-5-mini-minimal": {
    "pricing": {
      "inputPer1M": 0.25,
      "outputPer1M": 2.0,
      "approx": true
    },
    "context": 400000,
    "benchmarks": {
      "liveCodeBench": 0.5,
      "sciCode": 36.9,
      "intelligenceIndex": 14.3
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
      "liveCodeBench": 0.7,
      "sciCode": 28.6,
      "intelligenceIndex": 14.2
    },
    "parameters": 70.0,
    "releaseDate": "2025-12-05"
  },
  "deepseek-v3": {
    "pricing": {
      "inputPer1M": 0.36,
      "outputPer1M": 0.89,
      "approx": true
    },
    "context": 128000,
    "benchmarks": {
      "liveCodeBench": 0.4,
      "humanEval": 0.9,
      "terminalBench": 16.9,
      "sciCode": 35.4,
      "intelligenceIndex": 14.2
    },
    "parameters": 671.0,
    "releaseDate": "2024-12-26"
  },
  "ling-2-6-flash": {
    "pricing": {
      "inputPer1M": 0.1,
      "outputPer1M": 0.3,
      "approx": true
    },
    "context": 262144,
    "benchmarks": {
      "terminalBench": 24.3,
      "sciCode": 27.1,
      "intelligenceIndex": 14.2
    },
    "parameters": 107.0,
    "releaseDate": "2026-04-21"
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
      "humanEval": 1.0,
      "sciCode": 29.1,
      "intelligenceIndex": 14.2
    },
    "releaseDate": "2025-05-20"
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
      "humanEval": 1.0,
      "sciCode": 32.3,
      "intelligenceIndex": 14.0
    },
    "releaseDate": "2024-09-12"
  },
  "qwen3-next-80b-a3b-instruct": {
    "pricing": {
      "inputPer1M": 0.1,
      "outputPer1M": 1.1,
      "approx": true
    },
    "context": 262144,
    "benchmarks": {
      "liveCodeBench": 0.7,
      "sciCode": 30.7,
      "intelligenceIndex": 13.8
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
    "benchmarks": {
      "sciCode": 17.8,
      "intelligenceIndex": 13.6
    },
    "parameters": 21.0,
    "releaseDate": "2026-02-10"
  },
  "qwen3-coder-30b-a3b-instruct": {
    "pricing": {
      "inputPer1M": 0.07,
      "outputPer1M": 0.28,
      "approx": true
    },
    "context": 262144,
    "benchmarks": {
      "liveCodeBench": 0.4,
      "humanEval": 0.9,
      "sciCode": 27.8,
      "intelligenceIndex": 13.6,
      "designArenaElo": 1092.3
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
    "benchmarks": {
      "intelligenceIndex": 13.6
    },
    "releaseDate": "2025-02-27"
  },
  "diffusiongemma-26b-a4b": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 256000,
    "benchmarks": {
      "terminalBench": 12.4,
      "sciCode": 34.3,
      "intelligenceIndex": 13.5
    },
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
      "liveCodeBench": 0.6,
      "sciCode": 39.9,
      "intelligenceIndex": 13.5
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
      "humanEval": 1.0,
      "sciCode": 35.8,
      "intelligenceIndex": 13.4
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
      "liveCodeBench": 0.7,
      "sciCode": 28.8,
      "intelligenceIndex": 13.4
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
      "liveCodeBench": 0.3,
      "sciCode": 32.9,
      "intelligenceIndex": 13.3
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
    "benchmarks": {
      "sciCode": 29.7,
      "intelligenceIndex": 13.2
    },
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
      "liveCodeBench": 0.6,
      "sciCode": 28.5,
      "intelligenceIndex": 13.1
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
      "liveCodeBench": 0.7,
      "sciCode": 28.2,
      "intelligenceIndex": 12.8
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
      "liveCodeBench": 0.7,
      "sciCode": 35.2,
      "intelligenceIndex": 12.7
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
      "humanEval": 0.9,
      "sciCode": 27.9,
      "intelligenceIndex": 12.7
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
      "liveCodeBench": 0.5,
      "sciCode": 16.4,
      "intelligenceIndex": 12.5
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
      "liveCodeBench": 0.5,
      "sciCode": 29.7,
      "intelligenceIndex": 12.5
    },
    "releaseDate": "2025-06-10"
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
      "humanEval": 0.9,
      "sciCode": 33.1,
      "intelligenceIndex": 12.5,
      "designArenaElo": 1080.0
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
      "liveCodeBench": 0.5,
      "sciCode": 25.2,
      "intelligenceIndex": 12.4
    },
    "parameters": 70.0,
    "releaseDate": "2025-12-05"
  },
  "llama-nemotron-super-49b-v1-5-reasoning": {
    "pricing": {
      "inputPer1M": 0.4,
      "outputPer1M": 0.4,
      "approx": true
    },
    "context": 128000,
    "benchmarks": {
      "liveCodeBench": 0.7,
      "humanEval": 1.0,
      "sciCode": 34.8,
      "intelligenceIndex": 12.4
    },
    "parameters": 49.0,
    "releaseDate": "2025-07-25"
  },
  "devstral-medium": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 256000,
    "benchmarks": {
      "liveCodeBench": 0.3,
      "humanEval": 0.9,
      "sciCode": 29.4,
      "intelligenceIndex": 12.4
    },
    "releaseDate": "2025-07-10"
  },
  "celeris-1": {
    "pricing": {
      "inputPer1M": 0.2,
      "outputPer1M": 0.7,
      "approx": true
    },
    "context": 131072,
    "benchmarks": {
      "terminalBench": 11.2,
      "sciCode": 20.7,
      "intelligenceIndex": 12.4
    },
    "releaseDate": "2026-07-24"
  },
  "mistral-small-4-non-reasoning": {
    "pricing": {
      "inputPer1M": 0.15,
      "outputPer1M": 0.6,
      "approx": true
    },
    "context": 256000,
    "benchmarks": {
      "sciCode": 28.1,
      "intelligenceIndex": 12.3
    },
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
    "benchmarks": {
      "sciCode": 17.4,
      "intelligenceIndex": 12.3
    },
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
      "humanEval": 1.0,
      "sciCode": 36.6,
      "intelligenceIndex": 12.3
    },
    "releaseDate": "2025-03-27"
  },
  "gemini-2-0-flash": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 1000000,
    "benchmarks": {
      "liveCodeBench": 0.3,
      "humanEval": 0.9,
      "sciCode": 33.3,
      "intelligenceIndex": 12.2
    },
    "releaseDate": "2025-02-05"
  },
  "claude-3-5-haiku": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 200000,
    "benchmarks": {
      "liveCodeBench": 0.3,
      "humanEval": 0.9,
      "terminalBench": 10.1,
      "sciCode": 27.4,
      "intelligenceIndex": 12.2
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
      "humanEval": 1.0,
      "sciCode": 28.2,
      "intelligenceIndex": 12.2
    },
    "parameters": 49.0,
    "releaseDate": "2025-03-18"
  },
  "gemma-4-e4b": {
    "pricing": {
      "inputPer1M": 0.02,
      "outputPer1M": 0.1,
      "approx": true
    },
    "context": 128000,
    "benchmarks": {
      "terminalBench": 1.9,
      "sciCode": 24.4,
      "intelligenceIndex": 12.2
    },
    "parameters": 8.0,
    "releaseDate": "2026-04-03"
  },
  "qwen3-4b-2507-instruct-reasoning": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 262144,
    "benchmarks": {
      "liveCodeBench": 0.6,
      "sciCode": 25.6,
      "intelligenceIndex": 11.9
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
    "benchmarks": {
      "sciCode": 4.4,
      "intelligenceIndex": 11.9
    },
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
    "benchmarks": {
      "sciCode": 26.4,
      "intelligenceIndex": 11.9
    },
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
      "humanEval": 1.0,
      "sciCode": 31.2,
      "intelligenceIndex": 11.8
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
      "liveCodeBench": 0.3,
      "sciCode": 24.0,
      "intelligenceIndex": 11.8
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
      "humanEval": 0.8,
      "sciCode": 24.5,
      "intelligenceIndex": 11.8
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
      "humanEval": 0.8,
      "sciCode": 23.3,
      "intelligenceIndex": 11.8
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
    "benchmarks": {
      "sciCode": 1.4,
      "intelligenceIndex": 11.7
    },
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
    "benchmarks": {
      "intelligenceIndex": 11.6
    },
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
      "liveCodeBench": 0.4,
      "sciCode": 23.3,
      "intelligenceIndex": 11.6
    },
    "releaseDate": "2025-04-17"
  },
  "magistral-small-2509": {
    "pricing": {
      "inputPer1M": 0.5,
      "outputPer1M": 1.5,
      "approx": true
    },
    "context": 128000,
    "benchmarks": {
      "liveCodeBench": 0.7,
      "terminalBench": 4.5,
      "sciCode": 35.2,
      "intelligenceIndex": 11.5
    },
    "parameters": 24.0,
    "releaseDate": "2025-09-17"
  },
  "qwen3-32b-instruct-reasoning": {
    "pricing": {
      "inputPer1M": 0.7,
      "outputPer1M": 8.4,
      "approx": true
    },
    "context": 32768,
    "benchmarks": {
      "liveCodeBench": 0.5,
      "terminalBench": 5.2,
      "sciCode": 35.4,
      "intelligenceIndex": 11.4
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
      "humanEval": 1.0,
      "sciCode": 19.3,
      "intelligenceIndex": 11.4
    },
    "releaseDate": "2025-06-17"
  },
  "ministral-3-14b": {
    "pricing": {
      "inputPer1M": 0.2,
      "outputPer1M": 0.2,
      "approx": true
    },
    "context": 256000,
    "benchmarks": {
      "liveCodeBench": 0.4,
      "terminalBench": 9.7,
      "sciCode": 23.6,
      "intelligenceIndex": 11.2
    },
    "parameters": 14.0,
    "releaseDate": "2025-12-02"
  },
  "gpt-4o": {
    "pricing": {
      "inputPer1M": 1.25,
      "outputPer1M": 5.0,
      "approx": true
    },
    "context": 128000,
    "benchmarks": {
      "liveCodeBench": 0.3,
      "humanEval": 0.9,
      "sciCode": 33.3,
      "intelligenceIndex": 11.1,
      "designArenaElo": 896.7
    },
    "releaseDate": "2024-11-20"
  },
  "nanbeige4-1-3b": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 256000,
    "benchmarks": {
      "terminalBench": 1.1,
      "sciCode": 26.6,
      "intelligenceIndex": 11.0
    },
    "parameters": 3.93,
    "releaseDate": "2026-02-11"
  },
  "qwen3-vl-32b-instruct": {
    "pricing": {
      "inputPer1M": 0.104,
      "outputPer1M": 0.416,
      "approx": true
    },
    "context": 256000,
    "benchmarks": {
      "liveCodeBench": 0.5,
      "sciCode": 30.1,
      "intelligenceIndex": 11.0
    },
    "parameters": 33.4,
    "releaseDate": "2025-10-21"
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
      "humanEval": 0.9,
      "sciCode": 37.6,
      "intelligenceIndex": 11.0
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
      "liveCodeBench": 0.4,
      "sciCode": 27.2,
      "intelligenceIndex": 10.9
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
      "liveCodeBench": 0.3,
      "sciCode": 29.9,
      "intelligenceIndex": 10.8
    },
    "parameters": 235.0,
    "releaseDate": "2025-04-28"
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
      "humanEval": 0.9,
      "terminalBench": 5.6,
      "sciCode": 26.4,
      "intelligenceIndex": 10.7
    },
    "parameters": 24.0,
    "releaseDate": "2025-06-20"
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
      "humanEval": 1.0,
      "sciCode": 24.1,
      "intelligenceIndex": 10.6
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
      "humanEval": 0.9,
      "sciCode": 34.0,
      "intelligenceIndex": 10.6
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
      "humanEval": 1.0,
      "sciCode": 34.4,
      "intelligenceIndex": 10.5
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
      "liveCodeBench": 0.4,
      "sciCode": 21.9,
      "intelligenceIndex": 10.5
    },
    "parameters": 8.77,
    "releaseDate": "2025-10-14"
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
      "humanEval": 1.0,
      "terminalBench": 4.9,
      "sciCode": 31.6,
      "intelligenceIndex": 10.4
    },
    "parameters": 14.8,
    "releaseDate": "2025-04-28"
  },
  "nova-2-0-omni": {
    "pricing": {
      "inputPer1M": 0.3,
      "outputPer1M": 2.5,
      "approx": true
    },
    "context": 1000000,
    "benchmarks": {
      "liveCodeBench": 0.3,
      "sciCode": 27.9,
      "intelligenceIndex": 10.4
    },
    "releaseDate": "2025-11-26"
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
      "humanEval": 0.9,
      "sciCode": 20.4,
      "intelligenceIndex": 10.3
    },
    "parameters": 8.19,
    "releaseDate": "2025-05-29"
  },
  "llama-4-scout": {
    "pricing": {
      "inputPer1M": 0.1,
      "outputPer1M": 0.3,
      "approx": true
    },
    "context": 10000000,
    "benchmarks": {
      "liveCodeBench": 0.3,
      "humanEval": 0.8,
      "terminalBench": 3.7,
      "sciCode": 17.0,
      "intelligenceIndex": 10.3,
      "designArenaElo": 818.6
    },
    "parameters": 109.0,
    "releaseDate": "2025-04-05"
  },
  "qwen-2-5-max": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 32000,
    "benchmarks": {
      "liveCodeBench": 0.4,
      "humanEval": 0.9,
      "sciCode": 33.7,
      "intelligenceIndex": 10.1
    },
    "releaseDate": "2025-01-28"
  },
  "qwen3-vl-30b-a3b-instruct": {
    "pricing": {
      "inputPer1M": 0.13,
      "outputPer1M": 0.52,
      "approx": true
    },
    "context": 256000,
    "benchmarks": {
      "liveCodeBench": 0.5,
      "sciCode": 30.8,
      "intelligenceIndex": 9.9
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
      "liveCodeBench": 0.7,
      "sciCode": 34.1,
      "intelligenceIndex": 9.9
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
      "humanEval": 0.9,
      "sciCode": 29.5,
      "intelligenceIndex": 9.9
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
      "humanEval": 0.9,
      "sciCode": 27.2,
      "intelligenceIndex": 9.9
    },
    "parameters": 30.9,
    "releaseDate": "2025-05-20"
  },
  "deepseek-r1-distill-llama-70b": {
    "pricing": {
      "inputPer1M": 0.8,
      "outputPer1M": 0.8,
      "approx": true
    },
    "context": 128000,
    "benchmarks": {
      "liveCodeBench": 0.3,
      "humanEval": 1.0,
      "sciCode": 31.2,
      "intelligenceIndex": 9.8
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
      "humanEval": 0.9,
      "sciCode": 36.6,
      "intelligenceIndex": 9.8
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
      "humanEval": 0.9,
      "sciCode": 23.9,
      "intelligenceIndex": 9.7
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
      "liveCodeBench": 0.7,
      "sciCode": 24.9,
      "intelligenceIndex": 9.7
    },
    "parameters": 7.0,
    "releaseDate": "2026-01-04"
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
      "humanEval": 0.9,
      "terminalBench": 3.7,
      "sciCode": 25.9,
      "intelligenceIndex": 9.6
    },
    "releaseDate": "2025-04-14"
  },
  "ling-flash-2-0": {
    "pricing": {
      "inputPer1M": 0.14,
      "outputPer1M": 0.57,
      "approx": true
    },
    "context": 128000,
    "benchmarks": {
      "liveCodeBench": 0.6,
      "sciCode": 28.9,
      "intelligenceIndex": 9.6
    },
    "parameters": 103.0,
    "releaseDate": "2025-09-17"
  },
  "gemma-4-e2b": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 128000,
    "benchmarks": {
      "terminalBench": 0.4,
      "sciCode": 20.9,
      "intelligenceIndex": 9.5
    },
    "parameters": 5.1,
    "releaseDate": "2026-04-02"
  },
  "qwen3-omni-30b-a3b-reasoning": {
    "pricing": {
      "inputPer1M": 0.25,
      "outputPer1M": 0.97,
      "approx": true
    },
    "context": 65536,
    "benchmarks": {
      "liveCodeBench": 0.7,
      "sciCode": 30.6,
      "intelligenceIndex": 9.5
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
      "humanEval": 0.9,
      "sciCode": 33.1,
      "intelligenceIndex": 9.4
    },
    "releaseDate": "2024-08-06"
  },
  "qwen2-5-72b-instruct": {
    "pricing": {
      "inputPer1M": 0.475,
      "outputPer1M": 0.495,
      "approx": true
    },
    "context": 131072,
    "benchmarks": {
      "liveCodeBench": 0.3,
      "humanEval": 0.9,
      "sciCode": 26.7,
      "intelligenceIndex": 9.4
    },
    "parameters": 72.0,
    "releaseDate": "2024-09-19"
  },
  "sonar": {
    "pricing": {
      "inputPer1M": 1.0,
      "outputPer1M": 1.0,
      "approx": true
    },
    "context": 127000,
    "benchmarks": {
      "liveCodeBench": 0.3,
      "humanEval": 0.8,
      "sciCode": 22.9,
      "intelligenceIndex": 9.4
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
    "benchmarks": {
      "sciCode": 31.1,
      "intelligenceIndex": 9.3
    },
    "parameters": 10.2,
    "releaseDate": "2026-01-20"
  },
  "llama-3-3-instruct-70b": {
    "pricing": {
      "inputPer1M": 0.655,
      "outputPer1M": 0.72,
      "approx": true
    },
    "context": 128000,
    "benchmarks": {
      "liveCodeBench": 0.3,
      "humanEval": 0.9,
      "terminalBench": 4.9,
      "sciCode": 26.0,
      "intelligenceIndex": 9.3
    },
    "parameters": 70.0,
    "releaseDate": "2024-12-06"
  },
  "qwen3-30b-a3b-instruct-reasoning": {
    "pricing": {
      "inputPer1M": 0.2,
      "outputPer1M": 2.4,
      "approx": true
    },
    "context": 32768,
    "benchmarks": {
      "liveCodeBench": 0.5,
      "sciCode": 28.5,
      "intelligenceIndex": 9.2
    },
    "parameters": 30.5,
    "releaseDate": "2025-04-28"
  },
  "sonar-pro": {
    "pricing": {
      "inputPer1M": 3.0,
      "outputPer1M": 15.0,
      "approx": true
    },
    "context": 200000,
    "benchmarks": {
      "liveCodeBench": 0.3,
      "humanEval": 0.8,
      "sciCode": 22.6,
      "intelligenceIndex": 9.1
    },
    "releaseDate": "2025-01-21"
  },
  "devstral-small": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 256000,
    "benchmarks": {
      "liveCodeBench": 0.3,
      "humanEval": 0.8,
      "sciCode": 24.3,
      "intelligenceIndex": 9.1
    },
    "parameters": 24.0,
    "releaseDate": "2025-07-10"
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
      "humanEval": 0.9,
      "sciCode": 3.8,
      "intelligenceIndex": 9.1
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
      "liveCodeBench": 0.6,
      "sciCode": 22.1,
      "intelligenceIndex": 9.0
    },
    "parameters": 108.0,
    "releaseDate": "2025-08-11"
  },
  "mistral-large-2": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 128000,
    "benchmarks": {
      "liveCodeBench": 0.3,
      "humanEval": 0.9,
      "sciCode": 29.2,
      "intelligenceIndex": 9.0
    },
    "parameters": 123.0,
    "releaseDate": "2024-11-18"
  },
  "ministral-3-8b": {
    "pricing": {
      "inputPer1M": 0.15,
      "outputPer1M": 0.15,
      "approx": true
    },
    "context": 256000,
    "benchmarks": {
      "liveCodeBench": 0.3,
      "terminalBench": 4.1,
      "sciCode": 20.8,
      "intelligenceIndex": 9.0
    },
    "parameters": 8.0,
    "releaseDate": "2025-12-02"
  },
  "llama-3-1-nemotron-ultra-253b-v1-reasoning": {
    "pricing": {
      "inputPer1M": 0.6,
      "outputPer1M": 1.8,
      "approx": true
    },
    "context": 128000,
    "benchmarks": {
      "liveCodeBench": 0.6,
      "sciCode": 34.7,
      "intelligenceIndex": 8.9
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
      "humanEval": 0.9,
      "sciCode": 30.4,
      "intelligenceIndex": 8.9
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
      "humanEval": 0.9,
      "sciCode": 31.5,
      "intelligenceIndex": 8.9
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
      "liveCodeBench": 0.7,
      "sciCode": 25.2,
      "intelligenceIndex": 8.8
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
      "humanEval": 1.0,
      "sciCode": 30.2,
      "intelligenceIndex": 8.8
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
      "liveCodeBench": 0.7,
      "sciCode": 26.2,
      "intelligenceIndex": 8.8
    },
    "parameters": 13.2,
    "releaseDate": "2025-10-28"
  },
  "gemma-4-e4b-non-reasoning": {
    "pricing": {
      "inputPer1M": 0.02,
      "outputPer1M": 0.1,
      "approx": true
    },
    "context": 128000,
    "benchmarks": {
      "sciCode": 3.9,
      "intelligenceIndex": 8.7
    },
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
    "benchmarks": {
      "terminalBench": 2.6,
      "sciCode": 25.8,
      "intelligenceIndex": 8.7
    },
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
      "liveCodeBench": 0.7,
      "sciCode": 22.0,
      "intelligenceIndex": 8.7
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
      "liveCodeBench": 0.5,
      "sciCode": 34.6,
      "intelligenceIndex": 8.6
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
      "humanEval": 0.9,
      "sciCode": 25.0,
      "intelligenceIndex": 8.6
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
    "benchmarks": {
      "terminalBench": 3.7,
      "sciCode": 16.4,
      "intelligenceIndex": 8.6
    },
    "parameters": 3.97,
    "releaseDate": "2026-03-16"
  },
  "llama-nemotron-super-49b-v1-5": {
    "pricing": {
      "inputPer1M": 0.4,
      "outputPer1M": 0.4,
      "approx": true
    },
    "context": 128000,
    "benchmarks": {
      "liveCodeBench": 0.3,
      "humanEval": 0.9,
      "sciCode": 23.8,
      "intelligenceIndex": 8.5
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
      "humanEval": 0.9,
      "sciCode": 28.0,
      "intelligenceIndex": 8.5
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
      "humanEval": 0.9,
      "sciCode": 30.9,
      "intelligenceIndex": 8.4
    },
    "releaseDate": "2024-05-13"
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
      "humanEval": 0.9,
      "sciCode": 24.7,
      "intelligenceIndex": 8.4
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
      "liveCodeBench": 0.4,
      "sciCode": 22.3,
      "intelligenceIndex": 8.4
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
      "liveCodeBench": 0.5,
      "sciCode": 10.1,
      "intelligenceIndex": 8.4
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
      "liveCodeBench": 0.4,
      "sciCode": 19.9,
      "intelligenceIndex": 8.4
    },
    "parameters": 49.1,
    "releaseDate": "2025-10-30"
  },
  "llama-3-1-instruct-405b": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 128000,
    "benchmarks": {
      "liveCodeBench": 0.3,
      "humanEval": 0.9,
      "sciCode": 29.9,
      "intelligenceIndex": 8.3
    },
    "parameters": 405.0,
    "releaseDate": "2024-07-23"
  },
  "qwen3-8b-instruct-reasoning": {
    "pricing": {
      "inputPer1M": 0.18,
      "outputPer1M": 2.1,
      "approx": true
    },
    "context": 131072,
    "benchmarks": {
      "liveCodeBench": 0.4,
      "terminalBench": 2.2,
      "sciCode": 22.6,
      "intelligenceIndex": 8.3
    },
    "parameters": 8.19,
    "releaseDate": "2025-04-28"
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
      "humanEval": 0.8,
      "sciCode": 22.9,
      "intelligenceIndex": 8.3
    },
    "parameters": 49.0,
    "releaseDate": "2025-03-18"
  },
  "qwen3-vl-8b-instruct": {
    "pricing": {
      "inputPer1M": 0.117,
      "outputPer1M": 0.455,
      "approx": true
    },
    "context": 256000,
    "benchmarks": {
      "liveCodeBench": 0.3,
      "sciCode": 17.4,
      "intelligenceIndex": 8.2
    },
    "parameters": 8.77,
    "releaseDate": "2025-10-14"
  },
  "qwen3-4b-instruct-reasoning": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 32000,
    "benchmarks": {
      "liveCodeBench": 0.5,
      "humanEval": 0.9,
      "sciCode": 3.5,
      "intelligenceIndex": 8.2
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
    "benchmarks": {
      "sciCode": 7.8,
      "intelligenceIndex": 8.1
    },
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
      "humanEval": 0.9,
      "sciCode": 31.6,
      "intelligenceIndex": 8.1
    },
    "releaseDate": "2024-06-21"
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
      "humanEval": 0.9,
      "sciCode": 30.2,
      "intelligenceIndex": 8.1
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
      "humanEval": 0.9,
      "sciCode": 33.4,
      "intelligenceIndex": 8.1
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
      "liveCodeBench": 0.6,
      "sciCode": 16.8,
      "intelligenceIndex": 8.0
    },
    "parameters": 103.0,
    "releaseDate": "2025-09-19"
  },
  "pixtral-large-2411": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 128000,
    "benchmarks": {
      "liveCodeBench": 0.3,
      "humanEval": 0.8,
      "sciCode": 29.2,
      "intelligenceIndex": 8.0
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
      "liveCodeBench": 0.7,
      "sciCode": 29.3,
      "intelligenceIndex": 7.9
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
      "humanEval": 0.9,
      "sciCode": 28.5,
      "intelligenceIndex": 7.8
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
      "liveCodeBench": 0.5,
      "sciCode": 29.1,
      "intelligenceIndex": 7.8
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
      "humanEval": 0.8,
      "sciCode": 26.7,
      "intelligenceIndex": 7.8
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
      "liveCodeBench": 0.3,
      "sciCode": 17.1,
      "intelligenceIndex": 7.7
    },
    "parameters": 4.44,
    "releaseDate": "2025-10-14"
  },
  "gpt-4-turbo": {
    "pricing": {
      "inputPer1M": 5.0,
      "outputPer1M": 15.0,
      "approx": true
    },
    "context": 128000,
    "benchmarks": {
      "liveCodeBench": 0.3,
      "humanEval": 0.9,
      "sciCode": 31.9,
      "intelligenceIndex": 7.7
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
      "humanEval": 0.9,
      "sciCode": 24.8,
      "intelligenceIndex": 7.6
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
      "humanEval": 0.8,
      "sciCode": 20.8,
      "intelligenceIndex": 7.5
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
      "humanEval": 0.8,
      "sciCode": 28.1,
      "intelligenceIndex": 7.5
    },
    "parameters": 111.0,
    "releaseDate": "2025-03-13"
  },
  "qwen3-5-2b": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 262144,
    "benchmarks": {
      "terminalBench": 3.0,
      "sciCode": 2.8,
      "intelligenceIndex": 7.4
    },
    "parameters": 2.27,
    "releaseDate": "2026-03-02"
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
      "humanEval": 0.8,
      "sciCode": 23.3,
      "intelligenceIndex": 7.4
    },
    "parameters": 70.0,
    "releaseDate": "2024-10-15"
  },
  "llama-3-1-instruct-8b": {
    "pricing": {
      "inputPer1M": 0.02,
      "outputPer1M": 0.05,
      "approx": true
    },
    "context": 128000,
    "benchmarks": {
      "liveCodeBench": 0.1,
      "humanEval": 0.7,
      "terminalBench": 1.5,
      "sciCode": 13.2,
      "intelligenceIndex": 7.4
    },
    "parameters": 8.0,
    "releaseDate": "2024-07-23"
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
      "humanEval": 0.9,
      "terminalBench": 4.5,
      "sciCode": 21.2,
      "intelligenceIndex": 7.4
    },
    "parameters": 27.4,
    "releaseDate": "2025-03-12"
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
      "humanEval": 0.9,
      "sciCode": 29.5,
      "intelligenceIndex": 7.3
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
      "humanEval": 0.9,
      "sciCode": 22.9,
      "intelligenceIndex": 7.2
    },
    "parameters": 32.0,
    "releaseDate": "2024-09-19"
  },
  "nvidia-nemotron-3-nano-30b-a3b": {
    "pricing": {
      "inputPer1M": 0.05,
      "outputPer1M": 0.2,
      "approx": true
    },
    "context": 1000000,
    "benchmarks": {
      "liveCodeBench": 0.4,
      "sciCode": 23.0,
      "intelligenceIndex": 7.2
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
      "liveCodeBench": 0.7,
      "sciCode": 20.9,
      "intelligenceIndex": 7.2
    },
    "parameters": 9.0,
    "releaseDate": "2025-08-18"
  },
  "ministral-3-3b": {
    "pricing": {
      "inputPer1M": 0.1,
      "outputPer1M": 0.1,
      "approx": true
    },
    "context": 256000,
    "benchmarks": {
      "liveCodeBench": 0.2,
      "terminalBench": 0.0,
      "sciCode": 14.4,
      "intelligenceIndex": 7.1
    },
    "parameters": 3.0,
    "releaseDate": "2025-12-02"
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
      "humanEval": 0.9,
      "sciCode": 27.1,
      "intelligenceIndex": 7.0
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
      "liveCodeBench": 0.4,
      "sciCode": 18.1,
      "intelligenceIndex": 6.9
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
      "humanEval": 0.9,
      "sciCode": 27.1,
      "intelligenceIndex": 6.9
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
      "liveCodeBench": 0.3,
      "sciCode": 26.5,
      "intelligenceIndex": 6.8
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
    "benchmarks": {
      "intelligenceIndex": 6.8
    },
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
      "liveCodeBench": 0.4,
      "sciCode": 18.8,
      "intelligenceIndex": 6.8
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
      "humanEval": 0.9,
      "sciCode": 23.6,
      "intelligenceIndex": 6.7
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
      "humanEval": 0.9,
      "sciCode": 17.7,
      "intelligenceIndex": 6.7
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
      "humanEval": 0.8,
      "sciCode": 13.9,
      "intelligenceIndex": 6.7
    },
    "releaseDate": "2024-12-03"
  },
  "gpt-4o-mini": {
    "pricing": {
      "inputPer1M": 0.075,
      "outputPer1M": 0.3,
      "approx": true
    },
    "context": 128000,
    "benchmarks": {
      "liveCodeBench": 0.2,
      "humanEval": 0.9,
      "terminalBench": 5.6,
      "sciCode": 22.9,
      "intelligenceIndex": 6.7
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
      "liveCodeBench": 0.3,
      "sciCode": 27.7,
      "intelligenceIndex": 6.7
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
      "liveCodeBench": 0.3,
      "sciCode": 26.4,
      "intelligenceIndex": 6.6
    },
    "parameters": 30.5,
    "releaseDate": "2025-04-28"
  },
  "deepseek-v2-5": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 128000,
    "benchmarks": {
      "humanEval": 0.9,
      "intelligenceIndex": 6.5
    },
    "parameters": 236.0,
    "releaseDate": "2024-12-10"
  },
  "qwen3-4b-instruct": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 32000,
    "benchmarks": {
      "liveCodeBench": 0.2,
      "sciCode": 16.7,
      "intelligenceIndex": 6.5
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
      "humanEval": 0.8,
      "sciCode": 26.7,
      "intelligenceIndex": 6.5
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
    "benchmarks": {
      "terminalBench": 3.4,
      "sciCode": 21.8,
      "intelligenceIndex": 6.4
    },
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
    "benchmarks": {
      "sciCode": 19.2,
      "intelligenceIndex": 6.4
    },
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
      "humanEval": 0.9,
      "intelligenceIndex": 6.4
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
      "humanEval": 0.9,
      "intelligenceIndex": 6.4
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
    "benchmarks": {
      "sciCode": 16.7,
      "intelligenceIndex": 6.2
    },
    "parameters": 32.2,
    "releaseDate": "2026-01-13"
  },
  "mistral-saba": {
    "pricing": {
      "inputPer1M": 0.2,
      "outputPer1M": 0.6,
      "approx": true
    },
    "context": 32000,
    "benchmarks": {
      "humanEval": 0.9,
      "sciCode": 24.1,
      "intelligenceIndex": 6.2
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
      "humanEval": 0.8,
      "sciCode": 11.9,
      "intelligenceIndex": 6.2
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
    "benchmarks": {
      "sciCode": 20.4,
      "intelligenceIndex": 6.2
    },
    "parameters": 5.1,
    "releaseDate": "2026-04-02"
  },
  "olmo-3-32b-think": {
    "pricing": {
      "inputPer1M": 0.15,
      "outputPer1M": 0.5,
      "approx": true
    },
    "context": 65536,
    "benchmarks": {
      "liveCodeBench": 0.7,
      "sciCode": 28.6,
      "intelligenceIndex": 6.1
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
      "humanEval": 0.8,
      "sciCode": 27.4,
      "intelligenceIndex": 6.1
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
    "benchmarks": {
      "intelligenceIndex": 6.0
    },
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
      "humanEval": 0.8,
      "sciCode": 15.3,
      "intelligenceIndex": 6.0
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
      "humanEval": 0.7,
      "intelligenceIndex": 6.0
    },
    "parameters": 21.0,
    "releaseDate": "2024-10-04"
  },
  "llama-3-2-instruct-90b-vision": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 128000,
    "benchmarks": {
      "liveCodeBench": 0.2,
      "humanEval": 0.8,
      "sciCode": 24.0,
      "intelligenceIndex": 6.0
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
      "humanEval": 0.6,
      "intelligenceIndex": 6.0
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
    "benchmarks": {
      "intelligenceIndex": 5.8
    },
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
      "humanEval": 0.8,
      "sciCode": 22.9,
      "intelligenceIndex": 5.7
    },
    "parameters": 72.0,
    "releaseDate": "2024-06-07"
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
      "humanEval": 0.7,
      "terminalBench": 0.4,
      "sciCode": 10.8,
      "intelligenceIndex": 5.7
    },
    "parameters": 3.84,
    "releaseDate": "2024-02-26"
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
      "humanEval": 0.9,
      "sciCode": 25.2,
      "intelligenceIndex": 5.7
    },
    "parameters": 32.0,
    "releaseDate": "2025-07-15"
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
      "humanEval": 0.8,
      "terminalBench": 0.0,
      "sciCode": 17.4,
      "intelligenceIndex": 5.5
    },
    "parameters": 12.2,
    "releaseDate": "2025-03-12"
  },
  "qwen3-5-2b-non-reasoning": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 262144,
    "benchmarks": {
      "terminalBench": 0.0,
      "sciCode": 7.2,
      "intelligenceIndex": 5.3
    },
    "parameters": 2.27,
    "releaseDate": "2026-03-02"
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
      "humanEval": 0.1,
      "sciCode": 22.9,
      "intelligenceIndex": 5.2
    },
    "parameters": 8.0,
    "releaseDate": "2024-10-03"
  },
  "qwen3-5-0-8b": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 262144,
    "benchmarks": {
      "terminalBench": 0.0,
      "sciCode": 0.0,
      "intelligenceIndex": 5.2
    },
    "parameters": 0.873,
    "releaseDate": "2026-03-02"
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
      "humanEval": 0.7,
      "sciCode": 22.8,
      "intelligenceIndex": 5.0
    },
    "parameters": 24.0,
    "releaseDate": "2025-03-13"
  },
  "jamba-1-7-large": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 256000,
    "benchmarks": {
      "liveCodeBench": 0.2,
      "humanEval": 0.7,
      "sciCode": 18.8,
      "intelligenceIndex": 5.0
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
      "liveCodeBench": 0.3,
      "sciCode": 20.9,
      "intelligenceIndex": 4.9
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
      "humanEval": 0.2,
      "sciCode": 16.3,
      "intelligenceIndex": 4.8
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
      "liveCodeBench": 0.4,
      "sciCode": 18.6,
      "intelligenceIndex": 4.8
    },
    "parameters": 35.3,
    "releaseDate": "2025-09-22"
  },
  "hermes-3-llama-3-1-70b": {
    "pricing": {
      "inputPer1M": 0.7,
      "outputPer1M": 0.7,
      "approx": true
    },
    "context": 128000,
    "benchmarks": {
      "liveCodeBench": 0.2,
      "humanEval": 0.8,
      "sciCode": 23.1,
      "intelligenceIndex": 4.8
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
      "liveCodeBench": 0.2,
      "sciCode": 16.8,
      "intelligenceIndex": 4.8
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
      "humanEval": 0.9,
      "intelligenceIndex": 4.7
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
      "liveCodeBench": 0.1,
      "sciCode": 8.0,
      "intelligenceIndex": 4.7
    },
    "parameters": 32.2,
    "releaseDate": "2025-03-13"
  },
  "jamba-1-6-large": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 256000,
    "benchmarks": {
      "liveCodeBench": 0.2,
      "humanEval": 0.7,
      "sciCode": 18.4,
      "intelligenceIndex": 4.7
    },
    "parameters": 398.0,
    "releaseDate": "2025-03-06"
  },
  "lfm2-24b-a2b": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 32768,
    "benchmarks": {
      "sciCode": 10.9,
      "intelligenceIndex": 4.6
    },
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
      "humanEval": 0.7,
      "sciCode": 18.1,
      "intelligenceIndex": 4.6
    },
    "releaseDate": "2024-05-14"
  },
  "phi-4": {
    "pricing": {
      "inputPer1M": 0.07,
      "outputPer1M": 0.14,
      "approx": true
    },
    "context": 16000,
    "benchmarks": {
      "liveCodeBench": 0.2,
      "humanEval": 0.9,
      "sciCode": 26.0,
      "intelligenceIndex": 4.6
    },
    "parameters": 14.0,
    "releaseDate": "2024-12-12"
  },
  "claude-3-sonnet": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 200000,
    "benchmarks": {
      "liveCodeBench": 0.2,
      "humanEval": 0.7,
      "sciCode": 22.9,
      "intelligenceIndex": 4.4
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
      "humanEval": 0.8,
      "sciCode": 9.4,
      "intelligenceIndex": 4.4
    },
    "releaseDate": "2024-12-03"
  },
  "granite-4-1-3b": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 131072,
    "benchmarks": {
      "terminalBench": 1.1,
      "sciCode": 11.9,
      "intelligenceIndex": 4.4
    },
    "parameters": 3.0,
    "releaseDate": "2026-04-29"
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
      "humanEval": 0.8,
      "sciCode": 15.6,
      "intelligenceIndex": 4.3
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
    "benchmarks": {
      "intelligenceIndex": 4.3
    },
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
      "humanEval": 0.3,
      "sciCode": 9.0,
      "intelligenceIndex": 4.3
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
      "liveCodeBench": 0.3,
      "sciCode": 17.6,
      "intelligenceIndex": 4.2
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
      "humanEval": 0.8,
      "sciCode": 8.6,
      "intelligenceIndex": 4.2
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
      "humanEval": 0.7,
      "sciCode": 11.0,
      "intelligenceIndex": 4.2
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
      "humanEval": 0.9,
      "sciCode": 14.8,
      "intelligenceIndex": 4.1
    },
    "parameters": 7.62,
    "releaseDate": "2024-09-19"
  },
  "mistral-large": {
    "pricing": {
      "inputPer1M": 2.0,
      "outputPer1M": 6.0,
      "approx": true
    },
    "context": 32768,
    "benchmarks": {
      "liveCodeBench": 0.2,
      "humanEval": 0.7,
      "sciCode": 20.8,
      "intelligenceIndex": 4.1
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
      "humanEval": 0.7,
      "sciCode": 18.8,
      "intelligenceIndex": 4.0
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
      "humanEval": 0.1,
      "sciCode": 0.0,
      "intelligenceIndex": 3.9
    },
    "parameters": 7.0,
    "releaseDate": "2023-07-18"
  },
  "llama-3-2-instruct-3b": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 128000,
    "benchmarks": {
      "liveCodeBench": 0.1,
      "humanEval": 0.6,
      "sciCode": 5.2,
      "intelligenceIndex": 3.9
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
    "benchmarks": {
      "terminalBench": 0.0,
      "sciCode": 2.1,
      "intelligenceIndex": 3.8
    },
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
      "liveCodeBench": 0.2,
      "sciCode": 5.9,
      "intelligenceIndex": 3.8
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
      "liveCodeBench": 0.3,
      "sciCode": 13.7,
      "intelligenceIndex": 3.7
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
    "benchmarks": {
      "intelligenceIndex": 3.7
    },
    "parameters": 110.0,
    "releaseDate": "2024-04-25"
  },
  "reka-flash-3": {
    "pricing": {
      "inputPer1M": 0.1,
      "outputPer1M": 0.2,
      "approx": true
    },
    "context": 128000,
    "benchmarks": {
      "liveCodeBench": 0.4,
      "humanEval": 0.9,
      "sciCode": 26.7,
      "intelligenceIndex": 3.7
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
      "liveCodeBench": 0.6,
      "sciCode": 21.2,
      "intelligenceIndex": 3.6
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
      "humanEval": 0.2,
      "sciCode": 18.4,
      "intelligenceIndex": 3.5
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
      "humanEval": 0.8,
      "sciCode": 18.6,
      "intelligenceIndex": 3.5
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
      "liveCodeBench": 0.0,
      "sciCode": 3.7,
      "intelligenceIndex": 3.5
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
      "liveCodeBench": 0.0,
      "sciCode": 3.6,
      "intelligenceIndex": 3.4
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
      "liveCodeBench": 0.4,
      "sciCode": 13.5,
      "intelligenceIndex": 3.4
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
      "humanEval": 0.5,
      "sciCode": 6.6,
      "intelligenceIndex": 3.3
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
      "liveCodeBench": 0.2,
      "sciCode": 19.4,
      "intelligenceIndex": 3.3
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
      "humanEval": 0.9,
      "intelligenceIndex": 3.3
    },
    "parameters": 236.0,
    "releaseDate": "2024-05-06"
  },
  "mistral-small-2402": {
    "pricing": {
      "inputPer1M": 0.15,
      "outputPer1M": 0.6,
      "approx": true
    },
    "context": 32768,
    "benchmarks": {
      "liveCodeBench": 0.1,
      "humanEval": 0.8,
      "sciCode": 13.4,
      "intelligenceIndex": 3.2
    },
    "releaseDate": "2024-02-26"
  },
  "mistral-medium": {
    "pricing": {
      "inputPer1M": 1.5,
      "outputPer1M": 7.5,
      "approx": true
    },
    "context": 32768,
    "benchmarks": {
      "liveCodeBench": 0.1,
      "sciCode": 11.8,
      "intelligenceIndex": 3.2
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
      "humanEval": 0.7,
      "intelligenceIndex": 3.2
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
      "humanEval": 0.8,
      "sciCode": 18.9,
      "intelligenceIndex": 3.1
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
      "humanEval": 0.7,
      "intelligenceIndex": 3.0
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
    "benchmarks": {
      "intelligenceIndex": 3.0
    },
    "parameters": 72.0,
    "releaseDate": "2023-11-30"
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
      "humanEval": 0.5,
      "sciCode": 7.1,
      "intelligenceIndex": 3.0
    },
    "parameters": 40.3,
    "releaseDate": "2024-09-30"
  },
  "llama-3-2-instruct-11b-vision": {
    "pricing": {
      "inputPer1M": 0.345,
      "outputPer1M": 0.345,
      "approx": true
    },
    "context": 128000,
    "benchmarks": {
      "liveCodeBench": 0.1,
      "humanEval": 0.7,
      "sciCode": 11.2,
      "intelligenceIndex": 3.0
    },
    "parameters": 11.0,
    "releaseDate": "2024-09-25"
  },
  "qwen3-5-0-8b-non-reasoning": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 262144,
    "benchmarks": {
      "terminalBench": 0.4,
      "sciCode": 2.9,
      "intelligenceIndex": 2.9
    },
    "parameters": 0.873,
    "releaseDate": "2026-03-02"
  },
  "palm-2": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 8000,
    "benchmarks": {
      "intelligenceIndex": 2.8
    },
    "releaseDate": "2023-05-10"
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
      "humanEval": 0.0,
      "sciCode": 11.7,
      "intelligenceIndex": 2.7
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
      "liveCodeBench": 0.2,
      "sciCode": 13.9,
      "intelligenceIndex": 2.7
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
      "humanEval": 0.8,
      "sciCode": 17.8,
      "intelligenceIndex": 2.6
    },
    "parameters": 23.6,
    "releaseDate": "2025-05-23"
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
      "humanEval": 0.3,
      "intelligenceIndex": 2.6
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
      "humanEval": 0.8,
      "intelligenceIndex": 2.6
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
      "humanEval": 0.0,
      "sciCode": 11.8,
      "intelligenceIndex": 2.6
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
      "humanEval": 0.6,
      "sciCode": 11.8,
      "intelligenceIndex": 2.6
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
      "humanEval": 0.7,
      "intelligenceIndex": 2.6
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
      "humanEval": 0.7,
      "sciCode": 11.8,
      "intelligenceIndex": 2.6
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
      "liveCodeBench": 0.5,
      "sciCode": 9.3,
      "intelligenceIndex": 2.5
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
      "liveCodeBench": 0.3,
      "sciCode": 10.3,
      "intelligenceIndex": 2.4
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
      "liveCodeBench": 0.3,
      "sciCode": 7.4,
      "intelligenceIndex": 2.4
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
    "benchmarks": {
      "sciCode": 4.2,
      "intelligenceIndex": 2.3
    },
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
      "humanEval": 0.5,
      "sciCode": 9.3,
      "intelligenceIndex": 2.3
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
      "liveCodeBench": 0.1,
      "sciCode": 2.5,
      "intelligenceIndex": 2.3
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
    "benchmarks": {
      "sciCode": 2.3,
      "intelligenceIndex": 2.3
    },
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
      "humanEval": 0.6,
      "sciCode": 8.0,
      "intelligenceIndex": 2.3
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
      "liveCodeBench": 0.1,
      "sciCode": 8.2,
      "intelligenceIndex": 2.2
    },
    "parameters": 1.5,
    "releaseDate": "2025-10-28"
  },
  "qwen3-1.7b-instruct-reasoning": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 32000,
    "benchmarks": {
      "liveCodeBench": 0.3,
      "humanEval": 0.9,
      "sciCode": 4.3,
      "intelligenceIndex": 2.2
    },
    "parameters": 2.03,
    "releaseDate": "2025-04-28"
  },
  "jamba-1-6-mini": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 256000,
    "benchmarks": {
      "liveCodeBench": 0.1,
      "humanEval": 0.4,
      "sciCode": 10.1,
      "intelligenceIndex": 2.1
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
      "humanEval": 0.0,
      "sciCode": 2.8,
      "intelligenceIndex": 2.0
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
      "liveCodeBench": 0.0,
      "sciCode": 0.0,
      "intelligenceIndex": 2.0
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
    "benchmarks": {
      "sciCode": 5.7,
      "intelligenceIndex": 2.0
    },
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
      "liveCodeBench": 0.2,
      "sciCode": 11.9,
      "intelligenceIndex": 2.0
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
      "humanEval": 0.5,
      "sciCode": 9.1,
      "intelligenceIndex": 1.9
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
    "benchmarks": {
      "intelligenceIndex": 1.7
    },
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
    "benchmarks": {
      "intelligenceIndex": 1.7
    },
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
      "humanEval": 0.0,
      "intelligenceIndex": 1.7
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
      "humanEval": 0.4,
      "sciCode": 2.4,
      "intelligenceIndex": 1.7
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
      "humanEval": 0.4,
      "sciCode": 6.2,
      "intelligenceIndex": 1.7
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
      "liveCodeBench": 0.0,
      "sciCode": 8.7,
      "intelligenceIndex": 1.6
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
    "benchmarks": {
      "sciCode": 13.3,
      "intelligenceIndex": 1.6
    },
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
      "liveCodeBench": 0.2,
      "sciCode": 6.8,
      "intelligenceIndex": 1.3
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
      "humanEval": 0.7,
      "sciCode": 10.1,
      "intelligenceIndex": 1.3
    },
    "parameters": 8.17,
    "releaseDate": "2025-04-16"
  },
  "qwen3-1.7b-instruct": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 32000,
    "benchmarks": {
      "liveCodeBench": 0.1,
      "sciCode": 6.9,
      "intelligenceIndex": 1.1
    },
    "parameters": 2.03,
    "releaseDate": "2025-04-28"
  },
  "lfm2-5-vl-1-6b": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 32000,
    "benchmarks": {
      "sciCode": 3.0,
      "intelligenceIndex": 1.0
    },
    "parameters": 1.6,
    "releaseDate": "2026-01-05"
  },
  "granite-4-0-h-350m": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 32768,
    "benchmarks": {
      "liveCodeBench": 0.0,
      "sciCode": 1.7,
      "intelligenceIndex": 1.0
    },
    "parameters": 0.34,
    "releaseDate": "2025-10-28"
  },
  "granite-4-0-350m": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 32768,
    "benchmarks": {
      "liveCodeBench": 0.0,
      "sciCode": 0.9,
      "intelligenceIndex": 1.0
    },
    "parameters": 0.35,
    "releaseDate": "2025-10-28"
  },
  "apertus-8b-instruct": {
    "pricing": {
      "inputPer1M": 0.1,
      "outputPer1M": 0.2,
      "approx": true
    },
    "context": 65536,
    "benchmarks": {
      "sciCode": 4.1,
      "intelligenceIndex": 1.0
    },
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
    "benchmarks": {
      "sciCode": 3.6,
      "intelligenceIndex": 1.0
    },
    "parameters": 3.35,
    "releaseDate": "2026-02-17"
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
      "humanEval": 0.7,
      "sciCode": 11.9,
      "intelligenceIndex": 1.0
    },
    "parameters": 8.0,
    "releaseDate": "2024-04-18"
  },
  "llama-3-2-instruct-1b": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 128000,
    "benchmarks": {
      "liveCodeBench": 0.0,
      "humanEval": 0.4,
      "sciCode": 1.7,
      "intelligenceIndex": 1.0
    },
    "parameters": 1.0,
    "releaseDate": "2024-09-25"
  },
  "gemma-3n-e2b": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 32000,
    "benchmarks": {
      "liveCodeBench": 0.1,
      "sciCode": 5.2,
      "intelligenceIndex": 1.0
    },
    "parameters": 5.98,
    "releaseDate": "2025-06-26"
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
      "humanEval": 0.3,
      "sciCode": 0.7,
      "intelligenceIndex": 1.0
    },
    "parameters": 1.0,
    "releaseDate": "2025-03-13"
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
      "humanEval": 0.7,
      "terminalBench": 0.4,
      "sciCode": 7.3,
      "intelligenceIndex": 1.0
    },
    "parameters": 4.3,
    "releaseDate": "2025-03-12"
  },
  "gemma-3n-e4b": {
    "pricing": {
      "inputPer1M": 0.06,
      "outputPer1M": 0.12,
      "approx": true
    },
    "context": 32000,
    "benchmarks": {
      "liveCodeBench": 0.1,
      "terminalBench": 0.7,
      "sciCode": 8.1,
      "intelligenceIndex": 1.0
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
      "liveCodeBench": 0.0,
      "sciCode": 2.5,
      "intelligenceIndex": 1.0
    },
    "parameters": 1.17,
    "releaseDate": "2025-07-10"
  },
  "qwen3-0.6b-instruct-reasoning": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 32000,
    "benchmarks": {
      "liveCodeBench": 0.1,
      "humanEval": 0.5,
      "sciCode": 2.8,
      "intelligenceIndex": 1.0
    },
    "parameters": 0.752,
    "releaseDate": "2025-04-28"
  },
  "qwen3-0.6b-instruct": {
    "pricing": {
      "inputPer1M": 0.0,
      "outputPer1M": 0.0,
      "approx": true
    },
    "context": 32000,
    "benchmarks": {
      "liveCodeBench": 0.1,
      "humanEval": 0.3,
      "sciCode": 4.1,
      "intelligenceIndex": 1.0
    },
    "parameters": 0.752,
    "releaseDate": "2025-04-28"
  }
};

export const autoCompanies: Record<string, CompanyMeta> = {
  "MotifTechnologies": {
    "name": "Motif Technologies",
    "origin": "China",
    "accent": "#64748b",
    "blurb": "Motif Technologies — datos del Artificial Analysis Intelligence Index."
  },
  "NexAGI": {
    "name": "Nex AGI",
    "origin": "US",
    "accent": "#64748b",
    "blurb": "Nex AGI — datos del Artificial Analysis Intelligence Index."
  },
  "SapiensAI": {
    "name": "Sapiens AI",
    "origin": "US",
    "accent": "#64748b",
    "blurb": "Sapiens AI — datos del Artificial Analysis Intelligence Index."
  },
  "Upstage": {
    "name": "Upstage",
    "origin": "US",
    "accent": "#64748b",
    "blurb": "Upstage — datos del Artificial Analysis Intelligence Index."
  }
};
