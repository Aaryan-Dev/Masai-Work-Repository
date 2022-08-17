import React from "react";

import { useState } from "react";

const Con = React.createContext();

function AppContextProvider(props) {
  const [isAuth, setAuth] = useState(false);
  const [token, setToken] = useState(null);

  const loginUser = (form) => {
    console.log(form);

    let body1 = JSON.stringify(form);

    fetch("https://reqres.in/api/login", {
      method: "POST",
      body: body1,
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        // console.log(res);
        if (res.token !== undefined) {
          setAuth(true);
          setToken(res.token);
        }
      });
  };
  console.log(isAuth, token);

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
