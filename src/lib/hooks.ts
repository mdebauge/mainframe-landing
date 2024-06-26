import { useEffect, useState } from "react";

export function useRepoStars(username: string, repo: string) {
  const [stars, setStars] = useState<number | null>(null);

  useEffect(() => {
    if (!username || !repo) {
      return;
    }
    const fetchRepoStars = async () => {
      const response = await fetch(
        `https://api.github.com/repos/${username}/${repo}`
      );
      const data = await response.json();
      setStars(data.stargazers_count);
    };

    fetchRepoStars();
  }, [username, repo]);

  return stars;
}
