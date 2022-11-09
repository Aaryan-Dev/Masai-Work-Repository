import React from "react";
import "./Button.css";

const Button = ({ children, variant, colorScheme, onClick }) => {
  return (
    <div>
      <button
        data-testid={`customBtn`}
        className={`btn ${colorScheme || "red"} ${variant || "ghost"} `}
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
