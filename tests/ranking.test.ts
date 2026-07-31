import test from 'node:test';
import assert from 'node:assert/strict';
import { getBenchScore, getHighlightBadge, getPopularityScore, getRecencyBonus } from '../src/utils/ranking';

test('getRecencyBonus rewards recent releases', () => {
  const recent = getRecencyBonus('2026-07-01');
  const old = getRecencyBonus('2024-01-01');

  assert.ok(recent > old);
  assert.equal(getRecencyBonus(undefined), 0);
});

test('getPopularityScore and getBenchScore combine popularity with recency', () => {
  const recentModel = getPopularityScore(45, '2026-07-01');
  const olderModel = getPopularityScore(45, '2024-01-01');

  assert.ok(recentModel > olderModel);

  const recentBench = getBenchScore(72, '2026-07-01');
  const olderBench = getBenchScore(72, '2024-01-01');

  assert.ok(recentBench > olderBench);
});

test('getHighlightBadge prioritizes recency and top benchmarks', () => {
  assert.equal(getHighlightBadge(90, 60, '2026-07-01'), 'Novedad');
  assert.equal(getHighlightBadge(40, 75, '2024-01-01'), 'Top benchmark');
  assert.equal(getHighlightBadge(85, 60, '2024-01-01'), 'Popular');
  assert.equal(getHighlightBadge(40, 60, '2024-01-01'), null);
});
