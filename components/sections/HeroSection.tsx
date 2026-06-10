"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import Image from "next/image";
import {
  Github,
  Linkedin,
  Mail,
  Download,
  Rocket,
  ArrowRight,
  Sparkles,
  Briefcase,
  Layers,
  Cpu,
} from "lucide-react";
import { socialLinks, resumeUrl } from "@/data/portfolio";

const techBadges = [
  { 
    label: "Angular",    
    bg: "bg-red-50",    
    border: "border-red-100",    
    text: "text-red-600",    
    emoji: (
      <svg viewBox="0 0 250 250" className="w-3.5 h-3.5">
        <polygon points="125,30 125,30 125,30 31.9,63.2 46.1,186.3 125,230 125,230 125,230 203.9,186.3 218.1,63.2" fill="#DD0031" />
        <polygon points="125,30 125,230 125,230 203.9,186.3 218.1,63.2" fill="#C3002F" />
        <polygon points="125,62.2 125,62.2 125,62.2 71.9,180.2 92.4,180.2 103,153.3 147,153.3 157.6,180.2 178.1,180.2" fill="#FFFFFF" />
        <polygon points="125,129.5 125,129.5 125,129.5 112.5,101.4 137.5,101.4" fill="#FFFFFF" />
      </svg>
    )
  },
  { 
    label: "TypeScript", 
    bg: "bg-blue-50",   
    border: "border-blue-100",   
    text: "text-blue-600",   
    emoji: (
      <svg viewBox="0 0 100 100" className="w-3.5 h-3.5 rounded-[2px]">
        <rect width="100" height="100" fill="#3178c6" />
        <text x="88" y="86" fill="#ffffff" fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" fontWeight="bold" fontSize="50" textAnchor="end">TS</text>
      </svg>
    )
  },
  { 
    label: "RxJS",       
    bg: "bg-purple-50", 
    border: "border-purple-100", 
    text: "text-purple-600", 
    emoji: (
      <svg viewBox="0 0 100 100" className="w-3.5 h-3.5">
        <polygon points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5" fill="#f4127c" />
        <text x="50" y="65" fill="#ffffff" fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" fontWeight="bold" fontSize="42" textAnchor="middle">Rx</text>
      </svg>
    )
  },
  { 
    label: "React JS",   
    bg: "bg-cyan-50",   
    border: "border-cyan-100",   
    text: "text-cyan-600",   
    emoji: (
      <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-4 h-4 fill-[#00d8ff] stroke-[#00d8ff] stroke-[1.2]">
        <circle cx="0" cy="0" r="2.05" />
        <g fill="none">
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
      </svg>
    )
  },
];

const floatPositions = [
  { pos: "-top-6 -left-6",  delay: 0.6 },
  { pos: "-top-4 -right-6", delay: 0.7 },
  { pos: "bottom-12 -left-8",  delay: 0.8 },
  { pos: "bottom-4 -right-8", delay: 0.9 },
];

const socialItems = [
  { icon: Github,   href: socialLinks.github,   label: "GitHub" },
  { icon: Linkedin, href: socialLinks.linkedin, label: "LinkedIn" },
  { icon: Mail,     href: socialLinks.email,    label: "Email" },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1], // Smooth premium ease-out
    },
  },
};

export default function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-28 pb-16 bg-gradient-to-b from-[#fffcf8] via-[#fffaf5] to-white text-slate-800 scroll-mt-24"
    >
      {/* Background ambient glows */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 rounded-full bg-[#ff6b00]/3 filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 rounded-full bg-blue-500/3 filter blur-[100px] pointer-events-none" />

      {/* Left floating social rail */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="absolute left-6 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-4 items-center"
      >
        <div className="flex flex-col gap-4 bg-white/90 backdrop-blur-md p-3 rounded-2xl border border-slate-200/80 shadow-md">
          {socialItems.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="p-2 text-slate-400 hover:text-[#ff6b00] hover:bg-slate-50 rounded-xl transition-all"
            >
              <Icon className="w-4 h-4" />
            </a>
          ))}
        </div>
        <div className="w-px h-16 bg-gradient-to-b from-slate-200 to-transparent" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 w-full my-auto z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center w-full">
          
          {/* ── Left Column: Intro Text & CTAs ── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Availability Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#fff4ea] border border-[#ff6b00]/15 shadow-sm mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              <span className="text-xs font-bold text-[#e05e00] tracking-wide">
                Available for Full-Time Opportunities
              </span>
              <Sparkles className="w-3.5 h-3.5 text-[#ff6b00]" />
            </motion.div>

            {/* Primary Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-black mb-4 leading-[1.15] tracking-tight text-slate-900"
            >
              Building scalable web apps with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff6b00] via-[#ff8c00] to-[#ffaa40]">
                modern Angular
              </span>{" "}
              architecture.
            </motion.h1>

            {/* Secondary Role Header */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg font-bold text-slate-500 tracking-wide mb-4 flex flex-wrap items-center gap-2"
            >
              <span>Angular Developer</span>
              <span className="text-[#ff6b00]/60">•</span>
              <span>Frontend Engineer</span>
              <span className="text-[#ff6b00]/60">•</span>
              <span>TypeScript Specialist</span>
            </motion.p>

            {/* Professional Description */}
            <motion.p
              variants={itemVariants}
              className="max-w-xl text-slate-600 text-sm sm:text-base leading-relaxed mb-8 font-normal"
            >
              I specialize in crafting high-performance user interfaces with Angular, RxJS, and clean TypeScript codebases. Currently driving product features as a Software Engineer Intern at GTC Software.
            </motion.p>

            {/* CTA Action Row */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-4 mb-10"
            >
              <button
                onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#ff6b00] to-[#ff8c00] text-white font-bold text-sm hover:shadow-[0_8px_30px_rgba(255,107,0,0.25)] hover:-translate-y-0.5 transition-all flex items-center gap-2 cursor-pointer"
              >
                <Rocket className="w-4 h-4" />
                View Projects
              </button>

              <a
                href={resumeUrl}
                download="Priyanshu_Khakkhar_Resume.pdf"
                className="px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 font-bold text-sm shadow-sm transition-all flex items-center gap-2 cursor-pointer"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </a>

              <button
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                className="px-4 py-3 rounded-xl text-slate-600 hover:text-[#ff6b00] font-bold text-sm transition-all flex items-center gap-1.5 cursor-pointer"
              >
                Contact Me
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>

            {/* Achievement / Recruiter Stat Grid */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-4 w-full max-w-2xl border-t border-slate-200 pt-8"
            >
              {[
                { title: "Internship Experience", desc: "Software Engineer Intern at GTC Software", icon: Briefcase },
                { title: "Live Projects Built", desc: "10+ Modern Applications", icon: Layers },
                { title: "REST API Integrations", desc: "RxJS-driven dynamic state", icon: Cpu }
              ].map((stat, i) => (
                <div key={i} className="flex flex-col gap-1.5">
                  <div className="flex items-center gap-1.5 text-slate-500">
                    <stat.icon className="w-3.5 h-3.5 text-[#ff6b00]" />
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">{stat.title}</span>
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-slate-800 leading-snug">{stat.desc}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Right Column: Premium Mockup ── */}
          <motion.div
            style={{ y: y1 }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="lg:col-span-5 relative flex justify-center items-center mt-10 lg:mt-0"
          >
            <div className="relative w-full max-w-[480px] aspect-[4/3] group">
              {/* Premium Glow ring behind the mockup */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#ff6b00]/5 to-blue-500/5 rounded-2xl filter blur-xl opacity-70 group-hover:opacity-90 transition-opacity" />

              {/* Glossy Browser Frame Mockup */}
              <div className="absolute inset-0 bg-white rounded-2xl border border-slate-200/80 shadow-[0_24px_70px_rgba(0,0,0,0.06)] overflow-hidden transition-all duration-500 group-hover:border-slate-300 group-hover:shadow-[0_32px_80px_rgba(255,107,0,0.08)] flex flex-col">
                
                {/* Browser Header Bar */}
                <div className="h-9 bg-slate-50 border-b border-slate-100 flex items-center px-4 justify-between select-none">
                  {/* Left Side Window Action Buttons */}
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ef4444]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#f59e0b]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#10b981]" />
                  </div>
                  
                  {/* URL Address Bar */}
                  <div className="w-6/10 h-5.5 rounded-md bg-slate-200/40 border border-slate-200/30 flex items-center justify-center text-[10px] text-slate-400 font-mono tracking-wider">
                    kanban-board.dev
                  </div>

                  {/* Empty Right Side to Balance */}
                  <div className="w-12" />
                </div>

                {/* Browser Workspace containing Kanban image */}
                <div className="flex-1 relative overflow-hidden bg-slate-50">
                  <Image
                    src="/projects/kanban.svg"
                    alt="Kanban Project View"
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-103"
                    priority
                  />
                  {/* Light gradient highlight overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-white/10 pointer-events-none" />
                </div>
              </div>

              {/* Float technology Badges around the mockup */}
              {techBadges.map((badge, i) => (
                <motion.div
                  key={badge.label}
                  initial={{ opacity: 0, scale: 0.8, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: floatPositions[i].delay, type: "spring", stiffness: 100 }}
                  className={`absolute ${floatPositions[i].pos} z-20 pointer-events-none`}
                >
                  <motion.div
                    animate={{
                      y: [0, -6, 0],
                    }}
                    transition={{
                      duration: 3 + i * 0.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <div
                      className={`flex items-center gap-1.5 px-3 py-2 rounded-xl border border-slate-200 backdrop-blur-md shadow-md font-bold text-xs bg-white/95 ${badge.text}`}
                    >
                      <span className="text-sm leading-none flex items-center justify-center">{badge.emoji}</span>
                      <span>{badge.label}</span>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Social links row for mobile/tablet screens */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 w-full mt-8 xl:hidden z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex items-center gap-3 border-t border-slate-200 pt-6 justify-center sm:justify-start"
        >
          {socialItems.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-10 h-10 rounded-xl border border-slate-200 bg-slate-50 flex items-center justify-center text-slate-400 hover:text-[#ff6b00] hover:border-slate-300 transition-all shadow-sm"
            >
              <Icon className="w-4 h-4" />
            </a>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        style={{ opacity }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        className="w-full flex flex-col items-center gap-2 mt-16 z-10 pointer-events-none"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-9 rounded-full border border-slate-300 flex justify-center pt-1.5"
        >
          <div className="w-1 h-2 rounded-full bg-[#ff6b00]" />
        </motion.div>
        <span className="text-[10px] font-bold text-slate-400 tracking-widest uppercase">Scroll</span>
      </motion.div>
    </section>
  );
}
