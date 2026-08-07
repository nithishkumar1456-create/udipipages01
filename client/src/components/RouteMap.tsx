import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Navigation, Droplets, Flag, Sparkles, Image as ImageIcon } from 'lucide-react';

export const RouteMap: React.FC = () => {
  const [activeCheckpoint, setActiveCheckpoint] = useState<number>(0);

  const checkpoints = [
    {
      id: 0,
      title: 'PADUKERE GROUND (START)',
      km: '0.0 KM',
      desc: 'Flag-off starting point at Padukere Ground. Assembly & line-up along the scenic coastal stretch near the Udyavara estuary.',
      icon: Flag,
      color: '#00A3FF',
      image: '/images/checkpoints/PADUKERE GROUND.webp',
    },
    {
      id: 1,
      title: 'PADUKARE SCHOOL GROUND',
      km: '3.0 KM',
      desc: '3K Fun Run destination & turnaround point at Padukare School Ground with eco-hydration & medical aid station.',
      icon: Droplets,
      color: '#0066FF',
      image: '/images/checkpoints/PADUKARE SCHOOL GROUND.jpg',
    },
    {
      id: 2,
      title: 'BLUE WAVE WARRIORS',
      km: '5.0 KM',
      desc: '5K Coastal Challenge milestone & turnaround point at Blue Wave Warriors Padukare beach spot.',
      icon: Sparkles,
      color: '#00A3FF',
      image: '/images/checkpoints/Blue Wave Warriors Padukare.png',
    },
    {
      id: 3,
      title: 'MATTU BEACH',
      km: '10.0 KM',
      desc: '10K Endurance Run turnaround point along the pristine Mattu Beach coastline and sea-ridge.',
      icon: Navigation,
      color: '#0066FF',
      image: '/images/checkpoints/mattu-beach2.jpg',
    },
    {
      id: 4,
      title: 'KAPU LIGHT HOUSE (FINISH)',
      km: '15.0 KM',
      desc: 'Grand finish line at the historic 1901 Kapu Light House overlooking the roaring Arabian Sea.',
      icon: MapPin,
      color: '#00A3FF',
      image: '/images/checkpoints/KAPU LIGHT HOUSE.jpg',
    },
  ];

  const currentCp = checkpoints[activeCheckpoint];

  return (
    <section id="route" className="py-24 sm:py-32 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-semibold tracking-widest text-[#00A3FF] uppercase">
            COURSE TRAJECTORY & CHECKPOINTS
          </span>
          <h2 className="font-thunder text-4xl sm:text-6xl md:text-7xl font-extrabold text-[#0A0A0A] uppercase">
            THE COASTAL <span className="text-gradient font-thunder">ROUTE MAP</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-700 font-normal">
            Click on any checkpoint node below to view real photo previews of each milestone along the 15KM course.
          </p>
        </div>

        {/* Map Graphic Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch bg-zinc-50 border border-gray-200 p-6 sm:p-10 shadow-sm">
          
          {/* Interactive SVG Coastal Route Illustration with Dynamic Background Image */}
          <div className="lg:col-span-8 relative bg-[#0A0A0A] border border-gray-200 p-6 min-h-[380px] flex flex-col justify-between overflow-hidden shadow-sm rounded-none">
            
            {/* Dynamic Background Image of Active Checkpoint */}
            <AnimatePresence mode="popLayout">
              <motion.img
                key={currentCp.image}
                src={currentCp.image}
                alt={currentCp.title}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 0.35, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              />
            </AnimatePresence>

            {/* Dark Aesthetic Vignette Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/70 pointer-events-none" />
            <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#00A3FF_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

            {/* Top Bar */}
            <div className="relative z-10 flex justify-between items-center text-xs font-mono text-gray-200 border-b border-white/10 pb-3">
              <span className="flex items-center text-[#00A3FF] font-bold">
                <Navigation className="w-4 h-4 mr-1" /> UDUPI COASTAL CORRIDOR
              </span>
              <span className="font-bold text-gray-300">ARABIAN SEA WEST</span>
            </div>

            {/* SVG Path Route Illustration */}
            <div className="relative my-8 w-full z-10">
              <svg viewBox="0 0 800 200" className="w-full h-auto overflow-visible">
                <defs>
                  <linearGradient id="routeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#00A3FF" />
                    <stop offset="50%" stopColor="#0066FF" />
                    <stop offset="100%" stopColor="#00A3FF" />
                  </linearGradient>
                </defs>

                {/* Ocean Edge Wave SVG */}
                <path
                  d="M 20 160 Q 200 180 400 150 T 780 160"
                  fill="none"
                  stroke="#3F3F46"
                  strokeWidth="24"
                  strokeLinecap="round"
                />

                {/* Main Runner Trail Path */}
                <path
                  d="M 40 100 Q 220 40 400 100 T 760 80"
                  fill="none"
                  stroke="url(#routeGradient)"
                  strokeWidth="6"
                  strokeDasharray="8 4"
                />

                {/* Checkpoint Nodes */}
                {checkpoints.map((cp, idx) => {
                  const positions = [
                    { cx: 40, cy: 100 },
                    { cx: 210, cy: 65 },
                    { cx: 380, cy: 95 },
                    { cx: 570, cy: 75 },
                    { cx: 760, cy: 90 },
                  ];
                  const pos = positions[idx];
                  const isSelected = activeCheckpoint === idx;

                  return (
                    <g
                      key={cp.id}
                      onClick={() => setActiveCheckpoint(idx)}
                      className="cursor-pointer group/node"
                    >
                      {/* Animated Pulse Ring for Active Selection */}
                      {isSelected && (
                        <circle
                          cx={pos.cx}
                          cy={pos.cy}
                          r="22"
                          fill="none"
                          stroke="#00A3FF"
                          strokeWidth="2"
                          className="animate-ping opacity-75"
                        />
                      )}
                      <circle
                        cx={pos.cx}
                        cy={pos.cy}
                        r={isSelected ? "14" : "10"}
                        fill={isSelected ? "#00A3FF" : "#FFFFFF"}
                        stroke={cp.color}
                        strokeWidth="3"
                        className="transition-all duration-300 group-hover/node:scale-125"
                      />
                      <circle
                        cx={pos.cx}
                        cy={pos.cy}
                        r="4"
                        fill={isSelected ? "#FFFFFF" : "#0A0A0A"}
                      />
                      <text
                        x={pos.cx}
                        y={pos.cy + 32}
                        textAnchor="middle"
                        fill={isSelected ? "#00A3FF" : "#FFFFFF"}
                        fontSize="12"
                        fontWeight="bold"
                        fontFamily="sans-serif"
                      >
                        {cp.km}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>

            {/* Bottom Info Bar */}
            <div className="relative z-10 flex justify-between items-center text-xs text-gray-300 pt-3 border-t border-white/10">
              <span className="font-semibold">START: PADUKERE GROUND</span>
              <span className="text-[#00A3FF] font-bold">FINISH: KAPU LIGHT HOUSE</span>
            </div>
          </div>

          {/* Right Column: Active Checkpoint Card & Photo Preview */}
          <div className="lg:col-span-4 space-y-4 flex flex-col justify-between">
            <div>
              <h3 className="font-thunder text-2xl text-[#0A0A0A] uppercase tracking-wider mb-3">
                CHECKPOINT DETAILS
              </h3>

              <div className="bg-white border-l-4 border-[#00A3FF] border border-gray-200 overflow-hidden shadow-md">
                {/* Photo Card Preview */}
                <div className="relative h-44 w-full overflow-hidden bg-gray-900">
                  <AnimatePresence mode="popLayout">
                    <motion.img
                      key={currentCp.image}
                      src={currentCp.image}
                      alt={currentCp.title}
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      className="w-full h-full object-cover"
                    />
                  </AnimatePresence>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white">
                    <span className="text-xs font-mono font-bold text-[#00A3FF] uppercase tracking-wider bg-black/60 px-2 py-0.5 border border-[#00A3FF]/40">
                      {currentCp.km}
                    </span>
                    <span className="text-[10px] bg-white text-black font-bold uppercase px-2 py-0.5">
                      MILESTONE {activeCheckpoint + 1} OF 5
                    </span>
                  </div>
                </div>

                <div className="p-5 space-y-3">
                  <h4 className="font-thunder text-2xl text-[#0A0A0A] leading-tight">
                    {currentCp.title}
                  </h4>

                  <p className="text-sm text-gray-700 leading-relaxed font-normal">
                    {currentCp.desc}
                  </p>

                  <div className="pt-1 flex items-center space-x-2 text-xs text-[#00A3FF] font-semibold">
                    <ImageIcon className="w-4 h-4" />
                    <span>Real coastal checkpoint photo</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Milestone Selector Buttons */}
            <div className="grid grid-cols-5 gap-1 text-center pt-2">
              {checkpoints.map((cp, i) => (
                <button
                  key={cp.id}
                  onClick={() => setActiveCheckpoint(i)}
                  className={`py-2.5 px-1 border uppercase font-bold text-[10px] sm:text-xs transition-all rounded-none ${
                    activeCheckpoint === i
                      ? 'bg-[#00A3FF] text-white border-[#00A3FF] shadow-sm'
                      : 'bg-white text-gray-800 border-gray-200 hover:border-[#00A3FF]'
                  }`}
                >
                  {cp.km}
                </button>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
