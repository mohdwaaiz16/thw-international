import React, { useState, useEffect } from 'react';
import { THWLogo } from './THWLogo';
import { Menu, X, Globe, ChevronRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrolled = window.scrollY > 40;
          setIsScrolled(prev => (prev !== scrolled ? scrolled : prev));
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/#home', isHash: true },
    { name: 'About', href: '/#about', isHash: true },
    { name: 'Products', href: '/#products', isHash: true },
    { name: 'Manufacturing', href: '/#manufacturing', isHash: true },
    { name: 'Sustainability', href: '/#sustainability', isHash: true },
    { name: 'Our Associates', href: '/an-nassr', isHash: false },
    { name: 'Contact', href: '/#contact', isHash: true },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0E0E0E]/95 border-b border-[#C8A45A]/20 py-2.5 shadow-2xl shadow-black/80'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex items-center justify-between">
        
        {/* Brand Logo */}
        <HashLink to="/#home" className="focus:outline-none shrink-0 mr-6 lg:mr-12">
          <THWLogo size="sm" />
        </HashLink>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
          {navLinks.map((link) => {
            const isActive = !link.isHash && location.pathname === link.href;
            const LinkComponent = link.isHash ? HashLink : Link;
            return (
              <LinkComponent
                key={link.name}
                to={link.href}
                className={`text-[11px] uppercase tracking-[0.2em] transition-colors duration-300 font-medium relative group whitespace-nowrap ${
                  isActive ? 'text-[#C8A45A]' : 'text-slate-300 hover:text-[#C8A45A]'
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 h-[1.5px] bg-[#C8A45A] transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`} />
              </LinkComponent>
            );
          })}
        </nav>

        {/* Sleek Compact CTA Button */}
        <div className="hidden lg:flex items-center ml-6 lg:ml-10 shrink-0">
          <HashLink
            to="/#contact"
            className="px-4 py-1.5 rounded-full border border-[#C8A45A] text-[10px] uppercase tracking-[0.15em] font-semibold text-[#C8A45A] hover:bg-[#C8A45A] hover:text-[#0E0E0E] transition-all duration-300 shadow-[0_0_12px_rgba(200,164,90,0.12)] flex items-center gap-1.5 group whitespace-nowrap"
          >
            <span>Request Quote</span>
            <ChevronRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
          </HashLink>
        </div>

        {/* Mobile Hamburger Trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-slate-200 hover:text-[#C8A45A] p-1.5 focus:outline-none ml-auto"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6 text-[#C8A45A]" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-full bg-[#0E0E0E]/98 border-b border-[#C8A45A]/30 p-6 shadow-2xl flex flex-col space-y-5 animate-fadeIn">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => {
              const isActive = !link.isHash && location.pathname === link.href;
              const LinkComponent = link.isHash ? HashLink : Link;
              return (
                <LinkComponent
                  key={link.name}
                  to={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-base font-serif tracking-widest transition-colors py-1.5 border-b border-slate-900 ${
                    isActive ? 'text-[#C8A45A]' : 'text-slate-200 hover:text-[#C8A45A]'
                  }`}
                >
                  {link.name}
                </LinkComponent>
              );
            })}
          </div>

          <div className="pt-2 flex flex-col space-y-3">
            <div className="flex items-center gap-2 text-[11px] uppercase tracking-widest text-[#C8A45A]">
              <Globe className="w-3.5 h-3.5" />
              <span>Vaniyambadi, TN, India • Exporting Worldwide</span>
            </div>
            <HashLink
              to="/#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 rounded-full bg-[#C8A45A] text-[#0E0E0E] font-semibold text-[11px] tracking-widest uppercase"
            >
              Request Export Quotation
            </HashLink>
          </div>
        </div>
      )}
    </header>
  );
};
