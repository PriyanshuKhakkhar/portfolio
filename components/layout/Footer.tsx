"use client";

import { Heart, Github, Linkedin, Mail, Code2, ArrowUp } from "lucide-react";
import { socialLinks } from "@/data/portfolio";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#ececec] bg-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#fff4ea] flex items-center justify-center border border-[#ff6b00]/20">
                <Code2 className="w-5 h-5 text-[#ff6b00]" />
              </div>
              <span className="text-xl font-black text-[#111111] tracking-tight">
                PK<span className="text-[#ff6b00]">.dev</span>
              </span>
            </div>
            <p className="text-[#666666] text-sm max-w-xs text-center md:text-left font-medium">
              Building fast, premium web experiences with modern tools.
            </p>
          </div>

          {/* Center Links */}
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-4">
              {[
                { icon: Github, href: socialLinks.github, label: "GitHub" },
                { icon: Linkedin, href: socialLinks.linkedin, label: "LinkedIn" },
                { icon: Mail, href: socialLinks.email, label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-12 h-12 rounded-full border border-[#ececec] bg-[#fffcf8] flex items-center justify-center text-[#666666] hover:text-[#ff6b00] hover:border-[#ff6b00] hover:bg-[#fff4ea] transition-all shadow-sm"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            <p className="text-sm text-[#666666] flex items-center gap-1.5 font-medium">
              Crafted with <Heart className="w-4 h-4 text-[#ff6b00] fill-[#ff6b00]/20" /> by <span className="text-[#111111] font-bold">Priyanshu Khakkhar</span>
            </p>
          </div>

          {/* Scroll to top */}
          <div className="flex items-center justify-end">
            <button
              onClick={scrollToTop}
              className="w-12 h-12 rounded-full border border-[#ececec] bg-[#fffcf8] flex items-center justify-center text-[#666666] hover:text-[#ff6b00] hover:border-[#ff6b00] hover:bg-[#fff4ea] transition-all shadow-sm"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>

        </div>
        
        <div className="w-full h-px bg-[#ececec] mt-12 mb-6" />
        
        <div className="text-center text-[#999999] text-xs font-bold uppercase tracking-widest">
          &copy; {new Date().getFullYear()} Priyanshu Khakkhar. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
