import React from "react";
import { Link } from "react-router-dom";
import classes from "../../../styles/Login.module.css";
import Button from "../../Button/Button";
import Info from "../../Info/Info";
import InputType from "../../InputType/InputType";
import Form from "../SignUp/Form";
import Illustration from "../SignUp/Illustration";
function Login() {
  return (
    <>
      <h1>Login to your account</h1>
      <div class="column">
        <Illustration />
        <Form className={classes.login}>
          <InputType
            type="email"
            placeholder="Enter email"
            icon="alternate_email"
          />
          <InputType type="password" placeholder="Enter password" icon="lock" />
          <Button>Login</Button>
          <Info>
            Don't have an account? <Link to="/signup">Signup</Link> instead.
          </Info>
        </Form>
      </div>
    </>
  );
}

export default Login;
