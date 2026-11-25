import { MessageCircle } from 'lucide-react';

interface WhatsAppFloatingButtonProps {
  lang?: 'fr' | 'ar';
}

export function WhatsAppFloatingButton({ lang = 'fr' }: WhatsAppFloatingButtonProps) {
  const message = lang === 'ar'
    ? 'مرحباً، أود الاستفسار عن إبداعات CHOCO LOUTI المصنوعة حسب الطلب.'
    : 'Bonjour, j’aimerais en savoir plus sur les créations sur mesure CHOCO LOUTI.';
  
  const whatsappUrl = `https://wa.me/21623331098?text=${encodeURIComponent(message)}`;

  return (
    <aside aria-label="Support WhatsApp" className="fixed bottom-6 right-6 z-50">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactez-nous sur WhatsApp : +216 23331098"
        className="group relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-[#25D366] text-white rounded-full shadow-[0_8px_30px_rgba(37,211,102,0.45)] hover:scale-110 active:scale-95 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#173D32]"
      >
        <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 fill-current text-white" aria-hidden="true" />
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-[#173D32] text-[#F3EBDD] text-xs font-medium tracking-wide rounded shadow-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap hidden sm:block">
          {lang === 'ar' ? 'تواصل عبر واتساب (+216 23331098)' : 'WhatsApp (+216 23331098)'}
        </span>
      </a>
    </aside>
  );
}
