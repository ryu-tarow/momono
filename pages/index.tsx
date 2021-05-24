import Head from "next/head";
import { PhotoCard, SNSLink, ShareButton } from "components/UIkit";
import Link from "next/link";

export default function Home() {
  //TOPページの基本データ
  const url = "https://msrmmn.ml";
  const image = "top.png";
  const title = "ましものほむぺでございましも";
  const pageTitle = "ましものほむぺでございましも";
  const description = "真白桃乃のオフィシャルサイト";

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>{pageTitle}</title>
        <link rel="icon" href="icon.png" />

        <meta name="keywords" content="真白桃乃" />
        <meta name="description" content={description} />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />

        <meta property="og:site_name" content={title} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={`${url}/${image}`} />
        <meta property="og:description" content={description} />
        <meta property="og:locale" content="ja_JP" />

        {/* TwitterCardの設定 */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@msrmmn" />
        <meta property="twitter:image" content={`${url}/${image}`} />
      </Head>
      <main className="m-auto max-w-screen-lg">
        <div className="absolute w-1/2 md:w-1/3">
          <div className="text-center text-sm mt-3 ml-5 mr-1 p-1.5 text-white bg-gray-700 opacity-80 rounded-2xl rounded-b-none sm:mt-9">
            <b>スケジュール</b>
          </div>
          <div className="ml-4">
            <a href="https://note.com/msrmmn">
              <div className="">
                <img
                  src="snsIcons/note.png"
                  alt="schedule"
                  className="rounded-t-none rounded-2xl duration-300 hover:opacity-70 px-1 mb-2"
                />
              </div>
            </a>
          </div>
        </div>
        <div className="">
          <img src="top.png" className="bg-gray-100 w-screen" alt="top-image" />
        </div>
        <ul className="flex justify-center w-11/12 m-auto">
          <SNSLink
            img={"snsIcons/twitter.png"}
            link={"https://twitter.com/msrmmn"}
            color={"bg-blue-400 mx-1"}
          />
          <SNSLink
            img={"snsIcons/instaglam.png"}
            link={"https://www.instagram.com/msrmmn/?hl=ja"}
            color={"bg-pink-400 mx-0"}
          />
          <SNSLink
            img={"snsIcons/youtube.png"}
            link={"https://www.youtube.com/channel/UC_hysc5fXxPHdLuN_hGV0mg"}
            color={"bg-white mx-1 bg-red-500"}
          />
          <SNSLink
            img={"snsIcons/tiktok.png"}
            link={"https://www.tiktok.com/@msrmmn?lang=ja"}
            color={"bg-gray-800 mr-1"}
          />
        </ul>
        <a href="https://www.youtube.com/watch?v=o5cNpPBetPA">
        <div className="sm:hidden">
          <div className="bg-red-400 m-auto text-center text-white mx-4 rounded-full py-2 rounded-b-none">
            <b>真白桃乃ちゃんねる。</b>
          </div>
          <iframe className="w-screen h-auto px-4" src="https://www.youtube.com/embed/o5cNpPBetPA" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
          <div className="bg-red-400 m-auto text-center text-white mx-4 rounded-full py-2 rounded-t-none">
          </div>
          </div>
        </a>
        <div className="sm:hidden">
          <div className="relative">
            <Link href="/line">
              <div className="absolute bg-white px-4 py-2 bottom-0 right-4 m-5 rounded-md hover:opacity-50 duration-300 shadow-md">
                ▶︎ 詳細を見る
              </div>
            </Link>
            <img
              src="/momo_banner.png"
              className="w-11/12 m-auto rounded-xl p-1 mb-1"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 m-auto w-11/12">
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
          <div className="hidden sm:flex">
            <PhotoCard
              text={"LINEスタンプ"}
              color={"border-green-400 text-green-500"}
              url={"/line"}
              img={"momo_banner.png"}
            />
          </div>
        </div>
        <ShareButton url={url} text={description} />
      </main>
    </>
  );
}
