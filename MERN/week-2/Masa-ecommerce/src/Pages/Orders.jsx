import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Orders = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    let crr = JSON.parse(localStorage.getItem("placed"));
    setCart(crr);
  }, []);
  console.log(cart);

  return (
    <>
      {cart?.map((el) => (
        <div id="mak">
          <h6 className="make">Id - {el.id}</h6>
          <h3 className="make">Brand - {el.brand}</h3>
          <div className="make">Title - {el.title}</div>
          <img
            src="https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80"
            alt="book"
            width="200px"
          />
          <div className="make">{el.category}</div>
          <div className="make">Price - {el.price}</div>
          <hr />
        </div>
      ))}
    </>
  );
};

export default Orders;
