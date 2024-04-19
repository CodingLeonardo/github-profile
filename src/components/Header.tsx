import { FC } from "react";
import Search from "./Search";

const Header: FC = () => {
  return (
    <header className="h-60 grid justify-items-center bg-hero bg-cover bg-center">
      <Search />
    </header>
  );
};

export default Header;
