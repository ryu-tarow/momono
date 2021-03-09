import { BackButton, TitleH1, TitleH2, DLImage } from "components/UIkit";

export default function Culture() {
  return (
    <div className="max-w-screen-lg m-auto">
      <BackButton link={"/photos"} />
      <TitleH1 text={"カルチャー"} />

      {/* 着物 */}
      <div>
        <TitleH2 text={"着物"} color={"bg-purple-500 text-white"} />
        <ul className="grid grid-cols-2 sm:grid-cols-3 w-11/12 m-auto bg-purple-300">
          <DLImage photo={"kimono.png"} photoName={"kimono.png"} />
          <DLImage photo={"kimono_02.png"} photoName={"kimono_02.png"} />
          <DLImage photo={"kimono_03.png"} photoName={"kimono_03.png"} />
          <DLImage photo={"kimono_04.png"} photoName={"kimono_04.png"} />
          <DLImage photo={"kimono_05.png"} photoName={"kimono_05.png"} />
          <DLImage photo={"kimono_06.png"} photoName={"kimono_06.png"} />
          <DLImage photo={"kimono_07.png"} photoName={"kimono_07.png"} />
          <DLImage photo={"kimono_08.png"} photoName={"kimono_08.png"} />
        </ul>
        <div className="bg-purple-500 p-1.5 w-11/12 m-auto rounded-xl rounded-t-none" />
      </div>
      <br />
    </div>
  );
}
