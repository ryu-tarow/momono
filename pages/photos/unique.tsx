import {
  BackButton,
  TitleH1,
  TitleH2,
  DLImage,
  ShareButton,
} from "components/UIkit";
import Head from "next/head";

export default function Unique() {
  //スタンダードページの基本データ
  const url = "https://msrmmn.ml";
  const url02 = "photos/unique";
  const image = "photos/fox.png";
  const title = "ましものほむぺでございましも";
  const pageTitle = "ましものほむぺでございましも｜フォトアルバム";
  const description = "カテゴリー：ユニーク";

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
        <TitleH1 text={"ユニーク"} />

        {/* キツネ */}
        <div>
          <TitleH2 text={"キツネ"} color={"bg-yellow-500 text-white"} />
          <ul className="grid grid-cols-2 w-11/12 m-auto">
            <DLImage photo={"fox.png"} photoName={"fox"} />
            <DLImage photo={"fox_02.png"} photoName={"fox_02"} />
          </ul>
          <div className="bg-yellow-500 p-1.5 w-11/12 m-auto rounded-xl rounded-t-none" />
        </div>

        {/* トナカイ */}
        <div>
          <TitleH2 text={"トナカイ"} color={"bg-yellow-700 text-white"} />
          <ul className="grid grid-cols-2 w-11/12 m-auto bg-yellow-600">
            <DLImage photo={"reindeer.png"} photoName={"fox"} />
          </ul>
          <div className="bg-yellow-700 p-1.5 w-11/12 m-auto rounded-xl rounded-t-none" />
        </div>
        <ShareButton url={`${url}/${url02}`} text={description} />
      </main>
    </>
  );
}
