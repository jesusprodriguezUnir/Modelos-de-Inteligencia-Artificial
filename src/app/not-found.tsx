import Link from 'next/link';
import { SiteFrame } from '@/components/layout/SiteFrame';
import { getIndexMeta } from '@/lib/catalog';

export default function NotFound() {
  const meta = getIndexMeta();
  return (
    <SiteFrame updatedLabel={meta.fetchedLabel}>
      <main className="mx-auto max-w-xl px-4 py-24 text-center sm:px-6">
        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-warn">404</p>
        <h1 className="mt-3 text-3xl font-semibold text-head">Esa página no está en el catálogo</h1>
        <p className="mt-3 text-sm text-mute">
          El modelo o la ruta no existe. Vuelve al catálogo y filtra por nombre o empresa.
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex rounded-xl bg-head px-4 py-2 text-sm font-semibold text-bg no-underline"
        >
          Ir al catálogo
        </Link>
      </main>
    </SiteFrame>
  );
}
