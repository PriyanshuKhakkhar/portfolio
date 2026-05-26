"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { skillCategories } from "@/data/portfolio";

export default function SkillsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="relative py-24 overflow-hidden bg-[#fffaf5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#fff4ea] text-[#ff6b00] text-sm font-bold mb-4">
            Technical Stack
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-[#111111]">
            My <span className="text-[#ff6b00]">Skills</span>
          </h2>
        </motion.div>

        {/* Categories */}
        <motion.div 
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ staggerChildren: 0.1 }}
          className="grid lg:grid-cols-2 gap-8"
        >
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-8 rounded-[2rem] bg-white shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-[#ececec]"
            >
              {/* Category header */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-[#fffcf8] border border-[#ececec] flex items-center justify-center text-2xl text-[#ff6b00] shadow-sm">
                  {cat.icon}
                </div>
                <div>
                  <h3 className="text-[#111111] font-bold text-xl">{cat.name}</h3>
                  <p className="text-[#666666] text-sm font-medium">{cat.skills.length} Technologies</p>
                </div>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-3">
                {cat.skills.map((skill) => (
                  <div
                    key={skill}
                    className="px-4 py-2 rounded-xl bg-[#fffcf8] border border-[#ececec] text-[#111111] text-sm font-bold hover:border-[#ff6b00] hover:text-[#ff6b00] transition-colors shadow-sm cursor-default"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
