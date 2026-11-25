import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Expand, X } from 'lucide-react';
import { BRAND_ASSETS } from '../tokens/brand';
import { getWrappedIndex } from '../utils/chocoLogic';
import { ProductImage } from './ProductImage';
import { ScrollReveal } from './ScrollReveal';
import { TRANSLATIONS, type Language } from '../utils/i18n';

interface CreationGalleryProps {
  lang: Language;
}

export function CreationGallery({ lang }: CreationGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const t = TRANSLATIONS[lang].creations;
  const creations = t.items.map((item, idx) => ({
    ...item,
    image:
      idx === 0
        ? BRAND_ASSETS.signatureGiftbox
        : idx === 1
        ? BRAND_ASSETS.architecturalBlooms
        : BRAND_ASSETS.macroRose,
  }));

  const activeCreation =
    activeIndex !== null ? creations[activeIndex] : null;

  useEffect(() => {
    if (activeIndex === null) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveIndex(null);
      } else if (event.key === 'ArrowRight') {
        setActiveIndex((prev) =>
          prev === null ? null : getWrappedIndex(prev, 1, creations.length)
        );
      } else if (event.key === 'ArrowLeft') {
        setActiveIndex((prev) =>
          prev === null ? null : getWrappedIndex(prev, -1, creations.length)
        );
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [activeIndex, creations.length]);

  const primary = creations[0];
  const secondary = creations[1];
  const detail = creations[2];

  return (
    <section
      id="creations"
      aria-labelledby="creations-heading"
      className="bg-[#F3EBDD] text-[#3B241D] py-20 sm:py-28"
    >
      <div className="mx-auto max-w-[1360px] px-4 sm:px-8">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-[#173D32]/15">
            <div className="space-y-3 max-w-2xl">
              <p className="text-xs font-medium tracking-[0.22em] uppercase text-[#173D32]">
                {t.eyebrow}
              </p>
              <h2
                id="creations-heading"
                className="font-editorial font-normal text-[#173D32] text-[clamp(2rem,3.4vw,3.15rem)] leading-[1.12] text-balance"
              >
                {t.title}
              </h2>
            </div>
            <p className="max-w-md text-sm sm:text-base leading-relaxed text-[#3B241D]/80">
              {t.desc}
            </p>
          </div>
        </ScrollReveal>

        {/* Asymmetric editorial gallery layout */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Dominant focal creation */}
          <ScrollReveal className="lg:col-span-7">
            <article className="group bg-[#DCE4D9]/40 border border-[#173D32]/12 p-4 sm:p-6 transition-all duration-500 ease-out hover:border-[#C5A45A]/65 hover:shadow-[0_22px_50px_-24px_rgba(23,61,50,0.28)]">
              <div className="relative aspect-[4/4.6] sm:aspect-[5/5] overflow-hidden bg-[#173D32]">
                <div className="w-full h-full transform transition-transform duration-700 ease-out group-hover:scale-[1.05] group-hover:rotate-[0.6deg]">
                  <ProductImage
                    src={primary.image.src}
                    alt={primary.image.alt}
                    width={primary.image.width}
                    height={primary.image.height}
                    imgClassName="object-cover object-[50%_50%] scale-[1.02] opacity-100 transition-all duration-700 ease-out group-hover:opacity-0 motion-reduce:transition-none motion-reduce:group-hover:opacity-100"
                    fallbackLabel={primary.title}
                  />
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 ease-out group-hover:opacity-100 motion-reduce:hidden"
                  >
                    <ProductImage
                      src={primary.image.src}
                      alt=""
                      width={primary.image.width}
                      height={primary.image.height}
                      imgClassName="object-cover object-[56%_68%] scale-[1.52]"
                      fallbackLabel={primary.title}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#173D32]/25 via-transparent to-transparent" />
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveIndex(0)}
                  aria-label={`${t.observeBig} : ${primary.title}`}
                  className="absolute bottom-4 right-4 z-10 inline-flex items-center gap-2 bg-[#173D32]/90 text-[#F3EBDD] hover:bg-[#173D32] border border-[#C5A45A]/60 group-hover:border-[#C5A45A] px-4 py-2 text-xs tracking-[0.08em] uppercase transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C5A45A]"
                >
                  <Expand className="w-3.5 h-3.5 text-[#C5A45A]" aria-hidden="true" />
                  <span>{t.observeBig}</span>
                </button>
              </div>

              <div className="pt-5 space-y-2">
                <p className="text-[11px] tracking-[0.18em] uppercase text-[#B9875B] font-medium">
                  {primary.subtitle}
                </p>
                <h3 className="font-editorial text-2xl sm:text-[28px] text-[#173D32] leading-snug">
                  {primary.title}
                </h3>
                <p className="text-sm sm:text-[15px] leading-relaxed text-[#3B241D]/85 max-w-2xl">
                  {primary.caption}
                </p>
              </div>
            </article>
          </ScrollReveal>

          {/* Right column */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <ScrollReveal delayMs={90}>
              <article className="group border border-[#C5A45A]/35 bg-[#F3EBDD] p-4 transition-all duration-500 ease-out hover:border-[#C5A45A]/80 hover:shadow-[0_20px_44px_-22px_rgba(23,61,50,0.24)]">
                <div className="relative aspect-[4/4.6] max-w-[380px] mx-auto overflow-hidden bg-[#F3EBDD]">
                  <div className="w-full h-full transform transition-transform duration-700 ease-out group-hover:scale-[1.06] group-hover:rotate-[-0.75deg]">
                    <ProductImage
                      src={secondary.image.src}
                      alt={secondary.image.alt}
                      width={secondary.image.width}
                      height={secondary.image.height}
                      imgClassName="object-cover object-[50%_46%] scale-[1.06] opacity-100 transition-all duration-700 ease-out group-hover:opacity-0 motion-reduce:transition-none motion-reduce:group-hover:opacity-100"
                      fallbackLabel={secondary.title}
                    />
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 ease-out group-hover:opacity-100 motion-reduce:hidden"
                    >
                      <ProductImage
                        src={secondary.image.src}
                        alt=""
                        width={secondary.image.width}
                        height={secondary.image.height}
                        imgClassName="object-cover object-[50%_54%] scale-[1.38]"
                        fallbackLabel={secondary.title}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#3B241D]/15 via-transparent to-transparent" />
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setActiveIndex(1)}
                    aria-label={`${t.observeBig} : ${secondary.title}`}
                    className="absolute bottom-3 right-3 z-10 inline-flex items-center gap-1.5 bg-[#F3EBDD]/95 text-[#173D32] hover:bg-[#173D32] hover:text-[#F3EBDD] border border-[#173D32]/25 group-hover:border-[#C5A45A] px-3 py-1.5 text-[11px] tracking-[0.08em] uppercase transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#173D32]"
                  >
                    <Expand className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>{t.see}</span>
                  </button>
                </div>
                <div className="pt-4 space-y-1.5">
                  <p className="text-[11px] tracking-[0.18em] uppercase text-[#B9875B] font-medium">
                    {secondary.subtitle}
                  </p>
                  <h3 className="font-editorial text-2xl text-[#173D32]">
                    {secondary.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#3B241D]/85">
                    {secondary.caption}
                  </p>
                </div>
              </article>
            </ScrollReveal>

            <ScrollReveal delayMs={160}>
              <article className="group bg-[#173D32] text-[#F3EBDD] p-4 border border-[#C5A45A]/40 transition-all duration-500 ease-out hover:border-[#C5A45A] hover:shadow-[0_20px_44px_-20px_rgba(0,0,0,0.4)]">
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
                  <div className="sm:col-span-5 relative aspect-[4/4.6] overflow-hidden bg-[#173D32]">
                    <div className="w-full h-full transform transition-transform duration-700 ease-out group-hover:scale-[1.06] group-hover:rotate-[0.6deg]">
                      <ProductImage
                        src={detail.image.src}
                        alt={detail.image.alt}
                        width={detail.image.width}
                        height={detail.image.height}
                        imgClassName="object-cover object-[50%_49%] scale-[1.05] opacity-100 transition-all duration-700 ease-out group-hover:opacity-0 motion-reduce:transition-none motion-reduce:group-hover:opacity-100"
                        fallbackLabel={detail.title}
                      />
                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 ease-out group-hover:opacity-100 motion-reduce:hidden"
                      >
                        <ProductImage
                          src={detail.image.src}
                          alt=""
                          width={detail.image.width}
                          height={detail.image.height}
                          imgClassName="object-cover object-[52%_50%] scale-[1.34]"
                          fallbackLabel={detail.title}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="sm:col-span-7 space-y-2.5 sm:pl-2">
                    <p className="text-[11px] tracking-[0.18em] uppercase text-[#C5A45A] font-medium">
                      {detail.subtitle}
                    </p>
                    <h3 className="font-editorial text-2xl text-[#F3EBDD] leading-snug">
                      {detail.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-[#F3EBDD]/85">
                      {detail.caption}
                    </p>
                    <button
                      type="button"
                      onClick={() => setActiveIndex(2)}
                      className="inline-flex items-center gap-2 pt-1 text-xs tracking-[0.1em] uppercase text-[#C5A45A] hover:text-[#F3EBDD] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C5A45A]"
                    >
                      <Expand className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>{t.enlargeStudy}</span>
                    </button>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* Lightbox modal */}
      {activeCreation && activeIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activeCreation.title}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#173D32]/92 p-4 sm:p-8 backdrop-blur-xs"
          onClick={() => setActiveIndex(null)}
        >
          <div
            className="relative w-full max-w-4xl bg-[#F3EBDD] text-[#3B241D] border border-[#C5A45A]/60 p-4 sm:p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-4 pb-3 border-b border-[#173D32]/15">
              <p className="text-xs tracking-[0.18em] uppercase text-[#173D32] font-medium">
                {activeCreation.focalNote}
              </p>
              <button
                type="button"
                onClick={() => setActiveIndex(null)}
                aria-label={t.closePreview}
                className="inline-flex items-center justify-center w-10 h-10 text-[#173D32] border border-[#173D32]/20 hover:border-[#C5A45A] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#173D32]"
              >
                <X className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>

            <div className="mt-4 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-6 flex items-center justify-center bg-[#173D32]/5 p-3">
                <img
                  src={activeCreation.image.src}
                  alt={activeCreation.image.alt}
                  width={activeCreation.image.width}
                  height={activeCreation.image.height}
                  referrerPolicy="no-referrer"
                  className="max-h-[65vh] w-auto object-contain"
                />
              </div>

              <div className="md:col-span-6 space-y-4">
                <p className="text-xs tracking-[0.2em] uppercase text-[#B9875B]">
                  {activeCreation.subtitle}
                </p>
                <h3 className="font-editorial text-3xl text-[#173D32] leading-tight">
                  {activeCreation.title}
                </h3>
                <p className="text-base leading-relaxed text-[#3B241D]/90">
                  {activeCreation.caption}
                </p>

                <div className="pt-4 border-t border-[#173D32]/15 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() =>
                        setActiveIndex(
                          getWrappedIndex(activeIndex, -1, creations.length)
                        )
                      }
                      aria-label={t.prev}
                      className="inline-flex items-center justify-center w-10 h-10 border border-[#173D32]/25 text-[#173D32] hover:bg-[#173D32] hover:text-[#F3EBDD] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#173D32]"
                    >
                      <ChevronLeft className="w-4 h-4" aria-hidden="true" />
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        setActiveIndex(
                          getWrappedIndex(activeIndex, 1, creations.length)
                        )
                      }
                      aria-label={t.next}
                      className="inline-flex items-center justify-center w-10 h-10 border border-[#173D32]/25 text-[#173D32] hover:bg-[#173D32] hover:text-[#F3EBDD] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#173D32]"
                    >
                      <ChevronRight className="w-4 h-4" aria-hidden="true" />
                    </button>
                    <span className="ml-2 text-xs text-[#3B241D]/70 tabular-nums">
                      {activeIndex + 1} / {creations.length}
                    </span>
                  </div>

                  <a
                    href="#contact"
                    onClick={() => setActiveIndex(null)}
                    className="inline-flex items-center justify-center bg-[#173D32] text-[#F3EBDD] hover:bg-[#3B241D] px-5 py-2.5 text-xs font-medium tracking-[0.1em] uppercase transition-colors"
                  >
                    {t.requestCreation}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
