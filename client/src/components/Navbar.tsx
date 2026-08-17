import React, { useState, useEffect } from 'react';
import { Waves, Calendar, MapPin, Menu, X } from 'lucide-react';

interface NavbarProps {
  currentView?: 'home' | 'blog' | 'gallery' | 'route-map';
  onNavigate?: (view: 'home' | 'blog' | 'gallery' | 'route-map', targetSection?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentView = 'home', onNavigate }) => {
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
    { name: 'About', href: '#about', sectionId: 'about' },
    { name: 'Objectives', href: '#objectives', sectionId: 'objectives' },
    { name: 'Details', href: '#details', sectionId: 'details' },
    { name: 'Route Map', href: '#route', view: 'route-map' as const },
    { name: 'Register', href: '#register', sectionId: 'register' },
    { name: 'Gallery', href: '#gallery', view: 'gallery' as const },
    { name: 'News & Blog', href: '#news', view: 'blog' as const },
    { name: 'FAQ', href: '#faq', sectionId: 'faq' },
  ];

  const handleLinkClick = (e: React.MouseEvent, item: typeof navLinks[0]) => {
    if (onNavigate) {
      if (item.view) {
        e.preventDefault();
        onNavigate(item.view);
      } else if (currentView !== 'home') {
        e.preventDefault();
        onNavigate('home', item.sectionId);
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 py-3 shadow-md'
          : 'bg-white/90 backdrop-blur-md border-b border-slate-100 py-3.5 shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#home"
          onClick={(e) => {
            if (onNavigate) {
              e.preventDefault();
              onNavigate('home');
            }
          }}
          className="flex items-center group flex-shrink-0"
        >
          <img
            src="/images/header-logo.png"
            alt="Udupipages Beach Run 2026"
            className="h-10 sm:h-11 md:h-12 w-auto object-contain transition-transform group-hover:scale-105"
          />
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center space-x-3 lg:space-x-5 xl:space-x-6 flex-shrink">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link)}
              className={`text-xs lg:text-sm font-bold transition-colors uppercase tracking-wider whitespace-nowrap ${
                (currentView === 'blog' && link.view === 'blog') ||
                (currentView === 'gallery' && link.view === 'gallery') ||
                (currentView === 'route-map' && link.view === 'route-map')
                  ? 'text-[#00A3FF]'
                  : 'text-[#0A0A0A]/90 hover:text-[#00A3FF]'
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Button & Event Tag */}
        <div className="hidden sm:flex items-center space-x-3 lg:space-x-4 flex-shrink-0">
          <div className="hidden xl:flex items-center text-xs text-slate-700 space-x-3 border-r border-slate-200 pr-4 whitespace-nowrap">
            <span className="flex items-center font-medium"><Calendar className="w-3.5 h-3.5 text-[#00A3FF] mr-1" /> DEC 6 • 5:30 AM</span>
            <span className="flex items-center font-medium"><MapPin className="w-3.5 h-3.5 text-[#00A3FF] mr-1" /> UDUPI</span>
          </div>
          <a
            href="#register"
            onClick={(e) => {
              if (currentView !== 'home' && onNavigate) {
                e.preventDefault();
                onNavigate('home', 'register');
              }
            }}
            className="px-5 py-2.5 rounded-none font-sans text-xs lg:text-sm tracking-wider bg-sunset-gradient text-white font-extrabold uppercase transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(0,163,255,0.4)] whitespace-nowrap flex-shrink-0"
          >
            REGISTER NOW
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
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-4 pb-6 space-y-3 shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                setMobileMenuOpen(false);
                handleLinkClick(e, link);
              }}
              className="block text-sm font-semibold text-[#0A0A0A] hover:text-[#00A3FF] uppercase"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#register"
            onClick={(e) => {
              setMobileMenuOpen(false);
              if (currentView !== 'home' && onNavigate) {
                e.preventDefault();
                onNavigate('home', 'register');
              }
            }}
            className="block text-center w-full py-3 bg-sunset-gradient text-white font-sans text-sm tracking-wider font-extrabold uppercase"
          >
            REGISTER NOW
          </a>
        </div>
      )}
    </header>
  );
};
