import { Endpoints } from "@octokit/types"

type UsersSearch = Endpoints["GET /search/users"]["response"]["data"]["items"]
type User = Endpoints["GET /users/{username}"]["response"]["data"]