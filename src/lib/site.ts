export const SITE = {
  name: 'ModelosIA',
  domain: 'modelosia.org',
  url: 'https://modelosia.org',
  tagline: 'Elige el modelo de IA para programar',
  description:
    'Compara precios por millón de tokens, ventana de contexto y SWE-bench de los modelos de IA para desarrollo. Catálogo actualizado para programadores.',
  author: 'Jesús P. Rodríguez',
  authorUrl: 'https://web-personal-sandy.vercel.app/',
  github: 'https://github.com/jesusprodriguezunir',
  linkedin: 'https://www.linkedin.com/in/jes%C3%BAs-pedro-rodr%C3%ADguez-castro-b746394a/',
  version: '3.0.0',
} as const;

export const NAV = [
  { href: '/', label: 'Catálogo', key: 'catalogo' },
  { href: '/locales', label: 'Locales', key: 'locales' },
  { href: '/benchmarks', label: 'Benchmarks', key: 'benchmarks' },
  { href: '/herramientas', label: 'Herramientas', key: 'herramientas' },
  { href: '/guia', label: 'Guía', key: 'guia' },
  { href: '/blog', label: 'Blog', key: 'blog' },
] as const;

export type NavKey = (typeof NAV)[number]['key'];
