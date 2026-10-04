import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { LeatherShowcase } from '../components/LeatherShowcase';
import { AboutSection } from '../components/AboutSection';
import { ProductsSection } from '../components/ProductsSection';
import { ManufacturingSection } from '../components/ManufacturingSection';
import { SustainabilitySection } from '../components/SustainabilitySection';
import { ContactSection } from '../components/ContactSection';
import { SEO } from '../components/SEO';

export const HomePage: React.FC = () => {
  return (
    <>
      <SEO 
        title="THW International | Goat & Sheep Finished Leather Manufacturer India"
        description="THW International is a leather manufacturing company based in Vaniyambadi, Tamil Nadu, specializing in premium goat and sheep finished leather for Indian and international markets."
        canonicalUrl="https://www.thw-intl.co.in/"
        schema={{
          '@type': 'WebSite',
          name: 'THW International',
          url: 'https://www.thw-intl.co.in/'
        }}
      />
      <main>
        <HeroSection />
        <LeatherShowcase />
        <AboutSection />
        <ProductsSection />
        <ManufacturingSection />
        <SustainabilitySection />
        <ContactSection />
      </main>
    </>
  );
};
