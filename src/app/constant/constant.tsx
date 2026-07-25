import {
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaSquareJs,
  FaReact,
  FaFigma,
} from "react-icons/fa6";
import {
  SiMongodb,
  SiMysql,
  SiTailwindcss,
  SiTypescript,
  SiExpress,
  SiGraphql,
  SiPrisma,
  SiDocker,
  SiRedis,
  SiDatadog,
} from "react-icons/si";

import { FaAws } from "react-icons/fa";

import { FaGitAlt } from "react-icons/fa";
import { RiNextjsLine } from "react-icons/ri";
import { DiPostgresql } from "react-icons/di";

export const navLinks = [
  {
    id: 1,
    url: "#home",
    label: "Home",
  },
  {
    id: 2,
    url: "#resume",
    label: "Resume",
  },
  {
    id: 3,
    url: "#projects",
    label: "Projects",
  },
  {
    id: 4,
    url: "#contact",
    label: "Contact",
  },
];

export const aboutMe = {
  title: "About Me",
  description:
    "Hi, I'm Aayush Karki, a tech enthusiast who loves building dynamic ReactJS/NextJS projects and creating seamless user experiences.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Aayush Karki",
    },
    {
      fieldName: "Phone",
      fieldValue: "+977 9827368746",
    },
    {
      fieldName: "Email",
      fieldValue: "ayushkarkee6@gmail.com",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Nepali",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Nepali, Hindi",
    },
  ],
};

export const education = {
  title: "My Education",
  description:
    "BSc (Hons) in Computing, Itahari International College – Focused on building skills in software development, data management, and modern computing technologies.",
  info: [
    {
      institution: "Vishwa Adarsha College",
      degree: "+2 in Science",
      duration: "2019 - 2020 AD",
    },
    {
      institution: "Itahari International College",
      degree: "BSc (Hons.) in computing",
      duration: "2021 - 2024 AD",
    },
  ],
};

export const experience = {
  title: "My Experience",
  description:
    "Engineering Manager at CareDevi, leading the development of scalable healthcare platforms by combining technical leadership, backend architecture, and full-stack engineering. I drive cross-functional initiatives, mentor engineers, and build reliable systems that serve healthcare providers and patients.",

  info: [
    {
      company: "CareDevi",
      role: "Engineering Manager",
      duration: "July 2025 - Present",
      details: [
        "Lead engineering initiatives across backend systems, APIs, and healthcare platform architecture.",
        "Design scalable Node.js, GraphQL, and PostgreSQL services with a focus on performance and reliability.",
        "Make architectural decisions and collaborate closely with product and design teams to deliver features.",
        "Manage sprint planning, code reviews, technical mentoring, and engineering best practices.",
        "Monitor production systems using Datadog, investigate incidents, and improve system reliability.",
        "Design and implement healthcare features including wellness, EMR, patient portal, and public profile services.",
        "Drive CI/CD improvements, code quality, and scalable development workflows.",
      ],
    },
    {
      company: "Going Genius Group of Companies",
      role: "Full Stack Developer Intern",
      duration: "November 2024 - July 2025",
      details: [
        "Built full-stack applications using Next.js, Node.js, Prisma ORM, and PostgreSQL.",
        "Developed a POS system with authentication, role-based access, and payment gateway integration.",
        "Created a meeting scheduling platform with Clerk authentication and Google Calendar integration.",
        "Integrated Google Meet scheduling and automated event creation.",
        "Designed responsive user interfaces and optimized backend performance.",
        "Collaborated with fellow interns through code reviews and feature development.",
      ],
    },
  ],
};

export const skills = {
  title: "My Skills",
  description:
    "I build scalable full-stack applications and backend systems with a strong focus on system architecture, API design, cloud deployment, and engineering leadership. My experience spans healthcare platforms, modern web technologies, and production-grade software.",

  skillList: [
    {
      icon: <FaHtml5 />,
      name: "HTML5",
    },
    {
      icon: <FaCss3Alt />,
      name: "CSS3",
    },
    {
      icon: <FaSquareJs />,
      name: "JavaScript",
    },
    {
      icon: <SiTypescript />,
      name: "TypeScript",
    },
    {
      icon: <FaReact />,
      name: "React",
    },
    {
      icon: <RiNextjsLine />,
      name: "Next.js",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js",
    },
    {
      icon: <SiExpress />,
      name: "Express.js",
    },
    {
      icon: <DiPostgresql />,
      name: "PostgreSQL",
    },
    {
      icon: <SiMongodb />,
      name: "MongoDB",
    },
    {
      icon: <SiPrisma />,
      name: "Prisma ORM",
    },
    {
      icon: <SiGraphql />,
      name: "GraphQL",
    },
    {
      icon: <SiDocker />,
      name: "Docker",
    },
    {
      icon: <SiRedis />,
      name: "Redis",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
    },
    {
      icon: <FaGitAlt />,
      name: "Git",
    },
    {
      icon: <FaAws />,
      name: "AWS",
    },
    {
      icon: <SiDatadog />,
      name: "Datadog",
    },
    {
      icon: <FaFigma />,
      name: "Figma",
    },
  ],
};

export const projects = [
  {
    num: "01",
    category: "GlowGuide Website | Full-Stack Project",
    title: "GlowGuide – AI Skincare Assistant",
    description:
      "GlowGuide is a personalized skincare platform with role-based access (User, Admin, Dermatologist). Users can create skin profiles, track progress, chat with dermatologists, and receive AI-powered routine and product recommendations using Hugging Face API. Dermatologists manage appointments and patient details, while admins control user management and product listings.",
    stack: [
      { name: "React.js" },
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "My Sql" },
      { name: "Prisma ORM" },
      { name: "HuggingFace API" },
      { name: "Socket.io" },
    ],
    image: "/images/glowguide.png",
    live: "https://glowguide.vercel.app/",
    github: "https://github.com/K-Aayush/GlowGuide-Frontend",
  },
  {
    num: "02",
    category: "HomeServiceBooking Website | Full-Stack Project",
    title: "HomeServiceBooking – Booking Platform",
    description:
      "A full-featured home service booking platform supporting User, Recruiter, and Admin roles. Users can book services by category (Cleaning, Plumbing, Electrical), use OpenStreetMap for location input, and Stripe for payments. Includes real-time chat, booking status updates, dashboards for recruiters and admins, and visual data insights with filters and charts.",
    stack: [
      { name: "React.js" },
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "My Sql" },
      { name: "Prisma ORM" },
      { name: "Stripe API" },
      { name: "Socket.io" },
    ],
    image: "/images/homeservice.png",
    live: "",
    github: "https://github.com/K-Aayush/HomeServiceBooking-Frontend",
  },
  {
    num: "03",
    category: "Meeting Schedular | Nexjs Project",
    title: "MeetingSchedular - Scheduling Platform",
    description:
      "Meeting Scheduler is a full-stack web application built with Next.js and styled using Tailwind CSS. It allows users to create customizable event types, authenticate securely with Clerk, and schedule meetings with real-time Google Calendar integration. The app automatically generates and shares Google Meet links upon booking, making it seamless for users to manage and share their meetings. Powered by Prisma ORM and NeonDB, it ensures efficient data handling and smooth performance across devices.",
    stack: [
      { name: "NextJs" },
      { name: "TailwindCss" },
      { name: "TypeScript" },
      { name: "SadcnUI" },
      { name: "Clerk" },
      { name: "NeonDB" },
      { name: "Prisma ORM" },
      { name: "Google API" },
    ],
    image: "/images/schedular.png",
    live: "https://meetingscheulder.vercel.app/",
    github: "https://github.com/K-Aayush/meetingscheulder",
  },
  {
    num: "04",
    category: "Webpal Website | Frontend Project",
    title: "WebPal",
    description:
      "WebPal is a modern web application built using Next.js and styled with Tailwind CSS. It features smooth animations, responsive design, and optimized performance for a seamless user experience across all devices.",
    stack: [
      { name: "NextJs" },
      { name: "TailwindCss" },
      { name: "TypeScript" },
    ],
    image: "/images/webpal.png",
    live: "https://webpal.vercel.app/",
    github: "https://github.com/K-Aayush/webpal",
  },
  {
    num: "05",
    category: "ConnectMe | Full-Stack Project",
    title: "ConnectMe - Dating Platform",
    description:
      "ConnectMe is a swipe-based dating web application similar to Tinder, built with the MERN stack. The frontend is developed using Next.js with Tailwind CSS for a responsive design, while the backend is powered by Express and the database is managed with MongoDB. The app features chat functionality, real-time matches, and an engaging user interface.",
    stack: [
      { name: "NextJs" },
      { name: "TailwindCss" },
      { name: "TypeScript" },
      { name: "expressJS" },
      { name: "mongoDB" },
    ],
    image: "/images/connectme.png",
    live: "",
    github: "https://github.com/K-Aayush/ConnectMe",
  },
];

export const Contacts = {
  phone: "+977 9827368746",
  email: "ayushkarkee6@gmail.com",
  address: "Kathmandu, Nepal",
};
