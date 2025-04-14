import { AppContext } from "../../context/AppContext";
import { useContext } from "react";

const Footer = () => {
  const { isDarkMode } = useContext(AppContext);
  return (
    <footer
      className={`py-6 border-t ${
        isDarkMode
          ? "bg-black border-white/10 text-gray-400"
          : "bg-gray-100 border-gray-300 text-gray-700"
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        <div className="flex space-x-6">
          <a
            href="https://www.linkedin.com/in/shad48/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-500 transition"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Shad-Islam"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-500 transition"
          >
            GitHub
          </a>
          <a
            href="https://x.com/Shad__48"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-500 transition"
          >
            Twitter
          </a>
        </div>
        <p className="text-sm text-center md:text-left">
          © {new Date().getFullYear()} Shad.dev. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;