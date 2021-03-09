import { BackButton, PhotoCard, TitleH1, ShareButton } from "components/UIkit";
import Head from "next/head";

export default function Photos() {
  //スタンダードページの基本データ
  const url = "https://msrmmn.ml";
  const url02 = "photos";
  const image = "photos/kimono.png";
  const title = "ましものほむペッペ";
  const pageTitle = "ましものほむペッペ";
  const description = "ましものほむペッペ｜写真集";

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>{pageTitle}</title>
        <link rel="icon" href="icon.png" />

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
        <BackButton link={"/"} />
        <TitleH1 text={"写真集"} />
        <div className="grid grid-cols-2 w-11/12 m-auto">
          <PhotoCard
            text={"スタンダード"}
            color={"border-red-500 text-red-600"}
            url={"/photos/standard"}
            img={"photos/china.png"}
          />
          <PhotoCard
            text={"アニメ"}
            color={"border-purple-400 text-purple-500"}
            url={"/photos/anime"}
            img={"photos/nino.png"}
          />
          <PhotoCard
            text={"ユニーク"}
            color={"border-yellow-500 text-yellow-600"}
            url={"/photos/unique"}
            img={"photos/fox.png"}
          />
          <PhotoCard
            text={"カルチャー"}
            color={"border-blue-500 text-blue-600"}
            url={"/photos/culture"}
            img={"photos/kimono_05.png"}
          />
        </div>
        <ShareButton url={`${url}/${url02}`} text={description} />
      </main>
    </>
  );
}
