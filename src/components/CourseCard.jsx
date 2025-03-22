import { useState } from "react";
import { Link } from "react-router-dom";

const CourseCard = ({course}) => {
    console.log(course)

  const [isOpen, setIsOpen] = useState(false);
return(
   <Link to={`/pires-code/${course.id}`}>
   
   <div
      key={course.title}
      onClick={()=> {setIsOpen(state => !state)}}
      className="bg-zinc-800 rounded-lg shadow-xl p-6 transform hover:scale-105 transition-all duration-300 cursor-pointer border border-black" style={{height: 'min-content'}}
    >
      <h3 className="text-3xl font-semibold text-white mb-4">{course.title}</h3>
     Clique para saber mais
   
     </div>
    </Link>
     
)

}

export default CourseCard