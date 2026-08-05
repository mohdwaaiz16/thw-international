import React from 'react';
import { Compass, MapPin, Award } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-28 bg-[#0E0E0E] relative border-b border-[#C8A45A]/15 overflow-hidden">
      {/* Background Gold Ambient Radial Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#C8A45A]/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header Tag */}
        <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-[#C8A45A] mb-4">
          <Compass className="w-4 h-4" />
          <span>HERITAGE & CRAFTSMANSHIP</span>
        </div>

        {/* Section Title */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <h2 className="text-4xl md:text-6xl font-serif text-white max-w-3xl leading-tight">
            EXCELLENCE SINCE 2004 IN <span className="text-gold-shimmer font-italic">LEATHER MANUFACTURING</span>
          </h2>
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-slate-400 border-l-2 border-[#C8A45A] pl-4 py-1">
            <MapPin className="w-4 h-4 text-[#C8A45A]" />
            <span>Vaniyambadi Tannery Belt, Tamil Nadu, India</span>
          </div>
        </div>

        {/* Image Grid Storytelling */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Main Large Image Card - Emerald Green Suede Hide */}
          <div className="lg:col-span-7 relative group rounded-3xl overflow-hidden glass-luxury p-3 border border-[#C8A45A]/30 shadow-2xl">
            <div className="relative h-[480px] md:h-[560px] rounded-2xl overflow-hidden">
              <img
                src="/assets/images/leather-suede-green.jpg"
                alt="THW Master Leather Artisan Inspecting Emerald Suede Hide"
                className="w-full h-full object-cover filter brightness-95 contrast-110 transform group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E0E] via-transparent to-transparent opacity-90" />
              
              {/* Overlay Badge Statement */}
              <div className="absolute bottom-8 left-8 right-8 p-6 glass-luxury rounded-xl border border-[#C8A45A]/30">
                <p className="text-xs uppercase tracking-[0.3em] text-[#C8A45A] mb-1 font-semibold">
                  INTEGRATED MANUFACTURING
                </p>
                <p className="font-serif text-xl md:text-2xl text-white">
                  Master artisans controlling every hide from raw selection to final hand-finished sheen.
                </p>
              </div>
            </div>
          </div>

          {/* Secondary Stacked Content Card */}
          <div className="lg:col-span-5 space-y-8">
            <div className="glass-luxury rounded-3xl p-8 border border-[#C8A45A]/20 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C8A45A]/10 text-[#C8A45A] text-[11px] uppercase tracking-widest">
                <Award className="w-3.5 h-3.5" />
                <span>GLOBAL INDUSTRIAL TRUST</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-serif text-white">
                PREMIUM FINISHED LEATHER SUPPLIER TO WORLDWIDE BRANDS
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed font-light">
                THW International operates state-of-the-art tannery infrastructure in Vaniyambadi, turning premium raw goat and sheep skins into world-class finished leather for luxury footwear, apparel, and leather goods.
              </p>
            </div>

            {/* Tannery Hides Image Card */}
            <div className="relative h-64 rounded-3xl overflow-hidden glass-luxury p-2 border border-[#C8A45A]/20 group">
              <img
                src="/assets/images/tannery-hides.jpg"
                alt="THW Hanging Finished Leather Hides"
                className="w-full h-full object-cover rounded-2xl filter brightness-90 transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E0E]/90 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-6 text-xs uppercase tracking-[0.25em] text-[#C8A45A]">
                Tannery Air-Drying & Quality Inspection Facility
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
