import "tailwindcss/tailwind.css";
import "styles/globals.css";
import { AppProps } from "next/app";
import "lib/firebase";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />;
}

export default MyApp;
