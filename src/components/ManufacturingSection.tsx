import React from 'react';
import { Cpu, CheckCircle2 } from 'lucide-react';

interface TimelineStep {
  step: string;
  num: string;
  title: string;
  subtitle: string;
  description: string;
  techDetail: string;
}

export const ManufacturingSection: React.FC = () => {
  const steps: TimelineStep[] = [
    {
      step: '01',
      num: '01 / 07',
      title: 'Raw Skin Grading',
      subtitle: 'Raw Material Selection',
      description: 'Strict manual sorting of premium Indian goat and sheep raw skins, inspecting natural grain structure, thickness, and square footage yield.',
      techDetail: '100% Traceability & Origin Inspection'
    },
    {
      step: '02',
      num: '02 / 07',
      title: 'Eco-Friendly Tanning Process',
      subtitle: 'Primary Tannage Stabilization',
      description: 'Stabilizing raw collagen matrices of goat and sheep skins using LWG-compliant vegetable tannins or chrome-free formulations in automated wooden drums.',
      techDetail: 'pH & Temperature Controlled Drums'
    },
    {
      step: '03',
      num: '03 / 07',
      title: 'Precision Retanning & Calibration',
      subtitle: 'Substance & Temper Calibration',
      description: 'Precision shaving and substance calibration of genuine goat and sheep skins to exact buyer specifications (0.6mm - 1.6mm).',
      techDetail: 'Micro-Calibrated Splitting Machines'
    },
    {
      step: '04',
      num: '04 / 07',
      title: 'Custom Drum Dyeing & Fatliquoring',
      subtitle: 'Deep Penetration Coloration',
      description: 'Deep penetrative drum dyeing ensuring vibrant color fastness throughout genuine goat and sheep skin cross-sections.',
      techDetail: 'Spectrophotometer Color Matching'
    },
    {
      step: '05',
      num: '05 / 07',
      title: 'Artisanal Surface Finishing',
      subtitle: 'Sheen, Grain & Patina Artistry',
      description: 'Applying protective silk-touch feelers, crackle foils, or hand-burnished patinas to genuine goat and sheep finished skins.',
      techDetail: 'Hydraulic Embossing & Spray Lines'
    },
    {
      step: '06',
      num: '06 / 07',
      title: 'Rigorous Quality Inspection',
      subtitle: 'Physical & Chemical Testing',
      description: 'Every genuine finished goat and sheep skin undergoes tensile strength, rub-fastness, and ISO chemical safety testing under darkroom lamps.',
      techDetail: 'REACH Compliance Certified'
    },
    {
      step: '07',
      num: '07 / 07',
      title: 'Export Air-Tight Packing & Shipping',
      subtitle: 'Global Dispatch Readiness',
      description: 'Conditioned genuine goat and sheep skins are roll-packed in moisture-proof protective wrapping for export to 30+ countries.',
      techDetail: 'Barcoded Roll Tracking & Moisture Control'
    }
  ];

  return (
    <section id="manufacturing" className="py-28 bg-[#0E0E0E] relative border-b border-[#C8A45A]/15">
      {/* Background Lighting Beam */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#C8A45A]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#C8A45A]">
            <Cpu className="w-4 h-4" />
            <span>INDUSTRIAL PRECISION TIMELINE</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-serif text-white">
            THE 7-STAGE <span className="text-gold-shimmer font-italic">MANUFACTURING PROCESS</span>
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm tracking-widest uppercase font-light">
            Exclusively 100% Genuine Goat & Sheep Raw Skins Processed to International Standards.
          </p>
        </div>

        {/* Process Flow Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((item) => (
            <div
              key={`step-${item.step}`}
              className="glass-luxury glass-luxury-hover p-8 rounded-3xl border border-[#C8A45A]/30 relative overflow-hidden group shadow-2xl flex flex-col justify-between"
            >
              {/* Step Number Background Watermark */}
              <span className="absolute -top-4 -right-2 text-7xl md:text-8xl font-serif font-bold text-[#C8A45A]/10 pointer-events-none select-none">
                {item.step}
              </span>

              <div className="space-y-4 relative z-10">
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.25em] text-[#C8A45A] font-mono">
                  <span>{item.subtitle}</span>
                  <span>{item.num}</span>
                </div>

                <h3 className="text-2xl font-serif text-white group-hover:text-[#C8A45A] transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs md:text-sm text-slate-300 leading-relaxed font-light">
                  {item.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-800 flex items-center gap-2 text-xs text-[#C8A45A] font-medium tracking-wider relative z-10">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>{item.techDetail}</span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
