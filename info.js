let info = {
  name: "Farid AMOUSSA",
  logo_name: "Farid",
  flat_picture: require("./src/assets/me.png"),
  config: {
    use_cookies: true,
    navbar: {
      blur: false
    }
  },
  description:
    "Développeur frontend expérimenté spécialisé dans la création d'interfaces utilisateur attrayantes et réactives. Maîtrise de HTML, CSS, JavaScript et Vue.js. Passionné par l'innovation et les meilleures pratiques en développement web. Objectif : créer des applications web de haute qualité pour offrir une expérience utilisateur exceptionnelle.",
  links: {
    linkedin: "https://www.linkedin.com/in/farid-amoussa/",
    github: "https://github.com/ferfalam",
    // behance: "https://www.behance.net/mahymohab",
    resume: "https://drive.google.com/file/d/1wi4H6fFokgGS4vni4vDKKX6T0bSkUj6H/view?usp=sharing",
  },
  education: [
    {
      name: "Institut National Supérieur de Technologie Industrielle",
      place: "Lokossa, Bénin",
      date: "nov 2019 - Jul 2022",
      degree: "Licence en Informatique Télécommunication",
      gpa: "3.1/4.0",
      description:
        "",
      skills: [
        "Algorithme & Programation",
        "Développement Web",
        "UI/UX design",
      ]
    },
  ],
  experience: [
    {
      name: "J J Telecom",
      place: "Cotonou, Bénin",
      date: "sept 2022 - Présent",
      position: "Analyste Développeur",
      description:
        "Préparation des maquettes pour les interfaces, Optimisation du contenu des sites Web en utilisant les outils adaptés (nombre de graphiques, bases de données, animations, ainsi que d'autres logiciels)",
      skills: ["HTML5", "CSS3", "Bootstrap", "JQuery", "Figma", "JavaSript", "Laravel", "Wordpress"]
    },
    {
      name: "AZN Software",
      place: "Bordeaux, France",
      date: "Fev 2021 - Fev 2022",
      position: "Développeur Web",
      description:
        "Contrôle de la qualité : réalisation de différents tests, correction des bugs éventuels, Conception technique d'interfaces web",
      skills: ["Javascript", "Php", "Wordpress", "Laravel"]
    },
  ],
  skills: [
    {
      title: "Design UI/UX",
      info: ["Figma", "Photoshop", "Canva"],
      icon: "fa fa-pencil-square-o"
    },
    {
      title: "Langage de programmation",
      info: [
        "PHP","Python","Javascript"],
      icon: "fa fa-code"
    },
    {
      title: "Front-end",
      info: [
        "HTML5","CSS3","Bootstrap3"],
      icon: "fa fa-cubes"
    },
    {
      title: "Framework",
      info: ["VueJS", "Laravel", "Django", "Flutter"],
      icon: "fas fa-laptop-code"
    },
  ],
  portfolio_design: [
    {
      name: "SafeDriveAfrik App",
      title: "Application SafeDriveAfrik",
      pictures: [
        {
          img: require("./src/assets/designs/safedriveafrik/1.png"),
          title: "Section Acceuil"
        },
        {
          img: require("./src/assets/designs/safedriveafrik/app.jpg"),
          title: "Interface Mobile"
        },
        {
          img: require("./src/assets/designs/safedriveafrik/fullpage.png"),
          title: "Page entière"
        },
      ],
      technologies: ["Figma", "Canva"],
      category: "Visual Design",
      github: "",
      date: "Février, 2023",
      visit: "",
      description:
        ""
    },
    {
      name: "BonMoment",
      title: "Application BonMoment",
      pictures: [
        {
          img: require("./src/assets/designs/bonmoment/1.png"),
          title: "Section Acceuil"
        },
        {
          img: require("./src/assets/designs/bonmoment/app.jpg"),
          title: "Interface Mobile"
        },
        {
          img: require("./src/assets/designs/bonmoment/fullpage.png"),
          title: "Page entière"
        },
      ],
      technologies: ["Figma", "Canva"],
      category: "Visual Design",
      github: "",
      date: "Mars, 2023",
      visit: "https://www.figma.com/file/PPsUpbbaTLSjV255GRMinf/Bon-moment?type=design&node-id=48%3A101&mode=design&t=tVEKXIcSHVHYipry-1",
      description:
        ""
    },
    {
      name: "Solidarity Day",
      title: "App Solidarity Day",
      pictures: [
        {
          img: require("./src/assets/designs/solidarityday/1.png"),
          title: "Section Acceuil"
        },
        {
          img: require("./src/assets/designs/solidarityday/fullpage.png"),
          title: "Page entière"
        },
      ],
      technologies: ["Figma", "Photoshop"],
      category: "Visual Design",
      github: "",
      date: "Jan, 2023",
      visit: "",
      description:
        ""
    },
  ],
  portfolio: [
    {
      name: "SafeDriveAfrik Landing",
      pictures: [
        {
          img: require("./src/assets/portfolio/safedriveafrik/1.png")
        },
        {
          img: require("./src/assets/portfolio/safedriveafrik/2.png")
        },
        {
          img: require("./src/assets/portfolio/safedriveafrik/3.png")
        },
      ],
      technologies: ["html5", "css", "bootstrap", "javascript"],
      category: "Web App",
      date: "Aug, 2021 - 20 days",
      github:
        "https://www.safedriveafrik.com/",
      visit: "https://www.safedriveafrik.com/",
      description:
        " SafeDriveAfrik propose un service d'apprentissage en ligne du code de la route et des règles de conduite pour les conducteurs débutants. L'application permet aux utilisateurs d'accéder au contenu éducatif du site. "
    },
    {
      
    },
    {
      
    },
  ],
};

export default info;
