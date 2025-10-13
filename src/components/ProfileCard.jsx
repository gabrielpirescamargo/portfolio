/* eslint-disable react/prop-types */
import { FaMapMarkerAlt } from 'react-icons/fa';
import { useState } from 'react';

const ProfileCard = ({ userData }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`h-80 rounded-xl shadow-lg p-6 text-center flex flex-col items-center transition-all duration-300 ${
        hovered ? 'bg-blue-400' : 'bg-zinc-800'
      }`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className='bg-blue-300 p-1 rounded-full'>
        <img
          src={userData?.avatar_url}
          alt='Profile'
          className={`${
            hovered ? 'w-40 h-40' : 'w-24 h-24'
          } rounded-full border-4 border-blue-900`}
        />
      </div>
      <h1 className='text-3xl font-bold mt-4'>
        {userData?.name || userData?.login}
      </h1>
      <p className='text-zinc-100'>@{userData?.login}</p>
      {hovered && window.location.href.includes('pires-code') && (
        <p className='mt-2 text-zinc-300'>Clique para saber mais</p>
      )}
      {!hovered && (
        <>
          <p className='mt-2 text-zinc-300'>Senior Software Engineer</p>
          <p className='mt-2 text-zinc-200 flex items-center gap-2'>
            <FaMapMarkerAlt /> São Paulo, Brazil
          </p>
        </>
      )}
    </div>
  );
};

export default ProfileCard;
