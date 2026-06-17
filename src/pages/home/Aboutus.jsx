import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaCheckCircle, FaUserGraduate, FaPlane, FaHandshake, FaLanguage, FaFileAlt } from 'react-icons/fa'
import { GiFlowerEmblem } from 'react-icons/gi';

const PRIMARY = '#0877BA'
const YELLOW  = '#F6C21F'

function FadeUp({ children, delay = 0 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.2 })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

const pillars = [
  { icon: <FaUserGraduate />, title: 'University Admissions', desc: 'We match you with the right Japanese university based on your academic background, budget, and career goals — and handle the entire application.' },
  { icon: <FaFileAlt />,      title: 'Visa Processing',       desc: 'Our team prepares and submits a flawless visa application, guiding you through every document requirement to maximise approval chances.' },
  { icon: <FaLanguage />,     title: 'JLPT & Language Prep',  desc: 'Japan requires basic Japanese proficiency. We connect you with top JLPT prep courses and provide study resources tailored to your level.' },
  { icon: <FaPlane />,        title: 'Pre-Departure Support', desc: 'From accommodation search to airport pickup, we prepare you for life in Japan so you arrive confident, not confused.' },
  { icon: <FaHandshake />,    title: 'Scholarship Guidance',  desc: 'We identify and help you apply for MEXT, JASSO, and university-specific scholarships — significantly reducing your study costs.' },
  { icon: <FaFileAlt />,      title: 'Post-Arrival Assistance', desc: 'Our support doesn\'t end at the airport. We assist with residence card registration, bank accounts, and settling into your new city.' },
]

const whyPoints = [
  'Consultants who have personally studied in Japan',
  'Direct partnerships with 30+ Japanese universities',
  '98% student visa approval rate over 12 years',
  'Bilingual team — Nepali & Japanese speaking',
  'Transparent fees with no hidden charges',
  'End-to-end support from inquiry to arrival',
]

export default function AboutUs() {
  return (
    <div style={{ fontFamily: "'Roboto', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&family=Noto+Serif+JP:wght@700&display=swap');
      `}</style>

      {/* ABOUT US */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-5xl mx-auto">

          {/* Label */}
          <FadeUp>
            <div className="flex items-center gap-3 mb-5">
              <span className="block w-8 h-0.5" style={{ background: YELLOW }} />
              <span className="text-xs font-bold tracking-[0.2em] uppercase" style={{ color: PRIMARY }}>About Us</span>
            </div>
          </FadeUp>

          {/* headline + body */}
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <FadeUp delay={0.08}>
              <h2 className="text-4xl sm:text-5xl font-black text-slate-900 leading-tight">
                Nepal's most trusted gateway to Japan
              </h2>
              {/* kanji */}
              <p className="mt-4 text-7xl font-black leading-none select-none" style={{ color: PRIMARY + '12', fontFamily: "'Noto Serif JP', serif" }}>日本</p>
            </FadeUp>

            <FadeUp delay={0.15}>
              <p className="text-slate-600 text-base leading-relaxed mb-5">
                Founded in 2012, we have spent over a decade helping Nepali students turn their dream of studying in Japan into reality. From the first enquiry to the day you land in Tokyo, Kyoto, or Osaka — our team is with you every step of the way.
              </p>
              
              

              {/* pills */}
              <div className="flex flex-wrap gap-3 mt-8">
                {[['2,400+', 'Students Placed'], ['98%', 'Visa Success'], ['12+', 'Years Experience'], ['30+', 'Partner Universities']].map(([val, lbl]) => (
                  <div key={lbl} className="rounded-full px-4 py-2 border" style={{ borderColor: PRIMARY + '30', background: PRIMARY + '08' }}>
                    <span className="font-black text-sm" style={{ color: PRIMARY }}>{val}</span>
                    <span className="text-slate-500 text-xs ml-1.5">{lbl}</span>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* OUR MISSION */}
      <section className="py-20 px-6" style={{ background: '#f6f1e8' }}>
        <div className="max-w-5xl mx-auto">

           
            
            

          <FadeUp>
            <div className="flex items-center gap-3 mb-5">
              <span className="block w-8 h-0.5" style={{ background: YELLOW }} />
              <span className="text-xs font-bold tracking-[0.2em] uppercase" style={{ color: PRIMARY }}>Our Mission</span>
            </div>
          </FadeUp>

          

          <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
            
            <FadeUp delay={0.08}>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 leading-tight mb-6">
                Remove every barrier between you and your Japanese university seat
              </h2>
              <p className="text-slate-600 text-base leading-relaxed mb-4">
                Our mission is simple: make Japan accessible to any Nepali student with the ambition to get there. Language, paperwork, cost, culture shock — we tackle all of it so you can focus on your future.
              </p>
              <p className="text-slate-600 text-base leading-relaxed">
                We measure success not in applications submitted, but in students who graduate, build careers, and thrive in Japan. That long-term view is what makes us different from every other consultancy.
              </p>
            </FadeUp>

            {/* Mission card */}
            <FadeUp delay={0.15}>
              <div className="rounded-2xl p-8 text-white relative overflow-hidden" style={{ background: `linear-gradient(135deg, ${PRIMARY}, #065a94)` }}>
                {/* Kanji watermark */}
                <span className="absolute -right-4 -bottom-4 text-[100px] font-black leading-none select-none pointer-events-none" style={{ color: 'rgba(255,255,255,0.06)', fontFamily: "'Noto Serif JP', serif" }}>志</span>
                <p className="text-xs font-bold tracking-[0.2em] uppercase mb-4" style={{ color: YELLOW }}>志 — Ambition</p>
                <p className="text-lg font-bold leading-snug mb-3">"Every student who walks through our door deserves the same quality of guidance we would give our own family."</p>
                <p className="text-white/60 text-sm">— Founding Philosophy, 2012</p>
                <div className="mt-6 grid grid-cols-2 gap-4">
                  {[['Honest', 'No false promises, ever'], ['Personal', 'Your plan, not a template']].map(([t, d]) => (
                    <div key={t} className="bg-white/10 rounded-xl p-3">
                      <p className="font-bold text-sm mb-0.5">{t}</p>
                      <p className="text-white/60 text-xs">{d}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>
          </div>

          
        </div>
      </section>

      {/* Why us */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">

            <FadeUp>
              <div className="flex items-center gap-3 mb-5">
                <span className="block w-8 h-0.5" style={{ background: YELLOW }} />
                <span className="text-xs font-bold tracking-[0.2em] uppercase" style={{ color: PRIMARY }}>Why Choose Us</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 leading-tight mb-4">
                We've been where you want to go
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Our edge isn't just experience — it's empathy. Our consultants have lived the Japanese student life: navigated the application system, managed language barriers, and built careers there. We speak from experience, not from a brochure.
              </p>
            </FadeUp>

            <FadeUp delay={0.12}>
              <ul className="space-y-3">
                {whyPoints.map((pt, i) => (
                  <motion.li
                    key={pt}
                    className="flex items-start gap-3 bg-slate-50 border border-slate-100 rounded-xl px-4 py-3"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <FaCheckCircle className="mt-0.5 flex-shrink-0 text-base" style={{ color: PRIMARY }} />
                    <span className="text-slate-700 text-sm font-medium">{pt}</span>
                  </motion.li>
                ))}
              </ul>
            </FadeUp>

          </div>
        </div>
      </section>

      
    </div>
  )
}