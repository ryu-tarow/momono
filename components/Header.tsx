import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [showNav, setShowNav] = useState<boolean>(false);
  const onClickShowNav = () => {
    setShowNav(!showNav);
  };
  return (
    <header className="fixed w-screen px-2 py-2 bg-pink-300">
      <div className="h-12 flex justify-between max-w-screen-lg m-auto">
        <Link href="/">
          <div className="pt-3 pl-3 text-white cursor-pointer">
            MOMONO（仮）
          </div>
        </Link>
        <button onClick={onClickShowNav}>
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
            <Link href="/contact">
              <li className="ml-5 mr-8 hover:text-pink-200 cursor-pointer duration-300 hover:opacity-80">
                お問い合わせ
              </li>
            </Link>
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
                className="px-5 border-b py-2 border-white hover:bg-pink-400 duration-300 hover:opacity-80 cursor-pointer"
              >
                プロフィール
              </li>
            </Link>
            <Link href="/photos">
              <li
                onClick={onClickShowNav}
                className="px-5 py-2 border-b border-white hover:bg-pink-400 duration-300 hover:opacity-80 cursor-pointer"
              >
                写真集
              </li>
            </Link>
            <Link href="/contact">
              <li
                onClick={onClickShowNav}
                className="px-5 py-2 hover:bg-pink-400 duration-300 hover:opacity-80 cursor-pointer"
              >
                お問い合わせ
              </li>
            </Link>
            <div
              onClick={onClickShowNav}
              className="mt-2 bg-gray-700 rounded-full text-xs p-2 hover:bg-pink-500 duration-300 hover:opacity-80 cursor-pointer"
            >
              閉じる
            </div>
          </ul>
        </nav>
      )}
    </header>
  );
}
