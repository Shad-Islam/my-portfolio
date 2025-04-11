import { useEffect } from "react";

export const Navbar = ({ openMenu, setOpenMenu, isDarkMode, setIsDarkMode }) => {
  useEffect(() => {
    document.body.style.overflow = openMenu ? "hidden" : "";
  }, [openMenu]);

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(15,15,15,0.9)] backdrop-blur-lg border-b border-gray-700 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="font-mono text-xl font-bold text-gray-100">
            Shad<span className="text-green-500">.dev</span>
          </a>

          
          {/* Mobile Menu Toggle */}
          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
            onClick={() => setOpenMenu((prev) => !prev)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-7 h-7 text-white"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-gray-400 hover:text-gray-100 transition-colors active:text-green-500"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-400 hover:text-gray-100 transition-colors active:text-green-500"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-gray-400 hover:text-gray-100 transition-colors active:text-green-500"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-gray-400 hover:text-gray-100 transition-colors active:text-green-500"
            >
              Contact
            </a>

            {/* Theme Toggle Button */}
          <button
            onClick={() => setIsDarkMode((prev) => !prev)}
            className="text-gray-100 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg transition"
          >
            {isDarkMode ? "Light Mode" : "Dark Mode"}
          </button>

          </div>
        </div>
      </div>
    </nav>
  );
};