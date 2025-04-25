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
} from "react-icons/si";
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
    "Full Stack Developer Intern at Going Genius Group of Companies – Contributed to the development of POS software using Next.js, Node.js, and PostgreSQL. Led a team of interns and worked on various aspects including user authentication, integrating payment gateways, middleware, and code reviews.",
  info: [
    {
      company: "Going Genius Group of Companies",
      role: "Full Stack Developer Intern - Group Project",
      duration: "November 2024 - April 2025",
      details: [
        "Developed a POS software using Next.js, managing both frontend and backend tasks.",
        "Implemented authentication, protected routes, and structured the project using best practices.",
        "Integrated Khalti payment gateway for card top-up functionality.",
        "Designed and built a dynamic card component and responsive landing page.",
        "Managed the database with Prisma ORM, designing the schema and structuring data.",
        "Developed logic for logout, user profiles, and fixed various bugs and type errors.",
        "Led a team of interns, reviewed code, fixed bugs & type errors, and optimized performance.",
      ],
    },
    {
      company: "Going Genius Group of Companies",
      role: "Full Stack Developer Intern - Solo Project",
      duration: "November 2024 - April 2025",
      details: [
        "Developed a full-stack meeting scheduling platform using Next.js and Prisma ORM with NeonDB as the database.",
        "Implemented Clerk authentication for secure user sign-in, registration, and session management.",
        "Designed a user dashboard allowing users to manage profiles, create and configure event types.",
        "Integrated Google Calendar API to schedule meetings directly into users' calendars.",
        "Generated and shared Google Meet links automatically upon scheduling a meeting.",
        "Enabled users to share meeting links with others, allowing seamless booking and calendar integration.",
        "Ensured responsive UI/UX and optimized backend performance for real-time scheduling.",
      ],
    },
  ],
};

export const skills = {
  title: "My Skills",
  description:
    "I specialize in front-end development, creating interactive and responsive web applications using technologies like ReactJS, Tailwind CSS, and Redux. My focus is on crafting seamless user experiences with modern, efficient designs.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3Alt />,
      name: "css 3",
    },
    {
      icon: <FaSquareJs />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "reactjs",
    },
    {
      icon: <RiNextjsLine />,
      name: "nextjs",
    },
    {
      icon: <SiMongodb />,
      name: "mongodb",
    },
    {
      icon: <SiMysql />,
      name: "mysql",
    },
    {
      icon: <FaNodeJs />,
      name: "nodejs",
    },
    {
      icon: <DiPostgresql />,
      name: "Postgresql",
    },
    {
      icon: <FaFigma />,
      name: "Figma",
    },
    {
      icon: <SiTailwindcss />,
      name: "TailwindCss",
    },
    {
      icon: <SiTypescript />,
      name: "TypeScript",
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
