import { useState } from "react";
import "./App.css";
import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import { Home } from "./components/section/Home";
import { About } from "./components/section/About";
import { Projects } from "./components/section/Projects";
import { Contact } from "./components/section/Contact";
import { Footer } from "./components/section/Footer";

function App() {
  const [loading, setLoading] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true); // State for theme toggle

  return (
    <>
      {!loading && <LoadingScreen onComplete={() => setLoading(true)} />}
      <div
        className={`min-h-screen transition-opacity duration-700 ${
          loading ? "opacity-100" : "opacity-0"
        } ${
          isDarkMode ? "bg-black text-gray-100" : "bg-gray-100 text-gray-900"
        }`}
      >
        <Navbar
          openMenu={openMenu}
          setOpenMenu={setOpenMenu}
          isDarkMode={isDarkMode}
          setIsDarkMode={setIsDarkMode}
        />
        <MobileMenu openMenu={openMenu} setOpenMenu={setOpenMenu} />
        <Home />
        <About isDarkMode={isDarkMode} />
        <Projects isDarkMode={isDarkMode} />
        <Contact isDarkMode={isDarkMode} />
        <Footer isDarkMode={isDarkMode} />
      </div>
    </>
  );
}

export default App;
