import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  microsoft,
  sync,
  tesla,
  shopify,
  movieflix,
  shopping,
  portfolio,
  threejs,
} from "../assets";

export const navLinks: TNavLink[] = [
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

const services: TService[] = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "ReactJs Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Database Manegement",
    icon: creator,
  },
  
];

const technologies: TTechnology[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  
  
];

const experiences: TExperience[] = [
  {
    title: "Web Developer",
    companyName: "Microsoft Future Ready Talent",
    icon: microsoft,
    iconBg: "#383E56",
    date: "July 2022 - August 2022",
    points: [
      "Development and deployment of static website using Microsoft Azure Services.",
      "In This Internship I have been Created an homes rental website",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Use of HTML, CSS, JavaScript and React.js for creating fully responsive website",
    ],
  },
  {
    title: "Web Developer",
    companyName: "Sync Intern",
    icon: sync,
    iconBg: "#E6DEDD",
    date: "March 2023 - April 2023",
    points: [
      "Developing and maintaining websites using HTML,CSS and Javascript and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality websites.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "As long as I can recollect, Aditya has always been a remarkeble developer with solid foundational knowledge of computer language and very distinct understanding of coding concepts.",
    name: "Udant",
    
    
    
  },
  {
    testimonial:
      "I have worked with Aditya for quite some time and I must say he is an exceptional individual who is incredibly talented in software development and engineering.",
    name: "Vedant",
    
    
  },
  {
    testimonial:
      "We worked together on a project in which we designed and implemented a relational database for ATM Manegement System. He has very good knowledge in DBMS and was consistent till the project submission.",
    name: "Aryan",
    
    
  },
];

const projects: TProject[] = [
  {
    name: "Movieflex",
    description:
      "Created an website for the user for watching an latest movies official trailer. for this I have been used an youtube api. This website also have an Authentication service.  ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: movieflix,
    sourceCodeLink: "https://imaginative-phoenix-e29ce1.netlify.app",
  },
  {
    name: "Shopping website",
    description:
      "Created an website for purchasing an electronic products in which there is various filter like lowest price or higher price and also having an facility of add to cart.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      
    ],
    image: shopping,
    sourceCodeLink: "https://cerulean-cascaron-f5db8d.netlify.app/",
  },
  {
    name: "Portfolio",
    description:
      "creating an this website for the shocasing an my skill to the recruter. this portfolio website containing an all information about my project and internships.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "threejs",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    sourceCodeLink: "https://github.com/aditya-adhane/Portfolio",
  },
];

export { services, technologies, experiences, testimonials, projects };
