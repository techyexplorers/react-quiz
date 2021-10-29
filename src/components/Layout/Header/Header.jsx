import React, { useState } from "react";
import { Link } from "react-router-dom";
import SideNav from "../SideNav/SideNav";
import styles from "./Header.module.css";

const Header = ({ user, setUser }) => {
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
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/about">
              <li>About</li>
            </Link>
            <Link to="/play">
              <li>Play</li>
            </Link>
            <Link to="/login">
              <li>Login</li>
            </Link>
          </ul>
        </nav>
      </div>
      <SideNav isOpen={isOpen} setIsOpen={setIsOpen} />
    </header>
  );
};

export default Header;
