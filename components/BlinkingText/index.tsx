import { useEffect, useState } from "react";

import styles from "./BlinkingText.module.scss";
import { Beth_Ellen } from "next/font/google";
const font = Beth_Ellen({ subsets: ["latin"], weight: "400" });

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
    "Rock",
    "Muse",
    "Alexandria",
  ];

  const [word, setWord] = useState("Alexandria");

  useEffect(() => {
    console.log("calling effect");
    setInterval(() => {
      setWord(words[Math.floor(Math.random() * words.length)]);
    }, 2000);
  }, []);

  return (
    <h2 className={styles.blinkingText + " is-size-2 has-text-centered m-2 " + font.className}>
      {word}
    </h2>
  );
};

export default BlinkingText;
