import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Game from "../../containers/Game/Game";
import LetsStart from "../../containers/LetsStart/LetsStart";
import Tutorial from "../../containers/Tutorial/Tutorial";
import styles from "./Play.module.css";

const Play = ({ user }) => {
  const [page, setPage] = useState(1);
  return (
    <Container>
      {page === 1 ? (
        <Tutorial page={page} setPage={setPage} />
      ) : page === 2 ? (
        <LetsStart page={page} setPage={setPage} />
      ) : page === 3 ? (
        <Game page={page} setPage={setPage} user={user} />
      ) : null}
    </Container>
  );
};

export default Play;
