import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, Globe, ChevronDown, Search, GraduationCap, Menu, X, UserCheck, ArrowRight } from 'lucide-react';

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
  const [scrolled,    setScrolled]    = useState(false);
  const [mobileOpen,  setMobileOpen]  = useState(false);
  const [activeDD,    setActiveDD]    = useState(null);
  const [searchOpen,  setSearchOpen]  = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50">

      {/* TOP BAR */}
      <div
        className="w-full bg-[#0A0A0A] border-b border-white/10 overflow-hidden transition-all duration-300"
        style={{ maxHeight: scrolled ? '0px' : '38px', opacity: scrolled ? 0 : 1 }}
      >
        <div className="max-w-7xl mx-auto px-6 h-[38px] flex items-center justify-between">
          {/* left info */}
          <div className="flex items-center gap-6">
            <a href="tel:+81345678900" className="flex items-center gap-1.5 text-[11px] text-gray-400 hover:text-white transition-colors">
              <Phone size={11} color="#BC002D" />
              (+81) 3-4567-8900
            </a>
            <span className="text-gray-700 hidden sm:block">|</span>
            <a href="mailto:info@kizunaconsulting.np" className="hidden sm:flex items-center gap-1.5 text-[11px] text-gray-400 hover:text-white transition-colors">
              <Mail size={11} color="#BC002D" />
              info@kizunaconsulting.np
            </a>
          </div>
          {/* right actions */}
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-1 text-[11px] text-gray-400 hover:text-white transition-colors">
              <Globe size={11} color="#BC002D" />
              English <ChevronDown size={10} />
            </button>
            <a
              href="#apply"
              className="flex items-center gap-1.5 bg-[#BC002D] text-white text-[10px] font-bold uppercase tracking-wider px-4 py-1.5 hover:bg-white hover:text-[#BC002D] transition-colors duration-200"
            >
              <UserCheck size={11} />
              Free Evaluation
            </a>
          </div>
        </div>
      </div>

      {/*MAIN NAV */}
      <nav
        className="w-full transition-all duration-300"
        style={{
          background:     'rgba(255,255,255,0.88)',
          backdropFilter: 'blur(20px)',
          borderBottom:   '1px solid rgba(0,0,0,0.08)',
          boxShadow:      scrolled ? '0 4px 24px rgba(0,0,0,0.08)' : 'none',
          padding:        scrolled ? '12px 0' : '16px 0',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

          {/* LOGO */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-9 h-9 bg-[#0A0A0A] flex items-center justify-center relative group-hover:bg-[#BC002D] transition-colors duration-300">
              <GraduationCap size={18} color="white" />
              <span className="absolute top-0 right-0 w-2 h-2 bg-[#BC002D] group-hover:bg-white transition-colors duration-300" />
            </div>
            <div>
              <div className="text-[18px] font-black text-[#0A0A0A] leading-none tracking-tight">
                KIZUNA<span className="text-[#BC002D] font-light">CONSULTING</span>
              </div>
              <div className="text-[9px] font-semibold tracking-[0.18em] text-gray-400 mt-0.5 uppercase">
                Japan Education Gateway
              </div>
            </div>
          </a>

          
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map(link => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => link.hasDropdown && setActiveDD(link.name)}
                onMouseLeave={() => setActiveDD(null)}
              >
                
                <button className="relative flex items-center gap-1 px-3 py-2 text-[13.5px] font-semibold text-[#0A0A0A] hover:text-[#BC002D] transition-colors duration-200 group">
                  {link.name}
                  {link.hasDropdown && (
                    <ChevronDown
                      size={13}
                      className="transition-transform duration-200"
                      style={{ transform: activeDD === link.name ? 'rotate(180deg)' : 'rotate(0deg)' }}
                    />
                  )}
                  {/* underline */}
                  <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#BC002D] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
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
                      {/* red top line */}
                      <div className="h-[3px] bg-[#BC002D]" />
                      {DROPDOWNS[link.name]?.map(item => (
                        <a
                          key={item}
                          href="#"
                          className="flex items-center justify-between px-5 py-2.5 text-[13px] text-gray-700 hover:bg-[#BC002D] hover:text-white transition-colors duration-150"
                        >
                          {item}
                          <ArrowRight size={12} />
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          
          <div className="flex items-center gap-2">

            
            <button
              onClick={() => setSearchOpen(p => !p)}
              className="p-2 text-[#0A0A0A] hover:text-[#BC002D] transition-colors"
            >
              {searchOpen ? <X size={19} /> : <Search size={19} />}
            </button>

            
            <button className="relative p-2 text-[#0A0A0A] hover:text-[#BC002D] transition-colors">
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-[#BC002D]" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-[#BC002D] animate-ping" />
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
              </svg>
            </button>

            
            <button
              onClick={() => setMobileOpen(p => !p)}
              className="p-2 text-[#0A0A0A] hover:text-[#BC002D] transition-colors"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
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
                <Search size={15} className="text-gray-400" />
                <input
                  autoFocus
                  type="text"
                  placeholder="Search programs, universities, visas..."
                  className="flex-1 bg-transparent text-[14px] text-gray-800 placeholder-gray-400 outline-none"
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
            className="fixed inset-0 bg-[#0A0A0A] z-40 lg:hidden flex flex-col"
          >
            {/* close button */}
            <button
              onClick={() => setMobileOpen(false)}
              className="absolute top-5 right-5 p-2 text-gray-400 hover:text-white"
            >
              <X size={24} />
            </button>

            {/* logo */}
            <div className="px-8 pt-14 pb-8 border-b border-white/10">
              <div className="text-white font-black text-xl tracking-tight">
                KIZUNA<span className="text-[#BC002D] font-light">CONSULTING</span>
              </div>
              <div className="text-[9px] text-gray-600 tracking-widest mt-1 uppercase">Japan Education Gateway</div>
            </div>

            
            <div className="flex-1 px-8 py-6 flex flex-col gap-0 overflow-y-auto">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={`#${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="flex justify-between items-center py-4 border-b border-white/8 text-white text-[17px] font-semibold hover:text-[#BC002D] transition-colors"
                  style={{ borderColor: 'rgba(255,255,255,0.07)' }}
                >
                  {link.name}
                  <ArrowRight size={15} className="text-gray-600" />
                </motion.a>
              ))}
            </div>

            
            <div className="px-8 py-6 border-t border-white/10">
              <a
                href="#apply"
                onClick={() => setMobileOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-4 bg-[#BC002D] text-white font-bold uppercase tracking-wider text-sm hover:bg-white hover:text-[#BC002D] transition-colors duration-200"
              >
                <UserCheck size={16} />
                Free Evaluation
              </a>
              <p className="text-center text-[11px] text-gray-600 mt-4">
                <Phone size={10} className="inline mr-1 text-[#BC002D]" />
                (+81) 3-4567-8900
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </header>
  );
}