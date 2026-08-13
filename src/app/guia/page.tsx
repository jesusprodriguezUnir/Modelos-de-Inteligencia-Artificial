import type { Metadata } from 'next';
import Link from 'next/link';
import { SiteFrame } from '@/components/layout/SiteFrame';
import { getIndexMeta } from '@/lib/catalog';

export const metadata: Metadata = {
  title: 'Guía para elegir un modelo de IA',
  description:
    'Cómo elegir un modelo de IA para programar: presupuesto, contexto, SWE-bench, open-weight y agentes.',
};

const STEPS = [
  {
    title: 'Define el trabajo, no la marca',
    body: 'Agente sobre un repo, completar funciones, revisar PRs o razonar sobre un diseño. Cada caso premia una métrica distinta.',
  },
  {
    title: 'Mira el output, no solo el input',
    body: 'El precio de salida suele ser 3–6× el de entrada. En tareas largas de agente, el output es la factura real.',
  },
  {
    title: 'El contexto es el tamaño del repo que puedes tener en cabeza',
    body: '200K llega para un servicio. 1M+ cambia el juego en monorepos. Más contexto no arregla un mal prompt.',
  },
  {
    title: 'SWE-bench no es la verdad absoluta, pero ordena el ruido',
    body: 'Úsalo para separar modelos de ingeniería de modelos de chat. Contrasta siempre con tu propio repo.',
  },
  {
    title: 'Open-weight si te importa el perímetro',
    body: 'Código privado, aire-gap o coste predecible de GPU. Empieza por Q4 y mide calidad antes de subir de cuantización.',
  },
];

export default function GuidePage() {
  const meta = getIndexMeta();
  return (
    <SiteFrame active="guia" updatedLabel={meta.fetchedLabel}>
      <main className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-signal">Guía</p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight text-head">Cómo elegir un modelo</h1>
        <p className="mt-3 text-sm leading-relaxed text-mute">
          Cinco reglas prácticas. El catálogo está hecho para aplicarlas en menos de un minuto.
        </p>
        <ol className="mt-10 space-y-6">
          {STEPS.map((step, index) => (
            <li key={step.title} className="rounded-2xl border border-line bg-elev p-5">
              <div className="font-mono text-xs text-signal">0{index + 1}</div>
              <h2 className="mt-2 text-lg font-semibold text-head">{step.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-ink">{step.body}</p>
            </li>
          ))}
        </ol>
        <Link href="/#catalogo" className="mt-8 inline-flex text-sm font-medium text-signal no-underline">
          Ir al catálogo →
        </Link>
      </main>
    </SiteFrame>
  );
}
