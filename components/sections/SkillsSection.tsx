"use client";

import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { skillCategories } from "@/data/portfolio";
import SectionHeader from "@/components/ui/SectionHeader";
import SkillBadge from "@/components/ui/SkillBadge";

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const fadeUp: Variants = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const proficiencyColors: Record<string, string> = {
  Expert:     "bg-green-50 text-green-700 border-green-200",
  Proficient: "bg-blue-50 text-blue-700 border-blue-200",
  Learning:   "bg-amber-50 text-amber-700 border-amber-200",
};

export default function SkillsSection() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="relative py-28 overflow-hidden bg-[#fffaf5] scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>

        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div variants={fadeUp}>
            <SectionHeader
              tag="Technical Stack"
              title="Skills & Technologies"
              highlight="Technologies"
              subtitle="A curated overview of my technical toolkit — from Angular architecture to the tools I use every day."
            />
          </motion.div>

          {/* Legend */}
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {[
              { label: "Expert",     dot: "bg-green-500", desc: "Day-to-day use" },
              { label: "Proficient", dot: "bg-blue-500",  desc: "Comfortable" },
              { label: "Learning",   dot: "bg-amber-400", desc: "Actively growing" },
            ].map(({ label, dot, desc }) => (
              <div key={label} className="flex items-center gap-2 text-sm text-[#666] font-medium">
                <div className={`w-2.5 h-2.5 rounded-full ${dot}`} />
                <span className="font-bold text-[#333]">{label}</span>
                <span className="text-[#aaa]">— {desc}</span>
              </div>
            ))}
          </motion.div>

          {/* Categories grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {skillCategories.map((cat) => (
              <motion.div
                key={cat.name}
                variants={fadeUp}
                className="group p-8 rounded-3xl bg-white border border-[#ececec] shadow-sm hover:border-[#ff6b00]/20 hover:shadow-[0_12px_40px_rgba(0,0,0,0.05)] transition-all duration-300"
              >
                {/* Category header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#fffcf8] border border-[#ececec] flex items-center justify-center text-xl shadow-sm group-hover:bg-[#fff4ea] group-hover:border-[#ff6b00]/20 transition-all">
                    {cat.icon}
                  </div>
                  <div>
                    <h3 className="text-[#111] font-black text-lg">{cat.name}</h3>
                    <p className="text-[#aaa] text-xs font-medium">{cat.skills.length} technologies</p>
                  </div>
                </div>

                {/* Skills list */}
                <div className="space-y-2.5">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center justify-between gap-3 px-4 py-3 rounded-2xl bg-[#fffcf8] border border-[#ececec] hover:border-[#ff6b00]/30 hover:bg-white hover:-translate-y-0.5 transition-all duration-200 cursor-default group/skill"
                    >
                      <span className="text-sm font-bold text-[#111] group-hover/skill:text-[#ff6b00] transition-colors">
                        {skill.name}
                      </span>
                      <span
                        className={`text-[10px] font-bold px-2.5 py-1 rounded-lg border ${proficiencyColors[skill.proficiency]}`}
                      >
                        {skill.proficiency}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
