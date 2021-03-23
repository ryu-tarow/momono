import { BackButton, TitleH1, ShareButton } from "components/UIkit";
import Head from "next/head";

export default function Photos() {
  //スタンダードページの基本データ
  const url = "https://msrmmn.ml";
  const url02 = "line";
  const image = "photos/line";
  const title = "ましものほむぺでございましも";
  const pageTitle = "ましものほむぺでございましも｜LINEスタンプ";
  const description = "真白桃乃オフィシャルサイト";

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
        <BackButton link={"/"} />
        <TitleH1 text={"LINEスタンプ"} />
        <div className="w-11/12 m-auto">
          <div className="">
            <div className="">
              <div className="grid sm:grid-cols-2">
                <img src="icon.png" className="m-auto" />
                <div className="py-5">
                  <h2 className="text-center text-lg">
                    <b>ましもんって？</b>
                  </h2>
                  <p className="py-2 px-3">
                    真白桃乃の優しい心が生み出したばけもの。ぴんこ王国に生息。
                    <br />
                    真白桃乃のように温厚でとても優しいが空腹時は見境なく何もかも食べ尽くす。
                    <br />
                    この前は大量のコンクリートを食べた。敵の首を頭の輪っかで締めて大爆発させるのが得意技。
                    <br />
                    ピンコボンバー。
                  </p>
                </div>
              </div>
              <a href="https://line.me/S/sticker/14670591">
                <p className="border-green-500 text-green-500 border rounded-full p-2 mt-2 text-center hover:bg-green-400 hover:text-white duration-300">
                  ▶︎ LINEスタンプ第一弾
                </p>
              </a>
            </div>
            <p className="text-center pt-3 pb-2 text-sm text-gray-400">
              参考画像（2）
            </p>
            <div className="grid sm:grid-cols-2">
              <div>
                <img src="line/sticker01.jpg" alt="" className="p-1" />
              </div>
              <div>
                <img src="line/sticker02.jpg" alt="" className="p-1" />
              </div>
            </div>
          </div>
          <a href="https://line.me/S/sticker/14670591">
            <p className="border-gray-500 text-gray-500 border rounded-full p-2 mt-2 text-center hover:opacity-50 duration-300">
              ▶︎ 詳しく見る
            </p>
          </a>
        </div>
        <br />
        <ShareButton url={`${url}/${url02}`} text={description} />
      </main>
    </>
  );
}
