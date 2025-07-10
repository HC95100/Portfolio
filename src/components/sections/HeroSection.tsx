import React from "react";
import { Button } from "@/components/ui/button";
import { portfolioData } from "@/data/portfolioData";
import { Download, Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

export const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-4 bg-background">
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column: Profile Picture and Social Links */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col items-center lg:items-start text-center lg:text-left"
        >
          {portfolioData.profilePicture && (
            <img
              src={portfolioData.profilePicture}
              alt={portfolioData.fullName}
              className="w-32 h-32 rounded-full object-cover mb-6 shadow-lg border-4 border-primary"
            />
          )}
          <div className="flex space-x-4 mb-6">
            {portfolioData.socialLinks.github && (
              <a
                href={portfolioData.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition-colors"
                aria-label="GitHub Profile"
              >
                <Github size={32} />
              </a>
            )}
            {portfolioData.socialLinks.linkedin && (
              <a
                href={portfolioData.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={32} />
              </a>
            )}
            {portfolioData.email && (
              <a
                href={`mailto:${portfolioData.email}`}
                className="text-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail size={32} />
              </a>
            )}
          </div>
        </motion.div>

        {/* Right Column: Text Content */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="font-extrabold text-foreground mb-4 leading-tight font-montserrat"
          >
            <span className="text-gradient-blue text-4xl md:text-6xl">{portfolioData.fullName}</span>
            <br />
            <span className="text-2xl md:text-4xl">Votre Futur Alternant Dans l'IT</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-base md:text-lg text-muted-foreground max-w-3xl mb-8 font-roboto"
          >
            {portfolioData.bio}
          </motion.p>
          {portfolioData.cvDownloadLink && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <Button asChild size="md" className="px-6 py-4 text-base shadow-lg hover:shadow-xl transition-shadow bg-orange-accent text-white hover:bg-orange-accent/90">
                <a href={portfolioData.cvDownloadLink} download>
                  <Download className="mr-2 h-5 w-5" /> Télécharger mon CV
                </a>
              </Button>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};