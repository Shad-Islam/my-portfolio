import { useState } from "react";
import "./App.css";
import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";

function App() {
  const [loading, setLoading] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <>
      {!loading && <LoadingScreen onComplete={() => setLoading(true)} />}
      <div
        className={`min-h-screen transition-opacity duration-700 ${
          loading ? "opacity-100" : "opacity-0"
        }bg-black text-gray-1`}
      >
        <Navbar openMenu={openMenu} setOpenMenu={setOpenMenu}/>
        <MobileMenu openMenu={openMenu} setOpenMenu={setOpenMenu}/>
      </div>
    </>
  );
}

export default App;
