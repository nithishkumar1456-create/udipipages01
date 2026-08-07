import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'WHEN & WHERE IS BIB COLLECTION HELD?',
      a: 'BIB collection will take place on Saturday, 5th December 2026 (9:00 AM – 6:00 PM) at Padukere Ground Expo Center. Please bring your Registration ID (sent via email/SMS) and a valid government ID.'
    },
    {
      q: 'IS THERE A TIMING CHIP FOR COMPETITIVE CATEGORIES?',
      a: 'Yes, official timing chips are embedded in the BIB numbers for 5K, 10K, and 15K categories. Finisher certificates with verified chip timing will be available online within 24 hours.'
    },
    {
      q: 'HOW ARE WATER AND HYDRATION STATIONS MANAGED ECO-FRIENDLY?',
      a: 'Single-use plastic bottles are strictly prohibited. Eco-hydration stations every 2.5 KM will provide purified water and electrolyte drinks using compostable paper cups and refilling troughs.'
    },
    {
      q: 'WHAT FACILITIES ARE AVAILABLE AT THE KAPU LIGHT HOUSE FINISH LINE?',
      a: 'The finish line at Kapu Light House features baggage retrieval, medical recovery tents, fresh tender coconut stations, finisher medal distribution, and shuttle buses back to Padukere Ground.'
    },
    {
      q: 'CAN CHILDREN OR SENIOR CITIZENS PARTICIPATE?',
      a: 'Yes! The 3K Fun Run category is specifically organized for kids under 14 and senior citizens (60+). Registration for this category is completely free.'
    },
    {
      q: 'WHERE DO RACE PROCEEDS GO?',
      a: 'All net registration funds are dedicated directly toward Udupi coastal river filtration barriers, quarterly beach cleanups, and community marine conservation awareness campaigns.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 sm:py-32 bg-white border-t border-gray-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <span className="text-xs font-semibold tracking-widest text-[#00A3FF] uppercase">
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="font-thunder text-4xl sm:text-6xl font-extrabold text-[#0A0A0A] uppercase">
            RUNNER <span className="text-gradient">INFORMATION</span>
          </h2>
          <p className="text-base text-gray-700 font-normal">
            Everything you need to know about race day logistics, hydration, and BIB distribution.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="bg-zinc-50 border border-gray-200 shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex items-center justify-between space-x-4 hover:bg-zinc-100 transition-colors"
                >
                  <span className="font-thunder text-xl sm:text-2xl text-[#0A0A0A] tracking-wide">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#00A3FF] transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 text-sm text-gray-700 font-normal border-t border-gray-200 pt-4 leading-relaxed bg-white">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
