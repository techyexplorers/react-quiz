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
    if (num < data.length - 1) {
      setNum((prev) => prev + 1);
      setTimer(5);
      setIsAnswered(false);
    } else {
      alert("finished!");
    }
  };

  const checkAnswer = (selected, currentObj) => {
    const answer = selected.option;
    const correctAnswer = currentObj.correctAnswer;
    const isCorrect = answer === correctAnswer;

    if (isCorrect) {
      setScore((prev) => prev + 1);
    } else if (!isCorrect) {
      setLife((prev) => prev - 1);
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

  console.log(answers);
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
