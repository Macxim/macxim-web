import PageTransition from "../components/PageTransition";
import "../styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PageTransition>
      <Component {...pageProps} />
    </PageTransition>
  );
}
