import React, { useState } from "react";
import SideNav from "../SideNav/SideNav";
import styles from "./Header.module.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className={styles.mainContainer}>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <h3>Logo</h3>
        </div>
        <nav className={styles.nav}>
          <i
            className={`${styles.bars} fas fa-bars`}
            onClick={() => setIsOpen(true)}
          ></i>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Play</li>
            <li>Login</li>
          </ul>
        </nav>
      </div>
      <SideNav isOpen={isOpen} setIsOpen={setIsOpen} />
    </header>
  );
};

export default Header;
