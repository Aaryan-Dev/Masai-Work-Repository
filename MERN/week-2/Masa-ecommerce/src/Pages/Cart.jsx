import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

const Cart = () => {
  let crr = JSON.parse(localStorage.getItem("cart")) || [];

  const navigate = useNavigate();

  let price = 0;
  for (let i = 0; i < crr.length; i++) {
    if (crr[i].quantity == undefined || crr[i].quantity == null) {
      crr[i].quantity = 1;
    }

    price = price + Number(crr[i].price) * Number(crr[i].quantity);
  }

  let prr = JSON.parse(localStorage.getItem("placed")) || [];
  const placeIt = (data) => {
    prr.push(data);
    localStorage.setItem("placed", JSON.stringify(prr));

    alert("order placed Successfully");
  };

  function inc(arr, index) {
    let inc_data = crr.map((el) =>
      el.id == arr.id ? { ...el, quantity: el.quantity + 1 } : el
    );
    localStorage.setItem("cart", JSON.stringify(inc_data));
    navigate("/cart");
  }

  function dsc(arr, index) {
    let inc_data = crr.map((el) =>
      el.id == arr.id ? { ...el, quantity: el.quantity - 1 } : el
    );
    localStorage.setItem("cart", JSON.stringify(inc_data));
    navigate("/cart");
  }

  return (
    <>
      Price = {price} + Delivery charge 50/- = Rs {price + 50}
      {crr?.map((el, index) => (
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
          <div id="qua">
            <button disabled={el.quantity === 1} onClick={() => dsc(el, index)}>
              -
            </button>
            <h6>{el.quantity}</h6>
            <button onClick={() => inc(el, index)}>+</button>
          </div>
          <button onClick={() => placeIt(el)}>Place Order</button>
          <hr />
        </div>
      ))}
    </>
  );
};

export default Cart;
