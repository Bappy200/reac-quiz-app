import React from "react";
import { Link } from "react-router-dom";
import { UseAuth } from "../../Context/AuthProvider";
import classes from "../../styles/Action.module.css";
function Action() {
  const { currentUser, logOut } = UseAuth();
  return (
    <div className={classes.account}>
      {currentUser ? (
        <>
          <span className="material-icons-outlined" title="Account">
            account_circle
          </span>
          <span>{currentUser.displayName}</span>
          <span
            className="material-icons-outlined"
            title="Logout"
            onClick={logOut}
          >
            logout
          </span>
        </>
      ) : (
        <>
          <Link to="/signup">Signup</Link>
          <Link to="/login">Login</Link>
        </>
      )}
    </div>
  );
}

export default Action;
