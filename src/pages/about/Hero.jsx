import React from 'react';
import { motion } from 'framer-motion';
import { FaChevronRight } from 'react-icons/fa';
import aboutBg from '../../assets/japanese.jpg';
import { GiFlowerEmblem } from 'react-icons/gi';

const ROBOTO = { fontFamily: "'Roboto', sans-serif" };

export default function AboutHero() {
  return (
    <section
      className="relative w-full overflow-hidden flex items-center mt-[88px] sm:mt-[100px]"
      style={{
        minHeight: '55vh',
        backgroundImage: `url(${aboutBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        ...ROBOTO,
      }}
    >
      

      {/* Sakura petals */}
      {[
        { left: '8%',  delay: 0   },
        { left: '22%', delay: 2   },
        { left: '50%', delay: 2.5 },
        { left: '72%', delay: 1.5 },
        { left: '88%', delay: 3   },
      ].map((p, i) => (
        <motion.div
          key={i}
          className="absolute top-0 pointer-events-none select-none"
          style={{ left: p.left }}
          animate={{ y: [0, 300], opacity: [0, 0.8, 0], rotate: [0, 360] }}
          transition={{ duration: 5, delay: p.delay, repeat: Infinity, ease: 'easeIn' }}
        >
          <GiFlowerEmblem size={22} color="#0877BA" style={{ opacity: 0.8 }} />
        </motion.div>
      ))}
      

      
      

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 sm:px-10 xl:px-16 py-16 sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-[11px] sm:text-[12px] font-bold tracking-[0.18em] text-white uppercase mb-4">
            We Offer Professional Solutions
          </p>

          <h1 className="text-[42px] sm:text-[56px] lg:text-[64px] font-black text-white leading-[1.05] mb-5">
            About Us
          </h1>

          <div className="flex items-center gap-2.5 text-white">
            <span className="text-[14px] sm:text-[15px] font-semibold">Home</span>
            <FaChevronRight size={11} className="text-[#F6C21F]" />
            <span className="text-[14px] sm:text-[15px] font-bold">About Us</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}