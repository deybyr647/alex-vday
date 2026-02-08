import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.scss";
import BlinkingText from "@/components/BlinkingText";
import Rose from "@/components/Rose";

import { Beth_Ellen } from "next/font/google";
const font = Beth_Ellen({ subsets: ["latin"], weight: "400" });

const Home = () => {
  return (
    <div
      className={
        "container is-flex is-flex-direction-column is-align-items-center p-5"
      }
    >
      <div
        className={
          "container is-flex is-align-items-center is-flex-direction-column"
        }
      >
          <span className={font.className + " is-size-1 has-text-centered m-1"}>Alexandria</span>
        <h1 className={"is-size-2 has-text-centered m-1"}>
             you're already my...
        </h1>
        <BlinkingText/>
      </div>

      <div className={"container is-flex is-justify-content-center m-2"}>
        <Rose />
      </div>

      <div
        className={
          "container is-flex is-align-items-center is-flex-direction-column"
        }
      >
        <h1 className={"is-size-2 has-text-centered m-1"}>
          So won't you be my <span className={font.className}>Valentine</span> too?
        </h1>
      </div>
    </div>
  );
};

export default Home;
