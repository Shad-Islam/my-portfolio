import React, { lazy, Suspense, useContext } from "react";
import "./App.css";
import { Toaster } from "@/components/ui/sonner";
import { AppContext } from "./context/AppContext";

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
  const { loading, isDarkMode } = useContext(AppContext);

  return (
    <Suspense fallback={<div></div>}>
      {!loading && <LoadingScreen />}
      {loading && (
        <div
          className={`min-h-screen ${
            isDarkMode ? "bg-black text-gray-100" : "bg-gray-100 text-gray-900"
          }`}
        >
          <Navbar />
          <MobileMenu />
          <Home />
          <About />
          <Projects />
          <Contact />
          <Footer />
          <Toaster />
        </div>
      )}
    </Suspense>
  );
}

export default App;
