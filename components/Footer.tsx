import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="text-center list-none bg-gray-600 text-gray-300 text-sm p-5">
        <li>©︎2021 真白桃乃, Inc</li>
        <Link href="/contact">
          <li className="py-1">お問い合わせ</li>
        </Link>
      </div>
    </footer>
  );
}
