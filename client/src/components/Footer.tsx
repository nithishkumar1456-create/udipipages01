import React from 'react';
import { Waves, Mail, Phone, MapPin, ExternalLink, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-100 border-t border-gray-200 text-[#0A0A0A] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-gray-200">
          
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center space-x-3">
              <img
                src="/images/logo.png"
                alt="Udupipages Beach Run Official Logo"
                className="h-14 w-auto object-contain"
              />
              <div>
                <span className="font-thunder text-3xl text-[#0A0A0A] tracking-wider block leading-none">
                  UDUPIPAGES
                </span>
                <span className="text-[10px] text-[#00A3FF] tracking-widest uppercase font-bold block">
                  BEACH RUN 2026
                </span>
              </div>
            </div>

            <p className="text-sm text-gray-700 font-normal leading-relaxed max-w-md">
              An initiative by Udupipages connecting runners, environmental advocates, and local coastal communities to protect Udupi’s pristine shorelines and river estuaries.
            </p>

            <div className="pt-2">
              <a
                href="https://www.udupipages.in"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-xs font-mono text-[#00A3FF] hover:text-[#0A0A0A] transition-colors border border-[#00A3FF]/40 bg-white px-3 py-1.5 uppercase tracking-wider font-bold shadow-xs"
              >
                <span>VISIT WWW.UDUPIPAGES.IN</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-thunder text-xl text-[#0A0A0A] tracking-wider">
              QUICK NAVIGATION
            </h4>
            <ul className="space-y-2 text-sm text-gray-700 font-medium">
              <li><a href="#about" className="hover:text-[#00A3FF] transition-colors">Event Purpose</a></li>
              <li><a href="#objectives" className="hover:text-[#00A3FF] transition-colors">5 Conservation Objectives</a></li>
              <li><a href="#details" className="hover:text-[#00A3FF] transition-colors">Race Day Specifications</a></li>
              <li><a href="#route" className="hover:text-[#00A3FF] transition-colors">Padukere-Kapu Route Map</a></li>
              <li><a href="#register" className="hover:text-[#00A3FF] transition-colors">Category Registration</a></li>
              <li><a href="#faq" className="hover:text-[#00A3FF] transition-colors">BIB & Hydration FAQs</a></li>
            </ul>
          </div>

          {/* Column 3: Contact & Support */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-thunder text-xl text-[#0A0A0A] tracking-wider">
              CONTACT & HELPLINE
            </h4>
            <div className="space-y-3 text-sm text-gray-800 font-medium">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#00A3FF] flex-shrink-0 mt-0.5" />
                <span>Udupipages Media Secretariat, Car Street, Udupi, Karnataka – 576101</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#00A3FF] flex-shrink-0" />
                <span>beachrun@udupipages.in</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#00A3FF] flex-shrink-0" />
                <span>+91 98800 12345 / +91 820 2520000</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-600 space-y-4 sm:space-y-0 font-medium">
          <p>© 2026 Udupipages Media. All rights reserved. Udupipages Beach Run 2026.</p>
          <div className="flex items-center space-x-1">
            <span>Built with passion for Udupi’s coast</span>
            <Heart className="w-3.5 h-3.5 text-[#00A3FF] fill-current" />
          </div>
        </div>

      </div>
    </footer>
  );
};
