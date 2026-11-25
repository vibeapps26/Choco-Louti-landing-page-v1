import test from 'node:test';
import assert from 'node:assert/strict';
import {
  LANGUAGE_OPTIONS,
  getActiveLanguageIndex,
  getOppositeLanguage,
  mapOccasionAcrossLanguages,
} from './languageSwitcher';
import { OCCASIONS_MAP } from './i18n';

test('LANGUAGE_OPTIONS exposes French first and Arabic second', () => {
  assert.equal(LANGUAGE_OPTIONS.length, 2);
  assert.equal(LANGUAGE_OPTIONS[0].code, 'fr');
  assert.equal(LANGUAGE_OPTIONS[1].code, 'ar');
});

test('getActiveLanguageIndex returns deterministic sliding slot index', () => {
  assert.equal(getActiveLanguageIndex('fr'), 0);
  assert.equal(getActiveLanguageIndex('ar'), 1);
});

test('getOppositeLanguage toggles cleanly between fr and ar', () => {
  assert.equal(getOppositeLanguage('fr'), 'ar');
  assert.equal(getOppositeLanguage('ar'), 'fr');
});

test('mapOccasionAcrossLanguages preserves selected occasion index when switching', () => {
  const frOccasion = OCCASIONS_MAP.fr[2];
  const mappedAr = mapOccasionAcrossLanguages(frOccasion, 'fr', 'ar');
  assert.equal(mappedAr, OCCASIONS_MAP.ar[2]);

  const fallback = mapOccasionAcrossLanguages('Unknown occasion', 'fr', 'ar');
  assert.equal(fallback, OCCASIONS_MAP.ar[0]);
});
