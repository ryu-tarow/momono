import {
  BackButton,
  TitleH1,
  TitleH2,
  DLImage,
  ShareButton,
} from "components/UIkit";
import Head from "next/head";

export default function Anime() {
  //アニメページの基本データ
  const url = "https://msrmmn.ml";
  const url02 = "photos/anime";
  const image = "photos/gantz.png";
  const title = "ましものほむペッペ";
  const pageTitle = "ましものほむペッペ";
  const description = "真白桃乃の写真集｜アニメ";

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
        <meta property="og:url" content={`${url}/${url02}`} />
        <meta property="og:image" content={`${url}/${image}`} />
        <meta property="og:description" content={description} />
        <meta property="og:locale" content="ja_JP" />

        {/* TwitterCardの設定 */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@msrmmn" />
        <meta property="twitter:image" content={`${url}/${image}`} />
      </Head>
      <main className="max-w-screen-lg m-auto">
        <BackButton link={"/photos"} />
        <TitleH1 text={"アニメ"} />

        {/* GANTZ */}
        <div>
          <TitleH2 text={"GANTZ"} color={"bg-gray-600 text-white"} />
          <ul className="grid grid-cols-2 w-11/12 m-auto">
            <DLImage photo={"gantz.png"} photoName={"gantz"} />
            <DLImage photo={"gantz_02.png"} photoName={"gantz_02"} />
          </ul>
          <div className="bg-gray-600 p-1.5 w-11/12 m-auto rounded-xl rounded-t-none" />
        </div>

        {/* 五等分の花嫁 */}
        <div>
          <TitleH2 text={"五等分の花嫁"} color={"bg-purple-500 text-white"} />
          <ul className="grid grid-cols-2 w-11/12 m-auto">
            <DLImage photo={"nino.png"} photoName={"nino"} />
            <DLImage photo={"nino_02.png"} photoName={"nino_02"} />
          </ul>
          <div className="bg-purple-500 p-1.5 w-11/12 m-auto rounded-xl rounded-t-none" />
        </div>

        <ShareButton url={`${url}/${url02}`} text={description} />
      </main>
    </>
  );
}
