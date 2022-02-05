import React from "react";
import { Link } from "react-router-dom";
import classes from "../../../styles/SignUp.module.css";
import Button from "../../Button/Button";
import CheckBox from "../../CheckBox/CheckBox";
import Info from "../../Info/Info";
import InputType from "../../InputType/InputType";
import Form from "./Form";
import Illustration from "./Illustration";
function SignUp() {
  return (
    <>
      <h1>Create an account</h1>
      <div class="column">
        <Illustration></Illustration>
        <Form className={classes.signup}>
          <InputType type="text" placeholder="Enter name" icon="person" />
          <InputType
            type="emil"
            placeholder="Enter email"
            icon="alternate_email"
          />
          <InputType type="password" placeholder="Enter password" icon="lock" />
          <InputType
            type="password"
            placeholder="Confirm password"
            icon="lock_clock"
          />

          <CheckBox text="I agree to the Terms &ams; Conditions" />
          <Button>SignUp</Button>
          <Info>
            Already have an account? <Link to="/login">Login</Link> instead.
          </Info>
        </Form>
      </div>
    </>
  );
}

export default SignUp;
