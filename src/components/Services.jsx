import React from 'react'
import { motion } from 'framer-motion'
import { MdOutlineBusinessCenter, MdOutlineCampaign, MdOutlineTrendingUp, MdOutlineLightbulb, MdOutlineAccountBalance, MdOutlineAccountTree } from 'react-icons/md'
import { HiArrowRight } from 'react-icons/hi'
import { TbGridDots } from 'react-icons/tb'

const services = [
  {
    icon: <MdOutlineBusinessCenter className="w-7 h-7" />,
    title: 'University Placement',
    description: 'We match you with the right Japanese university — from Tokyo to Kyoto — based on your academic background, goals, and budget.',
  },
  {
    icon: <MdOutlineCampaign className="w-7 h-7" />,
    title: 'JLPT Preparation',
    description: 'Structured coaching for JLPT N5 to N2 levels, helping you meet language requirements and thrive in a Japanese academic environment.',
  },
  {
    icon: <MdOutlineTrendingUp className="w-7 h-7" />,
    title: 'Scholarship Guidance',
    description: 'We identify scholarships you qualify for — MEXT, JASSO, and university grants — and guide you through every step of the application.',
  },
  {
    icon: <MdOutlineLightbulb className="w-7 h-7" />,
    title: 'Visa Assistance',
    description: 'Our consultants handle your student visa documentation end-to-end, with a 98% approval rate across hundreds of successful applications.',
  },
  {
    icon: <MdOutlineAccountBalance className="w-7 h-7" />,
    title: 'Accommodation Support',
    description: 'From dormitories to private apartments, we help you find safe and affordable housing near your campus before you even arrive.',
  },
  {
    icon: <MdOutlineAccountTree className="w-7 h-7" />,
    title: 'Career Counselling',
    description: 'Post-graduation support to help you navigate Japan\'s job market — resume building, interview prep, and connecting with top employers.',
  },
]

export default function Services() {
  return (
    <section id="services" className="relative py-20 bg-white overflow-hidden" style={{ fontFamily: "'Roboto', sans-serif" }}>

      <div className="mx-auto max-w-5xl px-6">

        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-[#0877BA]" />
            <div className="flex items-center gap-1.5">
              <TbGridDots size={13} className="text-[#0877BA]" />
              <p className="text-[#0877BA] text-xs font-bold tracking-[0.2em] uppercase" style={{ fontFamily: "'Roboto', sans-serif" }}>
                Our Services
              </p>
              <TbGridDots size={13} className="text-[#0877BA]" />
            </div>
            <div className="h-px w-8 bg-[#0877BA]" />
          </div>

          <h2
            className="text-4xl sm:text-5xl font-extrabold text-slate-900 leading-tight"
            style={{ fontFamily: "'Roboto', sans-serif" }}
          >
            Everything you need to<br className="hidden sm:block" /> study in Japan
          </h2>

          {/* yellow accent underline */}
          <div className="mt-4 mx-auto w-16 h-1 bg-[#F6C21F] rounded-full" />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12 mb-14">
          {services.map((service) => (
            <motion.div
              key={service.title}
              className="group flex flex-col gap-3 p-5 border border-transparent hover:border-[#0877BA]/20 hover:shadow-md transition-all duration-300 rounded-sm relative"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25 }}
            >
              {/* yellow top accent on hover */}
              <span className="absolute top-0 left-0 h-[3px] w-0 bg-[#F6C21F] group-hover:w-full transition-all duration-300 rounded-t-sm" />

              <div className="w-12 h-12 rounded-sm bg-[#0877BA]/10 flex items-center justify-center text-[#0877BA] group-hover:bg-[#0877BA] group-hover:text-white transition-all duration-300">
                {service.icon}
              </div>

              <h3 className="text-lg font-bold text-slate-900" style={{ fontFamily: "'Roboto', sans-serif" }}>
                {service.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed" style={{ fontFamily: "'Roboto', sans-serif" }}>
                {service.description}
              </p>

              <div className="flex items-center gap-1 text-[#0877BA] text-xs font-semibold mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ fontFamily: "'Roboto', sans-serif" }}>
                Learn more <HiArrowRight size={13} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            className="flex items-center gap-2 bg-[#0877BA] hover:bg-[#065f99] text-white text-sm font-semibold px-6 py-3 rounded-full transition-colors duration-200"
            style={{ fontFamily: "'Roboto', sans-serif" }}
          >
            GET A QUOTE
            <span className="flex items-center justify-center w-6 h-6 bg-[#F6C21F] rounded-full">
              <HiArrowRight className="w-3.5 h-3.5 text-white" />
            </span>
          </button>
          <button
            className="text-slate-800 hover:text-[#0877BA] border border-slate-300 hover:border-[#0877BA] text-sm font-semibold px-6 py-3 rounded-full transition-colors duration-200"
            style={{ fontFamily: "'Roboto', sans-serif" }}
          >
            BROWSE ALL SERVICES
          </button>
        </div>

      </div>
    </section>
  )
}