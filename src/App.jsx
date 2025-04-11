import React, { lazy, Suspense, useState } from "react";
import "./App.css";
import { Toaster } from "@/components/ui/sonner";

// Lazy-loaded components
const Home = lazy(() => import("./components/section/Home"));
const About = lazy(() => import("./components/section/About"));
const Projects = lazy(() => import("./components/section/Projects"));
const Contact = lazy(() => import("./components/section/Contact"));
const Footer = lazy(() => import("./components/section/Footer"));

const Navbar = lazy(() => import("./components/Navbar"));
const MobileMenu = lazy(() => import("./components/MobileMenu"));
const LoadingScreen = lazy(() => import("./components/LoadingScreen"));

function App() {
  const [loading, setLoading] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  console.log("isDarkMode:", isDarkMode);

  return (
    <Suspense fallback={<div className="spinner"></div>}>
      {!loading && <LoadingScreen onComplete={() => setLoading(true)} />}
      {loading && (
        <div
          className={`min-h-screen ${
            isDarkMode ? "bg-black text-gray-100" : "bg-gray-100 text-gray-900"
          }`}
        >
          <Navbar
            openMenu={openMenu}
            isDarkMode={isDarkMode}
            setOpenMenu={setOpenMenu}
            setIsDarkMode={setIsDarkMode}
          />
          <MobileMenu
            openMenu={openMenu}
            setOpenMenu={setOpenMenu}
            isDarkMode={isDarkMode}
            setIsDarkMode={setIsDarkMode}

          />
          <Home />
          <About isDarkMode={isDarkMode} />
          <Projects isDarkMode={isDarkMode} />
          <Contact isDarkMode={isDarkMode} />
          <Footer isDarkMode={isDarkMode} />
          <Toaster />
        </div>
      )}
    </Suspense>
  );
}

export default App;
