"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

export default function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    await new Promise((r) => setTimeout(r, 1500));
    setStatus("sent");
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setStatus("idle"), 4000);
  };

  return (
    <section id="contact" className="relative py-24 overflow-hidden bg-[#fffaf5]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#fff4ea] text-[#ff6b00] text-sm font-bold mb-4">
            Get In Touch
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-[#111111] mb-6">
            Let&apos;s <span className="text-[#ff6b00]">collaborate</span>
          </h2>
          <p className="text-[#666666] max-w-lg mx-auto text-lg font-medium">
            Have a project in mind or just want to chat? Send me a message and I&apos;ll get back to you shortly.
          </p>
        </motion.div>

        {/* Form Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="p-8 sm:p-12 rounded-[2rem] bg-white border border-[#ececec] shadow-[0_20px_50px_rgba(0,0,0,0.04)]"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { id: "name", label: "Full Name", type: "text", placeholder: "Priyanshu Khakkhar" },
                { id: "email", label: "Email Address", type: "email", placeholder: "hello@example.com" },
              ].map((field) => (
                <div key={field.id} className="space-y-2">
                  <label htmlFor={field.id} className="text-sm font-bold text-[#111111] ml-1">
                    {field.label}
                  </label>
                  <input
                    id={field.id}
                    name={field.id}
                    type={field.type}
                    required
                    placeholder={field.placeholder}
                    value={form[field.id as keyof typeof form]}
                    onChange={handleChange}
                    className="w-full px-5 py-4 rounded-2xl bg-[#fffcf8] border border-[#ececec] text-[#111111] placeholder:text-[#999999] focus:outline-none focus:border-[#ff6b00] focus:ring-4 focus:ring-[#ff6b00]/10 transition-all duration-300 font-medium"
                  />
                </div>
              ))}
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-bold text-[#111111] ml-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Tell me about your project..."
                value={form.message}
                onChange={handleChange}
                className="w-full px-5 py-4 rounded-2xl bg-[#fffcf8] border border-[#ececec] text-[#111111] placeholder:text-[#999999] focus:outline-none focus:border-[#ff6b00] focus:ring-4 focus:ring-[#ff6b00]/10 transition-all duration-300 resize-none font-medium"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={status === "sending" || status === "sent"}
              className="w-full flex items-center justify-center gap-3 py-4 rounded-2xl bg-gradient-to-r from-[#ff6b00] to-[#ff9d4d] text-white font-bold text-lg hover:shadow-[0_8px_25px_rgba(255,107,0,0.3)] disabled:opacity-70 disabled:cursor-not-allowed transition-all"
            >
              {status === "sending" && (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              )}
              {status === "sent" && <CheckCircle className="w-5 h-5" />}
              {status === "error" && <AlertCircle className="w-5 h-5" />}
              {status === "idle" && <Send className="w-5 h-5" />}
              <span>
                {status === "sending" ? "Sending..." : status === "sent" ? "Message Sent!" : status === "error" ? "Try Again" : "Send Message"}
              </span>
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
