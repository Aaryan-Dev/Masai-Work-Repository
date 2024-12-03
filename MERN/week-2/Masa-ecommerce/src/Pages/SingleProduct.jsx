import React from "react";
import { useEffect } from "react";
import "../App.css";
import { useSelector } from "react-redux";

import { useParams } from "react-router-dom";

const SingleProduct = () => {
  const products = useSelector((state) => state.products);

  let arr = [];
  let param = useParams();

  let orr = products.data;
  for (let i = 0; i < orr?.length; i++) {
    if (orr[i].id == param.id) {
      arr.push(orr[i]);
    }
  }

  console.log(arr);

  let crr = JSON.parse(localStorage.getItem("cart")) || [];
  const cartIt = (data) => {
    crr.push(data);
    localStorage.setItem("cart", JSON.stringify(crr));
    alert("Item Added to cart");
  };

  return (
    // <div>
    <div id="make">
      <h6 className="make">{arr[0].id}</h6>
      <h3 className="make">Brand - {arr[0].brand}</h3>
      <div className="make">Title - {arr[0].title}</div>
      <img
        src="https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80"
        alt="book"
        width="200px"
      />
      <div className="make">{arr[0].category}</div>
      <div className="make">Price - {arr[0].price}</div>
      <div className="make">
        Description - Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Itaque, autem ut? Deleniti nisi dolore exercitationem officia delectus,
        obcaecati provident ad, rem expedita, sunt sequi dolorem dolor neque
        dignissimos distinctio recusandae?Lorem ipsum dolor, sit amet
        consectetur adipisicing elit. Odio eligendi, aut optio iusto aliquid
        neque quasi tempora voluptatum unde ex natus! Tempore aspernatur cumque
        veritatis eos. Qui molestias tempore corrupti.
      </div>
      <button onClick={() => cartIt(arr[0])}>Add to Cart</button>
    </div>
    // </div>
  );
};

export default SingleProduct;
