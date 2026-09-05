import React from 'react';
import { ArrowDown } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex flex-col justify-between bg-[#0E0E0E] overflow-hidden pt-28 pb-8"
    >
      {/* Responsive Hero Background Image */}
      <picture className="absolute inset-0 z-0">
        <source media="(min-width: 768px)" srcSet="/assets/images/hero-desktop.jpg" />
        <img
          src="/assets/images/hero-mobile.jpg"
          alt="THW International Luxury Leather Background"
          className="w-full h-full object-cover object-center filter brightness-95 contrast-105"
        />
      </picture>
      
      {/* Subtle Bottom Vignette Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E0E] via-transparent to-transparent opacity-60 pointer-events-none z-0" />

      {/* Spacer for vertical balance */}
      <div className="relative z-10 flex-grow" />

      {/* Bottom Scroll Indicator */}
      <div className="relative z-10 flex flex-col items-center justify-center text-[#C8A45A]/80 text-xs tracking-[0.3em] uppercase drop-shadow-md pb-4">
        <a href="#about" className="flex flex-col items-center gap-2 hover:text-[#C8A45A] transition-colors">
          <span>Scroll To Discover</span>
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
