import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import styles from "./Game.module.css";

const Game = ({
  num,
  setNum,
  data,
  setScore,
  setLife,
  answers,
  setAnswers,
  timer,
  setTimer,
  isAnswered,
  setIsAnswered,
  gameOver,
  streak,
  setStreak,
}) => {
  let answerObj;

  // Timer
  useEffect(() => {
    if (timer === 0 && !isAnswered) {
      answerObj = {
        question: data[num].question,
        answer: "A",
        isCorrect: "A" === data[num].correctAnswer,
      };
      setAnswers((prev) => [...prev, answerObj]);

      if ("A" === data[num].correctAnswer) {
        setScore((prev) => prev + 1);
      } else if ("A" !== data[num].correctAnswer) {
        setLife((prev) => prev - 1);
      }

      setIsAnswered(true);
    }
  }, [timer]);

  const next = () => {
    setTimer(10);
    if (num < data.length - 1) {
      setNum((prev) => prev + 1);
      setIsAnswered(false);
    } else {
      alert("finished!");
      gameOver();
    }
  };

  const checkAnswer = (selected, currentObj) => {
    const answer = selected.option;
    const correctAnswer = currentObj.correctAnswer;
    const isCorrect = answer === correctAnswer;

    if (isCorrect) {
      if (streak === 2) {
        setScore((prev) => prev + 3);
      }
      setScore((prev) => prev + 1);
      setStreak((prev) => prev + 1);
    } else if (!isCorrect) {
      setLife((prev) => prev - 1);
      setStreak(0);
    }

    answerObj = {
      question: currentObj.question,
      answer: answer,
      isCorrect: isCorrect,
    };

    setAnswers((prev) => [...prev, answerObj]);

    setIsAnswered(true);
  };

  return (
    <div className={styles.container}>
      {/* Question */}
      <h2 className={styles.question}>{data[num].question}</h2>

      {/* Answers */}
      <div className={styles.answersContainer}>
        {data[num].options.map((i) => (
          <img
            src={i.img}
            onClick={() => {
              if (!isAnswered) {
                checkAnswer(i, data[num]);
              } else {
                return "disabled";
              }
            }}
          />
        ))}
      </div>
      
      {/* Next Button */}
      <button className="buttonClass" onClick={next} disabled={!isAnswered}>
        Next
      </button>
    </div>
  );
};

export default Game;
