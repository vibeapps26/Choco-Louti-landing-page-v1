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
    sm: 'h-7 w-auto',
    md: 'h-8 sm:h-9 w-auto',
    lg: 'h-10 sm:h-12 w-auto',
  }[size];

  if (surface === 'dark') {
    const asset = variant === 'icon' ? BRAND_ASSETS.iconGold : BRAND_ASSETS.logoDarkGold;
    return (
      <img
        src={asset.src}
        width={asset.width}
        height={asset.height}
        alt={asset.alt}
        className={`${sizeClasses} object-contain ${className}`}
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
      className={`${sizeClasses} object-contain ${className}`}
    />
  );
}
