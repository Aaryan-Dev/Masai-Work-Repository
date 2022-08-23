import React from "react";

import { useState } from "react";
import axios from "axios";

const Con = React.createContext();

function AppContextProvider(props) {
  const [isAuth, setAuth] = useState(false);
  const [token, setToken] = useState(null);

  const loginUser = (form) => {
    console.log(form);
    // *********** axios ***************************************************
    axios.post("https://reqres.in/api/login", form).then((res) => {
      // console.log(res);
      if (res.data.token !== undefined) {
        setAuth(true);
        setToken(res.token);
      }
    });
    // *********** axios ***************************************************
  };

  const logoutUser = () => {
    setAuth(false);
    setToken(null);
  };

  return (
    <Con.Provider value={{ isAuth, token, loginUser, logoutUser }}>
      {props.children}
    </Con.Provider>
  );
}

export { AppContextProvider, Con };
