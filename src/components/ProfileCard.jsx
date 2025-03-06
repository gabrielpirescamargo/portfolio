import {
  FaAngular,
  FaJava,
  FaJs,
  FaMapMarkerAlt,
  FaNode,
  FaReact,
  FaVuejs,
} from "react-icons/fa";

const ProfileCard = ({ userData }) => (
  <div className="bg-zinc-800 rounded-xl shadow-lg p-6 text-center flex flex-col items-center ">
    <div className="bg-blue-300 p-1 rounded-full">
      <img
        src={userData?.avatar_url}
        alt="Profile"
        className="w-24 h-24 rounded-full border-4 border-zinc-900"
      />
    </div>
    <h1 className="text-3xl font-bold mt-4">
      {userData?.name || userData?.login}
    </h1>
    <p className="text-zinc-400">@{userData?.login}</p>
    <p className="mt-2 text-zinc-300">Full Stack Developer @ IBM</p>
    <p className="mt-2 text-zinc-400 flex items-center gap-2">
      <FaMapMarkerAlt /> São Paulo, Brazil
    </p>
    <p>
      <div className="flex flex-row gap-2 mt-2">
        <FaJs />
        <FaReact />
        <FaNode />
        <FaJava />
        <FaAngular />
        <FaVuejs />
      </div>
    </p>
  </div>
);

export default ProfileCard;
