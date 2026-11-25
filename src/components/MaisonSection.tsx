import { BRAND_ASSETS } from '../tokens/brand';
import { OrnamentDivider } from './OrnamentDivider';
import { ProductImage } from './ProductImage';
import { ScrollReveal } from './ScrollReveal';
import { TRANSLATIONS, type Language } from '../utils/i18n';

interface MaisonSectionProps {
  lang: Language;
}

export function MaisonSection({ lang }: MaisonSectionProps) {
  const t = TRANSLATIONS[lang].maison;

  return (
    <section
      id="maison"
      aria-labelledby="maison-heading"
      className="bg-[#F3EBDD] text-[#3B241D] py-14 sm:py-24 lg:py-28 border-b border-[#173D32]/10"
    >
      <div className="mx-auto max-w-[1360px] px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Block 1: Architectural blooms + craftsmanship petal study inset */}
          <ScrollReveal delayMs={80} className="lg:col-span-5 order-2 lg:order-1">
            <figure className="relative mx-auto max-w-[440px] lg:max-w-none">
              <div className="border border-[#C5A45A]/50 p-2.5 sm:p-3 bg-[#F3EBDD]">
                <div className="aspect-[4/4.6] overflow-hidden bg-[#F3EBDD]">
                  <ProductImage
                    src={BRAND_ASSETS.architecturalBlooms.src}
                    alt={BRAND_ASSETS.architecturalBlooms.alt}
                    width={BRAND_ASSETS.architecturalBlooms.width}
                    height={BRAND_ASSETS.architecturalBlooms.height}
                    imgClassName="object-cover object-[50%_46%] scale-[1.06] transition-transform duration-700 ease-out hover:scale-[1.08]"
                    fallbackLabel={t.altTag}
                  />
                </div>
              </div>

              {/* Tactile craftsmanship close-up inset */}
              <div className="hidden sm:block absolute -right-4 lg:-right-6 bottom-10 w-28 lg:w-32 bg-[#F3EBDD] p-1.5 border border-[#C5A45A]/60 shadow-[0_14px_30px_-14px_rgba(23,61,50,0.35)]">
                <div className="aspect-square overflow-hidden bg-[#173D32]">
                  <ProductImage
                    src={BRAND_ASSETS.macroRose.src}
                    alt={BRAND_ASSETS.macroRose.alt}
                    width={BRAND_ASSETS.macroRose.width}
                    height={BRAND_ASSETS.macroRose.height}
                    imgClassName="object-cover object-[50%_49%] scale-[1.15]"
                    fallbackLabel={t.macroTag}
                  />
                </div>
              </div>

              <figcaption className="mt-3 text-xs tracking-[0.05em] text-[#3B241D]/75 flex flex-wrap items-center justify-between gap-2">
                <span>{t.caption}</span>
                <span className="text-[#B9875B]">{t.dentelle}</span>
              </figcaption>
            </figure>
          </ScrollReveal>

          {/* Right column: editorial storytelling + craftsmanship highlights */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6 sm:space-y-8">
            {/* Block 2: Editorial Maison statement */}
            <ScrollReveal delayMs={0} className="space-y-5 sm:space-y-6">
              <div className="space-y-3">
                <p className="text-[11px] sm:text-xs font-medium tracking-[0.16em] sm:tracking-[0.22em] uppercase text-[#173D32]">
                  {t.eyebrow}
                </p>
                <h2
                  id="maison-heading"
                  className="font-editorial font-normal text-[#173D32] text-[clamp(1.65rem,3.4vw,3.1rem)] leading-[1.2] sm:leading-[1.12] text-balance"
                >
                  {t.title}
                </h2>
              </div>

              <OrnamentDivider tone="gold" align="left" />

              <p className="max-w-2xl text-[14.5px] sm:text-[17px] leading-[1.7] text-[#3B241D]/90">
                {t.body}
              </p>
            </ScrollReveal>

            {/* Block 3: Authentic craftsmanship & customization pillars */}
            <ScrollReveal
              delayMs={120}
              className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6 pt-5 sm:pt-6 border-t border-[#173D32]/15"
            >
              {t.pillars.map((pillar) => (
                <div
                  key={pillar.index}
                  className="transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5"
                >
                  <div className="flex items-baseline gap-2.5">
                    <span className="font-editorial italic text-base text-[#B9875B] tabular-nums">
                      {pillar.index}
                    </span>
                    <h3 className="font-editorial text-lg sm:text-xl leading-snug text-[#173D32]">
                      {pillar.title}
                    </h3>
                  </div>
                  <p className="mt-1.5 text-[13.5px] sm:text-sm leading-[1.65] text-[#3B241D]/80">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
