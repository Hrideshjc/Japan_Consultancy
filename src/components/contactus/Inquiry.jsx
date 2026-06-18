import React from 'react';
import contactImage from '../../assets/contact.png';

export default function InquirySection() {
  const contactDetails = [
    {
      id: 1,
      title: 'Our Address',
      lines: ['Kathmandu, Baneswor', 'Nepal'],
      icon: (
        <svg className="w-5 h-5 text-[#0877BA]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      id: 2,
      title: 'Phone / Email',
      lines: ['Mobile: (+81) 3-4567-8900', 'Mail: contact@kizuna.com'],
      icon: (
        <svg className="w-5 h-5 text-[#0877BA]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
    },
    {
      id: 3,
      title: 'Hours of Operation',
      lines: ['Monday - Friday: 09:00 - 20:00', 'Sunday & Saturday: 10:00 - 22:00'],
      icon: (
        <svg className="w-5 h-5 text-[#0877BA]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  return (
    
    <section style={{ fontFamily: "'Roboto', sans-serif" }} className="bg-slate-50/50 py-4 lg:py-8 overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 lg:grid lg:grid-cols-12 lg:gap-16 items-center">
        
        {/* Left Side Content */}
        <div className="lg:col-span-6 space-y-4">
          <div className="space-y-4">
            {/* Top Tag */}
            <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-[2px] bg-[#0877BA]" />
            <span className="text-[#0877BA] text-[11px] sm:text-[12px] font-bold tracking-[0.25em] uppercase">
              Inquiry & Contact
            </span>
          </div>
            
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight leading-none">
              Your connection to <span className="text-[#0877BA] relative inline-block">Kizuna</span>
            </h2>
            
            <p className="text-sm sm:text-base text-slate-600 max-w-xl leading-relaxed pt-2">
              Have an inquiry or some feedback for us? Fill out the form below to contact our team. 
              For partnership and business development inquiries, please contact us at{' '}
              <a href="mailto:contact@kizuna.com" className="text-[#0877BA] font-semibold hover:underline decoration-[#F6C21F] decoration-2 underline-offset-4 transition-all">
                contact@kizuna.com
              </a>.
            </p>
          </div>

          {/* Info Cards Grid */}
          <div className="space-y-4">
            {contactDetails.map((detail) => (
              <div 
                key={detail.id}
                className="group relative flex flex-col sm:flex-row items-start gap-3 p-3 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
              >
                <div className="absolute inset-y-0 left-0 w-1 bg-transparent group-hover:bg-[#F6C21F] rounded-l-2xl transition-all duration-300" />
                
                <div className="flex-shrink-0 p-2 bg-slate-50 group-hover:bg-[#0877BA]/10 rounded-xl transition-colors duration-300">
                  {detail.icon}
                </div>
                
                <div className="space-y-1.5">
                  <h3 className="text-base font-bold text-slate-800 tracking-wide">
                    {detail.title}
                  </h3>
                  <div className="space-y-0.5 text-slate-500 text-xs sm:text-sm leading-relaxed font-normal">
                    {detail.lines.map((line, i) => (
                      <p key={i}>{line}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Image Column */}
        <div className="mt-12 lg:mt-0 lg:col-span-6 relative flex justify-center items-center">
          
          <div className="relative w-full max-w-lg lg:max-w-none ">
            <img 
              src={contactImage} 
              alt="Kizuna Connection Illustration" 
              
            />
          </div>
        </div>

      </div>
    </section>
  );
}