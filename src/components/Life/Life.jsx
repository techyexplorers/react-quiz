import React from "react";
import styles from "./Life.module.css";

const Life = ({ user, life }) => {
  return (
    <div className={styles.container}>
      {Array.apply(null, Array(life)).map(function (x, i) {
        return <i className="fas fa-star"></i>;
      })}
    </div>
  );
};

export default Life;
