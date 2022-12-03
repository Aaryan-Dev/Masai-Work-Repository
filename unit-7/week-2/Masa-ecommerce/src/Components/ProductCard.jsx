import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

const BookCard = ({ Data }) => {
  return (
    // <div>
    <div id="make">
      <Link to={`/product/${Data.id}`}>
        <h6 className="make">Id - {Data.id}</h6>
        <h3 className="make">Brand - {Data.brand}</h3>
        <div className="make">Title - {Data.title}</div>
        <img
          src="https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80"
          alt="book"
          width="200px"
        />
        <div className="make">{Data.category}</div>
        <div className="make">Price - {Data.price}</div>
      </Link>
    </div>
    // </div>
  );
};

export default BookCard;
