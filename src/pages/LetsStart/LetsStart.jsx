import React from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router";
import styles from "./LetsStart.module.css";

const LetsStart = () => {
  const history = useHistory();
  return (
    <div className={styles.container}>
      <h1>Let's Start</h1>
      <Button
        className="buttonClass"
        size="lg"
        onClick={() => history.push("/play")}
      >
        Start
      </Button>
    </div>
  );
};

export default LetsStart;
