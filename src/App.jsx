import { useState } from "react";
import "./App.css";
import { LoadingScreen } from "./components/LoadingScreen";

function App() {
  const [loading, setLoading] = useState(false);
  return (
    <>
 { !loading && <LoadingScreen onComplete={()=>setLoading(true)}/>}
    </>
  );
}

export default App;
