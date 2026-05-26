"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, Briefcase, User } from "lucide-react";

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-24 overflow-hidden bg-[#fffaf5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        
        {/* Main Card Container matching reference */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-[2rem] p-8 sm:p-12 lg:p-16 shadow-[0_15px_50px_rgba(0,0,0,0.03)] border border-[#f5f5f5]"
        >
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#fff4ea] text-[#ff6b00] text-sm font-bold mb-6">
                <User className="w-4 h-4" />
                About Me
              </div>
              
              <h2 className="text-4xl sm:text-5xl font-black text-[#111111] mb-6 tracking-tight">
                Getting to know <span className="text-[#ff6b00]">me</span>
              </h2>

              <div className="space-y-4 text-[#666666] text-lg leading-relaxed">
                <p>
                  I&apos;m a dedicated and passionate Angular Developer currently working as an
                  intern at GTC Software. I love creating responsive web applications and
                  solving real-world problems with clean and efficient code.
                </p>
                <p>
                  My goal is to build digital experiences that not only look great but also
                  provide seamless performance for end-users.
                </p>
              </div>
            </div>

            {/* Right Content - Cards */}
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { 
                  icon: GraduationCap, 
                  label: "Education", 
                  title: "A D Patel Institute of Technology, CVM University", 
                  sub: "B.Tech Information Technology" 
                },
                { 
                  icon: Briefcase, 
                  label: "Current Role", 
                  title: "Angular Developer Intern\nGTC Software", 
                  sub: "Building modern web applications with Angular" 
                },
              ].map(({ icon: Icon, label, title, sub }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  className="p-6 rounded-3xl bg-[#fffcf8] border border-[#ececec] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <Icon className="w-6 h-6 text-[#ff6b00]" />
                    <span className="font-bold text-[#111111]">{label}</span>
                  </div>
                  <h3 className="font-bold text-[#111111] text-base mb-2 whitespace-pre-line leading-snug">
                    {title}
                  </h3>
                  <p className="text-[#666666] text-sm leading-relaxed">
                    {sub}
                  </p>
                </motion.div>
              ))}
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
