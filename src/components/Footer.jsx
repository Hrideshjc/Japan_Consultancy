import { FaGraduationCap, FaMapMarkerAlt, FaEnvelope, FaPhone, FaArrowUp } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

import footerBg from "../assets/footer.jpg";

const NavCol = ({ title, links }) => (
  <div className="flex flex-col gap-3">
    <div className="flex items-center gap-2 mb-1">
      <span className="text-[10px] tracking-[0.25em] uppercase font-semibold text-[#0877BA]" style={{ fontFamily: "'Roboto', sans-serif" }}>{title}</span>
      <div className="flex-1 h-px bg-[#0877BA]/20" />
    </div>
    {links.map(({ label, sub }) => (
      <a key={label} href="#"
        className="group flex items-start gap-1.5 hover:text-[#0877BA] transition-colors duration-200">
        <FiArrowUpRight size={11} className="mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity text-[#0877BA] shrink-0" />
        <span className="text-[13px] leading-snug text-white group-hover:text-[#0877BA] transition-colors" style={{ fontFamily: "'Roboto', sans-serif" }}>
          {label}
          {sub && <span className="block text-[10px] text-white/40 tracking-wider mt-0.5 group-hover:text-[#0877BA]/60 transition-colors" style={{ fontFamily: "'Roboto', sans-serif" }}>{sub}</span>}
        </span>
      </a>
    ))}
  </div>
);

export default function KizunaFooter() {
  return (
    <footer
      style={{ fontFamily: "'Roboto', sans-serif" }}
      className="relative bg-[#0A0A0A] text-white overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${footerBg})` }}
      />

      <div className="relative z-10 w-full h-[3px] bg-gradient-to-r from-transparent via-[#0877BA] to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-14 pb-8">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

          <div className="sm:col-span-2 lg:col-span-1 flex flex-col gap-5">

            <a href="#" className="flex items-center gap-3 group w-fit">
              <div className="w-9 h-9 bg-[#0A0A0A] border border-[#0877BA]/40 flex items-center justify-center relative group-hover:bg-[#0877BA] transition-colors duration-300">
                <FaGraduationCap size={18} color="white" />
                <span className="absolute top-0 right-0 w-2 h-2 bg-[#F6C21F] group-hover:bg-white transition-colors duration-300" />
              </div>
              <div>
                <div className="text-[18px] font-black text-white leading-none tracking-tight" style={{ fontFamily: "'Roboto', sans-serif" }}>
                  KIZUNA<span className="text-[#0877BA] font-light">CONSULTING</span>
                </div>
                <div className="text-[9px] font-semibold tracking-[0.18em] text-gray-400 mt-0.5 uppercase" style={{ fontFamily: "'Roboto', sans-serif" }}>
                  Japan Education Gateway
                </div>
              </div>
            </a>

            <div className="border-l-2 border-[#0877BA]/30 pl-3">
              <p className="text-[11px] text-white/50 leading-relaxed tracking-widest" style={{ fontFamily: "'Roboto', sans-serif" }}>
                絆 — <em>Kizuna</em>
              </p>
              <p className="text-[12px] text-white/70 leading-relaxed mt-1" style={{ fontFamily: "'Roboto', sans-serif" }}>
                We bridge ambition with opportunity — connecting students to Japan's finest universities and futures.
              </p>
            </div>

            <div className="flex flex-col gap-2 mt-1">
              {[
                { icon: FaMapMarkerAlt, text: "Kathmandu, Nepal" },
                { icon: FaEnvelope, text: "info@kizunaconsulting.np" },
                { icon: FaPhone, text: "(+81) 3-4567-8900" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 text-[12px] text-white/60 hover:text-[#0877BA] transition-colors duration-200 cursor-default" style={{ fontFamily: "'Roboto', sans-serif" }}>
                  <Icon size={12} className="text-[#0877BA]/80 shrink-0" />
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
          <div className="relative z-10 w-full h-[2px] bg-gradient-to-r from-[#0877BA]/0 via-[#0877BA]/60 to-[#0877BA]/0" />
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-white/40">
          <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-start" style={{ fontFamily: "'Roboto', sans-serif" }}>
            <span>© 2025 Kizuna Consulting</span>
            <span className="hidden sm:inline text-[#0877BA]/30">|</span>
            <a href="#" className="hover:text-[#0877BA] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#0877BA] transition-colors">Terms of Service</a>
          </div>
          <div className="flex items-center gap-1 tracking-widest text-white/30" style={{ fontFamily: "'Roboto', sans-serif" }}>
            <span>ハリデシュ・シュレスタによって作成されたウェブページ</span>
          </div>
        </div>
      </div>

    </footer>
  );
}