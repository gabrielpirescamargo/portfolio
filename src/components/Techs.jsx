import { FaAngular, FaCss3, FaHtml5, FaJava, FaJs, FaNode, FaReact, FaVuejs } from "react-icons/fa";
import { SiNextdotjs, SiReact, SiSass, SiTailwindcss, SiTypescript } from "react-icons/si";

const Techs = () => {
  const techs = [  
    { name: 'Javascript', icon: <FaJs color="yellow" size={64} /> },
    { name: 'Typescript', icon: <SiTypescript color="deepskyblue" size={64} /> }, // Usa SiReact para React Native
    { name: 'React', icon: <FaReact color="aqua" size={64} /> },
    { name: 'Next.js', icon: <SiNextdotjs  size={64} /> },
    { name: 'Angular', icon: <FaAngular color="red" size={64} /> },
    { name: 'Vue', icon: <FaVuejs color="green" size={64} /> },
    { name: 'Node.js', icon: <FaNode color="lime" size={64} /> },
    { name: 'Java', icon: <FaJava color="orange" size={64} /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss size={64} className="text-blue-500" /> },
    { name: 'SASS', icon: <SiSass size={64} className="text-pink-500" /> },
    { name: 'CSS', icon: <FaCss3 color="deepskyblue" size={64} /> },
    { name: 'HTML', icon: <FaHtml5 color="orangered"size={64} /> },
  ];
  return (
    <div>
      <h2 className="text-2xl font-semibold">Skills</h2>
      <div className="grid grid-cols-2 gap-4 mt-4">
        {techs.map((tech) => (
          <div key={tech.name} className="bg-zinc-800 p-4 rounded-lg shadow-md flex flex-col items-center justify-center gap-">
           {tech.icon}
            <h3 className="text-xs font-semibold text-zinc-300 truncate">
              {tech.name}
            </h3>
          
          </div>
        ))}
      </div>
    </div>
  );
};

export default Techs;
