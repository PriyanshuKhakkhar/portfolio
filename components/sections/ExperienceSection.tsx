"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Calendar, MapPin, CheckCircle2 } from "lucide-react";
import { experiences } from "@/data/portfolio";

export default function ExperienceSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"]
  });
  
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" className="relative py-24 overflow-hidden bg-[#fffaf5]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#fff4ea] text-[#ff6b00] text-sm font-bold mb-4">
            Experience
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-[#111111]">
            My <span className="text-[#ff6b00]">Journey</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Static gray line */}
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-[2px] bg-[#ececec] rounded-full" />
          
          {/* Animated orange line */}
          <motion.div 
            style={{ height: lineHeight }}
            className="absolute left-6 sm:left-8 top-0 w-[2px] bg-[#ff6b00] rounded-full z-0 origin-top shadow-[0_0_10px_rgba(255,107,0,0.4)]"
          />

          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative pl-16 sm:pl-24 pb-12 last:pb-0"
            >
              {/* Timeline dot */}
              <div className="absolute left-[18px] sm:left-[26px] top-6 w-3.5 h-3.5 rounded-full bg-white border-2 border-[#ff6b00] shadow-[0_0_0_4px_rgba(255,250,245,1)] z-10" />

              {/* Experience Card */}
              <div className="p-8 rounded-[2rem] bg-white border border-[#ececec] shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.06)] hover:border-[#ff6b00]/30 transition-all">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-xl font-black text-[#111111] mb-1">{exp.role}</h3>
                    <p className="text-[#ff6b00] font-bold text-base">{exp.company}</p>
                  </div>

                  <div className="flex flex-col gap-2 md:items-end">
                    <span className="inline-flex items-center gap-2 text-[#666666] font-bold px-3 py-1 rounded-full bg-[#fffcf8] border border-[#ececec] text-xs">
                      <Calendar className="w-3.5 h-3.5 text-[#ff6b00]" />
                      {exp.period}
                    </span>
                    <div className="flex items-center gap-3 text-xs text-[#666666] font-medium">
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5" />
                        {exp.location}
                      </span>
                      <span className="w-1 h-1 rounded-full bg-[#ececec]" />
                      <span className="text-[#111111] font-bold uppercase tracking-wider">
                        {exp.type}
                      </span>
                    </div>
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {exp.description.map((point, j) => (
                    <li key={j} className="flex items-start gap-3 text-[#666666] text-sm leading-relaxed font-medium">
                      <CheckCircle2 className="w-4 h-4 text-[#ff6b00] flex-shrink-0 mt-0.5" />
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-6 border-t border-[#f5f5f5]">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-lg text-[11px] font-bold uppercase tracking-wider bg-[#fffcf8] border border-[#ececec] text-[#111111] shadow-sm"
                    >
                      {t}
                    </span>
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
