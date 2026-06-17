import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

import aboutBg from '../../assets/japanese.jpg';
import newsletterIllustration from '../../assets/newsletter.png';

const ROBOTO = { fontFamily: "'Roboto', sans-serif" };

export default function NewsletterSection() {
  return (
    <section className="relative w-full bg-white px-6 sm:px-10 xl:px-16 py-12 sm:py-16" style={ROBOTO}>
      <motion.div
        className="relative max-w-7xl mx-auto rounded-2xl overflow-hidden"
        style={{
          backgroundImage: `url(${aboutBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        

        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8 lg:gap-12 px-6 sm:px-10 lg:px-14 py-10 sm:py-14">

          {/* LEFT — illustration */}
          <motion.div
            className="w-full max-w-[280px] sm:max-w-[340px] lg:max-w-none lg:w-[38%] shrink-0"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <img
              src={newsletterIllustration}
              alt="Student working on laptop"
              className="w-full h-auto object-contain"
            />
          </motion.div>

          {/* RIGHT content */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-3">
            <span className="w-8 h-[2px] bg-[#F6C21F]" />
            <span className="text-[#F6C21F] text-[11px] sm:text-[12px] font-bold tracking-[0.25em] uppercase">
              Newsletter
            </span>
            <span className="w-8 h-[2px] bg-[#F6C21F]" />
          </div>

            <h2 className="text-[24px] sm:text-[32px] lg:text-[36px] font-black text-white leading-tight mb-7">
              Get Study-in-Japan Tips & Updates
            </h2>

            <form className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto lg:mx-0">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-white text-[#0A0A0A] placeholder:text-gray-400 text-[14px] sm:text-[15px] rounded-full px-5 py-3.5 sm:py-4 focus:outline-none focus:ring-2 focus:ring-[#F6C21F]"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2.5 bg-[#F6C21F] text-[#0A0A0A] font-bold text-[13px] sm:text-[14px] px-7 py-3.5 sm:py-4 rounded-full hover:bg-white transition-colors duration-300 group whitespace-nowrap"
              >
                Subscribe Now
                <FaArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </form>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}