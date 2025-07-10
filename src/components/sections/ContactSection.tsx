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
        <h2 className="text-3xl md:text-4xl font-bold text-center text-dark-blue mb-12 font-montserrat">Me Contacter</h2>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 w-full md:w-2/3 lg:w-1/2 border-light-gray bg-white">
            <CardHeader>
              <CardTitle className="text-2xl text-dark-blue font-montserrat">Mes Coordonnées</CardTitle>
              <CardDescription className="text-dark-text font-roboto">N'hésitez pas à me contacter via :</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-6 w-6 text-blue-primary" />
                <a href={`mailto:${portfolioData.email}`} className="text-lg text-dark-text hover:underline hover:text-blue-primary transition-colors font-roboto">
                  {portfolioData.email}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-6 w-6 text-blue-primary" />
                <a href={`tel:${portfolioData.phone}`} className="text-lg text-dark-text hover:underline hover:text-blue-primary transition-colors font-roboto">
                  {portfolioData.phone}
                </a>
              </div>
              {portfolioData.socialLinks.linkedin && (
                <div className="flex items-center space-x-3">
                  <Linkedin className="h-6 w-6 text-blue-primary" />
                  <a
                    href={portfolioData.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg text-dark-text hover:underline hover:text-blue-primary transition-colors font-roboto"
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