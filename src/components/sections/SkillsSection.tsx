import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { portfolioData } from "@/data/portfolioData";
import { Code, Users, Languages } from "lucide-react";
import { motion } from "framer-motion";

export const SkillsSection: React.FC = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="skills" className="py-16 px-4 bg-secondary">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">Mes Compétences</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 border-primary/20">
              <CardHeader className="flex flex-row items-center space-x-4 pb-2">
                <Code className="h-8 w-8 text-primary" />
                <CardTitle className="text-2xl font-semibold">Techniques</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2 pt-4">
                {portfolioData.skills.technical.map((skill, index) => (
                  <Badge key={index} variant="default" className="px-3 py-1 text-base bg-primary text-primary-foreground hover:bg-primary/90">
                    {skill}
                  </Badge>
                ))}
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} transition={{ delay: 0.1 }}>
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 border-primary/20">
              <CardHeader className="flex flex-row items-center space-x-4 pb-2">
                <Users className="h-8 w-8 text-primary" />
                <CardTitle className="text-2xl font-semibold">Humaines</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2 pt-4">
                {portfolioData.skills.human.map((skill, index) => (
                  <Badge key={index} variant="default" className="px-3 py-1 text-base bg-primary text-primary-foreground hover:bg-primary/90">
                    {skill}
                  </Badge>
                ))}
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} transition={{ delay: 0.2 }}>
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 border-primary/20">
              <CardHeader className="flex flex-row items-center space-x-4 pb-2">
                <Languages className="h-8 w-8 text-primary" />
                <CardTitle className="text-2xl font-semibold">Linguistiques</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2 pt-4">
                {portfolioData.skills.languages.map((lang, index) => (
                  <Badge key={index} variant="default" className="px-3 py-1 text-base bg-primary text-primary-foreground hover:bg-primary/90">
                    {lang}
                  </Badge>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};