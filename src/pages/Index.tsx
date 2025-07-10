import { MadeWithDyad } from "@/components/made-with-dyad";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { CertificationsSection } from "@/components/sections/CertificationsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { SoftSkillsSection } from "@/components/sections/SoftSkillsSection"; // New import
import { LanguagesSection } from "@/components/sections/LanguagesSection"; // New import
import { AnimatedSection } from "@/components/AnimatedSection";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-pattern">
      <Navbar />
      <main className="flex-grow">
        <AnimatedSection id="hero">
          <HeroSection />
        </AnimatedSection>
        <AnimatedSection id="skills">
          <SkillsSection />
        </AnimatedSection>
        <AnimatedSection id="soft-skills"> {/* New section */}
          <SoftSkillsSection />
        </AnimatedSection>
        <AnimatedSection id="languages"> {/* New section */}
          <LanguagesSection />
        </AnimatedSection>
        <AnimatedSection id="projects">
          <ProjectsSection />
        </AnimatedSection>
        <AnimatedSection id="experiences">
          <ExperienceSection />
        </AnimatedSection>
        <AnimatedSection id="education">
          <EducationSection />
        </AnimatedSection>
        <AnimatedSection id="certifications">
          <CertificationsSection />
        </AnimatedSection>
        <AnimatedSection id="contact">
          <ContactSection />
        </AnimatedSection>
      </main>
      <Footer />
      <MadeWithDyad />
    </div>
  );
};

export default Index;