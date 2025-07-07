import { MadeWithDyad } from "@/components/made-with-dyad";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { CertificationsSection } from "@/components/sections/CertificationsSection"; // Nouvelle importation
import { ContactSection } from "@/components/sections/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <EducationSection />
        <CertificationsSection /> {/* Nouvelle section ajoutée */}
        <ContactSection />
      </main>
      <Footer />
      <MadeWithDyad />
    </div>
  );
};

export default Index;