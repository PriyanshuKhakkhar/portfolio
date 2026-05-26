"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { Github, ExternalLink } from "lucide-react";
import { projects } from "@/data/portfolio";

const projectImages = [
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=800&auto=format&fit=crop",
];

export default function ProjectsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="relative py-24 overflow-hidden bg-[#fffaf5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#fff4ea] text-[#ff6b00] text-sm font-bold mb-4">
            Portfolio
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-[#111111]">
            Featured <span className="text-[#ff6b00]">Projects</span>
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group flex flex-col w-full bg-white rounded-[2rem] overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.04)] border border-[#ececec] hover:-translate-y-2 transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative w-full aspect-[4/3] overflow-hidden border-b border-[#f0f0f0]">
                {/* Fallback to standard img tag to bypass next/image domain restrictions for external URLs */}
                <img
                  src={projectImages[i] || projectImages[0]}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-[#111111] font-bold text-xl mb-3">
                  {project.title}
                </h3>
                <p className="text-[#666666] text-sm mb-6 line-clamp-2 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                  {project.tech.slice(0, 3).map((t: string) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-lg bg-[#fffcf8] border border-[#ececec] text-[#111111] text-[11px] font-bold uppercase tracking-wider shadow-sm"
                    >
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-2.5 py-1 rounded-lg bg-[#fffcf8] border border-[#ececec] text-[#111111] text-[11px] font-bold uppercase tracking-wider shadow-sm">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-4 border-t border-[#f0f0f0]">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-[#fffaf5] border border-[#ececec] text-[#111111] hover:bg-white hover:border-[#ff6b00] hover:text-[#ff6b00] transition-colors text-sm font-bold shadow-sm"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-[#ff6b00] to-[#ff9d4d] text-white hover:shadow-[0_8px_20px_rgba(255,107,0,0.2)] transition-all text-sm font-bold shadow-sm"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View all */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-16"
        >
          <a
            href="https://github.com/PriyanshuKhakkhar"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-[#ececec] bg-white text-[#111111] font-bold hover:border-[#ff6b00] hover:text-[#ff6b00] transition-all shadow-sm"
          >
            <Github className="w-5 h-5" />
            More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
