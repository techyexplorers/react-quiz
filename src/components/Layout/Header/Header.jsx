import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SideNav from "../SideNav/SideNav";
import { NavDropdown } from "react-bootstrap";
import { GoogleLogout } from "react-google-login";
import { useHistory } from "react-router";
import logo from "../../../assets/logo.png"
import styles from "./Header.module.css";

const Header = ({  user, setUser }) => {
  const history = useHistory();
  const userObj = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
   console.log(user) 
  }, [user])

  const [isOpen, setIsOpen] = useState(false);
  const logout = () => {
    localStorage.removeItem("user");
    history.push("/login");
    setUser(null)
  };
  return (
    <header className={styles.mainContainer}>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
        <Link to="/">
          <img src={logo} alt="logo" />
          <p>Quiz</p>
        </Link>
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
            {userObj ? (
              <NavDropdown
                title={userObj.givenName}
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
