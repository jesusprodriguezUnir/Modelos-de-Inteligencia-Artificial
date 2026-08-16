import Link from 'next/link';
import { NAV, SITE } from '@/lib/site';

export function Footer({ updatedLabel }: { updatedLabel: string }) {
  return (
    <footer className="mt-20 border-t border-line">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="text-[17px] font-semibold tracking-tight text-head">
            Modelos<span className="font-display text-[1.15em] font-normal italic text-signal">IA</span>
          </div>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-mute">
            Panel de modelos de IA para programadores. Precios, contexto y benchmarks en un solo sitio.
          </p>
          <p className="mt-4 text-xs leading-relaxed text-faint">
            Los precios y ventanas de contexto cambian a menudo. Verifica siempre en la documentación oficial
            del proveedor antes de presupuestar. Datos actualizados a {updatedLabel}.
          </p>
        </div>

        <div>
          <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-faint">Navegar</div>
          <ul className="mt-3 space-y-2">
            {NAV.map((item) => (
              <li key={item.key}>
                <Link href={item.href} className="text-sm text-ink no-underline hover:text-head">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-faint">Proyecto</div>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a href={SITE.authorUrl} className="text-ink no-underline hover:text-head" target="_blank" rel="noreferrer">
                {SITE.author}
              </a>
            </li>
            <li>
              <a href={SITE.github} className="text-ink no-underline hover:text-head" target="_blank" rel="noreferrer">
                GitHub
              </a>
            </li>
            <li>
              <a href={SITE.linkedin} className="text-ink no-underline hover:text-head" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </li>
            <li className="text-mute">{SITE.domain}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-4 text-xs text-faint sm:px-6">
          <span>v{SITE.version} · catálogo estático, sin backend</span>
          <span>Hecho para elegir más rápido, no para vender un único modelo.</span>
        </div>
      </div>
      <div className="text-center p-4 text-xs text-faint mt-auto w-full bg-black/10">
        <p>Web creada por <a href="https://webdespega.com" target="_blank" rel="noopener noreferrer" className="text-current underline hover:text-head transition-colors">webdespega</a></p>
      </div>
    </footer>
  );
}
