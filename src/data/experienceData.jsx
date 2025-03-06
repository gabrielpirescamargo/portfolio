import {
  FaReact,
  FaAngular,
  FaNodeJs,
  FaJava,
  FaJs,
  FaVuejs,
} from "react-icons/fa";

const experienceData = [
  {
    company: "IBM",
    logo: "https://media.licdn.com/dms/image/v2/D560BAQGiz5ecgpCtkA/company-logo_200_200/company-logo_200_200/0/1688684715866/ibm_logo?e=1749081600&v=beta&t=B5eYafbwJNb4tYdrMvUgolm9lpS_oqyIfZQo8hV615k",
    location: "Hortolândia, São Paulo, Brazil · Hybrid",
    positions: [
      {
        title: "Mid-level Full Stack Developer",
        duration: "Dec 2024 - Present · 3 mos",
        skills: [
          { name: "TypeScript", icon: <FaJs /> },
          { name: "Angular", icon: <FaAngular /> },
          { name: "Java", icon: <FaJava /> },
        ],
      },
      {
        title: "Junior Full Stack Developer",
        duration: "May 2023 - Dec 2024 · 1 yr 8 mos",
        skills: [
          { name: "JavaScript", icon: <FaJs /> },
          { name: "React", icon: <FaReact /> },
          { name: "Node", icon: <FaNodeJs /> },
        ],
      },
      {
        title: "Full Stack Development Intern",
        duration: "Jun 2022 - May 2023 · 1 yr",
        skills: [
          { name: "JavaScript", icon: <FaJs /> },
          { name: "TypeScript", icon: <FaJs /> },
          { name: "Node", icon: <FaNodeJs /> },
          { name: "Next", icon: <FaReact /> },
          { name: "React", icon: <FaReact /> },
          { name: "Vue", icon: <FaVuejs /> },
        ],
      },
    ],
  },
  {
    company: "Argos Admnistradora",
    logo: "https://media.licdn.com/dms/image/v2/C4E0BAQEehRpHpuW58Q/company-logo_100_100/company-logo_100_100/0/1631793805208?e=1749081600&v=beta&t=Oxn-iJVv1l36A8u8S8JLkQx-7gSWChVBqaXdlm7tmSs",
    location: "Americana, São Paulo, Brazil",
    positions: [
      {
        title: "IT Intern",
        duration: "Dec 2024 - Present · 3 mos",
        skills: [
          { name: "TypeScript", icon: <FaJs /> },
          { name: "Angular", icon: <FaAngular /> },
          { name: "Java", icon: <FaJava /> },
        ],
      },
    ],
  },
];
export default experienceData;
