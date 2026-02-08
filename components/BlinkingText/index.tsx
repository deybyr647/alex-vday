import { useEffect, useState } from "react";

import styles from "./BlinkingText.module.scss";

const BlinkingText = () => {
  let words: string[] = [
    "Lover",
    "Princess",
    "Gorgeous",
    "Queen",
    "Precious",
    "Baby",
    "Everything",
    "World",
    "Peace",
    "Anchor",
    "Muse",
    "Alexandria",
  ];

  const [word, setWord] = useState("Alexandria");

  useEffect(() => {
    console.log("calling effect");
    setInterval(() => {
      setWord(words[Math.floor(Math.random() * words.length)]);
    }, 2500);
  }, []);

  return (
    <div className={styles.blinkingTextContainer}>
      <h2>
        <span className={styles.blinkingText}>{word}</span>
      </h2>
    </div>
  );
};

export default BlinkingText;
