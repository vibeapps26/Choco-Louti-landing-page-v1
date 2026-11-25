import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import { TRANSLATIONS, type Language } from '../utils/i18n';
import { OrnamentDivider } from './OrnamentDivider';
import { ScrollReveal } from './ScrollReveal';
import { getWrappedIndex } from '../utils/chocoLogic';

interface TestimonialsSectionProps {
  lang: Language;
}

export function TestimonialsSection({ lang }: TestimonialsSectionProps) {
  const t = TRANSLATIONS[lang].testimonials;
  const items = t.items;
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => getWrappedIndex(prev, 1, items.length));
    }, 7000);
    return () => clearInterval(timer);
  }, [items.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => getWrappedIndex(prev, -1, items.length));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => getWrappedIndex(prev, 1, items.length));
  };

  const current = items[currentIndex];

  return (
    <section
      id="avis"
      aria-labelledby="testimonials-heading"
      className="bg-[#173D32] text-[#F3EBDD] py-20 sm:py-28 overflow-hidden border-b border-[#C5A45A]/25"
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-8">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
            <p className="text-xs font-medium tracking-[0.22em] uppercase text-[#C5A45A]">
              {t.eyebrow}
            </p>
            <h2
              id="testimonials-heading"
              className="font-editorial font-normal text-[#F3EBDD] text-[clamp(2rem,3.5vw,3.2rem)] leading-[1.15] text-balance"
            >
              {t.title}
            </h2>
            <OrnamentDivider tone="gold" align="center" className="pt-2" />
            <p className="text-sm sm:text-base text-[#F3EBDD]/80 leading-relaxed pt-2">
              {t.desc}
            </p>
          </div>
        </ScrollReveal>

        {/* Carousel card with shadow-lift on hover */}
        <ScrollReveal delayMs={100}>
          <div className="relative bg-[#3B241D]/90 border border-[#C5A45A]/45 p-8 sm:p-12 lg:p-16 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.5)] hover:-translate-y-1 hover:shadow-[0_30px_70px_-15px_rgba(197,164,90,0.3)] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]">
            <div className="absolute top-6 right-8 text-[#C5A45A]/20 pointer-events-none" aria-hidden="true">
              <Quote className="w-20 h-20 sm:w-28 sm:h-28" />
            </div>

            <div className="relative z-10 max-w-3xl mx-auto text-center space-y-8">
              <div className="flex justify-center items-center gap-1.5 text-[#C5A45A]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
                ))}
              </div>

              <blockquote className="font-editorial italic text-xl sm:text-2xl lg:text-3xl leading-[1.5] text-[#F3EBDD] text-balance">
                « {current.quote} »
              </blockquote>

              <div className="space-y-1 pt-2">
                <p className="font-editorial text-xl sm:text-2xl text-[#C5A45A]">
                  {current.author}
                </p>
                <p className="text-xs tracking-[0.16em] uppercase text-[#DCE4D9]/80">
                  {current.occasion}
                </p>
              </div>

              {/* Controls & Pagination */}
              <div className="pt-6 flex items-center justify-between border-t border-[#C5A45A]/25">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handlePrev}
                    aria-label={lang === 'ar' ? 'الشهادة السابقة' : 'Témoignage précédent'}
                    className="inline-flex items-center justify-center w-11 h-11 border border-[#C5A45A]/40 text-[#F3EBDD] hover:bg-[#C5A45A] hover:text-[#173D32] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C5A45A]"
                  >
                    <ChevronLeft className="w-5 h-5 rtl:rotate-180" aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    aria-label={lang === 'ar' ? 'الشهادة التالية' : 'Témoignage suivant'}
                    className="inline-flex items-center justify-center w-11 h-11 border border-[#C5A45A]/40 text-[#F3EBDD] hover:bg-[#C5A45A] hover:text-[#173D32] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C5A45A]"
                  >
                    <ChevronRight className="w-5 h-5 rtl:rotate-180" aria-hidden="true" />
                  </button>
                </div>

                <div className="flex items-center gap-2">
                  {items.map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setCurrentIndex(idx)}
                      aria-label={`${lang === 'ar' ? 'الانتقال إلى الشهادة' : 'Aller au témoignage'} ${idx + 1}`}
                      className={`h-2 transition-all duration-300 ${
                        currentIndex === idx
                          ? 'w-8 bg-[#C5A45A]'
                          : 'w-2 bg-[#F3EBDD]/30 hover:bg-[#F3EBDD]/60'
                      }`}
                    />
                  ))}
                </div>

                <span className="text-xs tracking-[0.15em] text-[#C5A45A] tabular-nums">
                  {String(currentIndex + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}
                </span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
