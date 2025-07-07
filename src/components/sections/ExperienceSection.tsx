import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { portfolioData } from "@/data/portfolioData";
import { Briefcase } from "lucide-react";

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experiences" className="py-16 px-4 bg-secondary">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">Mes Expériences Professionnelles</h2>
        <div className="relative pl-8 md:pl-16">
          {portfolioData.experiences.map((exp, index) => (
            <div key={exp.id} className="mb-10 last:mb-0 flex items-start">
              <div className="absolute left-0 md:left-8 flex flex-col items-center">
                <div className="w-4 h-4 bg-primary rounded-full z-10 ring-4 ring-secondary flex items-center justify-center">
                  <Briefcase className="h-3 w-3 text-primary-foreground" />
                </div>
                {index < portfolioData.experiences.length - 1 && (
                  <div className="h-full w-0.5 bg-border absolute top-0 mt-4" style={{ height: 'calc(100% + 2.5rem)' }}></div>
                )}
              </div>
              <Card className="ml-8 md:ml-12 flex-grow shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-xl md:text-2xl">{exp.role}</CardTitle>
                  <p className="text-muted-foreground text-base md:text-lg">{exp.company} | {exp.period}</p>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                    {exp.missions.map((mission, i) => (
                      <li key={i}>{mission}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};