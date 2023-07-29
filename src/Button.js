import React from "react";

function Button({ onClick, children, backGroundColr, text }) {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: backGroundColr, color: text }}
      className="btn"
    >
      {children}
    </button>
  );
}

export default Button;
