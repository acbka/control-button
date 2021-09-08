import React from "react";
import "./button.css";

export const Button = ({ className, clickButton, children }) => {
  const handleClick = (e) => {
    e.preventDefault();
    clickButton();
  };

  return (
    <div>
      <button className={className} onClick={handleClick}>
        {children}
      </button>
    </div>
  );
};
