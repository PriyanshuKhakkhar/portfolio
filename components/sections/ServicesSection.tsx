"use client";

import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { services } from "@/data/portfolio";
import SectionHeader from "@/components/ui/SectionHeader";
import SkillBadge from "@/components/ui/SkillBadge";

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const fadeUp: Variants = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
};

export default function ServicesSection() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" className="relative py-28 overflow-hidden bg-white scroll-mt-24">
      {/* Decorative background shape */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#ff6b00]/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div variants={fadeUp}>
            <SectionHeader
              tag="What I Do"
              title="Services & Expertise"
              highlight="Expertise"
              subtitle="Specialized in building high-quality Angular frontends and modern web experiences for real-world products."
            />
          </motion.div>

          {/* Services grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                variants={fadeUp}
                className="group relative p-8 rounded-3xl bg-white border border-[#ececec] shadow-sm overflow-hidden cursor-default
                           hover:border-[#ff6b00]/30 hover:-translate-y-1.5 hover:shadow-[0_16px_48px_rgba(255,107,0,0.08)] transition-all duration-300"
              >
                {/* Background gradient that appears on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-3xl`} />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-[#fffcf8] border border-[#ececec] flex items-center justify-center text-2xl mb-6 group-hover:border-[#ff6b00]/20 group-hover:bg-[#fff4ea] transition-all shadow-sm">
                    {service.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-[#111] font-black text-xl mb-3 group-hover:text-[#ff6b00] transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#666] text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2">
                    {service.tech.map((t) => (
                      <SkillBadge key={t} name={t} variant="compact" />
                    ))}
                  </div>
                </div>

                {/* Subtle number watermark */}
                <div className="absolute bottom-4 right-5 text-6xl font-black text-[#f0f0f0] select-none pointer-events-none group-hover:text-[#ff6b00]/10 transition-colors">
                  0{i + 1}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
