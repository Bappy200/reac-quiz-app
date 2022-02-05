import React from "react";

function CheckBox({ className, text, ...res }) {
  return (
    <label className={className}>
      <input type="checkbox" {...res} /> <span>{text}</span>
    </label>
  );
}

export default CheckBox;
