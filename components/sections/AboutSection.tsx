"use client";

import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { GraduationCap, Briefcase, Target, Zap } from "lucide-react";
import { aboutStats, aboutSpecialties } from "@/data/portfolio";
import SectionHeader from "@/components/ui/SectionHeader";

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const fadeUp: Variants = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
};

export default function AboutSection() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="relative py-28 overflow-hidden bg-[#fffaf5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>

        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div variants={fadeUp}>
            <SectionHeader
              tag="About Me"
              title="Getting to know me"
              highlight="me"
              subtitle="A passionate Angular Developer on a mission to build exceptional digital experiences."
            />
          </motion.div>

          {/* Main grid */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-16">

            {/* ── Left: Story ── */}
            <div className="flex flex-col gap-8">
              <motion.div variants={fadeUp} className="space-y-5">
                <p className="text-[#444] text-lg leading-relaxed">
                  I&apos;m a dedicated Angular Developer currently working as an intern at{" "}
                  <strong className="text-[#111] font-bold">GTC Software</strong>, where I build
                  enterprise-grade web applications with TypeScript and Angular. My journey
                  started with a curiosity for how things work on the web, and grew into a
                  full-blown passion for crafting clean, performant, and accessible UIs.
                </p>
                <p className="text-[#666] text-base leading-relaxed">
                  Before GTC Software, I completed an internship at{" "}
                  <strong className="text-[#111] font-bold">TatvaSoft</strong> where I gained
                  hands-on experience with real-world development workflows — code reviews, agile
                  standups, and shipping production features. Both experiences have shaped how I
                  think about architecture, teamwork, and delivering quality software.
                </p>
                <p className="text-[#666] text-base leading-relaxed">
                  My goal is to work on challenging products where great design meets solid
                  engineering — and to keep growing as a developer who ships work that matters.
                </p>
              </motion.div>

              {/* Specialties */}
              <motion.div variants={fadeUp}>
                <div className="flex items-center gap-2 mb-4">
                  <Zap className="w-4 h-4 text-[#ff6b00]" />
                  <h3 className="text-sm font-black text-[#111] uppercase tracking-widest">What I Specialize In</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {aboutSpecialties.map((spec) => (
                    <span
                      key={spec}
                      className="px-3 py-1.5 rounded-xl bg-white border border-[#ececec] text-[#333] text-sm font-bold hover:border-[#ff6b00]/40 hover:text-[#ff6b00] transition-all shadow-sm cursor-default"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Career goal */}
              <motion.div
                variants={fadeUp}
                className="p-6 rounded-3xl bg-gradient-to-br from-[#fff4ea] to-[#fffcf8] border border-[#ff6b00]/15"
              >
                <div className="flex items-center gap-2 mb-3">
                  <Target className="w-5 h-5 text-[#ff6b00]" />
                  <span className="text-sm font-black text-[#ff6b00] uppercase tracking-wider">Career Goal</span>
                </div>
                <p className="text-[#555] text-sm leading-relaxed font-medium">
                  To join a forward-thinking product team where I can solve real problems with
                  Angular and modern frontend architecture — eventually growing into a Senior
                  Frontend Engineer who leads and mentors.
                </p>
              </motion.div>
            </div>

            {/* ── Right: Cards ── */}
            <div className="flex flex-col gap-5">
              {[
                {
                  icon: GraduationCap,
                  label: "Education",
                  title: "A D Patel Institute of Technology\nCVM University",
                  sub: "B.Tech Information Technology",
                  pill: "2022 – 2026",
                },
                {
                  icon: Briefcase,
                  label: "Current Role",
                  title: "Angular Developer Intern\nGTC Software",
                  sub: "Building scalable enterprise Angular applications with TypeScript, RxJS, and REST APIs.",
                  pill: "2026 – Present",
                },
              ].map(({ icon: Icon, label, title, sub, pill }, i) => (
                <motion.div
                  key={label}
                  variants={fadeUp}
                  className="group p-7 rounded-3xl bg-white border border-[#ececec] shadow-sm hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] hover:-translate-y-1 hover:border-[#ff6b00]/20 transition-all duration-300"
                >
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-2xl bg-[#fff4ea] border border-[#ff6b00]/20 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-[#ff6b00]" />
                      </div>
                      <span className="font-bold text-[#111]">{label}</span>
                    </div>
                    <span className="text-[10px] font-bold text-[#ff6b00] bg-[#fff4ea] px-3 py-1 rounded-full shrink-0 border border-[#ff6b00]/15">
                      {pill}
                    </span>
                  </div>
                  <h3 className="font-black text-[#111] text-base mb-2 whitespace-pre-line leading-snug">
                    {title}
                  </h3>
                  <p className="text-[#666] text-sm leading-relaxed">{sub}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Stats row */}
          <motion.div
            variants={fadeUp}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4"
          >
            {aboutStats.map(({ value, label }) => (
              <div
                key={label}
                className="group text-center p-6 rounded-3xl bg-white border border-[#ececec] shadow-sm hover:border-[#ff6b00]/25 hover:-translate-y-1 hover:shadow-md transition-all duration-300"
              >
                <div className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-br from-[#ff6b00] to-[#ff9d4d] mb-2">
                  {value}
                </div>
                <div className="text-xs font-bold text-[#888] uppercase tracking-widest">{label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
