import React from "react";
import classes from "../../styles/Layout.module.css";
import Nav from "../Nav/Nav.js";
function Layout({ children }) {
  return (
    <>
      <Nav></Nav>
      <main className={classes.main}>
        <div className={classes.container}>{children}</div>
      </main>
    </>
  );
}

export default Layout;
