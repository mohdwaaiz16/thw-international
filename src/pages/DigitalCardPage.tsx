import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Phone, Mail, Globe, MapPin, Briefcase, Download, FileText, Shirt, ShoppingBag, Hand } from 'lucide-react';
import { THWLogo } from '../components/THWLogo';

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

// --- 3D Card Wrapper Component ---
const InteractiveCard: React.FC<{ children: React.ReactNode; isMobile: boolean }> = ({ children, isMobile }) => {
  const ref = useRef<HTMLDivElement>(null);

  // Motion values for the tilt effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs for mouse movement
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  // Map mouse position to rotation (limit the tilt to 10 degrees)
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);
  
  // Background gradient transform
  const background = useTransform(
    () => `radial-gradient(circle at ${x.get() * 100 + 50}% ${y.get() * 100 + 50}%, rgba(200,164,90,0.8) 0%, transparent 60%)`
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isMobile || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    // Calculate relative position (-0.5 to 0.5)
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    if (isMobile) return;
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: isMobile ? 0 : rotateX,
        rotateY: isMobile ? 0 : rotateY,
        transformStyle: "preserve-3d",
      }}
      whileHover={{ scale: isMobile ? 1.02 : 1.05 }}
      whileTap={{ scale: 0.98 }}
      className="relative w-full max-w-lg mx-auto rounded-xl border border-[#C8A45A]/30 bg-[#0A0A0A] shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden transition-all duration-300 group"
    >
      {/* Dynamic light sweep effect based on cursor */}
      {!isMobile && (
        <motion.div 
          className="absolute inset-0 z-50 pointer-events-none mix-blend-overlay opacity-0 group-hover:opacity-40 transition-opacity duration-300"
          style={{ background }}
        />
      )}
      
      {/* Leather Texture Overlay */}
      <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'url(/assets/images/black-leather-grain.jpg)', backgroundSize: 'cover' }}></div>
      <div className="absolute inset-0 bg-gradient-to-br from-[#111111]/80 to-[#000000] pointer-events-none"></div>

      {/* Card Content */}
      <div className="relative z-10 p-8 sm:p-10 flex flex-col h-full transform-style-3d">
        {children}
      </div>
    </motion.div>
  );
};

// --- Main Page Component ---
export const DigitalCardPage: React.FC = () => {
  // Simple check for mobile to disable excessive 3D on small touch screens
  const [isMobile, setIsMobile] = useState(false);
  
  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <main className="bg-[#050505] min-h-screen pt-32 pb-24 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#C8A45A] rounded-full blur-[150px]"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#C8A45A] rounded-full blur-[150px]"></div>
      </div>

      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-6 mb-16 flex flex-col items-center text-center relative z-20">
        <THWLogo size="md" />
        <h1 className="mt-8 text-2xl md:text-3xl font-serif text-[#C8A45A] tracking-[0.2em] uppercase">Digital Business Card</h1>
        <p className="mt-4 text-slate-400 font-light tracking-[0.3em] text-xs uppercase">Connect • Explore • Collaborate</p>
      </div>

      {/* Cards Container */}
      <div className="max-w-7xl mx-auto px-6 xl:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 xl:gap-24 relative z-20 perspective-1000">
        
        {/* =========================================
            CARD 1: THW INTERNATIONAL
        ========================================= */}
        <InteractiveCard isMobile={isMobile}>
          {/* Brand Header */}
          <div className="flex items-center gap-6 mb-8 border-b border-[#C8A45A]/20 pb-8">
            <div className="shrink-0">
              <THWLogo size="sm" />
            </div>
            <div>
              <h2 className="text-2xl font-serif text-white tracking-widest mb-1 drop-shadow-md">THW INTERNATIONAL</h2>
              <p className="text-[10px] text-[#C8A45A] uppercase tracking-[0.2em] font-medium">Integrated Leather Manufacturing Excellence</p>
            </div>
          </div>

          {/* Contact Person */}
          <div className="mb-8">
            <h3 className="text-[#C8A45A] text-2xl font-serif drop-shadow-sm mb-1">PM Abdul Wajid</h3>
          </div>

          {/* Business Details */}
          <div className="space-y-6 mb-10 flex-grow">
            <div>
              <p className="text-xs uppercase tracking-widest text-slate-500 mb-3 font-semibold">Manufacturers of Finished Leather for:</p>
              <div className="flex flex-wrap gap-4 text-sm text-slate-300 font-light">
                <span className="flex items-center gap-1.5"><Shirt className="w-4 h-4 text-[#C8A45A]" /> Shoes</span>
                <span className="flex items-center gap-1.5"><ShoppingBag className="w-4 h-4 text-[#C8A45A]" /> Garments</span>
                <span className="flex items-center gap-1.5"><Briefcase className="w-4 h-4 text-[#C8A45A]" /> Leather Goods</span>
                <span className="flex items-center gap-1.5"><Hand className="w-4 h-4 text-[#C8A45A]" /> Gloves</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-slate-500 mb-2 font-semibold flex items-center gap-1.5"><MapPin className="w-3 h-3 text-[#C8A45A]" /> Tannery – I</p>
                <p className="text-xs text-slate-400 font-light leading-relaxed">
                  123/N, Behind Vanitec,<br/>Valayampet,<br/>Vaniyambadi – 635752.
                </p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-slate-500 mb-2 font-semibold flex items-center gap-1.5"><MapPin className="w-3 h-3 text-[#C8A45A]" /> Tannery – II</p>
                <p className="text-xs text-slate-400 font-light leading-relaxed">
                  1475/A, P.J. Nehru Street,<br/>Cutchery Road,<br/>Vaniyambadi.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <FileText className="w-4 h-4 text-[#C8A45A]" />
              <p className="text-sm text-slate-400 font-light"><span className="text-slate-500 text-[10px] uppercase tracking-widest mr-2">GSTIN:</span> 33AARPW3796L1ZN</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-3 gap-3 mb-4">
            <a href="tel:+919442627480" className="flex flex-col items-center justify-center py-3 bg-[#0A0A0A] border border-[#C8A45A]/40 rounded-lg text-[#C8A45A] hover:bg-[#C8A45A] hover:text-[#000] hover:shadow-[0_0_15px_rgba(200,164,90,0.4)] transition-all duration-300 group/btn">
              <Phone className="w-5 h-5 mb-1.5 group-hover/btn:-translate-y-0.5 transition-transform" />
              <span className="text-[10px] uppercase tracking-wider font-semibold">Call</span>
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
        <InteractiveCard isMobile={isMobile}>
          {/* Brand Header */}
          <div className="flex flex-col items-center justify-center mb-8 border-b border-[#C8A45A]/20 pb-8 text-center pt-2">
            <h2 className="text-4xl md:text-5xl font-serif text-[#C8A45A] tracking-widest mb-3 drop-shadow-md leading-tight">
              <span className="block text-5xl md:text-6xl mb-[-10px]">AN</span> 
              NASSR<br/>
              <span className="text-xl md:text-2xl tracking-[0.3em] font-light text-white">ENTREPRENEUR</span>
            </h2>
            <p className="text-[10px] text-slate-400 uppercase tracking-[0.3em] font-semibold mt-2">Our Associate Concern</p>
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
                  <span className="flex items-center gap-3 border border-white/5 p-2 rounded bg-black/20"><Shirt className="w-4 h-4 text-[#C8A45A]" /> Shoes</span>
                  <span className="flex items-center gap-3 border border-white/5 p-2 rounded bg-black/20"><ShoppingBag className="w-4 h-4 text-[#C8A45A]" /> Garments</span>
                  <span className="flex items-center gap-3 border border-white/5 p-2 rounded bg-black/20"><Briefcase className="w-4 h-4 text-[#C8A45A]" /> Leather Goods</span>
                  <span className="flex items-center gap-3 border border-white/5 p-2 rounded bg-black/20"><Hand className="w-4 h-4 text-[#C8A45A]" /> Gloves</span>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-3 gap-3 mb-4 mt-auto">
            <a href="tel:+919487227807" className="flex flex-col items-center justify-center py-3 bg-[#0A0A0A] border border-[#C8A45A]/40 rounded-lg text-[#C8A45A] hover:bg-[#C8A45A] hover:text-[#000] hover:shadow-[0_0_15px_rgba(200,164,90,0.4)] transition-all duration-300 group/btn">
              <Phone className="w-5 h-5 mb-1.5 group-hover/btn:-translate-y-0.5 transition-transform" />
              <span className="text-[10px] uppercase tracking-wider font-semibold">Call</span>
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
