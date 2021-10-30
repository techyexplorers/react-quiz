import React from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router";
import styles from "./Tutorial.module.css";

const Tutorial = () => {
  const history = useHistory();
  return (
    <div className={styles.container}>
      <h1>Tutorial</h1>
      <Button
        className="buttonClass"
        size="lg"
        onClick={() => history.push("/start")}
      >
        Skip
      </Button>
    </div>
  );
};

export default Tutorial;
