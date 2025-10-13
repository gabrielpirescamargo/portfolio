import { FaReact, FaAngular, FaNodeJs, FaJs } from 'react-icons/fa';

const monthNames = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];
function diffInYM(from, to) {
  let years = to.getFullYear() - from.getFullYear();
  let months = to.getMonth() - from.getMonth();
  if (months < 0) {
    years -= 1;
    months += 12;
  }
  return { years, months };
}
function formatYM({ years, months }) {
  const parts = [];
  if (years > 0) parts.push(`${years} yr${years > 1 ? 's' : ''}`);
  if (months > 0) parts.push(`${months} mo${months > 1 ? 's' : ''}`);
  return parts.join(' ');
}
function getDuration(startYear, startMonthIdx /* 0-11 */) {
  const now = new Date();
  const from = new Date(startYear, startMonthIdx, 1);
  const ym = diffInYM(from, now);
  const range = `${monthNames[startMonthIdx]} ${startYear} - Present`;
  const tail = formatYM(ym);
  return `${range} · ${tail}`;
}

const experienceData = [
  {
    company: 'IBM',
    logo: 'https://media.licdn.com/dms/image/v2/D560BAQGiz5ecgpCtkA/company-logo_100_100/company-logo_100_100/0/1688684715866/ibm_logo?e=1762992000&v=beta&t=1v-lZKZC414qC40RivV6Vnn4x5lVoquJUXEO1MqitAg',
    location: 'Hortolândia, São Paulo, Brazil · Hybrid',
    positions: [
      {
        title: 'Senior Software Engineer',
        duration: getDuration(2024, 11),
        skills: [
          { name: 'React', icon: <FaReact /> },
          { name: 'AngularJS', icon: <FaAngular /> },
          { name: 'TypeScript', icon: <FaJs /> },
        ],
        description: [
          'Lead the frontend modernization of a 30-year-old legacy tool into a scalable, design-system–driven platform.',
          'Contributed to sunsetting and migration to a modern architecture using AngularJS, React, TypeScript and the company design system.',
          'Collaborated cross-functionally with frontend, backend, design and global stakeholders to align technical and business goals.',
          'Established and enforced code quality and architectural standards, improving maintainability and onboarding.',
          'Mentored junior engineers via pair reviews and technical guidance, enhancing team productivity.',
        ],
      },
      {
        title: 'Software Engineer',
        duration: 'May 2023 - Dec 2024 · 1 yr 8 mos',
        skills: [
          { name: 'React', icon: <FaReact /> },
          { name: 'JavaScript', icon: <FaJs /> },
          { name: 'TypeScript', icon: <FaJs /> },
        ],
        description: [
          'Developed and maintained global pricing tools focused on performance, UX and legacy modernization.',
          'Contributed to replacing an outdated pricing tool with React + TypeScript, increasing reliability and usability.',
          'Implemented UX and performance improvements, enhancing navigation speed and responsiveness.',
          'Partnered with design and backend to deliver end-to-end solutions for global sales operations.',
        ],
      },
      {
        title: 'Junior Software Engineer',
        duration: 'Jun 2022 - May 2023 · 1 yr',
        skills: [
          { name: 'React', icon: <FaReact /> },
          { name: 'Next.js', icon: <FaReact /> },
          { name: 'JavaScript', icon: <FaJs /> },
        ],
        description: [
          'Joined the engineering team focusing on frontend development and design improvements.',
          'Worked on UI redesign and frontend refactor of a ticketing tool, improving visual consistency and performance.',
          'Contributed to three production releases, delivering new features with React and TypeScript.',
        ],
      },
    ],
  },
  {
    company: 'Pires Code',
    logo: 'https://media.licdn.com/dms/image/v2/D4D0BAQEptHEs_JGiCw/company-logo_100_100/B4DZW_lTyIGkAQ-/0/1742676038858?e=1762992000&v=beta&t=LUel7EJT_tKqmByq9afWbfuwVT8elPMqcL1qEtKQ9iY',
    location: 'Remote',
    positions: [
      {
        title: 'Educator (Freelance)',
        duration: getDuration(2025, 2),
        skills: [
          { name: 'React', icon: <FaReact /> },
          { name: 'Node.js', icon: <FaNodeJs /> },
          { name: 'JavaScript', icon: <FaJs /> },
        ],
        description: [
          'One-on-one mentorship programs in web dev and full-stack engineering with hands-on, project-based learning.',
          'Mentored four students individually across complete frontend and backend projects.',
          'Designed a learning methodology combining React, Node.js and database fundamentals; frequent pair programming.',
        ],
      },
    ],
  },
  {
    company: 'Argos Construtora e Arquitetura',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1TuqjkPP87sgqvtJVFuiYAyCN78C6Q1JFUw&s',
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
