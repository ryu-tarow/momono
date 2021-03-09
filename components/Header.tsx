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
    <header className="fixed w-screen py-2 bg-pink-300 z-10">
      <div className="h-12 flex justify-between max-w-screen-lg m-auto">
        <Link href="/">
          <div className="pt-3 pl-5 text-white cursor-pointer font-mono">
            ましものほむペッペ
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
              <li className="mx-5 hover:text-pink-200 cursor-pointer duration-300 hover:opacity-80">
                プロフィール
              </li>
            </Link>
            <Link href="/photos">
              <li className="mx-5 hover:text-pink-200 cursor-pointer duration-300 hover:opacity-80">
                写真集
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
                プロフィール
              </li>
            </Link>
            <li
              onClick={onClickShowPhotoCategory}
              className="px-5 py-2 border-t border-white hover:bg-pink-400 duration-300 hover:opacity-80 cursor-pointer"
            >
              写真集
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
              className="mt-2 bg-gray-700 text-xs p-2 hover:bg-pink-500 duration-300 hover:opacity-80 cursor-pointer"
            >
              閉じる
            </div>
          </ul>
        </nav>
      )}
    </header>
  );
}
