import React from "react";
import image from "../../../assects/images/signup.svg";
import classes from "../../../styles/Illustration.module.css";
function Illustration() {
  return (
    <div className={classes.illustration}>
      <img src={image} alt="Signup" />
    </div>
  );
}

export default Illustration;
