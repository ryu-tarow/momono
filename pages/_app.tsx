import "tailwindcss/tailwind.css";
import "styles/globals.css";
import { AppProps } from "next/app";
import Layout from "components/Layout";
import "lib/firebase";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <script src="https://www.gstatic.com/firebasejs/8.2.10/firebase-app.js"></script>
      <script src="https://www.gstatic.com/firebasejs/8.2.10/firebase-analytics.js"></script>
    </>
  );
}

export default MyApp;
