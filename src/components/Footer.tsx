import React from 'react';
import { THWLogo } from './THWLogo';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Manufacturing', href: '#manufacturing' },
    { name: 'Sustainability', href: '#sustainability' },
    { name: 'Contact', href: '#contact' },
  ];

  const targetKeywords = [
    'Premium Leather Manufacturer India',
    'Goat Finished Leather Manufacturer',
    'Sheep Finished Leather Exporter',
    'Leather Manufacturer Tamil Nadu',
    'Leather Export Company India',
    'Leather Supplier India',
    'Leather for Footwear',
    'Leather for Bags',
    'Finished Leather Factory',
    'Leather Exporters Vaniyambadi'
  ];

  return (
    <footer className="bg-[#080808] border-t border-[#C8A45A]/20 pt-20 pb-12 text-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
        
        {/* Top Header Row */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 pb-12 border-b border-slate-900">
          <THWLogo size="lg" />

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center gap-6 md:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs uppercase tracking-[0.2em] text-slate-400 hover:text-[#C8A45A] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Scroll Back To Top Button */}
          <button
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full border border-[#C8A45A]/40 bg-[#1B1B1B] text-[#C8A45A] hover:bg-[#C8A45A] hover:text-[#0E0E0E] transition-all duration-300 flex items-center justify-center shrink-0 self-start lg:self-auto"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>

        {/* Middle SEO & Industrial Information Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 text-slate-300">
          
          <div className="md:col-span-7 space-y-4">
            <h4 className="font-serif text-xl md:text-2xl text-white font-medium tracking-wide">
              THW International
            </h4>
            <p className="text-sm md:text-base leading-relaxed text-slate-400 font-light max-w-xl">
              Integrated Leather Manufacturing Excellence since 2004. Based in Vaniyambadi, Tamil Nadu (India), specializing in global B2B export of high-grade finished goat and sheep leather for footwear, apparel, and leather goods.
            </p>
          </div>

          <div className="md:col-span-5 space-y-4">
            <h4 className="font-serif text-xl md:text-2xl text-white font-medium tracking-wide">
              Plant & Export Location
            </h4>
            <p className="text-xs md:text-sm leading-relaxed font-mono text-slate-300">
              <strong className="text-white font-semibold block mb-1">THW International</strong>
              123/ N, Valayampet, opp. Vanitec,<br />
              Valayambattu, Tamil Nadu - 635751, India.<br />
              <span className="block mt-2">Email: <a href="mailto:thw.international@gmail.com" className="text-[#C8A45A] hover:underline">thw.international@gmail.com</a></span>
              <span>Phone: <a href="tel:+919442627480" className="text-[#C8A45A] hover:underline">+91 9442627480</a></span>
            </p>
          </div>

        </div>

        {/* SEO Keywords Tag Cloud */}
        <div className="pt-8 border-t border-slate-900/80 space-y-3">
          <span className="text-[10px] uppercase tracking-[0.25em] text-slate-500 font-mono block">
            Global Search Indexing Keywords
          </span>
          <div className="flex flex-wrap gap-2 text-[10px] text-slate-500 font-mono">
            {targetKeywords.map((kw, i) => (
              <span key={i} className="hover:text-slate-300 transition-colors">
                {kw} {i < targetKeywords.length - 1 ? '•' : ''}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Copyright & Legal Line */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 font-mono tracking-wider gap-4">
          <div>
            © {new Date().getFullYear()} THW International. All Rights Reserved. Est. 2004 Vaniyambadi, India.
          </div>
          <div className="flex items-center gap-6">
            <span>Privacy Policy</span>
            <span>Terms of Export</span>
            <span>Sitemap</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
