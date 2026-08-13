import Link from 'next/link';
import type { HighlightPick } from '@/lib/catalog';

const TONE: Record<HighlightPick['key'], string> = {
  cheap: 'text-signal',
  context: 'text-info',
  swe: 'text-signal',
  new: 'text-warn',
};

export function HighlightGrid({ items }: { items: HighlightPick[] }) {
  return (
    <section className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
      {items.map((item) => (
        <Link
          key={item.key}
          href={`/modelos/${item.model.slug}`}
          className="group rounded-2xl border border-line bg-elev p-4 no-underline transition-colors hover:border-line2"
        >
          <div className="flex items-center justify-between gap-2">
            <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-faint">
              {item.title}
            </span>
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: item.model.accent }} />
          </div>
          <div className={`mt-3 font-mono text-2xl font-medium ${TONE[item.key]}`}>
            {item.key === 'new' ? item.model.displayName : item.value}
          </div>
          <div className="mt-1 text-sm text-head">
            {item.key === 'new' ? item.model.companyName : item.model.displayName}
          </div>
          <div className="mt-1 text-xs text-mute">{item.subtitle}</div>
        </Link>
      ))}
    </section>
  );
}
