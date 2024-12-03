import React from "react";
import { Routes, Route } from "react-router-dom";

import AddList from "../Pages/AddList";
import Playzone from "../Pages/Playzone";
import Dashboard from "../Pages/Dashboard";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AddList />} />
        <Route path="/playzone" element={<Playzone />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
