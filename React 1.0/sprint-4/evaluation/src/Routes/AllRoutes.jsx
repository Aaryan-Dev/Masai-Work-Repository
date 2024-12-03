import { Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Login from "./Home";

import PrivateRoute from "../Components/PrivateRoute";

function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default AllRoutes;
