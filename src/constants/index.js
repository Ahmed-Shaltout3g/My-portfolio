import {
  c,
  python,
  postgresql,
  mongodb,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  realEstate,
  upwork,
  ITI,
  sass,
  angular,
  typescript,
  nodejs2,
  bootstrap,
  figma,
  jquary,
  Education_Paltform,
  dash,
  mov_rec,
  ecom_nat,
  land1,
  ecom_rec,
  ecom_ang,
  mov_ang,
  linkedPost,
  weatherpedia,
  fokir,
  bakary,
  buzland,
  profile,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const services = [
  { title: "JavaScript", icon: javascript },
  { title: "MongoDB", icon: mongodb },
  { title: "Postgresql", icon: postgresql },
  { title: "Python", icon: python },
];

export const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Bootstrap", icon: bootstrap },
  { name: "JavaScript", icon: javascript },
  { name: "TypeScript", icon: typescript },
  { name: "Rect JS", icon: reactjs },
  { name: "Angular", icon: angular },
  { name: "Sass", icon: sass },
  { name: "Node JS", icon: nodejs2 },
  { name: "Git", icon: git },
  { name: "Figma", icon: figma },
  { name: "jQuery", icon: jquary },
];

export const experiences = [
  {
    title: "Full Stack using python | intern",
    company_name: "Information Technology Institute (ITI)",
    icon: ITI,
    iconBg: "#161329",
    date: "Jul 2025 - now",
    points: [
      "Currently enrolled in ITI Intensive Training (Full-Stack using Python) focusing on backend, frontend, and databases.",
      "Developing hands-on projects to gain practical experience in APIs, Git, and team collaboration.",
    ],
  },
  {
    title: "Freelance Full-stack Developer",
    company_name: "Upwork",
    icon: upwork,
    iconBg: "#161329",
    date: "Aug 2022 – Jun 2023",
    points: [
      "Delivered 3+ custom web applications using React.js and Node.js, meeting client requirements and maintaining a 100% project delivery rate on time.",
      "Designed reusable UI components and integrated APIs with state management, boosting scalability and reducing development time by 25%.",
    ],
  },

  {
    title: " frontend | backend Intern",
    company_name: "Information Technology Institute (ITI)",
    icon: ITI,
    iconBg: "#161329",
    date: "June 2023 - July 2023",
    points: [
      " Implemented JavaScript to create dynamic user experiences, improving functionality and interactivity in projects.",
      "Completed hands-on projects under expert guidance, applying knowledge to solve real-world challenges and gaining practical experience in web development.",
    ],
  },
];

export const projects = [
  {
    name: "Real Estate website",
    description:
      "Developed a Real Estate web application with full user authentication, property management (CRUD), and an integrated messaging system between users and admin.",
    tags: [
      { name: "HTML", color: "green-text-gradient" },
      { name: "Javascript", color: "blue-text-gradient" },
      { name: "React.js", color: "green-text-gradient" },
      { name: "nodejs", color: "pink-text-gradient" },
      { name: "CSS", color: "pink-text-gradient" },
      { name: "MongoDB", color: "blue-text-gradient" },
      { name: "MERN_Stack", color: "blue-text-gradient" },
    ],
    image: realEstate,
    source_code_link: "https://github.com/Ahmed-Shaltout3g/Sakan",
    Demo_link: "https://ahmed-shaltout3g.github.io/Sakan/",
  },
  {
    name: "Education_Paltform",
    description:
      "Developed a professional E-Learning platform with secure authentication and role-based access (Admin, Teacher, Student). Features: course management, code-based enrollment, and dashboards",
    tags: [
      { name: "HTML", color: "green-text-gradient" },
      { name: "Javascript", color: "blue-text-gradient" },
      { name: "React.js", color: "green-text-gradient" },
      { name: "nodejs", color: "pink-text-gradient" },
      { name: "CSS", color: "pink-text-gradient" },
      { name: "MongoDB", color: "blue-text-gradient" },
      { name: "MERN_Stack", color: "blue-text-gradient" },
    ],
    image: Education_Paltform,
    source_code_link: "https://github.com/Ahmed-Shaltout3g/Education_Paltform",
    Demo_link: "https://ahmed-shaltout3g.github.io/Education_Paltform/",
  },
  {
    name: "Real Estate Dashboad",
    description:
      "Built a secure dashboard for Real Estate Website SAKAN with full admin control (ads, users, categories), chat system, analytics charts, responsive, and comprehensive input validation.",
    tags: [
      { name: "HTML", color: "green-text-gradient" },
      { name: "Javascript", color: "blue-text-gradient" },
      { name: "React.js", color: "green-text-gradient" },
      { name: "nodejs", color: "pink-text-gradient" },
      { name: "CSS", color: "pink-text-gradient" },
      { name: "MongoDB", color: "blue-text-gradient" },
      { name: "MERN_Stack", color: "blue-text-gradient" },
    ],
    image: dash,
    source_code_link: "https://github.com/Ahmed-Shaltout3g/Dashboard-SAKAN-New",
    Demo_link: "https://ahmed-shaltout3g.github.io/Dashboard-SAKAN-New/",
  },
  {
    name: "Movies",
    description:
      "Developed a movie web app displaying latest films with full details, live search, category filtering, and a responsive, user-friendly interface.",
    tags: [
      { name: "HTML", color: "green-text-gradient" },
      { name: "CSS", color: "pink-text-gradient" },
      { name: "Bootstrap5", color: "pink-text-gradient" },
      { name: "Javascript", color: "blue-text-gradient" },
      { name: "React.js", color: "green-text-gradient" },
      { name: "API", color: "blue-text-gradient" },
    ],
    image: mov_rec,
    source_code_link: "https://github.com/Ahmed-Shaltout3g/React-Movies",
    Demo_link: "https://ahmed-shaltout3g.github.io/React-Movies/",
  },
  {
    name: "GozaStore E-Commerce",
    description:
      "Built a stylish e-commerce site with user login, interactive cart, and secure checkout. Features smooth navigation and a clothing-store inspired design.",
    tags: [
      { name: "HTML", color: "pink-text-gradient" },
      { name: "CSS", color: "green-text-gradient" },
      { name: "Javascript", color: "blue-text-gradient" },
      { name: "Native_Ecomm", color: "green-text-gradient" },
      { name: "Modern_ECommerce_Website", color: "green-text-gradient" },
    ],
    image: ecom_nat,
    source_code_link: "https://github.com/Ahmed-Shaltout3g/GozaStore",
    Demo_link: "https://ahmed-shaltout3g.github.io/GozaStore/index.html",
  },
  {
    name: "Responsive Landing Page",
    description:
      "Designed and developed a modern, fast, and fully responsive landing page with animations, SEO optimization, and clear call-to-action to boost engagement.",
    tags: [
      { name: "HTML", color: "pink-text-gradient" },
      { name: "CSS", color: "green-text-gradient" },
      { name: "Javascript", color: "blue-text-gradient" },
      { name: "LandingPage", color: "green-text-gradient" },
      { name: "ResponsiveDesign", color: "green-text-gradient" },
    ],

    image: land1,
    source_code_link: "https://github.com/Ahmed-Shaltout3g/GP-web",

    Demo_link: "https://ahmed-shaltout3g.github.io/GP-web/",
  },
  {
    name: "E-commerce Angular",
    description:
      "Frontend E-Commerce platform in Angular with Node.js API, featuring product listing, cart, auth, orders, payments, and full English-Arabic RTL support.",
    tags: [
      { name: "HTML", color: "pink-text-gradient" },
      { name: "SASS", color: "green-text-gradient" },
      { name: "TypeScript", color: "blue-text-gradient" },
      { name: "Angular", color: "green-text-gradient" },
      { name: "ShoppingCart", color: "green-text-gradient" },
      { name: "Localization", color: "green-text-gradient" },
    ],

    image: ecom_ang,
    source_code_link: "https://github.com/Ahmed-Shaltout3g/Angular_Ecommerce",

    Demo_link: "https://ahmed-shaltout-ecommerce.netlify.app/home/",
  },
  {
    name: "Movies Angular",
    description:
      "Movies website built with Angular and route guards, featuring movie listings, details, search, user authentication, and secure access control.",
    tags: [
      { name: "HTML", color: "pink-text-gradient" },
      { name: "CSS", color: "green-text-gradient" },
      { name: "TypeScript", color: "blue-text-gradient" },
      { name: "Angular", color: "green-text-gradient" },
      { name: "API", color: "blue-text-gradient" },
      { name: "Gard", color: "blue-text-gradient" },
    ],

    image: mov_ang,
    source_code_link: "https://github.com/Ahmed-Shaltout3g/Angular-Movies",
    Demo_link: "https://ahmed-shaltout3g.github.io/Angular-Movies/#/login",
  },
  {
    name: "Ecommerce React",
    description:
      "Movies website built with Angular and route guards, featuring movie listings, details, search, user authentication, and secure access control.",
    tags: [
      { name: "HTML", color: "green-text-gradient" },
      { name: "CSS", color: "pink-text-gradient" },
      { name: "Bootstrap5", color: "pink-text-gradient" },
      { name: "Javascript", color: "blue-text-gradient" },
      { name: "React.js", color: "green-text-gradient" },
      { name: "API", color: "blue-text-gradient" },
    ],

    image: ecom_rec,
    source_code_link:
      "https://github.com/Ahmed-Shaltout3g/E-commerece-React-JS",
    Demo_link: "https://ahmed-shaltout3g.github.io/E-commerece-React-JS/",
  },
  {
    name: "Linked Post",
    description:
      "Social networking platform where users can post updates, comment, like, upload profile images, and interact with a community in real-time.",
    tags: [
      { name: "HTML", color: "pink-text-gradient" },
      { name: "CSS", color: "green-text-gradient" },
      { name: "TypeScript", color: "blue-text-gradient" },
      { name: "Angular", color: "green-text-gradient" },
      { name: "API", color: "blue-text-gradient" },
      { name: "Social_Media", color: "blue-text-gradient" },
    ],

    image: linkedPost,
    source_code_link: "https://github.com/Ahmed-Shaltout3g/Linked-Post",
    Demo_link: "https://dainty-salmiakki-d7b29a.netlify.app/home/",
  },
  {
    name: "Weather App",
    description:
      "Weather app that lets users search locations, view current conditions, forecasts, and more with an interactive and user-friendly interface",
    tags: [
      { name: "HTML", color: "pink-text-gradient" },
      { name: "CSS", color: "green-text-gradient" },
      { name: "JavaScript", color: "blue-text-gradient" },
      { name: "API", color: "blue-text-gradient" },
      { name: "Weather", color: "blue-text-gradient" },
      { name: "Responsive", color: "blue-text-gradient" },
    ],

    image: weatherpedia,
    source_code_link: "https://github.com/Ahmed-Shaltout3g/weather",
    Demo_link: "https://ahmed-shaltout3g.github.io/weather/",
  },
  {
    name: "Fokir Landing Page",
    description:
      "Fokir Landing Page: responsive, fast-loading, modern design with animations, smooth scroll, API integration, SEO optimized, and mobile-friendly.",
    tags: [
      { name: "HTML", color: "pink-text-gradient" },
      { name: "CSS", color: "green-text-gradient" },
      { name: "JavaScript", color: "blue-text-gradient" },
      { name: "API", color: "blue-text-gradient" },
      { name: "Bootstrap", color: "blue-text-gradient" },
      { name: "Responsive", color: "blue-text-gradient" },
    ],

    image: fokir,
    source_code_link: "https://github.com/Ahmed-Shaltout3g/weather",
    Demo_link: "https://ahmed-shaltout3g.github.io/weather/",
  },
  {
    name: "Bakary",
    description:
      "Bkary Landing Page: responsive, fast-loading, modern design with animations, smooth scroll, API integration, SEO optimized, and mobile-friendly.",
    tags: [
      { name: "HTML", color: "pink-text-gradient" },
      { name: "CSS", color: "green-text-gradient" },
      { name: "JavaScript", color: "blue-text-gradient" },
      { name: "Bootstrap5", color: "blue-text-gradient" },
      { name: "Responsive", color: "blue-text-gradient" },
    ],

    image: bakary,
    source_code_link:
      "https://github.com/Ahmed-Shaltout3g/Beaker--web--project",
    Demo_link: "https://ahmed-shaltout3g.github.io/Beaker--web--project/",
  },
  {
    name: "Bizland",
    description:
      "Bizland Landing Page: responsive, fast-loading, modern design with animations, smooth scroll, API integration, SEO optimized, and mobile-friendly.",
    tags: [
      { name: "HTML", color: "pink-text-gradient" },
      { name: "CSS", color: "green-text-gradient" },
      { name: "JavaScript", color: "blue-text-gradient" },
      { name: "Bootstrap5", color: "blue-text-gradient" },
      { name: "Responsive", color: "blue-text-gradient" },
    ],

    image: buzland,
    source_code_link:
      "https://github.com/Ahmed-Shaltout3g/Bizland-Landing-page-",
    Demo_link: "https://ahmed-shaltout3g.github.io/Bizland-Landing-page-/",
  },
  {
    name: "portfolio",
    description:
      "portfolio Landing Page: responsive, fast-loading, modern design with animations, smooth scroll, API integration, SEO optimized, and mobile-friendly.",
    tags: [
      { name: "HTML", color: "pink-text-gradient" },
      { name: "CSS", color: "green-text-gradient" },
      { name: "JavaScript", color: "blue-text-gradient" },
      { name: "Bootstrap5", color: "blue-text-gradient" },
      { name: "Responsive", color: "blue-text-gradient" },
    ],

    image: profile,
    source_code_link: "https://github.com/Ahmed-Shaltout3g/-My-profile",
    Demo_link: "https://ahmed-shaltout3g.github.io/-My-profile/",
  },
];
