import { FC, ReactNode } from "react";
import Hero from "../assets/hero-image-github-profile.png"

interface HeaderProps {
  children: ReactNode
}

const Header: FC<HeaderProps> = ({ children }) => {
  return (
    <header className="grid justify-items-center h-60 bg-blue-electric">
      {children}
      <img src={Hero} alt="Hero" className="h-full object-cover" />
    </header>
  )
}

export default Header;