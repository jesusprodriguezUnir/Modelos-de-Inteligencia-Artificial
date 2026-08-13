import type { Metadata } from 'next';
import { NewsletterCta } from '@/components/home/NewsletterCta';
import { SiteFrame } from '@/components/layout/SiteFrame';
import { getIndexMeta } from '@/lib/catalog';

export const metadata: Metadata = {
  title: 'Blog y alertas de modelos',
  description: 'Novedades del catálogo de modelos de IA para programar. Suscríbete a las alertas.',
};

export default function BlogPage() {
  const meta = getIndexMeta();
  return (
    <SiteFrame active="blog" updatedLabel={meta.fetchedLabel}>
      <main className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-warn">Blog</p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight text-head">Novedades del catálogo</h1>
        <p className="mt-3 text-sm leading-relaxed text-mute">
          Aquí irán notas cortas cuando cambie un precio, un contexto o un ranking. Mientras tanto,
          deja el correo si quieres que te avisemos.
        </p>
        <div className="mt-10 rounded-2xl border border-dashed border-line2 px-6 py-14 text-center">
          <p className="text-lg font-medium text-head">Todavía no hay artículos</p>
          <p className="mt-2 text-sm text-mute">El primer envío saldrá con el dominio modelosia.org.</p>
        </div>
        <div className="mt-10">
          <NewsletterCta />
        </div>
      </main>
    </SiteFrame>
  );
}
