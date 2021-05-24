import { TitleH1 } from "components/UIkit";
import { useAuthentication } from "hooks/authentication";

export default function Diary() {
  const { user } = useAuthentication();
  return (
    <>
      
      <TitleH1 text={"日記"} />
      <div className="m-auto w-11/12 max-w-screen-lg">
        <div className="p-2 border border-pink-300 m-1 my-2 rounded-md">
          <div className="flex">
            <h2 className="text-lg px-1.5">
              <b>わくわくだ</b>
            </h2>
            <p className="pt-1.5 text-sm text-gray-400">2021.03.29</p>
          </div>
          <p className="px-1">今日は楽しい1日だったましも</p>
        </div>
        {/* <div className="px-2 py-1 border-b mx-2 my-1">
          <p className="px-2 text-sm">山田</p>
          <div className="text-xs p-0.5 flex">
            <p className="p-1 text-sm">応援してます！</p>
          </div>
        </div>
              <div className="">
                  <div className="flex">
          <input
            placeholder="名前"
            type="text"
            className="w-20 border-b text-sm px-3 py-1 mb-1"
                  />
                  <p className="text-xs text-gray-400 px-2 pt-1.5">ID: {user?.uid || "読み込み中"}</p>
                  </div>
          <div className="flex">
            <input placeholder="コメント" className="w-3/4 text-sm px-2 py-2" />
            <div className="text-center py-1 px-4 m-1 border bg-gray-200 rounded-full">
              送信
            </div>
          </div>
        </div>
        <div className="bg-gray-500 text-white text-xs text-center p-2 rounded-full">
          ▲コメントを閉じる
        </div> */}
      </div>
    </>
  );
}
