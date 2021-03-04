import Layout from "components/Layout";
import Link from "next/link";

export default function Photos() {
  return (
    <Layout>
      <div className="max-w-screen-lg m-auto">
        <h1 className="text-center border border-pink-500 rounded-lg m-1 p-2 text-pink-500">
          写真集
        </h1>
      </div>
      <div className="grid grid-cols-2 w-11/12 m-auto max-w-screen-lg">
        <div>
          <div className="text-center border border-purple-400 rounded-lg text-purple-500 p-1 mx-1">
            <h3>▼ アニメ</h3>
          </div>
          <Link href="/photos/anime">
            <img
              src="photos/nino.png"
              className="w-screen object-cover h-48 sm:h-72 rounded-lg cursor-pointer duration-300 hover:opacity-70 p-1"
            />
          </Link>
        </div>
        <div>
          <div className="text-center border border-yellow-500 rounded-lg text-yellow-600 p-1 mx-1">
            <h3>▼ ユニーク</h3>
          </div>
          <Link href="/photos">
            <img
              src="photos/fox.png"
              className="w-screen object-cover h-48 sm:h-72 rounded-lg cursor-pointer duration-300 hover:opacity-70 p-1"
            />
          </Link>
        </div>
      </div>
    </Layout>
  );
}
