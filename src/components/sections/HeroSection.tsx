import React from "react";
import { Button } from "@/components/ui/button";
import { portfolioData } from "@/data/portfolioData";
import { Download } from "lucide-react";
import { motion } from "framer-motion";

export const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center text-center py-16 px-4 bg-gradient-to-br from-background to-secondary">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="text-4xl md:text-6xl font-extrabold text-foreground mb-4 leading-tight"
      >
        Bonjour, je suis <span className="text-primary">{portfolioData.fullName}</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="text-lg md:text-xl text-muted-foreground max-w-3xl mb-8"
      >
        {portfolioData.bio}
      </motion.p>
      {portfolioData.cvDownloadLink && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <Button asChild size="lg" className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-shadow">
            <a href={portfolioData.cvDownloadLink} download>
              <Download className="mr-2 h-5 w-5" /> Télécharger mon CV
            </a>
          </Button>
        </motion.div>
      )}
    </section>
  );
};