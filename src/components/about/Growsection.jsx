import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

import worldMap from '../../assets/world-map.png';
import peopleRow from '../../assets/community.png';

const ROBOTO = { fontFamily: "'Roboto', sans-serif" };

export default function GrowSection() {
  return (
    <section className="relative w-full bg-[#f6f1e8] overflow-hidden" style={ROBOTO}>

      {/* world map background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url(${worldMap})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          filter: 'brightness(0.9)',
        }}
      />

      {/* CONTENT */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-10 text-center pt-16 sm:pt-24 pb-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="w-8 h-[2px] bg-[#0877BA]" />
            <span className="text-[#0877BA] text-[11px] sm:text-[12px] font-bold tracking-[0.25em] uppercase">
              Grow with Us
            </span>
            <span className="w-8 h-[2px] bg-[#0877BA]" />
          </div>

          <h2 className="text-[28px] sm:text-[40px] lg:text-[46px] font-black text-[#0A0A0A] leading-tight mb-5">
            What can we help you achieve in Japan?
          </h2>

          <p className="text-gray-500 text-[14px] sm:text-[15px] leading-[1.8] max-w-2xl mx-auto mb-8">
            Whether it's gaining admission to a top university, securing a scholarship, mastering the language, or building a career after graduation — our consultants are ready to help you turn your goals into a clear, achievable plan.
          </p>

          <a
            href="#contact"
            className="inline-flex items-center gap-2.5 bg-[#F6C21F] text-[#0A0A0A] font-bold text-[13px] sm:text-[14px] px-7 py-3.5 sm:py-4 rounded-full hover:bg-[#0877BA] hover:text-white transition-colors duration-300 group"
          >
            Let's Get To Work
            <FaArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-200" />
          </a>
        </motion.div>
      </div>

      {/* people row */}
      <motion.div
        className="relative z-10 w-full mt-8 sm:mt-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
      >
        <img
          src={peopleRow}
          alt="Students from around the world"
          className="w-full h-[180px] sm:h-[280px] lg:h-[340px] object-cover object-top"
        />
      </motion.div>

    </section>
  );
}