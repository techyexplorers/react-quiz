import React from "react";
import styles from "./Alert.module.css";

const Alert = ({ alertState }) => {
    const classname = alertState === "correct" ? styles.correct : styles.wrong
  return (
    <div className={`${styles.container} ${classname}`}>
      <p>{alertState === "correct" ? "Correct" : "Wrong"}</p>
    </div>
  );
};

export default Alert;
