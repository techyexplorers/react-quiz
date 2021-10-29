import React from "react";
import Header from "./Header/Header";
import styles from "./Layout.module.css";

const Layout = ({ children, user, setUser }) => {
  return (
    <>
      <Header user={user} setUser={setUser} />
      {children}
    </>
  );
};

export default Layout;
