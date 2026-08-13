import type { Metadata } from 'next';
import { SiteFrame } from '@/components/layout/SiteFrame';
import { getIndexMeta, getToolModels, toCatalogCard } from '@/lib/catalog';
import { companies } from '@/data/models';

export const metadata: Metadata = {
  title: 'Herramientas y agentes de coding',
  description:
    'IDEs, CLIs y agentes de código: Cursor, Copilot, OpenCode, Aider y el resto del catálogo.',
};

function toolType(id: string): string {
  if (['cursor', 'windsurf', 'zed', 'trae'].includes(id)) return 'IDE';
  if (id === 'github-copilot') return 'Extensión IDE';
  if (['cline', 'roo-code'].includes(id)) return 'Ext. VS Code';
  if (['jules', 'devin'].includes(id)) return 'Agente web';
  return 'CLI / Terminal';
}

export default function ToolsPage() {
  const meta = getIndexMeta();
  const tools = getToolModels().map((model) => ({
    ...toCatalogCard(model),
    type: toolType(model.id),
    blurb: companies[model.company]?.blurb ?? model.notes ?? '',
    href: model.playgroundUrl || model.docsUrl,
  }));

  return (
    <SiteFrame active="herramientas" updatedLabel={meta.fetchedLabel}>
      <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-signal">Agentes e IDEs</p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight text-head">Herramientas</h1>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-mute">
          El modelo es solo una parte. Aquí están los entornos donde de verdad escribes código.
        </p>

        {tools.length === 0 ? (
          <div className="mt-10 rounded-2xl border border-dashed border-line2 p-10 text-center text-mute">
            No hay herramientas en el catálogo.
          </div>
        ) : (
          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
            {tools.map((tool) => (
              <article key={tool.id} className="rounded-2xl border border-line bg-elev p-5">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[11px] uppercase tracking-[0.12em] text-mute">{tool.type}</span>
                  {tool.openWeight && (
                    <span className="text-[11px] font-semibold uppercase tracking-[0.08em] text-signal">
                      Open-source
                    </span>
                  )}
                </div>
                <h2 className="mt-2 text-xl font-semibold text-head">{tool.displayName}</h2>
                <p className="mt-2 text-sm leading-relaxed text-mute">{tool.blurb}</p>
                {tool.priceNote && <p className="mt-3 text-xs text-faint">{tool.priceNote}</p>}
                {tool.href && (
                  <a
                    href={tool.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex text-sm font-medium text-signal no-underline"
                  >
                    Sitio oficial →
                  </a>
                )}
              </article>
            ))}
          </div>
        )}
      </main>
    </SiteFrame>
  );
}
