import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import { TRANSLATIONS, type Language } from '../utils/i18n';

interface FAQAccordionProps {
  lang: Language;
}

export function FAQAccordion({ lang }: FAQAccordionProps) {
  const t = TRANSLATIONS[lang].faq;
  const [openId, setOpenId] = useState<string | null>(t.items[0]?.id || null);

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="bg-[#DCE4D9]/55 text-[#3B241D] py-20 sm:py-28 border-b border-[#173D32]/12"
    >
      <div className="mx-auto max-w-[1060px] px-4 sm:px-8">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-[#173D32]/15">
            <div className="space-y-3">
              <p className="text-[11px] sm:text-xs font-medium tracking-[0.16em] sm:tracking-[0.22em] uppercase text-[#173D32]">
                {t.eyebrow}
              </p>
              <h2
                id="faq-heading"
                className="font-editorial font-normal text-[#173D32] text-[clamp(1.65rem,3.4vw,3.15rem)] leading-[1.2] sm:leading-[1.12] text-balance"
              >
                {t.title}
              </h2>
            </div>
            <p className="text-[13.5px] sm:text-sm leading-[1.65] text-[#3B241D]/80 max-w-sm">
              {t.desc}
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delayMs={90}>
          <div className="divide-y divide-[#173D32]/15 border-b border-[#173D32]/15">
            {t.items.map((item, idx) => {
              const isOpen = openId === item.id;
              const panelId = `faq-panel-${item.id}`;
              const buttonId = `faq-button-${item.id}`;

              return (
                <div key={item.id} className="py-1">
                  <h3>
                    <button
                      id={buttonId}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => toggleItem(item.id)}
                      className="w-full py-5 sm:py-6 flex items-center justify-between gap-6 text-start group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#173D32]"
                    >
                      <span className="flex items-baseline gap-3 sm:gap-4">
                        <span className="font-editorial italic text-base sm:text-lg text-[#B9875B] tabular-nums shrink-0">
                          {String(idx + 1).padStart(2, '0')}
                        </span>
                        <span className="font-editorial text-[17px] sm:text-2xl leading-[1.4] sm:leading-snug text-[#173D32] group-hover:text-[#3B241D] transition-colors">
                          {item.question}
                        </span>
                      </span>
                      <span
                        aria-hidden="true"
                        className="inline-flex items-center justify-center w-9 h-9 border border-[#173D32]/25 text-[#173D32] group-hover:border-[#C5A45A] shrink-0 transition-colors"
                      >
                        {isOpen ? (
                          <Minus className="w-4 h-4" />
                        ) : (
                          <Plus className="w-4 h-4" />
                        )}
                      </span>
                    </button>
                  </h3>

                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    data-open={isOpen}
                    className="accordion-panel"
                  >
                    <div className="accordion-inner">
                      <p className="pb-6 ps-8 sm:ps-10 pe-2 sm:pe-4 max-w-3xl text-[13.5px] sm:text-base leading-[1.7] sm:leading-[1.75] text-[#3B241D]/88">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
