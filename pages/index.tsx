import Head from "next/head";
import Layout from "components/Layout";
import Link from "next/link";

import {Share} from 'components/Share';

export default function Home() {
  const ogUrl = "";
  const ogImage = "nino.png";
  const ogTitle = "momono";
  const ogDescription = "桃乃だよ。";
  return (
    <Layout>
      <Head>
        <title>MOMONO</title>
        <link rel="icon" href="" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={ogUrl} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:title" content={ogTitle} />
        <meta
          property="og:description"
          content={ogDescription}
        />
        <meta property="og:locale" content="ja_JP" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@msrmmn" />
      </Head>
      <div className="m-auto max-w-screen-lg">
        <div className="">
          <img
            src="top.png"
            className="w-screen object-cover h-56 sm:h-72 md:h-96"
            alt="top-image"
          />
        </div>
        <ul className="flex justify-center w-11/12 m-auto max-w-screen-lg">
          <div className="duration-300 hover:opacity-70 bg-blue-400 w-1/3 py-2 m-1 rounded-md text-center text-white">
            <a href="https://twitter.com/msrmmn">
              <img src="twitter.png" className="m-auto w-8" />
            </a>
          </div>
          <div className="duration-300 hover:opacity-70 bg-pink-400 w-1/3 py-2 my-1 rounded-md text-center text-white">
            <a href="https://www.instagram.com/msrmmn/?hl=ja">
              <img src="instaglam.png" className="m-auto w-8" />
            </a>
          </div>

          <div className="duration-300 hover:opacity-70 bg-gray-800 w-1/3 py-2 m-1 text-center rounded-md text-white">
            <a href="https://www.tiktok.com/@msrmmn?lang=ja">
              <img src="tiktok.png" className="m-auto w-6 pt-0.5" />
            </a>
          </div>
        </ul>
        <div className="sm:grid sm:grid-cols-2 w-11/12 m-auto">
          <div>
            <div className="text-center border border-gray-400 rounded-lg text-gray-500 p-1 mx-1">
              <h3>▼ 今月の予定</h3>
            </div>
            <a href="https://note.com/msrmmn">
              <img
                src="note.png"
                className="w-screen object-cover h-32 sm:h-72 rounded-lg duration-300 hover:opacity-70 p-1"
              />
            </a>
          </div>
          <div>
            <div className="text-center border border-purple-400 rounded-lg text-purple-500 p-1 mx-1">
              <h3>▼ コスプレ集</h3>
            </div>
            <Link href="/photos">
              <img
                src="photos/nino.png"
                className="w-screen object-cover h-52 sm:h-72 rounded-lg cursor-pointer duration-300 hover:opacity-70 p-1"
              />
            </Link>
          </div>
        </div>
      </div>
      <Share url={"https://msrmmn2.vercel.app"} text={"テスト"}/>
    </Layout>
  );
}
