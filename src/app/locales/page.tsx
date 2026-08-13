import type { Metadata } from 'next';
import Link from 'next/link';
import { SiteFrame } from '@/components/layout/SiteFrame';
import { getCatalogCards, getIndexMeta } from '@/lib/catalog';
import { Badge } from '@/components/ui/Badge';

export const metadata: Metadata = {
  title: 'Modelos locales open-weight',
  description:
    'Modelos de IA open-weight que puedes ejecutar en local o en tu servidor: requisitos aproximados, licencia y ficha de precios.',
};

function estimateVram(parameters?: number, explicit?: number): string {
  if (explicit) return `~${explicit} GB`;
  if (!parameters) return 'Variable';
  const q4 = Math.max(4, Math.round(parameters * 0.6));
  return `~${q4} GB (Q4)`;
}

export default function LocalesPage() {
  const meta = getIndexMeta();
  const locals = getCatalogCards().filter((model) => model.openWeight);

  return (
    <SiteFrame active="locales" updatedLabel={meta.fetchedLabel}>
      <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-signal">Open-weight</p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight text-head">Modelos locales</h1>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-mute">
          Fichas open-weight del catálogo. La VRAM es una estimación para cuantización Q4; confirma el
          runtime (Ollama, llama.cpp, vLLM) y la variante exacta antes de comprar hardware.
        </p>

        {locals.length === 0 ? (
          <div className="mt-10 rounded-2xl border border-dashed border-line2 p-10 text-center text-mute">
            No hay modelos open-weight en el catálogo ahora mismo.
          </div>
        ) : (
          <div className="mt-8 overflow-x-auto rounded-2xl border border-line bg-elev">
            <table className="min-w-[760px] w-full border-collapse text-sm">
              <thead>
                <tr className="border-b border-line text-left text-[11px] uppercase tracking-[0.12em] text-faint">
                  <th className="px-4 py-3">Modelo</th>
                  <th className="px-4 py-3">Empresa</th>
                  <th className="px-4 py-3">Contexto</th>
                  <th className="px-4 py-3">VRAM est.</th>
                  <th className="px-4 py-3">Licencia</th>
                  <th className="px-4 py-3" />
                </tr>
              </thead>
              <tbody>
                {locals.map((model) => (
                  <tr key={model.id} className="border-b border-line/70">
                    <td className="px-4 py-3 font-medium text-head">{model.displayName}</td>
                    <td className="px-4 py-3 text-mute">{model.companyName}</td>
                    <td className="px-4 py-3 font-mono text-info">{model.contextText}</td>
                    <td className="px-4 py-3 font-mono">{estimateVram(model.parameters)}</td>
                    <td className="px-4 py-3">
                      <Badge kind="open">{model.license ?? 'Open-weight'}</Badge>
                    </td>
                    <td className="px-4 py-3 text-right">
                      <Link href={`/modelos/${model.slug}`} className="text-signal no-underline">
                        Detalle
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </main>
    </SiteFrame>
  );
}
