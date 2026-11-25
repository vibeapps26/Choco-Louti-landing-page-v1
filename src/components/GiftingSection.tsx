import { ArrowUpRight } from 'lucide-react';
import { BRAND_ASSETS } from '../tokens/brand';
import { OCCASIONS_MAP, OCCASION_NOTES_MAP, TRANSLATIONS, type Language } from '../utils/i18n';
import { ProductImage } from './ProductImage';
import { ScrollReveal } from './ScrollReveal';

interface GiftingSectionProps {
  selectedOccasion: string;
  onSelectOccasion: (occasion: string) => void;
  lang: Language;
}

export function GiftingSection({
  selectedOccasion,
  onSelectOccasion,
  lang,
}: GiftingSectionProps) {
  const t = TRANSLATIONS[lang].gifting;
  const occasions = OCCASIONS_MAP[lang];
  const occasionNotes = OCCASION_NOTES_MAP[lang];

  return (
    <section
      id="occasions"
      aria-labelledby="occasions-heading"
      className="bg-[#F3EBDD] text-[#3B241D] py-20 sm:py-28 border-b border-[#173D32]/10"
    >
      <div className="mx-auto max-w-[1360px] px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* Sticky editorial image column */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <ScrollReveal>
              <div className="space-y-4 mb-8">
                <p className="text-[11px] sm:text-xs font-medium tracking-[0.16em] sm:tracking-[0.22em] uppercase text-[#173D32]">
                  {t.eyebrow}
                </p>
                <h2
                  id="occasions-heading"
                  className="font-editorial font-normal text-[#173D32] text-[clamp(1.65rem,3.4vw,3.15rem)] leading-[1.2] sm:leading-[1.12] text-balance"
                >
                  {t.title}
                </h2>
                <p className="text-[14.5px] sm:text-base leading-[1.7] text-[#3B241D]/85 max-w-md">
                  {t.desc}
                </p>
              </div>

              <div className="border border-[#C5A45A]/45 p-3 bg-[#DCE4D9]/45">
                <div className="aspect-[4/4.6] overflow-hidden bg-[#173D32]">
                  <ProductImage
                    src={BRAND_ASSETS.signatureGiftbox.src}
                    alt={BRAND_ASSETS.signatureGiftbox.alt}
                    width={BRAND_ASSETS.signatureGiftbox.width}
                    height={BRAND_ASSETS.signatureGiftbox.height}
                    imgClassName="object-cover object-[50%_50%] scale-[1.02]"
                    fallbackLabel="Coffret CHOCO LOUTI"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Asymmetrical editorial occasion list */}
          <ScrollReveal delayMs={100} className="lg:col-span-7 lg:pt-2">
            <div className="divide-y divide-[#173D32]/15 border-t border-b border-[#173D32]/15">
              {occasions.map((occasion, idx) => {
                const isSelected = selectedOccasion === occasion;
                return (
                  <div
                    key={occasion}
                    className={`py-6 sm:py-7 px-4 sm:px-6 transition-colors duration-200 ${
                      isSelected
                        ? 'bg-[#DCE4D9]/75'
                        : 'hover:bg-[#DCE4D9]/35'
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="space-y-1.5 max-w-xl">
                        <div className="flex items-baseline gap-3">
                          <span className="font-editorial italic text-lg text-[#B9875B] tabular-nums">
                            {String(idx + 1).padStart(2, '0')}
                          </span>
                          <h3 className="font-editorial text-xl sm:text-[26px] leading-[1.25] text-[#173D32]">
                            {occasion}
                          </h3>
                        </div>
                        <p className="text-[13.5px] sm:text-[15px] leading-[1.65] text-[#3B241D]/82 ps-7">
                          {occasionNotes[occasion]}
                        </p>
                      </div>

                      <a
                        href="#contact"
                        onClick={() => onSelectOccasion(occasion)}
                        aria-label={`${t.choose} : ${occasion}`}
                        className={`inline-flex items-center gap-1.5 self-start sm:self-center whitespace-nowrap shrink-0 px-4 py-2 text-xs font-medium tracking-[0.08em] uppercase border transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#173D32] ${
                          isSelected
                            ? 'bg-[#173D32] text-[#F3EBDD] border-[#173D32]'
                            : 'border-[#173D32]/30 text-[#173D32] hover:bg-[#173D32] hover:text-[#F3EBDD] hover:border-[#173D32]'
                        }`}
                      >
                        <span>{isSelected ? t.selected : t.choose}</span>
                        <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
