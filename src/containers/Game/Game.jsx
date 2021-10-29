import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Life from "../../components/Life/Life";
import Timer from "../../components/Timer/Timer";
import Score from "../../components/Score/Score";
import { data } from "../../mockData.js";
import GameContainer from "../../components/Game/Game";
import styles from "./Game.module.css";

const Game = ({ user }) => {
  const [num, setNum] = useState(0);
  const [score, setScore] = useState(0);
  const [life, setLife] = useState();

  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    user ? setLife(5) : setLife(3);
  }, []);

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
          <Timer />
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
          setLife={setLife}
          answers={answers}
          setAnswers={setAnswers}
        />
      </Row>
    </Container>
  );
};

export default Game;
