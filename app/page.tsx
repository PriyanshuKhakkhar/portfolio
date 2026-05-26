import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#fffcf8] text-[#111111] selection:bg-[#ff6b00]/20 overflow-hidden">
      {/* Soft floating background blobs matching the reference */}
      <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] rounded-[100%] bg-[#ff6b00]/10 blur-[100px] pointer-events-none" />
      <div className="absolute top-[40%] left-[-10%] w-[30%] h-[40%] rounded-[100%] bg-[#ff9d4d]/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[10%] w-[50%] h-[40%] rounded-[100%] bg-[#ff6b00]/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </div>
    </main>
  );
}
