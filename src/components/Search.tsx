import {
  useEffect,
  useState,
  useContext,
  ChangeEvent,
  FC,
  FocusEvent,
} from "react";
import Spinner from "./Spinner";
import SearchIcon from "../assets/Search.svg";

import { getMultipleUsers, searchUser } from "../services/users";
import { CurrentUserContext } from "../context/CurrentUserContext";
import { User } from "../types";

interface SearchItemProps {
  user: User;
}

const SearchItem: FC<SearchItemProps> = ({ user }) => {
  const { setCurrentUser } = useContext(CurrentUserContext);
  const handleClick = () => {
    setCurrentUser(user);
  };
  return (
    <div
      className="bg-gray-asphalt flex items-center gap-x-5 px-4 py-3 rounded-2xl cursor-pointer"
      onClick={handleClick}
    >
      <img
        src={user.avatar_url}
        alt={user.login}
        className="w-20 h-full aspect-square bg-black rounded-2xl"
      />
      <div>
        <h1 className="text-gray-pearl text-xl">{user.name}</h1>
        <p className="text-gray-pearl text-opacity-70 text-sm font-medium mt-2">
          {user.bio}
        </p>
      </div>
    </div>
  );
};

const Search = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [usersFound, setUsersFound] = useState<User[]>([]);

  useEffect(() => {
    const timer = setTimeout(async () => {
      if (!query) {
        setUsersFound([]);
        return;
      }
      setLoading(true);
      searchUser(query)
        .then((results) => {
          getMultipleUsers(results)
            .then((usersFoundDetails) => {
              setUsersFound(usersFoundDetails);
            })
            .catch((err) => {
              setError(err);
            })
            .finally(() => {
              setLoading(false);
            });
        })
        .catch((err) => {
          setError(err);
        })
        .finally(() => {
          console.error(error);
        });
    }, 1200);

    return () => clearTimeout(timer);
  }, [query, error]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleFocus = () => {
    setIsVisible(true);
  };

  const handleBlur = (event: FocusEvent<HTMLDivElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      if (isVisible) {
        setIsVisible(false);
      }
    }
  };

  return (
    <div
      onFocus={handleFocus}
      onBlur={handleBlur}
      className="sm:w-4/6 lg:w-3/6 xl:w-2/5 mt-8 z-10"
    >
      <div className="flex items-center">
        <img
          className="relative left-10 pointer-events-none opacity-30"
          src={SearchIcon}
          alt="Search"
        />
        <input
          onChange={handleChange}
          type="text"
          placeholder="username"
          className="bg-gray-slate text-gray-pearl placeholder-gray-pearl placeholder-opacity-30 w-full rounded-lg px-14 py-5 font-medium outline-none focus-visible:outline-blue-electric"
        />
      </div>
      <div tabIndex={0} className="grid gap-y-4 bg-white w-full mt-4 shadow-lg">
        {loading ? (
          <Spinner className="m-auto mt-4 col-span-2" />
        ) : (
          isVisible &&
          usersFound.map((user) => <SearchItem key={user.id} user={user} />)
        )}
      </div>
    </div>
  );
};

export default Search;
