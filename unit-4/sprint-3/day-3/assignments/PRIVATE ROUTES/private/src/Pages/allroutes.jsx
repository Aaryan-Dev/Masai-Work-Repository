import { Routes, Route } from "react-router-dom";

import Welcome from "./home";
import Login from "./login";
import Dashboard from "./dashboard";
import Settings from "./settings";

// Home - /
// Login - /login
// PrivateRoutes - /dashboard
// Dashboard - /dashboard
// Settings - /dashboard/settings
// use Context Provider to manage the auth state

import Private from "../Components/PrivateRoutes";

function Router() {
    return (
        <Routes>
            <Route path="/" element={<Welcome/>} />
            <Route path="/login" element={<Login />} />
            
            
            <Route path="/dashboard" element={<Private><Dashboard/></Private>} />
            
                
                
            
            <Route path="/dashboard/settings" element={<Private><Settings/></Private>} />
            
      </Routes>
);
}

export default Router;


