import Head from "next/head";
import { PhotoCard, SNSLink, ShareButton } from "components/UIkit/index";

export default function Home() {
  //TOPページの基本データ
  const url = "https://msrmmn2.vercel.app";
  const image = "photos/nino_com.png";
  const title = "MOMONO";
  const description = "TOPページの説明";

  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={`${url}/${image}`} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:locale" content="ja_JP" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@msrmmn" />
        <meta property="twitter:image" content={`${url}/${image}`} />
      </Head>
      <div className="m-auto max-w-screen-lg">
        <div className="">
          <img
            src="top_com.png"
            className="w-screen object-cover h-56 sm:h-72 md:h-96"
            alt="top-image"
          />
        </div>
        <ul className="flex justify-center w-11/12 m-auto">
          <SNSLink
            img={"twitter_com.png"}
            link={"https://twitter.com/msrmmn"}
            color={"bg-blue-400 mx-1"}
          />
          <SNSLink
            img={"instaglam_com.png"}
            link={"https://www.instagram.com/msrmmn/?hl=ja"}
            color={"bg-pink-400 mx-0"}
          />
          <SNSLink
            img={"tiktok_com.png"}
            link={"https://www.tiktok.com/@msrmmn?lang=ja"}
            color={"bg-gray-800 mx-1"}
          />
        </ul>
        <div className="w-11/12 m-auto">
          <div>
            <h3 className="text-center border border-gray-400 rounded-b-none rounded-2xl text-gray-500 p-1 mx-1 sm:p-2">
              今月の予定
            </h3>
            <a href="https://note.com/msrmmn">
              <div className="">
              <img
                src="note_com.png"
                className="rounded-t-none rounded-2xl duration-300 hover:opacity-70 px-1 mb-2"
                />
                </div>
            </a>
          </div>
          </div>
          <div className="grid grid-cols-2 m-auto w-11/12">
            <PhotoCard
              text={"プロフィール"}
              color={"border-pink-400 text-pink-500"}
              url={"/profile"}
              img={"profile.png"}
            />
            <PhotoCard
              text={"コスプレ"}
              color={"border-purple-400 text-purple-500"}
              url={"/photos"}
              img={"photos/nino.png"}
            />
          </div>
      </div>
      <ShareButton url={url} text={description} />
    </>
  );
}
