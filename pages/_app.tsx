import "@/styles/globals.scss";
import type { AppProps } from "next/app";

import { Quicksand } from "next/font/google";
const font = Quicksand({ subsets: ["latin"], weight: "400" });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={font.className}>
      <Component {...pageProps} />
    </div>
  );
}
