import { Footer } from './Footer';
import { Header } from './Header';
import type { NavKey } from '@/lib/site';

export function SiteFrame({
  active,
  updatedLabel,
  children,
}: {
  active?: NavKey;
  updatedLabel: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <Header active={active} />
      <div id="main-content">{children}</div>
      <Footer updatedLabel={updatedLabel} />
    </>
  );
}
