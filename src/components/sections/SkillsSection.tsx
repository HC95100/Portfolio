import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { portfolioData } from "@/data/portfolioData";
import * as LucideIcons from "lucide-react";
import { motion } from "framer-motion";

// Helper to get Lucide icon by string name
const getLucideIcon = (iconName: string) => {
  const IconComponent = (LucideIcons as any)[iconName];
  return IconComponent ? <IconComponent className="h-6 w-6 text-white" /> : <LucideIcons.Code className="h-6 w-6 text-white" />;
};

export const SkillsSection: React.FC = () => {
  const categoryVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const skillCardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
  };

  return (
    <section id="skills" className="py-16 px-4 bg-background">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-dark-blue mb-12 font-montserrat flex items-center justify-center gap-4">
          <LucideIcons.Cog className="h-8 w-8 text-blue-primary" />
          Compétences Techniques
        </h2>
        <div className="flex flex-col gap-12">
          {portfolioData.skills.technicalCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              variants={categoryVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: catIndex * 0.1 }}
              className="skills-category"
            >
              <h3 className="text-2xl font-semibold text-dark-blue mb-6 pb-3 border-b-2 border-light-gray font-montserrat">
                {category.category}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    variants={skillCardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ delay: skillIndex * 0.05 }}
                  >
                    <Card className="shadow-lg hover:shadow-xl transition-all duration-300 border-light-gray bg-white h-full flex items-center p-5 hover:-translate-y-1 hover:border-blue-primary">
                      <div className="w-16 h-16 rounded-lg flex items-center justify-center mr-4 icon-gradient-purple-blue shadow-md flex-shrink-0">
                        {getLucideIcon(skill.icon)}
                      </div>
                      <div className="flex-grow">
                        <CardTitle className="text-lg font-semibold text-dark-blue mb-1 font-montserrat">{skill.name}</CardTitle>
                        <p className="text-dark-text text-sm font-roboto">{skill.description}</p>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};