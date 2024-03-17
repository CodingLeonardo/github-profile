import { octokit } from ".";

export const getRepositories = async (username: string) => {
  const { data } = await octokit.rest.repos.listForUser({ username, per_page: 4 });
  return data
}