import React, { useEffect } from "react";
import styles from "./Life.module.css";

const Life = ({ user, life, setLife }) => {
  useEffect(() => {
    if (user) {
      setLife(5);
    } else {
      setLife(3);
    }
  }, [])
  return (
    <div className={styles.container}>
      {Array.apply(null, Array(life)).map(function (x, i) {
        return <i className="fas fa-heart"></i>;
      })}
    </div>
  );
};

export default Life;
