import profileSummary from '../data/profileData';

const AboutCard = () => (
  <div className='bg-zinc-800 p-6 rounded-lg shadow-md relative'>
    <h2 className='text-2xl font-semibold'>About</h2>
    <div className='mt-4 space-y-3 text-zinc-300 text-sm leading-relaxed'>
      {profileSummary.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  </div>
);

export default AboutCard;
