import React from "react";
import GoogleLogin from "react-google-login";
import { useHistory } from "react-router";
import loginImg from "../../assets/login.svg"
import styles from "./Login.module.css";

const Login = ({ user, setUser }) => {
  const history = useHistory();

  const onSuccess = (res) => {
    localStorage.setItem("user", JSON.stringify(res.profileObj));
    setUser(res.profileObj);
    history.push("/");
  };
  const onFailure = (res) => {
    console.log(res);
  };

  return (
    <div className={styles.container}>
      <h1>Sign In</h1>
      <img src={loginImg} alt="login-pic" />
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
