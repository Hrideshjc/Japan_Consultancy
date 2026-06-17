import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaMoneyCheckAlt,
  FaGraduationCap,
  FaIdCard,
  FaFileSignature,
  FaPlaneDeparture,
  FaStamp,
  FaChevronDown,
  FaCheckCircle,
} from 'react-icons/fa';
import worldMapBg from '../../assets/world-map.png';

const ROBOTO = { fontFamily: "'Roboto', sans-serif" };

const DOCUMENTS = [
  {
    icon: FaMoneyCheckAlt,
    title: 'Financial Records',
    summary: 'Proof of funds to support your studies and stay in Japan.',
    items: ['Bank statements (last 6 months)', 'Sponsor income certificate', 'Certificate of bank deposit'],
  },
  {
    icon: FaGraduationCap,
    title: 'Academic Documents',
    summary: 'Records that establish your educational background.',
    items: ['Transcripts & diplomas', 'Letters of recommendation', 'Study plan / personal essay'],
  },
  {
    icon: FaIdCard,
    title: 'Personal Identification',
    summary: 'Documents confirming your identity and background.',
    items: ['Valid passport', 'Passport-size photographs', 'Family register copy'],
  },
  {
    icon: FaFileSignature,
    title: 'Application Forms',
    summary: 'Official forms required by immigration and the embassy.',
    items: ['Certificate of Eligibility (COE)', 'Visa application form', 'Consent & guarantee forms'],
  },
  {
    icon: FaStamp,
    title: 'University Paperwork',
    summary: 'Confirmation of your enrollment and admission status.',
    items: ['Letter of acceptance', 'Enrollment certificate', 'Tuition payment proof'],
  },
  {
    icon: FaPlaneDeparture,
    title: 'Pre-Departure Documents',
    summary: 'Final checks before you board your flight to Japan.',
    items: ['Health & insurance forms', 'Accommodation proof', 'Flight itinerary'],
  },
];

function AccordionItem({ doc, isOpen, onClick, index }) {
  const Icon = doc.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="border border-gray-100 rounded-2xl overflow-hidden"
    >
      <button
        onClick={onClick}
        className={`w-full flex items-center gap-3 sm:gap-4 sm:gap-5 px-4 sm:px-5 lg:px-7 py-4 sm:py-5 text-left transition-colors duration-300 ${
          isOpen ? 'bg-[#0877BA]' : 'bg-white hover:bg-[#FAF8F4]'
        }`}
      >
        <div
          className={`w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300 ${
            isOpen ? 'bg-white/15' : 'bg-[#0877BA]/10'
          }`}
        >
          <Icon size={16} className={`sm:w-[17px] sm:h-[17px] ${isOpen ? 'text-white' : 'text-[#0877BA]'}`} />
        </div>

        <div className="flex-1 min-w-0">
          <h3 className={`text-[14px] sm:text-[15px] lg:text-[17px] font-black transition-colors duration-300 ${isOpen ? 'text-white' : 'text-[#0A0A0A]'}`}>
            {doc.title}
          </h3>
          <p className={`text-[12px] sm:text-[12.5px] lg:text-[13.5px] mt-0.5 transition-colors duration-300 ${isOpen ? 'text-white/75' : 'text-gray-500'}`}>
            {doc.summary}
          </p>
        </div>

        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className={`shrink-0 ${isOpen ? 'text-[#F6C21F]' : 'text-gray-400'}`}
        >
          <FaChevronDown size={14} />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden bg-[#FAF8F4]"
          >
            <ul className="px-4 sm:px-5 lg:px-7 py-4 sm:py-5 pl-[3.5rem] sm:pl-[4.25rem] lg:pl-[5rem] space-y-2 sm:space-y-2.5">
              {doc.items.map((item) => (
                <li key={item} className="flex items-start gap-2 sm:gap-2.5 text-gray-600 text-[12px] sm:text-[13.5px] lg:text-[14px] leading-relaxed">
                  <FaCheckCircle size={12} className="text-[#0877BA] mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function DocumentationSupportSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section
      className="relative w-full py-12 sm:py-24 overflow-hidden"
      style={{
        ...ROBOTO,
        backgroundImage: `url(${worldMapBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="max-w-4xl mx-auto px-4 xs:px-5 sm:px-10 xl:px-16">

        {/* HEADER */}
        <motion.div
          className="text-center mb-10 sm:mb-12 lg:mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="w-8 h-[2px] bg-[#0877BA]" />
            <span className="text-[#0877BA] text-[11px] sm:text-[12px] font-bold tracking-[0.25em] uppercase">
              Documentation Support
            </span>
            <span className="w-8 h-[2px] bg-[#0877BA]" />
          </div>
          <h2 className="text-[24px] xs:text-[28px] sm:text-[38px] lg:text-[42px] font-black text-[#0A0A0A] leading-tight mb-4">
            Every Document, Organized and Verified
          </h2>
          <p className="text-gray-500 text-[13px] sm:text-[14px] lg:text-[15px] max-w-xl mx-auto leading-relaxed">
            We review and prepare every paper your application needs, so nothing gets lost or rejected on a technicality.
          </p>
        </motion.div>

        {/* ACCORDION */}
        <div className="flex flex-col gap-2 sm:gap-3">
          {DOCUMENTS.map((doc, i) => (
            <AccordionItem
              key={doc.title}
              doc={doc}
              index={i}
              isOpen={openIndex === i}
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>

      </div>
    </section>
  );
}