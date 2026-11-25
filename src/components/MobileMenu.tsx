import { useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { OrnamentDivider } from './OrnamentDivider';
import { TRANSLATIONS, type Language } from '../utils/i18n';

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  lang: Language;
  setLang: (lang: Language) => void;
}

export function MobileMenu({ open, onClose, lang, setLang }: MobileMenuProps) {
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const t = TRANSLATIONS[lang].nav;

  const NAV_ITEMS = [
    { label: t.home, href: '#accueil' },
    { label: t.maison, href: '#maison' },
    { label: t.creations, href: '#creations' },
    { label: t.occasions, href: '#occasions' },
    { label: t.personalization, href: '#personnalisation' },
    { label: t.testimonials, href: '#avis' },
    { label: t.faq, href: '#faq' },
    { label: t.contact, href: '#contact' },
  ] as const;

  useEffect(() => {
    if (!open) return;

    closeButtonRef.current?.focus();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [open, onClose]);

  const handleLanguageToggle = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setLang(lang === 'fr' ? 'ar' : 'fr');
      setIsAnimating(false);
    }, 220);
  };

  if (!open) return null;

  return (
    <div
      id="mobile-navigation-drawer"
      role="dialog"
      aria-modal="true"
      aria-label={t.drawerLabel}
      className="fixed inset-0 z-50 xl:hidden flex flex-col bg-[#173D32] text-[#F3EBDD]"
    >
      <div className="flex items-center justify-between px-5 py-4 border-b border-[#C5A45A]/30">
        <BrandLogo surface="dark" size="sm" />
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={handleLanguageToggle}
            aria-label={lang === 'fr' ? 'Passer en arabe' : 'Passer en français'}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-[12px] font-medium tracking-[0.08em] uppercase border border-[#C5A45A]/50 text-[#F3EBDD] hover:border-[#C5A45A] hover:text-[#C5A45A] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C5A45A] ${
              isAnimating ? 'opacity-0 scale-95 translate-y-1' : 'opacity-100 scale-100 translate-y-0'
            }`}
          >
            <span>{lang === 'fr' ? 'العربية' : 'Français'}</span>
          </button>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label={t.closeMobileMenu}
            className="inline-flex items-center justify-center w-11 h-11 text-[#F3EBDD] border border-[#C5A45A]/45 hover:border-[#C5A45A] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C5A45A]"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>
      </div>

      <nav
        aria-label={t.mobileNavAria}
        className="flex-1 overflow-y-auto px-6 py-8 flex flex-col justify-between gap-8"
      >
        <ul className="space-y-1">
          {NAV_ITEMS.map((item, idx) => (
            <li key={item.href} className="border-b border-[#F3EBDD]/12">
              <a
                href={item.href}
                onClick={onClose}
                className="flex items-baseline justify-between py-3.5 font-editorial text-2xl text-[#F3EBDD] hover:text-[#C5A45A] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C5A45A]"
              >
                <span>{item.label}</span>
                <span className="font-sans text-[11px] tracking-[0.2em] text-[#C5A45A]/80 tabular-nums">
                  {String(idx + 1).padStart(2, '0')}
                </span>
              </a>
            </li>
          ))}
        </ul>

        <div className="space-y-6 pt-2">
          <OrnamentDivider tone="gold" align="center" />
          <a
            href="#personnalisation"
            onClick={onClose}
            className="flex w-full items-center justify-center bg-[#C5A45A] text-[#173D32] px-6 py-3.5 text-xs font-semibold tracking-[0.12em] uppercase hover:bg-[#F3EBDD] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F3EBDD]"
          >
            {t.imagineMyCreation}
          </a>
          <p className="text-center text-[11px] tracking-[0.22em] uppercase text-[#DCE4D9]/80">
            {lang === 'fr' ? 'L’art du chocolat sur mesure' : 'فن الشوكولاتة المصنوعة حسب الطلب'}
          </p>
        </div>
      </nav>
    </div>
  );
}
