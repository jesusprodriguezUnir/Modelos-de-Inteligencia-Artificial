'use client';

import Link from 'next/link';
import { useState } from 'react';
import { NAV, SITE, type NavKey } from '@/lib/site';
import { ThemeToggle } from './ThemeToggle';

export function Header({ active }: { active?: NavKey }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-bg/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-4 px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2.5 no-underline" onClick={() => setOpen(false)}>
          <span className="grid h-7 w-7 place-items-center rounded-md bg-signal text-[13px] font-semibold text-[#06140e]">
            M
          </span>
          <span className="text-[17px] font-semibold tracking-tight text-head">
            Modelos
            <span className="font-display text-[1.15em] font-normal italic text-signal">IA</span>
          </span>
        </Link>

        <nav className="ml-4 hidden items-center gap-0.5 lg:flex" aria-label="Principal">
          {NAV.map((item) => {
            const isActive = item.key === active;
            return (
              <Link
                key={item.key}
                href={item.href}
                className={`rounded-full px-3 py-1.5 text-[13px] no-underline transition-colors ${
                  isActive
                    ? 'bg-elev2 text-head'
                    : 'text-mute hover:bg-elev2/70 hover:text-head'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line bg-elev2 text-ink lg:hidden"
            aria-expanded={open}
            aria-label="Abrir menú"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menú</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              {open ? (
                <path d="M3.5 3.5l9 9M12.5 3.5l-9 9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              ) : (
                <path d="M2.5 4.5h11M2.5 8h11M2.5 11.5h11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-line bg-elev px-4 py-3 lg:hidden" aria-label="Móvil">
          <div className="flex flex-col gap-1">
            {NAV.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`rounded-lg px-3 py-2.5 text-sm no-underline ${
                  item.key === active ? 'bg-elev2 text-head' : 'text-ink'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <p className="px-3 pt-3 text-[11px] uppercase tracking-[0.14em] text-faint">{SITE.domain}</p>
        </nav>
      )}
    </header>
  );
}
