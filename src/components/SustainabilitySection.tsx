import React from 'react';
import { Leaf, Droplets, Recycle, ShieldCheck, Sun } from 'lucide-react';

export const SustainabilitySection: React.FC = () => {
  const pillars = [
    {
      icon: Droplets,
      title: 'Zero Liquid Discharge (ZLD)',
      description: '100% of tannery process wastewater is treated and purified at Vanitec Limited (Vanitech CETP) in Valayampet, Vaniyambadi — established in 1986 to ensure total water recycling and zero effluent discharge into natural waterways.'
    },
    {
      icon: Recycle,
      title: 'By-Product Valorization',
      description: 'Converting organic collagen trimmings and leather shavings into agricultural bio-fertilizers and industrial gelatin, achieving near zero solid waste.'
    },
    {
      icon: ShieldCheck,
      title: 'Ethical Work Environment',
      description: 'Equipped with state-of-the-art air filtration systems, personal safety gear, fair living wages, and continuous artisan skill empowerment since 2004.'
    }
  ];

  return (
    <section id="sustainability" className="py-28 bg-[#0E0E0E] relative border-b border-[#C8A45A]/15 overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C8A45A]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header Tag */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#C8A45A]">
            <Leaf className="w-4 h-4" />
            <span>ECO-RESPONSIBILITY & CERTIFICATIONS</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-serif text-white">
            SUSTAINABLE <span className="text-gold-shimmer font-italic">MANUFACTURING</span>
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm tracking-widest uppercase font-light">
            Preserving Environmental Integrity While Producing Luxury Leather For The World.
          </p>
        </div>

        {/* Highlight Image Banner */}
        <div className="relative rounded-3xl overflow-hidden glass-luxury p-3 border border-[#C8A45A]/30 mb-16 shadow-2xl">
          <div className="relative h-80 md:h-[400px] rounded-2xl overflow-hidden">
            <img
              src="/assets/images/tannery-hides.jpg"
              alt="Sustainable Tannery Air Drying Facility"
              className="w-full h-full object-cover filter brightness-90 contrast-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E0E] via-[#0E0E0E]/40 to-transparent" />
            
            <div className="absolute bottom-8 left-8 right-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="space-y-2 max-w-xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C8A45A] text-[#0E0E0E] text-[10px] uppercase font-bold tracking-widest">
                  <Sun className="w-3 h-3" />
                  <span>SOLAR & GREEN ENERGY POWERED</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-serif text-white">
                  CLEANER TANNERY PROCESSES FOR A GREENER FUTURE
                </h3>
              </div>
              <div className="glass-luxury px-6 py-4 rounded-xl border border-[#C8A45A]/30 text-right">
                <span className="text-3xl font-serif text-gold-shimmer font-bold block">100%</span>
                <span className="text-[10px] text-slate-300 uppercase tracking-widest font-mono">REACH & ZLD COMPLIANT</span>
              </div>
            </div>
          </div>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div
                key={`pillar-${idx}`}
                className="glass-luxury glass-luxury-hover p-8 rounded-3xl border border-[#C8A45A]/20 space-y-4"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#0E0E0E] border border-[#C8A45A]/40 flex items-center justify-center text-[#C8A45A]">
                  <IconComp className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-2xl text-white">
                  {item.title}
                </h3>
                <p className="text-xs md:text-sm text-slate-300 leading-relaxed font-light">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
