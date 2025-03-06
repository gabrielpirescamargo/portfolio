export const fetchGitHubData = async (username, setUserData, setRepos, setLoading) => {
    try {
      const userRes = await fetch(`https://api.github.com/users/${username}`);
      const reposRes = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`);
      if (!userRes.ok || !reposRes.ok) throw new Error("User not found");
      

      const repos = await reposRes.json()
      const reposFiltered =repos.filter(repo => repo.stargazers_count ===1      )
      console.log(reposFiltered)
      setUserData(await userRes.json());
      setRepos(reposFiltered    );
    } catch (error) {
      console.error(error);
      setUserData(null);
    } finally {
      setLoading(false);
    }
  };