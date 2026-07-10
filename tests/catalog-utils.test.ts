import test from 'node:test';
import assert from 'node:assert/strict';

import {
  buildCuratedKeySet,
  buildImportedModels,
  popularityTier,
  refreshCuratedModel,
} from '../src/data/catalog-utils';
import type { Model } from '../src/data/types';

const mkModel = (over: Partial<Model> & Pick<Model, 'id'>): Model => ({
  company: 'Acme',
  origin: 'US',
  displayName: over.id,
  kind: 'model',
  category: ['coding'],
  context: 128_000,
  pricing: { inputPer1M: 1, outputPer1M: 2, currency: 'USD' },
  modalities: ['text'],
  ...over,
});

test('refreshCuratedModel only fills missing specs and preserves curated values', () => {
  const curated: Model = {
    id: 'claude-sonnet-4-6',
    company: 'Anthropic',
    origin: 'US',
    displayName: 'Claude Sonnet 4.6',
    kind: 'model',
    category: ['coding'],
    context: null,
    pricing: { inputPer1M: 3, outputPer1M: 15, currency: 'USD' },
    modalities: ['text'],
    benchmarks: { sweBenchPro: 77.1 },
  };

  const refreshed = refreshCuratedModel(curated, {
    'claude-sonnet-4-6': {
      pricing: { inputPer1M: 4, outputPer1M: 20, approx: true },
      context: 1_000_000,
      parameters: 200,
      benchmarks: { liveCodeBench: 82 },
    },
  });

  assert.equal(refreshed.pricing.inputPer1M, 3);
  assert.equal(refreshed.pricing.outputPer1M, 15);
  assert.equal(refreshed.context, 1_000_000);
  assert.equal(refreshed.parameters, 200);
  assert.deepEqual(refreshed.benchmarks, { sweBenchPro: 77.1, liveCodeBench: 82 });
});

test('buildCuratedKeySet collects ids, iiSlug and apiModelString', () => {
  const models: Model[] = [
    { id: 'model-a', company: 'Acme', origin: 'US', displayName: 'Model A', kind: 'model', category: ['coding'], context: 128_000, pricing: { inputPer1M: 1, outputPer1M: 2, currency: 'USD' }, modalities: ['text'], iiSlug: 'model-a-slug' },
    { id: 'model-b', company: 'Acme', origin: 'US', displayName: 'Model B', kind: 'model', category: ['coding'], context: 128_000, pricing: { inputPer1M: 1, outputPer1M: 2, currency: 'USD' }, modalities: ['text'], apiModelString: 'model-b-api' },
  ];

  const keys = buildCuratedKeySet(models);

  assert.ok(keys.has('model-a'));
  assert.ok(keys.has('model-a-slug'));
  assert.ok(keys.has('model-b'));
  assert.ok(keys.has('model-b-api'));
});

test('popularityTier returns the expected tier for a value', () => {
  assert.equal(popularityTier(80).key, 'top');
  assert.equal(popularityTier(50).key, 'popular');
  assert.equal(popularityTier(10).key, 'emerging');
});

test('popularityTier handles thresholds and missing values', () => {
  // Umbrales: top >= 70, popular >= 40, emerging >= 0.
  assert.equal(popularityTier(70).key, 'top');
  assert.equal(popularityTier(69).key, 'popular');
  assert.equal(popularityTier(40).key, 'popular');
  assert.equal(popularityTier(39).key, 'emerging');
  assert.equal(popularityTier(0).key, 'emerging');
  assert.equal(popularityTier(undefined).key, 'emerging');
});

test('buildImportedModels deduplicates against curated keys (id and iiSlug)', () => {
  const autoModels: Model[] = [
    mkModel({ id: 'nuevo' }),
    mkModel({ id: 'dup-por-id' }),
    mkModel({ id: 'distinto-id', iiSlug: 'slug-curado' }),
  ];
  const curatedKeys = new Set<string>(['dup-por-id', 'slug-curado']);
  const popularity = { nuevo: 55 };

  const imported = buildImportedModels(autoModels, curatedKeys, popularity);

  // Solo 'nuevo' sobrevive: 'dup-por-id' choca por id, 'distinto-id' por iiSlug.
  assert.deepEqual(
    imported.map((m) => m.id),
    ['nuevo'],
  );
  assert.equal(imported[0].autoImported, true);
  assert.equal(imported[0].popularity, 55);
});

test('buildImportedModels falls back to default popularity 30', () => {
  const imported = buildImportedModels([mkModel({ id: 'sin-pop' })], new Set(), {});
  assert.equal(imported[0].popularity, 30);
});
