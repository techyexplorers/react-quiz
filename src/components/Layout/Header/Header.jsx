import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.mainContainer}>
      <header className={styles.container}>
        <div className={styles.logoContainer}>
          <h3>Logo</h3>
        </div>
        <nav className={styles.nav}>
        <i className={`${styles.bars} fas fa-bars`}></i>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Play</li>
            <li>Login</li>
          </ul>
        </nav>
      </header>
    </header>
  );
};

export default Header;
