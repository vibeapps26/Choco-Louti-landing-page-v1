import { BrandLogo } from './BrandLogo';
import { LanguageSwitcher } from './LanguageSwitcher';
import { OrnamentDivider } from './OrnamentDivider';
import { SocialMediaBar } from './SocialMediaBar';
import { TRANSLATIONS, type Language } from '../utils/i18n';

interface FooterProps {
  lang: Language;
  setLang?: (lang: Language) => void;
}

export function Footer({ lang, setLang }: FooterProps) {
  const t = TRANSLATIONS[lang].footer;
  const navT = TRANSLATIONS[lang].nav;

  const NAV_ITEMS = [
    { label: navT.home, href: '#accueil' },
    { label: navT.maison, href: '#maison' },
    { label: navT.creations, href: '#creations' },
    { label: navT.occasions, href: '#occasions' },
    { label: navT.personalization, href: '#personnalisation' },
    { label: navT.testimonials, href: '#avis' },
    { label: navT.faq, href: '#faq' },
    { label: navT.contact, href: '#contact' },
  ] as const;

  return (
    <footer className="bg-[#173D32] text-[#F3EBDD] border-t border-[#C5A45A]/35">
      <div className="mx-auto max-w-[1360px] px-4 sm:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#C5A45A]/25">
          {/* Logo & editorial statement */}
          <div className="md:col-span-5 space-y-5">
            <BrandLogo surface="dark" size="md" />
            <p className="text-[11px] tracking-[0.16em] uppercase text-[#C5A45A]">
              {t.visualIdentity}
            </p>
            <p className="text-sm leading-relaxed text-[#F3EBDD]/82 max-w-sm">
              {t.footerDesc}
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <SocialMediaBar />
              {setLang && (
                <LanguageSwitcher
                  lang={lang}
                  onChange={setLang}
                  surface="dark"
                  size="expanded"
                  showIcon
                />
              )}
            </div>
          </div>

          {/* Navigation links */}
          <div className="md:col-span-3 space-y-4">
            <h2 className="text-xs font-medium tracking-[0.2em] uppercase text-[#C5A45A]">
              {t.navigationHeading}
            </h2>
            <ul className="space-y-2.5 text-sm">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-[#F3EBDD]/85 hover:text-[#C5A45A] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C5A45A]"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact status */}
          <div className="md:col-span-4 space-y-4">
            <h2 className="text-xs font-medium tracking-[0.2em] uppercase text-[#C5A45A]">
              {t.contactMaisonHeading}
            </h2>
            <p className="text-sm leading-relaxed text-[#F3EBDD]/80">
              {t.officialCoords}
            </p>
            <a
              href="#contact"
              className="inline-flex items-center border border-[#C5A45A]/55 text-[#F3EBDD] hover:bg-[#C5A45A] hover:text-[#173D32] px-5 py-2.5 text-xs font-medium tracking-[0.1em] uppercase transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C5A45A]"
            >
              {t.accessContact}
            </a>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11.5px] sm:text-xs leading-relaxed text-[#DCE4D9]/80">
          <p>{t.allRights}</p>
          <OrnamentDivider tone="gold" align="center" className="hidden md:flex" />
          <p className="tracking-[0.12em] sm:tracking-[0.18em] uppercase text-[#C5A45A] text-center sm:text-end leading-relaxed">
            {t.footerArt}
          </p>
        </div>
      </div>
    </footer>
  );
}
