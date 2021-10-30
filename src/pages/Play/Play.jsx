import React, { useState, useEffect } from "react";
import Life from "../../components/Life/Life";
import Timer from "../../components/Timer/Timer";
import Score from "../../components/Score/Score";
import { data } from "../../mockData.js";
import GameContainer from "../../components/Game/Game";
import styles from "./Play.module.css";
import { useHistory } from "react-router";

const Play = ({ user }) => {
  const [num, setNum] = useState(0);
  const [score, setScore] = useState(0);
  const [life, setLife] = useState(5);
  const [count, setCount] = useState(10);
  const [answers, setAnswers] = useState([]);
  const [isAnswered, setIsAnswered] = useState(false);
  const [streak, setStreak] = useState(0);
  const history = useHistory();

  // Timer
  useEffect(() => {
    const timer = count > 0 && setInterval(() => setCount(count - 1), 1000);
    return () => clearInterval(timer);
  });

  // Game over
  const gameOver = () => {
    history.push("/game-over");

    localStorage.setItem("result", JSON.stringify(answers));

    localStorage.setItem("score", JSON.stringify(score));
  };

  useEffect(() => {
    // const answersFromLocalStorage = JSON.parse(localStorage.getItem("answersObj"))
    // const [lastItem] = answersFromLocalStorage ? answersFromLocalStorage.slice(-1) : null
    // console.log(lastItem.life)

    // user ? setLife(5) : setLife(3);

    if (life === 0) {
      gameOver();
    }
  }, [life, answers]);

  console.log(answers);

  return (
    <div className={styles.container}>
      {/* Score and Life */}
      <div className={styles.topContainer}>
        <Score score={score} setScore={setScore} />
        <Life user={user} life={life} />
      </div>

      {/* Timer */}
      <div className={styles.timerContainer}>
        <Timer timer={count} />
      </div>

      {/* Game Container */}
      <div className={styles.gameContainer}>
        <GameContainer
          num={num}
          setNum={setNum}
          data={data}
          score={score}
          setScore={setScore}
          life={life}
          setLife={setLife}
          answers={answers}
          setAnswers={setAnswers}
          timer={count}
          setTimer={setCount}
          isAnswered={isAnswered}
          setIsAnswered={setIsAnswered}
          gameOver={gameOver}
          streak={streak}
          setStreak={setStreak}
        />
      </div>
    </div>
  );
};

export default Play;
