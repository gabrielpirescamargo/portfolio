import volunteeringData from '../data/volunteeringData';

const VolunteeringList = () => (
  <div className='bg-zinc-800 p-6 rounded-lg shadow-md relative'>
    <h2 className='text-2xl font-semibold'>Volunteering</h2>
    {volunteeringData.map((item, index) => (
      <div key={index} className='mt-4 relative border-b border-zinc-700 pb-4'>
        <h3 className='text-xl font-semibold'>{item.role}</h3>
        <p className='text-zinc-400'>{item.organization}</p>
        <p className='text-zinc-400 text-sm'>{item.duration}</p>
        <p className='text-zinc-500 text-sm mt-1'>{item.cause}</p>
        <ul className='list-disc list-inside text-zinc-300 text-sm leading-relaxed mt-3'>
          {item.description.map((desc, descIdx) => (
            <li key={descIdx}>{desc}</li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);

export default VolunteeringList;
