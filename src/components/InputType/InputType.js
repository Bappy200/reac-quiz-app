import React from "react";
import classes from "../../styles/InputType.module.css";
function InputType({ icon, ...res }) {
  return (
    <div className={classes.textInput}>
      <input {...res} />
      <span class="material-icons-outlined"> {icon} </span>
    </div>
  );
}

export default InputType;
