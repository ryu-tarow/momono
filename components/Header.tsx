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
        <Link href="/"><div className="pt-3 pl-1 text-white cursor-pointer">MOMONO</div></Link>
        <button onClick={onClickShowNav}>
          {showNav ? (
            <div className="border-white w-12 h-12 border rounded-full text-4xl text-white sm:hidden">
              ×
            </div>
          ) : (
            <div className="border-white w-12 h-12 border rounded-full text-4xl text-white sm:hidden">
              =
            </div>
          )}
        </button>
        <nav className="hidden sm:flex py-3 text-white">
          <ul className="flex">
            <Link href="/profile">
              <li className="mx-5 hover:text-pink-200 cursor-pointer">
                プロフィール
              </li>
            </Link>
            <Link href="/photos">
              <li className="mx-5 hover:text-pink-200 cursor-pointer">
                写真集
              </li>
            </Link>
            <Link href="/">
              <li className="mx-5 hover:text-pink-200 cursor-pointer">
                お問い合わせ
              </li>
            </Link>
          </ul>
        </nav>
      </div>
      {showNav && (
        <nav>
          <ul className="mt-2 text-center text-white md:hidden">
            <Link href="/profile">
              <li className="px-5 border-b py-2 border-white hover:bg-pink-500">
                プロフィール
              </li>
            </Link>
            <Link href="/photos">
              <li className="px-5 py-2 border-b border-white hover:bg-pink-500">
                写真集
              </li>
            </Link>
            <Link href="/">
              <li className="px-5 py-2 hover:bg-pink-500">お問い合わせ</li>
            </Link>
          </ul>
        </nav>
      )}
    </header>
  );
}
