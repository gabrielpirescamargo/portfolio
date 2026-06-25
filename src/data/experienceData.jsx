import { FaAngular, FaChalkboardTeacher, FaDatabase, FaJava, FaLayerGroup, FaNodeJs, FaReact } from 'react-icons/fa';
import { SiElectron, SiMongodb, SiNextdotjs, SiTypescript } from 'react-icons/si';

const experienceData = [
  {
    company: 'IBM',
    logo: 'https://media.licdn.com/dms/image/v2/D560BAQGiz5ecgpCtkA/company-logo_100_100/company-logo_100_100/0/1688684715866/ibm_logo?e=1762992000&v=beta&t=1v-lZKZC414qC40RivV6Vnn4x5lVoquJUXEO1MqitAg',
    employmentType: 'Full-time · 4 yrs 1 mo',
    location: 'Hortolândia, São Paulo, Brazil · Hybrid',
    positions: [
      {
        title: 'Senior Software Engineer',
        duration: 'Dec 2024 - Present · 1 yr 7 mos',
        skills: [
          { name: 'AngularJS', icon: <FaAngular /> },
          { name: 'React', icon: <FaReact /> },
          { name: 'TypeScript', icon: <SiTypescript /> },
          { name: 'Java', icon: <FaJava /> },
          { name: 'Carbon Design System', icon: <FaLayerGroup /> },
        ],
        description: [
          'As a Senior Software Engineer, I lead the frontend modernization of a 30-year-old legacy tool into a scalable, design-system-driven platform.',
          'Contributed to sunsetting and migration of a legacy internal system to a modern architecture using Angular, React, TypeScript, Java and Carbon Design System.',
          'Collaborated cross-functionally with frontend, backend, and design teams, as well as global stakeholders, to align technical and business goals.',
          'Established and enforced code quality and architectural standards, improving maintainability and developer onboarding.',
          'Mentored junior engineers through pair reviews and technical guidance, enhancing overall team productivity.',
        ],
      },
      {
        title: 'Software Engineer',
        duration: 'Jun 2022 - Dec 2024 · 2 yrs 7 mos',
        skills: [
          { name: 'React', icon: <FaReact /> },
          { name: 'TypeScript', icon: <SiTypescript /> },
          { name: 'Electron', icon: <SiElectron /> },
          { name: 'MongoDB', icon: <SiMongodb /> },
          { name: 'Node.js', icon: <FaNodeJs /> },
          { name: 'Next.js', icon: <SiNextdotjs /> },
          { name: 'Carbon Design System', icon: <FaLayerGroup /> },
        ],
        description: [
          'Worked developing and maintaining 5+ projects used by IBM internal users, focused on performance, user experience, and modernization of legacy systems.',
          'Contributed to the full replacement of an outdated pricing tool using React, Electron, MongoDB, Node and TypeScript, increasing reliability and usability for internal users.',
          'Led and mentored 5+ entry-level developers.',
          'Implemented UX and performance improvements, enhancing navigation speed and overall responsiveness.',
          'Collaborated with design and backend teams to deliver end-to-end solutions supporting IBM’s global sales operations.',
          'Worked on the UI redesign and frontend refactor of a ticketing tool, improving visual consistency and performance using React, Next, TypeScript and Carbon Design System.',
        ],
      },
    ],
  },
  {
    company: 'Pires Code',
    logo: 'https://media.licdn.com/dms/image/v2/D4D0BAQEptHEs_JGiCw/company-logo_100_100/B4DZW_lTyIGkAQ-/0/1742676038858?e=1762992000&v=beta&t=LUel7EJT_tKqmByq9afWbfuwVT8elPMqcL1qEtKQ9iY',
    employmentType: 'Freelance',
    location: 'Remote',
    positions: [
      {
        title: 'Educator',
        duration: 'Mar 2025 - Present · 1 yr 4 mos',
        skills: [
          { name: 'React', icon: <FaReact /> },
          { name: 'TypeScript', icon: <SiTypescript /> },
          { name: 'Node.js', icon: <FaNodeJs /> },
          { name: 'MongoDB', icon: <FaDatabase /> },
          { name: 'Teaching', icon: <FaChalkboardTeacher /> },
        ],
        description: [
          'Founder and instructor at Pires Code, providing one-on-one mentorship programs in web development and full-stack engineering.',
          'Teaching approach focused on hands-on learning and real-world problem-solving through pair programming.',
          'Mentored four students individually across complete frontend and backend projects.',
          'Designed a project-based learning methodology combining React, Node.js, TypeScript, Tailwind, Redux, MongoDB and database fundamentals.',
          'Conducted pair programming sessions, enabling students to learn by building real applications in practice.',
        ],
      },
    ],
  },
  {
    company: 'Argos Construtora e Arquitetura',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1TuqjkPP87sgqvtJVFuiYAyCN78C6Q1JFUw&s',
    employmentType: 'Internship',
    location: 'Americana, São Paulo, Brazil · On-site',
    positions: [
      {
        title: 'IT Intern',
        duration: 'Aug 2021 - Jan 2022 · 6 mos',
        skills: [
          { name: 'Hardware & Software Support', icon: '' },
          { name: 'Notion Workspace Management', icon: '/' },
          { name: 'Website Maintenance', icon: '/' },
        ],
        description: [
          'Performed hardware/software maintenance on employee workstations, improving daily reliability.',
          'Structured and organized the company’s Notion workspace, centralizing documentation and visibility.',
          'Supported website updates ensuring consistent visual presentation and usability.',
        ],
      },
    ],
  },
];

export default experienceData;
