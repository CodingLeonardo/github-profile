import { Octokit } from "octokit"
const GITHUB_TOKEN = import.meta.env.GITHUB_TOKEN as string;

export const octokit = new Octokit({ auth: GITHUB_TOKEN });