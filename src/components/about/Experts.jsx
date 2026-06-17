import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram } from 'react-icons/fa';

import member1 from '../../assets/team1.jpg';
import member2 from '../../assets/team2.jpg';
import member3 from '../../assets/team3.jpg';
import member4 from '../../assets/team4.jpg';

const ROBOTO = { fontFamily: "'Roboto', sans-serif" };

const TEAM = [
  { img: member1, name: 'Hiroshi Tanaka', role: 'CEO & Founder' },
  { img: member2, name: 'Yuki Sato', role: 'PR & Consulting' },
  { img: member3, name: 'Kenji Watanabe', role: 'Senior Consultant' },
  { img: member4, name: 'Aiko Nakamura', role: 'Office Manager' },
];

const SOCIALS = [FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram];

function TeamCard({ member, index }) {

    
  return (

    

    <motion.div
      className="group relative bg-white overflow-hidden"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.1 }}
    >
      {/* photo */}
      <div className="w-full h-[260px] sm:h-[300px] overflow-hidden">
        <img
          src={member.img}
          alt={member.name}
          className="w-full h-full object-cover"
        />
      </div>

      

      {/* info block with expanding blue border */}
      <div className="relative px-6 py-6">
        
        <span className="absolute inset-0 bg-[#0877BA] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.65,0,0.35,1)]" />
        
        <span className="absolute left-0 top-0 h-full w-[4px] bg-[#0877BA] group-hover:opacity-0 transition-opacity duration-300" />

        <div className="relative z-10">
          <h3 className="text-[18px] sm:text-[20px] font-black text-[#0A0A0A] group-hover:text-white transition-colors duration-300 mb-1">
            {member.name}
          </h3>
          <p className="text-[13px] sm:text-[14px] text-gray-500 group-hover:text-white/80 transition-colors duration-300 mb-4">
            {member.role}
          </p>

          {/* socials */}
          <div className="flex items-center gap-2.5">
            {SOCIALS.map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-8 h-8 rounded-full border border-gray-200 group-hover:border-white/40 flex items-center justify-center text-gray-500 group-hover:text-white hover:!bg-white hover:!text-[#0877BA] transition-colors duration-300"
              >
                <Icon size={12} />
              </a>
            ))}
          </div>

            

        </div>
      </div>
    </motion.div>
  );
}

export default function TeamSection() {
  return (
    <section className="relative w-full bg-[#FAF8F4] py-16 sm:py-24" style={ROBOTO}>
      <div className="max-w-7xl mx-auto px-6 sm:px-10 xl:px-16">
        {/* Watermarks */}
        <div
          className="absolute right-10 top-1/2 -translate-y-1/2 font-black text-[220px] select-none pointer-events-none hidden xl:block"
          style={{ color: '#0877BA', opacity: 0.06, fontFamily: "'Roboto', sans-serif", lineHeight: 1 }}
        >
          背
        </div>
        <div
          className="absolute left-10 top-1/2 -translate-y-1/2 font-black text-[220px] select-none pointer-events-none hidden xl:block"
          style={{ color: '#0877BA', opacity: 0.06, fontFamily: "'Roboto', sans-serif", lineHeight: 1 }}
        >
          景
        </div>

        {/* HEADER */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="w-8 h-[2px] bg-[#0877BA]" />
            <span className="text-[#0877BA] text-[11px] sm:text-[12px] font-bold tracking-[0.25em] uppercase">
              Our Experts
            </span>
            <span className="w-8 h-[2px] bg-[#0877BA]" />
          </div>
          <h2 className="text-[28px] sm:text-[38px] lg:text-[44px] font-black text-[#0A0A0A] leading-tight">
            Meet the Team Guiding Your <br className="hidden sm:block" />
            Journey to Japan
          </h2>
        </motion.div>

        {/* TEAM GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {TEAM.map((member, i) => (
            <TeamCard key={member.name} member={member} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}