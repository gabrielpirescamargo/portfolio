import {
  FaJs,
  FaReact,
  FaNodeJs,
  FaJava,
  FaCss3,
  FaHtml5,
  FaPhp,
} from "react-icons/fa";
import { FaC, FaFlutter } from "react-icons/fa6";

const educationData = [
  {
    institution: "Rocketseat",
    logo: "https://yt3.googleusercontent.com/SkyQrFYa4v7vVMpC4nqsdlOaIHWw1HvRUxf4940GcJfRWgGUxtMJ9WdTTJOCj0a1ddJYPKxe=s900-c-k-c0x00ffffff-no-rj",
    degrees: [
      {
        degree: "Master of Business Administration - MBA, Full Stack Development",
        duration: "Apr 2024 - Apr 2025",
        grade: "95",
        description: [
          "During the Rocketseat MBA, I enhanced my technical and leadership skills through a hands-on and project-driven experience.",
          "I deepened my knowledge in software architecture, clean code, and scalable systems, while working with modern web technologies like React, Next.js, TypeScript, Node.js, and NestJS.",
          "Beyond the technical side, the program helped me grow as a technical leader, improving my ability to guide teams, design complex solutions, and make strategic engineering decisions through real-world challenges and mentorship from experienced professionals.",
        ],
        skills: [
          { name: "JavaScript", icon: <FaJs /> },
          { name: "React", icon: <FaReact /> },
          { name: "Next.js", icon: <FaReact /> },
          { name: "Node", icon: <FaNodeJs /> },
        ],
      },
    ],
  },
  {
    institution: 'Fatec Americana "Ministro Ralph Biasi"',
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb32exkq4YBVxFYTfVuHdBiWxHnUBCZ3hfLg&s",
    degrees: [
      {
        degree: "Technologist, Systems Analysis and Development",
        duration: "Jan 2022 - Nov 2023",
        grade: "90",
        description: [
          "During my degree in Systems Analysis and Development at FATEC, I built a strong foundation in software engineering and full-stack development, with hands-on experience across several key areas of technology.",
          "Throughout the program, I focused on web and mobile development, IoT solutions, cloud computing, and application security, gaining both technical and practical skills to design and implement scalable systems.",
          "This experience helped me strengthen my problem-solving mindset and solidify my passion for creating innovative digital solutions from end to end.",
        ],
        skills: [
          { name: "JavaScript", icon: <FaJs /> },
          { name: "Java", icon: <FaJava /> },
          { name: "C#", icon: <FaC /> },
          { name: "CSS", icon: <FaCss3 /> },
          { name: "HTML", icon: <FaHtml5 /> },
          { name: "Flutter", icon: <FaFlutter /> },
        ],
      },
    ],
  },
  {
    institution: "ETEC - Escola Técnica Estadual de São Paulo",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5FE13TvWJdXOoPb9zSxzIMUQB5vdDur0fYw&s",
    degrees: [
      {
        degree: "Technical Course, System Development",
        duration: "Jan 2019 - Dec 2021",
        skills: [
          { name: "PHP", icon: <FaPhp /> },
          { name: "CSS", icon: <FaCss3 /> },
          { name: "HTML", icon: <FaHtml5 /> },
        ],
      },
    ],
  },
];
export default educationData;
