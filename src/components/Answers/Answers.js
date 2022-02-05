import React from "react";
import CheckBox from "../../components/CheckBox/CheckBox";
import classes from "../../styles/Answers.module.css";
function Answers() {
  return (
    <>
      <div className={classes.answers}>
        <CheckBox className={classes.answer} text="Test Answeres" />
        <CheckBox className={classes.answer} text="Test Answeres" />
      </div>
    </>
  );
}

export default Answers;
