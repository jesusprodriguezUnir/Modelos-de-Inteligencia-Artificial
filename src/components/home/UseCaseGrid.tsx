import Link from 'next/link';
import type { UseCasePick } from '@/lib/catalog';

const TONE: Record<UseCasePick['tone'], string> = {
  signal: 'text-signal border-signal/30',
  info: 'text-info border-info/30',
  warn: 'text-warn border-warn/30',
  sponsored: 'text-sponsored border-sponsored/30',
};

export function UseCaseGrid({ items }: { items: UseCasePick[] }) {
  return (
    <section className="rounded-3xl border border-line bg-elev p-5 sm:p-7">
      <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-signal">
            Recomendaciones
          </p>
          <h2 className="mt-1 text-2xl font-semibold tracking-tight text-head">
            Empieza por el problema, no por la marca
          </h2>
        </div>
        <p className="max-w-sm text-sm text-mute">
          Atajos para no perder media hora comparando fichas si ya sabes qué necesitas.
        </p>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-5">
        {items.map((item) => (
          <Link
            key={item.title}
            href={`/modelos/${item.model.slug}`}
            className="rounded-2xl border border-line bg-bg p-4 no-underline transition-colors hover:border-line2"
          >
            <span className={`inline-flex rounded-full border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.08em] ${TONE[item.tone]}`}>
              {item.badge}
            </span>
            <h3 className="mt-3 text-sm font-semibold text-head">{item.title}</h3>
            <p className="mt-2 text-[15px] font-medium text-ink">{item.model.displayName}</p>
            <p className="mt-1 text-xs text-mute">{item.subtitle}</p>
            <p className="mt-3 text-xs leading-relaxed text-faint">{item.reason}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
