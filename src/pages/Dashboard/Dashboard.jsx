import React from "react";
import { todaysHighScore } from "./mockData";
import styles from "./Dashboard.module.css";

const Dashboard = () => {
  return (
    <div className={styles.mainContainer}>
      <h1>Dashboard</h1>
      <div className={styles.container}>
        <div className={styles.leftContainer}>
          <h2>Today's High Score</h2>
          <div className={styles.card}>
            <div className={styles.col}>
              <p className={styles.title}>Rank</p>
              {todaysHighScore.rank.map((i) => (
                <p>{i}</p>
              ))}
            </div>
            <div className={styles.col}>
              <p className={styles.title}>Name</p>
              {todaysHighScore.name.map((i) => (
                <p>{i}</p>
              ))}
            </div>
            <div className={styles.col}>
              <p className={styles.title}>Point</p>
              {todaysHighScore.point.map((i) => (
                <p>{i}</p>
              ))}
            </div>
          </div>

          <p className={styles.yourScore}>Your Score: &nbsp; 21</p>
          <p className={styles.yourRank}>Your Rank: &nbsp; 42</p>
        </div>

        <div className={styles.rightContainer}>
          <h2>All Time High Score</h2>
          <div className={styles.card}></div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
