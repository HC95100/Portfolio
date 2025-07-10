import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { portfolioData } from "@/data/portfolioData";
import { Github, Link } from "lucide-react";
import { motion } from "framer-motion";

export const ProjectsSection: React.FC = () => {
  const projectCardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <section id="projects" className="py-16 px-4 bg-background">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-dark-blue mb-12 font-montserrat">Mes Projets</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={projectCardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 border-light-gray bg-white h-full">
                <CardHeader>
                  <CardTitle className="text-2xl text-dark-blue font-montserrat">{project.title}</CardTitle>
                  <CardDescription className="text-dark-text font-roboto">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <h4 className="text-lg font-semibold mb-2 text-dark-blue font-montserrat">Outils utilisés :</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool, idx) => (
                      <Badge key={idx} className="px-3 py-1 text-sm bg-light-gray text-dark-text font-roboto">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex flex-wrap gap-2 pt-4">
                  {project.githubLink && (
                    <Button asChild variant="outline" className="flex items-center gap-2 border-blue-primary text-blue-primary hover:bg-blue-primary hover:text-white font-roboto">
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" /> GitHub
                      </a>
                    </Button>
                  )}
                  {project.liveLink && (
                    <Button asChild className="flex items-center gap-2 bg-gradient-to-r from-blue-primary to-dark-blue text-white hover:from-blue-primary/90 hover:to-dark-blue/90 font-roboto">
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                        <Link className="h-4 w-4" /> Voir le projet
                      </a>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};