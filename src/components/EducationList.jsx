import educationData from "../data/educationData";

const EducationList = () => (
  <div className="bg-zinc-800 p-6 rounded-lg shadow-md relative">
    <h2 className="text-2xl font-semibold">Education</h2>
    {educationData.map((institution, index) => (
      <div key={index} className=" mt-4 relative border-b border-zinc-700 pb-4">
        <div className="flex flex-row  gap-2 items-center">
          <img
            src={institution.logo}
            alt={institution.logo}
            className="w-8 h-8 rounded-full mt-2"
          />

          <h3 className="text-xl font-semibold">{institution.institution}</h3>
        </div>
        {institution.degrees.map((degree, idx) => (
          <div key={idx} className="mt-4">
            <h4 className="text-lg font-semibold">{degree.degree}</h4>
            <p className="text-zinc-400">{degree.duration}</p>
            <h4 className="mt-2 font-semibold">Skills:</h4>
            <div className="flex flex-wrap gap-4 mt-2">
              {degree.skills.map((skill, id) => (
                <div key={id} className="flex items-center gap-2">
                  {skill.icon}
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    ))}
  </div>
);

export default EducationList;
