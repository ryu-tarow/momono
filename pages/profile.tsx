import { TitleH1, TextCategory } from "components/UIkit/index";

export default function Profile() {
  return (
    <>
      <div className="max-w-screen-lg m-auto">
        <TitleH1 text={"プロフィール"} />
        <div className="grid grid-cols-1 sm:grid-cols-2">
          <div className="sm:ml-5">
            <img
              src="profile.png"
              alt="profile_img"
              className="w-11/12 p-2 m-auto rounded-3xl"
            />
          </div>
          <ul className="pt-4 p-2 text-center">
            <TextCategory category={"name"} text={"真白桃乃"} />
            <TextCategory category={"date of birth"} text={"1995年10月6日"} />
            <TextCategory category={"from"} text={"福岡県"} />
            <TextCategory category={"blood type"} text={"AB型"} />
            <TextCategory category={"height"} text={"156cm"} />
            <TextCategory
              category={"office"}
              text={"九州でちゃう！女子編集部"}
            />
          </ul>
        </div>
        <ul className="text-center p-1 w-11/12 m-auto">
          <h3 className="py-1.5 text-center bg-pink-400 text-white rounded-2xl">
            経歴
          </h3>
          <li className="pt-5">
            <h4 className="">九州出ちゃう！研究生</h4>
            <p className="text-gray-500 text-sm">2019年5月27日〜10月1日</p>
          </li>
          <li className="py-3">
            <h4 className="">九州でちゃう！編集部員</h4>
            <p className="text-gray-500 text-sm">2019年10月2日〜現在</p>
          </li>
        </ul>
      </div>
    </>
  );
}
