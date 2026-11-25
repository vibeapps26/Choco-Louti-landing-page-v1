import { BRAND_ASSETS } from '../tokens/brand';

interface BrandLogoProps {
  surface?: 'ivory' | 'dark';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'full' | 'icon';
}

export function BrandLogo({
  surface = 'ivory',
  className = '',
  size = 'md',
  variant = 'full',
}: BrandLogoProps) {
  const sizeClasses = {
    sm: 'h-10 sm:h-7 w-auto',
    md: 'h-11 sm:h-9 w-auto',
    lg: 'h-16 sm:h-11 w-auto',
  }[size];

  const aspectClass = variant === 'icon' ? 'aspect-[5268/5210]' : 'aspect-[10462/1919]';

  if (surface === 'dark') {
    const asset = variant === 'icon' ? BRAND_ASSETS.iconGold : BRAND_ASSETS.logoDarkGold;
    return (
      <img
        src={asset.src}
        width={asset.width}
        height={asset.height}
        alt={asset.alt}
        loading="eager"
        decoding="sync"
        fetchPriority="high"
        className={`${sizeClasses} ${aspectClass} object-contain ${className}`}
      />
    );
  }

  const asset = variant === 'icon' ? BRAND_ASSETS.iconGold : BRAND_ASSETS.logo;
  return (
    <img
      src={asset.src}
      width={asset.width}
      height={asset.height}
      alt={asset.alt}
      loading="eager"
      decoding="sync"
      fetchPriority="high"
      className={`${sizeClasses} ${aspectClass} object-contain ${className}`}
    />
  );
}
