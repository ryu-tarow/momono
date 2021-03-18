import {
  BackButton,
  TitleH1,
  TitleH2,
  DLImage,
  ShareButton,
} from "components/UIkit";
import Head from "next/head";

export default function Standard() {
  //スタンダードページの基本データ
  const url = "https://msrmmn.ml";
  const url02 = "photos/standard";
  const image = "photos/china_02.png";
  const title = "ましものほむペッペ";
  const pageTitle = "ましものほむペッペ";
  const description = "真白桃乃の写真集｜スタンダード";

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
        <TitleH1 text={"スタンダード"} />

        {/* チャイナ服 */}
        <div>
          <TitleH2 text={"チャイナ服"} color={"bg-red-500 text-white"} />
          <ul className="grid grid-cols-2 w-11/12 m-auto ">
            <DLImage photo={"china.png"} photoName={"china"} />
            <DLImage photo={"china_02.png"} photoName={"china02"} />
          </ul>
          <div className="bg-red-500 p-1.5 w-11/12 m-auto rounded-xl rounded-t-none" />
        </div>
        <ShareButton url={`${url}/${url02}`} text={description} />
      </main>
    </>
  );
}
