import { SITE } from '@/lib/site';

export function Hero({
  count,
  updatedLabel,
  searchSlot,
}: {
  count: number;
  updatedLabel: string;
  searchSlot?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden pb-8 pt-10 sm:pt-14">
      <div className="hero-grid pointer-events-none absolute inset-0 opacity-70" />
      <div className="relative">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-signal">
          {SITE.domain} · {count} modelos · {updatedLabel}
        </p>
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-[1.05] tracking-[-0.035em] text-head sm:text-6xl">
          Elige el modelo de IA
          <span className="block font-display text-[1.08em] font-normal italic text-signal">
            para programar.
          </span>
        </h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-mute sm:text-lg">
          Precios por millón de tokens, ventana de contexto y SWE-bench en un panel pensado para
          desarrolladores. Sin humo: números primero.
        </p>
        {searchSlot}
      </div>
    </section>
  );
}

export function HeroSearch({ defaultValue = '' }: { defaultValue?: string }) {
  return (
    <form action="/#catalogo" className="mt-8 max-w-xl">
      <label className="sr-only" htmlFor="hero-search">
        Buscar en el catálogo
      </label>
      <div className="flex overflow-hidden rounded-2xl border border-line bg-elev shadow-[0_20px_60px_-30px_rgba(62,224,160,0.35)]">
        <input
          id="hero-search"
          name="q"
          defaultValue={defaultValue}
          placeholder="Claude, Gemini, DeepSeek, SWE ≥ 70…"
          className="min-w-0 flex-1 bg-transparent px-4 py-3.5 text-[15px] text-head outline-none placeholder:text-faint"
        />
        <button
          type="submit"
          className="m-1.5 rounded-xl bg-signal px-4 text-sm font-semibold text-[#06140e]"
        >
          Buscar
        </button>
      </div>
    </form>
  );
}
