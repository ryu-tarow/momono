import Head from "next/head";
import Layout from "components/Layout";
import Link from "next/link";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>MOMONO</title>
        <link rel="icon" href="" />
      </Head>
      <div className="m-auto max-w-screen-lg">
        <div className="">
          <img
            src="top.png"
            className="w-screen object-cover h-56 sm:h-72 md:h-96"
            alt="top-image"
          />
        </div>
        <p>とりあえず適当な画像入れてる↑</p>
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
        <div className="sm:grid sm:grid-cols-2">
          <div>
            <div className="text-center bg-gray-400 rounded-lg p-1 mb-1 mx-1 text-white">
              <h3>▼　今月の予定</h3>
            </div>
            <a href="https://note.com/msrmmn">
              <img
                src="note.png"
                className="w-screen object-cover h-32 sm:h-72 px-1 rounded-lg mb-1"
              />
            </a>
          </div>
          <div>
            <div className="text-center bg-purple-400 rounded-lg p-1 mb-1 mx-1 text-white">
              <h3>▼　コスプレ集</h3>
            </div>
            <Link href="/photos">
              <img
                src="photos/nino.png"
                className="w-screen object-cover h-52 sm:h-72 px-1 rounded-lg mb-1"
              />
            </Link>
          </div>
        </div>
        <p>リンクの追加とか、配置・色・基本的になんでも自由な構成にできるよ</p>
      </div>
    </Layout>
  );
}
