import { BackButton, TitleH1, TitleH2 } from "components/UIkit";
import { DLButton } from "components/svg";


export default function Anime() {
  const url = "https://msrmmn2.vercel.app";
  return (
    <div className="max-w-screen-lg m-auto">
      <BackButton link={"/photos"} />
      <TitleH1 text={"アニメ"} />

      <TitleH2 text={"GANTZ"} color={"bg-gray-600 text-white"} />
      <div className="grid grid-cols-2 w-11/12 m-auto">
        <DLButton
          photo={`${url}/photos/gantz.png`}
          photoName={"gantz.png"}
        />
        <img src="gantz.png" className="" />
      </div>
      <div className="bg-gray-600 p-1.5 w-11/12 m-auto rounded-xl rounded-t-none" />

      <TitleH2 text={"五等分の花嫁"} color={"bg-purple-500 text-white"} />
      <div className="grid grid-cols-2 w-11/12 m-auto">
        <DLButton photo={`${url}/photos/nino.png`} photoName={"nino.png"} />
        <img src="nino.png" className="" />
      </div>
      <div className="bg-purple-500 p-1.5 w-11/12 m-auto rounded-xl rounded-t-none" />
    </div>
  );
}
