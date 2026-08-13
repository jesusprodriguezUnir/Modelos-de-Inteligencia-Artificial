import type { BadgeKind } from '@/data/types';

const STYLES: Record<BadgeKind, string> = {
  new: 'text-warn border-warn/30 bg-warn-dim',
  open: 'text-signal border-signal/30 bg-signal-dim',
  cheap: 'text-signal border-signal/30 bg-signal-dim',
  context: 'text-info border-info/30 bg-info-dim',
  swe: 'text-signal border-signal/30 bg-signal-dim',
  sponsored: 'text-sponsored border-sponsored/30 bg-sponsored/10',
  popular: 'text-info border-info/30 bg-info-dim',
  multimodal: 'text-info border-info/30 bg-info-dim',
};

export function Badge({
  kind,
  children,
}: {
  kind: BadgeKind;
  children: React.ReactNode;
}) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.08em] ${STYLES[kind]}`}
    >
      {children}
    </span>
  );
}
