import { useState, type FormEvent } from 'react';
import { Check, Mail } from 'lucide-react';
import { TRANSLATIONS, type Language } from '../utils/i18n';
import { OrnamentDivider } from './OrnamentDivider';
import { ScrollReveal } from './ScrollReveal';

interface NewsletterSignupProps {
  lang: Language;
}

export function NewsletterSignup({ lang }: NewsletterSignupProps) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const t = TRANSLATIONS[lang].newsletter || {
    eyebrow: 'Newsletter',
    title: 'Recevez nos collections saisonnières.',
    desc: 'Inscrivez-vous pour être informé de nos créations éphémères.',
    placeholder: 'Votre adresse e-mail',
    button: 'S’inscrire',
    success: 'Merci pour votre inscription.',
    error: 'Veuillez saisir une adresse e-mail valide.',
  };

  const handleSubscribe = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmed = email.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!emailRegex.test(trimmed)) {
      setError(t.error);
      setSubmitted(false);
      return;
    }
    setError('');
    setSubmitted(true);
  };

  return (
    <section
      aria-labelledby="newsletter-heading"
      className="bg-[#DCE4D9]/40 text-[#3B241D] py-16 sm:py-24 border-b border-[#173D32]/10"
    >
      <div className="mx-auto max-w-[900px] px-4 sm:px-8">
        <ScrollReveal className="bg-[#F3EBDD] border border-[#C5A45A]/45 p-6 sm:p-14 shadow-[0_20px_50px_-20px_rgba(23,61,50,0.2)] text-center space-y-6">
          <div className="space-y-3">
            <p className="text-[11px] sm:text-xs font-medium tracking-[0.16em] sm:tracking-[0.22em] uppercase text-[#173D32]">
              {t.eyebrow}
            </p>
            <h2
              id="newsletter-heading"
              className="font-editorial font-normal text-[#173D32] text-[clamp(1.6rem,3.2vw,2.9rem)] leading-[1.2] sm:leading-[1.15] text-balance"
            >
              {t.title}
            </h2>
            <OrnamentDivider tone="gold" align="center" />
          </div>

          <p className="text-[13.5px] sm:text-base text-[#3B241D]/80 max-w-lg mx-auto leading-[1.65]">
            {t.desc}
          </p>

          {!submitted ? (
            <form onSubmit={handleSubscribe} noValidate className="max-w-md mx-auto space-y-3 pt-2">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#3B241D]/40 rtl:left-auto rtl:right-3.5" aria-hidden="true" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (error) setError('');
                    }}
                    placeholder={t.placeholder}
                    aria-label={t.placeholder}
                    className="w-full bg-white/80 border border-[#173D32]/30 focus:border-[#173D32] pl-10 pr-4 rtl:pl-4 rtl:pr-10 py-3 text-sm text-[#3B241D] placeholder:text-[#3B241D]/45 focus:outline-none transition-colors"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center whitespace-nowrap bg-[#173D32] text-[#F3EBDD] hover:bg-[#3B241D] px-6 py-3 text-xs font-semibold tracking-[0.11em] uppercase transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C5A45A]"
                >
                  {t.button}
                </button>
              </div>
              {error && (
                <p role="alert" className="text-xs text-red-700 font-medium text-left rtl:text-right">
                  {error}
                </p>
              )}
            </form>
          ) : (
            <div
              role="status"
              aria-live="polite"
              className="max-w-md mx-auto p-4 bg-[#173D32]/10 border border-[#173D32]/25 flex items-center justify-center gap-2.5 text-sm font-medium text-[#173D32]"
            >
              <Check className="w-4 h-4 text-[#C5A45A]" aria-hidden="true" />
              <span>{t.success}</span>
            </div>
          )}
        </ScrollReveal>
      </div>
    </section>
  );
}
