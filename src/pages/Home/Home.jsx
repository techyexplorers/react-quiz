import React, { useEffect } from "react";
import { useHistory } from "react-router";
import styles from "./Home.module.css";

const Home = () => {
  const history = useHistory();

  const user = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    if (!user) {
      history.push("/login");
    }
  }, []);
  return (
    <div className={styles.container}>
      <h1>Home Page</h1>
    </div>
  );
};

export default Home;
