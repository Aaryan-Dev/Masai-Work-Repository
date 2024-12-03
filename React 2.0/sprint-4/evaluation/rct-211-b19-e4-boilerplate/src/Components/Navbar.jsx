import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div>Product Dashboard</div>
      <div>
        {/* Link the button to the /add route, when the user clicks on the button */}

        <Link to="/add">
          <button data-cy="add-product-navbar-button">Add Product</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
