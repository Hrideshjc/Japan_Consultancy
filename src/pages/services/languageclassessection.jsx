import React from 'react';
import { motion } from 'framer-motion';
import { FaBookOpen, FaCheckCircle } from 'react-icons/fa';
import { GiFlowerEmblem } from 'react-icons/gi';

const ROBOTO = { fontFamily: "'Roboto', sans-serif" };

const LEVELS = [
  {
    level: 'N5',
    title: 'Beginner',
    duration: '3 Months',
    desc: 'Learn hiragana, katakana, and basic kanji along with everyday greetings and simple conversation.',
    highlight: false,
  },
  {
    level: 'N4',
    title: 'Elementary',
    duration: '4 Months',
    desc: 'Build sentence structure and vocabulary for daily life, shopping, and casual conversation.',
    highlight: false,
  },
  {
    level: 'N3',
    title: 'Intermediate',
    duration: '6 Months',
    desc: 'Read newspapers and handle workplace conversations with growing fluency and confidence.',
    highlight: true,
  },
  {
    level: 'N2',
    title: 'Upper-Intermediate',
    duration: '6 Months',
    desc: 'Prepare for university-level coursework with advanced grammar and broader vocabulary.',
    highlight: false,
  },
  {
    level: 'N1',
    title: 'Advanced',
    duration: '8 Months',
    desc: 'Achieve near-native comprehension for academic, professional, and business environments.',
    highlight: false,
  },
];

export default function LanguageClassesSection() {
  return (
    <section className="relative w-full bg-white py-12 sm:py-24 overflow-hidden" style={ROBOTO}>
      {/* left blue stripe */}
      <div className="absolute left-0 top-0 h-full w-1 bg-[#0877BA]" />

      {/* Watermarks */}
      <div
        className="absolute right-5 sm:right-10 top-5 sm:top-10 font-black text-[120px] sm:text-[220px] select-none pointer-events-none hidden xl:block"
        style={{ color: '#0877BA', opacity: 0.07, fontFamily: "'Roboto', sans-serif", lineHeight: 1 }}
      >
        背
      </div>
      <div
        className="absolute left-5 sm:left-10 top-5 sm:top-10 font-black text-[120px] sm:text-[220px] select-none pointer-events-none hidden xl:block"
        style={{ color: '#0877BA', opacity: 0.07, fontFamily: "'Roboto', sans-serif", lineHeight: 1 }}
      >
        景
      </div>

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
          className="absolute top-0 pointer-events-none select-none hidden sm:block"
          style={{ left: p.left }}
          animate={{ y: [0, 300], opacity: [0, 0.8, 0], rotate: [0, 360] }}
          transition={{ duration: 5, delay: p.delay, repeat: Infinity, ease: 'easeIn' }}
        >
          <GiFlowerEmblem size={22} color="#0877BA" style={{ opacity: 0.8 }} />
        </motion.div>
      ))}

      <div className="max-w-7xl mx-auto px-4 xs:px-5 sm:px-10 xl:px-16">

        {/* HEADER */}
        <motion.div
          className="text-center mb-10 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="w-8 h-[2px] bg-[#0877BA]" />
            <span className="text-[#0877BA] text-[11px] sm:text-[12px] font-bold tracking-[0.25em] uppercase">
              Japanese Language Classes
            </span>
            <span className="w-8 h-[2px] bg-[#0877BA]" />
          </div>
          <h2 className="text-[24px] xs:text-[28px] sm:text-[38px] lg:text-[42px] font-black text-[#0A0A0A] leading-tight mb-4">
            Structured JLPT Training, Level by Level
          </h2>
          <p className="text-gray-500 text-[13px] sm:text-[14px] lg:text-[15px] max-w-xl mx-auto leading-relaxed">
            From your first hiragana to advanced fluency, our courses are mapped directly to JLPT levels — so you always know exactly where you stand.
          </p>
        </motion.div>

        {/* LEVEL CARDS */}
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-5">
          {LEVELS.map((item, i) => (
            <motion.div
              key={item.level}
              className={`relative rounded-lg sm:rounded-2xl p-4 sm:p-6 flex flex-col transition-all duration-300 ${
                item.highlight
                  ? 'bg-[#0877BA] text-white shadow-xl lg:-translate-y-3'
                  : 'bg-[#FAF8F4] text-[#0A0A0A] hover:shadow-md'
              }`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: item.highlight ? -12 : 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
            >
              {item.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#F6C21F] text-[#0A0A0A] text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full">
                  Most Popular
                </span>
              )}

              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center mb-5 ${
                  item.highlight ? 'bg-white/15' : 'bg-[#0877BA]/10'
                }`}
              >
                <FaBookOpen size={18} className={item.highlight ? 'text-white' : 'text-[#0877BA]'} />
              </div>

              <div className={`text-[34px] font-black leading-none mb-1 ${item.highlight ? 'text-[#F6C21F]' : 'text-[#0877BA]'}`}>
                {item.level}
              </div>
              <div className={`text-[13px] font-bold mb-3 ${item.highlight ? 'text-white' : 'text-[#0A0A0A]'}`}>
                {item.title}
              </div>

              <p className={`text-[13px] leading-relaxed mb-5 flex-1 ${item.highlight ? 'text-white/80' : 'text-gray-500'}`}>
                {item.desc}
              </p>

              <div className="flex items-center gap-2 text-[12px] font-semibold">
                <FaCheckCircle size={12} className={item.highlight ? 'text-[#F6C21F]' : 'text-[#0877BA]'} />
                <span className={item.highlight ? 'text-white' : 'text-gray-600'}>{item.duration}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}