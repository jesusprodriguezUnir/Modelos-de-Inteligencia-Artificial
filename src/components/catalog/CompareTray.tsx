'use client';

import Link from 'next/link';
import type { CatalogCard } from '@/lib/catalog';

export function CompareTray({
  models,
  onRemove,
  onClear,
}: {
  models: CatalogCard[];
  onRemove: (id: string) => void;
  onClear: () => void;
}) {
  if (models.length === 0) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-line bg-elev/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-3 sm:flex-row sm:items-center sm:px-6">
        <div className="text-xs font-semibold uppercase tracking-[0.14em] text-faint">
          Comparar {models.length}/4
        </div>
        <div className="flex flex-1 flex-wrap gap-2">
          {models.map((model) => (
            <button
              key={model.id}
              type="button"
              onClick={() => onRemove(model.id)}
              className="inline-flex items-center gap-2 rounded-full border border-line bg-elev2 px-3 py-1.5 text-sm text-head"
            >
              <span className="h-1.5 w-1.5 rounded-full" style={{ background: model.accent }} />
              {model.displayName}
              <span className="text-faint">×</span>
            </button>
          ))}
        </div>
        <div className="flex gap-2">
          <button type="button" onClick={onClear} className="rounded-lg px-3 py-2 text-sm text-mute hover:text-head">
            Vaciar
          </button>
          <Link
            href={`/?compare=${models.map((m) => m.id).join(',') }#comparar`}
            className="rounded-lg bg-signal px-4 py-2 text-sm font-semibold text-[#06140e] no-underline"
          >
            Ver lado a lado
          </Link>
        </div>
      </div>
    </div>
  );
}
