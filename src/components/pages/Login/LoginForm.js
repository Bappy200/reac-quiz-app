import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UseAuth } from "../../../Context/AuthProvider";
import Button from "../../Button/Button";
import Info from "../../Info/Info";
import InputType from "../../InputType/InputType";
import Form from "../SignUp/Form";

function LoginForm() {
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [loading, setLodaing] = useState();
  const { login } = UseAuth();
  const navigate = useNavigate();

  // hendaler sumbit
  async function handaleSubmit(e) {
    e.preventDefault();
    try {
      setError("");
      setLodaing(true);
      await login(userEmail, password);
      navigate("/");
    } catch (error) {
      console.log(error);
      setError("Email and password don't match!");
      setLodaing(false);
    }
  }
  return (
    <Form style={{ height: "330px" }} onSubmit={handaleSubmit}>
      <InputType
        type="email"
        placeholder="Enter email"
        icon="alternate_email"
        value={userEmail}
        onChange={(e) => setUserEmail(e.target.value)}
      />
      <InputType
        type="password"
        placeholder="Enter password"
        icon="lock"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button type="submit">Login</Button>
      {error && <p className="error">{error}</p>}
      <Info>
        Don't have an account? <Link to="/signup">Signup</Link> instead.
      </Info>
    </Form>
  );
}

export default LoginForm;
