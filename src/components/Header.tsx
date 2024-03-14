import Hero from "../assets/hero-image-github-profile.png"
import Search from "../assets/Search.svg"

const Header = () => {
  return (
    <header className="grid justify-items-center h-60 bg-blue-electric">
      <div className="absolute sm:w-4/6 lg:w-3/6 xl:w-2/5 mt-8">
        <div className="absolute inset-y-0 start-0 flex items-center ps-4 pointer-events-none opacity-30">
          <img src={Search} alt="Search" />
        </div>
        <input type="text" placeholder="username" className="bg-gray-slate text-gray-pearl placeholder-gray-pearl placeholder-opacity-30 w-full rounded-lg px-14 py-5 font-medium outline-none focus outline-blue-electric" />
      </div>
      <img src={Hero} alt="Hero" className="h-full object-cover" />
    </header>
  )
}

export default Header;