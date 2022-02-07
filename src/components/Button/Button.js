import React from "react";
import classes from "../../styles/Button.module.css";
function Button({ children, className }) {
  return (
    <button className={`${classes.button} ${className}`}>{children}</button>
  );
}

export default Button;
