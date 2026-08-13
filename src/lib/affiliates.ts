import type { AffiliateLink, Model } from '@/data/types';

const PROVIDER_HOME: Record<string, { label: string; url: string }> = {
  Anthropic: { label: 'Consola Anthropic', url: 'https://console.anthropic.com' },
  OpenAI: { label: 'Platform OpenAI', url: 'https://platform.openai.com' },
  Google: { label: 'Google AI Studio', url: 'https://aistudio.google.com' },
  xAI: { label: 'xAI Console', url: 'https://console.x.ai' },
  DeepSeek: { label: 'DeepSeek Platform', url: 'https://platform.deepseek.com' },
  Mistral: { label: 'Mistral Console', url: 'https://console.mistral.ai' },
  Meta: { label: 'Llama', url: 'https://www.llama.com' },
};

function openRouterSlug(model: Model): string | null {
  const raw = model.apiModelString || model.iiSlug || model.id;
  if (!raw || raw === '—') return null;
  return raw.replace(/\s+/g, '-').toLowerCase();
}

/** Enlaces de afiliado + proveedor. Las URLs de afiliado se rellenan cuando haya IDs. */
export function getAffiliateLinks(model: Model): AffiliateLink[] {
  if (model.affiliateLinks?.length) return model.affiliateLinks;

  const links: AffiliateLink[] = [];
  const slug = openRouterSlug(model);
  if (slug && model.kind === 'model') {
    links.push({
      provider: 'openrouter',
      label: 'Probar en OpenRouter',
      url: `https://openrouter.ai/models/${encodeURIComponent(slug)}`,
    });
  }

  const home = PROVIDER_HOME[model.company];
  if (home) {
    links.push({
      provider: model.company.toLowerCase(),
      label: home.label,
      url: model.playgroundUrl || home.url,
    });
  } else if (model.playgroundUrl) {
    links.push({
      provider: 'playground',
      label: 'Playground oficial',
      url: model.playgroundUrl,
    });
  }

  return links;
}

export function getOfficialApiUrl(model: Model): string | undefined {
  return model.playgroundUrl || model.docsUrl;
}
