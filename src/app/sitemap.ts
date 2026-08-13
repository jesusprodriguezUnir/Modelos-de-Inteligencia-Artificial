import type { MetadataRoute } from 'next';
import { getCatalogCards } from '@/lib/catalog';
import { SITE } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = ['', '/locales', '/benchmarks', '/herramientas', '/guia', '/blog'].map((path) => ({
    url: `${SITE.url}${path || '/'}`,
    lastModified: now,
    changeFrequency: 'daily' as const,
    priority: path === '' ? 1 : 0.7,
  }));

  const models = getCatalogCards().map((model) => ({
    url: `${SITE.url}/modelos/${model.slug}`,
    lastModified: model.releaseDate ? new Date(model.releaseDate) : now,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...models];
}
