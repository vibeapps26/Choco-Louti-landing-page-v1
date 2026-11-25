import test from 'node:test';
import assert from 'node:assert/strict';
import { deduplicateImageSources, preloadImages } from './imagePreloader';

test('deduplicateImageSources removes empty entries and duplicates preserving order', () => {
  const input = [
    '/logo.png',
    '  ',
    '/hero.png',
    '/logo.png',
    ' /hero.png ',
    '/rose.png',
  ];

  assert.deepEqual(deduplicateImageSources(input), [
    '/logo.png',
    '/hero.png',
    '/rose.png',
  ]);
});

test('preloadImages counts loaded and failed images accurately', async () => {
  const result = await preloadImages(['/ok1.png', '/fail.png', '/ok2.png', '/ok1.png'], {
    timeoutMs: 500,
    loader: async (src) => src !== '/fail.png',
  });

  assert.equal(result.totalCount, 3);
  assert.equal(result.loadedCount, 2);
  assert.equal(result.failedCount, 1);
  assert.equal(result.timedOut, false);
});

test('preloadImages resolves cleanly on empty source list', async () => {
  const result = await preloadImages([]);
  assert.deepEqual(result, {
    loadedCount: 0,
    failedCount: 0,
    totalCount: 0,
    timedOut: false,
  });
});

test('preloadImages does not hang when an image exceeds timeoutMs', async () => {
  const result = await preloadImages(['/slow.png', '/fast.png'], {
    timeoutMs: 30,
    loader: (src) =>
      new Promise((resolve) => {
        if (src === '/fast.png') {
          resolve(true);
        } else {
          setTimeout(() => resolve(true), 200);
        }
      }),
  });

  assert.equal(result.totalCount, 2);
  assert.equal(result.timedOut, true);
});
