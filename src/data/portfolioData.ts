export const portfolioData = {
  fullName: "Votre Nom Complet",
  email: "votre.email@example.com",
  phone: "+33 6 12 34 56 78",
  bio: "Je suis un(e) étudiant(e) passionné(e) par [votre domaine, ex: les Réseaux & Télécommunications, l'Informatique, la Communication]. Je suis à la recherche d'opportunités pour appliquer mes compétences et continuer à apprendre dans un environnement stimulant. Mon objectif est de contribuer à des projets innovants et de développer des solutions efficaces.",
  profilePicture: "/placeholder-profile.jpg", // Mettez le chemin de votre photo ici
  cvDownloadLink: "/placeholder-cv.pdf", // Mettez le chemin de votre CV PDF ici

  skills: {
    technical: [
      "JavaScript",
      "TypeScript",
      "React",
      "Node.js",
      "Python",
      "SQL",
      "Git",
      "Docker",
      "Cloud (AWS/Azure)",
      "Réseaux (TCP/IP, Routage)",
    ],
    human: [
      "Communication",
      "Travail d'équipe",
      "Résolution de problèmes",
      "Adaptabilité",
      "Autonomie",
      "Curiosité",
    ],
    languages: [
      "Français (Langue maternelle)",
      "Anglais (Courant)",
      "Espagnol (Intermédiaire)",
    ],
  },

  projects: [
    {
      id: 1,
      title: "Projet de Développement Web E-commerce",
      description: "Développement d'une plateforme e-commerce complète avec gestion des produits, des utilisateurs et des commandes.",
      tools: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
      githubLink: "https://github.com/votre-utilisateur/projet-ecommerce",
      liveLink: "https://projet-ecommerce.example.com",
    },
    {
      id: 2,
      title: "Application Mobile de Gestion de Tâches",
      description: "Création d'une application mobile intuitive pour organiser et suivre les tâches quotidiennes, avec notifications et synchronisation cloud.",
      tools: ["React Native", "Firebase", "Redux"],
      githubLink: "https://github.com/votre-utilisateur/app-taches",
      liveLink: null,
    },
    {
      id: 3,
      title: "Analyse de Données avec Python",
      description: "Projet d'analyse de données sur un jeu de données public pour identifier des tendances et générer des visualisations interactives.",
      tools: ["Python", "Pandas", "Matplotlib", "Jupyter Notebook"],
      githubLink: "https://github.com/votre-utilisateur/analyse-donnees",
      liveLink: null,
    },
  ],

  experiences: [
    {
      id: 1,
      role: "Stagiaire Développeur Fullstack",
      company: "Tech Solutions Inc.",
      period: "Juin 2023 - Août 2023",
      missions: [
        "Développement de nouvelles fonctionnalités pour une application web interne (React, Node.js).",
        "Participation à la conception de l'architecture des bases de données (PostgreSQL).",
        "Rédaction de tests unitaires et d'intégration.",
        "Collaboration avec l'équipe produit pour affiner les spécifications.",
      ],
    },
    {
      id: 2,
      role: "Alternant Ingénieur Réseaux",
      company: "GlobalNet Services",
      period: "Septembre 2022 - Septembre 2024",
      missions: [
        "Configuration et maintenance des équipements réseau (routeurs, switchs Cisco).",
        "Surveillance des performances réseau et résolution des incidents.",
        "Mise en œuvre de solutions de sécurité réseau (pare-feu, VPN).",
        "Documentation des architectures réseau et des procédures d'exploitation.",
      ],
    },
  ],

  education: [
    {
      id: 1,
      degree: "Diplôme d'Ingénieur en Informatique",
      institution: "École Nationale Supérieure d'Informatique (ENSI)",
      period: "2021 - 2024",
    },
    {
      id: 2,
      degree: "Licence en Sciences et Technologies",
      institution: "Université Paris Cité",
      period: "2018 - 2021",
    },
  ],

  socialLinks: {
    github: "https://github.com/votre-utilisateur",
    linkedin: "https://www.linkedin.com/in/votre-profil-linkedin",
    // Ajoutez d'autres liens si nécessaire
  },
};