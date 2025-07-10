import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { portfolioData } from "@/data/portfolioData";
import { motion } from "framer-motion"; // Import motion

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children, onClick }) => {
  return (
    <Button variant="ghost" asChild className="text-lg text-foreground hover:text-primary transition-colors">
      <a href={href} onClick={onClick}>
        {children}
      </a>
    </Button>
  );
};

export const Navbar: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 120, damping: 14, delay: 0.2 }}
      className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm"
    >
      <div className="container flex h-16 items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex items-center space-x-4"
        >
          <a href="#hero" onClick={() => scrollToSection("hero")} className="text-2xl font-bold text-primary hover:text-primary/80 transition-colors">
            {portfolioData.fullName}
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="hidden md:flex items-center space-x-6"
        >
          <NavLink href="#skills" onClick={() => scrollToSection("skills")}>Compétences</NavLink>
          <NavLink href="#projects" onClick={() => scrollToSection("projects")}>Projets</NavLink>
          <NavLink href="#experiences" onClick={() => scrollToSection("experiences")}>Expériences</NavLink>
          <NavLink href="#education" onClick={() => scrollToSection("education")}>Formation</NavLink>
          <NavLink href="#contact" onClick={() => scrollToSection("contact")}>Contact</NavLink>
        </motion.div>
        {/* Mobile navigation will be added later if needed, for simplicity we start with desktop */}
      </div>
    </motion.nav>
  );
};