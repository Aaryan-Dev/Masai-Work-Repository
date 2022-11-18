import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

function Signup() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const signup = () => {
    console.log(email, password);

    const user_data = {
      email: email,
      password: password,
    };

    fetch("https://todo-api-1zbf.onrender.com/signup", {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user_data),
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h1>Welcome to Todo!</h1>
      Signup
      <br />
      <input
        type="text"
        placeholder="email"
        onChange={(e) => setemail(e.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        onChange={(e) => setpassword(e.target.value)}
      />
      <button onClick={signup}>Signup</button>
      <br />
      <br />
      <br />
      <Link to="/login">login</Link>
    </div>
  );
}

export { Signup };
