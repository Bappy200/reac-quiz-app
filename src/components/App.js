import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "../Context/AuthContext";
import "../styles/style.css";
import Layout from "./Layout/Layout";
import Home from "./pages/Home/Home.js";
import Login from "./pages/Login/Login";
import Quiz from "./pages/Quiz/Quiz";
import Result from "./pages/Result/Result";
import SignUp from "./pages/SignUp/SignUp";
function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/signup" element={<SignUp />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/quiz" element={<Quiz />} />
            <Route exact path="/result" element={<Result />} />
          </Routes>
        </Layout>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
