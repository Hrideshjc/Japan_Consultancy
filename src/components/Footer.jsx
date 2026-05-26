import { GraduationCap, MapPin, Mail, Phone, ExternalLink, ArrowUpRight } from "lucide-react";

import footerBg from "../assets/footer.jpg";
import { sub } from "framer-motion/client";

const NavCol = ({ title, links }) => (
  <div className="flex flex-col gap-3">
    <div className="flex items-center gap-2 mb-1">
      <span className="text-[10px] tracking-[0.25em] uppercase font-semibold text-[#BC002D]">{title}</span>
      <div className="flex-1 h-px bg-[#BC002D]/20" />
    </div>
    {links.map(({ label, sub }) => (
      <a key={label} href="#"
        className="group flex items-start gap-1.5 hover:text-[#BC002D] transition-colors duration-200">
        <ArrowUpRight size={11} className="mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity text-[#BC002D] shrink-0" />
        <span className="text-[13px] leading-snug text-white group-hover:text-[#BC002D] transition-colors">
          {label}
          {sub && <span className="block text-[10px] text-white/40 tracking-wider mt-0.5 group-hover:text-[#BC002D]/60 transition-colors">{sub}</span>}
        </span>
      </a>
    ))}
  </div>
);

export default function KizunaFooter() {
  return (
    <footer
      style={{ fontFamily: "'Noto Serif JP', serif" }}
      className="relative bg-[#0A0A0A] text-white overflow-hidden"
    >
      
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${footerBg})` }}
      />
    

      
      <div className="relative z-10 w-full h-[3px] bg-gradient-to-r from-transparent via-[#BC002D] to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-14 pb-8">

        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

          
          <div className="sm:col-span-2 lg:col-span-1 flex flex-col gap-5">
            
            <a href="#" className="flex items-center gap-3 group w-fit">
              <div className="w-9 h-9 bg-[#0A0A0A] border border-[#BC002D]/40 flex items-center justify-center relative group-hover:bg-[#BC002D] transition-colors duration-300">
                <GraduationCap size={18} color="white" />
                <span className="absolute top-0 right-0 w-2 h-2 bg-[#BC002D] group-hover:bg-white transition-colors duration-300" />
              </div>
              <div>
                <div className="text-[18px] font-black text-white leading-none tracking-tight">
                  KIZUNA<span className="text-[#BC002D] font-light">CONSULTING</span>
                </div>
                <div className="text-[9px] font-semibold tracking-[0.18em] text-gray-400 mt-0.5 uppercase">
                  Japan Education Gateway
                </div>
              </div>
            </a>

            
            <div className="border-l-2 border-[#BC002D]/30 pl-3">
              <p className="text-[11px] text-white/50 leading-relaxed tracking-widest">
                絆 — <em>Kizuna</em>
              </p>
              <p className="text-[12px] text-white/70 leading-relaxed mt-1">
                We bridge ambition with opportunity — connecting students to Japan's finest universities and futures.
              </p>
            </div>

            
            <div className="flex flex-col gap-2 mt-1">
              {[
                { icon: MapPin, text: "Kathmandu, Nepal" },
                { icon: Mail, text: "info@kizunaconsulting.np" },
                { icon: Phone, text: "(+81) 3-4567-8900" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 text-[12px] text-white/60 hover:text-[#BC002D] transition-colors duration-200 cursor-default">
                  <Icon size={12} className="text-[#BC002D]/80 shrink-0" />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>

          
          <NavCol title="Services" links={[
            { label: "University Placement", sub: "大学進学支援" },
            { label: "JLPT Preparation", sub: "日本語能力試験" },
            { label: "Visa Assistance", sub: "ビザ申請サポート" },
            { label: "Career Guidance", sub: "キャリア相談" },
          ]} />

          <NavCol title="Destinations" links={[
            { label: "Tokyo Universities", sub: "東京" },
            { label: "Kyoto & Osaka", sub: "京都・大阪" },
            { label: "Hokkaido Region", sub: "北海道" },
            { label: "Language Schools", sub: "語学学校" },
          ]} />

          <NavCol title="Connect" links={[
            { label: "Free Consultation", sub: "無料相談" },
            { label: "Student Stories", sub: "学生の声" },
            { label: "Partner Universities", sub: "提携大学" },
            { label: "Blog & Resources", sub: "ブログ・リソース" },
          ]} />
        </div>

   <div className="py-8 w-full">
  <div className="relative z-10 w-full h-[2px] bg-gradient-to-r from-[#BC002D]/0 via-[#BC002D]/60 to-[#BC002D]/0" />
</div>


       
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-white/40">
          <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-start">
            <span>© 2025 Kizuna Consulting</span>
            <span className="hidden sm:inline text-[#BC002D]/30">|</span>
            <a href="#" className="hover:text-[#BC002D] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#BC002D] transition-colors">Terms of Service</a>
          </div>
          <div className="flex items-center gap-1 tracking-widest text-white/30">
            <span>ハリデシュ・シュレスタによって作成されたウェブページ</span>
          </div>
        </div>
      </div>

     </footer>
  );
}