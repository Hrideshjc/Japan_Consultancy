import React from 'react';
import { motion } from 'framer-motion';
import {
  FaGraduationCap,
  FaLandmark,
  FaGlobe,
  FaBriefcase,
  FaShieldAlt,
  FaHandshake,
} from 'react-icons/fa';
import buildingImage from '../../assets/building3.e65c53192f3abf78.png';

const REASONS = [
  {
    icon: FaGraduationCap,
    title: 'World-Ranked Universities',
    desc: 'Study at institutions like University of Tokyo and Kyoto University — consistently ranked among Asia\'s and the world\'s finest.',
  },
  {
    icon: FaLandmark,
    title: 'Rich Culture & History',
    desc: 'Experience a country where ancient tradition meets modern innovation — a cultural immersion that changes your perspective forever.',
  },
  {
    icon: FaGlobe,
    title: 'English-Taught Programs',
    desc: 'Hundreds of fully English-taught degrees at undergraduate and postgraduate level. Language is never a barrier to your ambition.',
  },
  {
    icon: FaBriefcase,
    title: 'Strong Career Prospects',
    desc: "Japan's booming job market actively welcomes international graduates into top tech, finance, and engineering companies.",
  },
  {
    icon: FaShieldAlt,
    title: 'Safe & Welcoming Society',
    desc: 'Japan is one of the safest countries in the world — clean, respectful, and incredibly welcoming to international students.',
  },
  {
    icon: FaHandshake,
    title: 'Generous Scholarships',
    desc: 'MEXT, JASSO, and private university grants make studying in Japan accessible and affordable for students worldwide.',
  },
];

const STATS = [
  { num: '780+', label: 'Partner Universities' },
  { num: '98%',  label: 'Visa Approval Rate'  },
  { num: '12K+', label: 'Students Placed'     },
  { num: '15+',  label: 'Years Experience'    },
];

export default function WhyJapan() {
  return (
    <section
      className="relative w-full bg-[#f6f1e8] py-20 sm:py-28 overflow-hidden"
      style={{ fontFamily: "'Roboto', sans-serif" }}
    >

      {/* left red stripe */}
      <div className="absolute left-0 top-0 h-full w-1 bg-[#0877BA]" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 xl:px-16">

        {/* HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            {/* tag */}
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[2px] bg-[#0877BA]" />
              <span
                className="text-[11px] font-bold tracking-[0.18em] text-[#0877BA] uppercase"
                style={{ fontFamily: "'Roboto', sans-serif" }}
              >
                Why Study in Japan
              </span>
            </div>

            <h2
              className="font-black text-[#0A0A0A] leading-[1.08] tracking-tight"
              style={{ fontSize: 'clamp(32px, 5vw, 54px)', fontFamily: "'Roboto', sans-serif" }}
            >
              Japan Gives You More <br className="hidden sm:block" />
              Than Just a Degree
            </h2>
          </motion.div>

          <motion.p
            className="text-gray-500 text-[15px] leading-[1.75] max-w-[400px] lg:text-right"
            style={{ fontFamily: "'Roboto', sans-serif" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.12 }}
          >
          
          </motion.p>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {REASONS.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="group relative bg-white border border-gray-100 p-8 hover:shadow-xl transition-all duration-300 cursor-default"
              >
                {/* yellow top line slides in on hover */}
                <span className="absolute top-0 left-0 h-[3px] w-0 bg-[#F6C21F] group-hover:w-full transition-all duration-300" />

                {/* icon box */}
                <div className="w-12 h-12 flex items-center justify-center bg-[#FAF8F4] group-hover:bg-[#0877BA] transition-colors duration-300 mb-5">
                  <Icon
                    size={21}
                    className="text-[#0877BA] group-hover:text-white transition-colors duration-300"
                  />
                </div>

                {/* card number */}
                <div
                  className="text-[11px] font-black text-gray-200 tracking-widest mb-2"
                  style={{ fontFamily: "'Roboto', sans-serif" }}
                >
                  0{i + 1}
                </div>

                {/* title */}
                <h3
                  className="text-[16px] font-black text-[#0A0A0A] mb-3 leading-tight"
                  style={{ fontFamily: "'Roboto', sans-serif" }}
                >
                  {item.title}
                </h3>

                {/* desc */}
                <p
                  className="text-[13.5px] text-gray-500 leading-[1.72]"
                  style={{ fontFamily: "'Roboto', sans-serif" }}
                >
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        <div className="pt-8 w-full">
          <div className="relative z-10 w-full h-[2px] bg-gradient-to-r from-[#0877BA]/0 via-[#0877BA]/60 to-[#0877BA]/0" />
        </div>

        {/* STATS */}
        <motion.div
          className="mt-14 grid grid-cols-2 sm:grid-cols-4 border border-gray-100"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.1 }}
        >
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className="flex flex-col items-center justify-center py-8 px-4 border-r border-gray-100 last:border-r-0 sm:[&:nth-child(2)]:border-r sm:[&:nth-child(4)]:border-r-0 text-center"
            >
              <span
                className="text-[34px] sm:text-[40px] font-black text-[#F6C21F] leading-none"
                style={{ fontFamily: "'Roboto', sans-serif" }}
              >
                {stat.num}
              </span>
              <span
                className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider mt-2"
                style={{ fontFamily: "'Roboto', sans-serif" }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}