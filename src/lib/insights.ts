import type { Model } from '@/data/types';

export interface ModelInsights {
  strengths: string[];
  weaknesses: string[];
  useCases: string[];
}

/** Completa fortalezas, matices y casos de uso si la ficha no los trae curados. */
export function deriveInsights(model: Model): ModelInsights {
  const strengths = [...(model.strengths ?? [])];
  const weaknesses = [...(model.weaknesses ?? [])];
  const useCases = [...(model.useCases ?? [])];

  if (strengths.length === 0) {
    if ((model.benchmarks?.sweBenchPro ?? 0) >= 70) {
      strengths.push('SWE-bench alto: encaja en tareas reales de ingeniería.');
    }
    if (model.context != null && model.context >= 1_000_000) {
      strengths.push('Ventana de 1M+ tokens: útil en repos grandes y multiarchivo.');
    }
    if (model.pricing.inputPer1M != null && model.pricing.inputPer1M <= 1) {
      strengths.push('Precio de entrada muy competitivo por millón de tokens.');
    }
    if (model.openWeight) {
      strengths.push('Open-weight: puedes hospedarlo y auditar los pesos.');
    }
    if (model.category.includes('agentic')) {
      strengths.push('Pensado para flujos agénticos de coding.');
    }
    if (model.modalities.length > 1) {
      strengths.push(`Multimodal: ${model.modalities.join(', ')}.`);
    }
    if (model.category.includes('fast')) {
      strengths.push('Perfil rápido: buena opción para iterar o autocompletar.');
    }
  }

  if (weaknesses.length === 0) {
    if (model.pricing.outputPer1M != null && model.pricing.outputPer1M >= 20) {
      weaknesses.push('El output es caro: vigila el coste en tareas largas.');
    }
    if (model.context != null && model.context < 128_000) {
      weaknesses.push('Contexto relativamente corto para bases de código grandes.');
    }
    if (model.benchmarks?.sweBenchPro == null) {
      weaknesses.push('Sin SWE-bench publicado en este catálogo.');
    }
    if (!model.openWeight) {
      weaknesses.push('Cerrado: dependes de la API y de la política del proveedor.');
    }
    if (model.pricing.approx) {
      weaknesses.push('Precio aproximado: confirma siempre en la web oficial.');
    }
  }

  if (useCases.length === 0) {
    if (model.category.includes('agentic') || (model.benchmarks?.sweBenchPro ?? 0) >= 70) {
      useCases.push('Agentes de código y tareas de ingeniería de software.');
    }
    if (model.context != null && model.context >= 1_000_000) {
      useCases.push('Repositorios grandes y trabajo multiarchivo.');
    }
    if (model.pricing.inputPer1M != null && model.pricing.inputPer1M <= 2) {
      useCases.push('Prototipos, CI y volumen alto con presupuesto controlado.');
    }
    if (model.openWeight) {
      useCases.push('Despliegue local o en infraestructura propia.');
    }
    if (model.category.includes('fast')) {
      useCases.push('Autocompletado y respuestas de baja latencia.');
    }
    if (useCases.length === 0) {
      useCases.push('Uso general de programación y razonamiento.');
    }
  }

  return { strengths, weaknesses, useCases };
}
