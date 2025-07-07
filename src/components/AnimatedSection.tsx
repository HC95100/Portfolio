import React from "react";
import { motion } from "framer-motion";

interface AnimatedSectionProps {
  id: string;
  children: React.ReactNode;
  delay?: number;
}

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({ id, children, delay = 0 }) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: delay }}
      className="py-16 px-4" // Default padding, can be overridden by children
    >
      {children}
    </motion.section>
  );
};