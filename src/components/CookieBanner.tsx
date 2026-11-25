import { useState, useEffect } from 'react';
import { Cookie } from 'lucide-react';
import { type Language } from '../utils/i18n';

interface CookieBannerProps {
  lang: Language;
}

export function CookieBanner({ lang }: CookieBannerProps) {
  const [accepted, setAccepted] = useState(true);

  useEffect(() => {
    const consent = localStorage.getItem('choco_louti_cookie_consent');
    if (!consent) {
      setAccepted(false);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('choco_louti_cookie_consent', 'true');
    setAccepted(true);
  };

  if (accepted) return null;

  const text = lang === 'ar'
    ? 'يستخدم هذا الموقع ملفات تعريف الارتباط لتحسين تجربتك وتقديم أفضل خدمة.'
    : 'Ce site utilise des cookies pour optimiser votre expérience et mesurer l’audience de la Maison.';
  const btnText = lang === 'ar' ? 'قبول' : 'Accepter';

  return (
    <aside
      aria-label="Consentement aux cookies"
      className="fixed bottom-0 left-0 right-0 z-50 bg-[#173D32] text-[#F3EBDD] border-t border-[#C5A45A]/40 shadow-[0_-10px_30px_rgba(0,0,0,0.3)] p-4 sm:p-5"
    >
      <div className="mx-auto max-w-[1360px] flex flex-col sm:flex-row items-center justify-between gap-4 px-4">
        <div className="flex items-center gap-3 text-xs sm:text-sm leading-relaxed text-[#F3EBDD]/90">
          <Cookie className="w-5 h-5 text-[#C5A45A] shrink-0" aria-hidden="true" />
          <p>{text}</p>
        </div>
        <button
          type="button"
          onClick={handleAccept}
          className="inline-flex items-center justify-center whitespace-nowrap bg-[#C5A45A] text-[#173D32] hover:bg-[#F3EBDD] px-6 py-2.5 text-xs font-semibold tracking-[0.1em] uppercase transition-colors shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F3EBDD]"
        >
          {btnText}
        </button>
      </div>
    </aside>
  );
}
