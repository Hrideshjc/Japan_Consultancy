import { useState, useEffect, useRef } from "react";
import { Send, Loader2, Check, User, Mail, Tag, Phone, MessageSquare, Sparkles } from "lucide-react";
import { GiFlowerEmblem } from 'react-icons/gi';
import { motion } from 'framer-motion';

const BLUE = "#0877BA";
const YELLOW = "#F6C21F";

function FloatField({ icon: Icon, label, name, type = "text", value, onChange, error, textarea, rows }) {
  const [focused, setFocused] = useState(false);
  const active = focused || value.length > 0;
  const Tag = textarea ? "textarea" : "input";

  return (
    <div className="relative">
      <div
        className={`group relative rounded-xl border bg-white transition-all duration-300 ${
          error
            ? "border-red-400"
            : focused
            ? "border-transparent shadow-[0_0_0_3px_rgba(8,119,186,0.15)]"
            : "border-slate-200 hover:border-slate-300"
        }`}
        style={focused && !error ? { boxShadow: `0 0 0 3px rgba(8,119,186,0.15)`, borderColor: BLUE } : {}}
      >
        <label
          htmlFor={name}
          className={`pointer-events-none absolute left-11 flex items-center gap-1 font-medium transition-all duration-200 ${
            active ? "top-2 text-[11px]" : "top-1/2 -translate-y-1/2 text-sm"
          }`}
          style={{ color: active ? BLUE : "#94A3B8" }}
        >
          {label}
        </label>

        <Icon
          size={17}
          className="absolute left-4 top-[18px] transition-colors duration-200"
          style={{ color: focused ? BLUE : "#94A3B8" }}
        />

        <Tag
          id={name}
          name={name}
          type={!textarea ? type : undefined}
          rows={textarea ? rows : undefined}
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className={`w-full resize-none rounded-xl bg-transparent pl-11 pr-4 text-[14.5px] text-slate-800 outline-none ${
            textarea ? "pb-3 pt-7" : "pb-2 pt-6"
          }`}
        />
      </div>
      {error && <p className="mt-1.5 pl-1 text-xs font-medium text-red-500">{error}</p>}
    </div>
  );
}

export default function ContactForm() {
  const [mounted, setMounted] = useState(false);
  const [values, setValues] = useState({ name: "", email: "", subject: "", phone: "", message: "" });
  const [accepted, setAccepted] = useState(false);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | loading | success
  const cardRef = useRef(null);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(t);
  }, []);

  const update = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }));
  };

  const validate = () => {
    const next = {};
    if (!values.name.trim()) next.name = "Tell us your name";
    if (!values.email.trim()) next.email = "Add an email address";
    else if (!/^\S+@\S+\.\S+$/.test(values.email)) next.email = "That email doesn't look right";
    if (!values.subject.trim()) next.subject = "Add a subject";
    if (!values.message.trim()) next.message = "Write a short message";
    if (!accepted) next.terms = "Please accept the terms to continue";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) {
      cardRef.current?.classList.add("animate-[shake_0.4s]");
      setTimeout(() => cardRef.current?.classList.remove("animate-[shake_0.4s]"), 400);
      return;
    }
    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
      setTimeout(() => {
        setStatus("idle");
        setValues({ name: "", email: "", subject: "", phone: "", message: "" });
        setAccepted(false);
      }, 2200);
    }, 1400);
  };

  return (
    <div
      className="relative min-h-screen w-full overflow-hidden px-4 py-16 sm:px-6 md:py-24"
      style={{
        fontFamily: "'Roboto', ui-sans-serif, system-ui, sans-serif",
        background: "linear-gradient(180deg, #F7FAFC 0%, #EFF5F9 60%, #F7FAFC 100%)",
      }}
    >
      <div className="relative mx-auto max-w-4xl">
        {/* Header */}
        <div
          className={`text-center transition-all duration-700 ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="w-8 h-[2px] bg-[#0877BA]" />
            <span className="text-[#0877BA] text-[11px] sm:text-[12px] font-bold tracking-[0.25em] uppercase">
              Contact with Us
            </span>
            <span className="w-8 h-[2px] bg-[#0877BA]" />
          </div>
          <h1 className="mt-4 text-3xl font-black leading-tight text-slate-900 sm:text-4xl md:text-[2.75rem]">
            Have Any Questions?{" "}
            <span className="relative inline-block">
              Let's Talk!
            </span>
          </h1>
          <p className="mx-auto mt-4 max-w-md text-sm text-slate-500 sm:text-base">
            Drop us a message and our team will get back to you within one business day.
          </p>
        </div>
        {/* Watermarks */}
        <div
          className="absolute -right-32 -top-20 font-black text-[220px] select-none pointer-events-none hidden xl:block"
          style={{ color: '#0877BA', opacity: 0.06, fontFamily: "'Roboto', sans-serif", lineHeight: 1 }}
        >
          背
        </div>
        <div
          className="absolute -left-32 -top-20 font-black text-[220px] select-none pointer-events-none hidden xl:block"
          style={{ color: '#0877BA', opacity: 0.06, fontFamily: "'Roboto', sans-serif", lineHeight: 1 }}
        >
          景
        </div>

        {/* sakura petals */}
        {[
          { left: '8%',  delay: 0   },
          { left: '22%', delay: 2   },
          { left: '50%', delay: 2.5 },
          { left: '72%', delay: 1.5 },
          { left: '88%', delay: 3   },
        ].map((p, i) => (
          <motion.div
            key={i}
            className="absolute top-0 pointer-events-none select-none"
            style={{ left: p.left }}
            animate={{ y: [0, 300], opacity: [0, 0.8, 0], rotate: [0, 360] }}
            transition={{ duration: 5, delay: p.delay, repeat: Infinity, ease: 'easeIn' }}
          >
            <GiFlowerEmblem size={22} color="#0877BA" style={{ opacity: 0.8 }} />
          </motion.div>
        ))}

        {/* Card */}
        <div
          ref={cardRef}
          className={`relative mt-10 overflow-hidden rounded-3xl border border-white bg-white/90 p-5 shadow-[0_20px_60px_-15px_rgba(8,119,186,0.25)] backdrop-blur-sm transition-all duration-700 sm:p-8 md:p-10 ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >

          {/* Success overlay */}
          {status === "success" && (
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-4 bg-white/95 backdrop-blur-sm">
              <div
                className="flex h-16 w-16 items-center justify-center rounded-full"
                style={{ background: BLUE, animation: "popIn 0.5s ease-out" }}
              >
                <Check size={32} className="text-white" strokeWidth={3} />
              </div>
              <p className="text-lg font-bold text-slate-800">Message sent!</p>
              <p className="text-sm text-slate-500">Thanks for reaching out — we'll reply soon.</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <FloatField icon={User} label="Your Name" name="name" value={values.name} onChange={update} error={errors.name} />
            <FloatField icon={Mail} label="Email Address" name="email" value={values.email} onChange={update} error={errors.email} />
            <FloatField icon={Tag} label="Subject" name="subject" value={values.subject} onChange={update} error={errors.subject} />
            <FloatField icon={Phone} label="Phone Number" name="phone" value={values.phone} onChange={update} error={errors.phone} />

            <div className="md:col-span-2">
              <FloatField
                icon={MessageSquare}
                label="Message"
                name="message"
                textarea
                rows={5}
                value={values.message}
                onChange={update}
                error={errors.message}
              />
            </div>

            <div className="flex flex-col gap-4 md:col-span-2 md:flex-row md:items-center md:justify-between">
              <label className="flex cursor-pointer items-start gap-2.5 text-[13.5px] text-slate-600">
                <span className="relative mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center">
                  <input
                    type="checkbox"
                    checked={accepted}
                    onChange={(e) => {
                      setAccepted(e.target.checked);
                      if (errors.terms) setErrors((er) => ({ ...er, terms: undefined }));
                    }}
                    className="peer absolute h-5 w-5 cursor-pointer appearance-none rounded-md border-2 border-slate-300 transition-colors checked:border-transparent"
                    style={accepted ? { background: BLUE, borderColor: BLUE } : {}}
                  />
                  <Check
                    size={13}
                    strokeWidth={3.5}
                    className={`pointer-events-none text-white transition-all duration-150 ${
                      accepted ? "scale-100 opacity-100" : "scale-50 opacity-0"
                    }`}
                  />
                </span>
                <span>
                  Accept{" "}
                  <a href="#" className="font-semibold transition-colors hover:underline" style={{ color: BLUE }}>
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a href="#" className="font-semibold transition-colors hover:underline" style={{ color: BLUE }}>
                    Privacy Policy
                  </a>
                </span>
              </label>

              <button
                type="submit"
                disabled={status === "loading"}
                className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-900/15 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl active:translate-y-0 disabled:opacity-80 sm:w-auto"
                style={{ background: BLUE }}
              >
                <span
                  className="absolute inset-0 origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
                  style={{ background: "linear-gradient(90deg, #066aa8, #0877BA)" }}
                />
                <span className="relative flex items-center gap-2">
                  {status === "loading" ? (
                    <>
                      <Loader2 size={16} className="animate-spin" /> Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={15} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                    </>
                  )}
                </span>
              </button>
            </div>
            {errors.terms && (
              <p className="-mt-2 text-xs font-medium text-red-500 md:col-span-2">{errors.terms}</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}