import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { portfolioData } from "@/data/portfolioData";
import * as LucideIcons from "lucide-react";
import { motion } from "framer-motion";

// Helper to get Lucide icon by string name
const getLucideIcon = (iconName: string) => {
  const IconComponent = (LucideIcons as any)[iconName];
  return IconComponent ? <IconComponent className="h-8 w-8 text-white" /> : <LucideIcons.Lightbulb className="h-8 w-8 text-white" />;
};

export const SoftSkillsSection: React.FC = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="soft-skills" className="py-16 px-4 bg-background">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-dark-blue mb-12 font-montserrat flex items-center justify-center gap-4">
          <LucideIcons.Users className="h-8 w-8 text-pink-accent" />
          Compétences Humaines
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.skills.human.map((skill, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="shadow-lg hover:shadow-xl transition-all duration-300 border-light-gray bg-white h-full flex flex-col items-center text-center p-6 hover:-translate-y-1 hover:border-pink-accent">
                <div className="w-20 h-20 rounded-full flex items-center justify-center mb-4 icon-gradient-pink-red shadow-lg">
                  {getLucideIcon(skill.icon)}
                </div>
                <CardTitle className="text-xl font-semibold text-dark-blue mb-2 font-montserrat">{skill.name}</CardTitle>
                <CardContent className="p-0 text-dark-text font-roboto flex-grow">
                  <p>{skill.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};