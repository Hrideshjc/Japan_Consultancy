import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { GiFlowerEmblem } from 'react-icons/gi';

const TESTIMONIALS = [
  [
    {
      quote:  'Kizuna Consulting made my dream of studying in Tokyo a reality. They handled everything — visa, accommodation, university application. I could not have done it without them.',
      name:   'Rahul Sharma',
      role:   'Undergraduate Student',
      uni:    'University of Tokyo',
      avatar: 'RS',
    },
    {
      quote:  'The scholarship guidance alone saved me thousands. Their team knew exactly which grants I qualified for and helped me write a winning application. Truly life-changing support.',
      name:   'Priya Thapa',
      role:   'Postgraduate Student',
      uni:    'Kyoto University',
      avatar: 'PT',
    },
    {
      quote:  'From day one the team felt like family. They answered every question, calmed every worry, and cheered me on the whole way. I am now in Osaka living my dream.',
      name:   'Ahmed Al-Rashid',
      role:   'Language Program',
      uni:    'Osaka University',
      avatar: 'AA',
    },
  ],
  [
    {
      quote:  'I was nervous about the visa process but Kizuna made it completely stress-free. 98% approval rate is real — I got mine in under three weeks. Highly recommended!',
      name:   'Sara Mwangi',
      role:   'Exchange Student',
      uni:    'Waseda University',
      avatar: 'SM',
    },
    {
      quote:  'The career counselling after graduation was outstanding. Within two months I had a job offer from a Tokyo tech firm. Kizuna truly goes the extra mile.',
      name:   'Liu Wei',
      role:   'Graduate · Software Engineer',
      uni:    'Keio University',
      avatar: 'LW',
    },
    {
      quote:  'Everything was explained clearly and honestly. No hidden fees, no false promises — just genuine expert guidance. I tell every student I know to contact Kizuna first.',
      name:   'Fatima Al-Zahra',
      role:   'Masters Student',
      uni:    'Nagoya University',
      avatar: 'FA',
    },
  ],
];

function TestimonialCard({ item, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group relative flex flex-col justify-between bg-white border border-gray-100 p-7 sm:p-8 hover:shadow-xl transition-all duration-300"
    >
      {/* blue top line slides in on hover */}
      <span className="absolute top-0 left-0 h-[3px] w-0 bg-[#0877BA] group-hover:w-full transition-all duration-300" />

      {/* big quote mark */}
      <div
        className="absolute bottom-12 right-5 text-[72px] font-black leading-none select-none pointer-events-none"
        style={{ color: '#0877BA', opacity: 0.1, fontFamily: "'Roboto', sans-serif" }}
      >
        "
      </div>

      {/* left blue stripe */}
      <div className="absolute left-0 top-0 h-full w-1 bg-[#0877BA]" />

      {/* quote */}
      <p className="text-gray-500 text-[14px] leading-[1.8] mb-8 relative z-10" style={{ fontFamily: "'Roboto', sans-serif" }}>
        {item.quote}
      </p>

      {/* author row */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div
            className="w-11 h-11 rounded-full flex items-center justify-center text-white font-black text-[12px] flex-shrink-0"
            style={{ background: 'linear-gradient(135deg, #0877BA, #055a8c)', fontFamily: "'Roboto', sans-serif" }}
          >
            {item.avatar}
          </div>
          <div>
            <div className="text-[#0A0A0A] font-black text-[14px] leading-tight" style={{ fontFamily: "'Roboto', sans-serif" }}>{item.name}</div>
            <div className="text-gray-400 text-[12px] mt-0.5" style={{ fontFamily: "'Roboto', sans-serif" }}>{item.role}</div>
            <div className="text-[#0877BA] text-[11px] font-semibold mt-0.5" style={{ fontFamily: "'Roboto', sans-serif" }}>{item.uni}</div>
          </div>
        </div>
        {/* stars */}
        <div className="text-[#F6C21F] text-[12px] hidden sm:block">★★★★★</div>
      </div>
    </motion.div>
  );
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const total = TESTIMONIALS.length;

  useEffect(() => {
    const t = setInterval(() => setCurrent(p => (p + 1) % total), 6000);
    return () => clearInterval(t);
  }, [current]);

  const prev = () => setCurrent(p => (p - 1 + total) % total);
  const next = () => setCurrent(p => (p + 1) % total);

  return (
    <section className="relative w-full bg-[#f6f1e8] py-20 sm:py-28 overflow-hidden">

      {/* left blue stripe */}
      <div className="absolute left-0 top-0 h-full w-1 bg-[#0877BA]" />

      {/* Watermarks */}
      <div
        className="absolute right-10 top-1/2 -translate-y-1/2 font-black text-[220px] select-none pointer-events-none hidden xl:block"
        style={{ color: '#0877BA', opacity: 0.04, fontFamily: "'Roboto', sans-serif", lineHeight: 1 }}
      >
        背
      </div>
      <div
        className="absolute left-10 top-1/2 -translate-y-1/2 font-black text-[220px] select-none pointer-events-none hidden xl:block"
        style={{ color: '#0877BA', opacity: 0.04, fontFamily: "'Roboto', sans-serif", lineHeight: 1 }}
      >
        景
      </div>

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

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 xl:px-16">

        {/* HEADER */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-[2px] bg-[#0877BA]" />
            <span className="text-[11px] font-bold tracking-[0.18em] text-[#0877BA] uppercase" style={{ fontFamily: "'Roboto', sans-serif" }}>
              Student Feedback
            </span>
            <span className="w-8 h-[2px] bg-[#0877BA]" />
          </div>

          <h2
            className="font-black text-[#0A0A0A] leading-[1.08] tracking-tight"
            style={{ fontSize: 'clamp(28px, 5vw, 52px)', fontFamily: "'Roboto', sans-serif" }}
          >
            What Our Students Say About Us
          </h2>

          <div
            className="mt-2 text-[13px] tracking-widest font-medium"
            style={{ color: 'rgba(0,0,0,0.2)', fontFamily: "'Roboto', sans-serif" }}
          >
            学生の声
          </div>
        </motion.div>

        {/* CARDS */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.38, ease: [0.25, 1, 0.5, 1] }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {TESTIMONIALS[current].map((item, i) => (
              <TestimonialCard key={i} item={item} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* PAGINATION */}
        <div className="flex items-center justify-center gap-6 mt-12">

          <button
            onClick={prev}
            className="w-9 h-9 border border-[#0A0A0A]/15 flex items-center justify-center text-[#0A0A0A] hover:bg-[#0877BA] hover:border-[#0877BA] hover:text-white transition-all duration-200"
          >
            <FaChevronLeft size={14} />
          </button>

          <div className="flex items-center gap-2.5">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className="relative w-5 h-5 flex items-center justify-center focus:outline-none"
              >
                {current === i && (
                  <motion.span
                    layoutId="testimonial-dot"
                    className="absolute inset-0 rounded-full border border-[#0877BA]"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
                <span
                  className="w-2 h-2 rounded-full transition-colors duration-200"
                  style={{ background: current === i ? '#0877BA' : 'rgba(0,0,0,0.2)' }}
                />
              </button>
            ))}
          </div>

          <button
            onClick={next}
            className="w-9 h-9 bg-[#0877BA] flex items-center justify-center text-white hover:bg-[#0A0A0A] transition-all duration-200"
          >
            <FaChevronRight size={14} />
          </button>
        </div>

      </div>
    </section>
  );
}