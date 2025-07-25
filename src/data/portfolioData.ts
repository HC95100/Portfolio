export const portfolioData = {
  fullName: "Hamza Chohabi",
  email: "chohabi.hamza@gmail.com",
  phone: "0652937631",
  bio: "Étudiant en BUT Réseau et Télécommunication, je recherche une alternance dans l'IT pour septembre 2025. Passionné par les technologies réseau, la cybersécurité et le développement d'applications, je souhaite mettre mes compétences techniques au service d'une entreprise innovante. Titulaire du permis B, je suis mobile et motivé pour contribuer à des projets d'envergure dans les domaines de l'administration systèmes & réseaux, du support informatique et de la cybersécurité. Rythme souhaité : 2 semaines en entreprise / 2 semaines en formation",
  profilePicture: "/hamza-profile.png", // Mettez le chemin de votre photo ici
  cvDownloadLink: "/CV.pdf", // Mettez le chemin de votre CV PDF ici

  skills: {
    technicalCategories: [
      {
        category: "Réseau & Infrastructure",
        icon: "Network",
        skills: [
          { name: "Cisco Packet Tracer", description: "Simulation réseau, VLAN, routage inter-VLAN", icon: "Router" },
          { name: "Administration Réseau", description: "TCP/IP, OSI, DHCP, DNS, ACL, DMZ", icon: "Server" },
          { name: "Technologies Sans-fil", description: "Isolation Wi-Fi invité, filtrage ICMP", icon: "Wifi" },
          { name: "Cisco ISR", description: "Configuration et gestion des routeurs Cisco ISR", icon: "Router" },
          { name: "Catalyst 2960", description: "Configuration et gestion des commutateurs Catalyst 2960", icon: "Switch" },
        ]
      },
      {
        category: "Systèmes & Virtualisation",
        icon: "Cpu",
        skills: [
          { name: "Administration Linux", description: "Debian, gestion BIOS, administration système", icon: "Linux" },
          { name: "Scripting Bash", description: "Automatisation, scripts système", icon: "Terminal" },
          { name: "Virtualisation", description: "VirtualBox, KVM", icon: "HardDrive" },
        ]
      },
      {
        category: "Développement Web",
        icon: "Code",
        skills: [
          { name: "PHP", description: "Développement backend, applications web", icon: "FileCode" },
          { name: "Frontend", description: "HTML, CSS responsive, JavaScript", icon: "Monitor" },
          { name: "CMS & Intégration", description: "WordPress, sites vitrine, intégration web", icon: "Layout" },
        ]
      },
      {
        category: "Programmation & Bases de Données",
        icon: "Database",
        skills: [
          { name: "Python", description: "Programmation, automatisation", icon: "Python" },
          { name: "SQL", description: "Requêtes avancées, schémas multi-utilisateurs", icon: "Database" },
          { name: "Bases de Données", description: "MariaDB, PostgreSQL, PgAdmin", icon: "Server" },
        ]
      },
      {
        category: "Cybersécurité & Outils",
        icon: "Shield",
        skills: [
          { name: "Cybersécurité", description: "Segmentation réseau, sécurisation applications web, bonnes pratiques, DMZ, FusionInventory", icon: "ShieldCheck" },
          { name: "Gestion IT", description: "GLPI, FusionInventory", icon: "Tool" },
          { name: "Bureautique", description: "Pack Office (Word, Excel, PowerPoint)", icon: "FileText" },
        ]
      },
    ],
    human: [
      { name: "Autonomie & Proactivité", description: "Capacité à prendre des initiatives et à travailler de manière indépendante sur des projets techniques complexes.", icon: "Lightbulb" },
      { name: "Rigueur & Méthode", description: "Approche structurée dans l'administration réseau, la gestion de systèmes et la programmation.", icon: "ClipboardCheck" },
      { name: "Adaptabilité", description: "Aptitude à apprendre et à s'adapter rapidement aux nouvelles technologies et environnements.", icon: "RefreshCw" },
      { name: "Résolution de Problèmes", description: "Compétence à identifier et résoudre des problèmes complexes en cybersécurité et administration système.", icon: "Puzzle" },
      { name: "Communication", description: "Capacité à travailler en équipe et à communiquer efficacement sur des sujets techniques.", icon: "MessageSquare" },
      { name: "Veille Technologique", description: "Intérêt pour la veille technologique et l'apprentissage continu dans le domaine IT.", icon: "Search" },
    ],
    languages: [
      { name: "Anglais", level: "B2", certification: "Cambridge English Certification", icon: "Globe" },
      { name: "Espagnol", level: "B1", certification: null, icon: "Globe" },
      { name: "Arabe", level: "A2", certification: null, icon: "Globe" },
    ],
  },

  projects: [
    {
      id: 1,
      title: "Projet SAE – Conception et déploiement d'une infrastructure réseau sécurisée",
      description: "Simulation d'infrastructure réseau pour un cabinet d'avocats sous Cisco Packet Tracer : segmentation par VLAN (LAN, DMZ, Wi-Fi invité), configuration du routage inter-VLAN, des ACLs et des services essentiels (DHCP, DNS), virtualisation de serveurs, choix et justification du matériel en fonction du cahier des charges et du budget. Présentation argumentée des solutions devant un jury pédagogique.",
      tools: ["Cisco Packet Tracer", "VLAN", "DMZ", "ACLs", "DHCP", "DNS", "Virtualisation"],
      githubLink: null,
      liveLink: null,
    },
    {
      id: 2,
      title: "Développement d'une application web de gestion réseau",
      description: "Conception et réalisation d'une application web utilisant PHP, HTML et PostgreSQL, permettant la gestion des clients avec authentification sécurisée et enregistrement des utilisateurs dans une base de données. L'application permet également la gestion des ressources réseau (adresses IP, VLAN, VRF) via une interface web sécurisée. Mise en œuvre de requêtes SQL avancées, gestion du schéma PostgreSQL, création de formulaires dynamiques, et déploiement sur un serveur distant avec intégration d'un design responsive en CSS.",
      tools: ["PHP", "HTML", "PostgreSQL", "CSS"],
      githubLink: null,
      liveLink: null,
    },
    {
      id: 3,
      title: "WhatCanIDoToday – Plateforme web de découverte d'événements",
      description: "Projet personnel : développement d'une application web avec React (via Dyad) et Supabase (PostgreSQL, authentification, Edge Functions). Intégration d'APIs OpenAI et Gemini (géolocalisation, recherche intelligente), SEO optimisé (React Helmet), CI/CD via GitHub. Fonctionnalités : recherche multi-critères, pages événements, favoris, conformité RGPD. Code source disponible sur GitHub.",
      tools: ["React", "Dyad", "Supabase", "PostgreSQL", "OpenAI API", "Gemini API", "React Helmet", "GitHub Actions"],
      githubLink: null, // Mettez le lien GitHub si disponible
      liveLink: null, // Mettez le lien du projet en ligne si disponible
    },
  ],

  experiences: [
    {
      id: 1,
      role: "Data Analyst Freelance",
      company: "Outlier",
      period: "En cours",
      missions: [
        "Collecte et évaluation de données pour l'intelligence artificielle.",
        "Analyse de datasets, validation de modèles et optimisation des performances d'algorithmes d'apprentissage automatique.",
      ],
    },
    {
      id: 2,
      role: "Stagiaire d'observation et d'initiation (Service DSI)",
      company: "Segula Technologies",
      period: "Juillet 2023",
      missions: [
        "Initiation avec les équipes réseaux, systèmes, support et sécurité.",
        "Découverte des infrastructures IT, participation aux interventions techniques et sensibilisation aux bonnes pratiques de sécurité.",
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
      name: "Permis B (conduite)",
      issuer: "France",
      date: "Décembre 2024",
    },
  ],

  socialLinks: {
    github: "https://github.com/HC95100",
    linkedin: "https://www.linkedin.com/in/hamza-chohabi-b15a4b2a5",
    // Ajoutez d'autres liens si nécessaire
  },
};