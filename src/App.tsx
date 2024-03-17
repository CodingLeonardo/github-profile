import { useState, useEffect } from "react";
import { CurrentUserContext } from "./context/CurrentUserContext";
import { User } from "./types";

import Header from "./components/Header"
import Search from "./components/Search";
import Stats from "./components/Stats"
import Repositories from "./components/Repositories"

import GitHub from "./assets/github-mark-white.svg"
import { getUser } from "./services/users";


// const dataRepositories = [{name: ".github", description: "Community health files for the @Github organization", forks: 2369, stars: 703, updatedAt: "updated 4 days ago"},
// {name: "accessibility-alt-text-bot", description: "An action to remind users to add alt text on Issues, Pull Request, and Discussions", license: "MIT", forks: 7, stars: 50, updatedAt: "updated 3 days ago"},
// {name: "accessibilityjs", description: "Client side accessibility error scanner.", license: "MIT", forks: 72, stars:2181, updatedAt: "updated 4 days ago"},
// {name: "actions-cheat-sheet", description: "A cheat sheet for GitHub Actions", license: "MIT", forks: 26, stars: 194, updatedAt: "updated 4 days ago"}]

// const dataStats = [{name: "Followers", value: 27839}, { name: "Following", value: 0}, {name: "Location", value: "San Francisco, CA"}]

function App() {
  const [currentUser, setCurrentUser] = useState<User>({} as User)

  useEffect(() => {
    const fetchUser = async () => {
      const userGithub = await getUser("github")
      setCurrentUser(userGithub)
    }
    fetchUser()
  }, [])

  return (
    <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
      <Header>
        <Search />
      </Header>
      <section className="bg-gray-slate">
        <div className="flex flex-row gap-x-12 w-9/12 m-auto">
          <div className="bg-black w-fit h-fit relative -top-12 border-gray-slate border-solid border-8 rounded-2xl">
            <img src={GitHub} alt="GitHub" />
          </div>
          <Stats />
        </div>
        <div className="w-9/12 m-auto sm:mt-10 md:-mt-5 pb-24">
          <div className="text-gray-pearl">
            <h1 className="text-4xl font-normal">Github</h1>
            <p className="text-gray-pearl text-opacity-60 mt-1">How people build software.</p>
          </div>
          <Repositories />
          <div className="flex justify-center mt-12">
            <a href="#" className="text-gray-pearl text-opacity-70">View all repositories</a>
          </div>
        </div>
      </section>
    </CurrentUserContext.Provider>
  )
}

export default App
