import React from 'react';
import { Phone, Mail, Globe, MapPin, Briefcase, Download, FileText, Shirt, Footprints, Hand, MessageCircle } from 'lucide-react';

// --- Types ---
interface ContactInfo {
  name: string;
  company: string;
  phone: string;
  email: string;
}

// --- VCF Generator ---
const generateVCF = (contact: ContactInfo) => {
  const vcfData = `BEGIN:VCARD
VERSION:3.0
FN:${contact.name}
ORG:${contact.company}
TEL;TYPE=WORK,VOICE:${contact.phone}
EMAIL;TYPE=WORK:${contact.email}
END:VCARD`;

  const blob = new Blob([vcfData], { type: 'text/vcard' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${contact.name.replace(/ /g, '_')}_Contact.vcf`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};

// --- Lightweight CSS-only Card Wrapper Component ---
const InteractiveCard: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div
      className="relative w-full max-w-lg mx-auto rounded-xl border border-[#C8A45A]/30 bg-[#0A0A0A] shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98] group flex flex-col"
    >
      {/* Lightweight CSS Gradient Background instead of heavy images */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#181818] via-[#0A0A0A] to-[#000000] pointer-events-none"></div>

      {/* Subtle top glare effect using CSS */}
      <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none transition-opacity duration-300 opacity-0 group-hover:opacity-100"></div>

      {/* Card Content */}
      <div className="relative z-10 p-8 sm:p-10 flex flex-col h-full">
        {children}
      </div>
    </div>
  );
};

// --- Main Page Component ---
export const DigitalCardPage: React.FC = () => {
  return (
    <main className="bg-[#050505] min-h-screen pt-32 pb-24 relative overflow-hidden font-sans">
      {/* Lightweight CSS Background Ambience */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(200,164,90,0.4)_0%,transparent_70%)] blur-[100px]"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(200,164,90,0.4)_0%,transparent_70%)] blur-[100px]"></div>
      </div>

      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-6 mb-16 flex flex-col items-center text-center relative z-20">
        <h1 className="text-2xl md:text-3xl font-serif text-[#C8A45A] tracking-[0.2em] uppercase">Digital Business Card</h1>
        <p className="mt-4 text-slate-400 font-light tracking-[0.3em] text-xs uppercase">Connect • Explore • Collaborate</p>
      </div>

      {/* Cards Container */}
      <div className="max-w-7xl mx-auto px-6 xl:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 xl:gap-24 relative z-20">
        
        {/* =========================================
            CARD 1: THW INTERNATIONAL
        ========================================= */}
        <InteractiveCard>
          {/* Brand Header */}
          <div className="flex flex-col items-center justify-center mb-8 border-b border-[#C8A45A]/20 pb-8 text-center min-h-[180px]">
            {/* Using the newly processed transparent THW Logo */}
            <img 
              src="/assets/logos/thw-logo-clean.webp" 
              alt="THW International Monogram" 
              width={100} 
              height={100} 
              className="w-24 h-24 object-contain mb-4 drop-shadow-[0_0_15px_rgba(200,164,90,0.4)]"
              loading="eager"
              decoding="async"
            />
            <h2 className="text-2xl md:text-3xl font-serif text-[#C8A45A] tracking-widest mb-1 drop-shadow-md">THW INTERNATIONAL</h2>
            <p className="text-[10px] text-slate-400 uppercase tracking-[0.3em] font-semibold mt-1">Integrated Leather Manufacturing Excellence</p>
          </div>

          {/* Contact Person */}
          <div className="mb-8 text-center">
            <h3 className="text-[#C8A45A] text-2xl md:text-3xl font-serif drop-shadow-sm mb-1 uppercase font-bold tracking-wider">PM ABDUL WAJID</h3>
          </div>

          {/* Business Details */}
          <div className="space-y-6 mb-10 flex-grow">
            <div>
              <p className="text-[10px] uppercase tracking-widest text-slate-500 mb-3 font-semibold text-center">Manufacturers of Finished Leather for:</p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-300 font-light">
                <span className="flex items-center gap-1.5"><Footprints className="w-4 h-4 text-[#C8A45A]" /> Shoes</span>
                <span className="flex items-center gap-1.5"><Shirt className="w-4 h-4 text-[#C8A45A]" /> Garments</span>
                <span className="flex items-center gap-1.5"><Briefcase className="w-4 h-4 text-[#C8A45A]" /> Leather Goods</span>
                <span className="flex items-center gap-1.5"><Hand className="w-4 h-4 text-[#C8A45A]" /> Gloves</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-center sm:text-left pt-4">
              <div className="flex flex-col items-center sm:items-start">
                <p className="text-[10px] uppercase tracking-widest text-slate-500 mb-2 font-semibold flex items-center gap-1.5"><MapPin className="w-3 h-3 text-[#C8A45A]" /> Tannery – I</p>
                <p className="text-xs text-slate-400 font-light leading-relaxed">
                  123/N, Behind Vanitec,<br/>Valayampet,<br/>Vaniyambadi – 635752.
                </p>
              </div>
              <div className="flex flex-col items-center sm:items-start">
                <p className="text-[10px] uppercase tracking-widest text-slate-500 mb-2 font-semibold flex items-center gap-1.5"><MapPin className="w-3 h-3 text-[#C8A45A]" /> Tannery – II</p>
                <p className="text-xs text-slate-400 font-light leading-relaxed">
                  1475/A, P.J. Nehru Street,<br/>Cutchery Road,<br/>Vaniyambadi.
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center sm:justify-start gap-3 pt-4 border-t border-[#C8A45A]/10">
              <FileText className="w-4 h-4 text-[#C8A45A]" />
              <p className="text-sm text-slate-400 font-light"><span className="text-slate-500 text-[10px] uppercase tracking-widest mr-2">GSTIN:</span> 33AARPW3796L1ZN</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4 mt-auto">
            <a href="tel:+919442627480" className="flex flex-col items-center justify-center py-3 bg-[#0A0A0A] border border-[#C8A45A]/40 rounded-lg text-[#C8A45A] hover:bg-[#C8A45A] hover:text-[#000] hover:shadow-[0_0_15px_rgba(200,164,90,0.4)] transition-all duration-300 group/btn">
              <Phone className="w-5 h-5 mb-1.5 group-hover/btn:-translate-y-0.5 transition-transform" />
              <span className="text-[10px] uppercase tracking-wider font-semibold">Call</span>
            </a>
            <a href="https://wa.me/919442627480?text=Hi,%20I%20came%20across%20your%20business%20and%20would%20love%20to%20connect." target="_blank" rel="noreferrer" className="flex flex-col items-center justify-center py-3 bg-[#0A0A0A] border border-[#C8A45A]/40 rounded-lg text-[#C8A45A] hover:bg-[#C8A45A] hover:text-[#000] hover:shadow-[0_0_15px_rgba(200,164,90,0.4)] transition-all duration-300 group/btn">
              <MessageCircle className="w-5 h-5 mb-1.5 group-hover/btn:-translate-y-0.5 transition-transform" />
              <span className="text-[10px] uppercase tracking-wider font-semibold">WhatsApp</span>
            </a>
            <a href="mailto:thw.international@gmail.com" className="flex flex-col items-center justify-center py-3 bg-[#0A0A0A] border border-[#C8A45A]/40 rounded-lg text-[#C8A45A] hover:bg-[#C8A45A] hover:text-[#000] hover:shadow-[0_0_15px_rgba(200,164,90,0.4)] transition-all duration-300 group/btn">
              <Mail className="w-5 h-5 mb-1.5 group-hover/btn:-translate-y-0.5 transition-transform" />
              <span className="text-[10px] uppercase tracking-wider font-semibold">Email</span>
            </a>
            <a href="https://www.thw-intl.co.in/" target="_blank" rel="noreferrer" className="flex flex-col items-center justify-center py-3 bg-[#0A0A0A] border border-[#C8A45A]/40 rounded-lg text-[#C8A45A] hover:bg-[#C8A45A] hover:text-[#000] hover:shadow-[0_0_15px_rgba(200,164,90,0.4)] transition-all duration-300 group/btn">
              <Globe className="w-5 h-5 mb-1.5 group-hover/btn:-translate-y-0.5 transition-transform" />
              <span className="text-[10px] uppercase tracking-wider font-semibold">Website</span>
            </a>
          </div>

          {/* Save Contact */}
          <button 
            onClick={() => generateVCF({ name: 'PM Abdul Wajid', company: 'THW International', phone: '+919442627480', email: 'thw.international@gmail.com' })}
            className="w-full flex items-center justify-center gap-2 py-3 bg-[#111] border border-[#C8A45A]/20 rounded-lg text-slate-300 hover:text-white hover:border-[#C8A45A] transition-all duration-300 mt-2 text-xs uppercase tracking-widest font-medium"
          >
            <Download className="w-4 h-4 text-[#C8A45A]" /> Save Contact
          </button>
        </InteractiveCard>


        {/* =========================================
            CARD 2: AN NASSR ENTREPRENEUR
        ========================================= */}
        <InteractiveCard>
          {/* Brand Header */}
          <div className="flex flex-col items-center justify-center mb-8 border-b border-[#C8A45A]/20 pb-8 text-center min-h-[180px]">
            {/* Using the newly processed transparent AN NASSR Logo */}
            <img 
              src="/assets/logos/an-nassr-logo-clean.webp" 
              alt="An Nassr Monogram" 
              width={100} 
              height={100} 
              className="w-24 h-24 object-contain mb-4 drop-shadow-[0_0_15px_rgba(200,164,90,0.4)]"
              loading="eager"
              decoding="async"
            />
            <h2 className="text-2xl md:text-3xl font-serif text-[#C8A45A] tracking-widest mb-1 drop-shadow-md">AN NASSR ENTREPRENEUR</h2>
            <p className="text-[10px] text-slate-400 uppercase tracking-[0.3em] font-semibold mt-1">Our Associate Concern</p>
          </div>

          {/* Business Details */}
          <div className="space-y-6 mb-10 flex-grow">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-slate-500 mb-2 font-semibold flex items-center gap-1.5"><MapPin className="w-3 h-3 text-[#C8A45A]" /> Address</p>
                  <p className="text-xs text-slate-400 font-light leading-relaxed">
                    236, Trunk Road,<br/>Valayampet,<br/>Vaniyambadi – 635752.<br/>Tirupattur District, Tamilnadu.
                  </p>
                </div>

                <div className="flex flex-col gap-1">
                  <p className="text-[10px] uppercase tracking-widest text-slate-500 font-semibold flex items-center gap-1.5"><FileText className="w-3 h-3 text-[#C8A45A]" /> GSTIN</p>
                  <p className="text-xs text-slate-400 font-mono">33AVLPH2933D1ZX</p>
                </div>
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-widest text-slate-500 mb-3 font-semibold">Business Categories</p>
                <div className="flex flex-col gap-3 text-xs text-slate-300 font-light">
                  <span className="flex items-center gap-3 border border-white/5 p-2 rounded bg-black/20"><Footprints className="w-4 h-4 text-[#C8A45A]" /> Shoes</span>
                  <span className="flex items-center gap-3 border border-white/5 p-2 rounded bg-black/20"><Shirt className="w-4 h-4 text-[#C8A45A]" /> Garments</span>
                  <span className="flex items-center gap-3 border border-white/5 p-2 rounded bg-black/20"><Briefcase className="w-4 h-4 text-[#C8A45A]" /> Leather Goods</span>
                  <span className="flex items-center gap-3 border border-white/5 p-2 rounded bg-black/20"><Hand className="w-4 h-4 text-[#C8A45A]" /> Gloves</span>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4 mt-auto">
            <a href="tel:+919487227807" className="flex flex-col items-center justify-center py-3 bg-[#0A0A0A] border border-[#C8A45A]/40 rounded-lg text-[#C8A45A] hover:bg-[#C8A45A] hover:text-[#000] hover:shadow-[0_0_15px_rgba(200,164,90,0.4)] transition-all duration-300 group/btn">
              <Phone className="w-5 h-5 mb-1.5 group-hover/btn:-translate-y-0.5 transition-transform" />
              <span className="text-[10px] uppercase tracking-wider font-semibold">Call</span>
            </a>
            <a href="https://wa.me/919487227807?text=Hi,%20I%20came%20across%20your%20business%20and%20would%20love%20to%20connect." target="_blank" rel="noreferrer" className="flex flex-col items-center justify-center py-3 bg-[#0A0A0A] border border-[#C8A45A]/40 rounded-lg text-[#C8A45A] hover:bg-[#C8A45A] hover:text-[#000] hover:shadow-[0_0_15px_rgba(200,164,90,0.4)] transition-all duration-300 group/btn">
              <MessageCircle className="w-5 h-5 mb-1.5 group-hover/btn:-translate-y-0.5 transition-transform" />
              <span className="text-[10px] uppercase tracking-wider font-semibold">WhatsApp</span>
            </a>
            <a href="mailto:annassrentrepreneur24@gmail.com" className="flex flex-col items-center justify-center py-3 bg-[#0A0A0A] border border-[#C8A45A]/40 rounded-lg text-[#C8A45A] hover:bg-[#C8A45A] hover:text-[#000] hover:shadow-[0_0_15px_rgba(200,164,90,0.4)] transition-all duration-300 group/btn">
              <Mail className="w-5 h-5 mb-1.5 group-hover/btn:-translate-y-0.5 transition-transform" />
              <span className="text-[10px] uppercase tracking-wider font-semibold">Email</span>
            </a>
            <a href="https://www.thw-intl.co.in/an-nassr" target="_blank" rel="noreferrer" className="flex flex-col items-center justify-center py-3 bg-[#0A0A0A] border border-[#C8A45A]/40 rounded-lg text-[#C8A45A] hover:bg-[#C8A45A] hover:text-[#000] hover:shadow-[0_0_15px_rgba(200,164,90,0.4)] transition-all duration-300 group/btn">
              <Globe className="w-5 h-5 mb-1.5 group-hover/btn:-translate-y-0.5 transition-transform" />
              <span className="text-[10px] uppercase tracking-wider font-semibold">Website</span>
            </a>
          </div>

          {/* Save Contact */}
          <button 
            onClick={() => generateVCF({ name: 'AN NASSR', company: 'AN NASSR Entrepreneur', phone: '+919487227807', email: 'annassrentrepreneur24@gmail.com' })}
            className="w-full flex items-center justify-center gap-2 py-3 bg-[#111] border border-[#C8A45A]/20 rounded-lg text-slate-300 hover:text-white hover:border-[#C8A45A] transition-all duration-300 mt-2 text-xs uppercase tracking-widest font-medium"
          >
            <Download className="w-4 h-4 text-[#C8A45A]" /> Save Contact
          </button>
        </InteractiveCard>

      </div>

      {/* Minimal Luxury Footer */}
      <footer className="mt-32 max-w-7xl mx-auto px-6 text-center relative z-20">
        <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#C8A45A]/50 to-transparent mx-auto mb-8"></div>
        <p className="text-[#C8A45A] uppercase tracking-[0.3em] text-xs font-semibold mb-3">THW INTERNATIONAL</p>
        <p className="text-slate-500 font-light text-[10px] tracking-widest uppercase mb-8">"Integrated Leather Manufacturing Excellence"</p>
        <p className="text-slate-600 font-light text-[10px]">
          © {new Date().getFullYear()} THW International. All Rights Reserved.
        </p>
      </footer>

    </main>
  );
};
