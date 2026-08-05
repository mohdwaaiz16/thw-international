import React from 'react';
import { ArrowDown } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex flex-col justify-between bg-[#0E0E0E] overflow-hidden pt-28 pb-8"
    >
      {/* Desktop Responsive Hero Background Image (4K / Wide Screen) */}
      <div className="absolute inset-0 z-0 hidden md:block">
        <img
          src="/assets/images/hero-desktop.jpg"
          alt="THW International Desktop Luxury Leather Background"
          className="w-full h-full object-cover object-center filter brightness-95 contrast-105"
        />
        {/* Subtle Bottom Vignette Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E0E] via-transparent to-transparent opacity-80" />
      </div>

      {/* Mobile Responsive Hero Background Image (Portrait Screen) */}
      <div className="absolute inset-0 z-0 block md:hidden">
        <img
          src="/assets/images/hero-mobile.png"
          alt="THW International Mobile Luxury Leather Background"
          className="w-full h-full object-cover object-center filter brightness-95 contrast-105"
        />
        {/* Mobile Soft Bottom Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E0E] via-transparent to-transparent opacity-80" />
      </div>

      {/* Spacer for vertical balance */}
      <div className="relative z-10" />

      {/* Bottom Scroll Indicator */}
      <div className="relative z-10 flex flex-col items-center justify-center text-[#C8A45A]/80 text-xs tracking-[0.3em] uppercase drop-shadow-md">
        <a href="#about" className="flex flex-col items-center gap-2 hover:text-[#C8A45A] transition-colors">
          <span>Scroll To Discover</span>
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
