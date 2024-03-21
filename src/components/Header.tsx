import { FC } from "react";
import Search from "./Search";
// import Hero from "../assets/hero-image-github-profile.png";

const Header: FC = () => {
  return (
    <header className="h-60 grid justify-items-center bg-hero bg-cover bg-center">
      <Search />
      {/* <img src={Hero} alt="Hero" className="h-60 w-full object-cover" /> */}
    </header>
  );
};

export default Header;
