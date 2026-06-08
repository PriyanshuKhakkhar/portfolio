"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform, type Variants } from "framer-motion";
import { Calendar, MapPin, CheckCircle2, TrendingUp } from "lucide-react";
import { experiences } from "@/data/portfolio";
import SectionHeader from "@/components/ui/SectionHeader";
import SkillBadge from "@/components/ui/SkillBadge";

const fadeUp: Variants = {
  hidden:  { opacity: 0, x: -24 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
};

export default function ExperienceSection() {
  const ref    = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start center", "end center"] });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" className="relative py-28 overflow-hidden bg-[#fffaf5] scroll-mt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>

        <SectionHeader
          tag="Experience"
          title="My Professional Journey"
          highlight="Journey"
          subtitle="Real-world internship experience working with teams, shipping features, and learning from production codebases."
        />

        {/* Timeline */}
        <div className="relative">
          {/* Static gray line */}
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-[2px] bg-[#ececec] rounded-full" />

          {/* Animated orange progress line */}
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-6 sm:left-8 top-0 w-[2px] bg-gradient-to-b from-[#ff6b00] to-[#ff9d4d] rounded-full z-0 origin-top"
          />

          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { duration: 0.55, ease: "easeOut", delay: i * 0.15 } } }}
              className="relative pl-16 sm:pl-24 pb-12 last:pb-0"
            >
              {/* Timeline dot with pulse */}
              <motion.div
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : { scale: 0 }}
                transition={{ delay: 0.3 + i * 0.15, type: "spring", stiffness: 200 }}
                className="absolute left-[17px] sm:left-[25px] top-6 z-10"
              >
                <div className="relative">
                  <div className="w-4 h-4 rounded-full bg-white border-[2.5px] border-[#ff6b00] shadow-[0_0_0_4px_rgba(255,250,245,1)]" />
                  <div className="absolute inset-0 rounded-full border-2 border-[#ff6b00]/30 animate-ping" />
                </div>
              </motion.div>

              {/* Experience Card */}
              <div className="group p-8 rounded-3xl bg-white border border-[#ececec] shadow-sm hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] hover:border-[#ff6b00]/25 transition-all duration-300">

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-xl font-black text-[#111111] mb-1">{exp.role}</h3>
                    <p className="text-[#ff6b00] font-bold text-base">{exp.company}</p>
                  </div>
                  <div className="flex flex-col gap-2 md:items-end shrink-0">
                    <span className="inline-flex items-center gap-1.5 text-[#555] font-bold px-3 py-1.5 rounded-full bg-[#fffcf8] border border-[#ececec] text-xs">
                      <Calendar className="w-3.5 h-3.5 text-[#ff6b00]" />
                      {exp.period}
                    </span>
                    <div className="flex items-center gap-2 text-xs text-[#888] font-medium">
                      <MapPin className="w-3 h-3" />
                      {exp.location}
                      <span className="w-1 h-1 rounded-full bg-[#ddd]" />
                      <span className="text-[#ff6b00] font-bold uppercase tracking-wide text-[10px]">{exp.type}</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <ul className="space-y-2.5 mb-6">
                  {exp.description.map((point, j) => (
                    <li key={j} className="flex items-start gap-3 text-[#555] text-sm leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-[#ff6b00] flex-shrink-0 mt-0.5" />
                      {point}
                    </li>
                  ))}
                </ul>

                {/* Achievement chips */}
                <div className="flex flex-wrap gap-2 mb-6 pb-6 border-b border-[#f5f5f5]">
                  {exp.achievements.map((a) => (
                    <div key={a} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#fff4ea] border border-[#ff6b00]/15 text-[#ff6b00] text-xs font-bold">
                      <TrendingUp className="w-3 h-3" />
                      {a}
                    </div>
                  ))}
                </div>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((t) => (
                    <SkillBadge key={t} name={t} variant="compact" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
