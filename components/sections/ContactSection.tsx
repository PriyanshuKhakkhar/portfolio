"use client";

import { useRef, useState } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import {
  Send,
  CheckCircle,
  AlertCircle,
  Mail,
  Linkedin,
  Github,
  Download,
  MapPin,
} from "lucide-react";
import { socialLinks, resumeUrl } from "@/data/portfolio";
import SectionHeader from "@/components/ui/SectionHeader";

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const fadeUp: Variants = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const contactCards = [
  {
    icon: Mail,
    label: "Email",
    value: "priyanshukhakkhar@gmail.com",
    href: "mailto:priyanshukhakkhar@gmail.com",
    color: "hover:border-red-300 hover:bg-red-50 hover:[&_svg]:text-red-500",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Priyanshu Khakkhar",
    href: socialLinks.linkedin,
    color: "hover:border-blue-300 hover:bg-blue-50 hover:[&_svg]:text-blue-600",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "@priyanshukhakkhar",
    href: socialLinks.github,
    color: "hover:border-gray-400 hover:bg-gray-50 hover:[&_svg]:text-gray-700",
  },
  {
    icon: Download,
    label: "Resume",
    value: "View / Download PDF",
    href: resumeUrl,
    color: "hover:border-[#ff6b00]/40 hover:bg-[#fff4ea] hover:[&_svg]:text-[#ff6b00]",
  },
];

export default function ContactSection() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const [form, setForm]     = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res    = await fetch("https://api.web3forms.com/submit", {
        method:  "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body:    JSON.stringify({
          access_key: "YOUR_WEB3FORMS_ACCESS_KEY_HERE",
          name:    form.name,
          email:   form.email,
          message: form.message,
        }),
      });
      const result = await res.json();
      if (result.success) {
        setStatus("sent");
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 4500);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 4500);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4500);
    }
  };

  return (
    <section id="contact" className="relative py-28 overflow-hidden bg-white scroll-mt-24">
      {/* Top separator */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#ececec] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Availability banner */}
          <motion.div
            variants={fadeUp}
            className="flex justify-center mb-10"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-green-50 border border-green-200 shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
              </span>
              <span className="text-sm font-bold text-green-700">
                Available for Freelance &amp; Full-time Opportunities
              </span>
            </div>
          </motion.div>

          <motion.div variants={fadeUp}>
            <SectionHeader
              tag="Get In Touch"
              title="Let's work together"
              highlight="together"
              subtitle="Have a project in mind, want to collaborate, or just want to say hi? I'd love to hear from you."
            />
          </motion.div>

          {/* Two-column layout */}
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">

            {/* ── Left: Contact info ── */}
            <motion.div variants={fadeUp} className="flex flex-col gap-5">
              <div className="flex items-center gap-2 mb-2">
                <MapPin className="w-4 h-4 text-[#ff6b00]" />
                <span className="text-sm font-bold text-[#555]">Based in India · Open to remote worldwide</span>
              </div>

              {contactCards.map(({ icon: Icon, label, value, href, color }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? "_self" : "_blank"}
                  rel="noopener noreferrer"
                  download={label === "Resume" ? "Priyanshu_Khakkhar_Resume.pdf" : undefined}
                  className={`group flex items-center gap-5 p-5 rounded-2xl bg-white border border-[#ececec] shadow-sm transition-all duration-200 ${color} hover:-translate-y-0.5 hover:shadow-md`}
                >
                  <div className="w-12 h-12 rounded-xl bg-[#f7f7f7] border border-[#e8e8e8] flex items-center justify-center transition-all group-hover:border-transparent">
                    <Icon className="w-5 h-5 text-[#888] transition-colors" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-[#aaa] uppercase tracking-widest mb-0.5">{label}</p>
                    <p className="text-sm font-bold text-[#111]">{value}</p>
                  </div>
                </a>
              ))}

              {/* Response time note */}
              <p className="text-xs text-[#aaa] font-medium mt-2 pl-1">
                ⚡ Usually responds within 24 hours
              </p>
            </motion.div>

            {/* ── Right: Form ── */}
            <motion.div
              variants={fadeUp}
              className="p-8 sm:p-10 rounded-3xl bg-[#fffcf8] border border-[#ececec] shadow-sm"
            >
              <h3 className="text-xl font-black text-[#111] mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  {[
                    { id: "name",  label: "Full Name",      type: "text",  placeholder: "Priyanshu Khakkhar" },
                    { id: "email", label: "Email Address",  type: "email", placeholder: "hello@example.com" },
                  ].map((field) => (
                    <div key={field.id} className="flex flex-col gap-2">
                      <label htmlFor={field.id} className="text-xs font-black text-[#333] uppercase tracking-wider">
                        {field.label}
                      </label>
                      <input
                        id={field.id}
                        name={field.id}
                        type={field.type}
                        required
                        placeholder={field.placeholder}
                        value={form[field.id as keyof typeof form]}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 rounded-2xl bg-white border border-[#ececec] text-[#111] placeholder:text-[#bbb] focus:outline-none focus:border-[#ff6b00] focus:ring-4 focus:ring-[#ff6b00]/10 transition-all font-medium text-sm"
                      />
                    </div>
                  ))}
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-xs font-black text-[#333] uppercase tracking-wider">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell me about your project or opportunity..."
                    value={form.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 rounded-2xl bg-white border border-[#ececec] text-[#111] placeholder:text-[#bbb] focus:outline-none focus:border-[#ff6b00] focus:ring-4 focus:ring-[#ff6b00]/10 transition-all resize-none font-medium text-sm"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending" || status === "sent"}
                  className="w-full flex items-center justify-center gap-3 py-4 rounded-2xl bg-gradient-to-r from-[#ff6b00] to-[#ff9d4d] text-white font-bold text-base hover:shadow-[0_8px_24px_rgba(255,107,0,0.35)] hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed disabled:translate-y-0 transition-all"
                >
                  {status === "sending" && (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  )}
                  {status === "sent"    && <CheckCircle className="w-5 h-5" />}
                  {status === "error"   && <AlertCircle className="w-5 h-5" />}
                  {status === "idle"    && <Send className="w-5 h-5" />}
                  <span>
                    {status === "sending" ? "Sending…"
                     : status === "sent"   ? "Message Sent! 🎉"
                     : status === "error"  ? "Something went wrong — try again"
                     : "Send Message"}
                  </span>
                </button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
