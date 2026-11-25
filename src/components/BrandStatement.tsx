import { OrnamentDivider } from './OrnamentDivider';
import { ScrollReveal } from './ScrollReveal';
import { TRANSLATIONS, type Language } from '../utils/i18n';

interface BrandStatementProps {
  lang: Language;
}

export function BrandStatement({ lang }: BrandStatementProps) {
  const t = TRANSLATIONS[lang].brandStatement;

  return (
    <section
      aria-label="Déclaration de marque CHOCO LOUTI"
      className="bg-[#F3EBDD] text-[#173D32] py-16 sm:py-24 border-b border-[#173D32]/12"
    >
      <ScrollReveal className="mx-auto max-w-[1040px] px-4 sm:px-8 text-center space-y-6 sm:space-y-7">
        <OrnamentDivider tone="gold" align="center" />
        <blockquote className="font-editorial italic font-normal text-[#173D32] text-[clamp(1.5rem,3.8vw,3.25rem)] leading-[1.32] sm:leading-[1.2] text-balance">
          {t.quote}
        </blockquote>
        <p className="text-[11px] sm:text-xs tracking-[0.16em] sm:tracking-[0.24em] uppercase text-[#B9875B] leading-relaxed">
          {t.sub}
        </p>
      </ScrollReveal>
    </section>
  );
}
