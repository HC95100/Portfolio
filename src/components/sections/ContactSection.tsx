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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to a backend service.
    // For this portfolio, we'll just show a toast message.
    toast({
      title: "Message envoyé !",
      description: "Merci pour votre message. Je vous recontacterai bientôt.",
    });
    // You might want to clear the form fields here
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="py-16 px-4 bg-secondary">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">Me Contacter</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-2xl">Envoyez-moi un message</CardTitle>
              <CardDescription>N'hésitez pas à me contacter pour toute question ou opportunité.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Nom</Label>
                  <Input id="name" type="text" placeholder="Votre nom" required />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Votre email" required />
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Votre message..." rows={5} required />
                </div>
                <Button type="submit" className="w-full">Envoyer le message</Button>
              </form>
            </CardContent>
          </Card>

          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-2xl">Mes Coordonnées</CardTitle>
              <CardDescription>Vous pouvez également me joindre via :</CardDescription>
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