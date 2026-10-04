import React from 'react';
import { SEO } from '../components/SEO';
import { Award, Briefcase, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

export const FounderPage: React.FC = () => {
  const founderSchema = [
    {
      '@type': 'Person',
      '@id': 'https://www.thw-intl.co.in/pm-abdul-wajid#person',
      name: 'PM Abdul Wajid',
      jobTitle: [
        'Founder & Managing Director, THW International',
        'Managing Director, AN NASSR Entrepreneur'
      ],
      worksFor: [
        {
          '@type': 'Organization',
          '@id': 'https://www.thw-intl.co.in/#organization'
        },
        {
          '@type': 'Organization',
          '@id': 'https://www.thw-intl.co.in/an-nassr#organization'
        }
      ],
      alumniOf: [],
      url: 'https://www.thw-intl.co.in/pm-abdul-wajid',
      image: 'https://www.thw-intl.co.in/assets/images/pm-abdul-wajid.jpg',
      sameAs: [
        'https://www.facebook.com/abdul.wajid.98988',
        'https://www.instagram.com/abdul_wajid_pm/',
        'https://www.linkedin.com/in/pm-abdul-wajid-1a1223b3/'
      ],
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Vaniyambadi',
        addressRegion: 'Tamil Nadu',
        addressCountry: 'India'
      }
    },
    {
      '@type': 'Organization',
      '@id': 'https://www.thw-intl.co.in/#organization',
      name: 'THW International',
      founder: {
        '@id': 'https://www.thw-intl.co.in/pm-abdul-wajid#person'
      },
      foundingDate: '2004',
      url: 'https://www.thw-intl.co.in/',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Vaniyambadi',
        addressRegion: 'Tamil Nadu',
        addressCountry: 'India'
      }
    },
    {
      '@type': 'Organization',
      '@id': 'https://www.thw-intl.co.in/an-nassr#organization',
      name: 'AN NASSR Entrepreneur',
      founder: {
        '@id': 'https://www.thw-intl.co.in/pm-abdul-wajid#person'
      },
      url: 'https://www.thw-intl.co.in/an-nassr',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Vaniyambadi',
        addressRegion: 'Tamil Nadu',
        addressCountry: 'India'
      }
    }
  ];

  return (
    <main className="bg-[#0E0E0E] min-h-screen pt-32 pb-24 relative overflow-hidden font-sans">
      <SEO 
        title="PM Abdul Wajid | Founder of THW International & MD of AN NASSR"
        description="PM Abdul Wajid is the Founder and Managing Director of THW International and Managing Director of AN NASSR Entrepreneur, operating in India's leather manufacturing industry."
        canonicalUrl="https://www.thw-intl.co.in/pm-abdul-wajid"
        image="https://www.thw-intl.co.in/assets/images/pm-abdul-wajid.jpg"
        schema={founderSchema}
        type="profile"
      />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif text-white tracking-wider mb-4">
            PM Abdul Wajid
          </h1>
          <div className="w-16 h-[1px] bg-[#C8A45A] mb-6"></div>
          <p className="text-xl text-slate-300 font-light max-w-2xl">
            Founder & Managing Director of <Link to="/" className="text-[#C8A45A] hover:underline">THW International</Link> & Managing Director of <Link to="/an-nassr" className="text-[#C8A45A] hover:underline">AN NASSR Entrepreneur</Link>
          </p>
        </div>

        {/* Content Section */}
        <div className="glass-luxury rounded-3xl p-8 md:p-12 border border-[#C8A45A]/20 shadow-2xl relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-[#C8A45A] to-transparent"></div>
          
          <div className="flex flex-col md:flex-row gap-12 items-center md:items-start">
            {/* Image Column */}
            <div className="w-full md:w-1/3 flex-shrink-0 flex flex-col gap-6 relative group">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden border border-[#C8A45A]/30 shadow-[0_10px_30px_rgba(200,164,90,0.15)] relative">
                <img 
                  src="/assets/images/pm-abdul-wajid.jpg" 
                  alt="PM Abdul Wajid, Founder and Managing Director of THW International and Managing Director of AN NASSR Entrepreneur" 
                  className="w-full h-full object-cover filter brightness-105 contrast-105 transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E0E]/80 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Social Links under Image */}
              <div className="flex justify-center gap-6">
                <a href="https://www.facebook.com/abdul.wajid.98988" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#C8A45A] transition-colors" aria-label="Facebook">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="https://www.instagram.com/abdul_wajid_pm/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#C8A45A] transition-colors" aria-label="Instagram">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="https://www.linkedin.com/in/pm-abdul-wajid-1a1223b3/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#C8A45A] transition-colors" aria-label="LinkedIn">
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Text Column */}
            <div className="w-full md:w-2/3 prose prose-invert prose-lg max-w-none text-slate-300 font-light leading-relaxed">
              <p>
                PM Abdul Wajid is a prominent entrepreneur in the Indian leather industry. Based in Vaniyambadi, Tamil Nadu—a renowned leather manufacturing hub—he has established a legacy of excellence and craftsmanship.
              </p>
              <p>
                He is the Founder and Managing Director of <strong>THW International</strong>, a company established in 2004 that specializes in manufacturing premium goat and sheep finished leather. Under his leadership, THW International has grown into a trusted supplier of genuine finished leather for the global market.
              </p>
              <p>
                Additionally, PM Abdul Wajid serves as the Managing Director of <strong>AN NASSR Entrepreneur</strong>, an associate concern dedicated to furthering the standards of leather processing and manufacturing in the region.
              </p>
            </div>
          </div>

          {/* Quick Facts */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-white/10 pt-8">
            <div className="flex flex-col items-center text-center">
              <Briefcase className="w-8 h-8 text-[#C8A45A] mb-3" />
              <h3 className="text-sm uppercase tracking-widest text-slate-400 mb-1">Industry</h3>
              <p className="text-white font-medium">Leather Manufacturing</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <MapPin className="w-8 h-8 text-[#C8A45A] mb-3" />
              <h3 className="text-sm uppercase tracking-widest text-slate-400 mb-1">Location</h3>
              <p className="text-white font-medium">Vaniyambadi, Tamil Nadu</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Award className="w-8 h-8 text-[#C8A45A] mb-3" />
              <h3 className="text-sm uppercase tracking-widest text-slate-400 mb-1">Established</h3>
              <p className="text-white font-medium">THW Int. Since 2004</p>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
};
