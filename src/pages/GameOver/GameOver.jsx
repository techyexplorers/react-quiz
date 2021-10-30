import React from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  RedditShareButton,
  RedditIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";
import styles from "./GameOver.module.css";

const GameOver = () => {
  const score = localStorage.getItem("score");
  return (
    <div className={styles.container}>
      <h1>Game Over</h1>
      <p className={styles.score}>Your score: &nbsp; {score}</p>

      <div className={styles.socialscontainer}>
        <p>Share:</p>
        <FacebookShareButton url="https://drive.google.com/file/d/1CMMHBeWdMlA-w6KqPl75RVxO9_ns_yuW/view">
          <FacebookIcon size={"3rem"} round />
        </FacebookShareButton>
        &nbsp;
        <TwitterShareButton url="https://drive.google.com/file/d/1CMMHBeWdMlA-w6KqPl75RVxO9_ns_yuW/view">
          <TwitterIcon size={"3rem"} round />
        </TwitterShareButton>
        &nbsp;
        <LinkedinShareButton url="https://drive.google.com/file/d/1CMMHBeWdMlA-w6KqPl75RVxO9_ns_yuW/view">
          <LinkedinIcon size={"3rem"} round />
        </LinkedinShareButton>
        &nbsp;
        <WhatsappShareButton url="https://drive.google.com/file/d/1CMMHBeWdMlA-w6KqPl75RVxO9_ns_yuW/view">
          <WhatsappIcon size={"3rem"} round />
        </WhatsappShareButton>
        &nbsp;
        <RedditShareButton url="https://drive.google.com/file/d/1CMMHBeWdMlA-w6KqPl75RVxO9_ns_yuW/view">
          <RedditIcon size={"3rem"} round />
        </RedditShareButton>
      </div>

      <div className={styles.btnContainer}>
        <button className="buttonClass">Next</button>
        <button className="buttonClass">View Details</button>
      </div>
    </div>
  );
};

export default GameOver;
