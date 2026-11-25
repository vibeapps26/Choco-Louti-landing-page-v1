import { Instagram, Facebook } from 'lucide-react';

interface SocialMediaBarProps {
  className?: string;
}

export function SocialMediaBar({ className = '' }: SocialMediaBarProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram CHOCO LOUTI"
        className="inline-flex items-center justify-center w-10 h-10 border border-[#C5A45A]/40 text-[#F3EBDD] hover:bg-[#C5A45A] hover:text-[#173D32] hover:border-[#C5A45A] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C5A45A]"
      >
        <Instagram className="w-4 h-4" aria-hidden="true" />
      </a>
      <a
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook CHOCO LOUTI"
        className="inline-flex items-center justify-center w-10 h-10 border border-[#C5A45A]/40 text-[#F3EBDD] hover:bg-[#C5A45A] hover:text-[#173D32] hover:border-[#C5A45A] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C5A45A]"
      >
        <Facebook className="w-4 h-4" aria-hidden="true" />
      </a>
    </div>
  );
}
