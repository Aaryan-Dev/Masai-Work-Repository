import React from "react";
import { Route, Routes } from "react-router-dom";
import { ProductPage } from "../Components/ProductPage";
import Cart from "./Cart";
import Orders from "./Orders";
import SingleProduct from "./SingleProduct";

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ProductPage />} />
        <Route path="/product/:id" element={<SingleProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="*" element={<h3>Page Not Found</h3>} />
      </Routes>
    </div>
  );
};

export default MainRoutes;
