import { BackButton, TitleH1, TitleH2, DLImage } from "components/UIkit";
import Head from "next/head";

export default function Standard() {
  return (
    <>
      <Head>
        <title>スタンダード</title>
      </Head>
      <main className="max-w-screen-lg m-auto">
        <BackButton link={"/photos"} />
        <TitleH1 text={"スタンダード"} />

        {/* チャイナ服 */}
        <div>
          <TitleH2 text={"チャイナ服"} color={"bg-red-500 text-white"} />
          <ul className="grid grid-cols-2 w-11/12 m-auto ">
            <DLImage photo={"china.png"} photoName={"china.png"} />
            <DLImage photo={"china_02.png"} photoName={"china02.png"} />
          </ul>
          <div className="bg-red-500 p-1.5 w-11/12 m-auto rounded-xl rounded-t-none" />
        </div>
      </main>
    </>
  );
}
