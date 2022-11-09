import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const isAuth = useSelector((data) => data.AuthReducer.isAuth);

  return (
    <div>
      <div data-cy="navbar-home-link">
        <img
          src="/Adidas_Logo.png"
          width="60px"
          alt="logo"
          style={{ display: "block" }}
        />
      </div>

      <div>
        {/* Link button to /login page, if the user is not authenticated, else don't show it*/}

        {!isAuth && (
          <Link to="/login">
            <button data-cy="navbar-login-button">LOGIN</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
