import React from "react";
import type { ButtonProps } from "../types/button";
const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  color = "violet",
  type = "button",
}) => {
  const styles: React.CSSProperties = {
    backgroundColor: color,
    color: "white",
    border: "none",
    padding: "0.5rem 1rem ",
    margin:4,
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "bold",
    transition: "background 0.2s ease",
  };

  return (
    <button type={type} onClick={onClick} style={styles}>
      {label}
    </button>
  );
};

export default Button;
