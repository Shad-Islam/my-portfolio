import React, { createContext, useState } from "react";
import App from "../App"; 

// Create the context
const AppContext = createContext();

// Create the provider
 const AppProvider = (props) => {
  const [loading, setLoading] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <AppContext.Provider
      value={{
        loading,
        setLoading,
        openMenu,
        setOpenMenu,
        isDarkMode,
        setIsDarkMode,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppProvider;
export { AppContext };
