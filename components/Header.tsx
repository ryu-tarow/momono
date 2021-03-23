import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [showNav, setShowNav] = useState<boolean>(false);
  const [showPhotoCategory, setShowPhotoCategory] = useState<boolean>(false);

  const onClickShowNav = () => {
    setShowNav(!showNav);
  };
  const onClickShowPhotoCategory = () => {
    setShowPhotoCategory(!showPhotoCategory);
  };

  return (
    <header className="fixed w-screen bg-pink-300 z-10 opacity-95">
      <div className="h-16 flex justify-between max-w-screen-lg m-auto">
        <Link href="/">
          <div className="cursor-pointer">
            <img src="logo.png" className="h-16 ml-2" />
          </div>
        </Link>
        <button onClick={onClickShowNav} className="mr-2">
          {showNav ? (
            <div className="border-white w-12 h-12 border rounded-full text-4xl text-white sm:hidden hover:bg-pink-400 duration-300 hover:opacity-70">
              ×
            </div>
          ) : (
            <div className="border-white w-12 h-12 border rounded-full text-4xl text-white sm:hidden hover:bg-pink-400 duration-300 hover:opacity-70">
              =
            </div>
          )}
        </button>

        {/* ヘッダーに表示される */}
        <nav className="hidden sm:flex py-3 text-white">
          <ul className="flex">
            <Link href="/profile">
              <li className="mx-5 mt-2 hover:text-pink-200 cursor-pointer duration-300 hover:opacity-80">
                <b>プロフィール</b>
              </li>
            </Link>
            <Link href="/photos">
              <li className="mx-5 mt-2 hover:text-pink-200 cursor-pointer duration-300 hover:opacity-80">
                <b>フォトアルバム</b>
              </li>
            </Link>
            {/* <Link href="/contact">
              <li className="ml-5 mr-8 hover:text-pink-200 cursor-pointer duration-300 hover:opacity-80">
                お問い合わせ
              </li>
            </Link> */}
          </ul>
        </nav>
      </div>

      {/* ハンバーガーメニューのクリックで表示される */}
      {showNav && (
        <nav>
          <ul className="mt-2 text-center text-white md:hidden">
            <Link href="/profile">
              <li
                onClick={onClickShowNav}
                className="px-5 py-2 hover:bg-pink-400 duration-300 hover:opacity-80 cursor-pointer"
              >
                <b>プロフィール</b>
              </li>
            </Link>
            <li
              onClick={onClickShowPhotoCategory}
              className="px-5 py-2 border-t border-pink-200 hover:bg-pink-400 duration-300 hover:opacity-80 cursor-pointer"
            >
              <b>フォトアルバム</b>
            </li>
            {showPhotoCategory && (
              <ul className="text-sm">
                {/* <Link href="/photos"><li onClick={onClickShowNav} className="border-b border-pink-200 py-2 hover:bg-pink-400 duration-300 hover:opacity-80 cursor-pointer">カテゴリ一覧</li></Link> */}
                <Link href="/photos/standard">
                  <li
                    onClick={onClickShowNav}
                    className="py-2 hover:bg-pink-400 duration-300 hover:opacity-80 cursor-pointer"
                  >
                    スタンダード
                  </li>
                </Link>
                <Link href="/photos/anime">
                  <li
                    onClick={onClickShowNav}
                    className="py-2 hover:bg-pink-400 duration-300 hover:opacity-80 cursor-pointer"
                  >
                    アニメ
                  </li>
                </Link>
                <Link href="/photos/unique">
                  <li
                    onClick={onClickShowNav}
                    className="py-2 hover:bg-pink-400 duration-300 hover:opacity-80 cursor-pointer"
                  >
                    ユニーク
                  </li>
                </Link>
                <Link href="/photos/culture">
                  <li
                    onClick={onClickShowNav}
                    className="py-2 hover:bg-pink-400 duration-300 hover:opacity-80 cursor-pointer"
                  >
                    カルチャー
                  </li>
                </Link>
              </ul>
            )}
            <Link href="/line">
              <li
                onClick={onClickShowNav}
                className="border-t border-pink-200 px-5 py-2 hover:bg-pink-400 duration-300 hover:opacity-80 cursor-pointer"
              >
                <b>LINEスタンプ</b>
              </li>
            </Link>
            {/* <Link href="/contact">
              <li
                onClick={onClickShowNav}
                className="border-t border-white px-5 py-2 hover:bg-pink-400 duration-300 hover:opacity-80 cursor-pointer"
              >
                お問い合わせ
              </li>
            </Link> */}
            <div
              onClick={onClickShowNav}
              className="w-20 rounded-full my-2 m-auto text-xs p-2 bg-pink-400 hover:bg-pink-600 duration-300 hover:opacity-80 cursor-pointer"
            >
              とじる
            </div>
          </ul>
        </nav>
      )}
    </header>
  );
}
