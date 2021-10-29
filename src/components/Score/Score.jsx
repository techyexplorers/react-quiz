import React from "react";
import styles from "./Score.module.css";

const Score = ({ score }) => {
  return (
    <div className={styles.container}>
      <p>Score: {score}</p>
    </div>
  );
};

export default Score;
