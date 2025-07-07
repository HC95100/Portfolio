import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { portfolioData } from "@/data/portfolioData";
import { Mail, Phone, Linkedin } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { motion } from "framer-motion";

export const ContactSection: React.FC = () => {
  const { toast } = useToast();

  return (
    <section id="contact" className="py-16 px-4 bg-background">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">Me Contacter</h2>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 w-full md:w-2/3 lg:w-1/2 border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Mes Coordonnées</CardTitle>
              <CardDescription className="text-muted-foreground">N'hésitez pas à me contacter via :</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-6 w-6 text-primary" />
                <a href={`mailto:${portfolioData.email}`} className="text-lg text-foreground hover:underline hover:text-primary transition-colors">
                  {portfolioData.email}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-6 w-6 text-primary" />
                <a href={`tel:${portfolioData.phone}`} className="text-lg text-foreground hover:underline hover:text-primary transition-colors">
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
                    className="text-lg text-foreground hover:underline hover:text-primary transition-colors"
                  >
                    LinkedIn
                  </a>
                </div>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};