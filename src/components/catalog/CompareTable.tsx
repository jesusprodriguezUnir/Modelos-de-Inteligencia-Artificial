import type { CatalogCard } from '@/lib/catalog';
import Link from 'next/link';

function Cell({ children, strong }: { children: React.ReactNode; strong?: boolean }) {
  return (
    <td className={`px-3 py-3 text-sm ${strong ? 'font-medium text-head' : 'text-ink'}`}>{children}</td>
  );
}

export function CompareTable({ models, onClose }: { models: CatalogCard[]; onClose: () => void }) {
  if (models.length < 2) return null;

  const rows: Array<{ label: string; render: (m: CatalogCard) => React.ReactNode }> = [
    { label: 'Proveedor', render: (m) => m.companyName },
    { label: 'Input / 1M', render: (m) => <span className="font-mono">{m.priceInText}</span> },
    { label: 'Output / 1M', render: (m) => <span className="font-mono">{m.priceOutText}</span> },
    { label: 'Contexto', render: (m) => <span className="font-mono text-info">{m.contextText}</span> },
    { label: 'SWE-bench', render: (m) => <span className="font-mono text-signal">{m.sweText}</span> },
    { label: 'Open-weight', render: (m) => (m.openWeight ? 'Sí' : 'No') },
    { label: 'Modalidad', render: (m) => m.modalities.join(', ') },
    { label: 'Lanzamiento', render: (m) => m.releaseLabel },
  ];

  return (
    <section id="comparar" className="mt-8 overflow-hidden rounded-2xl border border-line bg-elev">
      <div className="flex items-center justify-between border-b border-line px-5 py-4">
        <div>
          <h2 className="text-base font-semibold text-head">Comparación lado a lado</h2>
          <p className="text-sm text-mute">Hasta 4 modelos. Los números son por 1M de tokens.</p>
        </div>
        <button type="button" onClick={onClose} className="text-sm text-mute hover:text-head">
          Cerrar
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-[640px] w-full border-collapse">
          <thead>
            <tr className="border-b border-line">
              <th className="w-36 px-3 py-3 text-left text-[11px] uppercase tracking-[0.12em] text-faint">Campo</th>
              {models.map((model) => (
                <th key={model.id} className="px-3 py-3 text-left">
                  <Link href={`/modelos/${model.slug}`} className="text-sm font-semibold text-head no-underline hover:text-signal">
                    {model.displayName}
                  </Link>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.label} className="border-b border-line/70">
                <th className="px-3 py-3 text-left text-xs font-medium text-mute">{row.label}</th>
                {models.map((model) => (
                  <Cell key={model.id}>{row.render(model)}</Cell>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
