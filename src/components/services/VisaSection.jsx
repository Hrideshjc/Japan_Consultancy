import React from 'react';
import { motion, useInView } from 'framer-motion';
import {
  FaPassport,
  FaFileAlt,
  FaPaperPlane,
  FaCheckCircle,
} from 'react-icons/fa';
import consultationBg from '../../assets/consultation.jpg';

const ROBOTO = { fontFamily: "'Roboto', sans-serif" };

const STEPS = [
  {
    icon: FaFileAlt,
    number: '01',
    title: 'Document Review',
    titleJa: '書類確認',
    description: 'We assess your financial records, academic history, and personal statements to build a complete, compliant file.',
  },
  {
    icon: FaPassport,
    number: '02',
    title: 'Application Drafting',
    titleJa: '申請書作成',
    description: 'Our consultants prepare every visa form with precision, tailored to your university and program of study.',
  },
  {
    icon: FaPaperPlane,
    number: '03',
    title: 'Embassy Submission',
    titleJa: '大使館提出',
    description: 'We submit your application to the Japanese embassy or consulate and track its progress on your behalf.',
  },
  {
    icon: FaCheckCircle,
    number: '04',
    title: 'Approval & Briefing',
    titleJa: '承認・説明',
    description: 'Once approved, we walk you through entry requirements and prepare you for departure.',
  },
];

function StepItem({ step, index }) {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const isLast = index === STEPS.length - 1;
  const Icon = step.icon;

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
          className="hidden md:block absolute top-8 left-1/2 w-[40px] h-px z-0"
          style={{
            background: 'repeating-linear-gradient(to right, rgba(255,255,255,0.4) 0px, rgba(255,255,255,0.4) 6px, transparent 6px, transparent 14px)',
          }}
        />
      )}

      <div className="relative z-10 w-16 h-16 rounded-full bg-[#0877BA] flex items-center justify-center shadow-lg ring-4 ring-white/20 mb-4">
        <Icon size={22} className="text-white" />
      </div>

      <div className="relative w-full rounded-sm p-3 sm:p-4 text-center group
        bg-white/10 backdrop-blur-md border border-white/20
        hover:bg-white/20 hover:border-white/40 transition-all duration-300"
      >
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#F6C21F] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-sm" />

        <div className="flex items-center justify-center gap-1.5 sm:gap-2 mb-1 flex-wrap">
          <span className="text-[#F6C21F] text-xs font-bold tracking-widest">{step.number}</span>
          <span className="text-white/30 text-xs">—</span>
          <span className="text-white/60 text-xs" style={{ fontFamily: "'Noto Serif JP', serif" }}>{step.titleJa}</span>
        </div>

        <h3 className="text-white font-bold mb-1 sm:mb-2 text-[0.95rem] sm:text-[1.05rem]">
          {step.title}
        </h3>
        <p className="text-white/70 text-[0.75rem] sm:text-xs leading-relaxed">{step.description}</p>
      </div>
    </motion.div>
  );
}

export default function VisaSection() {
  return (
    <section 
      className="relative py-24 overflow-hidden" 
      style={{
        ...ROBOTO,
        backgroundImage: `url(${consultationBg})`,
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60 z-0" />
      
      <div className="relative z-10 mx-auto max-w-6xl px-4 xs:px-5 sm:px-6">

        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-px w-6 sm:w-8 bg-[#ffffff]" />
            <p className="text-[#ffffff] text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase">Procedure Flow</p>
            <div className="h-px w-6 sm:w-8 bg-[#ffffff]" />
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-3 sm:mb-4">
            Visa Assistance
          </h1>
          <p className="text-lg sm:text-2xl lg:text-3xl font-bold text-white leading-tight mb-3 sm:mb-4">
            Your Student Visa, Handled End-to-End
          </p>
          <p className="text-white/60 text-sm sm:text-base max-w-md mx-auto">
            A 98% approval rate across hundreds of successful applications.
          </p>
        </div>

        {/* Desktop */}
        <div className="hidden md:flex flex-row items-start gap-4">
          {STEPS.map((step, i) => (
            <StepItem key={step.number} step={step} index={i} />
          ))}
        </div>

        {/* Mobile */}
        <div className="md:hidden relative flex flex-col gap-5 sm:gap-6">
          <div
            className="absolute left-6 sm:left-8 top-0 bottom-0 w-px"
            style={{
              background: 'repeating-linear-gradient(to bottom, rgba(255,255,255,0.3) 0px, rgba(255,255,255,0.3) 6px, transparent 6px, transparent 14px)',
            }}
          />
          {STEPS.map((step, i) => {
            const ref = React.useRef(null);
            const inView = useInView(ref, { once: true, amount: 0.3 });
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                ref={ref}
                className="relative pl-16 sm:pl-20"
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.07 }}
              >
                <div className="absolute left-0 top-3 w-12 h-12 rounded-full bg-[#0877BA] flex items-center justify-center ring-4 ring-white/20 z-10">
                  <Icon size={18} className="text-white" />
                </div>
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-sm p-3 sm:p-4 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center gap-1.5 mb-1 flex-wrap">
                    <span className="text-[#F6C21F] text-xs font-bold tracking-widest">{step.number}</span>
                    <span className="text-white/30 text-xs">—</span>
                    <span className="text-white/60 text-xs" style={{ fontFamily: "'Noto Serif JP', serif" }}>{step.titleJa}</span>
                  </div>
                  <h3 className="text-white font-bold mb-1 text-[0.95rem] sm:text-[1.05rem]">
                    {step.title}
                  </h3>
                  <p className="text-white/70 text-[0.75rem] sm:text-xs leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}