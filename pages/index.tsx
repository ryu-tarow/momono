import Head from "next/head";
import Layout from "components/Layout";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>MOMONO</title>
        <link rel="icon" href="" />
      </Head>
      <div className="m-auto max-w-screen-lg">
        <div className="grid grid-cols-2">
        <img
          src="top-img.jpg"
          className="w-screen"
          alt="top-image"
        />
                <img
          src="top-img2.jpg"
          className="w-screen"
          alt="top-image"
          />
          </div>
        <ul className="flex justify-center w-screen max-w-screen-lg">
          <div className="hover:bg-blue-300 bg-blue-400 w-1/3 py-2 m-1 rounded-md text-center text-white">
            <a href="https://twitter.com/msrmmn">
              <img src="twitter.png" className="m-auto w-8" />
            </a>
          </div>

          <div className="hover:bg-pink-300 bg-pink-400 w-1/3 py-2 my-1 rounded-md text-center text-white">
            <a href="https://www.instagram.com/msrmmn/?hl=ja">
              <img src="instaglam.png" className="m-auto w-8" />
            </a>
          </div>

          <div className="hover:bg-gray-600 bg-gray-800 w-1/3 py-2 m-1 text-center rounded-md text-white">
            <a href="https://www.tiktok.com/@msrmmn?lang=ja">
              <img src="tiktok.png" className="m-auto w-6 pt-0.5" />
            </a>
          </div>
        </ul>
      </div>
    </Layout>
  );
}
