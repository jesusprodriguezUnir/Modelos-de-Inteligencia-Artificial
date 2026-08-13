import Link from 'next/link';
import type { CatalogCard } from '@/lib/catalog';
import { Badge } from '@/components/ui/Badge';

export function ModelCard({
  model,
  selected,
  onCompare,
}: {
  model: CatalogCard;
  selected?: boolean;
  onCompare?: (id: string) => void;
}) {
  const primaryBadge = model.badges[0];
  const apiHref = model.affiliateUrl || model.officialUrl;

  return (
    <article
      className={`group relative flex h-full flex-col rounded-2xl border bg-elev p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-line2 ${
        model.sponsored
          ? 'border-sponsored/40 shadow-[0_0_0_1px_rgba(196,165,255,0.12)]'
          : 'border-line'
      } ${selected ? 'ring-1 ring-signal/50' : ''}`}
    >
      <div className="flex items-center gap-2">
        <span className="h-2 w-2 rounded-full" style={{ background: model.accent }} />
        <span className="text-[11px] font-medium uppercase tracking-[0.12em] text-mute">
          {model.companyName}
        </span>
        <div className="ml-auto flex flex-wrap justify-end gap-1">
          {primaryBadge && <Badge kind={primaryBadge.kind}>{primaryBadge.label}</Badge>}
        </div>
      </div>

      <h3 className="mt-3 text-[1.2rem] font-semibold leading-tight tracking-tight text-head">
        {model.displayName}
      </h3>
      <p className="mt-1 font-mono text-[11px] text-signal/80">
        {model.apiModelString || 'API no publicada'}
      </p>

      <dl className="mt-5 grid grid-cols-3 gap-2">
        <div className="rounded-xl bg-elev2 px-2.5 py-2">
          <dt className="text-[10px] uppercase tracking-[0.12em] text-faint">In / Out</dt>
          <dd className="mt-1 font-mono text-[13px] font-medium text-head">
            {model.priceInText}
            <span className="text-mute"> / </span>
            {model.priceOutText}
          </dd>
        </div>
        <div className="rounded-xl bg-elev2 px-2.5 py-2">
          <dt className="text-[10px] uppercase tracking-[0.12em] text-faint">Contexto</dt>
          <dd className="mt-1 font-mono text-[13px] font-medium text-info">{model.contextText}</dd>
        </div>
        <div className="rounded-xl bg-elev2 px-2.5 py-2">
          <dt className="text-[10px] uppercase tracking-[0.12em] text-faint">SWE-bench</dt>
          <dd className={`mt-1 font-mono text-[13px] font-medium ${model.swe != null ? 'text-signal' : 'text-mute'}`}>
            {model.sweText}
          </dd>
        </div>
      </dl>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {model.tags.map((tag) => (
          <span key={tag} className="rounded-md bg-elev2 px-2 py-0.5 text-[12px] text-mute">
            {tag}
          </span>
        ))}
        {model.badges.slice(1).map((badge) => (
          <Badge key={badge.label} kind={badge.kind}>
            {badge.label}
          </Badge>
        ))}
      </div>

      <div className="mt-auto flex gap-2 pt-5">
        <Link
          href={`/modelos/${model.slug}`}
          className="inline-flex flex-1 items-center justify-center rounded-lg bg-head px-3 py-2 text-[13px] font-semibold text-bg no-underline transition-opacity hover:opacity-90"
        >
          Ver detalle
        </Link>
        {apiHref && (
          <a
            href={apiHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg border border-line px-3 py-2 text-[13px] font-medium text-ink no-underline hover:border-line2 hover:text-head"
          >
            API
          </a>
        )}
        {onCompare && (
          <button
            type="button"
            onClick={() => onCompare(model.id)}
            aria-pressed={selected}
            aria-label={selected ? `Quitar ${model.displayName} de la comparación` : `Comparar ${model.displayName}`}
            className={`inline-flex w-10 items-center justify-center rounded-lg border text-[15px] ${
              selected
                ? 'border-signal bg-signal-dim text-signal'
                : 'border-line text-mute hover:border-line2 hover:text-head'
            }`}
          >
            {selected ? '✓' : '+'}
          </button>
        )}
      </div>
    </article>
  );
}
