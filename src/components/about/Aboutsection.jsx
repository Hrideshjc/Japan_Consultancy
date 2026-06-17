import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaPlay, FaQuoteLeft, FaCheckCircle } from 'react-icons/fa';

import aboutImage from '../../assets/about2.jpg';
import consultImage from '../../assets/services6.jpg';

import logo1 from '../../assets/partner1.png';
import logo2 from '../../assets/partner2.png';
import logo3 from '../../assets/partner3.png';
import logo4 from '../../assets/partner4.png';
import logo5 from '../../assets/partner5.png';
import logo6 from '../../assets/partner6.png';

const ROBOTO = { fontFamily: "'Roboto', sans-serif" };

const STATS = [
  { num: '780+', label: 'Students Placed' },
  { num: '120+', label: 'Partner Universities' },
  { num: '15', label: 'Years Experience' },
];

const LOGOS = [logo1, logo2, logo3, logo4, logo5, logo6];

const POINTS = [
  'A lack of clarity around visa requirements and timelines',
  'Uncertainty about which universities truly fit your goals',
  'Limited access to scholarship and funding opportunities',
  'Difficulty preparing for JLPT and academic interviews',
  'No clear roadmap from application to arrival in Japan',
  'Feeling unsupported once classes actually begin',
];

const DETAIL_STATS = [
  { num: '68', label: 'We have clients in countries' },
  { num: '750+', label: 'Successful placements every year' },
];

export default function AboutSection() {
  return (
    <>
      {/*  SECTION 1 */}
      <section className="relative w-full bg-white py-16 sm:py-24" style={ROBOTO}>
        <div className="max-w-7xl mx-auto px-6 sm:px-10 xl:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* LEFT image */}
            <motion.div
              className="relative w-full"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <img
                src={aboutImage}
                alt="Consultation meeting"
                className="w-full h-[320px] sm:h-[420px] lg:h-[480px] object-cover rounded-2xl shadow-xl"
              />
            </motion.div>

            {/* RIGHT content */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center justify-center gap-3 mb-3">
                <span className="w-8 h-[2px] bg-[#0877BA]" />
                <span className="text-[#0877BA] text-[12px] sm:text-[13px] font-bold tracking-[0.18em] uppercase">
                  About Us
                </span>
                <span className="w-8 h-[2px] bg-[#0877BA]" />
              </div>

              <h2 className="text-[28px] sm:text-[36px] lg:text-[42px] font-black text-[#0A0A0A] leading-[1.2] mb-5">
                Guiding Your Journey to Study and Succeed in Japan
              </h2>

              <p className="text-gray-500 text-[14px] sm:text-[15px] leading-[1.8] mb-4">
                For over a decade, our consultants have helped students from across the world turn their dream of studying in Japan into reality. From your first inquiry to your first day on campus, we provide personalized guidance at every step — university selection, visa processing, scholarships, and language preparation.
              </p>

              <p className="text-gray-500 text-[14px] sm:text-[15px] leading-[1.8] mb-8">
                Our team includes former international students and education specialists who understand both the opportunities and challenges of studying abroad. We work closely with partner universities across Tokyo, Osaka, Kyoto, and beyond to ensure every applicant finds the right fit for their goals.
              </p>

              {/* STATS */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                {STATS.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    className="bg-white border border-gray-100 rounded-xl p-4 sm:p-5 text-center shadow-sm hover:shadow-md transition-shadow duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                  >
                    <div className="text-[24px] sm:text-[32px] font-black text-[#0877BA] leading-none mb-1">
                      {stat.num}
                    </div>
                    <div className="text-[11px] sm:text-[13px] font-semibold text-[#0A0A0A] mt-1">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <a
                href="#contact"
                className="inline-flex items-center gap-2.5 bg-[#F6C21F] text-[#0A0A0A] font-bold text-[13px] sm:text-[14px] px-7 py-3.5 sm:py-4 rounded-full hover:bg-[#0877BA] hover:text-white transition-colors duration-300 group"
              >
                Contact Us
                <FaArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-200" />
              </a>
            </motion.div>

          </div>

          {/* LOGO STRIP */}
          <motion.div
            className="mt-16 sm:mt-10 pt-10 sm:pt-12 border-t border-gray-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-wrap items-center justify-center sm:justify-between gap-x-10 gap-y-6">
              {LOGOS.map((logoSrc, i) => (
                <motion.div
                  key={i}
                  className="opacity-60 hover:opacity-100 transition-opacity duration-300"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 0.6, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                >
                  <img
                    src={logoSrc}
                    alt={`Partner logo ${i + 1}`}
                    className="h-7 sm:h-9 w-auto object-contain"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </section>

      {/* SECTION 2 */}
      <section className="relative w-full bg-white -mt-10 py-14 sm:-mt-12 sm:py-20" style={ROBOTO}>
        <div className="max-w-7xl mx-auto px-6 sm:px-10 xl:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

            {/* LEFT COLUMN */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* image video */}
              <div className="relative w-full mb-6">
                <img
                  src={consultImage}
                  alt="Consultation team at work"
                  className="w-full h-[260px] sm:h-[340px] object-cover rounded-2xl shadow-xl"
                />
                <button className="absolute bottom-5 left-1/2 -translate-x-1/2 sm:left-6 sm:translate-x-0 inline-flex items-center gap-2.5 bg-[#F6C21F] text-[#0A0A0A] font-bold text-[12px] sm:text-[13px] px-5 py-3 rounded-full shadow-lg hover:bg-[#0877BA] hover:text-white transition-colors duration-300">
                  <span className="w-7 h-7 rounded-full bg-white/80 flex items-center justify-center">
                    <FaPlay size={9} className="text-[#0A0A0A]" />
                  </span>
                  Watch Video
                </button>
              </div>

              {/* quote 1  */}
              <div className="relative pl-5 border-l-3 border-[#0877BA] mb-6">
                <FaQuoteLeft size={14} className="text-[#0877BA]/30 mb-2" />
                <p className="text-[#0877BA] text-[17px] sm:text-[19px] font-bold leading-snug">
                  "I never thought studying abroad was possible for someone like me — until this team showed me exactly how."
                </p>
              </div>

              {/* quote 2  */}
              <div className="relative pl-5 border-l-3 border-[#0877BA] mb-6">
                <FaQuoteLeft size={14} className="text-[#0877BA]/30 mb-2" />
                <p className="text-[#0877BA] text-[17px] sm:text-[19px] font-bold leading-snug">
                  "Kizuna gave me the confidence to succeed in this World."
                </p>
              </div>

              {/* STATS */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-gray-100">
                {DETAIL_STATS.map((stat) => (
                  <div key={stat.label}>
                    <div className="text-[15px] text-gray-500 mb-1">
                      {stat.label.includes('countries') ? 'We have clients in' : 'Successful work with'}
                    </div>
                    <div className="text-[44px] sm:text-[56px] font-black text-[#0877BA] leading-none">
                      {stat.num}
                    </div>
                    <div className="text-[13px] text-gray-400 mt-1">
                      {stat.label.includes('countries') ? 'countries worldwide' : 'students placed annually'}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* RIGHT COLUMN */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2 className="text-[26px] sm:text-[34px] lg:text-[38px] font-black text-[#0A0A0A] leading-[1.25] mb-6">
                We Are an Independent Education Consultancy, Built by Former International Students
              </h2>

              <p className="text-gray-500 text-[14px] sm:text-[15px] leading-[1.8] mb-5">
                Studying in Japan opens doors to world-class universities, a thriving job market, and a culture unlike anywhere else. But the path to get there is rarely simple — visa applications, language requirements, and university selection can feel overwhelming without the right guidance.
              </p>

              <p className="text-gray-500 text-[14px] sm:text-[15px] leading-[1.8] mb-6">
                That's where we come in. Our consultants have lived the experience themselves, and we've built a step-by-step process that removes the guesswork. From your very first conversation with us to the day you step onto campus in Tokyo, Osaka, or Kyoto, you're never navigating this alone.
              </p>

              {/* bullet list */}
              <ul className="space-y-3 mb-6">
                {POINTS.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-gray-600 text-[14px] sm:text-[15px] leading-relaxed">
                    <FaCheckCircle size={15} className="text-[#0877BA] mt-0.5 shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <p className="text-gray-500 text-[14px] sm:text-[15px] leading-[1.8]">
                Every student's situation is different, which is why we don't believe in one-size-fits-all advice. Whether you're applying for an undergraduate degree, a research-focused master's program, or an intensive language course, we tailor our guidance to your background, budget, and long-term goals — so the plan we build together actually works for <span className="font-bold text-[#0A0A0A]">you</span>.
              </p>
            </motion.div>

          </div>
        </div>
      </section>
    </>
  );
}