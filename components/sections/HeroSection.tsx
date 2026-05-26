"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Github, Linkedin, Mail, Download, Rocket, Calendar, Code2, GitCommitHorizontal } from "lucide-react";
import { socialLinks } from "@/data/portfolio";

export default function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden pt-32 lg:pt-40 pb-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-12 lg:px-16 w-full relative">
        
        {/* Floating Social Icons (Left Side) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="absolute left-0 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-4 bg-white p-3 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.06)] border border-[#f0f0f0]"
        >
          {[
            { icon: Github, href: socialLinks.github },
            { icon: Linkedin, href: socialLinks.linkedin },
            { icon: Mail, href: socialLinks.email },
          ].map(({ icon: Icon, href }, i) => (
            <a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-[#666666] hover:text-[#ff6b00] hover:bg-[#fff4ea] rounded-xl transition-colors"
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center w-full pl-0 lg:pl-16">
          
          {/* Left Column - Text Content */}
          <div className="flex flex-col items-start text-left relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#ececec] shadow-sm mb-6"
            >
              <div className="w-2 h-2 rounded-full bg-[#ff6b00]" />
              <span className="text-[#ff6b00] text-xs font-bold uppercase tracking-wider">
                Available for opportunities
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="text-5xl sm:text-6xl lg:text-7xl font-black mb-4 leading-[1.1] tracking-tight text-[#111111]"
            >
              Hi, I&apos;m <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff6b00] to-[#ff9d4d]">
                Priyanshu
              </span>{" "}
              Khakkhar
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="text-xl sm:text-2xl font-bold mb-4 flex flex-wrap items-center gap-2"
            >
              <span className="text-[#ff6b00]">Angular Developer</span>
              <span className="text-[#666666]">|</span>
              <span className="text-[#111111]">Frontend Developer</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="max-w-lg text-[#666666] text-base leading-relaxed mb-8"
            >
              Passionate Angular Developer and Frontend Engineer with a strong focus on building modern, responsive, and user-friendly web applications with clean code and great performance.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              className="flex flex-wrap items-center gap-4 w-full"
            >
              <button
                onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
                className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-[#ff6b00] to-[#ff9d4d] text-white font-bold text-sm hover:shadow-[0_8px_25px_rgba(255,107,0,0.3)] hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 shadow-md shadow-orange-500/20"
              >
                <Rocket className="w-4 h-4" />
                View Projects
              </button>

              <a
                href="/resume.pdf"
                download
                className="px-8 py-3.5 rounded-2xl bg-white border border-[#ececec] text-[#111] font-bold text-sm hover:bg-[#fffaf5] transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </a>
            </motion.div>
          </div>

          {/* Right Column - Avatar & Floating Cards */}
          <div className="relative flex justify-center items-center mt-10 lg:mt-0 lg:ml-10">
            <motion.div style={{ y: y1 }} className="relative w-full max-w-md aspect-square">
              
              {/* Outer decorative ring */}
              <div className="absolute inset-4 rounded-full border-[1.5px] border-[#ececec]" />
              
              {/* Main Avatar Circle */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
                className="absolute inset-10 rounded-full bg-gradient-to-br from-[#ff9d4d] to-[#ff6b00] overflow-hidden shadow-[0_20px_50px_rgba(255,107,0,0.3)] border-8 border-white"
              >
                <Image
                  src="/avatar.png"
                  alt="Priyanshu Khakkhar"
                  fill
                  className="object-cover object-top scale-110"
                  priority
                />
              </motion.div>

              {/* Floating Tech Badges */}
              {[
                { icon: "A", color: "text-red-500", pos: "top-[15%] left-[10%]" },
                { icon: "JS", color: "text-yellow-500", pos: "top-[15%] right-[10%]" },
                { icon: "TS", color: "text-blue-500", pos: "bottom-[20%] left-[5%]" },
                { icon: "N", color: "text-green-500", pos: "bottom-[15%] right-[15%]" },
              ].map((badge, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + i * 0.1, type: "spring" }}
                  className={`absolute ${badge.pos} w-12 h-12 bg-white rounded-xl shadow-[0_8px_20px_rgba(0,0,0,0.08)] flex items-center justify-center font-black text-xl ${badge.color}`}
                >
                  {badge.icon}
                </motion.div>
              ))}

              {/* Floating Stats Card */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="absolute right-[-10%] md:right-[-25%] top-1/2 -translate-y-1/2 bg-white rounded-3xl p-6 shadow-[0_15px_40px_rgba(0,0,0,0.08)] border border-[#f0f0f0] w-64 hidden sm:block"
              >
                <div className="space-y-6">
                  {[
                    { icon: Calendar, val: "1+", label: "Years Experience" },
                    { icon: Rocket, val: "3+", label: "Projects Completed" },
                    { icon: GitCommitHorizontal, val: "500+", label: "Commits" },
                  ].map((stat, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-[#fff4ea] flex items-center justify-center text-[#ff6b00]">
                        <stat.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-black text-[#111111] text-lg leading-tight">{stat.val}</div>
                        <div className="text-xs text-[#666666] font-medium">{stat.label}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

            </motion.div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        style={{ opacity }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="w-full flex flex-col items-center gap-2 mt-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 border-[#ff6b00]/30 flex justify-center p-1"
        >
          <motion.div className="w-1 h-2 rounded-full bg-[#ff6b00]" />
        </motion.div>
        <span className="text-[11px] font-bold text-[#666666]">
          Scroll Down
        </span>
      </motion.div>
    </section>
  );
}
