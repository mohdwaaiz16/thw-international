import React, { useEffect, useState } from 'react';
import { THWLogo } from './THWLogo';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsFading(true), 300);
          setTimeout(() => onComplete(), 1000);
          return 100;
        }
        const diff = Math.floor(Math.random() * 15) + 5;
        return Math.min(100, prev + diff);
      });
    }, 120);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-between bg-[#0E0E0E] text-white p-8 transition-opacity duration-700 ease-in-out ${
        isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Background Leather Pattern Overlay */}
      <div className="absolute inset-0 bg-leather-pattern opacity-40" />
      
      {/* Top Header Stamp */}
      <div className="relative z-10 w-full flex justify-between items-center text-xs tracking-[0.3em] text-[#C8A45A]/70 uppercase">
        <span>Vaniyambadi • Tamil Nadu</span>
        <span>Est. 2004</span>
      </div>

      {/* Main Center Logo & Progress Reveal */}
      <div className="relative z-10 flex flex-col items-center justify-center my-auto space-y-8">
        <div className="relative">
          {/* Pulsing Gold Halo */}
          <div className="absolute -inset-8 bg-[#C8A45A]/15 rounded-full blur-2xl animate-pulse" />
          <THWLogo size="xl" />

        </div>

        {/* Loading Message */}
        <div className="text-center space-y-2">
          <p className="font-serif text-lg md:text-xl tracking-widest text-slate-200">
            INTEGRATED LEATHER MANUFACTURING EXCELLENCE
          </p>
          <p className="text-xs tracking-[0.4em] text-[#C8A45A] uppercase font-light">
            Crafting Luxury Finished Goat & Sheep Leather
          </p>
        </div>

        {/* Minimal Gold Progress Bar */}
        <div className="w-64 md:w-80 space-y-2">
          <div className="h-[2px] w-full bg-[#1B1B1B] overflow-hidden rounded-full relative">
            <div
              className="h-full bg-gradient-to-r from-[#8A6B29] via-[#C8A45A] to-[#FFF0C3] transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex justify-between items-center text-[10px] tracking-[0.25em] text-slate-400 font-mono">
            <span>PREPARING EXPERIENCE</span>
            <span className="text-[#C8A45A]">{progress}%</span>
          </div>
        </div>
      </div>

      {/* Bottom Footer Details */}
      <div className="relative z-10 text-[11px] tracking-[0.25em] text-slate-500 uppercase flex items-center gap-6">
        <span>LWG Gold Certified Standard</span>
        <span>•</span>
        <span>Global Export Network</span>
      </div>
    </div>
  );
};
