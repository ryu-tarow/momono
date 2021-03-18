import { BackButton, PhotoCard, TitleH1, ShareButton } from "components/UIkit";
import Head from "next/head";

export default function Photos() {
  //スタンダードページの基本データ
  const url = "https://msrmmn.ml";
  const url02 = "line";
  const image = "photos/line";
  const title = "ましものほむペッペ";
  const pageTitle = "ましものほむペッペ";
  const description = "ましものほむペッペ｜LINEスタンプ";

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
              <div className="w-11/12 m-auto mt-3">
                  <div className="grid sm:grid-cols-2">
          <div>
            <img
              src="momo_banner.png"
              className="rounded-lg"
            />
            <a href="https://line.me/S/sticker/14670591">
              <p className="border-green-500 text-green-500 border rounded-full p-2 mt-2 text-center hover:bg-green-200 duration-300">
                LINEスタンプを見る
              </p>
            </a>
        </div>
                      <div>
                          
                      <img src="mashimon.jpg" className="w-full p-5" />
                      </div>
                      </div>
        </div>
        <ShareButton url={`${url}/${url02}`} text={description} />
      </main>
    </>
  );
}
