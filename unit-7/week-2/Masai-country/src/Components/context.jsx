import React from "react";
import { useState } from "react";

const AppContext = React.createContext();

function AppContextProvider(props) {
  console.log(props);
  console.log(props.children);

  const [theme, setTheme] = useState("light");

  const toggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      <AppContext.Provider value={{ theme, toggle }}>
        {props.children}
      </AppContext.Provider>
    </>
  );
}

export { AppContext, AppContextProvider };
