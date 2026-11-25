import { useEffect, useRef, useState, type FormEvent } from 'react';
import { Check, Copy, MessageCircle, Info } from 'lucide-react';
import {
  buildWhatsAppMessage,
  validateContactForm,
  type ContactFormData,
} from '../utils/chocoLogic';
import { OrnamentDivider } from './OrnamentDivider';
import { ScrollReveal } from './ScrollReveal';
import { OCCASIONS_MAP, TRANSLATIONS, type Language } from '../utils/i18n';

interface ContactSectionProps {
  selectedOccasion: string;
  onSelectOccasion: (occasion: string) => void;
  lang: Language;
}

export function ContactSection({
  selectedOccasion,
  onSelectOccasion,
  lang,
}: ContactSectionProps) {
  const nameInputRef = useRef<HTMLInputElement | null>(null);
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<
    Partial<Record<keyof ContactFormData, string>>
  >({});
  const [validatedData, setValidatedData] = useState<ContactFormData | null>(null);
  const [copied, setCopied] = useState(false);
  const t = TRANSLATIONS[lang].contact;
  const occasions = OCCASIONS_MAP[lang];

  useEffect(() => {
    setCopied(false);
  }, [validatedData]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData: ContactFormData = {
      name,
      contact,
      occasion: selectedOccasion,
      message,
    };

    const result = validateContactForm(formData, lang);
    setErrors(result.errors);

    if (!result.isValid) {
      setValidatedData(null);
      return;
    }

    setValidatedData(formData);
  };

  const handleCopySummary = async () => {
    if (!validatedData || !navigator.clipboard) return;
    try {
      const summary = buildWhatsAppMessage(validatedData);
      await navigator.clipboard.writeText(summary);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  };

  const whatsappUrl = validatedData
    ? `https://wa.me/21623331098?text=${encodeURIComponent(
        buildWhatsAppMessage(validatedData)
      )}`
    : '#';

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="bg-[#F3EBDD] text-[#3B241D] py-20 sm:py-28"
    >
      <div className="mx-auto max-w-[1360px] px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Editorial invitation & CTAs */}
          <ScrollReveal className="lg:col-span-5 space-y-7">
            <div className="space-y-4">
              <p className="text-xs font-medium tracking-[0.22em] uppercase text-[#173D32]">
                {t.eyebrow}
              </p>
              <h2
                id="contact-heading"
                className="font-editorial font-normal text-[#173D32] text-[clamp(2rem,3.4vw,3.15rem)] leading-[1.12] text-balance"
              >
                {t.title}
              </h2>
            </div>

            <OrnamentDivider tone="gold" align="left" />

            <p className="text-base sm:text-[17px] leading-[1.75] text-[#3B241D]/88">
              {t.desc}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                type="button"
                onClick={() => nameInputRef.current?.focus()}
                className="inline-flex items-center justify-center whitespace-nowrap shrink-0 bg-[#173D32] text-[#F3EBDD] hover:bg-[#3B241D] px-7 py-3.5 text-xs font-semibold tracking-[0.11em] uppercase transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C5A45A]"
              >
                {t.weContact}
              </button>
              <a
                href="#creations"
                className="inline-flex items-center justify-center whitespace-nowrap shrink-0 border border-[#173D32]/35 text-[#173D32] hover:border-[#173D32] hover:bg-[#173D32]/5 px-6 py-3.5 text-xs font-medium tracking-[0.11em] uppercase transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#173D32]"
              >
                {TRANSLATIONS[lang].hero.discoverCreations}
              </a>
            </div>

            <div className="pt-6 border-t border-[#173D32]/15 text-xs leading-relaxed text-[#3B241D]/75 space-y-1.5">
              <p className="font-medium uppercase tracking-[0.14em] text-[#173D32]">
                {lang === 'ar' ? 'التواصل المباشر عبر واتساب' : 'Contact Direct WhatsApp'}
              </p>
              <p>
                {lang === 'ar'
                  ? 'يمكنكم إرسال استفساراتكم مباشرة عبر رقم الواتساب الخاص بالدار: +216 23331098'
                  : 'Vous pouvez joindre directement la Maison par WhatsApp au +216 23331098 pour un échange personnalisé.'}
              </p>
            </div>
          </ScrollReveal>

          {/* Validated bespoke inquiry form */}
          <ScrollReveal delayMs={100} className="lg:col-span-7">
            <div className="bg-[#F3EBDD] border border-[#173D32]/20 p-6 sm:p-10 shadow-[0_20px_50px_-28px_rgba(23,61,50,0.2)]">
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-xs font-medium tracking-[0.14em] uppercase text-[#173D32] mb-2"
                      >
                        {t.name}
                      </label>
                      <input
                        ref={nameInputRef}
                        id="contact-name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        value={name}
                        onChange={(e) => {
                          setName(e.target.value);
                          if (errors.name) {
                            setErrors((prev) => ({ ...prev, name: undefined }));
                          }
                        }}
                        aria-invalid={Boolean(errors.name)}
                        aria-describedby={errors.name ? 'error-name' : undefined}
                        placeholder={t.namePlaceholder}
                        className={`w-full bg-transparent border px-4 py-3 text-sm text-[#3B241D] placeholder:text-[#3B241D]/45 focus:outline-none transition-colors ${
                          errors.name
                            ? 'border-red-600 bg-red-50/30'
                            : 'border-[#173D32]/30 focus:border-[#173D32]'
                        }`}
                      />
                      {errors.name && (
                        <p
                          id="error-name"
                          role="alert"
                          className="mt-1.5 text-xs text-red-700 font-medium"
                        >
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="contact-channel"
                        className="block text-xs font-medium tracking-[0.14em] uppercase text-[#173D32] mb-2"
                      >
                        {t.channel}
                      </label>
                      <input
                        id="contact-channel"
                        name="contact"
                        type="text"
                        value={contact}
                        onChange={(e) => {
                          setContact(e.target.value);
                          if (errors.contact) {
                            setErrors((prev) => ({
                              ...prev,
                              contact: undefined,
                            }));
                          }
                        }}
                        aria-invalid={Boolean(errors.contact)}
                        aria-describedby={
                          errors.contact ? 'error-contact' : undefined
                        }
                        placeholder={t.channelPlaceholder}
                        className={`w-full bg-transparent border px-4 py-3 text-sm text-[#3B241D] placeholder:text-[#3B241D]/45 focus:outline-none transition-colors ${
                          errors.contact
                            ? 'border-red-600 bg-red-50/30'
                            : 'border-[#173D32]/30 focus:border-[#173D32]'
                        }`}
                      />
                      {errors.contact && (
                        <p
                          id="error-contact"
                          role="alert"
                          className="mt-1.5 text-xs text-red-700 font-medium"
                        >
                          {errors.contact}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-occasion"
                      className="block text-xs font-medium tracking-[0.14em] uppercase text-[#173D32] mb-2"
                    >
                      {t.occasionLabel}
                    </label>
                    <select
                      id="contact-occasion"
                      name="occasion"
                      value={selectedOccasion}
                      onChange={(e) => {
                        onSelectOccasion(e.target.value);
                        if (errors.occasion) {
                          setErrors((prev) => ({
                            ...prev,
                            occasion: undefined,
                          }));
                        }
                      }}
                      aria-invalid={Boolean(errors.occasion)}
                      aria-describedby={
                        errors.occasion ? 'error-occasion' : undefined
                      }
                      className={`w-full bg-[#F3EBDD] border px-4 py-3 text-sm text-[#3B241D] focus:outline-none transition-colors ${
                        errors.occasion
                          ? 'border-red-600 bg-red-50/30'
                          : 'border-[#173D32]/30 focus:border-[#173D32]'
                      }`}
                    >
                      <option value="">{t.selectOccasionPlaceholder}</option>
                      {occasions.map((occasion) => (
                        <option key={occasion} value={occasion}>
                          {occasion}
                        </option>
                      ))}
                    </select>
                    {errors.occasion && (
                      <p
                        id="error-occasion"
                        role="alert"
                        className="mt-1.5 text-xs text-red-700 font-medium"
                      >
                        {errors.occasion}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-xs font-medium tracking-[0.14em] uppercase text-[#173D32] mb-2"
                    >
                      {t.message}
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={4}
                      value={message}
                      onChange={(e) => {
                        setMessage(e.target.value);
                        if (errors.message) {
                          setErrors((prev) => ({
                            ...prev,
                            message: undefined,
                          }));
                        }
                      }}
                      aria-invalid={Boolean(errors.message)}
                      aria-describedby={
                        errors.message ? 'error-message' : undefined
                      }
                      placeholder={t.messagePlaceholder}
                      className={`w-full bg-transparent border px-4 py-3 text-sm text-[#3B241D] placeholder:text-[#3B241D]/45 focus:outline-none transition-colors resize-y ${
                        errors.message
                          ? 'border-red-600 bg-red-50/30'
                          : 'border-[#173D32]/30 focus:border-[#173D32]'
                      }`}
                    />
                    {errors.message && (
                      <p
                        id="error-message"
                        role="alert"
                        className="mt-1.5 text-xs text-red-700 font-medium"
                      >
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center whitespace-nowrap shrink-0 bg-[#173D32] text-[#F3EBDD] hover:bg-[#3B241D] px-8 py-3.5 text-xs font-semibold tracking-[0.12em] uppercase transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C5A45A]"
                    >
                      {lang === 'ar' ? 'تجهيز الرسالة للواتساب' : 'Préparer la demande WhatsApp'}
                    </button>
                    <span className="text-xs text-[#3B241D]/65">
                      {lang === 'ar' ? 'واتساب: +216 23331098' : 'WhatsApp direct : +216 23331098'}
                    </span>
                  </div>
                </form>

                {validatedData && (
                  <div
                    role="status"
                    aria-live="polite"
                    className="mt-8 border border-[#25D366] bg-[#DCE4D9]/55 p-6 space-y-5 shadow-lg"
                  >
                    <div className="flex items-start gap-3">
                      <Info
                        className="w-5 h-5 text-[#173D32] shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <div className="space-y-1">
                        <p className="text-sm font-semibold text-[#173D32]">
                          {lang === 'ar' ? 'طلبك جاهز للإرسال عبر واتساب' : 'Votre demande est prête à être envoyée sur WhatsApp'}
                        </p>
                        <p className="text-xs leading-relaxed text-[#3B241D]/85">
                          {lang === 'ar'
                            ? 'انقر على الزر أدناه لفتح تطبيق واتساب وإرسال الرسالة الاحترافية مباشرة إلى رقمنا +216 23331098.'
                            : 'Cliquez sur le bouton ci-dessous pour ouvrir WhatsApp et transmettre votre message professionnel directement au +216 23331098.'}
                        </p>
                      </div>
                    </div>

                    <pre className="whitespace-pre-wrap font-sans text-xs leading-relaxed bg-[#F3EBDD] border border-[#173D32]/15 p-4 text-[#3B241D] select-all">
                      {buildWhatsAppMessage(validatedData)}
                    </pre>

                    <div className="flex flex-wrap items-center gap-3 pt-2">
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-[#25D366] text-white hover:bg-[#1EBE5D] px-6 py-3.5 text-xs font-semibold tracking-[0.11em] uppercase transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#173D32]"
                      >
                        <MessageCircle className="w-4 h-4" aria-hidden="true" />
                        <span>
                          {lang === 'ar' ? 'إرسال عبر واتساب (+216 23331098)' : 'Envoyer sur WhatsApp (+216 23331098)'}
                        </span>
                      </a>

                      <button
                        type="button"
                        onClick={handleCopySummary}
                        className="inline-flex items-center gap-2 border border-[#173D32] text-[#173D32] hover:bg-[#173D32] hover:text-[#F3EBDD] px-5 py-3.5 text-xs font-medium tracking-[0.08em] uppercase transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#173D32]"
                      >
                        {copied ? (
                          <>
                            <Check className="w-3.5 h-3.5" aria-hidden="true" />
                            <span>{lang === 'ar' ? 'تم النسخ' : 'Récapitulatif copié'}</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                            <span>{lang === 'ar' ? 'نسخ النص' : 'Copier le texte'}</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
