import React from "react";
import { Button } from "@/components/ui/button";
import { portfolioData } from "@/data/portfolioData";
import { Download, Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

export const HeroSection: React.FC = () => {
  // Log the image path to the console for debugging
  console.log("Profile Picture Path:", portfolioData.profilePicture);

  return (
    <section id="hero" className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-4 bg-background">
      <div className="container grid grid-cols-1 lg:grid-cols-[1fr_3fr] gap-12 items-center py-10">
        {/* Left Column: Profile Picture and Social Links */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col items-center lg:items-start text-center lg:text-left"
        >
          {portfolioData.profilePicture ? (
            <img
              src={portfolioData.profilePicture}
              alt={portfolioData.fullName}
              className="w-48 h-48 rounded-full object-cover mb-6 shadow-lg"
            />
          ) : (
            <div className="bg-light-gray rounded-full w-48 h-48 flex items-center justify-center overflow-hidden mb-6 shadow-lg">
              <Mail className="text-dark-blue text-6xl" /> {/* Placeholder icon */}
            </div>
          )}
          <div className="mt-4 text-center">
            <div className="flex justify-center space-x-4">
              {portfolioData.socialLinks.linkedin && (
                <a href={portfolioData.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-dark-blue hover:text-orange-accent transition-colors" aria-label="LinkedIn Profile">
                  <Linkedin size={24} />
                </a>
              )}
              {portfolioData.socialLinks.github && (
                <a href={portfolioData.socialLinks.github} target="_blank" rel="noopener noreferrer" className="text-dark-blue hover:text-orange-accent transition-colors" aria-label="GitHub Profile">
                  <Github size={24} />
                </a>
              )}
              {portfolioData.email && (
                <a href={`mailto:${portfolioData.email}`} className="text-dark-blue hover:text-orange-accent transition-colors" aria-label="Email">
                  <Mail size={24} />
                </a>
              )}
            </div>
          </div>
          {portfolioData.cvDownloadLink && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="mt-6"
            >
              <Button asChild className="px-6 py-3 text-base shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-r from-blue-primary to-dark-blue text-white hover:from-blue-primary/90 hover:to-dark-blue/90 rounded-full">
                <a href={portfolioData.cvDownloadLink} download>
                  <Download className="mr-2 h-5 w-5" /> Télécharger mon CV
                </a>
              </Button>
            </motion.div>
          )}
        </motion.div>

        {/* Right Column: Text Content */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-dark-blue text-2xl font-semibold mb-2 font-montserrat"
          >
            Bonjour, je suis
          </motion.h2>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="font-extrabold text-foreground mb-4 leading-tight font-montserrat"
          >
            <span className="text-gradient-blue text-4xl md:text-6xl">{portfolioData.fullName}</span>
            <br />
            <span className="text-orange-accent text-xl md:text-3xl font-bold">Votre Futur Alternant Dans l'IT</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="border-l-4 border-orange-accent bg-light-gray p-3 mb-3 w-full max-w-3xl text-left"
          >
            <p className="text-dark-text text-lg font-roboto">
              <span className="font-bold">Objectif :</span> Recherche une alternance dans l'IT pour septembre 2025
            </p>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-dark-text text-lg max-w-3xl mb-2 font-roboto text-left"
          >
            {portfolioData.bio}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="bg-light-gray p-2 rounded-lg w-full max-w-3xl text-left"
          >
            <p className="text-dark-text font-medium font-roboto">
              Rythme souhaité : 2 semaines en entreprise / 2 semaines en formation
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};