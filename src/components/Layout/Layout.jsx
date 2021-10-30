import React from "react";
import Header from "./Header/Header";
import styles from "./Layout.module.css";

const Layout = ({ children, user, setUser }) => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Header user={user} setUser={setUser} />
      {children}
    </div>
  );
};

export default Layout;
