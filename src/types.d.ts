import { Endpoints } from "@octokit/types"

type UsersSearch = Endpoints["GET /search/users"]["response"]["data"]["items"]
type User = Endpoints["GET /users/{username}"]["response"]["data"]
type RepositoriesType = Endpoints["GET /users/{username}/repos"]["response"]["data"]
type RepositoryType = Endpoints["GET /repos/{owner}/{repo}"]["response"]["data"]