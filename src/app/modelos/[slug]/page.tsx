import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Badge } from '@/components/ui/Badge';
import { SiteFrame } from '@/components/layout/SiteFrame';
import { JsonLd } from '@/components/seo/JsonLd';
import {
  deriveInsights,
  getAffiliateLinks,
  getCatalogCards,
  getIndexMeta,
  getModelBySlug,
  toCatalogCard,
} from '@/lib/catalog';
import { breadcrumbJsonLd, modelPath, softwareJsonLd } from '@/lib/seo';
import { SITE } from '@/lib/site';
import { companies } from '@/data/models';
import { fmtCtx } from '@/utils/format';

export function generateStaticParams() {
  return getCatalogCards().map((model) => ({ slug: model.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const model = getModelBySlug(slug);
  if (!model) return { title: 'Modelo no encontrado' };
  const company = companies[model.company]?.name ?? model.company;
  const title = `${model.displayName}: precio, contexto y SWE-bench`;
  const description = `${model.displayName} de ${company}. Input ${model.pricing.inputPer1M ?? '—'} USD/1M, contexto ${fmtCtx(model.context)}${model.benchmarks?.sweBenchPro != null ? `, SWE-bench ${model.benchmarks.sweBenchPro}%` : ''}.`;
  return {
    title,
    description,
    alternates: { canonical: `${SITE.url}${modelPath(model.id)}` },
    openGraph: { title: `${title} · ${SITE.name}`, description, url: modelPath(model.id) },
  };
}

export default async function ModelDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const model = getModelBySlug(slug);
  if (!model || model.kind !== 'model') notFound();

  const card = toCatalogCard(model);
  const meta = getIndexMeta();
  const insights = deriveInsights(model);
  const affiliates = getAffiliateLinks(model);
  const company = companies[model.company];
  const related = getCatalogCards()
    .filter((item) => item.id !== model.id && (item.company === model.company || item.categoryKeys.some((cat) => model.category.includes(cat))))
    .slice(0, 3);

  const changelog = model.changelog?.length
    ? model.changelog
    : [
        {
          date: meta.fetchedAt.slice(0, 10),
          summary: 'Ficha refrescada con precios, contexto y benchmarks del Intelligence Index.',
        },
      ];

  return (
    <SiteFrame active="catalogo" updatedLabel={meta.fetchedLabel}>
      <JsonLd data={softwareJsonLd(model)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Catálogo', path: '/' },
          { name: model.displayName, path: modelPath(model.id) },
        ])}
      />
      <main className="mx-auto max-w-5xl px-4 pb-20 pt-8 sm:px-6">
        <Link href="/#catalogo" className="text-sm text-mute no-underline hover:text-head">
          ← Volver al catálogo
        </Link>

        <header className="mt-6 flex flex-col gap-5 border-b border-line pb-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full" style={{ background: company?.accent ?? card.accent }} />
              <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-mute">
                {company?.name ?? model.company} · {card.originLabel}
              </span>
            </div>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-head">{model.displayName}</h1>
            {model.apiModelString && (
              <p className="mt-2 font-mono text-sm text-signal">{model.apiModelString}</p>
            )}
            <div className="mt-4 flex flex-wrap gap-1.5">
              {card.badges.map((badge) => (
                <Badge key={badge.label} kind={badge.kind}>
                  {badge.label}
                </Badge>
              ))}
            </div>
            {company?.blurb && <p className="mt-4 max-w-2xl text-sm leading-relaxed text-mute">{company.blurb}</p>}
          </div>
          <div className="flex flex-wrap gap-2">
            {affiliates.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="inline-flex rounded-xl bg-signal px-4 py-2 text-sm font-semibold text-[#06140e] no-underline"
              >
                {link.label}
              </a>
            ))}
            {model.docsUrl && (
              <a
                href={model.docsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-xl border border-line px-4 py-2 text-sm font-medium text-ink no-underline hover:text-head"
              >
                Documentación
              </a>
            )}
          </div>
        </header>

        <section className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">
          <Stat label="Input / 1M" value={card.priceInText} hint={card.approx ? 'aproximado' : 'USD'} />
          <Stat label="Output / 1M" value={card.priceOutText} hint={card.approx ? 'aproximado' : 'USD'} />
          <Stat label="Contexto" value={card.contextText} hint="tokens" tone="info" />
          <Stat label="SWE-bench" value={card.sweText} hint="Pro / Verified" tone="signal" />
        </section>

        {model.pricingTiers && model.pricingTiers.length > 0 && (
          <section className="mt-8">
            <h2 className="text-lg font-semibold text-head">Tiers de precio</h2>
            <div className="mt-3 overflow-hidden rounded-2xl border border-line">
              <table className="w-full text-sm">
                <thead className="bg-elev2 text-left text-[11px] uppercase tracking-[0.12em] text-faint">
                  <tr>
                    <th className="px-4 py-2">Tier</th>
                    <th className="px-4 py-2">Input</th>
                    <th className="px-4 py-2">Output</th>
                    <th className="px-4 py-2">Nota</th>
                  </tr>
                </thead>
                <tbody>
                  {model.pricingTiers.map((tier) => (
                    <tr key={tier.name} className="border-t border-line">
                      <td className="px-4 py-2 text-head">{tier.name}</td>
                      <td className="px-4 py-2 font-mono">{tier.inputPer1M ?? '—'}</td>
                      <td className="px-4 py-2 font-mono">{tier.outputPer1M ?? '—'}</td>
                      <td className="px-4 py-2 text-mute">{tier.note ?? '—'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {model.pricing.note && (
          <p className="mt-4 text-sm text-mute">{model.pricing.note}</p>
        )}

        <section className="mt-10 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-line bg-elev p-5">
            <h2 className="text-lg font-semibold text-head">Fortalezas</h2>
            <ul className="mt-3 space-y-2 text-sm leading-relaxed text-ink">
              {insights.strengths.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-signal" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-line bg-elev p-5">
            <h2 className="text-lg font-semibold text-head">Matices</h2>
            <ul className="mt-3 space-y-2 text-sm leading-relaxed text-ink">
              {insights.weaknesses.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-warn" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mt-4 rounded-2xl border border-line bg-elev p-5">
          <h2 className="text-lg font-semibold text-head">Casos de uso</h2>
          <ul className="mt-3 grid gap-2 sm:grid-cols-2">
            {insights.useCases.map((item) => (
              <li key={item} className="rounded-xl bg-elev2 px-3 py-2 text-sm text-ink">
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-line bg-elev p-5">
            <h2 className="text-lg font-semibold text-head">Límites y ficha</h2>
            <dl className="mt-3 space-y-2 text-sm">
              <Row label="Contexto" value={card.contextText} />
              <Row label="Modalidades" value={model.modalities.join(', ')} />
              <Row label="Licencia" value={model.license ?? (model.openWeight ? 'Open-weight' : 'Propietaria')} />
              <Row label="Parámetros" value={model.parameters ? `${model.parameters}B` : '—'} />
              <Row label="Lanzamiento" value={card.releaseLabel} />
              <Row label="Origen" value={card.originLabel} />
            </dl>
          </div>
          <div className="rounded-2xl border border-line bg-elev p-5">
            <h2 className="text-lg font-semibold text-head">Benchmarks</h2>
            <dl className="mt-3 space-y-2 text-sm">
              <Row label="SWE-bench" value={card.sweText} />
              <Row label="LiveCodeBench" value={model.benchmarks?.liveCodeBench != null ? `${model.benchmarks.liveCodeBench}%` : '—'} />
              <Row label="HumanEval" value={model.benchmarks?.humanEval != null ? `${model.benchmarks.humanEval}%` : '—'} />
            </dl>
          </div>
        </section>

        {model.notes && (
          <section className="mt-4 rounded-2xl border border-line bg-elev p-5">
            <h2 className="text-lg font-semibold text-head">Notas</h2>
            <p className="mt-2 text-sm leading-relaxed text-ink">{model.notes}</p>
          </section>
        )}

        {model.examples && model.examples.length > 0 && (
          <section className="mt-4 rounded-2xl border border-line bg-elev p-5">
            <h2 className="text-lg font-semibold text-head">Ejemplo de uso</h2>
            {model.examples.slice(0, 1).map((example) => (
              <div key={example.title} className="mt-3">
                <p className="text-xs uppercase tracking-[0.12em] text-faint">{example.title}</p>
                <pre className="mt-2 overflow-x-auto rounded-xl bg-bg p-4 font-mono text-[12.5px] leading-relaxed text-ink">
                  <code>{example.code}</code>
                </pre>
              </div>
            ))}
          </section>
        )}

        <section className="mt-4 rounded-2xl border border-line bg-elev p-5">
          <h2 className="text-lg font-semibold text-head">Historial de la ficha</h2>
          <ol className="mt-3 space-y-2">
            {changelog.map((entry) => (
              <li key={`${entry.date}-${entry.summary}`} className="flex gap-3 text-sm">
                <span className="w-24 shrink-0 font-mono text-faint">{entry.date}</span>
                <span className="text-ink">{entry.summary}</span>
              </li>
            ))}
          </ol>
          <p className="mt-3 text-xs text-faint">
            Actualizado en catálogo el {meta.fetchedShort}. Confirma precio y límites en la web oficial.
          </p>
        </section>

        {related.length > 0 && (
          <section className="mt-10">
            <h2 className="text-lg font-semibold text-head">También te puede encajar</h2>
            <div className="mt-3 grid gap-3 sm:grid-cols-3">
              {related.map((item) => (
                <Link
                  key={item.id}
                  href={`/modelos/${item.slug}`}
                  className="rounded-2xl border border-line bg-elev p-4 no-underline hover:border-line2"
                >
                  <div className="text-xs uppercase tracking-[0.12em] text-mute">{item.companyName}</div>
                  <div className="mt-1 font-medium text-head">{item.displayName}</div>
                  <div className="mt-2 font-mono text-xs text-mute">
                    {item.priceInText} · {item.contextText} · {item.sweText}
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>
    </SiteFrame>
  );
}

function Stat({
  label,
  value,
  hint,
  tone,
}: {
  label: string;
  value: string;
  hint: string;
  tone?: 'info' | 'signal';
}) {
  const color = tone === 'info' ? 'text-info' : tone === 'signal' ? 'text-signal' : 'text-head';
  return (
    <div className="rounded-2xl border border-line bg-elev p-4">
      <div className="text-[11px] uppercase tracking-[0.12em] text-faint">{label}</div>
      <div className={`mt-2 font-mono text-2xl font-medium ${color}`}>{value}</div>
      <div className="mt-1 text-xs text-mute">{hint}</div>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-line/60 py-1.5 last:border-0">
      <dt className="text-mute">{label}</dt>
      <dd className="font-medium text-head">{value}</dd>
    </div>
  );
}
