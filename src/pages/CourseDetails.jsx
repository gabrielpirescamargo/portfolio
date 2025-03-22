import { useParams, useNavigate } from 'react-router-dom';
import courseData from "../couseData.json";
import "../globals.scss";

const CourseDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const course = courseData.courses.find((course) => course.id === id);

  if (!course) return <p className="text-white">Course not found</p>;

  return (
    <div className="min-h-screen bg-zinc-900 text-white">
      {/* Cabeçalho */}
      <button
          onClick={() => navigate(-1)}
          className="px-4 py-2 text-white rounded-lg  cursor-pointer absolute left-[32px] top-[24px]"
        >
          Voltar
        </button>
      <header className="custom-gradient py-6 shadow-lg text-center">
        
        <h1 className="text-5xl font-bold">{course.title}</h1>
      </header>

      {/* Botão de Voltar */}
  

      {/* Conteúdo */}
      <div className="p-6 max-w-7xl mx-auto">
        {course.levels.map((level) => (
          <div key={level.name} className="mb-8 bg-zinc-800 p-6 rounded-lg shadow-md">
            <h4 className="text-3xl font-medium text-zinc-200">{level.level}</h4>
            {level.topics.map((topic) => (
              <div key={topic.title} className="mt-6">
                <p className="text-xl font-semibold text-zinc-100">{topic.title}</p>
                <ul className="list-disc list-inside ml-5 mt-3 text-zinc-300">
                  {topic.items.map((item) => (
                    <li key={item} className="text-base">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseDetails;
