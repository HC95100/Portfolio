import React from "react";
import { portfolioData } from "@/data/portfolioData";
import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

export const Footer: React.FC = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="border-t py-8 bg-secondary text-secondary-foreground"
    >
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-center md:text-left">
          &copy; {new Date().getFullYear()} {portfolioData.fullName}. Tous droits réservés.
        </p>
        <div className="flex space-x-4">
          {portfolioData.socialLinks.github && (
            <a
              href={portfolioData.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary-foreground hover:text-primary transition-colors"
              aria-label="GitHub Profile"
            >
              <Github size={24} />
            </a>
          )}
          {portfolioData.socialLinks.linkedin && (
            <a
              href={portfolioData.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={24} />
            </a>
          )}
          {portfolioData.email && (
            <a
              href={`mailto:${portfolioData.email}`}
              className="text-secondary-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          )}
        </div>
      </div>
    </motion.footer>
  );
};