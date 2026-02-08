import Image from "next/image";
import AOS from "aos";
import { useEffect } from "react";
import { Beth_Ellen } from "next/font/google";
import styles from "@/styles/Home.module.scss";

import alex from "../public/alex.jpeg";
import Form from "@/components/Form";
import Metadata from "@/components/Metadata";
import BlinkingText from "@/components/BlinkingText";
import Rose from "@/components/Rose";

const font = Beth_Ellen({ subsets: ["latin"], weight: "400" });

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <div
      className={
        "container is-flex is-flex-direction-column is-align-items-center p-5"
      }
    >
      <Metadata />

      <div
        className={
          "container is-flex is-align-items-center is-flex-direction-column"
        }
      >
        <span
          className={
            font.className + " is-size-1 has-text-berry has-text-centered m-1"
          }
          data-aos={"flip-up"}
        >
          Alexandria
        </span>

        <h1
          data-aos={"fade-right"}
          className={"is-size-2 has-text-centered m-1"}
        >
          you're already my...
        </h1>

        <div data-aos={"zoom-in"}>
          <BlinkingText />
        </div>
      </div>

      <div className={"columns m-2"}>
        <div
          className={
            "column is-flex is-justify-content-center is-align-items-center is-hidden-mobile paddingless"
          }
          data-aos={"flip-up"}
        >
          <Rose />
        </div>

        <figure
          className={"m-2 image " + styles.mainImage}
          data-aos={"flip-up"}
        >
          <Image src={alex} alt={"Alexandria"} className={styles.mainImage} />
        </figure>

        <div
          className={
            "column is-flex is-justify-content-center is-align-items-center paddingless"
          }
          data-aos={"flip-up"}
        >
          <Rose />
        </div>
      </div>

      <div
        className={
          "container is-flex is-align-items-center is-flex-direction-column"
        }
        data-aos={"flip-up"}
      >
        <h1 className={"is-size-2 has-text-centered m-1"}>
          So won't you be my{" "}
          <span className={font.className + " " + styles.tinted}>
            Valentine
          </span>{" "}
          too?
        </h1>

        <Form />
      </div>
    </div>
  );
};

export default Home;
