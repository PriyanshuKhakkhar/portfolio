"use client";

import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import Image from "next/image";
import { Github, ExternalLink, Star, CheckCircle } from "lucide-react";
import { projects } from "@/data/portfolio";
import SectionHeader from "@/components/ui/SectionHeader";
import SkillBadge from "@/components/ui/SkillBadge";

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const fadeUp: Variants = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
};

function ProjectLinks({ github, demo }: { github?: string; demo?: string }) {
  return (
    <div className="flex gap-3">
      {github && (
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-3 rounded-2xl bg-[#fffaf5] border border-[#ececec] text-[#111] hover:border-[#ff6b00]/40 hover:text-[#ff6b00] hover:bg-white transition-all text-sm font-bold shadow-sm"
        >
          <Github className="w-4 h-4" />
          View Code
        </a>
      )}
      {demo && (
        <a
          href={demo}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-3 rounded-2xl bg-gradient-to-r from-[#ff6b00] to-[#ff9d4d] text-white hover:shadow-[0_8px_24px_rgba(255,107,0,0.3)] transition-all text-sm font-bold shadow-sm"
        >
          <ExternalLink className="w-4 h-4" />
          Live Demo
        </a>
      )}
    </div>
  );
}

export default function ProjectsSection() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  // First 2 projects are "featured" (full-detail), rest go in the grid
  const featuredProjects = projects.filter((p) => p.featured);
  const gridProjects     = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="relative py-28 overflow-hidden bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>

        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div variants={fadeUp}>
            <SectionHeader
              tag="Portfolio"
              title="Featured Projects"
              highlight="Projects"
              subtitle="Handpicked work that demonstrates my ability to build real-world Angular and full-stack applications from scratch."
            />
          </motion.div>

          {/* Featured Projects — alternating full-width layout */}
          <div className="space-y-10 mb-16">
            {featuredProjects.map((project, i) => {
              if (project.title === "Kanban Board Management System") {
                return (
                  <motion.div
                    key={project.title}
                    variants={fadeUp}
                    className={`group grid lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden border border-[#ececec] shadow-[0_12px_48px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.07)] hover:border-[#ff6b00]/20 transition-all duration-400 ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}
                  >
                    {/* Mockup Column */}
                    <div className="p-6 lg:p-8 flex items-center justify-center bg-[#fcfcfc] border-b lg:border-b-0 lg:border-r border-[#ececec] group-hover:bg-[#fafafa] transition-colors duration-400">
                      {/* Browser Mockup */}
                      <div className="relative w-full aspect-video rounded-2xl border border-slate-200/80 bg-white shadow-md group-hover:shadow-xl group-hover:scale-[1.03] transition-all duration-500 flex flex-col overflow-hidden">
                        {/* Browser Header Bar */}
                        <div className="h-9 bg-slate-50 border-b border-slate-100 flex items-center px-4 justify-between select-none shrink-0">
                          {/* Window Buttons */}
                          <div className="flex items-center gap-1.5">
                            <div className="w-2.5 h-2.5 rounded-full bg-[#ef4444]" />
                            <div className="w-2.5 h-2.5 rounded-full bg-[#f59e0b]" />
                            <div className="w-2.5 h-2.5 rounded-full bg-[#10b981]" />
                          </div>
                          {/* Address Bar */}
                          <div className="w-6/10 h-5.5 rounded-md bg-slate-200/40 border border-slate-200/30 flex items-center justify-center text-[10px] text-slate-400 font-mono tracking-wider">
                            kanban-board.dev
                          </div>
                          <div className="w-12" />
                        </div>

                        {/* Mockup Image Container */}
                        <div className="flex-grow relative overflow-hidden bg-slate-50">
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            sizes="(max-w-7xl) 50vw, 100vw"
                            loading="lazy"
                            className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Content Column */}
                    <div className="p-8 lg:p-10 flex flex-col justify-between bg-white">
                      <div>
                        {/* Featured tag */}
                        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#ff6b00] text-white text-xs font-bold shadow-lg w-fit mb-4">
                          <Star className="w-3 h-3 fill-white" />
                          Featured
                        </div>

                        <h3 className="text-2xl font-black text-[#111] mb-4 leading-tight">{project.title}</h3>

                        <p className="text-sm text-[#555] leading-relaxed mb-6">
                          {project.description}
                        </p>

                        {/* Key achievements */}
                        <div className="mb-6">
                          <p className="text-[10px] font-black text-[#555] uppercase tracking-widest mb-3">Key Features</p>
                          <ul className="grid sm:grid-cols-2 gap-2">
                            {[
                              "Drag-and-Drop CDK Workspace",
                              "Role-Based Column Transitions",
                              "Agile Team & Priority Labels",
                              "Responsive Interactive UI"
                            ].map((feat) => (
                              <li key={feat} className="flex items-start gap-2 text-sm text-[#555]">
                                <CheckCircle className="w-4 h-4 text-[#ff6b00] flex-shrink-0 mt-0.5" />
                                {feat}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Tech Badges */}
                        <div className="flex flex-wrap gap-2 mb-8">
                          {project.tech.map((t) => (
                            <SkillBadge key={t} name={t} variant="compact" />
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-3">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-2xl bg-[#fffaf5] border border-[#ececec] text-[#111] hover:border-[#ff6b00]/40 hover:text-[#ff6b00] hover:bg-white transition-all text-sm font-bold shadow-sm"
                          >
                            <span>💻</span>
                            GitHub
                          </a>
                        )}
                        {project.demo && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-2xl bg-gradient-to-r from-[#ff6b00] to-[#ff9d4d] text-white hover:shadow-[0_8px_24px_rgba(255,107,0,0.3)] transition-all text-sm font-bold shadow-sm"
                          >
                            <span>🚀</span>
                            Live Demo
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              }

              // Otherwise render standard project card
              return (
                <motion.div
                  key={project.title}
                  variants={fadeUp}
                  className={`group grid lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden border border-[#ececec] shadow-[0_12px_48px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.07)] hover:border-[#ff6b00]/20 transition-all duration-400 ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}
                >
                  {/* Screenshot */}
                  <div className="relative w-full aspect-video lg:aspect-auto lg:min-h-[360px] overflow-hidden bg-[#f5f5f5]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {/* Featured badge */}
                    <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#ff6b00] text-white text-xs font-bold shadow-lg">
                      <Star className="w-3 h-3 fill-white" />
                      Featured
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 lg:p-10 flex flex-col justify-between bg-white">
                    <div>
                      <h3 className="text-2xl font-black text-[#111] mb-4 leading-tight">{project.title}</h3>

                      {/* Problem / Solution */}
                      <div className="space-y-4 mb-6">
                        <div>
                          <p className="text-[10px] font-black text-[#ff6b00] uppercase tracking-widest mb-1.5">Problem</p>
                          <p className="text-sm text-[#666] leading-relaxed">{project.problemStatement}</p>
                        </div>
                        <div>
                          <p className="text-[10px] font-black text-[#22c55e] uppercase tracking-widest mb-1.5">Solution</p>
                          <p className="text-sm text-[#555] leading-relaxed">{project.solution}</p>
                        </div>
                      </div>

                      {/* Key achievements */}
                      <div className="mb-6">
                        <p className="text-[10px] font-black text-[#555] uppercase tracking-widest mb-3">Key Achievements</p>
                        <ul className="space-y-2">
                          {project.keyAchievements.map((a) => (
                            <li key={a} className="flex items-start gap-2 text-sm text-[#555]">
                              <CheckCircle className="w-4 h-4 text-[#ff6b00] flex-shrink-0 mt-0.5" />
                              {a}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tech */}
                      <div className="flex flex-wrap gap-2 mb-8">
                        {project.tech.map((t) => (
                          <SkillBadge key={t} name={t} variant="compact" />
                        ))}
                      </div>
                    </div>

                    <ProjectLinks github={project.github} demo={project.demo} />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Grid Projects */}
          {gridProjects.length > 0 && (
            <>
              <motion.h3
                variants={fadeUp}
                className="text-sm font-black text-[#888] uppercase tracking-widest mb-8 text-center"
              >
                More Projects
              </motion.h3>
              <div className="grid sm:grid-cols-2 gap-6">
                {gridProjects.map((project) => (
                  <motion.div
                    key={project.title}
                    variants={fadeUp}
                    className="group flex flex-col w-full bg-white rounded-3xl overflow-hidden border border-[#ececec] shadow-sm hover:-translate-y-2 hover:shadow-[0_16px_48px_rgba(0,0,0,0.06)] hover:border-[#ff6b00]/20 transition-all duration-300"
                  >
                    {/* Screenshot */}
                    <div className="relative w-full aspect-[16/9] overflow-hidden border-b border-[#f0f0f0] bg-[#f5f5f5]">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-7 flex flex-col flex-grow">
                      <h3 className="text-[#111] font-black text-lg mb-2">{project.title}</h3>
                      <p className="text-[#666] text-sm mb-5 line-clamp-2 leading-relaxed flex-grow">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.slice(0, 4).map((t) => (
                          <SkillBadge key={t} name={t} variant="compact" />
                        ))}
                        {project.tech.length > 4 && (
                          <span className="px-3 py-1.5 rounded-xl bg-[#fffcf8] border border-[#ececec] text-[11px] font-bold text-[#888]">
                            +{project.tech.length - 4}
                          </span>
                        )}
                      </div>
                      <div className="border-t border-[#f0f0f0] pt-5">
                        <ProjectLinks github={project.github} demo={project.demo} />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </>
          )}

          {/* GitHub CTA */}
          <motion.div
            variants={fadeUp}
            className="text-center mt-14"
          >
            <a
              href="https://github.com/PriyanshuKhakkhar"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full border border-[#ececec] bg-white text-[#111] font-bold hover:border-[#ff6b00]/40 hover:text-[#ff6b00] hover:bg-[#fffaf5] transition-all shadow-sm text-sm"
            >
              <Github className="w-5 h-5" />
              View All Projects on GitHub
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
