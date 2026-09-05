import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AnNassrPage } from './pages/AnNassrPage';

export const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <BrowserRouter>
      <div className="bg-[#0E0E0E] min-h-screen text-slate-100 selection:bg-[#C8A45A]/30 selection:text-[#C8A45A] relative">
        {/* Loading Screen Overlay */}
        {isLoading && (
          <LoadingScreen onComplete={() => setIsLoading(false)} />
        )}

        {/* Main Website Structure */}
        <div className={`transition-opacity duration-700 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
          <Navbar />
          
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/an-nassr" element={<AnNassrPage />} />
          </Routes>

          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
