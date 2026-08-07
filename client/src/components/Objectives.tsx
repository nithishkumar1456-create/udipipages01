import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Compass, Coins, Users, Eye } from 'lucide-react';

export const Objectives: React.FC = () => {
  const objectives = [
    {
      num: '01',
      title: 'EDUCATE & RAISE AWARENESS',
      subtitle: 'Spotlight Beach, River & Sea Pollution',
      desc: 'Drive impactful awareness on marine waste, river estuary contamination, and plastic pollution impacting Udupi’s coastal ecosystems.',
      icon: BookOpen,
      color: '#00A3FF',
    },
    {
      num: '02',
      title: 'PROMOTE RESPONSIBLE TOURISM',
      subtitle: 'Leave No Trace Principle',
      desc: 'Inspire visitors and local communities to adopt eco-conscious habits, plastic-free travel, and zero-waste beach culture.',
      icon: Compass,
      color: '#0066FF',
    },
    {
      num: '03',
      title: 'FUNDRAISING FOR CONSERVATION',
      subtitle: 'Direct Environmental Action',
      desc: 'Raise dedicated funds for regular beach cleanups, river waste filtration barriers, waste management systems, and habitat restoration.',
      icon: Coins,
      color: '#00A3FF',
    },
    {
      num: '04',
      title: 'FOSTER COMMUNITY ENGAGEMENT',
      subtitle: 'Unified Coastal Movement',
      desc: 'Unite government bodies, educational institutions, local fishermen, businesses, and passionate volunteers under one cause.',
      icon: Users,
      color: '#0066FF',
    },
    {
      num: '05',
      title: 'SHOWCASE UDUPI’S NATURAL BEAUTY',
      subtitle: 'The Route as a Moving Canvas',
      desc: 'Celebrate Udupi’s golden sand dunes, palm-fringed estuaries, and iconic Kaup Lighthouse as a world-class eco-marathon destination.',
      icon: Eye,
      color: '#00A3FF',
    },
  ];

  return (
    <section id="objectives" className="py-24 sm:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-semibold tracking-widest text-[#00A3FF] uppercase">
            FIVE CORE PILLARS
          </span>
          <h2 className="font-thunder text-4xl sm:text-6xl md:text-7xl font-extrabold text-[#0A0A0A] uppercase">
            THE FIVE <span className="text-gradient">OBJECTIVES</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-700 font-normal">
            Every kilometer of the Udupipages Beach Run is anchored by a concrete environmental mission.
          </p>
        </div>

        {/* 5 Cards Grid / Scroll-Reveal Stagger */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {objectives.map((obj, index) => {
            const Icon = obj.icon;
            return (
              <motion.div
                key={obj.num}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                className={`group relative bg-zinc-50 border border-gray-200 p-8 hover:border-[#00A3FF] shadow-sm hover:shadow-md transition-all duration-300 ${
                  index === 4 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                {/* Top Card Badge */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-thunder text-4xl text-gray-300 group-hover:text-[#00A3FF] transition-colors duration-300">
                    {obj.num}
                  </span>
                  <div className="w-12 h-12 bg-white border border-gray-200 flex items-center justify-center group-hover:scale-110 transition-transform shadow-xs">
                    <Icon className="w-6 h-6 text-[#00A3FF]" />
                  </div>
                </div>

                <h3 className="font-thunder text-2xl text-[#0A0A0A] group-hover:text-[#00A3FF] transition-colors mb-1">
                  {obj.title}
                </h3>
                <h4 className="text-xs font-bold text-[#00A3FF] uppercase tracking-wider mb-4">
                  {obj.subtitle}
                </h4>
                <p className="text-sm text-gray-700 font-normal leading-relaxed">
                  {obj.desc}
                </p>

                {/* Subtle Hover Gradient Bar */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-sunset-gradient opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
