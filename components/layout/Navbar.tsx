"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Code2, Send } from "lucide-react";
import { navLinks } from "@/data/portfolio";
import { useActiveSection } from "@/hooks/useActiveSection";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const sectionIds = navLinks.map((l) => l.href.replace("#", ""));
  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-5 px-4 pointer-events-none"
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <nav
          className={cn(
            "pointer-events-auto w-full max-w-6xl rounded-2xl transition-all duration-300",
            scrolled
              ? "bg-white/92 backdrop-blur-xl shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-[#ececec] py-3 px-6"
              : "bg-transparent py-4 px-6 border border-transparent"
          )}
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button
              onClick={() => handleNavClick("#home")}
              className="flex items-center gap-2 group transition-transform hover:scale-105"
            >
              <div className="w-8 h-8 rounded-lg bg-[#fff4ea] border border-[#ff6b00]/20 flex items-center justify-center">
                <Code2 className="w-4 h-4 text-[#ff6b00]" strokeWidth={2.5} />
              </div>
              <span className="font-black text-xl text-[#111] tracking-tight">
                PK<span className="text-[#ff6b00]">.dev</span>
              </span>
            </button>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace("#", "");
                return (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className={cn(
                      "relative px-3 py-2 text-[13px] font-bold rounded-lg transition-all duration-200",
                      isActive
                        ? "text-[#ff6b00] bg-[#fff4ea]"
                        : "text-[#555] hover:text-[#ff6b00] hover:bg-[#fff9f5]"
                    )}
                  >
                    {link.label}
                    {isActive && (
                      <motion.div
                        layoutId="nav-active"
                        className="absolute inset-0 rounded-lg bg-[#fff4ea] -z-10"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* CTA */}
            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={() => handleNavClick("#contact")}
                className="px-5 py-2.5 text-sm font-bold rounded-xl bg-gradient-to-r from-[#ff6b00] to-[#ff9d4d] text-white hover:shadow-[0_4px_16px_rgba(255,107,0,0.35)] hover:-translate-y-0.5 transition-all flex items-center gap-2"
              >
                <Send className="w-3.5 h-3.5" />
                Hire Me
              </button>
            </div>

            {/* Mobile Toggle */}
            <button
              className="lg:hidden relative z-50 p-2.5 rounded-xl text-[#111] bg-white border border-[#ececec] shadow-sm"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed inset-0 z-40 lg:hidden bg-white/97 backdrop-blur-xl flex flex-col items-center justify-center"
          >
            <div className="flex flex-col items-center gap-2 w-full px-8">
              {navLinks.map((link, i) => {
                const isActive = activeSection === link.href.replace("#", "");
                return (
                  <motion.button
                    key={link.href}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 12 }}
                    transition={{ delay: i * 0.04 }}
                    onClick={() => handleNavClick(link.href)}
                    className={cn(
                      "w-full py-3 px-6 rounded-2xl text-xl font-bold transition-colors text-center",
                      isActive
                        ? "text-[#ff6b00] bg-[#fff4ea]"
                        : "text-[#111] hover:text-[#ff6b00] hover:bg-[#fffaf5]"
                    )}
                  >
                    {link.label}
                  </motion.button>
                );
              })}
              <motion.button
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 12 }}
                transition={{ delay: 0.35 }}
                onClick={() => handleNavClick("#contact")}
                className="mt-4 px-8 py-4 rounded-2xl bg-gradient-to-r from-[#ff6b00] to-[#ff9d4d] text-white font-bold text-lg w-full flex items-center justify-center gap-2 shadow-lg shadow-orange-500/25"
              >
                <Send className="w-5 h-5" />
                Hire Me
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
