import Link from "next/link";

interface LinkProps {
  link: string;
}

export const BackButton = ({ link }: LinkProps) => {
  return (
    <div className="mt-3 ml-2">
      <div className="w-20 p-2 rounded-full cursor-pointer sm:hidden">
        <Link href={link}>
          <div className="text-sm text-center text-pink-400 hover:text-pink-200 duration-300 hover:opacity-80">
            ＜ 戻る
          </div>
        </Link>
      </div>
    </div>
  );
};
