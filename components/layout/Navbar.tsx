"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Code2, Sun, Moon, Send } from "lucide-react";
import { navLinks } from "@/data/portfolio";
import { useActiveSection } from "@/hooks/useActiveSection";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const sectionIds = navLinks.map((l) => l.href.replace("#", ""));
  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
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
        className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4 pointer-events-none"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <nav
          className={cn(
            "pointer-events-auto w-full max-w-6xl rounded-full transition-all duration-300",
            scrolled
              ? "bg-white/90 backdrop-blur-md shadow-sm border border-[#ececec] py-3 px-6"
              : "bg-transparent py-4 px-6 border border-transparent"
          )}
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button
              onClick={() => handleNavClick("#home")}
              className="flex items-center gap-2 group transition-transform hover:scale-105"
            >
              <div className="relative text-[#ff6b00]">
                <Code2 className="w-8 h-8" strokeWidth={2.5} />
              </div>
              <span className="font-bold text-xl text-[#111] tracking-tight">
                PK<span className="text-[#ff6b00]">.dev</span>
              </span>
            </button>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace("#", "");
                return (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className={cn(
                      "relative text-[15px] font-bold transition-colors duration-200",
                      isActive
                        ? "text-[#ff6b00]"
                        : "text-[#111111] hover:text-[#ff6b00]"
                    )}
                  >
                    <span className="relative z-10">{link.label}</span>
                    {isActive && (
                      <motion.div
                        layoutId="nav-dot"
                        className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#ff6b00]"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* CTAs */}
            <div className="hidden md:flex items-center gap-4">
              <button className="w-10 h-10 rounded-full bg-white border border-[#ececec] flex items-center justify-center text-[#111] hover:bg-gray-50 transition-colors shadow-sm">
                <Sun className="w-5 h-5" />
              </button>
              
              <button
                onClick={() => handleNavClick("#contact")}
                className="px-6 py-2.5 text-sm font-bold rounded-full bg-gradient-to-r from-[#ff6b00] to-[#ff9d4d] text-white hover:shadow-[0_4px_15px_rgba(255,107,0,0.3)] transition-all flex items-center gap-2"
              >
                <Send className="w-4 h-4" />
                Hire Me
              </button>
            </div>

            {/* Mobile Toggle */}
            <button
              className="md:hidden relative z-50 p-2.5 rounded-full text-[#111] bg-white border border-[#ececec] shadow-sm"
              onClick={() => setIsOpen(!isOpen)}
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden bg-white/95 backdrop-blur-md flex flex-col items-center justify-center"
          >
            <div className="flex flex-col items-center gap-6 w-full px-8">
              {navLinks.map((link, i) => {
                const isActive = activeSection === link.href.replace("#", "");
                return (
                  <motion.button
                    key={link.href}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => handleNavClick(link.href)}
                    className={cn(
                      "text-2xl font-bold transition-colors",
                      isActive ? "text-[#ff6b00]" : "text-[#111] hover:text-[#ff6b00]"
                    )}
                  >
                    {link.label}
                  </motion.button>
                );
              })}
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ delay: 0.3 }}
                onClick={() => handleNavClick("#contact")}
                className="mt-6 px-8 py-3 rounded-full bg-gradient-to-r from-[#ff6b00] to-[#ff9d4d] text-white font-bold text-lg w-full flex items-center justify-center gap-2 shadow-lg shadow-orange-500/30"
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
