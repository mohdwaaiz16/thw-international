import React, { useState } from 'react';
import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { LeatherShowcase } from './components/LeatherShowcase';
import { AboutSection } from './components/AboutSection';
import { ProductsSection } from './components/ProductsSection';
import { ManufacturingSection } from './components/ManufacturingSection';
import { SustainabilitySection } from './components/SustainabilitySection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="bg-[#0E0E0E] min-h-screen text-slate-100 selection:bg-[#C8A45A]/30 selection:text-[#C8A45A] relative">
      {/* Loading Screen Overlay */}
      {isLoading && (
        <LoadingScreen onComplete={() => setIsLoading(false)} />
      )}


      {/* Main Website Structure */}
      <div className={`transition-opacity duration-700 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <Navbar />
        
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
      </div>
    </div>
  );
};

export default App;
