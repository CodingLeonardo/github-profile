import Hero from "./assets/hero-image-github-profile.png"
import Search from "./assets/Search.svg"
import GitHub from "./assets/github-mark-white.svg"
import Nesting from "./assets/Nesting.svg"
import Star from "./assets/Star.svg"
import Chield from "./assets/Chield_alt.svg"

function App() {
  return (
    <>
      <header className="grid justify-items-center h-60 bg-blue-electric">
        <div className="absolute sm:w-4/6 lg:w-3/6 xl:w-2/5 mt-8">
          <div className="absolute inset-y-0 start-0 flex items-center ps-4 pointer-events-none opacity-30">
            <img src={Search} alt="Search" />
          </div>
          <input type="text" placeholder="username" className="bg-gray-slate text-gray-pearl placeholder-gray-pearl placeholder-opacity-30 w-full rounded-lg px-14 py-5 font-medium outline-none focus outline-blue-electric" />
        </div>
        <img src={Hero} alt="Hero" className="h-full object-cover" />
      </header>
      <section className="bg-gray-slate">
        <div className="flex flex-row gap-x-12 w-9/12 m-auto">
          <div className="bg-black w-fit h-fit relative -top-12 border-gray-slate border-solid border-8 rounded-2xl">
            <img src={GitHub} alt="GitHub" />
          </div>
          <div className="flex sm:flex-col xl:flex-row sm:gap-y-4 md:gap-x-4 mt-4">
            <div className="bg-gray-asphalt flex items-center px-6 py-2 gap-x-4 rounded-xl w-fit h-fit">
              <h3 className="text-gray-pearl opacity-30">Followers</h3>
              <div className="inline-block sm:h-10 md w-0.5 bg-gray-pearl opacity-30"></div>
              <p className="text-gray-pearl">27839</p>
            </div>
            <div className="bg-gray-asphalt flex items-center px-6 py-2 gap-x-4 rounded-xl w-fit h-fit">
              <h3 className="text-gray-pearl opacity-30">Following</h3>
              <div className="inline-block sm:h-10 md w-0.5 bg-gray-pearl opacity-30"></div>
              <p className="text-gray-pearl">0</p>
            </div>
            <div className="bg-gray-asphalt flex items-center px-6 py-2 gap-x-4 rounded-xl w-fit h-fit">
              <h3 className="text-gray-pearl opacity-30">Location</h3>
              <div className="inline-block sm:h-10 md w-0.5 bg-gray-pearl opacity-30"></div>
              <p className="text-gray-pearl">San Francisco, CA</p>
            </div>
          </div>
        </div>
        <div className="w-9/12 m-auto sm:mt-10 md:-mt-5 pb-24">
          <div className="text-gray-pearl">
            <h1 className="text-4xl font-normal">Github</h1>
            <p className="text-gray-pearl text-opacity-60 mt-1">How people build software.</p>
          </div>
          <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-y-8 gap-x-8 mt-8">
            <div className="bg-gradient-to-br from-gray-asphalt to-gray-anthracite p-5 rounded-xl">
              <h3 className="text-gray-pearl text-xl">.github</h3>
              <p className="text-gray-pearl text-base text-opacity-70 mt-2">Community health files for the @Github organization</p>
              <div className="flex items-center gap-x-5 mt-4">
                <figure className="flex gap-x-1">
                  <img src={Nesting} alt="" />
                  <figcaption className="text-gray-pearl text-opacity-70">2,369</figcaption>
                </figure>
                <figure className="flex gap-x-1">
                  <img src={Star} alt=""/>
                  <figcaption className="text-gray-pearl text-opacity-70">703</figcaption>
                </figure>
                <span className="text-gray-pearl text-opacity-70 text-xs">updated 4 days ago</span>
              </div>
            </div>
            <div className="bg-gradient-to-br from-gray-asphalt to-gray-anthracite p-5 rounded-xl">
              <h3 className="text-gray-pearl text-xl">accessibility-alt-text-bot</h3>
              <p className="text-gray-pearl text-base text-opacity-70 mt-2">An action to remind users to add alt text on Issues, Pull Request, and Discussions</p>
              <div className="flex items-center gap-x-5 mt-4">
                <figure className="flex gap-x-1">
                  <img src={Chield} alt="" />
                  <figcaption className="text-gray-pearl text-opacity-70">MIT</figcaption>
                </figure>
                <figure className="flex gap-x-1">
                  <img src={Nesting} alt="" />
                  <figcaption className="text-gray-pearl text-opacity-70">7</figcaption>
                </figure>
                <figure className="flex gap-x-1">
                  <img src={Star} alt=""/>
                  <figcaption className="text-gray-pearl text-opacity-70">50</figcaption>
                </figure>
                <span className="text-gray-pearl text-opacity-70 text-xs">updated 3 days ago</span>
              </div>
            </div>
            <div className="bg-gradient-to-br from-gray-asphalt to-gray-anthracite p-5 rounded-xl">
              <h3 className="text-gray-pearl text-xl">accessibilityjs</h3>
              <p className="text-gray-pearl text-base text-opacity-70 mt-2">Client side accessibility error scanner.</p>
              <div className="flex items-center gap-x-5 mt-4">
                <figure className="flex gap-x-1">
                  <img src={Chield} alt="" />
                  <figcaption className="text-gray-pearl text-opacity-70">MIT</figcaption>
                </figure>
                <figure className="flex gap-x-1">
                  <img src={Nesting} alt="" />
                  <figcaption className="text-gray-pearl text-opacity-70">72</figcaption>
                </figure>
                <figure className="flex gap-x-1">
                  <img src={Star} alt=""/>
                  <figcaption className="text-gray-pearl text-opacity-70">2181</figcaption>
                </figure>
                <span className="text-gray-pearl text-opacity-70 text-xs">updated 4 days ago</span>
              </div>
            </div>
            <div className="bg-gradient-to-br from-gray-asphalt to-gray-anthracite p-5 rounded-xl">
              <h3 className="text-gray-pearl text-xl">actions-cheat-sheet</h3>
              <p className="text-gray-pearl text-base text-opacity-70 mt-2">A cheat sheet for GitHub Actions</p>
              <div className="flex items-center gap-x-5 mt-4">
                <figure className="flex gap-x-1">
                  <img src={Chield} alt="" />
                  <figcaption className="text-gray-pearl text-opacity-70">MIT</figcaption>
                </figure>
                <figure className="flex gap-x-1">
                  <img src={Nesting} alt="" />
                  <figcaption className="text-gray-pearl text-opacity-70">26</figcaption>
                </figure>
                <figure className="flex gap-x-1">
                  <img src={Star} alt=""/>
                  <figcaption className="text-gray-pearl text-opacity-70">194</figcaption>
                </figure>
                <span className="text-gray-pearl text-opacity-70 text-xs">updated 4 days ago</span>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-12">
          <a href="#" className="text-gray-pearl text-opacity-70">View all repositories</a>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
