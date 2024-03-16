import { octokit } from ".";
import { User, UsersSearch } from "../types";

export const getUser = async (username: string) => {
  const { data } = await octokit.rest.users.getByUsername({ username });
  return data
};

export const getMultipleUsers = async (users: UsersSearch): Promise<User[]> => {
  const usernames = users.map((user) => user.login)
  const promises = Promise.all(usernames.map(async (username) => {
    const user = await getUser(username)
    return user
  }))
  const results = await promises;
  return results
};

export const searchUser = async (username: string): Promise<UsersSearch> => {
  const { data } = await octokit.rest.search.users({ q: username, order: "desc", per_page: 5});
  return data.items
}