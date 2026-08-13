import type { Model } from '@/data/types';
import { SITE } from '@/lib/site';
import { companies } from '@/data/models';

export function modelPath(slug: string): string {
  return `/modelos/${slug}`;
}

export function absoluteUrl(path = '/'): string {
  return new URL(path, SITE.url).toString();
}

export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE.name,
    url: SITE.url,
    description: SITE.description,
    inLanguage: 'es',
    publisher: {
      '@type': 'Person',
      name: SITE.author,
      url: SITE.authorUrl,
    },
  };
}

export function softwareJsonLd(model: Model) {
  const company = companies[model.company];
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: model.displayName,
    applicationCategory: 'DeveloperApplication',
    operatingSystem: 'Web',
    url: absoluteUrl(modelPath(model.id)),
    description:
      model.notes ??
      `${model.displayName} de ${company?.name ?? model.company}: precios, contexto y benchmarks para programar.`,
    author: {
      '@type': 'Organization',
      name: company?.name ?? model.company,
    },
    offers:
      model.pricing.inputPer1M != null
        ? {
            '@type': 'Offer',
            priceCurrency: 'USD',
            price: model.pricing.inputPer1M,
            description: `USD por 1M tokens de entrada`,
          }
        : undefined,
  };
}

export function breadcrumbJsonLd(items: Array<{ name: string; path: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}
