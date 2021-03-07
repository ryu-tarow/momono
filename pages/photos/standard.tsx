import { DLButton } from "components/svg";
import { BackButton, TitleH1, TitleH2 } from "components/UIkit";

export default function Standard() {
  const url = "https://msrmmn2.vercel.app";
  return (
    <div className="max-w-screen-lg m-auto">
      <BackButton link={"/photos"} />
      <TitleH1 text={"スタンダード"} />

      <TitleH2 text={"チャイナ服"} color={"bg-red-500 text-white"} />

      <div className="grid grid-cols-2 w-11/12 m-auto">

        <div>
          <DLButton
            photo={`${url}/photos/china.png`}
            photoName={"china.png"}
          />
          <img src="china.png" className="" />
        </div>

        <div>
          <DLButton
            photo={`${url}/photos/china_02.png`}
            photoName={"china02.png"}
          />
          <img src="china_02.png" className="" />
        </div>

      </div>

      <div className="bg-red-500 p-1.5 w-11/12 m-auto rounded-xl rounded-t-none" />
      <TitleH2 text={"メイド"} color={"bg-pink-400 text-white"} />
      <div className="grid grid-cols-2 w-11/12 m-auto">
        <img src="" className="" />
      </div>
      <div className="bg-pink-400 p-1.5 w-11/12 m-auto rounded-xl rounded-t-none" />
    </div>
  );
}
