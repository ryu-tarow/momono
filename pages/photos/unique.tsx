import { BackButton, TitleH1, TitleH2, DLImage } from "components/UIkit";

export default function Unique() {
  return (
    <div className="max-w-screen-lg m-auto">
      <BackButton link={"/photos"} />
      <TitleH1 text={"ユニーク"} />

      {/* キツネ */}
      <div>
        <TitleH2 text={"キツネ"} color={"bg-yellow-500 text-white"} />
        <ul className="grid grid-cols-2 w-11/12 m-auto">
          <DLImage photo={"fox.png"} photoName={"fox.png"} />
          <DLImage photo={"fox_02.png"} photoName={"fox_02.png"} />
        </ul>
        <div className="bg-yellow-500 p-1.5 w-11/12 m-auto rounded-xl rounded-t-none" />
      </div>
    </div>
  );
}
