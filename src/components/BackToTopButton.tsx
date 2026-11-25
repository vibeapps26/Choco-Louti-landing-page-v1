import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

interface BackToTopButtonProps {
  lang?: 'fr' | 'ar';
}

export function BackToTopButton({ lang = 'fr' }: BackToTopButtonProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 450);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!visible) return null;

  return (
    <aside aria-label="Navigation rapide" className="fixed bottom-6 left-6 z-40">
      <button
        type="button"
        onClick={scrollToTop}
        aria-label={lang === 'ar' ? 'العودة إلى الأعلى' : 'Retour en haut de page'}
        className="group flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-[#173D32] text-[#F3EBDD] border border-[#C5A45A]/40 rounded-full shadow-[0_8px_25px_rgba(23,61,50,0.35)] hover:bg-[#3B241D] hover:border-[#C5A45A] hover:scale-105 active:scale-95 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C5A45A]"
      >
        <ArrowUp className="w-5 h-5 sm:w-6 sm:h-6 text-[#C5A45A] group-hover:text-[#F3EBDD] transition-colors" aria-hidden="true" />
      </button>
    </aside>
  );
}
