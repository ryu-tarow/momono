import Layout from "components/Layout";

export default function Profile() {
  return (
      <Layout>
          <div className="max-w-screen-lg m-auto">
      <h1 className="text-center border border-pink-500 rounded-lg m-1 p-2 text-pink-500">
        プロフィール
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2">
        <div className="m-auto">
          <img
            src="momono.png"
            alt="profile_img"
            className="w-11/12 m-auto px-1 rounded-lg"
          />
        </div>
        <ul className="pt-4 p-2 text-center">
          <li className="text-xs text-gray-400">name</li>
          <p className="p-2">真白桃乃</p>
          <li className="text-xs text-gray-400">date of birth</li>
          <p className="p-2">1995年10月6日</p>
          <li className="text-xs text-gray-400">from</li>
          <p className="p-2">福岡県</p>
          <li className="text-xs text-gray-400">blood type</li>
          <p className="p-2">AB型</p>
          <li className="text-xs text-gray-400">height</li>
          <p className="p-2">156cm</p>
          <li className="text-xs text-gray-400">office</li>
          <p className="p-2">九州でちゃう！女子編集部</p>
        </ul>
      </div>
      <ul className="text-center p-1">
        <h3 className="py-1 text-center bg-pink-400 text-white rounded-lg">経歴</h3>
        <li className="pt-5">
          <div className="">九州出ちゃう！研究生</div>
          <p className="text-gray-500 text-sm">2019年5月27日〜10月1日</p>
        </li>
        <li className="py-3">
          <div className="">九州でちゃう！編集部員</div>
          <p className="text-gray-500 text-sm">2019年10月2日〜現在</p>
        </li>
              </ul>
              </div>
    </Layout>
  );
}
