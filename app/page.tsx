import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";
import CertificationsSection from "@/components/sections/CertificationsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#fffcf8] text-[#111111] selection:bg-[#ff6b00]/20 overflow-x-hidden">
      {/* Ambient background blobs */}
      <div className="absolute top-[-8%] right-[-4%] w-[38%] h-[38%] rounded-[100%] bg-[#ff6b00]/8 blur-[120px] pointer-events-none" />
      <div className="absolute top-[35%] left-[-8%] w-[28%] h-[35%] rounded-[100%] bg-[#ff9d4d]/8 blur-[120px] pointer-events-none" />
      <div className="absolute top-[65%] right-[5%] w-[30%] h-[30%] rounded-[100%] bg-[#ff6b00]/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-5%] left-[10%] w-[40%] h-[30%] rounded-[100%] bg-[#ff9d4d]/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10">
        <Navbar />

        {/* 1. Hero */}
        <HeroSection />

        {/* 2. About */}
        <AboutSection />

        {/* 3. Services / Expertise */}
        <ServicesSection />

        {/* 4. Experience */}
        <ExperienceSection />

        {/* 5. Featured Projects — Crown jewel section */}
        <ProjectsSection />

        {/* 6. Skills */}
        <SkillsSection />

        {/* 7. Certifications */}
        <CertificationsSection />

        {/* 8. Testimonials */}
        <TestimonialsSection />

        {/* 9. Contact */}
        <ContactSection />

        {/* 10. Footer */}
        <Footer />
      </div>
    </main>
  );
}
