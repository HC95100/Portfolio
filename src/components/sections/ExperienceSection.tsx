import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { portfolioData } from "@/data/portfolioData";
import { Briefcase } from "lucide-react";
import { motion } from "framer-motion";

export const ExperienceSection: React.FC = () => {
  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="experiences" className="py-16 px-4 bg-background">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-dark-blue mb-12 font-montserrat">Mes Expériences Professionnelles</h2>
        <div className="relative pl-8 md:pl-16">
          {portfolioData.experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.1 }}
              className="mb-10 last:mb-0 flex items-start"
            >
              <div className="absolute left-0 md:left-8 flex flex-col items-center">
                <div className="w-6 h-6 bg-orange-accent rounded-full z-10 ring-4 ring-background flex items-center justify-center">
                  <Briefcase className="h-4 w-4 text-white" />
                </div>
                <div className="h-full w-0.5 bg-light-gray absolute top-0 mt-6" style={{ height: 'calc(100% + 2.5rem)' }}></div>
              </div>
              <Card className="ml-8 md:ml-12 flex-grow shadow-lg hover:shadow-xl transition-shadow duration-300 border-light-gray bg-white">
                <CardHeader>
                  <CardTitle className="text-xl md:text-2xl text-dark-blue font-montserrat">{exp.role}</CardTitle>
                  <p className="text-dark-text text-base md:text-lg font-roboto">{exp.company} | {exp.period}</p>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-1 text-dark-text font-roboto">
                    {exp.missions.map((mission, i) => (
                      <li key={i}>{mission}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};