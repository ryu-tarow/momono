import {
  BackButton,
  TitleH1,
  TitleH2,
  DLImage,
  ShareButton,
} from "components/UIkit";
import Head from "next/head";

export default function Anime() {
  const url = "https://msrmmn.ml/photos/anime";
  const description = "";
  return (
    <>
      <Head>
        <title>アニメ</title>
      </Head>
      <main className="max-w-screen-lg m-auto">
        <BackButton link={"/photos"} />
        <TitleH1 text={"アニメ"} />

        {/* GANTZ */}
        <div>
          <TitleH2 text={"GANTZ"} color={"bg-gray-600 text-white"} />
          <ul className="grid grid-cols-2 w-11/12 m-auto">
            <DLImage photo={"gantz.png"} photoName={"gantz.png"} />
            <DLImage photo={"gantz_02.png"} photoName={"gantz_02.png"} />
          </ul>
          <div className="bg-gray-600 p-1.5 w-11/12 m-auto rounded-xl rounded-t-none" />
        </div>

        {/* 五等分の花嫁 */}
        <div>
          <TitleH2 text={"五等分の花嫁"} color={"bg-purple-500 text-white"} />
          <ul className="grid grid-cols-2 w-11/12 m-auto">
            <DLImage photo={"nino.png"} photoName={"nino.png"} />
            <DLImage photo={"nino_02.png"} photoName={"nino_02.png"} />
          </ul>
          <div className="bg-purple-500 p-1.5 w-11/12 m-auto rounded-xl rounded-t-none" />
        </div>

        <ShareButton url={url} text={description} />
      </main>
    </>
  );
}
