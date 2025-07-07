import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { portfolioData } from "@/data/portfolioData";
import { Award } from "lucide-react";
import { motion } from "framer-motion";

export const CertificationsSection: React.FC = () => {
  const certCardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="certifications" className="py-16 px-4 bg-secondary">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">Mes Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              variants={certCardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 border-primary/20 h-full">
                <CardHeader className="flex flex-row items-center space-x-4 pb-2">
                  <Award className="h-8 w-8 text-primary" />
                  <CardTitle className="text-2xl font-semibold text-primary">{cert.name}</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <p className="text-muted-foreground text-lg">{cert.issuer}</p>
                  <p className="text-muted-foreground text-sm">{cert.date}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};