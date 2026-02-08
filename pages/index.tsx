import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.scss";
import BlinkingText from "@/components/BlinkingText";
import Rose from "@/components/Rose";

const Home = () => {
  return (
    <>
      <div>
        Hello World
        <BlinkingText />
      </div>

      <div>
        <Rose />
      </div>
    </>
  );
};

export default Home;
