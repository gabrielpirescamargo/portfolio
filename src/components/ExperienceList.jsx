import experienceData from '../data/experienceData';

const ExperienceList = () => (
  <div>
    <div className='flex flex-col items-start gap-4 bg-zinc-800 p-6 rounded-lg shadow-md relative w-full'>
      <h2 className='text-2xl font-semibold'>Professional experience</h2>

      {experienceData.map((company, index) => {
        return (
          <div key={index} className='w-full'>
            <div className='flex flex-row gap-2 items-center mb-2'>
              <img
                src={company.logo}
                alt={`${company.company} logo`}
                className='w-8 h-8 rounded-full mt-2'
              />
              <h3 className='text-xl font-semibold'>{company.company}</h3>
            </div>

            {company.positions?.map((job, idx) => (
              <div
                className='border-b border-zinc-700 pb-6 mb-4 pl-4 relative'
                key={idx}
              >
                <div className='absolute left-0 top-3 w-2 h-2 rounded-full bg-zinc-300'></div>

                <div className='mt-2'>
                  <h4 className='text-lg font-semibold'>{job.title}</h4>
                  <p className='text-zinc-400'>{job.duration}</p>

                  {/* Skills */}
                  <h4 className='mt-3 font-semibold'>Skills:</h4>
                  <div className='flex flex-wrap gap-4 mt-2'>
                    {job.skills.map((skill, id) => (
                      <div key={id} className='flex items-center gap-2'>
                        {skill.icon}
                        <span>{skill.name}</span>
                      </div>
                    ))}
                  </div>

                  {/* Description */}
                  {job.description && (
                    <div className='mt-4'>
                      <h4 className='font-semibold mb-1'>Highlights:</h4>
                      <ul className='list-disc list-inside text-zinc-300 text-sm leading-relaxed'>
                        {job.description.map((desc, dIdx) => (
                          <li key={dIdx}>{desc}</li>
                        ))}
                      </ul>
                    </div>
                  )}
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
