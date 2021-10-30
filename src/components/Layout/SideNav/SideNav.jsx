import React from "react";
import { Link } from "react-router-dom";
import styles from "./SideNav.module.css";

const SideNav = ({ isOpen, setIsOpen }) => {
  const classname = isOpen ? styles.open : styles.hide;

  const handleClick = () => {
    setIsOpen(false);
  };
  return (
    <div className={`${classname} ${styles.container}`}>
      <i
        className={`${styles.times} fas fa-times`}
        onClick={() => setIsOpen(false)}
      ></i>
      <ul>
        <li onClick={handleClick}>
          <Link to="/">Home</Link>
        </li>
        <li onClick={handleClick}>
          <Link to="/about">About</Link>
        </li>
        <li onClick={handleClick}>
          <Link to="/tutorial">Play</Link>
        </li>
      </ul>
    </div>
  );
};

export default SideNav;
