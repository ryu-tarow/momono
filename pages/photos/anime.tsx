import { TitleH1, TitleH2 } from "components/UIkit/index";

export default function Anime() {
  return (
    <div className="max-w-screen-lg m-auto">
      <TitleH1 text={"アニメ"} />
      <TitleH2 text={"GANTZ"} color={"bg-gray-600 text-white"} />
      <div className="grid grid-cols-2 w-11/12 m-auto">
        <img src="gantz.png" className="" />
      </div>
      <TitleH2 text={"五等分の花嫁"} color={"bg-purple-500 text-white"} />
      <div className="grid grid-cols-2 w-11/12 m-auto">
        <img src="nino.png" className="" />
      </div>
    </div>
  );
}
