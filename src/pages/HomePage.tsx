import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { LeatherShowcase } from '../components/LeatherShowcase';
import { AboutSection } from '../components/AboutSection';
import { ProductsSection } from '../components/ProductsSection';
import { ManufacturingSection } from '../components/ManufacturingSection';
import { SustainabilitySection } from '../components/SustainabilitySection';
import { ContactSection } from '../components/ContactSection';
import { Footer } from '../components/Footer';

export const HomePage: React.FC = () => {
  return (
    <>
      <main>
        <HeroSection />
        <LeatherShowcase />
        <AboutSection />
        <ProductsSection />
        <ManufacturingSection />
        <SustainabilitySection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
};
