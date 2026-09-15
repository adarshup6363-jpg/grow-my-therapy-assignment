import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Calendar, MapPin, Compass } from 'lucide-react';
import { DOCTOR_INFO } from '../data/therapyData';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About Dr. Reynolds', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'CBT & EMDR', href: '#methodology' },
    { name: 'Our Office', href: '#office' },
    { name: 'Grounding Tool', href: '#grounding' },
    { name: 'FAQs', href: '#faqs' },
    { name: 'Location & Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top calm notification bar */}
      <div id="top-announcement-bar" className="bg-[#2E4038] text-[#E7EFEA] text-xs py-2 px-4 border-b border-[#3B5248]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <div className="flex items-center gap-2 justify-center">
            <span className="inline-block w-2 h-2 rounded-full bg-[#8EA99A] animate-pulse"></span>
            <span className="tracking-wide">Licensed Clinical Psychologist • In-Person Santa Monica & California Telehealth</span>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <a 
              href="tel:3105550194" 
              className="inline-flex items-center gap-1.5 text-[#D1E0D7] hover:text-white transition-colors"
              aria-label="Call Dr. Maya Reynolds"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{DOCTOR_INFO.phone}</span>
            </a>
            <span className="hidden md:inline-block text-[#5B7368]">|</span>
            <span className="hidden md:inline-flex items-center gap-1 text-[#C4D5CB]">
              <MapPin className="w-3 h-3 text-[#8EA99A]" />
              Santa Monica, CA
            </span>
          </div>
        </div>
      </div>

      {/* Main sticky navigation */}
      <header
        id="main-navigation"
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF8F5]/95 backdrop-blur-md shadow-sm border-b border-[#E6DFD5]'
            : 'bg-[#FAF8F5] border-b border-[#EFE9DF]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Brand Logo & Name */}
            <a
              href="#"
              id="brand-logo-link"
              className="flex items-center gap-3 group focus:outline-none"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <div className="w-10 h-10 rounded-full bg-[#EBF1ED] border border-[#BACCC1] flex items-center justify-center text-[#3B5448] shadow-sm group-hover:bg-[#E0EBE4] transition-colors">
                <Compass className="w-5 h-5 text-[#4D695C]" />
              </div>
              <div>
                <span className="block font-serif text-xl sm:text-2xl font-semibold tracking-tight text-[#222E28]">
                  Dr. Maya Reynolds
                </span>
                <span className="block text-[11px] uppercase tracking-widest text-[#6B7C73] font-medium">
                  PsyD • Clinical Psychologist
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-7">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className="text-sm font-medium text-[#46534E] hover:text-[#284135] transition-colors cursor-pointer py-1"
                >
                  {link.name}
                </button>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden sm:flex items-center gap-3">
              <button
                id="header-consultation-btn"
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#3B5347] hover:bg-[#2C3F36] text-white text-sm font-medium transition-all shadow-sm hover:shadow-md cursor-pointer active:scale-95"
              >
                <Calendar className="w-4 h-4 text-[#BACCC1]" />
                <span>Book Free Consultation</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                id="header-consultation-btn-mobile"
                onClick={onOpenBooking}
                className="inline-flex sm:hidden items-center justify-center p-2 rounded-full bg-[#3B5347] text-white text-xs"
                title="Book Consultation"
              >
                <Calendar className="w-4 h-4" />
              </button>
              <button
                id="mobile-menu-toggle-btn"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-lg text-[#3B5347] hover:bg-[#EFE9DF] transition-colors focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div id="mobile-navigation-drawer" className="lg:hidden bg-[#FAF8F5] border-b border-[#E6DFD5] px-4 pt-3 pb-6 shadow-lg animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left text-base font-medium text-[#384641] hover:text-[#253930] hover:bg-[#EFE9DF] px-3 py-2 rounded-lg transition-colors"
                >
                  {link.name}
                </button>
              ))}
              <div className="pt-3 border-t border-[#E6DFD5] flex flex-col gap-2">
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#3B5347] text-white font-medium shadow-sm"
                >
                  <Calendar className="w-4 h-4 text-[#BACCC1]" />
                  <span>Book Free 15-Min Consultation</span>
                </button>
                <a
                  href="tel:3105550194"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl border border-[#BACCC1] text-[#3B5347] font-medium hover:bg-[#EFE9DF] text-sm"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call (310) 555-0194</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
