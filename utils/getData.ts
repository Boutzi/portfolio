import { GithubUserResponse } from "@/types/user.types";

interface Repository {
  name: string;
  html_url: string;
  description: string;
  language: string;
  updated_at: string;
  [key: string]: string;
}

export const getRepositories = async (): Promise<Repository[]> => {
  return fetch(`https://api.github.com/users/Boutzi/repos`)
    .then((res) => res.json())
    .then((data: Repository[]) =>
      data
        .filter((repo) => repo.name !== "boutzi")
        .sort(
          (a, b) =>
            new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
        )
        .slice(0, 4)
    );
};

export const fetchGithubUserData = async (): Promise<GithubUserResponse> => {
  const GITHUB_API_URL = "https://api.github.com/users/Boutzi";
  const GITHUB_ACCESS_TOKEN = process.env.NEXT_PUBLIC_GITHUB_BEARER_TOKEN;

  try {
    const response = await fetch(GITHUB_API_URL, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${GITHUB_ACCESS_TOKEN}`,
        Accept: "application/vnd.github.v3+json",
      },
    });

    if (!response.ok) {
      throw new Error(
        `Failed to fetch GitHub user data: ${response.statusText}`
      );
    }

    const data: GithubUserResponse = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching GitHub user data:", error);
    throw error;
  }
};
