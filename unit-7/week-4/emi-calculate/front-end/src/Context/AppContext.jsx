import React from "react";

import { useState } from "react";

const Con = React.createContext();

function AppContextProvider(props) {
  const [isAuth, setAuth] = useState(false);
  // const [token, setToken] = useState(null);
  const [id] = useState(null);
  // const navigate = useNavigate();

  const loginUser = (form) => {
    let body1 = JSON.stringify(form);

    fetch("https://bmi-lw21.onrender.com/signup", {
      method: "POST",
      body: body1,
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        // setToken(res.token);
        console.log(res);
      });
  };
  console.log(isAuth);

  // *****************************
  const getinUser = (form) => {
    let body2 = JSON.stringify(form);
    fetch("https://bmi-lw21.onrender.com/login", {
      method: "POST",
      body: body2,
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        // check(res, form);
        if (typeof res.msg.split(" ")[1] == "string") {
          setAuth(true);
          localStorage.setItem("token", res.msg.split(" ")[1]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // function check(res, form) {
  //   let value = false;

  //   for (let i = 0; i < res.length; i++) {
  //     if (
  //       form.email === res[i].email &&
  //       form.username === res[i].username &&
  //       form.password === res[i].password
  //     ) {
  //       setId(res[i].id);
  //       value = true;
  //       break;
  //     }
  //   }

  //   if (value) {
  //     alert("login successful");
  //     setAuth(true);
  //     // navigate(`/user/${res[i].id}`);
  //   } else {
  //     alert("login failed");
  //   }
  // }

  // *******************************

  const logoutUser = () => {
    localStorage.removeItem("token");
    setAuth(false);
    // setToken(null);
  };

  return (
    <Con.Provider value={{ isAuth, loginUser, getinUser, logoutUser, id }}>
      {props.children}
    </Con.Provider>
  );
}

export { AppContextProvider, Con };
