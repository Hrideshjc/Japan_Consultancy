import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { img } from 'framer-motion/client'

import undergraduate from '../assets/undergraduate.jpg';
import Female from '../assets/female.webp';
import language from '../assets/language.jpg';
import IdeaCollege from '../assets/IdeaCollege.jpg';
const programs = [
  {
    id: 'undergraduate',
    label: 'Undergraduate',
    tag: "Bachelor's Degree",
    duration: '4 Years',
    intake: 'April / October',
    language: 'Japanese / English',
    tuition: '¥535,800 / year',
    description:
      'Earn a full bachelor\'s degree at Japan\'s leading universities. Build deep expertise in your field while experiencing a culture known for precision, innovation, and academic excellence.',
    fields: ['Engineering', 'Business', 'Arts & Design', 'Sciences', 'Medicine'],
    accent: '#BC002D',
    image: undergraduate,
  },
  {
    id: 'postgraduate',
    label: 'Postgraduate',
    tag: "Master's & PhD",
    duration: '2 – 5 Years',
    intake: 'April',
    language: 'Japanese / English',
    tuition: '¥535,800 / year',
    description:
      'Advance your career or research with a master\'s or doctoral program. Japan\'s graduate schools are world-class in technology, robotics, AI, and social sciences.',
    fields: ['Robotics', 'AI & Data', 'Economics', 'Public Policy', 'Life Sciences'],
    accent: '#1a1a2e',
    image: Female,
  },
  {
    id: 'language',
    label: 'Language School',
    tag: 'Japanese Language',
    duration: '6 – 24 Months',
    intake: 'Every Quarter',
    language: 'Japanese',
    tuition: '¥700,000 / year',
    description:
      'Master the Japanese language as your gateway to university admission or professional life in Japan. Structured JLPT exam preparation is included at all levels.',
    fields: ['JLPT N5–N1', 'Business Japanese', 'Academic Writing', 'Conversation', 'Kanji'],
    accent: '#b45309',
    image: language,
  },
  {
    id: 'vocational',
    label: 'Vocational',
    tag: 'Specialized College',
    duration: '2 – 3 Years',
    intake: 'April',
    language: 'Japanese',
    tuition: '¥800,000 / year',
    description:
      'Japan\'s vocational colleges offer hands-on, industry-aligned training in creative and technical fields — the fastest route from study to employment in Japan.',
    fields: ['Anime & Manga', 'Culinary Arts', 'Fashion', 'IT & Gaming', 'Tourism'],
    accent: '#0e7490',
    image: IdeaCollege,
  },
]

const meta = (current) => [
  { label: 'Duration', value: current.duration, emoji: '⏱' },
  { label: 'Intake', value: current.intake, emoji: '📅' },
  { label: 'Language', value: current.language, emoji: '🗣' },
  { label: 'Est. Tuition', value: current.tuition, emoji: '💴' },
]

const petals = [
  { left: '8%', delay: 0 },
  { left: '25%', delay: 3 },
  { left: '55%', delay: 1.5 },
  { left: '78%', delay: 4.5 },
  { left: '92%', delay: 2 },
]

export default function StudyPrograms() {
  const [active, setActive] = useState('undergraduate')
  const current = programs.find((p) => p.id === active)

  return (
    <section className="relative py-20 bg-[#F8F6F1] overflow-hidden">

      {/* Sakura petals */}
      {petals.map((p, i) => (
        <motion.div
          key={i}
          className="absolute top-0 text-lg pointer-events-none select-none"
          style={{ left: p.left }}
          animate={{ y: [0, 700], opacity: [0.9, 0.4, 0], rotate: [0, 360] }}
          transition={{ duration: 12, delay: p.delay, repeat: Infinity, ease: 'easeIn' }}
        >
          🌸
        </motion.div>
      ))}

      <div className="relative z-10 mx-auto max-w-5xl px-6">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[#BC002D] text-xs font-bold tracking-[0.3em] uppercase mb-3">
            ---- 留学プログラム ----
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 leading-tight">
            Find Your Program
          </h2>
          <p className="mt-3 text-slate-500 text-sm max-w-md mx-auto">
            Choose the study path that fits your goals and start your journey to Japan.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {programs.map((p) => (
            <button
              key={p.id}
              onClick={() => setActive(p.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold border transition-all duration-300 ${
                active === p.id
                  ? 'bg-[#BC002D] text-white border-[#BC002D] shadow-md'
                  : 'bg-white text-slate-600 border-slate-200 hover:border-[#BC002D] hover:text-[#BC002D]'
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>

        {/* Container */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="rounded-3xl overflow-hidden shadow-xl border border-white grid grid-cols-1 lg:grid-cols-2"
          >
            {/* Image side */}
            <div className="relative h-60 lg:h-auto min-h-[280px]">
              <img
                src={current.image}
                alt={current.label}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <div className="absolute top-5 left-5">
                <span
                  className="text-xs font-bold px-3 py-1 rounded-full text-white"
                  style={{ backgroundColor: current.accent }}
                >
                  {current.tag}
                </span>
              </div>
              <div className="absolute bottom-5 left-5">
                <h3 className="text-2xl font-extrabold text-white">{current.label}</h3>
              </div>
            </div>

            {/* Detail side */}
            <div className="bg-white p-8 flex flex-col gap-5">
              <p className="text-slate-500 text-sm leading-relaxed">{current.description}</p>

              {/* Grid */}
              <div className="grid grid-cols-2 gap-3">
                {meta(current).map((item) => (
                  <div key={item.label} className="bg-[#F8F6F1] rounded-2xl p-4 border border-slate-100">
                    <p className="text-base mb-1">{item.emoji}</p>
                    <p className="text-[10px] font-bold tracking-widest text-slate-400 uppercase">{item.label}</p>
                    <p className="text-sm font-bold text-slate-800 mt-0.5">{item.value}</p>
                  </div>
                ))}
              </div>

              {/* Popular Fields */}
              <div>
                <p className="text-[10px] font-bold tracking-widest text-slate-400 uppercase mb-2">
                  Popular Fields
                </p>
                <div className="flex flex-wrap gap-2">
                  {current.fields.map((f) => (
                    <span
                      key={f}
                      className="text-xs px-3 py-1 rounded-full border font-medium"
                      style={{ borderColor: current.accent + '50', color: current.accent }}
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-1">
                <button
                  className="flex-1 text-white text-sm font-bold px-5 py-3 rounded-full transition-opacity duration-200 hover:opacity-90"
                  style={{ backgroundColor: current.accent }}
                >
                  Apply Now →
                </button>
                <button className="flex-1 text-slate-700 text-sm font-semibold px-5 py-3 rounded-full border border-slate-200 hover:border-slate-400 transition-colors duration-200">
                  Download Brochure
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  )
}