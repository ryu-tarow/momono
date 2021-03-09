import {
  TitleH1,
  TextCategory,
  BackButton,
  ShareButton,
} from "components/UIkit";
import Head from "next/head";

export default function Profile() {
  //プロフィールページの基本データ
  const url = "https://msrmmn.ml";
  const url02 = "profile";
  const image = "profile.png";
  const title = "ましものほむペッペ";
  const pageTitle = "ましものほむペッペ";
  const description = "ましものほむペッペ｜プロフィール";

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
        <TitleH1 text={"プロフィール"} />
        <div className="grid grid-cols-1 sm:grid-cols-2">
          <div className="sm:ml-5">
            <img
              src="profile.png"
              alt="profile_img"
              className="w-11/12 p-2 m-auto rounded-3xl"
            />
          </div>
          <ul className="pt-4 p-2 text-center">
            <TextCategory category={"name"} text={"真白桃乃"} />
            <TextCategory category={"birthday"} text={"10月6日"} />
            <TextCategory category={"from"} text={"福岡県（ぴんこ王国）"} />
            <TextCategory category={"blood type"} text={"AB型"} />
            <TextCategory category={"height"} text={"156cm"} />
            <TextCategory
              category={"office"}
              text={"九州でちゃう！女子編集部"}
            />
          </ul>
        </div>
        <ul className="text-center p-1 w-11/12 m-auto">
          <h3 className="py-1.5 text-center bg-pink-400 text-white rounded-2xl">
            経歴
          </h3>
          <li className="pt-5">
            <h4 className="">九州出ちゃう！研究生</h4>
            <p className="text-gray-500 text-sm">2019年5月27日〜10月1日</p>
          </li>
          <li className="py-3">
            <h4 className="">九州でちゃう！編集部員</h4>
            <p className="text-gray-500 text-sm">2019年10月2日〜現在</p>
          </li>
        </ul>
        <ShareButton url={`${url}/${url02}`} text={description} />
      </main>
    </>
  );
}
