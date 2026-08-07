import React, { useState, useEffect } from 'react';
import { Waves, Calendar, MapPin, Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Objectives', href: '#objectives' },
    { name: 'Details', href: '#details' },
    { name: 'Route', href: '#route' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-gray-200 py-3 shadow-sm'
          : 'bg-white/90 backdrop-blur-md border-b border-gray-100 py-4 shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center space-x-3 group">
          <img
            src="/images/logo.png"
            alt="Udupipages Beach Run Official Logo"
            className="h-11 w-auto object-contain transition-transform group-hover:scale-105"
          />
          <div>
            <span className="font-thunder text-xl sm:text-2xl text-[#0A0A0A] tracking-wider block leading-none">
              UDUPIPAGES
            </span>
            <span className="text-[10px] text-[#00A3FF] tracking-widest uppercase font-bold block">
              BEACH RUN 2026
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-semibold text-[#0A0A0A]/80 hover:text-[#00A3FF] transition-colors uppercase tracking-wider"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Button & Event Tag */}
        <div className="hidden sm:flex items-center space-x-4">
          <div className="hidden lg:flex items-center text-xs text-[#0A0A0A]/70 space-x-3 border-r border-gray-200 pr-4">
            <span className="flex items-center font-medium"><Calendar className="w-3.5 h-3.5 text-[#00A3FF] mr-1" /> DEC 6 • 5:30 AM – 10:00 AM</span>
            <span className="flex items-center font-medium"><MapPin className="w-3.5 h-3.5 text-[#00A3FF] mr-1" /> UDUPI</span>
          </div>
          <a
            href="#register"
            className="px-5 py-2.5 rounded-none font-thunder text-sm tracking-wider bg-sunset-gradient text-white font-bold uppercase transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(0,163,255,0.4)]"
          >
            Register Now
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#0A0A0A] hover:text-[#00A3FF]"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 px-4 pt-4 pb-6 space-y-4 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-semibold text-[#0A0A0A] hover:text-[#00A3FF] uppercase"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#register"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-center w-full py-3 bg-sunset-gradient text-white font-thunder text-lg uppercase font-bold"
          >
            Register Now
          </a>
        </div>
      )}
    </header>
  );
};
