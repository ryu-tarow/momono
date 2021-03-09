import { BackButton, PhotoCard, TitleH1 } from "components/UIkit/index";
import Head from "next/head";

export default function Photos() {
  return (
    <>
      <Head>
        <title>写真集</title>
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
      </main>
    </>
  );
}
