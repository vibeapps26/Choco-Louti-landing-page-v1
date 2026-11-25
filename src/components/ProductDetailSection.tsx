import { BRAND_ASSETS } from '../tokens/brand';
import { OrnamentDivider } from './OrnamentDivider';
import { ProductImage } from './ProductImage';
import { ScrollReveal } from './ScrollReveal';
import { TRANSLATIONS, type Language } from '../utils/i18n';

interface ProductDetailSectionProps {
  lang: Language;
}

export function ProductDetailSection({ lang }: ProductDetailSectionProps) {
  const t = TRANSLATIONS[lang].productDetail;

  return (
    <section
      id="savoir-faire"
      aria-labelledby="detail-heading"
      className="bg-[#3B241D] text-[#F3EBDD] py-16 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-[1360px] px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Editorial prose and tactile details */}
          <div className="lg:col-span-6 space-y-7 sm:space-y-8">
            <ScrollReveal className="space-y-6">
              <div className="space-y-4">
                <p className="text-xs font-medium tracking-[0.22em] uppercase text-[#C5A45A]">
                  {t.eyebrow}
                </p>
                <h2
                  id="detail-heading"
                  className="font-editorial font-normal text-[#F3EBDD] text-[clamp(2rem,3.4vw,3.15rem)] leading-[1.12] text-balance"
                >
                  {t.title}
                </h2>
              </div>

              <OrnamentDivider tone="gold" align="left" />

              <p className="text-base sm:text-[17px] leading-[1.75] text-[#F3EBDD]/85 max-w-xl">
                {t.body}
              </p>
            </ScrollReveal>

            <ScrollReveal delayMs={100}>
              <div className="divide-y divide-[#C5A45A]/25 border-t border-b border-[#C5A45A]/25">
                {t.notes.map((item) => (
                  <div key={item.index} className="py-5 flex items-start gap-5">
                    <span className="font-editorial italic text-xl text-[#C5A45A] tabular-nums shrink-0 pt-0.5">
                      {item.index}
                    </span>
                    <div className="space-y-1">
                      <h3 className="font-editorial text-xl text-[#F3EBDD]">
                        {item.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-[#F3EBDD]/78">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Intimate macro product photograph */}
          <div className="lg:col-span-6">
            <ScrollReveal delayMs={120}>
              <div className="mx-auto max-w-[520px] lg:max-w-none border border-[#C5A45A]/45 p-3 sm:p-4 bg-[#173D32]">
                <div className="aspect-[4/4.6] overflow-hidden bg-[#173D32]">
                  <ProductImage
                    src={BRAND_ASSETS.macroRose.src}
                    alt={BRAND_ASSETS.macroRose.alt}
                    width={BRAND_ASSETS.macroRose.width}
                    height={BRAND_ASSETS.macroRose.height}
                    imgClassName="object-cover object-[50%_49%] scale-[1.04] transition-transform duration-700 ease-out hover:scale-[1.07]"
                    fallbackLabel={t.macroHeader}
                  />
                </div>
                <p className="pt-3.5 pb-1 px-1 text-xs tracking-[0.12em] uppercase text-[#C5A45A] flex items-center justify-between gap-4">
                  <span>{t.macroHeader}</span>
                  <span className="text-[#F3EBDD]/70">{t.macroSub}</span>
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
