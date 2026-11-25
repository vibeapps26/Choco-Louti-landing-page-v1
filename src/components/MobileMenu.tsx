import { useEffect, useRef, useState } from 'react';
import { Globe, Search, X } from 'lucide-react';
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
  const [searchQuery, setSearchQuery] = useState('');
  const t = TRANSLATIONS[lang].nav;

  const searchItems = [
    { label: lang === 'ar' ? 'الصندوق المميز' : 'Coffret Signature', href: '#creations' },
    { label: lang === 'ar' ? 'ثلاثية الزهور' : 'Triptyque Floral', href: '#creations' },
    { label: lang === 'ar' ? 'وردة الشوكولاتة الداكنة' : 'Rose en Chocolat Noir', href: '#creations' },
    { label: lang === 'ar' ? 'الزفاف والخطوبة' : 'Mariages & fiançailles', href: '#occasions' },
    { label: lang === 'ar' ? 'أعياد الميلاد' : 'Anniversaires', href: '#occasions' },
    { label: lang === 'ar' ? 'التخصيص' : 'Personnalisation', href: '#personnalisation' },
    { label: lang === 'ar' ? 'آراء العملاء' : 'Témoignages & Avis', href: '#avis' },
    { label: lang === 'ar' ? 'الأسئلة الشائعة' : 'FAQ', href: '#faq' },
    { label: lang === 'ar' ? 'اتصل بنا' : 'Contact', href: '#contact' },
  ];

  const filteredSearch = searchQuery.trim()
    ? searchItems.filter((item) => item.label.toLowerCase().includes(searchQuery.toLowerCase()))
    : [];

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
      className="fixed inset-0 z-[60] xl:hidden flex flex-col bg-[#173D32] text-[#F3EBDD]"
    >
      <div className="flex items-center justify-between px-5 py-4 border-b border-[#C5A45A]/30">
        <BrandLogo surface="dark" size="sm" />
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

      <nav
        aria-label={t.mobileNavAria}
        className="flex-1 overflow-y-auto px-6 py-4 sm:py-6 flex flex-col justify-between gap-5"
      >
        <div className="space-y-4">
          <div className="relative sm:hidden">
            <div className="flex items-center border border-[#C5A45A]/45 bg-[#173D32] px-3 py-2">
              <Search className="w-4 h-4 text-[#C5A45A] shrink-0" aria-hidden="true" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={lang === 'ar' ? 'بحث عن إبداع أو مناسبة...' : 'Rechercher un produit...'}
                aria-label={lang === 'ar' ? 'بحث' : 'Rechercher'}
                className="bg-transparent px-2.5 py-0.5 text-xs text-[#F3EBDD] placeholder:text-[#F3EBDD]/55 focus:outline-none flex-1 min-w-0"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  aria-label="Effacer la recherche"
                  className="text-[#C5A45A] hover:text-[#F3EBDD] p-0.5 shrink-0"
                >
                  <X className="w-3.5 h-3.5" aria-hidden="true" />
                </button>
              )}
            </div>
            {searchQuery.trim() && (
              <div className="mt-1.5 border border-[#C5A45A]/45 bg-[#112F26] py-1">
                {filteredSearch.length > 0 ? (
                  filteredSearch.map((item, idx) => (
                    <a
                      key={idx}
                      href={item.href}
                      onClick={() => {
                        setSearchQuery('');
                        onClose();
                      }}
                      className="block px-3.5 py-2 text-xs text-[#F3EBDD] hover:bg-[#C5A45A] hover:text-[#173D32] transition-colors"
                    >
                      {item.label}
                    </a>
                  ))
                ) : (
                  <p className="px-3.5 py-2 text-xs text-[#F3EBDD]/65">
                    {lang === 'ar' ? 'لا توجد نتائج مطابقة' : 'Aucun résultat trouvé'}
                  </p>
                )}
              </div>
            )}
          </div>

          <ul className="space-y-0.5">
          {NAV_ITEMS.map((item, idx) => (
            <li key={item.href} className="border-b border-[#F3EBDD]/12">
              <a
                href={item.href}
                onClick={onClose}
                className="flex items-baseline justify-between py-2.5 sm:py-3 font-editorial text-xl sm:text-2xl text-[#F3EBDD] hover:text-[#C5A45A] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C5A45A]"
              >
                <span>{item.label}</span>
                <span className="font-sans text-[11px] tracking-[0.2em] text-[#C5A45A]/80 tabular-nums">
                  {String(idx + 1).padStart(2, '0')}
                </span>
              </a>
            </li>
          ))}
          </ul>
        </div>

        <div className="space-y-3.5 pt-1 pb-2">
          <OrnamentDivider tone="gold" align="center" />
          <a
            href="#personnalisation"
            onClick={onClose}
            className="flex w-full items-center justify-center bg-[#C5A45A] text-[#173D32] px-6 py-3 text-xs font-semibold tracking-[0.12em] uppercase hover:bg-[#F3EBDD] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F3EBDD]"
          >
            {t.imagineMyCreation}
          </a>

          <button
            type="button"
            onClick={handleLanguageToggle}
            aria-label={lang === 'fr' ? 'Passer en arabe' : 'Passer en français'}
            className={`flex w-full items-center justify-center gap-2.5 px-5 py-2.5 text-xs font-medium tracking-[0.12em] uppercase border border-[#C5A45A]/50 text-[#F3EBDD] hover:border-[#C5A45A] hover:text-[#C5A45A] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C5A45A] ${
              isAnimating ? 'opacity-0 scale-95 translate-y-1' : 'opacity-100 scale-100 translate-y-0'
            }`}
          >
            <Globe className="w-4 h-4 text-[#C5A45A]" aria-hidden="true" />
            <span>{lang === 'fr' ? 'Version Arabe — العربية' : 'Version Française — Français'}</span>
          </button>

          <p className="text-center text-[11px] tracking-[0.22em] uppercase text-[#DCE4D9]/80">
            {lang === 'fr' ? 'L’art du chocolat sur mesure' : 'فن الشوكولاتة المصنوعة حسب الطلب'}
          </p>
        </div>
      </nav>
    </div>
  );
}
