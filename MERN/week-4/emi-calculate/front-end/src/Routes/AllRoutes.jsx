import React from "react";
import { Routes, Route } from "react-router-dom";
import SignIn from "../Pages/SignIn";
import SignUp from "../Pages/SignUp";
import TimeLine from "../Pages/TimeLine";
import UserProfile from "../Pages/UserProfile";
import PrivateRoute from "../Components/PrivateRoute";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/login" element={<SignIn />} />
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <UserProfile />
            </PrivateRoute>
          }
        />
        <Route
          path="/calulateEMI"
          element={
            <PrivateRoute>
              <TimeLine />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
};

export default AllRoutes;
