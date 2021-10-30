import React, { useState } from "react";
import { Link } from "react-router-dom";
import SideNav from "../SideNav/SideNav";
import { NavDropdown } from "react-bootstrap";
import { GoogleLogout } from "react-google-login";
import { useHistory } from "react-router";
import styles from "./Header.module.css";

const Header = ({ user, setUser }) => {
  const history = useHistory();

  const [isOpen, setIsOpen] = useState(false);
  const logout = () => {
    localStorage.removeItem("user");
    history.push("/login");
  };
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
            <Link to="/tutorial">
              <li>Play</li>
            </Link>
            {user ? (
              <NavDropdown
                title={user.givenName}
                id="basic-nav-dropdown"
                className={styles.dropdown}
              >
                <NavDropdown.Item href="#action/3.2">
                  <Link to="/profile">
                    <li>My Profile</li>
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  <GoogleLogout
                    clientId="153742785768-9b0cvuclmor7gbvjrfa6dadd4nk4j81j.apps.googleusercontent.com"
                    buttonText="Logout"
                    onLogoutSuccess={logout}
                  ></GoogleLogout>
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <Link to="/login">
                <li>Login</li>
              </Link>
            )}
          </ul>
        </nav>
      </div>
      <SideNav isOpen={isOpen} setIsOpen={setIsOpen} />
    </header>
  );
};

export default Header;
