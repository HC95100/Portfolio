import React from "react";
import { Button } from "@/components/ui/button";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"; // Supprimé
import { portfolioData } from "@/data/portfolioData";
import { Download } from "lucide-react";

export const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center text-center py-16 px-4 bg-background">
      {/* Avatar supprimé */}
      <h1 className="text-4xl md:text-6xl font-extrabold text-foreground mb-4 leading-tight">
        Bonjour, je suis <span className="text-primary">{portfolioData.fullName}</span>
      </h1>
      <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mb-8">
        {portfolioData.bio}
      </p>
      {portfolioData.cvDownloadLink && (
        <Button asChild size="lg" className="text-lg px-8 py-6">
          <a href={portfolioData.cvDownloadLink} download>
            <Download className="mr-2 h-5 w-5" /> Télécharger mon CV
          </a>
        </Button>
      )}
    </section>
  );
};