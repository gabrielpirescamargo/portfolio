import { useState, useEffect } from "react";
import ProfileCard from "../components/ProfileCard";
import ExperienceList from "../components/ExperienceList";
import RecentProjects from "../components/RecentProjects";
import { fetchGitHubData } from "../services/githubService";
import EducationList from "../components/EducationList";
import Techs from "../components/Techs";

const UserProfile = () => {
  const [userData, setUserData] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const username = "gabrielpirescamargo";

  useEffect(() => {
    fetchGitHubData(username, setUserData, setRepos, setLoading);
    document.title = "Gabriel Pires - Portfolio";

  }, []);

  if (loading) return <p className="text-center text-zinc-500">Loading...</p>;
  if (!userData)
    return <p className="text-center text-red-500">User not found</p>;

  return (
    <div className="min-h-screen bg-zinc-900 text-white flex flex-col items-center p-6 md:p-12">
      <div className="flex flex-col md:flex-row items-start gap-6 w-full max-w-6xl">
        <div className="flex flex-col gap-4">
          <ProfileCard userData={userData} />
          <Techs/>
          <RecentProjects repos={repos} />
        </div>
        <div className="w-full flex flex-col gap-4">

          <ExperienceList />
          <EducationList />
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
