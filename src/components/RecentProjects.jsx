const RecentProjects = ({ repos }) => (
  <div>
    <h2 className="text-2xl font-semibold">Recent Projects</h2>
    <div className="grid grid-cols-2 gap-4 mt-4">
      {repos.map((repo) => (
        <div key={repo.id} className="bg-zinc-800 p-4 rounded-lg shadow-md">
          <h3 className="text-md font-semibold text-zinc-300 truncate">
            {repo.name}
          </h3>
          <p className="text-zinc-400 text-xs">
            {repo.description || "No description available."}
          </p>
          <a
            href={repo.html_url}
            className="text-blue-600 underline mt-2 block text-xs"
          >
            View on GitHub
          </a>
        </div>
      ))}
    </div>
  </div>
);

export default RecentProjects;
