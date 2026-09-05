import React from 'react';
import { motion } from 'framer-motion';

export const AnNassrPage: React.FC = () => {
  return (
    <main className="bg-[#0E0E0E] min-h-screen">
      {/* 1. Hero Section */}
      <section className="relative w-full h-screen flex flex-col justify-center items-center overflow-hidden">
        {/* Background Images */}
        <picture className="absolute inset-0 z-0">
          <source media="(min-width: 768px)" srcSet="/assets/images/an-nassr-desktop.jpg" />
          <img
            src="/assets/images/an-nassr-mobile.jpg"
            alt="AN NASSR ENTREPRENEUR Leather Background"
            className="w-full h-full object-cover object-center filter brightness-90 contrast-105"
          />
        </picture>
        
        {/* Subtle Dark Gradient Overlay for readability while keeping logo visible */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E0E] via-[#0E0E0E]/40 to-transparent opacity-80 pointer-events-none z-0" />

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center text-center px-6 md:px-12 mt-32 md:mt-48 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-4"
          >
            <span className="text-[#C8A45A] uppercase tracking-[0.3em] text-xs font-semibold">Our Associate</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="text-4xl md:text-6xl font-serif text-white tracking-widest mb-6 drop-shadow-lg"
          >
            AN NASSR ENTREPRENEUR
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="text-lg md:text-2xl text-slate-200 font-light mb-8 max-w-2xl"
          >
            Premium Leather Manufacturing
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
            className="text-sm md:text-base text-slate-300 font-light max-w-xl mb-12"
          >
            Crafting quality leather with precision, heritage and a commitment to excellence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a href="#about" className="px-8 py-3 bg-[#C8A45A] text-[#0E0E0E] rounded-sm text-xs uppercase tracking-widest font-semibold hover:bg-white transition-colors duration-300">
              Explore Our Company
            </a>
            <a href="#contact" className="px-8 py-3 border border-[#C8A45A] text-[#C8A45A] rounded-sm text-xs uppercase tracking-widest font-semibold hover:bg-[#C8A45A] hover:text-[#0E0E0E] transition-colors duration-300">
              Contact Us
            </a>
          </motion.div>
        </div>
      </section>

      {/* 2. About Section */}
      <section id="about" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-[#C8A45A] uppercase tracking-[0.2em] text-xs font-semibold mb-4 block">Our Story</span>
            <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">About AN NASSR ENTREPRENEUR</h2>
            <div className="w-12 h-[1px] bg-[#C8A45A] mb-8" />
            <p className="text-slate-300 font-light leading-relaxed mb-6">
              AN NASSR ENTREPRENEUR is a distinguished leather manufacturing company dedicated to quality, craftsmanship, and reliable production. We blend traditional techniques with modern precision to deliver superior leather products to the global market.
            </p>
            <p className="text-slate-300 font-light leading-relaxed">
              Our commitment to excellence ensures that every piece of leather manufactured meets the highest standards of durability, finish, and aesthetic appeal.
            </p>
          </div>
          <div className="relative h-[400px] md:h-[500px]">
            <img 
              src="/assets/images/leather-hands-black.jpg" 
              alt="Premium Leather Craftsmanship" 
              className="w-full h-full object-cover rounded-sm filter brightness-75 contrast-125"
            />
            <div className="absolute inset-0 border border-[#C8A45A]/20 m-4 rounded-sm pointer-events-none" />
          </div>
        </div>
      </section>

      {/* 3. Leather Manufacturing */}
      <section id="manufacturing" className="py-24 bg-[#141414]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <span className="text-[#C8A45A] uppercase tracking-[0.2em] text-xs font-semibold mb-4 block">Capabilities</span>
          <h2 className="text-3xl md:text-5xl font-serif text-white mb-16">Leather Manufacturing</h2>
          
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="bg-[#0E0E0E] p-8 border border-white/5 hover:border-[#C8A45A]/30 transition-colors duration-500 rounded-sm">
              <h3 className="text-[#C8A45A] font-serif text-xl mb-4 tracking-wider">PREMIUM MATERIALS</h3>
              <p className="text-slate-400 font-light text-sm leading-relaxed">
                Carefully selected leather materials with uncompromising attention to quality from the very source.
              </p>
            </div>
            <div className="bg-[#0E0E0E] p-8 border border-white/5 hover:border-[#C8A45A]/30 transition-colors duration-500 rounded-sm">
              <h3 className="text-[#C8A45A] font-serif text-xl mb-4 tracking-wider">PRECISION MANUFACTURING</h3>
              <p className="text-slate-400 font-light text-sm leading-relaxed">
                Consistent manufacturing processes focused on precision, efficiency, and scale without sacrificing standards.
              </p>
            </div>
            <div className="bg-[#0E0E0E] p-8 border border-white/5 hover:border-[#C8A45A]/30 transition-colors duration-500 rounded-sm">
              <h3 className="text-[#C8A45A] font-serif text-xl mb-4 tracking-wider">CRAFTSMANSHIP</h3>
              <p className="text-slate-400 font-light text-sm leading-relaxed">
                A perfect balance of highly skilled artisan craftsmanship and modern production technologies.
              </p>
            </div>
            <div className="bg-[#0E0E0E] p-8 border border-white/5 hover:border-[#C8A45A]/30 transition-colors duration-500 rounded-sm">
              <h3 className="text-[#C8A45A] font-serif text-xl mb-4 tracking-wider">CONSISTENT QUALITY</h3>
              <p className="text-slate-400 font-light text-sm leading-relaxed">
                Reliable quality control standards implemented rigorously throughout the entire manufacturing process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Quality & Craftsmanship */}
      <section id="quality" className="py-24 px-6 md:px-12 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-serif text-white mb-8">Quality In Every Detail</h2>
        <div className="flex justify-center mb-8">
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#C8A45A] to-transparent" />
        </div>
        <p className="text-slate-300 font-light text-lg md:text-xl leading-relaxed mb-12">
          We believe that true luxury lies in the details. From the initial selection of raw hides to the final finishing touches, every step is executed with a relentless pursuit of perfection. Our leather exhibits unparalleled durability, consistency, and an exquisite finish that stands the test of time.
        </p>
      </section>

      {/* 5. THW Association */}
      <section className="py-24 bg-[#0A0A0A] border-y border-[#C8A45A]/10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-[#C8A45A] uppercase tracking-[0.3em] text-sm font-semibold mb-4">Our Associate</h2>
          <h3 className="text-2xl md:text-4xl font-serif text-white tracking-widest mb-8">AN NASSR ENTREPRENEUR & THW INTERNATIONAL</h3>
          <p className="text-slate-300 font-light leading-relaxed">
            AN NASSR ENTREPRENEUR is proud to be an esteemed associate concern connected with THW INTERNATIONAL. Together, we share a unified vision of delivering world-class leather manufacturing excellence, combining resources, expertise, and a legacy of quality to serve our international clientele.
          </p>
        </div>
      </section>

      {/* 6. Company Information */}
      <section id="company" className="py-24 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-white tracking-widest">Company Information</h2>
          <div className="w-12 h-[1px] bg-[#C8A45A] mx-auto mt-6" />
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* AN NASSR Details */}
          <div className="bg-[#141414] p-10 rounded-sm border border-white/5">
            <h3 className="text-xl font-serif text-[#C8A45A] mb-8 tracking-wider uppercase">AN NASSR ENTREPRENEUR</h3>
            
            <div className="space-y-6">
              <div>
                <span className="block text-xs uppercase tracking-widest text-slate-500 mb-2">Address</span>
                <p className="text-slate-300 font-light text-sm leading-relaxed">
                  236, Trunk Road, Valayampet,<br />
                  Vaniyambadi – 635752.<br />
                  Tirupattur District, Tamilnadu.
                </p>
              </div>
              
              <div>
                <span className="block text-xs uppercase tracking-widest text-slate-500 mb-2">Phone</span>
                <a href="tel:+919487227807" className="text-slate-300 font-light text-sm hover:text-[#C8A45A] transition-colors">
                  +91 9487227807
                </a>
              </div>
              
              <div>
                <span className="block text-xs uppercase tracking-widest text-slate-500 mb-2">Email</span>
                <a href="mailto:annassrentrepreneur24@gmail.com" className="text-slate-300 font-light text-sm hover:text-[#C8A45A] transition-colors break-all">
                  annassrentrepreneur24@gmail.com
                </a>
              </div>
              
              <div>
                <span className="block text-xs uppercase tracking-widest text-slate-500 mb-2">GSTIN</span>
                <p className="text-white font-mono text-sm bg-white/5 inline-block px-3 py-1 rounded-sm border border-white/10">
                  33AARPW3796L1ZN
                </p>
              </div>
            </div>
          </div>

          {/* THW Details */}
          <div className="bg-[#141414] p-10 rounded-sm border border-white/5">
            <h3 className="text-xl font-serif text-[#C8A45A] mb-8 tracking-wider uppercase">THW INTERNATIONAL</h3>
            
            <div className="space-y-6">
              <div>
                <span className="block text-xs uppercase tracking-widest text-slate-500 mb-2">Address</span>
                <p className="text-slate-300 font-light text-sm leading-relaxed">
                  123/ N, Valayampet, opp. Vanitec, Valayambattu,<br />
                  Vaniyambadi – 635751.<br />
                  Tamil Nadu, India.
                </p>
              </div>
              
              <div>
                <span className="block text-xs uppercase tracking-widest text-slate-500 mb-2">GSTIN</span>
                <p className="text-white font-mono text-sm bg-white/5 inline-block px-3 py-1 rounded-sm border border-white/10">
                  33AEEPT9601L1ZV
                </p>
              </div>
              <p className="text-xs text-slate-500 mt-4 italic">
                * Note: THW GSTIN is displayed for association reference.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Contact CTA */}
      <section id="contact" className="relative py-32 flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/assets/images/black-leather-grain.jpg" 
            alt="Dark Leather Background" 
            className="w-full h-full object-cover filter brightness-[0.25] sepia-[0.2] hue-rotate-[-30deg]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0E0E0E] via-transparent to-[#0E0E0E]" />
        </div>
        
        <div className="relative z-10 max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">Let's Build With Quality</h2>
          <p className="text-slate-300 font-light mb-10">
            Connect with AN NASSR ENTREPRENEUR for leather manufacturing and business enquiries.
          </p>
          <a href="mailto:annassrentrepreneur24@gmail.com" className="inline-block px-10 py-4 bg-[#C8A45A] text-[#0E0E0E] font-bold text-xs uppercase tracking-widest hover:bg-white transition-colors duration-300 shadow-[0_0_20px_rgba(200,164,90,0.2)]">
            Contact Us
          </a>
        </div>
      </section>
      {/* 8. Custom Footer */}
      <footer className="bg-[#050505] pt-16 pb-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Brand Col */}
          <div>
            <h4 className="text-xl font-serif text-[#C8A45A] tracking-widest mb-4">AN NASSR ENTREPRENEUR</h4>
            <p className="text-slate-400 font-light text-sm mb-6">Associate Concern of THW INTERNATIONAL</p>
            <p className="text-slate-500 font-light text-xs leading-relaxed max-w-xs">
              Crafting quality leather with precision, heritage and a commitment to excellence for the global market.
            </p>
          </div>

          {/* Links Col */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-slate-300 font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-400 font-light text-sm hover:text-[#C8A45A] transition-colors">Home</a></li>
              <li><a href="#about" className="text-slate-400 font-light text-sm hover:text-[#C8A45A] transition-colors">About</a></li>
              <li><a href="#manufacturing" className="text-slate-400 font-light text-sm hover:text-[#C8A45A] transition-colors">Manufacturing</a></li>
              <li><a href="#quality" className="text-slate-400 font-light text-sm hover:text-[#C8A45A] transition-colors">Quality</a></li>
              <li><a href="#contact" className="text-slate-400 font-light text-sm hover:text-[#C8A45A] transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Info Col */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-slate-300 font-semibold mb-6">Company Information</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:+919487227807" className="text-slate-400 font-light text-sm hover:text-[#C8A45A] transition-colors flex items-center gap-3">
                  <span className="text-[#C8A45A] font-bold text-lg">›</span> +91 9487227807
                </a>
              </li>
              <li>
                <a href="mailto:annassrentrepreneur24@gmail.com" className="text-slate-400 font-light text-sm hover:text-[#C8A45A] transition-colors flex items-center gap-3 break-all">
                  <span className="text-[#C8A45A] font-bold text-lg">›</span> annassrentrepreneur24@gmail.com
                </a>
              </li>
              <li>
                <p className="text-slate-400 font-light text-sm flex items-center gap-3">
                  <span className="text-[#C8A45A] font-bold text-lg">›</span> GSTIN: 33AARPW3796L1ZN
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 font-light text-xs">
            © {new Date().getFullYear()} AN NASSR ENTREPRENEUR. All Rights Reserved.
          </p>
          <a href="/" className="text-slate-500 font-light text-xs hover:text-[#C8A45A] transition-colors">
            THW INTERNATIONAL
          </a>
        </div>
      </footer>
    </main>
  );
};
