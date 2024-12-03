import React from "react";
import { Route, Routes } from "react-router-dom";
import AddProduct from "./AddProduct";
import Editpage from "./Editpage";
import Homepage from "./Homepage";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/add" element={<AddProduct />} />
      <Route path="/edit/:id" element={<Editpage />} />
    </Routes>
  );
};

export default MainRoutes;
