import { useState, useEffect, useRef } from 'react';
import { BrandStatement } from './components/BrandStatement';
import { ContactSection } from './components/ContactSection';
import { CreationGallery } from './components/CreationGallery';
import { FAQAccordion } from './components/FAQAccordion';
import { Footer } from './components/Footer';
import { GiftingSection } from './components/GiftingSection';
import { HeroSection } from './components/HeroSection';
import { MaisonSection } from './components/MaisonSection';
import { MobileMenu } from './components/MobileMenu';
import { Navbar } from './components/Navbar';
import { PersonalizationSection } from './components/PersonalizationSection';
import { ProductDetailSection } from './components/ProductDetailSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { NewsletterSignup } from './components/NewsletterSignup';
import { CookieBanner } from './components/CookieBanner';
import { PageSkeleton } from './components/PageSkeleton';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';
import { ScrollProgress } from './components/ScrollProgress';
import { BackToTopButton } from './components/BackToTopButton';
import { SectionDivider } from './components/SectionDivider';
import { BRAND_ASSETS } from './tokens/brand';
import { useImagePreloader } from './hooks/useImagePreloader';
import { OCCASIONS_MAP, type Language } from './utils/i18n';
import { mapOccasionAcrossLanguages } from './utils/languageSwitcher';

const CRITICAL_PRELOAD_IMAGES: readonly string[] = [
  BRAND_ASSETS.logo.src,
  BRAND_ASSETS.logoDarkGold.src,
  BRAND_ASSETS.signatureGiftbox.src,
  BRAND_ASSETS.macroRose.src,
  BRAND_ASSETS.architecturalBlooms.src,
];

const SECTION_SEO: Record<Language, Record<string, { title: string; desc: string }>> = {
  fr: {
    accueil: {
      title: 'CHOCO LOUTI — Artisan Chocolatier & Fleurs en Chocolat sur Mesure',
      desc: 'CHOCO LOUTI imagine le chocolat artisanal comme un art de l’attention. Fleurs en chocolat personnalisées et coffrets raffinés pour vos instants précieux et mariages.',
    },
    maison: {
      title: 'La Maison CHOCO LOUTI — L’Art du Chocolat Artisanal',
      desc: 'Découvrez la philosophie de la Maison CHOCO LOUTI, où chaque fleur en chocolat noir et blanc est sculptée à la main avec passion.',
    },
    creations: {
      title: 'Nos Créations — Coffrets & Fleurs en Chocolat | CHOCO LOUTI',
      desc: 'Explorez nos coffrets signature et nos fleurs en chocolat sculptées en collerettes de dentelle pour vos cadeaux d’exception.',
    },
    occasions: {
      title: 'Occasions & Mariages — Chocolat d’Exception | CHOCO LOUTI',
      desc: 'Célébrez vos mariages, fiançailles, anniversaires et naissances avec des créations chocolatées sur mesure.',
    },
    personnalisation: {
      title: 'Sur Mesure & Personnalisation — CHOCO LOUTI',
      desc: 'Imaginez votre composition chocolatée unique en partageant votre occasion et votre inspiration.',
    },
    avis: {
      title: 'Avis Clients & Témoignages — CHOCO LOUTI',
      desc: 'Découvrez les retours enthousiastes de nos clients d’exception pour leurs mariages et événements.',
    },
    faq: {
      title: 'Foire Aux Questions — CHOCO LOUTI',
      desc: 'Toutes les réponses à vos questions concernant nos créations en chocolat personnalisées et commandes sur mesure.',
    },
    contact: {
      title: 'Contact & Commande WhatsApp — CHOCO LOUTI',
      desc: 'Entrez en contact avec la Maison CHOCO LOUTI par e-mail ou via WhatsApp (+216 23331098) pour préparer votre projet.',
    },
  },
  ar: {
    accueil: {
      title: 'CHOCO LOUTI — شوكولاتة حرفية وزهور الشوكولاتة المصنوعة حسب الطلب',
      desc: 'CHOCO LOUTI تقدم الشوكولاتة الحرفية كفن اهتمام. زهور الشوكولاتة المخصصة وصناديق الهدايا الفاخرة لمناسباتك الثمينة وحفلات الزفاف.',
    },
    maison: {
      title: 'دار CHOCO LOUTI — فن الشوكولاتة الحرفية الفاخرة',
      desc: 'اكتشف فلسفة دار CHOCO LOUTI، حيث يتم نحت كل زهرة شوكولاتة يدوياً وبكل شغف.',
    },
    creations: {
      title: 'إبداعاتنا — صناديق وزهور الشوكولاتة الفاخرة | CHOCO LOUTI',
      desc: 'استكشف صناديقنا المميزة وزهور الشوكولاتة المنحوتة في أطواق دانتيل لهداياك الاستثنائية.',
    },
    occasions: {
      title: 'المناسبات والزفاف — شوكولاتة استثنائية | CHOCO LOUTI',
      desc: 'احتفل بحفلات الزفاف والخطوبة وأعياد الميلاد والمواليد بإبداعات شوكولاتة مصممة خصيصاً.',
    },
    personnalisation: {
      title: 'التصميم حسب الطلب والتخصيص — CHOCO LOUTI',
      desc: 'تخيل تنسيق الشوكولاتة الفريد الخاص بك من خلال مشاركة مناسبتك وإلهامك.',
    },
    avis: {
      title: 'آراء وشهادات العملاء — CHOCO LOUTI',
      desc: 'اكتشف انطباعات عملائنا المميزين في حفلات زفافهم ومناسباتهم الخاصة.',
    },
    faq: {
      title: 'الأسئلة الشائعة — CHOCO LOUTI',
      desc: 'جميع الإجابات على أسئلتك حول إبداعات الشوكولاتة المخصصة والطلبات الخاصة.',
    },
    contact: {
      title: 'اتصل بنا وطلب عبر الواتساب — CHOCO LOUTI',
      desc: 'تواصل مع دار CHOCO LOUTI عبر البريد الإلكتروني أو الواتساب (+216 23331098) لتحضير مشروعك.',
    },
  },
};

export default function App() {
  const { isReady } = useImagePreloader(CRITICAL_PRELOAD_IMAGES, {
    timeoutMs: 1400,
    minimumDelayMs: 160,
  });
  const loading = !isReady;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lang, setLang] = useState<Language>('fr');
  const [selectedOccasion, setSelectedOccasion] = useState<string>(OCCASIONS_MAP.fr[0]);
  const [activeSection, setActiveSection] = useState<string>('accueil');
  const [langTransitionKey, setLangTransitionKey] = useState(0);
  const langTransitionTimerRef = useRef<number | null>(null);
  const [isLangTransitioning, setIsLangTransitioning] = useState(false);

  useEffect(() => {
    return () => {
      if (langTransitionTimerRef.current !== null) {
        window.clearTimeout(langTransitionTimerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return;

    const sectionIds = ['accueil', 'maison', 'creations', 'occasions', 'personnalisation', 'avis', 'faq', 'contact'];
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
            break;
          }
        }
      },
      { threshold: 0.25, rootMargin: '-80px 0px -40% 0px' }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [loading]);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

    const seoData = SECTION_SEO[lang][activeSection] || SECTION_SEO[lang].accueil;
    document.title = seoData.title;

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', seoData.desc);
    }
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', seoData.title);
    }
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
      ogDesc.setAttribute('content', seoData.desc);
    }
  }, [lang, activeSection]);

  const handleSelectLang = (newLang: Language) => {
    if (newLang === lang) return;

    if (langTransitionTimerRef.current !== null) {
      window.clearTimeout(langTransitionTimerRef.current);
    }

    setIsLangTransitioning(true);
    setLangTransitionKey((prev) => prev + 1);
    setSelectedOccasion((prev) => mapOccasionAcrossLanguages(prev, lang, newLang));
    setLang(newLang);

    langTransitionTimerRef.current = window.setTimeout(() => {
      setIsLangTransitioning(false);
      langTransitionTimerRef.current = null;
    }, 400);
  };

  if (loading) {
    return <PageSkeleton />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#F3EBDD] text-[#3B241D] overflow-x-clip">
      <ScrollProgress />

      <a
        href="#contenu-principal"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:bg-[#173D32] focus:text-[#F3EBDD] focus:px-4 focus:py-2 focus:text-xs focus:uppercase focus:tracking-widest"
      >
        {lang === 'fr' ? 'Aller au contenu principal' : 'الانتقال إلى المحتوى الرئيسي'}
      </a>

      <Navbar
        mobileMenuOpen={mobileMenuOpen}
        onOpenMobileMenu={() => setMobileMenuOpen(true)}
        lang={lang}
        setLang={handleSelectLang}
        activeSection={activeSection}
      />

      <MobileMenu
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        lang={lang}
        setLang={handleSelectLang}
      />

      <main
        id="contenu-principal"
        data-lang-transition={langTransitionKey}
        className={`flex-1 ${isLangTransitioning ? 'lang-content-switching' : ''}`}
      >
        <HeroSection lang={lang} />
        <SectionDivider surface="ivory" />
        <MaisonSection lang={lang} />
        <SectionDivider surface="ivory" />
        <CreationGallery lang={lang} />
        <SectionDivider surface="ivory" />
        <ProductDetailSection lang={lang} />
        <SectionDivider surface="ivory" />
        <GiftingSection
          selectedOccasion={selectedOccasion}
          onSelectOccasion={setSelectedOccasion}
          lang={lang}
        />
        <SectionDivider surface="ivory" />
        <PersonalizationSection
          selectedOccasion={selectedOccasion}
          onSelectOccasion={setSelectedOccasion}
          lang={lang}
        />
        <SectionDivider surface="green" />
        <TestimonialsSection lang={lang} />
        <SectionDivider surface="sage" />
        <NewsletterSignup lang={lang} />
        <SectionDivider surface="ivory" />
        <BrandStatement lang={lang} />
        <SectionDivider surface="sage" />
        <FAQAccordion lang={lang} />
        <SectionDivider surface="ivory" />
        <ContactSection
          selectedOccasion={selectedOccasion}
          onSelectOccasion={setSelectedOccasion}
          lang={lang}
        />
      </main>

      <Footer lang={lang} setLang={handleSelectLang} />

      <BackToTopButton lang={lang} />
      <WhatsAppFloatingButton lang={lang} />
      <CookieBanner lang={lang} />
    </div>
  );
}
