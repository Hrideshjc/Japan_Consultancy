import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaPhone, FaEnvelope, FaGlobe, FaChevronDown,
  FaSearch, FaGraduationCap, FaBars, FaTimes,
  FaUserCheck, FaArrowRight, FaClipboardList
} from 'react-icons/fa';


const BLUE   = '#0877BA';
const YELLOW = '#F6C21F';
const BLACK  = '#0A0A0A';

const NAV_LINKS = [
  { name: 'Home',            hasDropdown: true  },
  { name: 'About Us',        hasDropdown: false },
  { name: 'Services',        hasDropdown: true  },
  { name: 'Study Programs',  hasDropdown: true  },
  { name: 'Success Stories', hasDropdown: false },
  { name: 'Contact Us',      hasDropdown: false },
];

const DROPDOWNS = {
  'Home':           ['Landing Page', 'About Preview'],
  'Services':       ['Visa Guidance', 'University Matching', 'Language Support', 'Career Counselling'],
  'Study Programs': ['Undergraduate', 'Postgraduate', 'Language Schools', 'Vocational Training'],
};

export default function Navbar() {
  const [scrolled,   setScrolled]   = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDD,   setActiveDD]   = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
     
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;600;700;900&display=swap');
        * { font-family: 'Roboto', sans-serif; }
      `}</style>

      <header style={{ fontFamily: "'Roboto', sans-serif" }} className="fixed top-0 left-0 w-full z-50">

        {/* TOP BAR */}
        <div
          className="w-full overflow-hidden transition-all duration-300"
          style={{
            maxHeight:  scrolled ? '0px' : '38px',
            opacity:    scrolled ? 0 : 1,
            background: BLUE,
            borderBottom: '1px solid rgba(255,255,255,0.1)',
          }}
        >
          <div className="max-w-7xl mx-auto px-6 h-[38px] flex items-center justify-between">

            {/* left */}
            <div className="flex items-center gap-6">
              <a href="tel:+81345678900"
                className="flex items-center gap-1.5 text-[11px] text-blue-100 hover:text-white transition-colors"
                style={{ fontFamily: "'Roboto', sans-serif" }}>
                <FaPhone size={10} color={YELLOW} />
                (+81) 3-4567-8900
              </a>
              <span className="text-blue-300 hidden sm:block">|</span>
              <a href="mailto:info@kizunaconsulting.np"
                className="hidden sm:flex items-center gap-1.5 text-[11px] text-blue-100 hover:text-white transition-colors"
                style={{ fontFamily: "'Roboto', sans-serif" }}>
                <FaEnvelope size={10} color={YELLOW} />
                info@kizunaconsulting.np
              </a>
            </div>

            {/* right */}
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-1 text-[11px] text-blue-100 hover:text-white transition-colors"
                style={{ fontFamily: "'Roboto', sans-serif" }}>
                <FaGlobe size={10} color={YELLOW} />
                English <FaChevronDown size={8} className="ml-0.5" />
              </button>
              <a
                href="#apply"
                className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider px-4 py-1.5 transition-colors duration-200"
                style={{ background: YELLOW, color: BLACK, fontFamily: "'Roboto', sans-serif" }}
                onMouseEnter={e => { e.currentTarget.style.background = 'white'; e.currentTarget.style.color = BLUE; }}
                onMouseLeave={e => { e.currentTarget.style.background = YELLOW; e.currentTarget.style.color = BLACK; }}
              >
                <FaUserCheck size={10} />
                Free Evaluation
              </a>
            </div>
          </div>
        </div>

        {/* MAIN NAV */}
        <nav
          className="w-full transition-all duration-300"
          style={{
            background:     'rgba(255,255,255,0.92)',
            backdropFilter: 'blur(20px)',
            borderBottom:   '1px solid rgba(0,0,0,0.08)',
            boxShadow:      scrolled ? '0 4px 24px rgba(0,0,0,0.08)' : 'none',
            padding:        scrolled ? '12px 0' : '16px 0',
            fontFamily:     "'Roboto', sans-serif",
          }}
        >
          <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

            {/* LOGO */}
            <a href="#" className="flex items-center gap-3 group">
              <div
                className="w-9 h-9 flex items-center justify-center relative transition-colors duration-300"
                style={{ background: BLACK }}
                onMouseEnter={e => e.currentTarget.style.background = BLUE}
                onMouseLeave={e => e.currentTarget.style.background = BLACK}
              >
                <FaGraduationCap size={17} color="white" />
                <span
                  className="absolute top-0 right-0 w-2 h-2 transition-colors duration-300"
                  style={{ background: YELLOW }}
                />
              </div>
              <div>
                {/* logo wordmark */}
                <div className="text-[18px] font-black text-[#0A0A0A] leading-none tracking-tight"
                  style={{ fontFamily: "'Roboto', sans-serif" }}>
                  KIZUNA
                  <span className="font-bold" style={{ color: BLUE }}>CONSULTING</span>
                </div>
                <div className="text-[9px] font-semibold tracking-[0.18em] text-gray-400 mt-0.5 uppercase"
                  style={{ fontFamily: "'Roboto', sans-serif" }}>
                  Japan Education Gateway
                </div>
              </div>
            </a>

            {/* DESKTOP LINKS */}
            <div className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map(link => (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => link.hasDropdown && setActiveDD(link.name)}
                  onMouseLeave={() => setActiveDD(null)}
                >
                  <button className="relative flex items-center gap-1 px-3 py-2 text-[13.5px] font-semibold text-[#0A0A0A] transition-colors duration-200 group"
                    style={{ fontFamily: "'Roboto', sans-serif" }}
                    onMouseEnter={e => e.currentTarget.style.color = BLUE}
                    onMouseLeave={e => e.currentTarget.style.color = BLACK}
                  >
                    {link.name}
                    {link.hasDropdown && (
                      <FaChevronDown
                        size={10}
                        className="transition-transform duration-200"
                        style={{ transform: activeDD === link.name ? 'rotate(180deg)' : 'rotate(0deg)' }}
                      />
                    )}
                    {/* underline */}
                    <span
                      className="absolute bottom-0 left-3 right-3 h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                      style={{ background: BLUE }}
                    />
                  </button>

                  {/* DROPDOWN */}
                  <AnimatePresence>
                    {link.hasDropdown && activeDD === link.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 4 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 mt-1 min-w-[200px] bg-white shadow-xl border border-gray-100 overflow-hidden z-50"
                        onMouseEnter={() => setActiveDD(link.name)}
                        onMouseLeave={() => setActiveDD(null)}
                      >
                        {/* blue top line */}
                        <div className="h-[3px]" style={{ background: BLUE }} />
                        {DROPDOWNS[link.name]?.map(item => (
                          <a
                            key={item}
                            href="#"
                            className="flex items-center justify-between px-5 py-2.5 text-[13px] text-gray-700 transition-colors duration-150"
                            style={{ fontFamily: "'Roboto', sans-serif" }}
                            onMouseEnter={e => { e.currentTarget.style.background = BLUE; e.currentTarget.style.color = 'white'; }}
                            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#374151'; }}
                          >
                            {item}
                            <FaArrowRight size={10} />
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* RIGHT ICONS */}
            <div className="flex items-center gap-2">

              {/* search */}
              <button
                onClick={() => setSearchOpen(p => !p)}
                className="p-2 transition-colors"
                style={{ color: BLACK }}
                onMouseEnter={e => e.currentTarget.style.color = BLUE}
                onMouseLeave={e => e.currentTarget.style.color = BLACK}
              >
                {searchOpen ? <FaTimes size={17} /> : <FaSearch size={17} />}
              </button>

              {/* tracker */}
              <button
                className="relative p-2 transition-colors"
                style={{ color: BLACK }}
                onMouseEnter={e => e.currentTarget.style.color = BLUE}
                onMouseLeave={e => e.currentTarget.style.color = BLACK}
              >
                <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full" style={{ background: YELLOW }} />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full animate-ping" style={{ background: YELLOW }} />
                <FaClipboardList size={18} />
              </button>

              {/* hamburger */}
              <button
                onClick={() => setMobileOpen(p => !p)}
                className="p-2 transition-colors"
                style={{ color: BLACK }}
                onMouseEnter={e => e.currentTarget.style.color = BLUE}
                onMouseLeave={e => e.currentTarget.style.color = BLACK}
              >
                {mobileOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
              </button>
            </div>
          </div>

          {/* SEARCH BAR */}
          <AnimatePresence>
            {searchOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden border-t border-gray-100"
              >
                <div className="max-w-7xl mx-auto px-6 py-3 flex items-center gap-3">
                  <FaSearch size={13} className="text-gray-400" />
                  <input
                    autoFocus
                    type="text"
                    placeholder="Search programs, universities, visas..."
                    className="flex-1 bg-transparent text-[14px] text-gray-800 placeholder-gray-400 outline-none"
                    style={{ fontFamily: "'Roboto', sans-serif" }}
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>

        
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
              className="fixed inset-0 z-40 lg:hidden flex flex-col"
              style={{ background: BLACK, fontFamily: "'Roboto', sans-serif" }}
            >
              <button
                onClick={() => setMobileOpen(false)}
                className="absolute top-5 right-5 p-2 text-gray-400 hover:text-white"
              >
                <FaTimes size={22} />
              </button>

              {/* logo in drawer */}
              <div className="px-8 pt-14 pb-8 border-b border-white/10">
                <div className="text-white font-black text-xl tracking-tight"
                  style={{ fontFamily: "'Roboto', sans-serif" }}>
                  KIZUNA<span className="font-bold" style={{ color: BLUE }}>CONSULTING</span>
                </div>
                <div className="text-[9px] text-gray-500 tracking-widest mt-1 uppercase"
                  style={{ fontFamily: "'Roboto', sans-serif" }}>
                  Japan Education Gateway
                </div>
              </div>

              {/* links */}
              <div className="flex-1 px-8 py-6 flex flex-col overflow-y-auto">
                {NAV_LINKS.map((link, i) => (
                  <motion.a
                    key={link.name}
                    href={`#${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                    onClick={() => setMobileOpen(false)}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="flex justify-between items-center py-4 text-white text-[17px] font-semibold transition-colors"
                    style={{ borderBottom: '1px solid rgba(255,255,255,0.07)', fontFamily: "'Roboto', sans-serif" }}
                    onMouseEnter={e => e.currentTarget.style.color = YELLOW}
                    onMouseLeave={e => e.currentTarget.style.color = 'white'}
                  >
                    {link.name}
                    <FaArrowRight size={13} className="text-gray-600" />
                  </motion.a>
                ))}
              </div>

              {/* bottom CTA */}
              <div className="px-8 py-6 border-t border-white/10">
                <a
                  href="#apply"
                  onClick={() => setMobileOpen(false)}
                  className="w-full flex items-center justify-center gap-2 py-4 font-bold uppercase tracking-wider text-sm transition-colors duration-200"
                  style={{ background: BLUE, color: 'white', fontFamily: "'Roboto', sans-serif" }}
                  onMouseEnter={e => { e.currentTarget.style.background = YELLOW; e.currentTarget.style.color = BLACK; }}
                  onMouseLeave={e => { e.currentTarget.style.background = BLUE; e.currentTarget.style.color = 'white'; }}
                >
                  <FaUserCheck size={15} />
                  Free Evaluation
                </a>
                <p className="text-center text-[11px] text-gray-600 mt-4 flex items-center justify-center gap-1"
                  style={{ fontFamily: "'Roboto', sans-serif" }}>
                  <FaPhone size={9} style={{ color: YELLOW }} />
                  (+81) 3-4567-8900
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </header>
    </>
  );
}