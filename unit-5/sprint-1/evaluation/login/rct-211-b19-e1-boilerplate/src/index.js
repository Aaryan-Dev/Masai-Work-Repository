import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { initialState } from "./initialState";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

// DO NOT REMOVE THIS PEICE OF CODE
if (window.Cypress) {
  window.store = initialState;
}
