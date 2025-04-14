import { AppContext } from "../context/AppContext";
import { useContext } from "react";

const MobileMenu = () => {
  const { openMenu, setOpenMenu, isDarkMode, setIsDarkMode } =
    useContext(AppContext);
  return (
    <div
      className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.8)] z-40 flex flex-col items-center justify-center transition-all duration-300 ease-in-out 
        ${
          openMenu
            ? "h-screen opacity-100 pointer-events-auto"
            : "h-0 opacity-0 pointer-events-none"
        }
         `}
    >
      <button
        onClick={() => setOpenMenu(false)}
        className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer"
        aria-label="Close menu"
      >
        &times;
      </button>
      {/* menu items  */}
      <a
        href="#home"
        onClick={() => setOpenMenu(false)}
        className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
                ${
                  openMenu
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-5"
                } 
                 `}
      >
        Home
      </a>
      <a
        href="#about"
        onClick={() => setOpenMenu(false)}
        className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
            ${
              openMenu ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            } 
             `}
      >
        About
      </a>
      <a
        href="#projects"
        onClick={() => setOpenMenu(false)}
        className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
            ${
              openMenu ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            } 
             `}
      >
        Project
      </a>
      <a
        href="#contact"
        onClick={() => setOpenMenu(false)}
        className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
            ${
              openMenu ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            } 
             `}
      >
        Contact
      </a>
      {/* Theme Toggle Button */}
      <button
        onClick={() => {
          setIsDarkMode((prev) => !prev);
          setOpenMenu(false);
        }}
        className="text-gray-100 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg transition my-4 cursor-pointer"
      >
        {isDarkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
};

export default MobileMenu;
