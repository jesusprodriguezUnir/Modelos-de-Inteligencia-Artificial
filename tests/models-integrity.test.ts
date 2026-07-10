import test from 'node:test';
import assert from 'node:assert/strict';

import { models, companies } from '../src/data/models';

test('no hay ids de modelo duplicados en el catálogo fusionado', () => {
  const seen = new Map<string, number>();
  for (const m of models) {
    seen.set(m.id, (seen.get(m.id) ?? 0) + 1);
  }
  const dups = [...seen.entries()].filter(([, n]) => n > 1).map(([id]) => id);
  assert.deepEqual(dups, [], `ids duplicados: ${dups.join(', ')}`);
});

test('toda empresa referenciada por un modelo existe en companies', () => {
  const missing = [...new Set(models.map((m) => m.company))].filter((key) => !(key in companies));
  assert.deepEqual(missing, [], `empresas referenciadas inexistentes: ${missing.join(', ')}`);
});

test('cada empresa tiene los campos mínimos (name y accent)', () => {
  const broken = Object.entries(companies)
    .filter(([, c]) => !c || !c.name || !c.accent)
    .map(([key]) => key);
  assert.deepEqual(broken, [], `empresas con campos faltantes: ${broken.join(', ')}`);
});
