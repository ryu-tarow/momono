import { DLButton } from "components/svg";
import { BackButton, TitleH1, TitleH2 } from "components/UIkit";

export default function Unique() {
  const url = "https://msrmmn2.vercel.app";
  return (
    <div className="max-w-screen-lg m-auto">
      <BackButton link={"/photos"} />
      <TitleH1 text={"ユニーク"} />

      <TitleH2 text={"キツネ"} color={"bg-yellow-500 text-white"} />

      <div className="grid grid-cols-2 w-11/12 m-auto">

        <div>
          <DLButton
            photo={`${url}/photos/fox.png`}
            photoName={"fox.png"}
          />
          <img src="fox.png" className="" />
        </div>
      </div>
      <div className="bg-yellow-500 p-1.5 w-11/12 m-auto rounded-xl rounded-t-none" />
    </div>
  );
}
