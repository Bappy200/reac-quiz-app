import React from "react";
import { Navigate } from "react-router-dom";
import { UseAuth } from "../../Context/AuthProvider";
function PublicRoute({ children }) {
  const { currentUser } = UseAuth();
  return !currentUser ? children : <Navigate to="/" />;
}

export default PublicRoute;
