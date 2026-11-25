import { useEffect, useState, useRef } from 'react';
import { Menu, Search, X } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { LanguageSwitcher } from './LanguageSwitcher';
import { TRANSLATIONS, type Language } from '../utils/i18n';

interface NavbarProps {
  onOpenMobileMenu: () => void;
  mobileMenuOpen: boolean;
  lang: Language;
  setLang: (lang: Language) => void;
  activeSection?: string;
}

export function Navbar({ onOpenMobileMenu, mobileMenuOpen, lang, setLang, activeSection = 'accueil' }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const searchInputRef = useRef<HTMLInputElement | null>(null);
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
    ? searchItems.filter(item => item.label.toLowerCase().includes(searchQuery.toLowerCase()))
    : [];

  useEffect(() => {
    if (searchOpen) {
      searchInputRef.current?.focus();
    }
  }, [searchOpen]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 28);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-colors duration-300 ${
        scrolled
          ? 'bg-[#F3EBDD]/98 border-b border-[#C5A45A]/35 shadow-[0_6px_24px_-12px_rgba(23,61,50,0.14)] backdrop-blur-sm'
          : 'bg-[#F3EBDD] border-b border-[#173D32]/10'
      }`}
    >
      <div className="mx-auto flex max-w-[1360px] items-center justify-between gap-2 sm:gap-4 lg:gap-5 2xl:gap-8 px-3 sm:px-8 py-3 sm:py-3.5">
        <a
          href="#accueil"
          aria-label="CHOCO LOUTI — Retour à l'accueil"
          className="shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#173D32]"
        >
          <BrandLogo surface="ivory" size="md" />
        </a>

        <nav
          aria-label={t.navAria}
          className="hidden xl:flex items-center gap-4 2xl:gap-6"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = item.href === `#${activeSection}`;
            return (
              <a
                key={item.href}
                href={item.href}
                className={`nav-underline whitespace-nowrap shrink-0 text-[13px] font-medium tracking-[0.04em] transition-colors py-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C5A45A] ${
                  isActive ? 'text-[#C5A45A] font-semibold' : 'text-[#173D32] hover:text-[#3B241D]'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Search trigger & dropdown (shown in top bar on sm+, available inside MobileMenu on <sm) */}
          <div className="relative hidden sm:block">
            {!searchOpen ? (
              <button
                type="button"
                onClick={() => setSearchOpen(true)}
                aria-label={lang === 'ar' ? 'بحث' : 'Rechercher'}
                className="inline-flex items-center justify-center w-10 h-10 text-[#173D32] border border-[#173D32]/25 hover:border-[#C5A45A] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#173D32]"
              >
                <Search className="w-4 h-4" aria-hidden="true" />
              </button>
            ) : (
              <div className="fixed inset-x-3 top-2.5 sm:inset-x-auto sm:absolute sm:right-0 sm:rtl:right-auto sm:rtl:left-0 sm:top-1/2 sm:-translate-y-1/2 flex items-center bg-[#F3EBDD] border border-[#C5A45A] shadow-lg p-1.5 z-50">
                <Search className="w-4 h-4 ms-2 text-[#173D32] shrink-0" aria-hidden="true" />
                <input
                  ref={searchInputRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={lang === 'ar' ? 'بحث عن إبداع أو مناسبة...' : 'Rechercher un produit...'}
                  className="bg-transparent px-2 py-1 text-xs text-[#3B241D] placeholder:text-[#3B241D]/50 focus:outline-none flex-1 min-w-0 sm:w-56"
                />
                <button
                  type="button"
                  onClick={() => {
                    setSearchOpen(false);
                    setSearchQuery('');
                  }}
                  aria-label="Fermer la recherche"
                  className="p-1 text-[#173D32] hover:text-[#C5A45A] shrink-0"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            )}

            {searchOpen && searchQuery.trim() && (
              <div className="fixed inset-x-3 top-14 sm:inset-x-auto sm:absolute sm:right-0 sm:rtl:right-auto sm:rtl:left-0 sm:top-full sm:mt-2 sm:w-72 bg-[#F3EBDD] border border-[#C5A45A] shadow-xl py-2 z-50">
                {filteredSearch.length > 0 ? (
                  filteredSearch.map((item, idx) => (
                    <a
                      key={idx}
                      href={item.href}
                      onClick={() => {
                        setSearchOpen(false);
                        setSearchQuery('');
                      }}
                      className="block px-4 py-2 text-xs text-[#3B241D] hover:bg-[#173D32] hover:text-[#F3EBDD] transition-colors"
                    >
                      {item.label}
                    </a>
                  ))
                ) : (
                  <p className="px-4 py-2 text-xs text-[#3B241D]/65">
                    {lang === 'ar' ? 'لا توجد نتائج مطابقة' : 'Aucun résultat trouvé'}
                  </p>
                )}
              </div>
            )}
          </div>

          <LanguageSwitcher
            lang={lang}
            onChange={setLang}
            surface="ivory"
            size="compact"
            className="hidden md:inline-grid"
          />

          <a
            href="#personnalisation"
            className="hidden sm:inline-flex items-center justify-center whitespace-nowrap shrink-0 bg-[#173D32] text-[#F3EBDD] border border-[#173D32] hover:bg-[#3B241D] hover:border-[#3B241D] px-5 py-2.5 text-[12px] font-medium tracking-[0.09em] uppercase transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C5A45A]"
          >
            {t.imagineMyCreation}
          </a>

          <button
            type="button"
            onClick={onOpenMobileMenu}
            aria-label={t.openMobileMenu}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation-drawer"
            className="xl:hidden inline-flex items-center justify-center w-11 h-11 text-[#173D32] border border-[#173D32]/25 hover:border-[#C5A45A] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#173D32]"
          >
            <Menu className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </header>
  );
}
