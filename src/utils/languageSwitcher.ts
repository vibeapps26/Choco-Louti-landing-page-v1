import { OCCASIONS_MAP, type Language } from './i18n';

export interface LanguageOption {
  code: Language;
  shortLabel: string;
  nativeLabel: string;
  ariaLabel: string;
}

export const LANGUAGE_OPTIONS: readonly LanguageOption[] = [
  {
    code: 'fr',
    shortLabel: 'FR',
    nativeLabel: 'Français',
    ariaLabel: 'Passer en français',
  },
  {
    code: 'ar',
    shortLabel: 'العربية',
    nativeLabel: 'العربية',
    ariaLabel: 'Passer en arabe',
  },
] as const;

export function getActiveLanguageIndex(lang: Language): number {
  const index = LANGUAGE_OPTIONS.findIndex((option) => option.code === lang);
  return index >= 0 ? index : 0;
}

export function getOppositeLanguage(lang: Language): Language {
  return lang === 'fr' ? 'ar' : 'fr';
}

export function mapOccasionAcrossLanguages(
  currentOccasion: string,
  fromLang: Language,
  toLang: Language
): string {
  const sourceList = OCCASIONS_MAP[fromLang];
  const targetList = OCCASIONS_MAP[toLang];
  const index = sourceList.indexOf(currentOccasion);
  if (index !== -1 && targetList[index]) {
    return targetList[index];
  }
  return targetList[0];
}
