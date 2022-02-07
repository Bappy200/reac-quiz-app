import React from "react";
import Illustration from "../SignUp/Illustration";
import LoginForm from "./LoginForm";
function Login() {
  return (
    <>
      <h1>Login to your account</h1>
      <div class="column">
        <Illustration />
        <LoginForm />
      </div>
    </>
  );
}

export default Login;
