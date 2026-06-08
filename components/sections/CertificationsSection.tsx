"use client";

import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { ExternalLink, Award } from "lucide-react";
import { certifications } from "@/data/portfolio";
import SectionHeader from "@/components/ui/SectionHeader";

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const fadeUp: Variants = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
};

export default function CertificationsSection() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="certifications" className="relative py-28 overflow-hidden bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>

        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div variants={fadeUp}>
            <SectionHeader
              tag="Credentials"
              title="Certifications & Achievements"
              highlight="Achievements"
              subtitle="Professional certifications and recognitions that validate my skills and commitment to continuous learning."
            />
          </motion.div>

          {/* Certifications grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {certifications.map((cert) => (
              <motion.div
                key={cert.title}
                variants={fadeUp}
                className="group relative p-8 rounded-3xl bg-white border border-[#ececec] overflow-hidden hover:border-[#ff6b00]/25 hover:-translate-y-1.5 hover:shadow-[0_16px_48px_rgba(0,0,0,0.06)] transition-all duration-300 cursor-default"
              >
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-100 pointer-events-none`} />

                <div className="relative z-10">
                  {/* Header row */}
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <div className="w-14 h-14 rounded-2xl bg-white border border-[#ececec] flex items-center justify-center text-2xl shadow-sm group-hover:border-[#ff6b00]/20 transition-all">
                      {cert.icon}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-black text-[#888] bg-white/80 px-3 py-1.5 rounded-full border border-[#ececec]">
                        {cert.year}
                      </span>
                      {cert.credentialUrl && (
                        <a
                          href={cert.credentialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="w-8 h-8 rounded-full bg-white/80 border border-[#ececec] flex items-center justify-center text-[#888] hover:text-[#ff6b00] hover:border-[#ff6b00]/30 transition-all shadow-sm"
                          aria-label={`View ${cert.title} credential`}
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-black text-[#111] mb-2 group-hover:text-[#ff6b00] transition-colors leading-tight">
                    {cert.title}
                  </h3>

                  {/* Issuer */}
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-[#ff6b00]" />
                    <p className="text-sm text-[#666] font-medium">{cert.issuer}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom note */}
          <motion.p
            variants={fadeUp}
            className="text-center text-sm text-[#aaa] font-medium mt-10"
          >
            More certifications in progress — always learning, always growing.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
