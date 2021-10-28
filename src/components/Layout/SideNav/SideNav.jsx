import React from "react";
import styles from "./SideNav.module.css";

const SideNav = ({ isOpen, setIsOpen }) => {
  const classname = isOpen ? styles.open : styles.hide;
  return (
    <div className={`${classname} ${styles.container}`}>
      <i className={`${styles.times} fas fa-times`} onClick={() => setIsOpen(false)}></i>
      <ul>
        <li>About</li>
        <li>Play</li>
        <li>Login</li>
      </ul>
    </div>
  );
};

export default SideNav;
