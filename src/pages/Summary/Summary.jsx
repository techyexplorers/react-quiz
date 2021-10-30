import React from "react";
import styles from "./Summary.module.css";

const Summary = () => {
  const results = JSON.parse(localStorage.getItem("result"));
  return (
    <div className={styles.container}>
      <h1>Game Summary</h1>
      <div className={styles.result}>
        <ul>
          {results.map((i, index) => (
            <li>
              <p className={styles.question}>
                {index + 1}) &nbsp; {i.question}
              </p>
              <div className={styles.options}>
                {i.options.map((j, k) => (
                  <div className={styles.option}>
                    <p>Option {k + 1}</p>
                    <span>:</span>
                    <p
                      style={
                        j.option === i.correctAns
                          ? { color: "green" }
                          : { color: "red" }
                      }
                    >
                      {j.name}
                    </p>
                  </div>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Summary;
