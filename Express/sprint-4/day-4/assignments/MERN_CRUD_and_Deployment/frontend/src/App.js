import "./App.css";
import { Routes, Route } from "react-router-dom";
import Signup from "./Components/signup";
import Login from "./Components/login";
import CalculateBMI from "./Components/calculateBMI";
import Logout from "./Components/logout";
import { useEffect, useState } from "react";
import Navbar from "./Components/navbar";

function App() {
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("token") === null) {
      setAuth(false);
    } else {
      setAuth(true);
    }
  }, [setAuth]);
  return (
    <div className="App">
      <header className="App-header">
        {auth ? "" : <Navbar />}
        <br />
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<CalculateBMI />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
