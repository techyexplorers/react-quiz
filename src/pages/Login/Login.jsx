import React, { useEffect } from "react";
import GoogleLogin from "react-google-login";
import styles from "./Login.module.css";

const clientId = process.env.REACT_APP_CLIENT_ID;

const Login = ({ user, setUser }) => {
  useEffect(() => {
    const userObj = JSON.parse(localStorage.getItem("user"));
    console.log(userObj);
    if (userObj) {
      setUser(userObj);
    }
  }, []);

  const onSuccess = (res) => {
    setUser(res.profileObj);
    localStorage.setItem("user", JSON.stringify(res.profileObj));
  };
  const onFailure = (res) => {
    console.log(res);
  };

  return (
    <div className={styles.container}>
      <GoogleLogin
        clientId={
          "153742785768-9b0cvuclmor7gbvjrfa6dadd4nk4j81j.apps.googleusercontent.com"
        }
        buttonText="Sign in with Google"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        theme="dark"
      />
    </div>
  );
};

export default Login;
