import type { Metadata } from 'next';
import { IBM_Plex_Mono, IBM_Plex_Sans, Instrument_Serif } from 'next/font/google';
import { ThemeScript } from '@/components/layout/ThemeScript';
import { SITE } from '@/lib/site';
import './globals.css';

const plexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-plex-sans',
  display: 'swap',
});

const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-plex-mono',
  display: 'swap',
});

const instrument = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-instrument',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — ${SITE.tagline}`,
    template: `%s · ${SITE.name}`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  authors: [{ name: SITE.author, url: SITE.authorUrl }],
  keywords: [
    'modelos de IA',
    'LLM',
    'programación',
    'SWE-bench',
    'precios tokens',
    'Claude',
    'GPT',
    'Gemini',
    'open-weight',
  ],
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
  },
  robots: { index: true, follow: true },
  alternates: { canonical: SITE.url },
  icons: { icon: '/favicon.svg' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="es"
      data-theme="dark"
      className={`${plexSans.variable} ${plexMono.variable} ${instrument.variable}`}
      suppressHydrationWarning
    >
      <head>
        <ThemeScript />
      </head>
      <body className="bg-bg font-sans text-ink antialiased">
        <div className="grain" aria-hidden="true" />
        <a href="#main-content" className="skip-link">
          Saltar al contenido
        </a>
        {children}
      </body>
    </html>
  );
}
