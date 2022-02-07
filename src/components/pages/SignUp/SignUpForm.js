import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UseAuth } from "../../../Context/AuthProvider";
import Button from "../../Button/Button";
import CheckBox from "../../CheckBox/CheckBox";
import Info from "../../Info/Info";
import InputType from "../../InputType/InputType";
import Form from "./Form";

function SignUpForm() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userConfromPassword, setUserConfromPassword] = useState("");
  const [aggre, setAggre] = useState();
  const { signUp } = UseAuth();
  const navigate = useNavigate();

  async function handlerSubmit(e) {
    e.preventDefault();

    if (userPassword !== userConfromPassword) {
      return setError("Password don't match!");
    }
    try {
      setError("");
      setLoading(true);
      await signUp(userEmail, userPassword, userName);

      navigate("/");
    } catch (error) {
      setLoading(false);
      console.log("bsg" + error);
      setError("Faild to create new user!");
    }
  }

  return (
    <Form style={{ height: "500px" }} onSubmit={handlerSubmit}>
      <InputType
        type="text"
        placeholder="Enter name"
        icon="person"
        require
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <InputType
        type="emil"
        placeholder="Enter email"
        icon="alternate_email"
        required
        value={userEmail}
        onChange={(e) => setUserEmail(e.target.value)}
      />
      <InputType
        type="password"
        placeholder="Enter password"
        icon="lock"
        required
        value={userPassword}
        onChange={(e) => setUserPassword(e.target.value)}
      />
      <InputType
        type="password"
        placeholder="Confirm password"
        icon="lock_clock"
        required
        value={userConfromPassword}
        onChange={(e) => setUserConfromPassword(e.target.value)}
      />

      <CheckBox
        text="I agree to the Terms &ams;  Conditions"
        required
        value={aggre}
        onChange={(e) => setAggre(e.target.value)}
      />
      <Button type="submit">SignUp</Button>
      {error && <p className="error">{error}</p>}
      <Info>
        Already have an account? <Link to="/login">Login</Link> instead.
      </Info>
    </Form>
  );
}

export default SignUpForm;
