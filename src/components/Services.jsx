import React from 'react'
import { motion } from 'framer-motion'

const services = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    ),
    title: 'Business Planning',
    description: 'Lorem ipsum dolor sit amet consectetur in congue enim vitae pretium porttitor.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536M9 11l6-6 3 3-6 6H9v-3z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 17.25V21h3.75l9.06-9.06-3.75-3.75L3 17.25z" />
      </svg>
    ),
    title: 'Sales & Marketing',
    description: 'Lorem ipsum dolor sit amet consectetur in congue enim vitae pretium porttitor.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Drive Revenue Growth',
    description: 'Lorem ipsum dolor sit amet consectetur in congue enim vitae pretium porttitor.',
  }, 
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    title: 'Business Strategy',
    description: 'Lorem ipsum dolor sit amet consectetur in congue enim vitae pretium porttitor.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10" />
      </svg>
    ),
    title: 'Financial Advices',
    description: 'Lorem ipsum dolor sit amet consectetur in congue enim vitae pretium porttitor.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2v-4M9 21H5a2 2 0 01-2-2v-4m0 0h18" />
      </svg>
    ),
    title: 'Operating Model Design',
    description: 'Lorem ipsum dolor sit amet consectetur in congue enim vitae pretium porttitor.',
  },
]

const petals = [
  { left: '8%',  delay: 0   },
  { left: '22%', delay: 2   },
  { left: '50%', delay: 2.5 },
  { left: '72%', delay: 1.5 },
  { left: '88%', delay: 3   },
]

export default function Services() {
  return (
    <section id="services" className="relative py-20 bg-white overflow-hidden">

      

      <div className="mx-auto max-w-5xl px-6">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-[#BC002D] text-sm font-semibold tracking-widest uppercase mb-3">
            ---- サービス内容 ----
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 leading-tight">
            Explore our wide<br className="hidden sm:block" /> range of services
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12 mb-14">
          {services.map((service) => (
            <div key={service.title} className="flex flex-col gap-3">
              <div className="text-[#BC002D]">
                {service.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                {service.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="flex items-center gap-2 bg-[#BC002D] hover:bg-[#BC002D] active:bg-[#BC002D] text-white text-sm font-semibold px-6 py-3 rounded-full transition-colors duration-200">
            GET A QUOTE
            <span className="flex items-center justify-center w-6 h-6 bg-white rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 text-[#BC002D]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </button>
          <button className="text-slate-800 hover:text-[#BC002D] border border-slate-300 hover:border-[#BC002D] text-sm font-semibold px-6 py-3 rounded-full transition-colors duration-200">
            BROWSE ALL SERVICES
          </button>
        </div>

      </div>
    </section>
  )
}