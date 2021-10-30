import React, { useState } from "react";
import { Button } from "react-bootstrap";

const Game = ({
  num,
  setNum,
  data,
  score,
  setScore,
  life,
  setLife,
  answers,
  setAnswers,
}) => {
  const next = () => {
    if (num < data.length - 1) {
      setNum((prev) => prev + 1);
    } else {
      alert("finished!");
    }
    localStorage.setItem("answersObj", JSON.stringify(answers));
  };

  const checkAnswer = (selected, currentObj) => {
    console.log(selected);

    const answer = selected.option;
    const correctAnswer = currentObj.correctAnswer;
    const isCorrect = answer === correctAnswer;

    if (isCorrect) {
      setScore((prev) => prev + 1);
    } else if (!isCorrect) {
      setLife((prev) => prev - 1);
    }

    const answerObj = {
      question: currentObj.question,
      answer: answer,
      isCorrect: isCorrect,
    };

    setAnswers((prev) => [...prev, answerObj]);

  };

  console.log(answers);
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {data[num].question}

      {data[num].options.map((i) => (
        <p onClick={() => checkAnswer(i, data[num])}>{i.name}</p>
      ))}

      <Button className="buttonClass" onClick={next}>
        Next
      </Button>
    </div>
  );
};

export default Game;
