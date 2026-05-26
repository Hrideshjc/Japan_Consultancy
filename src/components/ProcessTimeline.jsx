import React from 'react'
import { motion, useInView } from 'framer-motion'
import bgImage from '../assets/japan-main.jpg';

const steps = [
  {
    Hiragana: 'いち',
    number: '01',
    title: 'Initial Inquiry',
    titleJa: 'お問い合わせ',
    description: 'Speak with our consultants. We assess your profile and recommend the ideal visa pathway for your goals.',
  },
  {
    Hiragana: 'に',
    number: '02',
    title: 'Document Preparation',
    titleJa: '書類準備',
    description: 'We guide you through every required document — financial records, personal statements, and supporting materials.',
  },
  {
    Hiragana: 'さん',
    number: '03',
    title: 'Visa Application',
    titleJa: 'ビザ申請',
    description: 'We submit your complete application to the Japanese embassy or consulate and closely track its progress.',
  },
  {
    Hiragana: 'し / よん',
    number: '04',
    title: 'Approval & Briefing',
    titleJa: '承認・説明',
    description: 'Once approved, we prepare you with entry requirements, customs guidance, and pre-departure essentials.',
  },
  {
    Hiragana: 'ご',
    number: '05',
    title: 'Departure to Japan',
    titleJa: '日本へ出発',
    description: "You're ready. Our support continues after arrival — we stay available for any questions along the way.",
  },
]

/* ── Single step card ── */
function StepItem({ step, index }) {
  const ref = React.useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.4 })
  const isLast = index === steps.length - 1

  return (
    <motion.div
      ref={ref}
      className="relative flex flex-col items-center flex-1"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      
      {!isLast && (
        <div
          className="hidden md:block absolute top-8 left-1/2 w-full h-px z-0"
          style={{
            background: 'repeating-linear-gradient(to right, rgba(255,255,255,0.4) 0px, rgba(255,255,255,0.4) 6px, transparent 6px, transparent 14px)',
          }}
        />
      )}

    
      <div className="relative z-10 w-16 h-16 rounded-full bg-[#BC002D] flex items-center justify-center shadow-lg ring-4 ring-white/20 mb-4">
        <span
          className="text-white font-bold text-base"
          style={{ fontFamily: "'Noto Serif JP', serif" }}
        >
          {step.Hiragana}
        </span>
      </div>

      
      <div className="relative w-full rounded-sm p-4 text-center group
        bg-white/10 backdrop-blur-md border border-white/20
        hover:bg-white/20 hover:border-white/40 transition-all duration-300"
      >
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#BC002D] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-sm" />

        <div className="flex items-center justify-center gap-2 mb-1">
          <span className="text-[#BC002D] text-xs font-bold tracking-widest">{step.number}</span>
          <span className="text-white/30 text-xs">—</span>
          <span className="text-white/60 text-xs" style={{ fontFamily: "'Noto Serif JP', serif" }}>{step.titleJa}</span>
        </div>

        <h3
          className="text-white font-bold mb-2"
          style={{ fontFamily: "'Noto Serif JP', serif", fontSize: '1.05rem' }}
        >
          {step.title}
        </h3>
        <p className="text-white/70 text-xs leading-relaxed">{step.description}</p>
      </div>
    </motion.div>
  )
}

/* ── Main section ── */
export default function ProcessTimeline() {
  return (
    <>
      <section
        className="relative py-24 overflow-hidden"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundAttachment: 'fixed', 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/55" />

      

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-6xl px-6">

          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#BC002D]" />
              <p className="text-[#BC002D] text-xs font-bold tracking-[0.2em] uppercase">手続きの流れ</p>
              <div className="h-px w-8 bg-[#BC002D]" />
            </div>
            <h2
              className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-4"
              style={{ fontFamily: "'Noto Serif JP', serif" }}
            >
              Your Path to Japan
            </h2>
            <p className="text-white/60 text-base max-w-md mx-auto">
              Five clear steps from your first inquiry to your arrival in Japan.
            </p>
          </div>

          
          <div className="hidden md:flex flex-row items-start gap-4">
            {steps.map((step, i) => (
              <StepItem key={step.number} step={step} index={i} />
            ))}
          </div>

          
          <div className="md:hidden relative flex flex-col gap-6">
            <div
              className="absolute left-8 top-0 bottom-0 w-px"
              style={{
                background: 'repeating-linear-gradient(to bottom, rgba(255,255,255,0.3) 0px, rgba(255,255,255,0.3) 6px, transparent 6px, transparent 14px)',
              }}
            />
            {steps.map((step, i) => {
              const ref = React.useRef(null)
              const inView = useInView(ref, { once: true, amount: 0.3 })
              return (
                <motion.div
                  key={step.number}
                  ref={ref}
                  className="relative pl-20"
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                >
                  <div className="absolute left-0 top-3 w-12 h-12 rounded-full bg-[#BC002D] flex items-center justify-center ring-4 ring-white/20 z-10">
                    <span className="text-white text-xs font-bold" style={{ fontFamily: "'Noto Serif JP', serif" }}>
                      {step.kanji}
                    </span>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-sm p-4 hover:bg-white/20 transition-all duration-300">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[#BC002D] text-xs font-bold tracking-widest">{step.number}</span>
                      <span className="text-white/30 text-xs">—</span>
                      <span className="text-white/60 text-xs" style={{ fontFamily: "'Noto Serif JP', serif" }}>{step.titleJa}</span>
                    </div>
                    <h3 className="text-white font-bold mb-1" style={{ fontFamily: "'Noto Serif JP', serif", fontSize: '1.05rem' }}>
                      {step.title}
                    </h3>
                    <p className="text-white/70 text-xs leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>

        </div>
      </section>
    </>
  )
}