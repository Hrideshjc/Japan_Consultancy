import React from 'react';
import { motion } from 'framer-motion';
import {
  FaChartBar,
  FaLightbulb,
  FaHandHoldingUsd,
  FaShieldAlt,
  FaGlobeAsia,
  FaUserGraduate,
  FaUniversity,
  FaAward,
} from 'react-icons/fa';
import { GiFlowerEmblem } from 'react-icons/gi';

import sectionBg from '../../assets/bg1.jpg';
import avatar1 from '../../assets/avatar1.jpg';
import avatar2 from '../../assets/avatar2.jpg';
import avatar3 from '../../assets/avatar3.avif';
import avatar4 from '../../assets/avatar4.webp';
import avatar5 from '../../assets/avatar5.avif';

const ROBOTO = { fontFamily: "'Roboto', sans-serif" };

const SERVICES = [
  {
    icon: FaChartBar,
    title: 'Profile Analysis',
    desc: 'We assess your academic background and goals to map out the best-fit universities and programs in Japan.',
  },
  {
    icon: FaLightbulb,
    title: 'Pathway Planning',
    desc: 'From language schools to postgraduate research, we design a clear roadmap tailored to your ambitions.',
  },
  {
    icon: FaHandHoldingUsd,
    title: 'Scholarship Support',
    desc: 'Our consultants identify and help you apply for MEXT, JASSO, and university-specific funding opportunities.',
  },
  {
    icon: FaShieldAlt,
    title: 'Visa & Compliance',
    desc: 'We handle documentation and compliance checks, keeping your application accurate and on schedule.',
  },
];

const STATS = [
  { icon: FaGlobeAsia, num: '42', label: 'Countries We Serve' },
  { icon: FaUserGraduate, num: '780+', label: 'Students Placed' },
  { icon: FaUniversity, num: '120+', label: 'Partner Universities' },
  { icon: FaAward, num: '15', label: 'Years of Excellence' },
];

const AVATARS = [
  { src: avatar1, position: 'top-6 left-[14%] sm:left-[18%]', size: 'w-24 h-24 sm:w-32 sm:h-32', delay: 0 },
  { src: avatar2, position: 'top-10 right-[10%] sm:right-[14%]', size: 'w-28 h-28 sm:w-36 sm:h-36', delay: 0.4 },
  { src: avatar3, position: 'bottom-24 left-[8%] sm:left-[12%]', size: 'w-24 h-24 sm:w-32 sm:h-32', delay: 0.8 },
  { src: avatar4, position: 'bottom-28 right-[6%] sm:right-[10%]', size: 'w-28 h-28 sm:w-36 sm:h-36', delay: 1.2 },
];

export default function HelpYou() {
  return (
    <section className="relative w-full overflow-hidden" style={ROBOTO}>

      {/* SUB-SECTION 1 */}
      <div
        className="relative w-full min-h-[420px] sm:min-h-[520px] flex items-center justify-center pt-16 sm:pt-20"
        style={{
          backgroundImage: `url(${sectionBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >

        {/* floating breathing avatars */}
        {AVATARS.map((a, i) => (
          <motion.div
            key={i}
            className={`absolute ${a.position} ${a.size} rounded-full overflow-hidden shadow-lg ring-4 ring-white hidden sm:block`}
            animate={{ scale: [1, 1.06, 1], y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: a.delay }}
          >
            <img src={a.src} alt="Student" className="w-full h-full object-cover" />
          </motion.div>
        ))}

        {/* center stat */}
        <motion.div
          className="relative z-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-[88px] sm:text-[120px] font-black leading-none bg-gradient-to-br from-[#0877BA] via-[#0877BA] to-[#F6C21F] bg-clip-text text-transparent">
            30+
          </div>
          <p className="text-[14px] sm:text-[16px] font-bold tracking-[0.25em] text-[#0A0A0A] uppercase mt-2">
            Years of Experience
          </p>
        </motion.div>

        {/* bottom avatar */}
        <motion.div
          className="absolute -bottom-12 sm:-bottom-16 left-0 right-0 mx-auto w-28 h-28 sm:w-36 sm:h-36 rounded-full overflow-hidden shadow-2xl ring-4 ring-white z-20"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <img src={avatar5} alt="Consultant" className="w-full h-full object-cover" />
        </motion.div>
      </div>

      {/* SUB-SECTION 2 */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 xl:px-16 pt-24 sm:pt-32 pb-16 sm:pb-20">

        {/* sakura petals */}
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

            

      {/* Watermarks */}
      <div
        className="absolute right-10 top-10 font-black text-[220px] select-none pointer-events-none hidden xl:block"
        style={{ color: '#0877BA', opacity: 0.06, fontFamily: "'Roboto', sans-serif", lineHeight: 1 }}
      >
        背
      </div>
      <div
        className="absolute left-10 top-10 font-black text-[220px] select-none pointer-events-none hidden xl:block"
        style={{ color: '#0877BA', opacity: 0.06, fontFamily: "'Roboto', sans-serif", lineHeight: 1 }}
      >
        景
      </div>

        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="w-8 h-[2px] bg-[#0877BA]" />
            <span className="text-[#0877BA] text-[11px] sm:text-[12px] font-bold tracking-[0.25em] uppercase">
              Where We Can Help You
            </span>
            <span className="w-8 h-[2px] bg-[#0877BA]" />
          </div>
          <h2 className="text-[28px] sm:text-[38px] lg:text-[44px] font-black text-[#0A0A0A] leading-tight">
            We Guide Your Path to Japan
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {SERVICES.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#0877BA]/10 flex items-center justify-center mb-5">
                  <Icon size={24} className="text-[#0877BA]" />
                </div>
                <h3 className="text-[17px] sm:text-[19px] font-black text-[#0A0A0A] mb-2.5">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-[13.5px] sm:text-[14px] leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* SUB-SECTION 3 */}
      <motion.div
        className="relative z-10 bg-[#0877BA] py-12 sm:py-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 xl:px-16">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-6 text-center">
            {STATS.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  className="flex flex-col items-center"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <Icon size={26} className="text-[#F6C21F] mb-3" />
                  <div className="text-[15px] sm:text-[17px] font-medium text-white/80 mb-1">
                    {stat.label.split(' ').slice(0, -1).join(' ')}
                  </div>
                  <div className="text-[40px] sm:text-[52px] font-black text-white leading-none mb-1">
                    {stat.num}
                  </div>
                  <div className="text-[13px] sm:text-[14px] text-white/70">
                    {stat.label.split(' ').slice(-1)}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>

    </section>
  );
}