import React from "react";
import { Link } from "react-router-dom";
import Signup from "./signup";

const Navbar = () => {
  return (
    <div>
      <Link to="/"> home |</Link>
      <Link to="/signup"> Signup |</Link>
      <Link to="/login"> Login </Link>
    </div>
  );
};

export default Navbar;
