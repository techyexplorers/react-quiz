import React from "react";
import styles from "./Lifeline.module.css";

const Lifeline = ({ user }) => {
  return (
    <div className={styles.container}>
      {user ? (
        <div className={styles.loggedIn}>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
        </div>
      ) : (
        <div className={styles.loggedOut}>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
        </div>
      )}
    </div>
  );
};

export default Lifeline;
