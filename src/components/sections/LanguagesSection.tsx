import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { portfolioData } from "@/data/portfolioData";
import * as LucideIcons from "lucide-react";
import { motion } from "framer-motion";

// Helper to get Lucide icon by string name
const getLucideIcon = (iconName: string) => {
  const IconComponent = (LucideIcons as any)[iconName];
  return IconComponent ? <IconComponent className="h-8 w-8 text-white" /> : <LucideIcons.Globe className="h-8 w-8 text-white" />;
};

export const LanguagesSection: React.FC = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const getLevelBadgeClass = (level: string) => {
    switch (level.toLowerCase()) {
      case "b2":
        return "bg-gradient-to-r from-purple-blue to-dark-purple";
      case "b1":
        return "bg-gradient-to-r from-pink-accent to-red-pink";
      case "a2":
        return "bg-gradient-to-r from-light-orange-pastel to-peach-pastel";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <section id="languages" className="py-16 px-4 bg-background">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-dark-blue mb-12 font-montserrat flex items-center justify-center gap-4">
          <LucideIcons.Globe className="h-8 w-8 text-orange-accent" />
          Langues
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.skills.languages.map((lang, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="shadow-lg hover:shadow-xl transition-all duration-300 border-light-gray bg-white h-full flex items-center p-6 hover:-translate-y-1 hover:border-light-orange-pastel">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mr-4 icon-gradient-orange-peach shadow-lg flex-shrink-0">
                  {getLucideIcon(lang.icon)}
                </div>
                <div className="flex-grow">
                  <CardTitle className="text-xl font-semibold text-dark-blue mb-1 font-montserrat">{lang.name}</CardTitle>
                  <div className="flex items-center gap-2 mb-1">
                    <Badge className={`px-3 py-1 text-sm font-semibold text-white ${getLevelBadgeClass(lang.level)} font-roboto`}>
                      Niveau {lang.level}
                    </Badge>
                  </div>
                  {lang.certification && (
                    <p className="text-dark-text text-sm font-roboto">{lang.certification}</p>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};