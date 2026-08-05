import React from 'react';

interface THWLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'hero';
  className?: string;
}

export const THWLogo: React.FC<THWLogoProps> = ({
  size = 'md',
  className = ''
}) => {
  const textSize = {
    sm: 'text-base sm:text-lg',
    md: 'text-xl sm:text-2xl',
    lg: 'text-2xl sm:text-3xl',
    xl: 'text-3xl sm:text-4xl',
    hero: 'text-4xl sm:text-5xl'
  }[size];

  return (
    <div className={`inline-flex items-center group select-none ${className}`}>
      <div className={`font-serif tracking-[0.18em] font-bold uppercase flex items-center gap-1.5 leading-none ${textSize}`}>
        <span className="text-white drop-shadow-md">THW</span>
        <span className="text-gold-shimmer font-light">INTERNATIONAL</span>
      </div>
    </div>
  );
};
