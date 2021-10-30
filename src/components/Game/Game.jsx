import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

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
      localStorage.setItem("answersObj", JSON.stringify(answers));

      if ("A" === data[num].correctAnswer) {
        setScore((prev) => prev + 1);
      } else if ("A" !== data[num].correctAnswer) {
        setLife((prev) => prev - 1);
      }

      setIsAnswered(true);
    }
  }, [timer]);

  const next = () => {
    setTimer(5);
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
      if (streak === 3) {
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
    localStorage.setItem("answersObj", JSON.stringify(answers));

    setIsAnswered(true);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {data[num].question}

      {data[num].options.map((i) => (
        <p onClick={() => checkAnswer(i, data[num])}>{i.name}</p>
      ))}

      <Button className="buttonClass" onClick={next} disabled={!isAnswered}>
        Next
      </Button>
    </div>
  );
};

export default Game;
