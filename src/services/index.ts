import { Octokit } from "octokit"
const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN as string;

export const octokit = new Octokit({ auth: GITHUB_TOKEN });