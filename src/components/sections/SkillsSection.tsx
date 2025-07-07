import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { portfolioData } from "@/data/portfolioData";
import { Code, Users, Languages } from "lucide-react";

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-16 px-4 bg-secondary">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">Mes Compétences</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="flex flex-row items-center space-x-4 pb-2">
              <Code className="h-8 w-8 text-primary" />
              <CardTitle className="text-2xl font-semibold">Techniques</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2 pt-4">
              {portfolioData.skills.technical.map((skill, index) => (
                <Badge key={index} variant="default" className="px-3 py-1 text-base">
                  {skill}
                </Badge>
              ))}
            </CardContent>
          </Card>

          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="flex flex-row items-center space-x-4 pb-2">
              <Users className="h-8 w-8 text-primary" />
              <CardTitle className="text-2xl font-semibold">Humaines</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2 pt-4">
              {portfolioData.skills.human.map((skill, index) => (
                <Badge key={index} variant="default" className="px-3 py-1 text-base">
                  {skill}
                </Badge>
              ))}
            </CardContent>
          </Card>

          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="flex flex-row items-center space-x-4 pb-2">
              <Languages className="h-8 w-8 text-primary" />
              <CardTitle className="text-2xl font-semibold">Linguistiques</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2 pt-4">
              {portfolioData.skills.languages.map((lang, index) => (
                <Badge key={index} variant="default" className="px-3 py-1 text-base">
                  {lang}
                </Badge>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};