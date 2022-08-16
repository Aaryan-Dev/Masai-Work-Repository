import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";

// / - Home

// /contact - Contact

// /about-us - About

// /services - Services

// /login - Login

function App() {
  return (
    <>
      <BrowserRouter>
        {/* Add your code here */}

        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/contact" element={<h1>Contact</h1>} />
          <Route path="/about-us" element={<h1> About </h1>} />
          <Route path="/services" element={<h1>Services</h1>} />
          <Route path="/login" element={<h1>Login</h1>} />
        </Routes>
        <Navbar />
      </BrowserRouter>
    </>
  );
}

export default App;
