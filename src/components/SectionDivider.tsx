import { OrnamentDivider } from './OrnamentDivider';

interface SectionDividerProps {
  surface?: 'ivory' | 'green' | 'chocolate' | 'sage';
}

export function SectionDivider({ surface = 'ivory' }: SectionDividerProps) {
  const surfaceClasses = {
    ivory: 'bg-[#F3EBDD]',
    green: 'bg-[#173D32]',
    chocolate: 'bg-[#3B241D]',
    sage: 'bg-[#E5EAE0]',
  }[surface];

  const tone = surface === 'green' || surface === 'chocolate' ? 'gold' : 'gold';

  return (
    <div
      aria-hidden="true"
      className={`${surfaceClasses} py-3 sm:py-4 overflow-hidden`}
    >
      <div className="mx-auto max-w-[1360px] px-4 sm:px-8 flex items-center gap-3 sm:gap-5">
        <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#C5A45A]/35 to-[#C5A45A]/55" />
        <OrnamentDivider tone={tone} align="center" className="shrink-0 opacity-85" />
        <span className="h-px flex-1 bg-gradient-to-l from-transparent via-[#C5A45A]/35 to-[#C5A45A]/55" />
      </div>
    </div>
  );
}
