import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { Signup } from "./Components/Signup";
import { Login } from "./Components/Login";

function Router() {
  return (
    <div className="App">
      <h1>Welcome to Todo!</h1>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default Router;
