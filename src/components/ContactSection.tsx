import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Globe, Calculator, MessageSquare } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    country: 'Italy',
    leatherType: 'Goat Finished Leather',
    quantitySqFt: '25000',
    finishPreference: 'Aniline Silk Touch',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const messageText = `*NEW INQUIRY - THW INTERNATIONAL*
----------------------------------------
*Full Name:* ${formData.name}
*Company / Brand:* ${formData.company}
*Corporate Email:* ${formData.email}
*Destination Country:* ${formData.country}
*Leather Category:* ${formData.leatherType}
*Target Volume:* ${formData.quantitySqFt} Sq. Ft.
*Specifications & Color Specs:* ${formData.message || 'Standard Tannery Finishing'}
----------------------------------------`;

    const encodedWA = encodeURIComponent(messageText);
    const waUrl = `https://wa.me/919442627480?text=${encodedWA}`;

    const mailSubject = encodeURIComponent(`New Inquiry from ${formData.company || formData.name}`);
    const mailBody = encodeURIComponent(messageText.replace(/\*/g, ''));
    const mailtoUrl = `mailto:thw.international@gmail.com?subject=${mailSubject}&body=${mailBody}`;

    // Open WhatsApp Chat with pre-filled message
    window.open(waUrl, '_blank');

    // Trigger Mail client to thw.international@gmail.com
    window.location.href = mailtoUrl;

    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        country: 'Italy',
        leatherType: 'Goat Finished Leather',
        quantitySqFt: '25000',
        finishPreference: 'Aniline Silk Touch',
        message: ''
      });
    }, 4000);
  };

  return (
    <section id="contact" className="py-28 bg-[#0A0A0A] relative border-b border-[#C8A45A]/20">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-[#C8A45A]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#C8A45A]">
            <Globe className="w-4 h-4" />
            <span>INTERNATIONAL EXPORT DESK</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-serif text-white">
            START YOUR <span className="text-gold-shimmer font-italic">BULK INQUIRY</span>
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm tracking-widest uppercase font-light">
            Direct Line To Manufacturing Desk In Vaniyambadi, Tamil Nadu, India.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Side: Plant Location & Contact Details */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Manufacturing Plant Location Card */}
            <div className="glass-luxury p-8 rounded-3xl border border-[#C8A45A]/30 space-y-6 shadow-2xl">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <span className="text-xs uppercase tracking-[0.25em] text-[#C8A45A] font-semibold">
                  Tannery Plant & HQ
                </span>
                <span className="px-2.5 py-1 rounded-full bg-[#C8A45A]/10 text-[#C8A45A] text-[10px] font-mono">
                  EST. 2004
                </span>
              </div>

              <div className="space-y-4">
                <h3 className="font-serif text-2xl text-white">THW International</h3>
                <p className="text-xs text-slate-400 leading-relaxed uppercase tracking-wider font-mono">
                  Integrated Leather Manufacturing Division
                </p>

                <div className="space-y-3 text-xs text-slate-300">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-[#C8A45A] shrink-0 mt-0.5" />
                    <span>
                      123/ N, Valayampet, opp. Vanitec,<br />
                      Valayambattu, Tamil Nadu - 635751, India
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-[#C8A45A] shrink-0" />
                    <a href="mailto:thw.international@gmail.com" className="hover:text-[#C8A45A] transition-colors font-mono">
                      thw.international@gmail.com
                    </a>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-[#C8A45A] shrink-0" />
                    <a href="tel:+919442627480" className="hover:text-[#C8A45A] transition-colors font-mono">
                      +91 9442627480
                    </a>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Quick Chat CTA */}
              <div className="pt-4 border-t border-slate-800">
                <a
                  href="https://wa.me/919442627480?text=Hello%20THW%20International%2C%20I%20would%20like%20to%20inquire%20about%20leather%20exports."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 rounded-2xl bg-[#1B1B1B] border border-[#C8A45A]/40 text-[#C8A45A] hover:bg-[#C8A45A] hover:text-[#0E0E0E] text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  <MessageSquare className="w-4 h-4 text-[#C8A45A] group-hover:text-[#0E0E0E]" />
                  <span>Instant WhatsApp Export Desk</span>
                </a>
              </div>

            </div>

          </div>

          {/* Right Side: Interactive B2B Export Form */}
          <div className="lg:col-span-7">
            <div className="glass-luxury p-8 md:p-10 rounded-3xl border border-[#C8A45A]/40 shadow-2xl space-y-6">
              
              {submitted ? (
                <div className="py-16 text-center space-y-6">
                  <div className="w-20 h-20 bg-[#C8A45A]/20 text-[#C8A45A] rounded-full flex items-center justify-center mx-auto border border-[#C8A45A] animate-bounce">
                    <CheckCircle className="w-10 h-10" />
                  </div>
                  <h3 className="text-3xl font-serif text-white">Inquiry Sent</h3>
                  <p className="text-xs text-slate-300 tracking-widest uppercase max-w-md mx-auto">
                    Opening WhatsApp to <span className="text-[#C8A45A] font-semibold">+91 9442627480</span> & Email to <span className="text-[#C8A45A] font-semibold">thw.international@gmail.com</span>...
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                    <h3 className="font-serif text-2xl text-white">Commercial Export Inquiries</h3>
                    <span className="text-xs text-[#C8A45A] font-mono flex items-center gap-1">
                      <Calculator className="w-3.5 h-3.5" />
                      <span>Sq. Ft Estimator</span>
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[11px] uppercase tracking-widest text-slate-400 mb-1">Full Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Marco Rossini"
                        className="w-full bg-[#0E0E0E] border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#C8A45A] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase tracking-widest text-slate-400 mb-1">Company / Brand</label>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. Rossini Leather S.p.A."
                        className="w-full bg-[#0E0E0E] border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#C8A45A] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[11px] uppercase tracking-widest text-slate-400 mb-1">Corporate Email</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="m.rossini@brand.it"
                        className="w-full bg-[#0E0E0E] border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#C8A45A] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase tracking-widest text-slate-400 mb-1">Destination Country</label>
                      <input
                        type="text"
                        required
                        value={formData.country}
                        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                        placeholder="e.g. Italy, USA, Vietnam"
                        className="w-full bg-[#0E0E0E] border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#C8A45A] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[11px] uppercase tracking-widest text-slate-400 mb-1">Leather Category</label>
                      <select
                        value={formData.leatherType}
                        onChange={(e) => setFormData({ ...formData, leatherType: e.target.value })}
                        className="w-full bg-[#0E0E0E] border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#C8A45A] transition-colors"
                      >
                        <option value="Goat Finished Leather">Goat Finished Leather</option>
                        <option value="Sheep Finished Leather">Sheep Finished Leather</option>
                        <option value="Footwear Upper Leather">Footwear Upper Leather</option>
                        <option value="Garment & Apparel Leather">Garment & Apparel Leather</option>
                        <option value="Bag & Goods Leather">Bag & Goods Leather</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase tracking-widest text-slate-400 mb-1">Target Volume (Sq. Ft.)</label>
                      <select
                        value={formData.quantitySqFt}
                        onChange={(e) => setFormData({ ...formData, quantitySqFt: e.target.value })}
                        className="w-full bg-[#0E0E0E] border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#C8A45A] transition-colors font-mono"
                      >
                        <option value="5000">5,000 Sq. Ft. (Trial Order)</option>
                        <option value="25000">25,000 Sq. Ft. (Standard Batch)</option>
                        <option value="100000">100,000 Sq. Ft. (Container Shipment)</option>
                        <option value="500000">500,000+ Sq. Ft. (Annual Supply Contract)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-widest text-slate-400 mb-1">Specifications & Color Requirements</label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Specify thickness range, Pantone codes, finish preferences (Aniline, Pull-up, Suede), or port of delivery..."
                      className="w-full bg-[#0E0E0E] border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#C8A45A] transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-full bg-[#C8A45A] text-[#0E0E0E] font-bold text-xs uppercase tracking-[0.25em] hover:bg-[#FFF0C3] hover:shadow-[0_0_30px_rgba(200,164,90,0.4)] transition-all duration-300 flex items-center justify-center gap-2 group"
                  >
                    <span>Submit Export Inquiry</span>
                    <Send className="w-4 h-4 text-[#0E0E0E] group-hover:translate-x-1 transition-transform" />
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
