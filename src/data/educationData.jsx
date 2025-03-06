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
        degree: "Full Stack Development MBA",
        duration: "2024 - 2025",
        skills: [
          { name: "JavaScript", icon: <FaJs /> },
          { name: "React", icon: <FaReact /> },
          { name: "React Native", icon: <FaReact /> },
          { name: "Node", icon: <FaNodeJs /> },
        ],
      },
    ],
  },
  {
    institution: "FATEC Americana",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb32exkq4YBVxFYTfVuHdBiWxHnUBCZ3hfLg&s",
    degrees: [
      {
        degree: "Technician in Analysis and System Development",
        duration: "2022 - 2023",
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
    institution: "ETEC Polivalente de Americana",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5FE13TvWJdXOoPb9zSxzIMUQB5vdDur0fYw&s",
    degrees: [
      {
        degree: "Technical in Analysis and System Development",
        duration: "2022 - 2023",
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
