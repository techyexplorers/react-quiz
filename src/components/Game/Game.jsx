import React, { useState } from "react";
import { Button } from "react-bootstrap";

// const Game = ({ num, setNum, data }) => {
//   console.log(data.length, num, data[num].question);
//   const next = () => {
//     if (num < data.length - 1) {
//       setNum((prev) => prev + 1);
//     }
//      else {
//       alert("finished!");
//     }
//   };

//   const [answers, setAnswers] = useState([])

//   console.log(answers)
//   return (
//     <div style={{ display: "flex", flexDirection: "column" }}>
//       {data[num].question}

//       {data[num].options.map((i) => (
//         <p
//           onClick={() => {
//             if (data[num].correctAnswer === i.option) {
//               alert("correct");
//               setAnswers(prev => [...prev, {
//                 question: data[num].question,
//                 isCorrect: true,
//                 option: i.option,
//               }])
//             } else {
//               alert("wrong");
//               setAnswers(prev => [...prev, {
//                 question: data[num].question,
//                 isCorrect: false,
//                 option: i.option,
//               }])
//             }
//           }}
//         >
//           {i.name}
//         </p>
//       ))}

//       <Button className="buttonClass" onClick={next}>
//         Next
//       </Button>
//     </div>
//   );
// };

// export default Game;

// ================

const Game = ({ num, setNum, data, score, setScore }) => {
  const [answers, setAnswers] = useState([]);

  const next = () => {
    if (num < data.length - 1) {
      setNum((prev) => prev + 1);
    } else {
      alert("finished!");
    }
  };

  const checkAnswer = (selected, currentObj) => {
    console.log(selected);

    const answer = selected.option;
    const correctAnswer = currentObj.correctAnswer;
    const isCorrect = answer === correctAnswer;

    if (isCorrect) {
      setScore((prev) => prev + 1);
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
