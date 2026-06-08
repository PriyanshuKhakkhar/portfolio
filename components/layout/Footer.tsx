"use client";

import { Heart, Github, Linkedin, Mail, Code2, ArrowUp } from "lucide-react";
import { socialLinks, navLinks } from "@/data/portfolio";
import { motion } from "framer-motion";

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-[#ececec] bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-12">

          {/* Brand */}
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#fff4ea] flex items-center justify-center border border-[#ff6b00]/20">
                <Code2 className="w-5 h-5 text-[#ff6b00]" />
              </div>
              <span className="text-xl font-black text-[#111111] tracking-tight">
                PK<span className="text-[#ff6b00]">.dev</span>
              </span>
            </div>
            <p className="text-[#666666] text-sm leading-relaxed font-medium max-w-xs">
              Angular Developer building fast, premium web experiences with modern tools and a passion for clean code.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-50 border border-green-200 w-fit">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs font-bold text-green-700">Available for opportunities</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-5">
            <h3 className="text-sm font-black text-[#111111] uppercase tracking-widest">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left text-sm text-[#666666] font-medium hover:text-[#ff6b00] transition-colors py-1"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Social */}
          <div className="flex flex-col gap-5">
            <h3 className="text-sm font-black text-[#111111] uppercase tracking-widest">Connect</h3>
            <div className="flex flex-col gap-3">
              {[
                { icon: Github,   href: socialLinks.github,   label: "GitHub",   handle: "@priyanshukhakkhar" },
                { icon: Linkedin, href: socialLinks.linkedin, label: "LinkedIn",  handle: "Priyanshu Khakkhar" },
                { icon: Mail,     href: socialLinks.email,    label: "Email",     handle: "priyanshukhakkhar@gmail.com" },
              ].map(({ icon: Icon, href, label, handle }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 py-2 px-3 rounded-xl hover:bg-[#fffaf5] transition-all"
                >
                  <div className="w-8 h-8 rounded-lg border border-[#ececec] bg-white flex items-center justify-center text-[#666] group-hover:text-[#ff6b00] group-hover:border-[#ff6b00]/30 transition-all shadow-sm">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#111111]">{label}</div>
                    <div className="text-[11px] text-[#999] truncate max-w-[140px]">{handle}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[#ececec] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[#666666] flex items-center gap-1.5 font-medium">
            Crafted with <Heart className="w-4 h-4 text-[#ff6b00] fill-[#ff6b00]/20" /> by{" "}
            <span className="text-[#111111] font-bold">Priyanshu Khakkhar</span>
          </p>
          <div className="flex items-center gap-4">
            <p className="text-xs text-[#999999] font-bold uppercase tracking-widest">
              &copy; {new Date().getFullYear()} All rights reserved.
            </p>
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-9 h-9 rounded-xl border border-[#ececec] bg-white flex items-center justify-center text-[#666] hover:text-[#ff6b00] hover:border-[#ff6b00]/30 hover:bg-[#fff4ea] transition-all shadow-sm"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}
