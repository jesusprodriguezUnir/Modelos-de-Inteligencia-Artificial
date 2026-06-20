import type { Model, CompanyMeta } from './types';
import { autoModels, autoSpecs, autoCompanies } from './auto-models';

// ─────────────────────────────────────────────────────────────────────────
//  Catálogo de modelos de programación — datos a junio de 2026.
//  ⚠️  Los precios cambian a menudo. Verifica siempre en la web oficial
//      (enlace "docs"/"pricing" de cada modelo) antes de presupuestar.
//
//  Este catálogo se FUSIONA al final del archivo con datos autoimportados del
//  Artificial Analysis Intelligence Index (auto-models.ts, autogenerado a
//  diario). Lo curado SIEMPRE manda: lo auto solo rellena huecos y añade
//  modelos nuevos del mercado. Ver CLAUDE.md.
// ─────────────────────────────────────────────────────────────────────────

const curatedCompanies: Record<string, CompanyMeta> = {
  Anthropic: { name: 'Anthropic', origin: 'US', accent: '#d97757', blurb: 'Familia Claude. Referente en código agéntico y razonamiento.' },
  OpenAI: { name: 'OpenAI', origin: 'US', accent: '#10a37f', blurb: 'Familia GPT y Codex. Ecosistema y tooling muy maduros.' },
  Google: { name: 'Google', origin: 'US', accent: '#4285f4', blurb: 'Familia Gemini. Contexto enorme (hasta 2M) y multimodalidad.' },
  Microsoft: { name: 'Microsoft', origin: 'US', accent: '#5e5ce6', blurb: 'GitHub Copilot y modelos abiertos Phi/MAI. Integración en Azure/IDE.' },
  xAI: { name: 'xAI', origin: 'US', accent: '#111827', blurb: 'Familia Grok. Buen equilibrio precio/razonamiento.' },
  Meta: { name: 'Meta', origin: 'Open', accent: '#0866ff', blurb: 'Familia Llama, open-weight, desplegable en cualquier infra.' },
  Mistral: { name: 'Mistral AI', origin: 'EU', accent: '#fa520f', blurb: 'Europea. Modelos eficientes y opciones open-weight.' },
  DeepSeek: { name: 'DeepSeek', origin: 'China', accent: '#4d6bfe', blurb: 'Coste por token líder. Open-weight y fuerte en código.' },
  Alibaba: { name: 'Alibaba (Qwen)', origin: 'China', accent: '#615ced', blurb: 'Familia Qwen. Multilingüe (CJK) y open-weight Apache-2.0.' },
  Zhipu: { name: 'Zhipu AI', origin: 'China', accent: '#3a5af0', blurb: 'Familia GLM. Top en coding agéntico open-weight.' },
  Moonshot: { name: 'Moonshot AI', origin: 'China', accent: '#16a085', blurb: 'Familia Kimi. Contexto largo y enjambres de agentes.' },
  MiniMax: { name: 'MiniMax', origin: 'China', accent: '#ee4d2d', blurb: 'Familia M. Altísimo volumen en coding por precio.' },
  Xiaomi: { name: 'Xiaomi', origin: 'China', accent: '#ff6900', blurb: 'Familia MiMo. Líder de tokens de coding en OpenRouter.' },
  Baidu: { name: 'Baidu', origin: 'China', accent: '#2932e1', blurb: 'Familia ERNIE. Gran ecosistema en China.' },
  Tencent: { name: 'Tencent', origin: 'China', accent: '#0052d9', blurb: 'Familia Hunyuan. Multimodal e integrado en su nube.' },
  StepFun: { name: 'StepFun', origin: 'China', accent: '#7c3aed', blurb: 'Familia Step. Flash económico y multimodal.' },
  // Herramientas / Agentes
  OpenCode: { name: 'OpenCode', origin: 'Open', accent: '#22c55e', blurb: 'Agente de código open-source para terminal. Agnóstico de modelo.' },
  Cursor: { name: 'Cursor', origin: 'US', accent: '#8b5cf6', blurb: 'IDE AI-native (fork VS Code). El estándar de facto para coding con IA.' },
  Windsurf: { name: 'Windsurf', origin: 'US', accent: '#06b6d4', blurb: 'IDE agéntico con flujos autónomos "Cascade".' },
  GoogleTools: { name: 'Google (Herramientas)', origin: 'US', accent: '#34a853', blurb: 'Jules: agente autónomo de coding de Google.' },
  Aider: { name: 'Aider', origin: 'Open', accent: '#f59e0b', blurb: 'Agente de terminal open-source para pair-programming con IA.' },
  Cline: { name: 'Cline', origin: 'Open', accent: '#ec4899', blurb: 'Extensión VS Code agéntica, open-source, con ejecución de terminal.' },
  Cognition: { name: 'Cognition', origin: 'US', accent: '#6366f1', blurb: 'Devin: ingeniero de software autónomo que trabaja tareas de forma asíncrona.' },
  Zed: { name: 'Zed', origin: 'US', accent: '#084ccf', blurb: 'Editor agéntico de alto rendimiento escrito en Rust, open-source.' },
  Sourcegraph: { name: 'Sourcegraph', origin: 'US', accent: '#ff5543', blurb: 'Amp: agente de coding (CLI + extensión) centrado en bases de código grandes.' },
  RooCode: { name: 'Roo Code', origin: 'Open', accent: '#f43f5e', blurb: 'Extensión VS Code agéntica open-source, fork de Cline con modos personalizables.' },
  Trae: { name: 'Trae', origin: 'China', accent: '#e11d48', blurb: 'IDE AI-native de ByteDance, multimodelo y con flujos agénticos.' },
};

// Ejemplos reutilizables (mantener cortos y realistas).
const pyAnthropic = (model: string) => `from anthropic import Anthropic

client = Anthropic()  # lee ANTHROPIC_API_KEY
resp = client.messages.create(
    model="${model}",
    max_tokens=1024,
    messages=[{"role": "user", "content": "Refactoriza esta función en C#..."}],
)
print(resp.content[0].text)`;

const pyOpenAI = (model: string) => `from openai import OpenAI

client = OpenAI()  # lee OPENAI_API_KEY
resp = client.responses.create(
    model="${model}",
    input="Genera tests xUnit para este servicio .NET...",
)
print(resp.output_text)`;

const tsGoogle = (model: string) => `import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({}); // lee GEMINI_API_KEY
const res = await ai.models.generateContent({
  model: "${model}",
  contents: "Explica este stack trace de Angular y propón fix",
});
console.log(res.text);`;

const curlOpenAICompat = (base: string, model: string) => `curl ${base}/chat/completions \\\\
  -H "Authorization: Bearer $API_KEY" \\\\
  -H "Content-Type: application/json" \\\\
  -d '{
    "model": "${model}",
    "messages": [{"role": "user", "content": "Optimiza esta query EF Core"}]
  }'`;

const curlXAI = (model: string) => curlOpenAICompat('https://api.x.ai/v1', model);

const pyDeepSeek = (model: string) => `from openai import OpenAI

client = OpenAI(base_url="https://api.deepseek.com/v1", api_key="$DEEPSEEK_API_KEY")
resp = client.chat.completions.create(
    model="${model}",
    messages=[{"role": "user", "content": "Optimiza esta query SQL para PostgreSQL"}],
)
print(resp.choices[0].message.content)`;

const pyQwen = (model: string) => `from openai import OpenAI

client = OpenAI(
    base_url="https://dashscope.aliyuncs.com/compatible-mode/v1",
    api_key="$DASHSCOPE_API_KEY",
)
resp = client.chat.completions.create(
    model="${model}",
    messages=[{"role": "user", "content": "Implementa un middleware de autenticación en ASP.NET"}],
)
print(resp.choices[0].message.content)`;

const rawModels: Model[] = [
  // ── Anthropic ──────────────────────────────────────────────────────────
  {
    id: 'claude-opus-4-8',
    company: 'Anthropic', origin: 'US', kind: 'model',
    displayName: 'Claude Opus 4.8',
    category: ['coding', 'reasoning', 'agentic'],
    context: 200_000,
    pricing: { inputPer1M: 5, outputPer1M: 25, currency: 'USD' },
    modalities: ['text', 'image'],
    releaseDate: '2026-05-28',
    apiModelString: 'claude-opus-4-8',
    playgroundUrl: 'https://console.anthropic.com/workbench',
    docsUrl: 'https://docs.claude.com',
    examples: [{ lang: 'python', title: 'SDK Python', code: pyAnthropic('claude-opus-4-8') }],
    videos: [
      { title: 'Claude Code: Curso Completo 2026 (Benjamín Cordero)', url: 'https://www.youtube.com/results?search_query=claude+code+curso+completo+2026+benjamin+cordero', source: 'YouTube' },
      { title: 'Claude Opus 4 — Deep Dive & Coding Demo', url: 'https://www.youtube.com/results?search_query=claude+opus+4+coding+demo+review', source: 'YouTube' },
    ],
    notes: 'Tope de gama en código agéntico. Líder en SWE-bench Pro. Soporta contexto 1M y "Fast Mode".',
    benchmarks: { sweBenchPro: 79.4 },
  },
  {
    id: 'claude-sonnet-4-6',
    company: 'Anthropic', origin: 'US', kind: 'model',
    displayName: 'Claude Sonnet 4.6',
    category: ['coding', 'reasoning', 'general'],
    context: 1_000_000,
    pricing: { inputPer1M: 3, outputPer1M: 15, currency: 'USD' },
    modalities: ['text', 'image'],
    releaseDate: '2026-03-15',
    apiModelString: 'claude-sonnet-4-6',
    playgroundUrl: 'https://console.anthropic.com/workbench',
    docsUrl: 'https://docs.claude.com',
    examples: [{ lang: 'python', title: 'SDK Python', code: pyAnthropic('claude-sonnet-4-6') }],
    videos: [
      { title: 'Claude Sonnet 4 — El caballo de batalla para coding', url: 'https://www.youtube.com/results?search_query=claude+sonnet+4+coding+review+2026', source: 'YouTube' },
    ],
    notes: 'El caballo de batalla: gran relación calidad/precio con contexto 1M. Ideal para el trabajo diario de desarrollo.',
  },
  {
    id: 'claude-haiku-4-5',
    company: 'Anthropic', origin: 'US', kind: 'model',
    displayName: 'Claude Haiku 4.5',
    category: ['fast', 'budget', 'coding'],
    context: 200_000,
    pricing: { inputPer1M: 1, outputPer1M: 5, currency: 'USD' },
    modalities: ['text', 'image'],
    releaseDate: '2025-10-01',
    apiModelString: 'claude-haiku-4-5-20251001',
    playgroundUrl: 'https://console.anthropic.com/workbench',
    docsUrl: 'https://docs.claude.com',
    videos: [
      { title: 'Claude Haiku: rápido y económico para agentes ligeros', url: 'https://www.youtube.com/results?search_query=claude+haiku+4.5+review+fast+coding', source: 'YouTube' },
    ],
    notes: 'Rápido y barato para alto volumen, clasificación y agentes ligeros. Ideal como "router" o para tareas de triaje.',
  },

  // ── OpenAI ─────────────────────────────────────────────────────────────
  {
    id: 'gpt-5-5',
    company: 'OpenAI', origin: 'US', kind: 'model',
    displayName: 'GPT-5.5',
    category: ['coding', 'reasoning', 'agentic', 'multimodal'],
    context: 400_000,
    pricing: { inputPer1M: 5, outputPer1M: 30, currency: 'USD' },
    modalities: ['text', 'image'],
    releaseDate: '2026-04-23',
    apiModelString: 'gpt-5.5',
    playgroundUrl: 'https://platform.openai.com/playground',
    docsUrl: 'https://developers.openai.com/api/docs/models/gpt-5.5',
    examples: [{ lang: 'python', title: 'SDK Python (Responses)', code: pyOpenAI('gpt-5.5') }],
    videos: [
      { title: 'GPT-5.5 Coding Demo — Análisis completo', url: 'https://www.youtube.com/results?search_query=gpt+5.5+coding+demo+review+2026', source: 'YouTube' },
      { title: 'GPT-5.5 vs Claude Opus 4.8 — ¿Cuál es mejor para coding?', url: 'https://www.youtube.com/results?search_query=gpt+5.5+vs+claude+opus+coding+comparison', source: 'YouTube' },
    ],
    notes: 'Modelo insignia. Líder en Terminal-Bench: excelente en navegación de repos, ejecución de comandos y orquestación de herramientas.',
    benchmarks: { sweBenchPro: 75.2, humanEval: 96.2 },
  },
  {
    id: 'gpt-5-5-pro',
    company: 'OpenAI', origin: 'US', kind: 'model',
    displayName: 'GPT-5.5 Pro',
    category: ['reasoning', 'agentic'],
    context: 400_000,
    pricing: { inputPer1M: 30, outputPer1M: 180, currency: 'USD' },
    modalities: ['text', 'image'],
    releaseDate: '2026-04-23',
    apiModelString: 'gpt-5.5-pro',
    playgroundUrl: 'https://platform.openai.com/playground',
    docsUrl: 'https://platform.openai.com/docs',
    videos: [
      { title: 'GPT-5.5 Pro: razonamiento de máxima exigencia', url: 'https://www.youtube.com/results?search_query=gpt+5.5+pro+reasoning+demo', source: 'YouTube' },
    ],
    notes: 'Razonamiento de máxima exigencia. Coste elevado: reservar para tareas críticas que requieren razonamiento profundo.',
  },
  {
    id: 'gpt-5-4',
    company: 'OpenAI', origin: 'US', kind: 'model',
    displayName: 'GPT-5.4',
    category: ['coding', 'reasoning', 'general'],
    context: 400_000,
    pricing: { inputPer1M: 2.5, outputPer1M: 15, currency: 'USD' },
    modalities: ['text', 'image'],
    releaseDate: '2026-01-15',
    apiModelString: 'gpt-5.4',
    playgroundUrl: 'https://platform.openai.com/playground',
    docsUrl: 'https://platform.openai.com/docs',
    examples: [{ lang: 'python', title: 'SDK Python', code: pyOpenAI('gpt-5.4') }],
    videos: [
      { title: 'GPT-5.4: equilibrio coste/capacidad', url: 'https://www.youtube.com/results?search_query=gpt+5.4+coding+review', source: 'YouTube' },
    ],
    notes: 'Equilibrio coste/capacidad para el día a día. Buena opción cuando GPT-5.5 es overkill.',
  },
  {
    id: 'gpt-5-3-codex',
    company: 'OpenAI', origin: 'US', kind: 'model',
    displayName: 'GPT-5.3-Codex',
    category: ['coding', 'agentic'],
    context: 400_000,
    pricing: { inputPer1M: 1.75, outputPer1M: 14, currency: 'USD' },
    modalities: ['text'],
    releaseDate: '2026-02-05',
    apiModelString: 'gpt-5.3-codex',
    playgroundUrl: 'https://platform.openai.com/playground',
    docsUrl: 'https://platform.openai.com/docs',
    examples: [{ lang: 'python', title: 'SDK Python', code: pyOpenAI('gpt-5.3-codex') }],
    videos: [
      { title: 'OpenAI Codex Agent: agente de ingeniería de software', url: 'https://www.youtube.com/results?search_query=openai+codex+agent+software+engineering+demo+2026', source: 'YouTube' },
      { title: 'Codex: cómo usa Computer Use y planificación', url: 'https://www.youtube.com/results?search_query=openai+codex+computer+use+planning+mode', source: 'YouTube' },
    ],
    notes: 'Motor del agente Codex. Especializado en código: navega repos, ejecuta comandos, depura y crea PRs autónomamente.',
  },
  {
    id: 'gpt-4-1-nano',
    company: 'OpenAI', origin: 'US', kind: 'model',
    displayName: 'GPT-4.1 nano',
    category: ['fast', 'budget'],
    context: 1_000_000,
    pricing: { inputPer1M: 0.1, outputPer1M: 0.4, currency: 'USD' },
    modalities: ['text'],
    releaseDate: '2025-04-14',
    apiModelString: 'gpt-4.1-nano',
    playgroundUrl: 'https://platform.openai.com/playground',
    docsUrl: 'https://platform.openai.com/docs',
    videos: [
      { title: 'GPT-4.1 nano: el más barato para tareas masivas', url: 'https://www.youtube.com/results?search_query=gpt+4.1+nano+budget+model+review', source: 'YouTube' },
    ],
    notes: 'El más barato de OpenAI (0,10$/M entrada). Ideal para clasificación, routing de agentes y tareas masivas con contexto 1M.',
  },

  // ── Google ─────────────────────────────────────────────────────────────
  {
    id: 'gemini-3-1-pro',
    company: 'Google', origin: 'US', kind: 'model',
    displayName: 'Gemini 3.1 Pro',
    category: ['coding', 'reasoning', 'multimodal', 'agentic'],
    context: 2_000_000,
    pricing: { inputPer1M: 2, outputPer1M: 12, currency: 'USD', note: '>200K tokens: 4$/18$ por 1M.' },
    modalities: ['text', 'image', 'audio', 'video'],
    releaseDate: '2026-05-01',
    apiModelString: 'gemini-3.1-pro',
    playgroundUrl: 'https://aistudio.google.com',
    docsUrl: 'https://ai.google.dev/gemini-api/docs',
    examples: [{ lang: 'typescript', title: 'SDK JS/TS', code: tsGoogle('gemini-3.1-pro') }],
    videos: [
      { title: 'Gemini 3.1 Pro: contexto de 2M tokens en acción', url: 'https://www.youtube.com/results?search_query=gemini+3.1+pro+2M+context+coding+demo', source: 'YouTube' },
      { title: 'Gemini vs Claude vs GPT: comparación para coding 2026', url: 'https://www.youtube.com/results?search_query=gemini+vs+claude+vs+gpt+coding+comparison+2026', source: 'YouTube' },
    ],
    notes: 'Flagship con contexto de 2M tokens. Fuerte en multimodal, coding y análisis de repos enteros por su contexto masivo.',
    benchmarks: { sweBenchPro: 71.8, humanEval: 94.6 },
  },
  {
    id: 'gemini-3-5-flash',
    company: 'Google', origin: 'US', kind: 'model',
    displayName: 'Gemini 3.5 Flash',
    category: ['fast', 'coding', 'multimodal'],
    context: 1_000_000,
    pricing: { inputPer1M: 1.5, outputPer1M: 9, currency: 'USD' },
    modalities: ['text', 'image', 'audio', 'video'],
    releaseDate: '2026-05-19',
    apiModelString: 'gemini-3.5-flash',
    playgroundUrl: 'https://aistudio.google.com',
    docsUrl: 'https://ai.google.dev/gemini-api/docs',
    examples: [{ lang: 'typescript', title: 'SDK JS/TS', code: tsGoogle('gemini-3.5-flash') }],
    videos: [
      { title: 'Gemini Flash: rápido y multimodal', url: 'https://www.youtube.com/results?search_query=gemini+3.5+flash+review+coding', source: 'YouTube' },
    ],
    notes: 'Rápido y multimodal con contexto 1M. Buena alternativa a GPT-5.4 con soporte nativo de audio y vídeo.',
  },
  {
    id: 'gemini-3-flash',
    company: 'Google', origin: 'US', kind: 'model',
    displayName: 'Gemini 3 Flash',
    category: ['fast', 'budget', 'multimodal'],
    context: 1_000_000,
    pricing: { inputPer1M: 0.5, outputPer1M: 3, currency: 'USD' },
    modalities: ['text', 'image'],
    releaseDate: '2025-12-01',
    apiModelString: 'gemini-3-flash',
    playgroundUrl: 'https://aistudio.google.com',
    docsUrl: 'https://ai.google.dev/gemini-api/docs',
    videos: [
      { title: 'Gemini Flash: económico con contexto 1M', url: 'https://www.youtube.com/results?search_query=gemini+flash+budget+model+review', source: 'YouTube' },
    ],
    notes: 'Opción económica con contexto 1M: 0,50$/M de entrada. Buena para tareas de volumen.',
  },
  {
    id: 'gemini-3-1-flash-lite',
    company: 'Google', origin: 'US', kind: 'model',
    displayName: 'Gemini 3.1 Flash-Lite',
    category: ['budget', 'fast'],
    context: 1_000_000,
    pricing: { inputPer1M: 0.25, outputPer1M: 1.5, currency: 'USD' },
    modalities: ['text', 'image'],
    releaseDate: '2026-05-01',
    apiModelString: 'gemini-3.1-flash-lite',
    playgroundUrl: 'https://aistudio.google.com',
    docsUrl: 'https://ai.google.dev/gemini-api/docs',
    videos: [
      { title: 'Flash-Lite: la opción más económica de Google', url: 'https://www.youtube.com/results?search_query=gemini+flash+lite+cheapest+model', source: 'YouTube' },
    ],
    notes: 'La opción más económica de la familia Gemini: 0,25$/M entrada. Ideal para clasificación y routing.',
  },

  // ── Microsoft ──────────────────────────────────────────────────────────
  {
    id: 'github-copilot',
    company: 'Microsoft', origin: 'US', kind: 'tool',
    displayName: 'GitHub Copilot',
    category: ['coding', 'agentic', 'tool'],
    context: null,
    pricing: { inputPer1M: null, outputPer1M: null, note: 'Suscripción: Pro 10$/mes, Pro+ 39$/mes, Business 19$/usuario. Créditos por uso (1 crédito = 0,01$) desde jun-2026.' },
    modalities: ['text'],
    releaseDate: '2026-06-01',
    playgroundUrl: 'https://github.com/copilot',
    docsUrl: 'https://docs.github.com/copilot',
    videos: [
      { title: 'GitHub Copilot Agent Mode: Tutorial completo 2026', url: 'https://www.youtube.com/results?search_query=github+copilot+agent+mode+tutorial+2026', source: 'YouTube' },
      { title: 'Copilot Desktop App: trabajos paralelos y multi-agente', url: 'https://www.youtube.com/results?search_query=github+copilot+desktop+app+agent+parallel', source: 'YouTube' },
    ],
    notes: 'Asistente AI en IDE/CLI. Multimodelo (Claude, GPT, Gemini). Agent Mode para tareas autónomas multi-archivo. Facturación por créditos desde jun-2026.',
  },
  {
    id: 'phi-4',
    company: 'Microsoft', origin: 'US', kind: 'model',
    displayName: 'Phi-4 (familia)',
    category: ['budget', 'reasoning'],
    context: 16_000,
    pricing: { inputPer1M: null, outputPer1M: null, note: 'Open-weight: gratis en self-host; coste variable vía Azure AI Foundry.' },
    modalities: ['text'],
    openWeight: true,
    releaseDate: '2025-12-12',
    playgroundUrl: 'https://ai.azure.com',
    docsUrl: 'https://learn.microsoft.com/azure/ai-foundry/',
    license: 'MIT',
    videos: [
      { title: 'Phi-4: SLMs de Microsoft para edge y on-device', url: 'https://www.youtube.com/results?search_query=phi+4+microsoft+small+language+model+review', source: 'YouTube' },
    ],
    notes: 'SLMs abiertos de Microsoft: muy buen rendimiento por tamaño, ideales on-device/edge. MIT license.',
    parameters: 14,
  },
  {
    id: 'mai-code-1-flash',
    company: 'Microsoft', origin: 'US', kind: 'model',
    displayName: 'MAI-Code-1-Flash',
    category: ['coding', 'fast'],
    context: 128_000,
    pricing: { inputPer1M: null, outputPer1M: null, note: 'Disponible vía Azure AI Foundry y GitHub Copilot. Precio incluido en suscripción Copilot.' },
    modalities: ['text'],
    releaseDate: '2026-06-01',
    docsUrl: 'https://microsoft.ai',
    license: 'Propietario',
    videos: [
      { title: 'MAI-Code-1: el modelo de Microsoft para Copilot', url: 'https://www.youtube.com/results?search_query=mai+code+1+flash+microsoft+copilot+coding', source: 'YouTube' },
    ],
    notes: 'Modelo optimizado para producción en Copilot. Prioriza "adaptive thinking" y eficiencia sobre raw benchmark scores.',
  },

  // ── xAI ────────────────────────────────────────────────────────────────
  {
    id: 'grok-3',
    company: 'xAI', origin: 'US', kind: 'model',
    displayName: 'Grok 3',
    category: ['reasoning', 'coding', 'general'],
    context: 131_000,
    pricing: { inputPer1M: 3, outputPer1M: 15, currency: 'USD' },
    modalities: ['text', 'image'],
    releaseDate: '2025-02-17',
    apiModelString: 'grok-3',
    playgroundUrl: 'https://console.x.ai',
    docsUrl: 'https://docs.x.ai',
    examples: [{ lang: 'bash', title: 'API (OpenAI-compatible)', code: curlXAI('grok-3') }],
    videos: [
      { title: 'Grok 3: review completa y benchmark', url: 'https://www.youtube.com/results?search_query=grok+3+xai+coding+review+benchmark', source: 'YouTube' },
    ],
    notes: 'Modelo potente con API compatible OpenAI. Buen rendimiento en razonamiento y código a precio competitivo.',
  },
  {
    id: 'grok-3-mini',
    company: 'xAI', origin: 'US', kind: 'model',
    displayName: 'Grok 3 Mini',
    category: ['budget', 'fast'],
    context: 131_000,
    pricing: { inputPer1M: 0.3, outputPer1M: 0.5, currency: 'USD' },
    modalities: ['text'],
    releaseDate: '2025-02-17',
    apiModelString: 'grok-3-mini',
    playgroundUrl: 'https://console.x.ai',
    docsUrl: 'https://docs.x.ai',
    videos: [
      { title: 'Grok 3 Mini: rápido y económico', url: 'https://www.youtube.com/results?search_query=grok+3+mini+budget+fast+review', source: 'YouTube' },
    ],
    notes: 'Versión económica de Grok 3: 0,30$/M entrada. Útil para clasificación y agentes ligeros.',
  },

  // ── Meta ───────────────────────────────────────────────────────────────
  {
    id: 'llama-4-maverick',
    company: 'Meta', origin: 'Open', kind: 'model',
    displayName: 'Llama 4 Maverick',
    category: ['general', 'coding', 'budget'],
    context: 1_000_000,
    pricing: { inputPer1M: 0.27, outputPer1M: 0.85, currency: 'USD', note: 'Precio vía hosts (Together/Groq/Fireworks); gratis en self-host.' },
    modalities: ['text', 'image'],
    openWeight: true,
    releaseDate: '2025-04-05',
    apiModelString: 'llama-4-maverick',
    playgroundUrl: 'https://www.llama.com',
    docsUrl: 'https://www.llama.com/docs/',
    license: 'Llama 4 Community',
    parameters: 400,
    videos: [
      { title: 'Llama 4 Maverick: open-weight de 400B con contexto 1M', url: 'https://www.youtube.com/results?search_query=llama+4+maverick+meta+open+weight+review', source: 'YouTube' },
      { title: 'Llama 4 vs Qwen vs DeepSeek: comparación open-weight', url: 'https://www.youtube.com/results?search_query=llama+4+vs+qwen+vs+deepseek+open+weight+comparison', source: 'YouTube' },
    ],
    notes: 'Open-weight MoE de 400B con contexto 1M. Desplegable en tu propia infra vía Together, Groq, Fireworks o self-host.',
  },

  // ── Mistral ────────────────────────────────────────────────────────────
  {
    id: 'mistral-large-3',
    company: 'Mistral', origin: 'EU', kind: 'model',
    displayName: 'Mistral Large 3',
    category: ['reasoning', 'coding', 'general'],
    context: 256_000,
    pricing: { inputPer1M: 0.5, outputPer1M: 2, currency: 'USD', approx: true },
    modalities: ['text'],
    releaseDate: '2026-03-01',
    apiModelString: 'mistral-large-3',
    playgroundUrl: 'https://console.mistral.ai',
    docsUrl: 'https://docs.mistral.ai',
    examples: [{ lang: 'bash', title: 'API (OpenAI-compatible)', code: curlOpenAICompat('https://api.mistral.ai/v1', 'mistral-large-3') }],
    videos: [
      { title: 'Mistral Large 3: la opción europea para coding', url: 'https://www.youtube.com/results?search_query=mistral+large+3+coding+review+european+ai', source: 'YouTube' },
    ],
    notes: 'Opción europea (cumplimiento GDPR/datos en UE). Open-weight con contexto 256K. Precio de salida aproximado.',
    openWeight: true,
    license: 'Apache-2.0',
    parameters: 123,
  },
  {
    id: 'mistral-small',
    company: 'Mistral', origin: 'EU', kind: 'model',
    displayName: 'Mistral Small',
    category: ['budget', 'fast'],
    context: 128_000,
    pricing: { inputPer1M: 0.2, outputPer1M: 0.6, currency: 'USD' },
    modalities: ['text'],
    openWeight: true,
    releaseDate: '2025-09-01',
    apiModelString: 'mistral-small-latest',
    playgroundUrl: 'https://console.mistral.ai',
    docsUrl: 'https://docs.mistral.ai',
    license: 'Apache-2.0',
    parameters: 24,
    videos: [
      { title: 'Mistral Small: ligero y open-weight europeo', url: 'https://www.youtube.com/results?search_query=mistral+small+open+weight+budget+model', source: 'YouTube' },
    ],
    notes: 'SLM europeo open-weight Apache-2.0. Solo 24B params pero rinde bien para su tamaño.',
  },

  // ── China: DeepSeek ──────────────────────────────────────────────────────
  {
    id: 'deepseek-v4-pro',
    company: 'DeepSeek', origin: 'China', kind: 'model',
    displayName: 'DeepSeek V4 Pro',
    category: ['coding', 'reasoning', 'agentic'],
    context: 128_000,
    pricing: { inputPer1M: 0.5, outputPer1M: 2, currency: 'USD', approx: true },
    modalities: ['text'],
    releaseDate: '2026-04-01',
    apiModelString: 'deepseek-v4-pro',
    playgroundUrl: 'https://platform.deepseek.com',
    docsUrl: 'https://api-docs.deepseek.com',
    openWeight: true,
    license: 'MIT',
    parameters: 1600,
    examples: [{ lang: 'python', title: 'SDK Python (OpenAI-compatible)', code: pyDeepSeek('deepseek-v4-pro') }],
    videos: [
      { title: 'DeepSeek V4 Pro: MoE de 1.6T cerca del frontera', url: 'https://www.youtube.com/results?search_query=deepseek+v4+pro+coding+review+benchmark', source: 'YouTube' },
    ],
    notes: 'Flagship MoE de 1.6T params, MIT license. Rendimiento cercano al frontera a fracción del coste. Precio aproximado.',
    benchmarks: { sweBenchPro: 68.5 },
  },
  {
    id: 'deepseek-v4-flash',
    company: 'DeepSeek', origin: 'China', kind: 'model',
    displayName: 'DeepSeek V4 Flash',
    category: ['budget', 'fast', 'coding'],
    context: 128_000,
    pricing: { inputPer1M: 0.14, outputPer1M: 0.5, currency: 'USD', approx: true },
    modalities: ['text'],
    releaseDate: '2026-04-01',
    apiModelString: 'deepseek-v4-flash',
    playgroundUrl: 'https://platform.deepseek.com',
    docsUrl: 'https://api-docs.deepseek.com',
    examples: [{ lang: 'bash', title: 'API (OpenAI-compatible)', code: curlOpenAICompat('https://api.deepseek.com/v1', 'deepseek-v4-flash') }],
    videos: [
      { title: 'DeepSeek V4 Flash: el modelo más barato del mercado', url: 'https://www.youtube.com/results?search_query=deepseek+v4+flash+cheapest+model+coding', source: 'YouTube' },
    ],
    notes: 'El flagship más barato del mercado: 0,14$/M entrada. Ideal para alto volumen. Salida aproximada.',
  },
  {
    id: 'deepseek-v3',
    company: 'DeepSeek', origin: 'China', kind: 'model',
    displayName: 'DeepSeek V3',
    category: ['coding', 'reasoning', 'budget'],
    context: 128_000,
    pricing: { inputPer1M: 0.27, outputPer1M: 1.1, currency: 'USD' },
    modalities: ['text'],
    openWeight: true,
    releaseDate: '2025-03-24',
    apiModelString: 'deepseek-chat',
    playgroundUrl: 'https://platform.deepseek.com',
    docsUrl: 'https://api-docs.deepseek.com',
    license: 'MIT',
    parameters: 685,
    examples: [{ lang: 'python', title: 'SDK Python (OpenAI-compatible)', code: pyDeepSeek('deepseek-chat') }],
    videos: [
      { title: 'DeepSeek V3: open-weight fuerte en código y matemáticas', url: 'https://www.youtube.com/results?search_query=deepseek+v3+open+weight+coding+review', source: 'YouTube' },
    ],
    notes: 'Open-weight MIT, fuerte en código y matemáticas a coste mínimo. 685B MoE (37B activos).',
  },

  // ── China: Alibaba / Qwen ────────────────────────────────────────────────
  {
    id: 'qwen-3-6-plus',
    company: 'Alibaba', origin: 'China', kind: 'model',
    displayName: 'Qwen 3.6 Plus',
    category: ['coding', 'agentic', 'general'],
    context: 1_000_000,
    pricing: { inputPer1M: 0.5, outputPer1M: 3, currency: 'USD' },
    modalities: ['text', 'image'],
    releaseDate: '2026-05-01',
    apiModelString: 'qwen3.6-plus',
    playgroundUrl: 'https://chat.qwen.ai',
    docsUrl: 'https://www.alibabacloud.com/help/en/model-studio/',
    examples: [{ lang: 'python', title: 'SDK Python (OpenAI-compatible)', code: pyQwen('qwen3.6-plus') }],
    videos: [
      { title: 'Qwen 3.6 Plus: líder open-weight en coding agéntico', url: 'https://www.youtube.com/results?search_query=qwen+3.6+plus+coding+agentic+review+2026', source: 'YouTube' },
    ],
    notes: 'Uno de los líderes de tokens de coding en OpenRouter. Contexto 1M, excelente en tool-calling.',
  },
  {
    id: 'qwen-3-5',
    company: 'Alibaba', origin: 'China', kind: 'model',
    displayName: 'Qwen3.5 (open-weight)',
    category: ['general', 'coding', 'budget'],
    context: 131_000,
    pricing: { inputPer1M: 0.3, outputPer1M: 0.8, currency: 'USD', note: 'Apache-2.0: gratis en self-host.' },
    modalities: ['text'],
    openWeight: true,
    releaseDate: '2026-01-15',
    apiModelString: 'qwen3.5',
    playgroundUrl: 'https://chat.qwen.ai',
    docsUrl: 'https://www.alibabacloud.com/help/en/model-studio/',
    license: 'Apache-2.0',
    examples: [{ lang: 'python', title: 'SDK Python (OpenAI-compatible)', code: pyQwen('qwen3.5') }],
    videos: [
      { title: 'Qwen3.5: el mejor open-weight multilingüe', url: 'https://www.youtube.com/results?search_query=qwen+3.5+open+weight+multilingual+coding+review', source: 'YouTube' },
      { title: 'Ejecutar Qwen3.5 en local con Ollama', url: 'https://www.youtube.com/results?search_query=qwen+3.5+ollama+local+tutorial', source: 'YouTube' },
    ],
    notes: 'Apache-2.0, el más fuerte en multilingüe CJK (chino/japonés/coreano). Ideal para ejecutar en local.',
  },

  // ── China: Zhipu / GLM ───────────────────────────────────────────────────
  {
    id: 'glm-5',
    company: 'Zhipu', origin: 'China', kind: 'model',
    displayName: 'GLM-5',
    category: ['coding', 'agentic', 'reasoning'],
    context: 200_000,
    pricing: { inputPer1M: 0.6, outputPer1M: 2.2, currency: 'USD', approx: true },
    modalities: ['text'],
    openWeight: true,
    releaseDate: '2026-04-15',
    apiModelString: 'glm-5',
    playgroundUrl: 'https://chat.z.ai',
    docsUrl: 'https://docs.z.ai',
    videos: [
      { title: 'GLM-5: top open-weight en SWE-bench para coding agéntico', url: 'https://www.youtube.com/results?search_query=glm+5+zhipu+swe+bench+coding+agentic', source: 'YouTube' },
    ],
    notes: '~77,8% en SWE-bench Verified: top open-weight en coding agéntico. Precio aproximado. Competidor directo de Kimi K2.6.',
    benchmarks: { sweBenchPro: 77.8 },
  },

  // ── China: Moonshot / Kimi ───────────────────────────────────────────────
  {
    id: 'kimi-k2-6',
    company: 'Moonshot', origin: 'China', kind: 'model',
    displayName: 'Kimi K2.6',
    category: ['agentic', 'coding', 'reasoning'],
    context: 262_000,
    pricing: { inputPer1M: 0.6, outputPer1M: 2.5, currency: 'USD', approx: true },
    modalities: ['text'],
    releaseDate: '2026-04-15',
    apiModelString: 'kimi-k2.6',
    playgroundUrl: 'https://platform.moonshot.ai',
    docsUrl: 'https://platform.moonshot.ai/docs',
    videos: [
      { title: 'Kimi K2.6: Agent Swarm y 300 sub-agentes en paralelo', url: 'https://www.youtube.com/results?search_query=kimi+k2+agent+swarm+coding+moonshot', source: 'YouTube' },
    ],
    notes: 'Contexto 262K y "Agent Swarm" (hasta 300 sub-agentes en paralelo). Líder en benchmarks agénticos open-weight. Precio aproximado.',
    benchmarks: { sweBenchPro: 71.6 },
  },

  // ── China: MiniMax ───────────────────────────────────────────────────────
  {
    id: 'minimax-m2-5',
    company: 'MiniMax', origin: 'China', kind: 'model',
    displayName: 'MiniMax M2.5',
    category: ['coding', 'agentic', 'budget'],
    context: 1_000_000,
    pricing: { inputPer1M: 0.3, outputPer1M: 1.2, currency: 'USD', approx: true },
    modalities: ['text'],
    releaseDate: '2026-03-01',
    apiModelString: 'minimax-m2.5',
    playgroundUrl: 'https://www.minimax.io',
    docsUrl: 'https://www.minimax.io/platform',
    videos: [
      { title: 'MiniMax M2.5: volumen brutal de coding por su precio', url: 'https://www.youtube.com/results?search_query=minimax+m2.5+coding+budget+review', source: 'YouTube' },
    ],
    notes: 'Volumen brutal en coding por su precio. Contexto 1M. Precio aproximado.',
  },

  // ── China: Xiaomi / MiMo ─────────────────────────────────────────────────
  {
    id: 'mimo-v2-pro',
    company: 'Xiaomi', origin: 'China', kind: 'model',
    displayName: 'MiMo-V2-Pro',
    category: ['coding', 'agentic'],
    context: 256_000,
    pricing: { inputPer1M: 0.3, outputPer1M: 1.2, currency: 'USD', approx: true },
    modalities: ['text'],
    openWeight: true,
    releaseDate: '2026-04-01',
    apiModelString: 'mimo-v2-pro',
    docsUrl: 'https://github.com/XiaomiMiMo',
    license: 'Apache-2.0',
    videos: [
      { title: 'MiMo V2 Pro: líder de tokens en OpenRouter', url: 'https://www.youtube.com/results?search_query=mimo+v2+pro+xiaomi+coding+openrouter', source: 'YouTube' },
    ],
    notes: 'Uno de los líderes de tokens de coding en OpenRouter. Open-weight Apache-2.0. Precio aproximado.',
  },

  // ── China: Baidu / ERNIE ─────────────────────────────────────────────────
  {
    id: 'ernie-5',
    company: 'Baidu', origin: 'China', kind: 'model',
    displayName: 'ERNIE 5',
    category: ['general', 'reasoning', 'multimodal'],
    context: 128_000,
    pricing: { inputPer1M: 0.4, outputPer1M: 1.6, currency: 'USD', approx: true },
    modalities: ['text', 'image'],
    releaseDate: '2026-01-01',
    playgroundUrl: 'https://yiyan.baidu.com',
    docsUrl: 'https://cloud.baidu.com/doc/WENXINWORKSHOP/index.html',
    videos: [
      { title: 'ERNIE 5: el flagship de Baidu', url: 'https://www.youtube.com/results?search_query=ernie+5+baidu+ai+review', source: 'YouTube' },
    ],
    notes: 'Gran ecosistema en China. Disponible principalmente vía Baidu Cloud. Precio aproximado.',
  },

  // ── China: Tencent / Hunyuan ─────────────────────────────────────────────
  {
    id: 'hunyuan-large',
    company: 'Tencent', origin: 'China', kind: 'model',
    displayName: 'Hunyuan Large',
    category: ['general', 'multimodal'],
    context: 256_000,
    pricing: { inputPer1M: 0.4, outputPer1M: 1.5, currency: 'USD', approx: true },
    modalities: ['text', 'image'],
    openWeight: true,
    releaseDate: '2025-11-01',
    docsUrl: 'https://cloud.tencent.com/document/product/1729',
    license: 'Tencent Hunyuan',
    videos: [
      { title: 'Hunyuan Large: open-weight multimodal de Tencent', url: 'https://www.youtube.com/results?search_query=hunyuan+large+tencent+open+weight+review', source: 'YouTube' },
    ],
    notes: 'Open-weight y multimodal, integrado en Tencent Cloud. Precio aproximado.',
  },

  // ── China: StepFun / Step ────────────────────────────────────────────────
  {
    id: 'step-3-5-flash',
    company: 'StepFun', origin: 'China', kind: 'model',
    displayName: 'Step 3.5 Flash',
    category: ['budget', 'fast', 'multimodal'],
    context: 128_000,
    pricing: { inputPer1M: 0.2, outputPer1M: 0.8, currency: 'USD', approx: true },
    modalities: ['text', 'image'],
    releaseDate: '2026-02-01',
    docsUrl: 'https://platform.stepfun.com',
    videos: [
      { title: 'Step Flash: económico y multimodal', url: 'https://www.youtube.com/results?search_query=stepfun+step+flash+budget+multimodal', source: 'YouTube' },
    ],
    notes: 'Flash económico y multimodal. Precio aproximado.',
  },

  // ══════════════════════════════════════════════════════════════════════════
  //  HERRAMIENTAS Y AGENTES DE CODING
  // ══════════════════════════════════════════════════════════════════════════

  // ── OpenCode ─────────────────────────────────────────────────────────────
  {
    id: 'opencode',
    company: 'OpenCode', origin: 'Open', kind: 'tool',
    displayName: 'OpenCode',
    category: ['coding', 'agentic', 'tool'],
    context: null,
    pricing: { inputPer1M: null, outputPer1M: null, note: 'Software gratis (MIT). Pagas solo el modelo/proveedor que conectes.' },
    modalities: ['text'],
    openWeight: true,
    releaseDate: '2025-06-01',
    playgroundUrl: 'https://opencode.ai',
    docsUrl: 'https://github.com/sst/opencode',
    license: 'MIT',
    examples: [{
      lang: 'bash', title: 'Instalar y usar',
      code: `# Instalación
curl -fsSL https://opencode.ai/install | bash

# Lanzar en tu repo (elige modelo con /models)
cd mi-proyecto && opencode`,
    }],
    videos: [
      { title: 'OpenCode: agente de código open-source en terminal', url: 'https://www.youtube.com/results?search_query=opencode+sst+ai+coding+agent+terminal', source: 'YouTube' },
      { title: 'OpenCode vs Claude Code vs Aider: comparación de agentes', url: 'https://www.youtube.com/results?search_query=opencode+vs+claude+code+vs+aider+comparison', source: 'YouTube' },
    ],
    notes: 'Agente open-source de terminal (+150K★). Soporta 75+ modelos: Anthropic, OpenAI, Google, Grok, OpenRouter, Ollama local y cualquier endpoint OpenAI-compatible.',
  },

  // ── Cursor ───────────────────────────────────────────────────────────────
  {
    id: 'cursor',
    company: 'Cursor', origin: 'US', kind: 'tool',
    displayName: 'Cursor',
    category: ['coding', 'agentic', 'tool'],
    context: null,
    pricing: { inputPer1M: null, outputPer1M: null, note: 'Hobby: gratis (limitado). Pro: 20$/mes. Business: 40$/usuario/mes. Requests premium según modelo.' },
    modalities: ['text', 'image'],
    releaseDate: '2023-03-01',
    playgroundUrl: 'https://cursor.com',
    docsUrl: 'https://docs.cursor.com',
    examples: [{
      lang: 'bash', title: 'Abrir un proyecto',
      code: `# Descargar desde cursor.com e instalar
# Abrir tu proyecto como en VS Code
cursor /ruta/a/mi-proyecto

# Usar Cmd+K / Ctrl+K para generar código inline
# Usar Cmd+L / Ctrl+L para chat con contexto de repo`,
    }],
    videos: [
      { title: 'Cursor: el IDE AI-native — tutorial completo', url: 'https://www.youtube.com/results?search_query=cursor+ai+ide+tutorial+completo+2026', source: 'YouTube' },
      { title: 'Cursor vs VS Code + Copilot: ¿merece la pena?', url: 'https://www.youtube.com/results?search_query=cursor+vs+vscode+copilot+comparison+2026', source: 'YouTube' },
      { title: 'Cursor Agent Mode: multi-file refactoring', url: 'https://www.youtube.com/results?search_query=cursor+agent+mode+refactoring+demo', source: 'YouTube' },
    ],
    notes: 'IDE AI-native (fork VS Code). El estándar de facto para coding con IA. Multimodelo (Claude, GPT, Gemini). Excelente tab completion y refactoring multi-archivo.',
  },

  // ── Windsurf ─────────────────────────────────────────────────────────────
  {
    id: 'windsurf',
    company: 'Windsurf', origin: 'US', kind: 'tool',
    displayName: 'Windsurf',
    category: ['coding', 'agentic', 'tool'],
    context: null,
    pricing: { inputPer1M: null, outputPer1M: null, note: 'Free tier disponible. Pro: 15$/mes. Teams: 30$/usuario/mes.' },
    modalities: ['text'],
    releaseDate: '2024-11-01',
    playgroundUrl: 'https://windsurf.com',
    docsUrl: 'https://docs.windsurf.com',
    examples: [{
      lang: 'bash', title: 'Instalar y usar Cascade',
      code: `# Descargar desde windsurf.com
# Abrir tu proyecto
# Activar "Cascade" para flujo agéntico autónomo
# El agente planifica, ejecuta y verifica cambios`,
    }],
    videos: [
      { title: 'Windsurf: IDE con flujo agéntico "Cascade"', url: 'https://www.youtube.com/results?search_query=windsurf+cascade+agentic+ide+tutorial', source: 'YouTube' },
      { title: 'Windsurf vs Cursor: ¿cuál es mejor?', url: 'https://www.youtube.com/results?search_query=windsurf+vs+cursor+comparison+2026', source: 'YouTube' },
    ],
    notes: 'IDE agéntico con "Cascade": el agente ejecuta tareas multi-paso autónomamente. Buen precio y muy bueno para prototyping rápido.',
  },

  // ── Jules (Google) ───────────────────────────────────────────────────────
  {
    id: 'jules',
    company: 'GoogleTools', origin: 'US', kind: 'tool',
    displayName: 'Jules (Google)',
    category: ['agentic', 'coding', 'tool'],
    context: null,
    pricing: { inputPer1M: null, outputPer1M: null, note: 'Incluido en Google Cloud / Gemini Code Assist. Pricing por uso de Gemini.' },
    modalities: ['text'],
    releaseDate: '2025-12-01',
    playgroundUrl: 'https://jules.google',
    docsUrl: 'https://jules.google',
    examples: [{
      lang: 'bash', title: 'Asignar una tarea a Jules',
      code: `# Conectar tu repo de GitHub a Jules
# Asignar una tarea desde la interfaz web:
# "Fix the failing tests in auth module"
# Jules clona el repo, hace los cambios, ejecuta tests
# y crea un PR para tu revisión`,
    }],
    videos: [
      { title: 'Jules: agente autónomo de coding de Google', url: 'https://www.youtube.com/results?search_query=jules+google+autonomous+coding+agent+demo', source: 'YouTube' },
      { title: 'Jules: del issue de GitHub al PR automático', url: 'https://www.youtube.com/results?search_query=jules+google+github+pull+request+automated', source: 'YouTube' },
    ],
    notes: 'Agente autónomo asíncrono. Le asignas una tarea, clona tu repo en un VM de Google Cloud, ejecuta cambios + tests, y crea un PR. Integración directa con GitHub.',
  },

  // ── Aider ────────────────────────────────────────────────────────────────
  {
    id: 'aider',
    company: 'Aider', origin: 'Open', kind: 'tool',
    displayName: 'Aider',
    category: ['coding', 'agentic', 'tool'],
    context: null,
    pricing: { inputPer1M: null, outputPer1M: null, note: 'Software gratis (Apache-2.0). Pagas solo el modelo que uses por API.' },
    modalities: ['text'],
    openWeight: true,
    releaseDate: '2023-05-01',
    playgroundUrl: 'https://aider.chat',
    docsUrl: 'https://aider.chat/docs/',
    license: 'Apache-2.0',
    examples: [{
      lang: 'bash', title: 'Instalar y usar',
      code: `# Instalación
pip install aider-chat

# Lanzar en tu repo con Claude
cd mi-proyecto
aider --model claude-sonnet-4-6

# Ejemplo de prompt
aider> Añade validación de email al formulario de registro`,
    }],
    videos: [
      { title: 'Aider: pair programming con IA en terminal', url: 'https://www.youtube.com/results?search_query=aider+chat+pair+programming+ai+terminal+tutorial', source: 'YouTube' },
      { title: 'Aider Leaderboard: ranking de modelos para coding', url: 'https://www.youtube.com/results?search_query=aider+leaderboard+best+coding+models', source: 'YouTube' },
    ],
    notes: 'El OG de los agentes de terminal. Apache-2.0. Muy buena integración con Git (commits automáticos). Mantiene su propio leaderboard de modelos para coding.',
  },

  // ── Cline ────────────────────────────────────────────────────────────────
  {
    id: 'cline',
    company: 'Cline', origin: 'Open', kind: 'tool',
    displayName: 'Cline',
    category: ['coding', 'agentic', 'tool'],
    context: null,
    pricing: { inputPer1M: null, outputPer1M: null, note: 'Software gratis (Apache-2.0). Pagas solo el modelo vía API key propia.' },
    modalities: ['text', 'image'],
    openWeight: true,
    releaseDate: '2024-07-01',
    playgroundUrl: 'https://cline.bot',
    docsUrl: 'https://github.com/cline/cline',
    license: 'Apache-2.0',
    examples: [{
      lang: 'bash', title: 'Instalar',
      code: `# Instalar extensión "Cline" en VS Code
# Configurar API key (Anthropic, OpenAI, etc.)
# Abrir panel lateral y pedir tareas:
# "Refactoriza el módulo de autenticación para usar JWT"
# Cline edita archivos, ejecuta terminal, y verifica`,
    }],
    videos: [
      { title: 'Cline: extensión agéntica de VS Code', url: 'https://www.youtube.com/results?search_query=cline+vscode+extension+agentic+coding+tutorial', source: 'YouTube' },
      { title: 'Cline vs Copilot vs Cursor: comparación en VS Code', url: 'https://www.youtube.com/results?search_query=cline+vs+copilot+vs+cursor+vscode+comparison', source: 'YouTube' },
    ],
    notes: 'Extensión agéntica para VS Code. Puede editar archivos, ejecutar comandos en terminal, hacer screenshots del navegador y usar MCP. Trae tu propia API key.',
  },

  // ── Claude Code ──────────────────────────────────────────────────────────
  {
    id: 'claude-code',
    company: 'Anthropic', origin: 'US', kind: 'tool',
    displayName: 'Claude Code',
    category: ['coding', 'agentic', 'tool'],
    context: null,
    pricing: { inputPer1M: null, outputPer1M: null, note: 'Incluido en planes Claude Pro (20$/mes) y Max (100-200$/mes), o pago por API (tokens de Claude).' },
    modalities: ['text', 'image'],
    releaseDate: '2025-02-01',
    playgroundUrl: 'https://claude.com/claude-code',
    docsUrl: 'https://docs.claude.com/claude-code',
    examples: [{
      lang: 'bash', title: 'Instalar y usar',
      code: `# Instalación
npm install -g @anthropic-ai/claude-code

# Lanzar en tu repo
cd mi-proyecto && claude

# Pedir una tarea agéntica
claude> Añade tests al módulo de autenticación y ejecútalos`,
    }],
    videos: [
      { title: 'Claude Code: agente de terminal de Anthropic — tutorial', url: 'https://www.youtube.com/results?search_query=claude+code+anthropic+terminal+agent+tutorial+2026', source: 'YouTube' },
      { title: 'Claude Code vs Cursor vs Codex: comparación de agentes', url: 'https://www.youtube.com/results?search_query=claude+code+vs+cursor+vs+codex+comparison', source: 'YouTube' },
    ],
    notes: 'CLI agéntico oficial de Anthropic. Trabaja directamente en tu terminal y repo: edita archivos, ejecuta comandos y tests, usa MCP y planifica tareas multi-paso. También en VS Code/JetBrains, web y app de escritorio.',
  },

  // ── Codex CLI (OpenAI) ───────────────────────────────────────────────────
  {
    id: 'codex-cli',
    company: 'OpenAI', origin: 'US', kind: 'tool',
    displayName: 'Codex CLI (OpenAI)',
    category: ['coding', 'agentic', 'tool'],
    context: null,
    pricing: { inputPer1M: null, outputPer1M: null, note: 'CLI gratuito (open-source). Incluido en ChatGPT Plus/Pro/Team, o pago por API (tokens de OpenAI).' },
    modalities: ['text', 'image'],
    openWeight: true,
    releaseDate: '2025-04-01',
    playgroundUrl: 'https://openai.com/codex',
    docsUrl: 'https://github.com/openai/codex',
    license: 'Apache-2.0',
    examples: [{
      lang: 'bash', title: 'Instalar y usar',
      code: `# Instalación
npm install -g @openai/codex

# Lanzar en tu repo
cd mi-proyecto && codex

# Pedir un cambio
codex> Refactoriza utils.ts para extraer la lógica de fechas`,
    }],
    videos: [
      { title: 'Codex CLI de OpenAI: agente de terminal — tutorial', url: 'https://www.youtube.com/results?search_query=openai+codex+cli+terminal+agent+tutorial+2026', source: 'YouTube' },
      { title: 'Codex CLI vs Claude Code: ¿cuál es mejor?', url: 'https://www.youtube.com/results?search_query=openai+codex+cli+vs+claude+code+comparison', source: 'YouTube' },
    ],
    notes: 'Agente de terminal open-source (Apache-2.0) de OpenAI; el CLI es abierto pero usa modelos propietarios de OpenAI (familia GPT/Codex). Edita archivos, ejecuta comandos y trabaja sobre tu repo local.',
  },

  // ── Gemini CLI (Google) ──────────────────────────────────────────────────
  {
    id: 'gemini-cli',
    company: 'GoogleTools', origin: 'US', kind: 'tool',
    displayName: 'Gemini CLI',
    category: ['coding', 'agentic', 'tool'],
    context: null,
    pricing: { inputPer1M: null, outputPer1M: null, note: 'CLI gratuito (open-source). Tier gratis generoso con cuenta Google; pago por API para más uso (tokens de Gemini).' },
    modalities: ['text', 'image'],
    openWeight: true,
    releaseDate: '2025-06-01',
    playgroundUrl: 'https://github.com/google-gemini/gemini-cli',
    docsUrl: 'https://github.com/google-gemini/gemini-cli',
    license: 'Apache-2.0',
    examples: [{
      lang: 'bash', title: 'Instalar y usar',
      code: `# Instalación
npm install -g @google/gemini-cli

# Lanzar en tu repo
cd mi-proyecto && gemini

# Pedir una tarea
gemini> Explica la arquitectura de este proyecto y sugiere mejoras`,
    }],
    videos: [
      { title: 'Gemini CLI: agente open-source de Google — tutorial', url: 'https://www.youtube.com/results?search_query=google+gemini+cli+open+source+agent+tutorial+2026', source: 'YouTube' },
      { title: 'Gemini CLI vs Claude Code vs Codex', url: 'https://www.youtube.com/results?search_query=gemini+cli+vs+claude+code+vs+codex+comparison', source: 'YouTube' },
    ],
    notes: 'Agente de terminal open-source (Apache-2.0) de Google con tier gratis muy amplio. Usa modelos Gemini; aprovecha el contexto largo de Gemini para razonar sobre repos grandes.',
  },

  // ── Devin (Cognition) ────────────────────────────────────────────────────
  {
    id: 'devin',
    company: 'Cognition', origin: 'US', kind: 'tool',
    displayName: 'Devin (Cognition)',
    category: ['agentic', 'coding', 'tool'],
    context: null,
    pricing: { inputPer1M: null, outputPer1M: null, note: 'Core: desde 20$/mes con ACUs por uso. Team: 500$/mes. Pago por trabajo realizado (ACU).' },
    modalities: ['text'],
    releaseDate: '2025-01-01',
    playgroundUrl: 'https://devin.ai',
    docsUrl: 'https://docs.devin.ai',
    examples: [{
      lang: 'bash', title: 'Asignar una tarea a Devin',
      code: `# Conectar tu repo de GitHub a Devin (web/Slack)
# Asignar una tarea en lenguaje natural:
# "Migra el módulo de pagos a la nueva API de Stripe"
# Devin planifica, escribe código en su propio entorno,
# ejecuta tests y abre un PR para tu revisión`,
    }],
    videos: [
      { title: 'Devin: el ingeniero de software autónomo de Cognition', url: 'https://www.youtube.com/results?search_query=devin+cognition+autonomous+software+engineer+demo+2026', source: 'YouTube' },
      { title: 'Devin vs Jules: agentes asíncronos comparados', url: 'https://www.youtube.com/results?search_query=devin+vs+jules+async+coding+agent+comparison', source: 'YouTube' },
    ],
    notes: 'Ingeniero de software autónomo asíncrono. Trabaja en su propio entorno en la nube (editor, navegador y terminal), planifica tareas completas y abre PRs. Integración con GitHub, Slack y Jira.',
  },

  // ── Zed ──────────────────────────────────────────────────────────────────
  {
    id: 'zed',
    company: 'Zed', origin: 'US', kind: 'tool',
    displayName: 'Zed',
    category: ['coding', 'agentic', 'tool'],
    context: null,
    pricing: { inputPer1M: null, outputPer1M: null, note: 'Editor gratis (open-source). Funciones de IA: tier gratis + planes de pago, o trae tu propia API key.' },
    modalities: ['text'],
    openWeight: true,
    releaseDate: '2024-03-01',
    playgroundUrl: 'https://zed.dev',
    docsUrl: 'https://zed.dev/docs',
    license: 'GPL-3.0 / AGPL-3.0',
    examples: [{
      lang: 'bash', title: 'Instalar y usar',
      code: `# Descargar desde zed.dev (o brew install zed)
# Abrir tu proyecto
zed /ruta/a/mi-proyecto

# Usar el "Agent Panel" para tareas multi-archivo
# Soporta múltiples proveedores de modelos`,
    }],
    videos: [
      { title: 'Zed: el editor agéntico en Rust — tutorial', url: 'https://www.youtube.com/results?search_query=zed+editor+rust+agentic+ai+tutorial+2026', source: 'YouTube' },
      { title: 'Zed vs Cursor: rendimiento y modo agéntico', url: 'https://www.youtube.com/results?search_query=zed+vs+cursor+performance+agent+comparison', source: 'YouTube' },
    ],
    notes: 'Editor de código open-source escrito en Rust, ultrarrápido y colaborativo. Su "Agent Panel" permite tareas agénticas multi-archivo con varios proveedores de modelos. Buena alternativa ligera a IDEs basados en VS Code.',
  },

  // ── Amp (Sourcegraph) ────────────────────────────────────────────────────
  {
    id: 'amp',
    company: 'Sourcegraph', origin: 'US', kind: 'tool',
    displayName: 'Amp (Sourcegraph)',
    category: ['coding', 'agentic', 'tool'],
    context: null,
    pricing: { inputPer1M: null, outputPer1M: null, note: 'Pago por uso (créditos). Tier gratis limitado; planes de equipo disponibles.' },
    modalities: ['text', 'image'],
    releaseDate: '2025-05-01',
    playgroundUrl: 'https://ampcode.com',
    docsUrl: 'https://ampcode.com/manual',
    examples: [{
      lang: 'bash', title: 'Instalar y usar',
      code: `# Instalación del CLI
npm install -g @sourcegraph/amp

# Lanzar en tu repo (o usar la extensión de VS Code)
cd mi-proyecto && amp

# Pedir una tarea agéntica sobre tu base de código
amp> Encuentra y corrige todos los usos obsoletos de la API v1`,
    }],
    videos: [
      { title: 'Amp de Sourcegraph: agente de coding — tutorial', url: 'https://www.youtube.com/results?search_query=sourcegraph+amp+coding+agent+tutorial+2026', source: 'YouTube' },
      { title: 'Amp vs Claude Code: agentes para repos grandes', url: 'https://www.youtube.com/results?search_query=sourcegraph+amp+vs+claude+code+comparison', source: 'YouTube' },
    ],
    notes: 'Agente de coding de Sourcegraph, disponible como CLI y extensión (VS Code, etc.). Aprovecha la búsqueda de código de Sourcegraph para razonar sobre bases de código grandes. Multimodelo.',
  },

  // ── Roo Code ─────────────────────────────────────────────────────────────
  {
    id: 'roo-code',
    company: 'RooCode', origin: 'Open', kind: 'tool',
    displayName: 'Roo Code',
    category: ['coding', 'agentic', 'tool'],
    context: null,
    pricing: { inputPer1M: null, outputPer1M: null, note: 'Software gratis (Apache-2.0). Pagas solo el modelo vía API key propia.' },
    modalities: ['text', 'image'],
    openWeight: true,
    releaseDate: '2025-01-01',
    playgroundUrl: 'https://roocode.com',
    docsUrl: 'https://docs.roocode.com',
    license: 'Apache-2.0',
    examples: [{
      lang: 'bash', title: 'Instalar',
      code: `# Instalar la extensión "Roo Code" en VS Code
# Configurar API key (Anthropic, OpenAI, OpenRouter, local…)
# Elegir un "modo" (Code, Architect, Ask, Debug…) y pedir:
# "Implementa el endpoint /users con validación y tests"
# Roo Code edita archivos, ejecuta comandos y verifica`,
    }],
    videos: [
      { title: 'Roo Code: extensión agéntica para VS Code — tutorial', url: 'https://www.youtube.com/results?search_query=roo+code+vscode+agentic+extension+tutorial+2026', source: 'YouTube' },
      { title: 'Roo Code vs Cline: ¿qué fork elegir?', url: 'https://www.youtube.com/results?search_query=roo+code+vs+cline+comparison', source: 'YouTube' },
    ],
    notes: 'Extensión agéntica open-source (Apache-2.0) para VS Code, fork de Cline. Añade "modos" personalizables (Code, Architect, Debug…), soporte multimodelo y MCP. Trae tu propia API key; puede usar modelos locales.',
  },

  // ── Trae (ByteDance) ─────────────────────────────────────────────────────
  {
    id: 'trae',
    company: 'Trae', origin: 'China', kind: 'tool',
    displayName: 'Trae',
    category: ['coding', 'agentic', 'tool'],
    context: null,
    pricing: { inputPer1M: null, outputPer1M: null, note: 'Free tier disponible. Pro: ~10$/mes. Modelos incluidos según plan.' },
    modalities: ['text', 'image'],
    releaseDate: '2025-01-01',
    playgroundUrl: 'https://trae.ai',
    docsUrl: 'https://docs.trae.ai',
    examples: [{
      lang: 'bash', title: 'Instalar y usar',
      code: `# Descargar desde trae.ai e instalar
# Abrir tu proyecto (similar a VS Code)
# Usar el modo "Builder" para tareas agénticas
# Multimodelo (Claude, GPT, modelos propios)`,
    }],
    videos: [
      { title: 'Trae: el IDE AI-native de ByteDance — tutorial', url: 'https://www.youtube.com/results?search_query=trae+ai+ide+bytedance+tutorial+2026', source: 'YouTube' },
      { title: 'Trae vs Cursor vs Windsurf: comparación de IDEs', url: 'https://www.youtube.com/results?search_query=trae+vs+cursor+vs+windsurf+comparison', source: 'YouTube' },
    ],
    notes: 'IDE AI-native de ByteDance (fork de VS Code) con modo agéntico "Builder". Multimodelo (Claude, GPT y modelos propios) y con tier gratis competitivo. Origen: China.',
  },
];

// ─────────────────────────────────────────────────────────────────────────
//  Popularidad / uso relativo — curado a mano (0-100, mayor = más usado).
//  Señales: volumen de tokens de coding en OpenRouter, adopción de familias
//  (Claude/GPT/Gemini), tracción open-weight (Qwen/DeepSeek/GLM) y de las
//  herramientas (Cursor, Copilot, OpenCode). Editable según evolucione el uso.
// ─────────────────────────────────────────────────────────────────────────
const POPULARITY: Record<string, number> = {
  // Modelos
  'claude-opus-4-8': 95, 'claude-sonnet-4-6': 92, 'claude-haiku-4-5': 70,
  'gpt-5-5': 93, 'gpt-5-5-pro': 60, 'gpt-5-4': 78, 'gpt-5-3-codex': 80, 'gpt-4-1-nano': 65,
  'gemini-3-1-pro': 88, 'gemini-3-5-flash': 74, 'gemini-3-flash': 62, 'gemini-3-1-flash-lite': 55,
  'phi-4': 45, 'mai-code-1-flash': 40,
  'grok-3': 68, 'grok-3-mini': 48,
  'llama-4-maverick': 66,
  'mistral-large-3': 58, 'mistral-small': 50,
  'deepseek-v4-pro': 82, 'deepseek-v4-flash': 72, 'deepseek-v3': 80,
  'qwen-3-6-plus': 85, 'qwen-3-5': 78,
  'glm-5': 80, 'kimi-k2-6': 70, 'minimax-m2-5': 68, 'mimo-v2-pro': 72,
  'ernie-5': 42, 'hunyuan-large': 38, 'step-3-5-flash': 30,
  // Herramientas / agentes
  'github-copilot': 90, 'cursor': 95, 'windsurf': 75, 'jules': 58,
  'opencode': 80, 'aider': 70, 'cline': 68,
  'claude-code': 92, 'codex-cli': 78, 'gemini-cli': 62, 'devin': 55,
  'zed': 60, 'amp': 45, 'roo-code': 58, 'trae': 50,
};

// ─────────────────────────────────────────────────────────────────────────
//  Fusión con el catálogo autoimportado (auto-models.ts).
//  Reglas: lo curado tiene prioridad absoluta. De lo auto solo se toma:
//   1) refresco de specs (precio/contexto/benchmarks/parámetros) de un modelo
//      curado cuando ese dato falta o está marcado `approx`;
//   2) modelos nuevos del mercado que no casen con ningún curado.
//  Nunca se tocan examples, videos, notes, displayName ni popularity curados.
// ─────────────────────────────────────────────────────────────────────────

/** Empresas: las curadas mandan; se añaden las de creators no catalogados. */
export const companies: Record<string, CompanyMeta> = {
  ...autoCompanies,
  ...curatedCompanies,
};

/** Clave de enlace de un modelo curado con el Intelligence Index. */
const iiKeyOf = (m: Model): string => m.iiSlug ?? m.id;

/** Refresca un modelo curado con specs frescas, sin pisar lo ya definido. */
function refreshCurated(m: Model): Model {
  const spec = autoSpecs[iiKeyOf(m)];
  if (!spec) return m;
  const next: Model = { ...m };
  // Precio: solo si falta o el curado es aproximado.
  if (spec.pricing && (!m.pricing || m.pricing.approx || m.pricing.inputPer1M == null)) {
    next.pricing = { ...m.pricing, ...spec.pricing };
  }
  // Contexto: solo si el curado no lo tiene.
  if (spec.context != null && m.context == null) next.context = spec.context;
  // Parámetros: solo si faltan.
  if (spec.parameters != null && m.parameters == null) next.parameters = spec.parameters;
  // Benchmarks de coding: rellenar los que falten (SWE-bench Pro queda curado).
  if (spec.benchmarks) {
    next.benchmarks = {
      ...spec.benchmarks,
      ...m.benchmarks, // lo curado gana
    };
  }
  return next;
}

const curatedModels: Model[] = rawModels.map((m) => ({
  ...refreshCurated(m),
  popularity: m.popularity ?? POPULARITY[m.id] ?? 30,
}));

// Conjunto de claves ya cubiertas por el catálogo curado (para dedupe).
const curatedKeys = new Set<string>();
for (const m of curatedModels) {
  curatedKeys.add(m.id);
  if (m.iiSlug) curatedKeys.add(m.iiSlug);
  if (m.apiModelString) curatedKeys.add(m.apiModelString);
}

/** Modelos autoimportados que no existen ya en el catálogo curado. */
const importedModels: Model[] = autoModels
  .filter((m) => !curatedKeys.has(m.id) && !(m.iiSlug && curatedKeys.has(m.iiSlug)))
  .map((m) => ({
    ...m,
    autoImported: true,
    popularity: POPULARITY[m.id] ?? 30,
  }));

/** Catálogo final: curado (con specs refrescadas) + modelos nuevos del mercado. */
export const models: Model[] = [...curatedModels, ...importedModels];

/** Niveles de popularidad para agrupar el catálogo. */
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
