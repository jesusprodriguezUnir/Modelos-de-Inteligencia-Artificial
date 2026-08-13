import { CatalogExplorer } from '@/components/catalog/CatalogExplorer';
import { Hero, HeroSearch } from '@/components/home/Hero';
import { HighlightGrid } from '@/components/home/HighlightGrid';
import { NewsletterCta } from '@/components/home/NewsletterCta';
import { UseCaseGrid } from '@/components/home/UseCaseGrid';
import { SiteFrame } from '@/components/layout/SiteFrame';
import { JsonLd } from '@/components/seo/JsonLd';
import {
  getCatalogCards,
  getCatalogStats,
  getHighlights,
  getIndexMeta,
  getUseCases,
} from '@/lib/catalog';
import { organizationJsonLd } from '@/lib/seo';

export default function HomePage() {
  const cards = getCatalogCards();
  const meta = getIndexMeta();
  const stats = getCatalogStats(cards);
  const highlights = getHighlights(cards);
  const useCases = getUseCases(cards);
  const companies = [...new Map(cards.map((card) => [card.company, card.companyName])).entries()]
    .map(([key, name]) => ({ key, name }))
    .sort((a, b) => a.name.localeCompare(b.name, 'es'));

  return (
    <SiteFrame active="catalogo" updatedLabel={meta.fetchedLabel}>
      <JsonLd data={organizationJsonLd()} />
      <main className="mx-auto max-w-7xl px-4 pb-28 sm:px-6">
        <Hero count={stats.models} updatedLabel={meta.fetchedLabel} searchSlot={<HeroSearch />} />
        <HighlightGrid items={highlights} />
        <div className="mt-8">
          <UseCaseGrid items={useCases} />
        </div>
        <div className="mt-14">
          <CatalogExplorer
            models={cards}
            companies={companies}
          />
        </div>
        <div className="mt-16">
          <NewsletterCta />
        </div>
      </main>
    </SiteFrame>
  );
}
