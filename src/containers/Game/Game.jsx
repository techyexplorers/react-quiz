import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Lifeline from "../../components/Lifeline/Lifeline";
import Timer from "../../components/Timer/Timer";
import Score from "../../components/Score/Score";
import { data } from "../../mockData.js";
import GameContainer from "../../components/Game/Game";
import styles from "./Game.module.css";

const Game = ({ user }) => {
  const [num, setNum] = useState(0);
  const [score, setScore] = useState(0);

  return (
    <Container>

    {/* Score and Life */}
      <Row className="justify-content-md-between mt-4">
        <Col lg="2">
          <Score />
        </Col>
        <Col lg="2">
          <Lifeline user={user} />
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
        <GameContainer num={num} setNum={setNum} data={data} />
      </Row>

    </Container>
  );
};

export default Game;
