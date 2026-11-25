import { useEffect, useRef, useState } from 'react';
import { Globe } from 'lucide-react';
import { type Language } from '../utils/i18n';
import {
  LANGUAGE_OPTIONS,
  getActiveLanguageIndex,
} from '../utils/languageSwitcher';

interface LanguageSwitcherProps {
  lang: Language;
  onChange: (lang: Language) => void;
  surface?: 'ivory' | 'dark';
  size?: 'compact' | 'expanded';
  showIcon?: boolean;
  className?: string;
}

export function LanguageSwitcher({
  lang,
  onChange,
  surface = 'ivory',
  size = 'compact',
  showIcon = false,
  className = '',
}: LanguageSwitcherProps) {
  const activeIndex = getActiveLanguageIndex(lang);
  const [pulseActive, setPulseActive] = useState(false);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    setPulseActive(true);
    const timer = window.setTimeout(() => setPulseActive(false), 460);
    return () => window.clearTimeout(timer);
  }, [lang]);

  const isIvory = surface === 'ivory';
  const isCompact = size === 'compact';

  const frameClasses = isIvory
    ? 'border-[#173D32]/25 bg-[#F3EBDD]/90 hover:border-[#C5A45A]/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.55)]'
    : 'border-[#C5A45A]/45 bg-[#112F26]/90 hover:border-[#C5A45A] shadow-[inset_0_1px_0_rgba(197,164,90,0.12)]';

  const thumbClasses = isIvory
    ? 'bg-[#173D32] border-b border-[#C5A45A] shadow-[0_4px_12px_-3px_rgba(23,61,50,0.38)]'
    : 'bg-[#C5A45A] shadow-[0_4px_14px_-3px_rgba(197,164,90,0.45)]';

  return (
    <div
      role="group"
      dir="ltr"
      aria-label={lang === 'fr' ? 'Sélecteur de langue' : 'محدد اللغة'}
      className={`relative inline-grid grid-cols-2 items-center border p-[3px] transition-colors duration-300 ${frameClasses} ${className}`}
    >
      {/* Smooth sliding luxury indicator */}
      <span
        aria-hidden="true"
        style={{
          transform: `translate3d(${activeIndex * 100}%, 0, 0)`,
        }}
        className={`pointer-events-none absolute top-[3px] bottom-[3px] left-[3px] w-[calc(50%-3px)] overflow-hidden transition-transform duration-[420ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${thumbClasses}`}
      >
        <span
          className={`absolute inset-0 bg-gradient-to-r from-transparent via-[#C5A45A]/30 to-transparent transition-opacity duration-500 ${
            pulseActive ? 'opacity-100 lang-thumb-sheen' : 'opacity-0'
          }`}
        />
      </span>

      {LANGUAGE_OPTIONS.map((option) => {
        const isActive = option.code === lang;
        const isArabic = option.code === 'ar';

        const textColorClass = isIvory
          ? isActive
            ? 'text-[#F3EBDD]'
            : 'text-[#173D32]/72 hover:text-[#173D32]'
          : isActive
            ? 'text-[#173D32]'
            : 'text-[#F3EBDD]/78 hover:text-[#F3EBDD]';

        return (
          <button
            key={option.code}
            type="button"
            lang={option.code}
            aria-label={option.ariaLabel}
            aria-pressed={isActive}
            onClick={() => {
              if (!isActive) {
                onChange(option.code);
              }
            }}
            className={`relative z-10 inline-flex items-center justify-center gap-1.5 whitespace-nowrap select-none cursor-pointer transition-[color,transform,opacity] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C5A45A] ${
              isCompact
                ? 'h-8 min-w-[3.1rem] px-2.5 text-[11px]'
                : 'h-9.5 min-w-[5.25rem] px-3.5 text-xs'
            } ${
              isArabic
                ? 'font-semibold tracking-normal'
                : 'font-semibold tracking-[0.12em] uppercase'
            } ${textColorClass} ${isActive ? 'scale-100' : 'scale-[0.97]'}`}
          >
            {showIcon && option.code === 'fr' && (
              <Globe
                className={`w-3.5 h-3.5 shrink-0 transition-colors duration-300 ${
                  isActive
                    ? isIvory
                      ? 'text-[#C5A45A]'
                      : 'text-[#173D32]'
                    : 'text-[#C5A45A]/80'
                }`}
                aria-hidden="true"
              />
            )}
            <span>{isCompact ? option.shortLabel : option.nativeLabel}</span>
          </button>
        );
      })}
    </div>
  );
}
