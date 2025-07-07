import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { portfolioData } from "@/data/portfolioData";
import { Mail, Phone, Linkedin } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

export const ContactSection: React.FC = () => {
  const { toast } = useToast();

  // Le handleSubmit n'est plus nécessaire car le formulaire est supprimé.
  // Cependant, je le laisse commenté au cas où vous voudriez le réintégrer plus tard.
  /*
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message envoyé !",
      description: "Merci pour votre message. Je vous recontacterai bientôt.",
    });
    (e.target as HTMLFormElement).reset();
  };
  */

  return (
    <section id="contact" className="py-16 px-4 bg-secondary">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">Me Contacter</h2>
        <div className="flex justify-center"> {/* Centrer la carte restante */}
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 w-full md:w-2/3 lg:w-1/2"> {/* Ajuster la largeur */}
            <CardHeader>
              <CardTitle className="text-2xl">Mes Coordonnées</CardTitle>
              <CardDescription>Vous pouvez me joindre via :</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-6 w-6 text-primary" />
                <a href={`mailto:${portfolioData.email}`} className="text-lg text-foreground hover:underline">
                  {portfolioData.email}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-6 w-6 text-primary" />
                <a href={`tel:${portfolioData.phone}`} className="text-lg text-foreground hover:underline">
                  {portfolioData.phone}
                </a>
              </div>
              {portfolioData.socialLinks.linkedin && (
                <div className="flex items-center space-x-3">
                  <Linkedin className="h-6 w-6 text-primary" />
                  <a
                    href={portfolioData.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg text-foreground hover:underline"
                  >
                    LinkedIn
                  </a>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};