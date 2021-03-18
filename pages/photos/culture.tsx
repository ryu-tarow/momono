import {
  BackButton,
  TitleH1,
  TitleH2,
  DLImage,
  ShareButton,
} from "components/UIkit";
import Head from "next/head";

export default function Culture() {
  //スタンダードページの基本データ
  const url = "https://msrmmn.ml";
  const url02 = "photos/culture";
  const image = "photos/kimono_05.png";
  const title = "ましものほむぺでございましも";
  const pageTitle = "ましものほむぺでございましも";
  const description = "ましもの写真集｜カルチャー";

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
        <TitleH1 text={"カルチャー"} />

        {/* 着物 */}
        <div>
          <TitleH2 text={"着物"} color={"bg-purple-500 text-white"} />
          <ul className="grid grid-cols-2 sm:grid-cols-3 w-11/12 m-auto bg-purple-300">
            <DLImage photo={"kimono.png"} photoName={"kimono.png"} />
            <DLImage photo={"kimono_02.png"} photoName={"kimono_02"} />
            <DLImage photo={"kimono_03.png"} photoName={"kimono_03"} />
            <DLImage photo={"kimono_04.png"} photoName={"kimono_04"} />
            <DLImage photo={"kimono_05.png"} photoName={"kimono_05"} />
            <DLImage photo={"kimono_06.png"} photoName={"kimono_06"} />
            <DLImage photo={"kimono_07.png"} photoName={"kimono_07"} />
            <DLImage photo={"kimono_08.png"} photoName={"kimono_08"} />
          </ul>
          <div className="bg-purple-500 p-1.5 w-11/12 m-auto rounded-xl rounded-t-none" />
        </div>

        <ShareButton url={`${url}/${url02}`} text={description} />
      </main>
    </>
  );
}
