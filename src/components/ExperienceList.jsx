import experienceData from "../data/experienceData";

const ExperienceList = () => (
  <div>
    <div className="flex flex-col items-start gap-4 bg-zinc-800 p-6 rounded-lg shadow-md relative w-full">
      <h2 className="text-2xl font-semibold">Professional experience</h2>

      {experienceData.map((company, index) => {
        return (
          <div key={index} className="w-full ">
            <div className="flex flex-row  gap-2 items-center">
              <img
                src={company.logo}
                alt={company.logo}
                className="w-8 h-8 rounded-full mt-2"
              />

              <h3 className="text-xl font-semibold">{company.company}</h3>
            </div>
            {company.positions?.map((job, idx) => (
              <div
                className="flex flex-row items-center gap-8 border-b border-zinc-700 pb-4"
                key={idx}
              >
                <div className="w-2 h-2 rounded-full bg-zinc-300"></div>
                <div className="mt-4">
                  <h4 className="text-lg font-semibold">{job.title}</h4>
                  <p className="text-zinc-400">{job.duration}</p>
                  <h4 className="mt-2 font-semibold">Skills:</h4>
                  <div className="flex flex-wrap gap-4 mt-2">
                    {job.skills.map((skill, id) => (
                      <div key={id} className="flex items-center gap-2">
                        {skill.icon}
                        <span>{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        );
      })}
    </div>
  </div>
);

export default ExperienceList;
