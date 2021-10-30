import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
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
  const [timer, setTimer] = useState(5);
  const [answers, setAnswers] = useState([]);
  const [isAnswered, setIsAnswered] = useState(false);
  const history = useHistory();

  // Timer
  useEffect(() => {
    if (timer > 0) {
      setTimeout(() => setTimer(timer - 1), 1000);
    } else {
      setTimer(0);
    }
  });

  // Game over
  const gameOver = () => {
    history.push("/game-over");
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

  console.log(score);
  return (
    <Container>
      {/* Score and Life */}
      <Row className="justify-content-md-between mt-4">
        <Col lg="2">
          <Score score={score} setScore={setScore} />
        </Col>
        <Col lg="2">
          <Life user={user} life={life} />
        </Col>
      </Row>

      {/* Timer */}
      <Row className="justify-content-md-center mt-4">
        <Col lg="2">
          <Timer timer={timer} setTimer={setTimer} />
        </Col>
      </Row>

      {/* Game Container */}
      <Row className={styles.gameContaienr}>
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
          timer={timer}
          setTimer={setTimer}
          isAnswered={isAnswered}
          setIsAnswered={setIsAnswered}
        />
      </Row>
    </Container>
  );
};

export default Play;
