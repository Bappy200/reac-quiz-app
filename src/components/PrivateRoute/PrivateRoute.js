import React from "react";
import { Navigate } from "react-router-dom";
import { UseAuth } from "../../Context/AuthProvider";
function PrivateRoute({ children }) {
  const { currentUser } = UseAuth();
  return currentUser ? children : <Navigate to="/login" />;
}

export default PrivateRoute;
