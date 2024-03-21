import { useState, useEffect } from "react";
import { CurrentUserContext } from "./context/CurrentUserContext";
import { User } from "./types";

import Header from "./components/Header";
import Stats from "./components/Stats";
import Repositories from "./components/Repositories";

import GitHub from "../public/github-mark-white.svg";
import { getUser } from "./services/users";

// const dataRepositories = [{name: ".github", description: "Community health files for the @Github organization", forks: 2369, stars: 703, updatedAt: "updated 4 days ago"},
// {name: "accessibility-alt-text-bot", description: "An action to remind users to add alt text on Issues, Pull Request, and Discussions", license: "MIT", forks: 7, stars: 50, updatedAt: "updated 3 days ago"},
// {name: "accessibilityjs", description: "Client side accessibility error scanner.", license: "MIT", forks: 72, stars:2181, updatedAt: "updated 4 days ago"},
// {name: "actions-cheat-sheet", description: "A cheat sheet for GitHub Actions", license: "MIT", forks: 26, stars: 194, updatedAt: "updated 4 days ago"}]

// const dataStats = [{name: "Followers", value: 27839}, { name: "Following", value: 0}, {name: "Location", value: "San Francisco, CA"}]

function App() {
  const [currentUser, setCurrentUser] = useState<User>({} as User);

  useEffect(() => {
    const fetchUser = async () => {
      if (Object.keys(currentUser).length === 0) {
        const userGithub = await getUser("github");
        setCurrentUser(userGithub);
      }
    };
    fetchUser();
  }, [currentUser]);

  return (
    <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
      <Header />
      <section className="bg-gray-slate">
        <div className="flex flex-row gap-x-12 w-9/12 2xl:w-2/3 xl:w-9/12 lg:w-10/12 m-auto">
          <div className="bg-black w-32 h-32 relative -top-12 border-gray-slate border-solid border-8 rounded-2xl">
            <img
              className="rounded-lg"
              src={currentUser.avatar_url}
              alt={GitHub}
            />
          </div>
          <Stats />
        </div>
        <div className="w-9/12 2xl:w-2/3 xl:w-9/12 lg:w-10/12 m-auto lg:-mt-5 sm:mt-10 pb-24">
          <div className="text-gray-pearl">
            <h1 className="text-4xl font-normal">{currentUser.name}</h1>
            <p className="text-gray-pearl text-opacity-60 mt-1">
              {currentUser.bio}
            </p>
          </div>
          <Repositories />
          <div className="flex justify-center mt-12">
            <a
              href={`https://github.com/${currentUser.login}?tab=repositories`}
              target="about:blank"
              className="text-gray-pearl text-opacity-70"
            >
              View all repositories
            </a>
          </div>
        </div>
      </section>
    </CurrentUserContext.Provider>
  );
}

export default App;
