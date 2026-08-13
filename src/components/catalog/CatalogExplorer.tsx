'use client';

import { useEffect, useMemo, useState } from 'react';
import type { CatalogCard } from '@/lib/catalog';
import { CAT_LABELS, ORIGIN_LABELS, SORT_LABELS } from '@/lib/labels';
import { matchesModelFilters, type ModelFilterState } from '@/utils/model-filters';
import { sortModelsByMode, type ModelSortMode } from '@/utils/ranking';
import type { Category, Origin } from '@/data/types';
import { ModelCard } from './ModelCard';
import { EmptyState } from './EmptyState';
import { CompareTray } from './CompareTray';
import { CompareTable } from './CompareTable';

const ORIGINS: Array<'all' | Origin> = ['all', 'US', 'China', 'EU', 'Open'];
const CATS: Array<'all' | Category> = [
  'all',
  'coding',
  'reasoning',
  'agentic',
  'multimodal',
  'fast',
  'budget',
];
const SORTS: ModelSortMode[] = ['relevance', 'price', 'context', 'benchmark', 'recency'];

function Chip({
  active,
  children,
  onClick,
}: {
  active: boolean;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full border px-3 py-1.5 text-[13px] transition-colors ${
        active
          ? 'border-head bg-head text-bg'
          : 'border-line bg-transparent text-ink hover:border-line2 hover:text-head'
      }`}
    >
      {children}
    </button>
  );
}

export function CatalogExplorer({
  models,
  companies,
  initialQuery = '',
  initialCompare = [],
}: {
  models: CatalogCard[];
  companies: Array<{ key: string; name: string }>;
  initialQuery?: string;
  initialCompare?: string[];
}) {
  const [query, setQuery] = useState(initialQuery);
  const [view, setView] = useState<'grid' | 'table'>('grid');
  const [sort, setSort] = useState<ModelSortMode>('relevance');
  const [compare, setCompare] = useState<string[]>(initialCompare.slice(0, 4));

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const q = params.get('q');
    const compareParam = params.get('compare');
    if (q) setQuery(q);
    if (compareParam) setCompare(compareParam.split(',').filter(Boolean).slice(0, 4));
  }, []);
  const [filters, setFilters] = useState<ModelFilterState>({
    origin: 'all',
    cat: 'all',
    openOnly: false,
    maxPrice: 'all',
    minContext: 'all',
    benchmark: 'all',
    company: 'all',
    weight: 'all',
  });

  const filtered = useMemo(() => {
    const matched = models.filter((model) =>
      matchesModelFilters(
        {
          id: model.id,
          company: model.company,
          origin: model.origin,
          displayName: model.displayName,
          kind: model.kind,
          category: model.categoryKeys,
          context: model.context,
          pricing: {
            inputPer1M: model.priceIn,
            outputPer1M: model.priceOut,
            approx: model.approx,
          },
          modalities: model.modalities,
          openWeight: model.openWeight,
          apiModelString: model.apiModelString,
          notes: model.notes,
          benchmarks: {
            sweBenchPro: model.swe ?? undefined,
            humanEval: model.humanEval,
          },
        },
        query,
        filters,
      ),
    );

    return sortModelsByMode(
      matched.map((model) => ({
        ...model,
        inputPrice: model.priceIn,
        popularity: model.popularity,
      })),
      sort,
    );
  }, [models, query, filters, sort]);

  const selectedModels = models.filter((model) => compare.includes(model.id));

  function toggleCompare(id: string) {
    setCompare((current) => {
      if (current.includes(id)) return current.filter((item) => item !== id);
      if (current.length >= 4) return current;
      return [...current, id];
    });
  }

  function reset() {
    setQuery('');
    setFilters({
      origin: 'all',
      cat: 'all',
      openOnly: false,
      maxPrice: 'all',
      minContext: 'all',
      benchmark: 'all',
      company: 'all',
      weight: 'all',
    });
  }

  const selectClass =
    'rounded-full border border-line bg-elev2 px-3 py-1.5 text-[13px] text-ink';

  return (
    <section id="catalogo" className="scroll-mt-24">
      <div className="flex flex-col gap-4 border-b border-line pb-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-signal">Catálogo</p>
          <h2 className="mt-1 text-2xl font-semibold tracking-tight text-head">Todos los modelos</h2>
          <p className="mt-1 text-sm text-mute">
            {filtered.length} de {models.length} fichas · precios por 1M de tokens
          </p>
        </div>
        <label className="relative block w-full sm:max-w-md">
          <span className="sr-only">Buscar modelos</span>
          <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-faint">⌕</span>
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Buscar por nombre, empresa o API…"
            className="w-full rounded-xl border border-line bg-elev py-2.5 pl-8 pr-3 text-sm text-head outline-none placeholder:text-faint focus:border-line2"
          />
        </label>
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-2">
        {ORIGINS.map((origin) => (
          <Chip
            key={origin}
            active={filters.origin === origin}
            onClick={() => setFilters((f) => ({ ...f, origin }))}
          >
            {origin === 'all' ? 'Todos' : ORIGIN_LABELS[origin]}
          </Chip>
        ))}
        <span className="hidden h-5 w-px bg-line sm:block" />
        {CATS.map((cat) => (
          <Chip
            key={cat}
            active={filters.cat === cat}
            onClick={() => setFilters((f) => ({ ...f, cat }))}
          >
            {cat === 'all' ? 'Todas' : CAT_LABELS[cat]}
          </Chip>
        ))}
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-2">
        <select
          className={selectClass}
          value={filters.company}
          onChange={(event) => setFilters((f) => ({ ...f, company: event.target.value }))}
        >
          <option value="all">Proveedor: cualquiera</option>
          {companies.map((company) => (
            <option key={company.key} value={company.key}>
              {company.name}
            </option>
          ))}
        </select>
        <select
          className={selectClass}
          value={filters.weight}
          onChange={(event) =>
            setFilters((f) => ({
              ...f,
              weight: event.target.value as ModelFilterState['weight'],
              openOnly: event.target.value === 'open',
            }))
          }
        >
          <option value="all">Pesos: todos</option>
          <option value="open">Solo open-weight</option>
          <option value="closed">Solo cerrados</option>
        </select>
        <select
          className={selectClass}
          value={filters.maxPrice}
          onChange={(event) => setFilters((f) => ({ ...f, maxPrice: event.target.value }))}
        >
          <option value="all">Precio: cualquiera</option>
          <option value="1">≤ $1 /1M</option>
          <option value="3">≤ $3 /1M</option>
          <option value="5">≤ $5 /1M</option>
          <option value="10">≤ $10 /1M</option>
        </select>
        <select
          className={selectClass}
          value={filters.minContext}
          onChange={(event) => setFilters((f) => ({ ...f, minContext: event.target.value }))}
        >
          <option value="all">Contexto: cualquiera</option>
          <option value="128k">≥ 128K</option>
          <option value="256k">≥ 256K</option>
          <option value="1m">≥ 1M</option>
          <option value="2m">≥ 2M</option>
        </select>
        <select
          className={selectClass}
          value={filters.benchmark}
          onChange={(event) => setFilters((f) => ({ ...f, benchmark: event.target.value }))}
        >
          <option value="all">Bench: cualquiera</option>
          <option value="swe70">SWE ≥ 70</option>
          <option value="swe80">SWE ≥ 80</option>
        </select>
        <select
          className={selectClass}
          value={sort}
          onChange={(event) => setSort(event.target.value as ModelSortMode)}
        >
          {SORTS.map((mode) => (
            <option key={mode} value={mode}>
              Orden: {SORT_LABELS[mode]}
            </option>
          ))}
        </select>
        <div className="ml-auto flex overflow-hidden rounded-full border border-line">
          <button
            type="button"
            onClick={() => setView('grid')}
            className={`px-3 py-1.5 text-[13px] ${view === 'grid' ? 'bg-elev2 text-head' : 'text-mute'}`}
          >
            Tarjetas
          </button>
          <button
            type="button"
            onClick={() => setView('table')}
            className={`px-3 py-1.5 text-[13px] ${view === 'table' ? 'bg-elev2 text-head' : 'text-mute'}`}
          >
            Tabla
          </button>
        </div>
      </div>

      {selectedModels.length >= 2 && (
        <CompareTable models={selectedModels} onClose={() => setCompare([])} />
      )}

      {filtered.length === 0 ? (
        <EmptyState onReset={reset} />
      ) : view === 'grid' ? (
        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {filtered.map((model) => (
            <ModelCard
              key={model.id}
              model={model}
              selected={compare.includes(model.id)}
              onCompare={toggleCompare}
            />
          ))}
        </div>
      ) : (
        <div className="mt-6 overflow-x-auto rounded-2xl border border-line bg-elev">
          <table className="min-w-[780px] w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-line text-left text-[11px] uppercase tracking-[0.12em] text-faint">
                <th className="px-4 py-3">Modelo</th>
                <th className="px-4 py-3">Empresa</th>
                <th className="px-4 py-3 text-right">In</th>
                <th className="px-4 py-3 text-right">Out</th>
                <th className="px-4 py-3 text-right">Contexto</th>
                <th className="px-4 py-3 text-right">SWE</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((model) => (
                <tr key={model.id} className="border-b border-line/70 hover:bg-elev2/50">
                  <td className="px-4 py-3">
                    <a href={`/modelos/${model.slug}`} className="font-medium text-head no-underline hover:text-signal">
                      {model.displayName}
                    </a>
                  </td>
                  <td className="px-4 py-3 text-mute">{model.companyName}</td>
                  <td className="px-4 py-3 text-right font-mono">{model.priceInText}</td>
                  <td className="px-4 py-3 text-right font-mono">{model.priceOutText}</td>
                  <td className="px-4 py-3 text-right font-mono text-info">{model.contextText}</td>
                  <td className="px-4 py-3 text-right font-mono text-signal">{model.sweText}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <CompareTray
        models={selectedModels}
        onRemove={(id) => setCompare((current) => current.filter((item) => item !== id))}
        onClear={() => setCompare([])}
      />
    </section>
  );
}
