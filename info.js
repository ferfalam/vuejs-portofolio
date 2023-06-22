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
      skills: ["Javascript", "Typescript", "ReactJS", "React-Redux", "webpack", "NLP"]
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
          img: require("./src/assets/designs/Keep it green/cover.png"),
          title: "MoodBoard"
        },
        {
          img: require("./src/assets/designs/Keep it green/show.png"),
          title: "show"
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
          img: require("./src/assets/designs/Keep it green/cover.png"),
          title: "MoodBoard"
        },
        {
          img: require("./src/assets/designs/Keep it green/show.png"),
          title: "show"
        },
      ],
      technologies: ["Figma", "Canva"],
      category: "Visual Design",
      github: "",
      date: "Mars, 2023",
      visit: "",
      description:
        ""
    },
    {
      name: "Solidarity Day",
      title: "Landing de Solidarity Day",
      pictures: [
        {
          img: require("./src/assets/designs/Keep it green/cover.png"),
          title: "MoodBoard"
        },
        {
          img: require("./src/assets/designs/Keep it green/show.png"),
          title: "show"
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
    {
      name: "CJEPE",
      title: "Landing de CJEPE",
      pictures: [
        {
          img: require("./src/assets/designs/digital agency/behance cover.png"),
          title: "MoodBoard"
        },
        {
          img: require("./src/assets/designs/digital agency/1. start.png"),
          title: "App Elements"
        },
        {
          img: require("./src/assets/designs/digital agency/2. about.png"),
          title: "App Elements"
        },
        {
          img: require("./src/assets/designs/digital agency/3. Our services.png"),
          title: "App Elements"
        },
        {
          img: require("./src/assets/designs/digital agency/4. latest project.png"),
          title: "App Elements"
        },
        {
          img: require("./src/assets/designs/digital agency/5. Contact us.png"),
          title: "App Elements"
        },
      ],
      technologies: ["Figma", "Canva"],
      category: "Visual Design",
      github: "",
      date: "Dec, 2022",
      visit: "",
      description:
        ""
    }
  ],
  portfolio: [
    {
      name: "SafeDriveAfrik Landing",
      pictures: [
        {
          img: require("./src/assets/portfolio/diary/1.png")
        },
        {
          img: require("./src/assets/portfolio/diary/2.png")
        },
        {
          img: require("./src/assets/portfolio/diary/3.png")
        },
      ],
      technologies: ["react", "scss", "local storage"],
      category: "Web App",
      date: "Aug, 2021 - 20 days",
      github:
        "https://github.com/mahy209/notes-react-app.git",
      visit: "https://github.com/mahy209/notes-react-app.git",
      description:
        " Diary react app with some new features: Dark mode, upload images, tags, filter search with title/content/tag "
    },
    {
      name: "BonMoment Landing",
      pictures: [
        {
          img: require("./src/assets/portfolio/online examination/exam (1).png")
        },
        {
          img: require("./src/assets/portfolio/online examination/exam (2).png")
        },
        {
          img: require("./src/assets/portfolio/online examination/exam (3).png")
        },
        {
          img: require("./src/assets/portfolio/online examination/exam (4).png")
        },
        {
          img: require("./src/assets/portfolio/online examination/exam (5).png")
        }
      ],
      technologies: ["HTML", "CSS","JavaSript","JQuery", "PHP", "MySQL"],
      category: "Web App",
      date: "Apr, 2021 - May, 2021",
      github: "https://github.com/mahy209/online-examination.git",
      visit: "https://github.com/mahy209/online-examination.git",
      description:
        "Online Examination System Today Online Examination System has become a fast growing examination method because of its speed and accuracy. It is also needed less manpower to execute the examination. Almost all organizations now-a-days, are conducting their objective exams by online examination system, it saves students time in examinations. Organizations can also easily check the performance of the student that they give in an examination. As a result of this, organizations are releasing results in less time. It also helps the environment by saving paper. According to today’s requirement, online examination project in php is very useful to learn it. What is an online examination system? In an online examination system examine get their user id and password with his/her admit card. This id is already saved in the examination server. When examine login to the server he/she get his/her profile already register. On the certain time examine gets the message to start the examination. All answers given by examine are saved into the server with his/her profile information. Online examination system also allows to correct the answer if the examine needed to change any answer in the examination time duration, however, after the time duration any change will not allow. This also makes c checking the answer easy and error proof as computers are more accurate than man and provide fast results too. Php is a web base language so we can create an online examination system in PHP. Administrator of Online Examination has multiple features such as Add, Delete, Update Topics and Question. To Login as Admin put inside your browser."
    },
    {
      name: "Application de score en ligne",
      pictures: [
        {
          img: require("./src/assets/portfolio/myflix.com/1.png")
        },
        {
          img: require("./src/assets/portfolio/myflix.com/2.png")
        },
        {
          img: require("./src/assets/portfolio/myflix.com/3.png")
        },
        {
          img: require("./src/assets/portfolio/myflix.com/4.png")
        },
      ],
      technologies: ["react", "css", "TMDB"],
      category: "Web App",
      date: "Aug, 2021 - 10 days",
      github:
        "https://github.com/mahy209/MyFlix-react-app.git",
      visit: "https://github.com/mahy209/MyFlix-react-app.git",
      description:
        " flix.com is a netflix clone using React JS and TMDB with courusal and search engine. "
    },
  ],
};

export default info;
