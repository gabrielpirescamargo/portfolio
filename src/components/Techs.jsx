import {
  FaAngular,
  FaCss3,
  FaHtml5,
  FaJava,
  FaJs,
  FaNode,
  FaReact,
  FaVuejs,
} from 'react-icons/fa';
import {
  SiNextdotjs,
  SiSass,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';

const Techs = () => {
  const specialistTechs = [
    { name: 'React.js', icon: <FaReact color='aqua' size={64} /> },
    { name: 'Next.js', icon: <SiNextdotjs size={64} /> },
    {
      name: 'TypeScript',
      icon: <SiTypescript color='deepskyblue' size={64} />,
    },
    {
      name: 'Tailwind CSS',
      icon: <SiTailwindcss size={64} className='text-blue-500' />,
    },
  ];

  const otherTechs = [
    { name: 'JavaScript', icon: <FaJs color='yellow' size={64} /> },
    { name: 'Angular', icon: <FaAngular color='red' size={64} /> },
    { name: 'Vue.js', icon: <FaVuejs color='green' size={64} /> },
    { name: 'Node.js', icon: <FaNode color='lime' size={64} /> },
    { name: 'Java', icon: <FaJava color='orange' size={64} /> },
    { name: 'SASS', icon: <SiSass size={64} className='text-pink-500' /> },
    { name: 'CSS', icon: <FaCss3 color='deepskyblue' size={64} /> },
    { name: 'HTML', icon: <FaHtml5 color='orangered' size={64} /> },
  ];

  const renderGrid = (list) => (
    <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-4'>
      {list.map((tech) => (
        <div
          key={tech.name}
          className='bg-zinc-800 p-4 rounded-lg shadow-md flex flex-col items-center justify-center gap-2 hover:bg-zinc-700 transition-all duration-200'
        >
          {tech.icon}
          <h3 className='text-sm font-semibold text-zinc-300 truncate'>
            {tech.name}
          </h3>
        </div>
      ))}
    </div>
  );

  return (
    <div className='text-white'>
      <section className='mb-8'>
        <h3 className='text-xl font-bold mb-2'>Specialized in</h3>
        <p className='text-zinc-400 text-sm mb-4'>
          Focused on building modern and scalable front-end applications, with
          solid experience in React, Next.js, TypeScript, and Tailwind CSS.
        </p>
        {renderGrid(specialistTechs)}
      </section>

      <section>
        <h3 className='text-xl font-bold mb-2 text-zinc-200'>Other Skills</h3>
        <p className='text-zinc-400 text-sm mb-4'>
          Complementary experience across the web and backend ecosystem,
          including frameworks and languages used in full-stack development.
        </p>
        {renderGrid(otherTechs)}
      </section>
    </div>
  );
};

export default Techs;
