import { useState, useEffect } from "react";
import { CurrentUserContext } from "./context/CurrentUserContext";
import { User } from "./types";

import Header from "./components/Header";
import Stats from "./components/Stats";
import Repositories from "./components/Repositories";

import { getUser } from "./services/users";

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
    console.log(Object.keys(currentUser).length === 0);
  }, [currentUser]);

  return (
    <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
      <main className="min-h-screen bg-gray-slate">
        <Header />
        <div className="flex flex-row gap-x-12 w-9/12 2xl:w-2/3 xl:w-9/12 lg:w-10/12 m-auto">
          <div className="bg-black w-32 h-32 relative -top-12 border-gray-slate border-solid border-8 rounded-2xl overflow-hidden">
            <img
              className="rounded-l text-gray-pearl"
              src={currentUser.avatar_url}
              alt="User avatar"
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
      </main>
    </CurrentUserContext.Provider>
  );
}

export default App;
