import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Droplets, Footprints, Flame } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="relative py-24 sm:py-32 bg-white border-t border-gray-200 overflow-hidden">
      {/* Background Accent Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#00A3FF]/5 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#0066FF]/10 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Big Headline & Editorial Concept */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center space-x-2 text-xs font-semibold tracking-widest text-[#00A3FF] uppercase">
              <Flame className="w-4 h-4 text-[#00A3FF]" />
              <span>THE PURPOSE & EVENT CONTEXT</span>
            </div>

            <h2 className="font-thunder text-4xl sm:text-6xl md:text-7xl font-extrabold text-[#0A0A0A] leading-tight">
              RUNNING FOR THE ENVIRONMENT WE <span className="text-gradient">STAGGER TO PROTECT.</span>
            </h2>

            <div className="space-y-4 text-lg text-gray-700 font-normal leading-relaxed">
              <p>
                <strong className="text-[#0A0A0A] font-bold">Udupipages Beach Run 2026</strong> is more than a distance race — it is a coastal movement born from the sand, sea, and salt of Udupi. On <strong className="text-[#00A3FF]">6th December 2026</strong>, over 1,500 runners will align along the shoreline from Padukere Ground to Kapu Light House.
              </p>
              <p className="border-l-4 border-[#00A3FF] pl-4 italic text-gray-800 font-medium">
                "Our purpose is simple yet urgent: use the marathon's raw athletic energy to spotlight environmental issues facing Udupi's coastline and rivers — plastic pollution, unmanaged waste disposal, and habitat degradation — connecting participants directly to the environment they are running to protect."
              </p>
              <p>
                Every stride on the tide-rippled sand reinforces our commitment to leave no trace, fund direct marine filtration, and engage local communities in sustained coastal guardianship.
              </p>
            </div>

            <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-6">
              <div className="border border-gray-200 bg-zinc-50 p-4 shadow-sm">
                <Footprints className="w-6 h-6 text-[#00A3FF] mb-2" />
                <span className="block font-thunder text-xl text-[#0A0A0A]">15K ROUTE</span>
                <span className="text-xs text-gray-600">Coastal dune trail</span>
              </div>
              <div className="border border-gray-200 bg-zinc-50 p-4 shadow-sm">
                <Droplets className="w-6 h-6 text-[#00A3FF] mb-2" />
                <span className="block font-thunder text-xl text-[#0A0A0A]">ZERO PLASTIC</span>
                <span className="text-xs text-gray-600">Eco-hydrated stations</span>
              </div>
              <div className="border border-gray-200 bg-zinc-50 p-4 shadow-sm col-span-2 sm:col-span-1">
                <ShieldCheck className="w-6 h-6 text-[#00A3FF] mb-2" />
                <span className="block font-thunder text-xl text-[#0A0A0A]">100% IMPACT</span>
                <span className="text-xs text-gray-600">Direct cleanup funds</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Editorial Visual Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="relative p-1 bg-gradient-to-b from-[#00A3FF]/40 via-gray-300 to-white shadow-xl">
              <div className="bg-white p-8 sm:p-10 space-y-6">
                <div className="text-xs font-mono text-[#00A3FF] tracking-widest uppercase font-bold">
                  EVENT HIGHLIGHTS // DEC 2026
                </div>
                <h3 className="font-thunder text-3xl sm:text-4xl text-[#0A0A0A] leading-tight">
                  PADUKERE GROUND <span className="text-gradient">➔</span> KAPU LIGHT HOUSE
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Experience Udupi’s pristine stretch where fresh river estuaries merge with the roaring Arabian Sea. A breathtaking course designed to inspire awe and spark action.
                </p>

                <div className="space-y-3 pt-4 border-t border-gray-200">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-600">Expected Runners:</span>
                    <span className="font-bold text-[#0A0A0A]">1,500+ Participants</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-600">Spectators & Supporters:</span>
                    <span className="font-bold text-[#00A3FF]">2,000+ Attendees</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-600">Event Timing:</span>
                    <span className="font-bold text-[#0A0A0A]">5:30 AM – 10:00 AM</span>
                  </div>
                </div>

                <a
                  href="#objectives"
                  className="inline-block w-full text-center py-3 bg-[#0A0A0A] hover:bg-[#00A3FF] text-white hover:text-white font-thunder text-sm uppercase tracking-wider transition-colors shadow-md"
                >
                  Explore Event Objectives
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
