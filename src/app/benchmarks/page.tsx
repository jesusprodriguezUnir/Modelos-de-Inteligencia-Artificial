import type { Metadata } from 'next';
import Link from 'next/link';
import { SiteFrame } from '@/components/layout/SiteFrame';
import { getCatalogCards, getIndexMeta } from '@/lib/catalog';

export const metadata: Metadata = {
  title: 'Benchmarks de coding',
  description:
    'Comparativa de SWE-bench, LiveCodeBench y HumanEval de los modelos de IA para programación.',
};

export default function BenchmarksPage() {
  const meta = getIndexMeta();
  const ranked = getCatalogCards()
    .filter((model) => model.swe != null || model.liveCodeBench != null || model.humanEval != null)
    .sort((a, b) => (b.swe ?? -1) - (a.swe ?? -1));

  return (
    <SiteFrame active="benchmarks" updatedLabel={meta.fetchedLabel}>
      <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-signal">Ranking</p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight text-head">Benchmarks</h1>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-mute">
          SWE-bench es la señal principal para coding agéntico. Los huecos significan que el proveedor o
          el índice aún no publican ese número.
        </p>

        {ranked.length === 0 ? (
          <div className="mt-10 rounded-2xl border border-dashed border-line2 p-10 text-center text-mute">
            Todavía no hay scores en el catálogo.
          </div>
        ) : (
          <div className="mt-8 overflow-x-auto rounded-2xl border border-line bg-elev">
            <table className="min-w-[720px] w-full border-collapse text-sm">
              <thead>
                <tr className="border-b border-line text-left text-[11px] uppercase tracking-[0.12em] text-faint">
                  <th className="px-4 py-3">#</th>
                  <th className="px-4 py-3">Modelo</th>
                  <th className="px-4 py-3 text-right">SWE-bench</th>
                  <th className="px-4 py-3 text-right">LiveCodeBench</th>
                  <th className="px-4 py-3 text-right">HumanEval</th>
                </tr>
              </thead>
              <tbody>
                {ranked.map((model, index) => (
                  <tr key={model.id} className="border-b border-line/70">
                    <td className="px-4 py-3 font-mono text-faint">{index + 1}</td>
                    <td className="px-4 py-3">
                      <Link href={`/modelos/${model.slug}`} className="font-medium text-head no-underline hover:text-signal">
                        {model.displayName}
                      </Link>
                      <div className="text-xs text-mute">{model.companyName}</div>
                    </td>
                    <td className="px-4 py-3 text-right font-mono text-signal">{model.sweText}</td>
                    <td className="px-4 py-3 text-right font-mono">{model.liveCodeBench ?? '—'}</td>
                    <td className="px-4 py-3 text-right font-mono">{model.humanEval ?? '—'}</td>
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
