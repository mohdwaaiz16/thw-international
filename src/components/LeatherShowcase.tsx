import React from 'react';

export const LeatherShowcase: React.FC = () => {
  const images = [
    '/assets/images/bag-suede-totes.jpg',
    '/assets/images/bag-croc-black.jpg',
    '/assets/images/bag-mahogany-holdall.jpg',
    '/assets/images/bag-minimal-black.jpg',
    '/assets/images/bag-pebbled-briefcase.jpg',
    '/assets/images/garment-vintage-jacket.jpg',
    '/assets/images/garment-suede-trucker.jpg',
    '/assets/images/garment-navy-field.jpg',
    '/assets/images/garment-slate-bomber.jpg',
    '/assets/images/footwear-black-oxford.jpg',
    '/assets/images/footwear-brown-boots.jpg',
    '/assets/images/footwear-mahogany-brogues.jpg',
    '/assets/images/footwear-suede-loafers.jpg',
    '/assets/images/footwear-chelsea-boots.jpg',
    '/assets/images/footwear-sandals-chocolate.jpg',
    '/assets/images/footwear-sandals-cognac.jpg',
    '/assets/images/sheep-leather-burgundy.jpg',
    '/assets/images/sheep-leather-gold-foil.jpg',
    '/assets/images/goat-leather-cognac.jpg',
    '/assets/images/goat-leather-trio-rolls.jpg',
    '/assets/images/leather-suede-green.jpg',
    '/assets/images/leather-rainbow-rolls.jpg'
  ];

  // Duplicate for seamless 60 FPS infinite marquee loop
  const doubleImages = [...images, ...images];

  return (
    <section className="py-16 bg-[#0A0A0A] border-y border-[#C8A45A]/20 overflow-hidden relative">
      {/* Background Ambient Radial Glow */}
      <div className="absolute inset-0 bg-radial-gradient from-[#C8A45A]/5 via-transparent to-transparent pointer-events-none" />

      {/* Marquee Row 1 - Forward Moving Pure Images */}
      <div className="relative w-full overflow-hidden mb-6">
        <div className="animate-marquee-slow hover:[animation-play-state:paused] flex gap-6 px-4">
          {doubleImages.map((imgSrc, idx) => (
            <div
              key={`m1-${idx}`}
              className="w-72 sm:w-80 md:w-96 h-52 sm:h-60 md:h-64 shrink-0 rounded-3xl overflow-hidden glass-luxury group cursor-pointer border border-[#C8A45A]/25 relative transform-gpu"
            >
              <img
                src={imgSrc}
                alt="THW Finished Leather Texture"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover filter brightness-95 contrast-110 transform group-hover:scale-105 transition-transform duration-500 will-change-transform"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E0E]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>

      {/* Marquee Row 2 - Reverse Moving Pure Images */}
      <div className="relative w-full overflow-hidden">
        <div className="animate-marquee-reverse hover:[animation-play-state:paused] flex gap-6 px-4">
          {[...doubleImages].reverse().map((imgSrc, idx) => (
            <div
              key={`m2-${idx}`}
              className="w-72 sm:w-80 md:w-96 h-52 sm:h-60 md:h-64 shrink-0 rounded-3xl overflow-hidden glass-luxury group cursor-pointer border border-[#C8A45A]/25 relative transform-gpu"
            >
              <img
                src={imgSrc}
                alt="THW Finished Leather Texture"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover filter brightness-95 contrast-110 transform group-hover:scale-105 transition-transform duration-500 will-change-transform"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E0E]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
