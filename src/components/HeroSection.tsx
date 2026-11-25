import { useEffect, useRef, useState } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { BRAND_ASSETS } from '../tokens/brand';
import { OrnamentDivider } from './OrnamentDivider';
import { ProductImage } from './ProductImage';
import { ScrollReveal } from './ScrollReveal';
import { TRANSLATIONS, type Language } from '../utils/i18n';

interface HeroSectionProps {
  lang: Language;
}

export function HeroSection({ lang }: HeroSectionProps) {
  const topSentinelRef = useRef<HTMLDivElement | null>(null);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const t = TRANSLATIONS[lang].hero;

  useEffect(() => {
    const sentinel = topSentinelRef.current;
    if (!sentinel || typeof IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setHasScrolled(!entry.isIntersecting);
      },
      { threshold: 0, rootMargin: '-72px 0px 0px 0px' }
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReduced) return;

    const handleScroll = () => {
      if (window.scrollY <= window.innerHeight) {
        setScrollY(window.scrollY);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const parallaxOffset = scrollY * 0.14;

  return (
    <section
      id="accueil"
      aria-labelledby="hero-heading"
      className="relative bg-[#173D32] text-[#F3EBDD] overflow-hidden"
    >
      {/* Top 44px sentinel to fade out scroll cue cleanly via IntersectionObserver */}
      <div
        ref={topSentinelRef}
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-0 h-11 w-px"
      />

      <div className="mx-auto max-w-[1360px] px-4 sm:px-8 pt-6 pb-6 sm:pt-10 sm:pb-9 lg:pt-9 lg:pb-6 xl:pt-10 xl:pb-7">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-5 sm:gap-y-7 lg:gap-x-12 lg:gap-y-6 items-center">
          {/* Block 1: Editorial eyebrow + headline */}
          <ScrollReveal
            delayMs={0}
            className="lg:col-span-5 lg:col-start-1 lg:row-start-1 lg:self-end space-y-3 sm:space-y-4 lg:pr-2"
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-7 sm:w-8 bg-[#C5A45A]" aria-hidden="true" />
              <p className="text-[11px] sm:text-xs font-medium tracking-[0.22em] uppercase text-[#C5A45A]">
                {t.eyebrow}
              </p>
            </div>

            <h1
              id="hero-heading"
              className="font-editorial font-normal text-[#F3EBDD] text-[clamp(2.15rem,4.3vw,4.15rem)] leading-[1.05] tracking-[-0.015em] text-balance"
            >
              {t.titlePart1}
              <span className="italic text-[#C5A45A]">{t.titleAccent}</span>
            </h1>
          </ScrollReveal>

          {/* Block 2: Dominant asymmetric product showcase with parallax */}
          <ScrollReveal
            delayMs={90}
            className="lg:col-span-7 lg:col-start-6 lg:row-start-1 lg:row-span-2"
          >
            <div
              className="relative mx-auto max-w-[540px] lg:max-w-[590px] xl:max-w-[630px] lg:ml-auto transition-transform duration-100 ease-out"
              style={{ transform: `translate3d(0, ${parallaxOffset}px, 0)` }}
            >
              <div className="bg-[#F3EBDD] p-2.5 sm:p-3.5 border border-[#C5A45A]/50 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.48)]">
                <div className="relative aspect-[4/3.1] sm:aspect-[5/4.8] lg:aspect-[10/9.8] overflow-hidden bg-[#173D32]">
                  <ProductImage
                    src={BRAND_ASSETS.signatureGiftbox.src}
                    alt={BRAND_ASSETS.signatureGiftbox.alt}
                    width={BRAND_ASSETS.signatureGiftbox.width}
                    height={BRAND_ASSETS.signatureGiftbox.height}
                    priority
                    imgClassName="object-cover object-[50%_44%] sm:object-[50%_50%] scale-[1.02] transition-transform duration-700 ease-out hover:scale-[1.04]"
                    fallbackLabel={t.boxCaption}
                  />
                </div>

                <div className="pt-2.5 sm:pt-3.5 pb-0.5 px-1 flex items-center justify-between gap-4 text-[#3B241D]">
                  <span className="font-editorial italic text-sm sm:text-lg">
                    {t.boxCaption}
                  </span>
                  <OrnamentDivider tone="gold" align="left" className="hidden sm:flex" />
                </div>
              </div>

              {/* Intimate sculpted rose detail inset on tablet/desktop */}
              <div className="hidden md:block absolute -left-8 lg:-left-10 bottom-12 w-32 lg:w-36 xl:w-40 bg-[#F3EBDD] p-2 border border-[#C5A45A]/60 shadow-[0_18px_40px_-14px_rgba(0,0,0,0.52)]">
                <div className="aspect-[4/4.6] overflow-hidden bg-[#173D32]">
                  <ProductImage
                    src={BRAND_ASSETS.macroRose.src}
                    alt={BRAND_ASSETS.macroRose.alt}
                    width={BRAND_ASSETS.macroRose.width}
                    height={BRAND_ASSETS.macroRose.height}
                    priority
                    imgClassName="object-cover object-[50%_49%] scale-[1.05]"
                    fallbackLabel={t.macroLabel}
                  />
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Block 3: Concise storytelling, primary CTAs */}
          <ScrollReveal
            delayMs={150}
            className="lg:col-span-5 lg:col-start-1 lg:row-start-2 lg:self-start space-y-5 sm:space-y-6 lg:pr-2"
          >
            <p className="max-w-lg text-[15px] sm:text-[17px] leading-[1.65] sm:leading-[1.7] text-[#F3EBDD]/88 font-normal">
              {t.description}
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
              <a
                href="#creations"
                className="inline-flex items-center justify-center gap-2.5 whitespace-nowrap shrink-0 bg-[#C5A45A] text-[#173D32] hover:bg-[#F3EBDD] px-6 sm:px-7 py-3.5 text-xs font-semibold tracking-[0.11em] uppercase transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F3EBDD]"
              >
                <span>{t.discoverCreations}</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>

              <a
                href="#personnalisation"
                className="inline-flex items-center justify-center whitespace-nowrap shrink-0 border border-[#F3EBDD]/45 text-[#F3EBDD] hover:border-[#C5A45A] hover:text-[#C5A45A] px-6 sm:px-7 py-3.5 text-xs font-medium tracking-[0.11em] uppercase transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C5A45A]"
              >
                {t.imagineCreation}
              </a>
            </div>

            <p className="pt-3.5 border-t border-[#C5A45A]/25 text-[11px] sm:text-xs text-[#DCE4D9]/85 tracking-[0.05em] leading-relaxed">
              {t.features}
            </p>
          </ScrollReveal>
        </div>

        {/* Subtle scroll-down indicator */}
        <div
          aria-hidden={hasScrolled}
          className={`mt-5 lg:mt-4 flex justify-center transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            hasScrolled
              ? 'opacity-0 translate-y-2 pointer-events-none'
              : 'opacity-100 translate-y-0'
          }`}
        >
          <a
            href="#maison"
            aria-label={t.scrollAria}
            tabIndex={hasScrolled ? -1 : 0}
            className="group inline-flex flex-col items-center gap-1.5 py-1 px-4 text-[#C5A45A] hover:text-[#F3EBDD] transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C5A45A]"
          >
            <span className="text-[10px] font-medium tracking-[0.26em] uppercase text-[#C5A45A]/90 group-hover:text-[#F3EBDD] transition-colors">
              {t.scroll}
            </span>
            <span
              aria-hidden="true"
              className="relative flex items-center justify-center w-7 h-9 bg-[#173D32] border border-[#C5A45A]/45 group-hover:border-[#C5A45A] transition-colors overflow-hidden"
            >
              <span className="absolute top-1.5 w-px h-3 bg-[#C5A45A] scroll-cue-drop" />
              <ChevronDown className="w-3.5 h-3.5 mt-3.5 text-[#C5A45A] group-hover:text-[#F3EBDD] transition-colors" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
