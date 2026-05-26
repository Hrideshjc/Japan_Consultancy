import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Play, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';

import person1 from '../assets/banner-img1.png';
import person2 from '../assets/banner-img2.png';
import person3 from '../assets/banner-img2.png';
import bgimage from '../assets/bgimage.png';

const SLIDES = [
  {
    tag:         'YOUR FUTURE STARTS IN JAPAN',
    kanji:       '未来',
    titleTop:    'Your Gateway to',
    titleBig:    'World-Class',
    titleSub:    'Japanese Education',
    desc:        'Expert guidance from application to graduation. We connect ambitious students with Japan\'s top universities, handle your visa, and support you every step of the way.',
    cta:         'Explore Programs',
    stat:        { num: '500+', label: 'University Partners' },
    cities:      'Tokyo · Osaka · Kyoto · Nagoya',
    image:       person1,
  },
  {
    tag:         'VISA & ADMISSIONS SUPPORT',
    kanji:       '絆',
    titleTop:    'Building Bonds',
    titleBig:    'Between You &',
    titleSub:    'Your Dream Campus',
    desc:        'From JLPT preparation to scholarship applications, our consultants know every pathway into Japan\'s most prestigious institutions. Your success is our mission.',
    cta:         'Free Consultation',
    stat:        { num: '98%', label: 'Visa Success Rate' },
    cities:      'Waseda · Keio · UTokyo · Kyodai',
    image:       person2,
  },
  {
    tag:         'SCHOLARSHIPS · LANGUAGE · CAREER',
    kanji:       '夢',
    titleTop:    'Building Bonds',
    titleBig:    'Between You &',
    titleSub:    'Your Dream Campus',
    desc:        'Comprehensive support across language training, scholarship hunting, student visa processing, and post-graduation career placement across Japan and beyond.',
    cta:         'Start Your Journey',
    stat:        { num: '12K+', label: 'Students Placed' },
    cities:      'Undergraduate · Postgraduate · Language',
    image:       person3,
  },
];

export default function Hero() {
  const [current,  setCurrent]  = useState(0);
  const [progress, setProgress] = useState(0);
  const DURATION = 6000;

  
  useEffect(() => {
    setProgress(0);
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % SLIDES.length);
    }, DURATION);
    return () => clearInterval(timer);
  }, [current]);

  
  useEffect(() => {
    setProgress(0);
    const tick = setInterval(() => {
      setProgress(p => (p >= 100 ? 100 : p + (100 / (DURATION / 50))));
    }, 50);
    return () => clearInterval(tick);
  }, [current]);

  const prev = () => setCurrent(p => (p - 1 + SLIDES.length) % SLIDES.length);
  const next = () => setCurrent(p => (p + 1) % SLIDES.length);

  const s = SLIDES[current];

  return (
    <section className="relative w-full min-h-screen bg-[#FAF8F4] flex flex-col overflow-hidden pt-[80px]">

      {/* ── faint kanji watermark ── */}
      <AnimatePresence mode="wait">
        <motion.div
          key={s.kanji}
          className="absolute right-8 top-24 text-[220px] font-black select-none pointer-events-none hidden xl:block"
          style={{ color: '#0A0A0A', opacity: 0.03, fontFamily: "'Noto Serif JP', serif", lineHeight: 1 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.03 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          {s.kanji}
        </motion.div>
      </AnimatePresence>

      {/* ── sakura petals ── */}
      {[
        { left: '8%',  delay: 0   },
        { left: '22%', delay: 2   },
        { left: '50%', delay: 2.5   },
        { left: '72%', delay: 1.5 },
        { left: '88%', delay: 3   },
      ].map((p, i) => (
        <motion.div
          key={i}
          className="absolute top-0 text-xl pointer-events-none select-none"
          style={{ left: p.left }}
          animate={{ y: [0, 300], opacity: [2, 0.5, 0], rotate: [0, 360] }}
          transition={{ duration: 8, delay: p.delay, repeat: Infinity, ease: 'easeIn' }}
        >
          🌸
        </motion.div>
      ))}

      
      <div className="flex-1 flex flex-col lg:flex-row max-w-[1400px] mx-auto w-full px-6 sm:px-10 xl:px-16">

        
        <div className="flex-1 flex flex-col justify-center py-16 lg:py-0 pr-0 lg:pr-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.45, ease: [0.25, 1, 0.5, 1] }}
            >

              
              <div className="flex items-center gap-3 mb-5">
                <span className="w-8 h-[2px] bg-[#BC002D]" />
                <span className="text-[11px] font-bold tracking-[0.16em] text-[#BC002D] uppercase">
                  {s.tag}
                </span>
              </div>

              
              <h1 className="font-black text-[#0A0A0A] leading-[1.07] tracking-tight mb-6"
                style={{ fontSize: 'clamp(40px, 6vw, 72px)' }}>
                {s.titleTop} <br />
                {s.titleBig} <br />
                {s.titleSub}
              </h1>

             
              <p className="text-gray-500 text-[15px] leading-[1.75] max-w-[500px] mb-6">
                {s.desc}
              </p>

              
              <div className="flex items-center gap-2 mb-8">
                <MapPin size={12} color="#BC002D" />
                <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">
                  {s.cities}
                </span>
              </div>

              
              <div className="flex flex-wrap items-center gap-4 mb-10">
                <a
                  href="#programs"
                  className="inline-flex items-center gap-2 bg-[#BC002D] text-white font-bold text-[12px] uppercase tracking-[0.14em] px-8 py-4 hover:bg-[#0A0A0A] transition-colors duration-200 group"
                >
                  {s.cta}
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
                </a>
                <a
                  href="#stories"
                  className="inline-flex items-center gap-2 border border-[#0A0A0A]/20 text-[#0A0A0A] font-semibold text-[12px] uppercase tracking-[0.12em] px-6 py-4 hover:border-[#0A0A0A] transition-colors duration-200"
                >
                  <Play size={12} fill="#0A0A0A" />
                  Watch Stories
                </a>
              </div>

              {/* stat badge */}
              <div className="inline-flex items-center gap-3 bg-white border border-[#BC002D]/15 shadow-sm px-5 py-3">
                <span className="text-[24px] font-black text-[#BC002D]">{s.stat.num}</span>
                <span className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider">{s.stat.label}</span>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

        
        <div className="relative lg:w-[45%] flex items-end justify-center min-h-[380px] overflow-hidden">

          
          <div className="absolute inset-0 z-0">
            <img src={bgimage} alt="Geometric mosaic" className="w-full h-full object-cover" />
          </div>

          
          <AnimatePresence mode="wait">
            <motion.img
              key={current}
              src={s.image}
              alt="Student advisor"
              className="relative z-10 w-[90%] sm:w-[65%] lg:w-[85%] object-contain object-bottom drop-shadow-2xl select-none"
              style={{ maxHeight: '150vh' }}
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              animate={{ opacity: 1, y: 0,  scale: 1 }}
              exit={{ opacity: 0, y: 15, scale: 0.97 }}
              transition={{ duration: 0.55, ease: 'easeOut' }}
            />
          </AnimatePresence>

          {/* floating info card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`card-${current}`}
              className="absolute top-8 left-4 z-20 bg-white/90 backdrop-blur-sm border border-[#BC002D]/15 shadow-lg px-4 py-3"
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.3, duration: 0.35 }}
            >
              <div className="text-[9px] font-bold text-gray-400 tracking-widest uppercase mb-0.5">Featured Program</div>
              <div className="text-[13px] font-black text-[#0A0A0A]">
                {current === 0 ? 'Tokyo University' : current === 1 ? 'Kyoto Institute' : 'Waseda University'}
              </div>
              <div className="text-[10px] text-[#BC002D] mt-0.5">★★★★★ Top Ranked</div>
            </motion.div>
          </AnimatePresence>

        </div>
      </div>

      
      <div className="border-t border-black/8 bg-white/60 backdrop-blur-sm">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 xl:px-16 py-4 flex items-center justify-between gap-6">

          
          <div className="flex items-baseline gap-1.5">
            <span className="text-[28px] font-black text-[#BC002D] leading-none">0{current + 1}</span>
            <span className="text-gray-300 text-lg">/</span>
            <span className="text-[14px] text-gray-400 font-medium">0{SLIDES.length}</span>
          </div>

          {/* progress bars */}
          <div className="flex gap-2 flex-1 max-w-[240px]">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className="flex-1 h-[3px] rounded-full overflow-hidden bg-black/10"
              >
                <div
                  className="h-full bg-[#BC002D] rounded-full transition-none"
                  style={{ width: i < current ? '100%' : i === current ? `${progress}%` : '0%' }}
                />
              </button>
            ))}
          </div>

          {/* prev / next buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={prev}
              className="w-9 h-9 border border-black/15 flex items-center justify-center hover:border-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-white transition-all duration-200"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={next}
              className="w-9 h-9 bg-[#BC002D] text-white flex items-center justify-center hover:bg-[#0A0A0A] transition-colors duration-200"
            >
              <ChevronRight size={16} />
            </button>
          </div>

        </div>
      </div>

    </section>
  );
}