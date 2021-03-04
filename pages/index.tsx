import Head from "next/head";
import Layout from "components/Layout";
import { PhotoCard, SNSLink, ShareButton } from "components/UIkit/index";

export default function Home() {
  
  //TOPページの基本データ
  const url = "https://msrmmn2.vercel.app";
  const image = "photos/nino.png";
  const title = "MOMONO";
  const description = "description";

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={image} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
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
        <ul className="flex justify-center w-11/12 m-auto">
          <SNSLink
            img={"twitter.png"}
            link={"https://twitter.com/msrmmn"}
            color={"bg-blue-400 mx-1"}
          />
          <SNSLink
            img={"instaglam.png"}
            link={"https://www.instagram.com/msrmmn/?hl=ja"}
            color={"bg-pink-400 mx-0"}
          />
          <SNSLink
            img={"tiktok.png"}
            link={"https://www.tiktok.com/@msrmmn?lang=ja"}
            color={"bg-gray-800 mx-1"}
          />
        </ul>
        <div className="grid sm:grid-cols-2 w-11/12 m-auto">
          <div>
            <h3 className="text-center border border-gray-400 rounded-lg text-gray-500 p-1 mx-1">
              ▼ 今月の予定
            </h3>
            <a href="https://note.com/msrmmn">
              <img
                src="note.png"
                className="w-screen object-cover h-32 sm:h-72 rounded-lg duration-300 hover:opacity-70 p-1"
              />
            </a>
          </div>
          <PhotoCard
            text={"▼ コスプレ集"}
            color={"border-purple-400 text-purple-500"}
            url={"/photos"}
            img={"photos/nino.png"}
          />
        </div>
      </div>
      <ShareButton url={url} text={description} />
    </Layout>
  );
}
