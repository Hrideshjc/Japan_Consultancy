import React from 'react';
import { motion } from 'framer-motion';
import { FaHome, FaPlaneArrival, FaCheckCircle, FaPlane } from 'react-icons/fa';

const ROBOTO = { fontFamily: "'Roboto', sans-serif" };

const SERVICES = [
  {
    icon: FaHome,
    title: 'Accommodation Assistance',
    desc: 'We help you secure safe, affordable housing near your university before you even land — from student dormitories to shared apartments.',
    items: ['Verified dormitory & apartment listings', 'Lease review and guarantor support', 'Budget-matched housing options'],
  },
  {
    icon: FaPlaneArrival,
    title: 'Airport Pickup & Settlement Support',
    desc: 'Your journey doesn\'t end at arrival. Our team meets you at the airport and helps you settle into daily life in Japan.',
    items: ['Airport pickup on arrival day', 'SIM card & bank account setup', 'Orientation on local life and transit'],
  },
];

export default function ArrivalSupportSection() {
  return (
    <section className="relative w-full bg-[#f6f1e8] py-12 sm:py-24 overflow-hidden" style={ROBOTO}>
      {/* left blue stripe */}
      <div className="absolute left-0 top-0 h-full w-1 bg-[#0877BA]" />

      {/* flying airplane animation */}
      <motion.div
        className="absolute top-6 sm:top-16 left-0 text-[#0877BA]/10 sm:text-[#0877BA]/15 pointer-events-none"
        initial={{ x: '-10vw', y: 0, rotate: 8 }}
        animate={{ x: '110vw', y: -30, rotate: 8 }}
        transition={{ duration: 14, repeat: Infinity, ease: 'linear', repeatDelay: 2 }}
      >
        <FaPlane size={32} className="sm:w-[42px] sm:h-[42px]" />
      </motion.div>

      {/* Watermarks */}
      <div
        className="absolute right-5 sm:right-10 top-5 sm:top-10 font-black text-[120px] sm:text-[220px] select-none pointer-events-none hidden xl:block"
        style={{ color: '#0877BA', opacity: 0.07, fontFamily: "'Roboto', sans-serif", lineHeight: 1 }}
      >
        背
      </div>
      <div
        className="absolute left-5 sm:left-10 top-5 sm:top-10 font-black text-[120px] sm:text-[220px] select-none pointer-events-none hidden xl:block"
        style={{ color: '#0877BA', opacity: 0.07, fontFamily: "'Roboto', sans-serif", lineHeight: 1 }}
      >
        景
      </div>

      <div className="max-w-7xl mx-auto px-4 xs:px-5 sm:px-10 xl:px-16">

        {/* HEADER */}
        <motion.div
          className="text-center mb-10 sm:mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="w-8 h-[2px] bg-[#0877BA]" />
            <span className="text-[#0877BA] text-[11px] sm:text-[12px] font-bold tracking-[0.25em] uppercase">
              Arrival Support
            </span>
            <span className="w-8 h-[2px] bg-[#0877BA]" />
          </div>
          <h2 className="text-[24px] xs:text-[28px] sm:text-[38px] lg:text-[42px] font-black text-[#0A0A0A] leading-tight">
            Settling In, Made Simple
          </h2>
        </motion.div>

        {/* TWO SERVICE CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {SERVICES.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                className="relative bg-[#FAF8F4] rounded-lg sm:rounded-2xl p-5 sm:p-7 lg:p-9 overflow-hidden"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.12 }}
              >

                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-full bg-[#0877BA] flex items-center justify-center mb-6">
                    <Icon size={22} className="text-white" />
                  </div>

                  <h3 className="text-[17px] sm:text-[19px] lg:text-[21px] font-black text-[#0A0A0A] mb-3">
                    {service.title}
                  </h3>

                  <p className="text-gray-500 text-[13px] sm:text-[13.5px] lg:text-[14.5px] leading-relaxed mb-5 sm:mb-6">
                    {service.desc}
                  </p>

                  <ul className="space-y-2 sm:space-y-2.5">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 sm:gap-2.5 text-gray-600 text-[12px] sm:text-[13px] lg:text-[13.5px] leading-snug sm:leading-normal">
                        <FaCheckCircle size={12} className="text-[#0877BA] mt-0.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}