import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
// import { useContext } from "react";
// import { Con } from "../Context/AppContext";

const Navbar = () => {
  // const value = useContext(Con);
  // const { logoutUser } = value;
  return (
    <div id="navbar">
      <img
        src="https://notion-emojis.s3-us-west-2.amazonaws.com/prod/svg-twitter/1f6cd-fe0f.svg"
        alt="shop"
      />
      <div>
        <Link className="white" to="/">
          Add List
        </Link>
      </div>
      <div>
        <Link className="white" to={`/bookmarks`}>
          Bookmarks
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
