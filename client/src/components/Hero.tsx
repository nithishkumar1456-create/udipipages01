import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronLeft, ChevronRight, Calendar, MapPin } from 'lucide-react';

const heroImages = [
  '/images/hero_section/beautiful-nature-tropical-beach.jpg',
  '/images/hero_section/camille-minouflet-d7M5Xramf8g-unsplash.jpg',
  '/images/hero_section/beautiful-tropical-beach-sea.jpg',
  '/images/hero_section/derek-thomson-TWoL-QCZubY-unsplash.jpg',
  '/images/hero_section/dharmendra-sahu-Ia2Kjtrx8y4-unsplash.jpg',
  '/images/hero_section/beach-with-sea-without-waves-clouds.jpg',
  '/images/hero_section/zany-jadraque-ZCRtfop2hZY-unsplash.jpg',
];

export const Hero: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);

    const handleMotionChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleMotionChange);

    return () => mediaQuery.removeEventListener('change', handleMotionChange);
  }, []);

  // Automatic slideshow transition timer (6-second cycle for relaxed pacing)
  useEffect(() => {
    if (reducedMotion) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [reducedMotion]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % heroImages.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  const [touchStart, setTouchStart] = useState<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;

    if (diff > 50) {
      handleNext();
    } else if (diff < -50) {
      handlePrev();
    }
    setTouchStart(null);
  };

  const titleWords = ['UDUPIPAGES', 'BEACH', 'RUN', '2026'];

  return (
    <section
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="relative w-full min-h-[100dvh] overflow-hidden bg-[#0A0A0A] flex items-center justify-center pt-24 pb-20 sm:pt-20 sm:pb-16"
      aria-label="Hero Section"
    >
      {/* Background Slideshow: Stacked Image Layers with Silky 1.8s Crossfade & Softer Opacity */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden bg-[#0A0A0A]">
        {heroImages.map((src, index) => {
          const isActive = index === currentIndex;
          return (
            <motion.img
              key={src}
              src={src}
              alt={`Udupi Beach Run Slide ${index + 1}`}
              loading={index === 0 ? 'eager' : 'lazy'}
              initial={false}
              animate={{
                opacity: isActive ? 0.70 : 0, // Softer background opacity (70% max)
                scale: isActive ? 1.05 : 1.0,  // Subtle slow Ken Burns zoom
              }}
              transition={{
                opacity: { duration: 1.8, ease: [0.4, 0.0, 0.2, 1] }, // Extra smooth crossfade
                scale: { duration: 6.0, ease: 'linear' },
              }}
              className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
            />
          );
        })}
      </div>

      {/* Aesthetic Vignette Overlay for High Typography Contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-white/30 to-white/45 z-10 pointer-events-none" />

      {/* Ocean Blue Radial Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[500px] bg-[radial-gradient(circle,rgba(0,163,255,0.18)_0%,rgba(255,255,255,0)_70%)] pointer-events-none z-10" />

      {/* Hero Main Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center w-full pointer-events-auto">
        
        {/* Official Logo Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center space-x-2.5 sm:space-x-3 px-3.5 sm:px-4 py-1.5 rounded-full bg-white/95 border border-[#00A3FF]/40 backdrop-blur-md mb-4 sm:mb-6 shadow-md max-w-full"
        >
          <img
            src="/images/logo.png"
            alt="Official Logo"
            className="w-5 h-5 sm:w-6 sm:h-6 object-contain flex-shrink-0"
          />
          <span className="text-[11px] sm:text-xs md:text-sm font-semibold tracking-wider text-[#0A0A0A] uppercase truncate">
            Official Coastal Marathon & Marine Conservation
          </span>
        </motion.div>

        {/* Display Headline */}
        <h1 className="font-thunder text-4xl sm:text-7xl md:text-8xl lg:text-[10rem] xl:text-[11rem] leading-[0.95] tracking-wide text-[#0A0A0A] uppercase text-center font-extrabold drop-shadow-sm max-w-full overflow-hidden">
          {titleWords.map((word, wordIdx) => (
            <span key={wordIdx} className="inline-block mx-2 sm:mx-4 md:mx-6">
              {word.split('').map((char, charIdx) => (
                <motion.span
                  key={charIdx}
                  initial={reducedMotion ? {} : { opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: reducedMotion ? 0 : 0.2 + (wordIdx * 4 + charIdx) * 0.03,
                    ease: [0.215, 0.61, 0.355, 1],
                  }}
                  className={`inline-block ${
                    word === 'BEACH' || word === '2026'
                      ? 'text-gradient'
                      : 'text-[#0A0A0A]'
                  }`}
                >
                  {char}
                </motion.span>
              ))}
            </span>
          ))}
        </h1>

        {/* Subline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-6 max-w-3xl text-base sm:text-xl text-gray-900 font-medium tracking-wide leading-relaxed"
        >
          Run for the coast. Protect our ocean. Experience Udupi's coastal edge from{' '}
          <span className="font-bold text-[#0A0A0A]">Padukere Ground</span> to{' '}
          <span className="font-bold text-[#00A3FF]">Kapu Light House</span>.
        </motion.p>

        {/* Info Meta Pills */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-gray-900 font-bold"
        >
          <div className="flex items-center space-x-1.5 px-3.5 py-1.5 rounded-none bg-white border border-gray-200 shadow-sm">
            <Calendar className="w-4 h-4 text-[#00A3FF]" />
            <span>6TH DECEMBER 2026 • 5:30 AM – 10:00 AM</span>
          </div>
          <div className="flex items-center space-x-1.5 px-3.5 py-1.5 rounded-none bg-white border border-gray-200 shadow-sm">
            <MapPin className="w-4 h-4 text-[#00A3FF]" />
            <span>PADUKERE TO KAPU LIGHT HOUSE, UDUPI</span>
          </div>
        </motion.div>

        {/* Registration CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="mt-10"
        >
          <a
            href="#register"
            className="group relative inline-flex items-center justify-center px-10 py-5 bg-sunset-gradient text-white font-thunder text-2xl uppercase tracking-wider font-extrabold overflow-hidden shadow-[0_4px_20px_rgba(0,163,255,0.35)] transition-transform hover:scale-105 active:scale-95"
          >
            <span className="relative z-10">SECURE YOUR BIB NOW</span>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
          </a>
        </motion.div>
      </div>

      {/* Manual Controls: Previous Button */}
      <button
        onClick={handlePrev}
        className="hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/80 hover:bg-white border border-gray-200 text-[#0A0A0A] hover:text-[#00A3FF] items-center justify-center transition-all shadow-md backdrop-blur-sm"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Manual Controls: Next Button */}
      <button
        onClick={handleNext}
        className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/80 hover:bg-white border border-gray-200 text-[#0A0A0A] hover:text-[#00A3FF] items-center justify-center transition-all shadow-md backdrop-blur-sm"
        aria-label="Next Slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slideshow Pagination Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center space-x-2 bg-white/80 backdrop-blur-md px-4 py-2 border border-gray-200 shadow-sm">
        {heroImages.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`transition-all duration-300 ${
              currentIndex === idx
                ? 'w-6 h-2 bg-[#00A3FF]'
                : 'w-2 h-2 bg-gray-400 hover:bg-gray-600'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Down Scroll Anchor */}
      <a
        href="#about"
        className="hidden lg:flex absolute bottom-6 right-8 z-20 text-[#0A0A0A]/70 hover:text-[#00A3FF] transition-colors flex-col items-center space-y-1"
        aria-label="Scroll to About section"
      >
        <span className="text-[10px] tracking-widest uppercase font-bold">DISCOVER MORE</span>
        <ChevronDown className="w-4 h-4 animate-bounce text-[#00A3FF]" />
      </a>
    </section>
  );
};
