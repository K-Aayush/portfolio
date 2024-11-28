import {
  FaBookOpen,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaSquareJs,
  FaReact,
} from "react-icons/fa6";
import { SiMongodb, SiMysql } from "react-icons/si";
import { RiNextjsLine } from "react-icons/ri";

export const navLinks = [
  {
    id: 1,
    url: "#",
    label: "Home",
  },
  {
    id: 2,
    url: "#",
    label: "Resume",
  },
  {
    id: 3,
    url: "#",
    label: "Projects",
  },
  {
    id: 4,
    url: "#",
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
  icon: FaBookOpen,
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

export const skills = {
  title: "My Skills",
  description:
    "I specialize in front-end development, creating interactive and responsive web applications using technologies like ReactJS, Tailwind CSS, and Redux. My focus is on crafting seamless user experiences with modern, efficient designs.",
  skillList: [
    {
      icon: FaHtml5,
      name: "html 5",
    },
    {
      icon: FaCss3Alt,
      name: "css 3",
    },
    {
      icon: FaSquareJs,
      name: "javascript",
    },
    {
      icon: FaReact,
      name: "reactjs",
    },
    {
      icon: RiNextjsLine,
      name: "nextjs",
    },
    {
      icon: SiMongodb,
      name: "mongodb",
    },
    {
      icon: SiMysql,
      name: "mysql",
    },
    {
      icon: FaNodeJs,
      name: "nodejs",
    },
  ],
};
