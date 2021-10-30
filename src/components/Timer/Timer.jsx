import React from "react";
import styles from "./Timer.module.css";

const Timer = ({ timer }) => <p className={styles.timer}>00:{("0" + timer).slice(-2)}</p>;

export default Timer;
