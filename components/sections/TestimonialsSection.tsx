"use client";

import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { MessageSquareQuote, Linkedin, Star } from "lucide-react";
import { socialLinks } from "@/data/portfolio";
import SectionHeader from "@/components/ui/SectionHeader";

const fadeUp: Variants = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
};

export default function TestimonialsSection() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="testimonials" className="relative py-28 overflow-hidden bg-[#fffaf5] scroll-mt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center" ref={ref}>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
        >
          <motion.div variants={fadeUp}>
            <SectionHeader
              tag="What People Say"
              title="Testimonials"
              highlight="Testimonials"
              subtitle="Genuine feedback from colleagues, mentors, and collaborators I've worked with."
            />
          </motion.div>

          {/* Placeholder card */}
          <motion.div
            variants={fadeUp}
            className="relative p-12 rounded-3xl bg-white border border-[#ececec] shadow-sm overflow-hidden"
          >
            {/* Decorative quote marks */}
            <div className="absolute top-6 left-8 text-[80px] leading-none font-black text-[#ff6b00]/8 select-none pointer-events-none">
              "
            </div>
            <div className="absolute bottom-2 right-8 text-[80px] leading-none font-black text-[#ff6b00]/8 select-none pointer-events-none rotate-180">
              "
            </div>

            <div className="relative z-10 flex flex-col items-center gap-6">
              <div className="w-16 h-16 rounded-full bg-[#fff4ea] border border-[#ff6b00]/20 flex items-center justify-center">
                <MessageSquareQuote className="w-7 h-7 text-[#ff6b00]" />
              </div>

              <div>
                <div className="flex justify-center gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-[#ff6b00] fill-[#ff6b00]" />
                  ))}
                </div>
                <p className="text-[#666] text-lg leading-relaxed italic font-medium max-w-lg mx-auto mb-6">
                  &ldquo;Testimonials from colleagues and mentors will appear here. If we&apos;ve worked
                  together and you&apos;d like to share a recommendation, I&apos;d love to hear from you!&rdquo;
                </p>
                <p className="text-sm font-black text-[#aaa] uppercase tracking-widest">
                  — Recommendations coming soon
                </p>
              </div>

              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-[#0A66C2] text-white text-sm font-bold hover:bg-[#0958a8] hover:shadow-[0_8px_24px_rgba(10,102,194,0.3)] hover:-translate-y-0.5 transition-all"
              >
                <Linkedin className="w-4 h-4" />
                Recommend on LinkedIn
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
