import test from 'node:test';
import assert from 'node:assert/strict';

import { matchesModelFilters } from '../src/utils/model-filters';
import type { Model } from '../src/data/types';

const mkModel = (over: Partial<Model> & Pick<Model, 'id'>): Model => ({
  id: over.id,
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

test('matchesModelFilters applies text, origin, category and price filters', () => {
  const model = mkModel({
    id: 'gpt-5.5',
    displayName: 'GPT 5.5',
    company: 'OpenAI',
    origin: 'US',
    category: ['coding', 'reasoning'],
    context: 400_000,
    pricing: { inputPer1M: 5, outputPer1M: 30, currency: 'USD' },
    openWeight: false,
    benchmarks: { sweBenchPro: 75.2 },
  });

  assert.equal(matchesModelFilters(model, 'gpt', { origin: 'all', cat: 'all', openOnly: false, maxPrice: 'all', minContext: 'all', benchmark: 'all' }), true);
  assert.equal(matchesModelFilters(model, 'gpt', { origin: 'US', cat: 'all', openOnly: false, maxPrice: 'all', minContext: 'all', benchmark: 'all' }), true);
  assert.equal(matchesModelFilters(model, 'gpt', { origin: 'China', cat: 'all', openOnly: false, maxPrice: 'all', minContext: 'all', benchmark: 'all' }), false);
  assert.equal(matchesModelFilters(model, 'gpt', { origin: 'all', cat: 'reasoning', openOnly: false, maxPrice: 'all', minContext: 'all', benchmark: 'all' }), true);
  assert.equal(matchesModelFilters(model, 'gpt', { origin: 'all', cat: 'agentic', openOnly: false, maxPrice: 'all', minContext: 'all', benchmark: 'all' }), false);
  assert.equal(matchesModelFilters(model, 'gpt', { origin: 'all', cat: 'all', openOnly: true, maxPrice: 'all', minContext: 'all', benchmark: 'all' }), false);
  assert.equal(matchesModelFilters(model, 'gpt', { origin: 'all', cat: 'all', openOnly: false, maxPrice: '3', minContext: 'all', benchmark: 'all' }), false);
  assert.equal(matchesModelFilters(model, 'gpt', { origin: 'all', cat: 'all', openOnly: false, maxPrice: '10', minContext: 'all', benchmark: 'all' }), true);
  assert.equal(matchesModelFilters(model, 'gpt', { origin: 'all', cat: 'all', openOnly: false, maxPrice: 'all', minContext: '256k', benchmark: 'all' }), true);
  assert.equal(matchesModelFilters(model, 'gpt', { origin: 'all', cat: 'all', openOnly: false, maxPrice: 'all', minContext: '1m', benchmark: 'all' }), false);
  assert.equal(matchesModelFilters(model, 'gpt', { origin: 'all', cat: 'all', openOnly: false, maxPrice: 'all', minContext: 'all', benchmark: 'swe70' }), true);
  assert.equal(matchesModelFilters(model, 'gpt', { origin: 'all', cat: 'all', openOnly: false, maxPrice: 'all', minContext: 'all', benchmark: 'human90' }), false);
});
