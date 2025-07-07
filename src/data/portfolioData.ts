export const portfolioData = {
  fullName: "Hamza CHOHABI",
  email: "chohabi.hamza@gmail.com",
  phone: "0652937631",
  bio: "Je suis Hamza CHOHABI, à la recherche d'une alternance dans l'IT à la rentrée 2025. Mes domaines d'intérêt incluent le Support & maintenance informatique, l'Administration systèmes & réseaux, et le Big Data. Je suis motivé à appliquer mes compétences et à apprendre dans un environnement stimulant, idéalement sur un rythme de 2 semaines en entreprise / 2 semaines en formation.",
  profilePicture: "/placeholder-profile.jpg", // Mettez le chemin de votre photo ici
  cvDownloadLink: "/placeholder-cv.pdf", // Mettez le chemin de votre CV PDF ici

  skills: {
    technical: [
      "Réseau (Commutation, administration réseau, TCP/IP & OSI)",
      "Linux (Debian)",
      "BIOS",
      "Shell Bash",
      "HTML",
      "CSS",
      "JavaScript",
      "Python",
      "SQL",
      "Cybersécurité (Fondamentaux et sensibilisation)",
      "Pack Office",
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
      "Anglais (Niveau B2)",
      "Espagnol (Niveau B1)",
      "Arabe (Niveau A2)",
    ],
  },

  projects: [
    {
      id: 1,
      title: "Conception et déploiement d’une infrastructure réseau sécurisée",
      description: "Projet SAE pour un cabinet d’avocats : simulation sous Cisco Packet Tracer, segmentation par VLAN (LAN, DMZ, Wi-Fi invité), configuration du routage inter-VLAN, des ACLs et des services essentiels (DHCP, DNS), virtualisation de serveurs, choix et justification du matériel en fonction du cahier des charges et du budget. Présentation argumentée des solutions devant un jury pédagogique.",
      tools: ["Cisco Packet Tracer", "VLAN", "ACLs", "DHCP", "DNS", "Virtualisation"],
      githubLink: null,
      liveLink: null,
    },
    {
      id: 2,
      title: "Traitement de données (SAE)",
      description: "Interprétation d’un fichier CSV en HTML pour présenter des données structurées.",
      tools: ["CSV", "HTML"],
      githubLink: null,
      liveLink: null,
    },
  ],

  experiences: [
    {
      id: 1,
      role: "Stagiaire d’observation et d’initiation (Service DSI)",
      company: "Segula Technologies",
      period: "Juillet 2023",
      missions: [
        "Initiation avec les équipes réseaux, système, support et sécurité.",
      ],
    },
    {
      id: 2,
      role: "Data Analyst Freelance",
      company: "Outlier",
      period: "Non spécifié", // Période non spécifiée dans le CV
      missions: [
        "Collecte et évaluation de données pour l’IA.",
      ],
    },
  ],

  education: [
    {
      id: 1,
      degree: "BUT Réseau et Télécommunication (1ère année)",
      institution: "Université Sorbonne Paris Nord",
      period: "Depuis septembre 2024",
    },
    {
      id: 2,
      degree: "Baccalauréat général (Spécialités : Mathématiques et SVT, Section Européenne Anglais, Mention Bien)",
      institution: "Lycée Georges Braque",
      period: "2021 – 2024",
    },
    {
      id: 3,
      degree: "Brevet des collèges (Mention Très bien, Option latin)",
      institution: "Collège Ariane",
      period: "2017 – 2021",
    },
  ],

  certifications: [
    {
      id: 1,
      name: "Certification sensibilisation à la cybersécurité",
      issuer: "Microsoft & LinkedIn",
      date: "Mars 2025",
    },
    {
      id: 2,
      name: "Cambridge English Certification B2",
      issuer: "Cambridge English",
      date: "Juillet 2024",
    },
    {
      id: 3,
      name: "Permis B (conduite)",
      issuer: "France",
      date: "Décembre 2024",
    },
  ],

  socialLinks: {
    github: "https://github.com/votre-utilisateur", // Veuillez remplacer par votre lien GitHub réel
    linkedin: "https://www.linkedin.com/in/votre-profil-linkedin", // Veuillez remplacer par votre lien LinkedIn réel
    // Ajoutez d'autres liens si nécessaire
  },
};