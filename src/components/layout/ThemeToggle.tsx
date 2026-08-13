'use client';

import { useEffect, useState } from 'react';

export function ThemeToggle() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    const current = document.documentElement.getAttribute('data-theme');
    setTheme(current === 'light' ? 'light' : 'dark');
  }, []);

  function toggle() {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.setAttribute('data-theme', next);
    try {
      localStorage.setItem('mia-theme', next);
    } catch {
      /* almacenamiento no disponible */
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      className="inline-flex h-9 items-center gap-2 rounded-full border border-line bg-elev2 px-3 text-xs font-medium text-ink transition-colors hover:border-line2 hover:text-head"
      aria-label={theme === 'dark' ? 'Activar modo claro' : 'Activar modo oscuro'}
    >
      {theme === 'dark' ? (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
          <path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M18.4 5.6 17 7M7 17l-1.4 1.4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      ) : (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M16.5 14.5A7 7 0 0 1 9.5 7.4 6.2 6.2 0 1 0 16.5 14.5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        </svg>
      )}
      <span className="hidden sm:inline">{theme === 'dark' ? 'Claro' : 'Oscuro'}</span>
    </button>
  );
}
