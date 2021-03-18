import Link from "next/link";

interface CardProps {
  text: string;
  color: string;
  url: string;
  img: string;
}

export const PhotoCard = ({ text, color, url, img }: CardProps) => {
  return (
    <div>
      <h2
        className={`text-center border rounded-2xl rounded-b-none p-1 mx-1 sm:py-2 text-sm sm:text-base ${color}`}
      >
        <b>{text}</b>
      </h2>
      <Link href={url}>
        <img
          src={img}
          className={`w-screen object-cover rounded-2xl rounded-t-none cursor-pointer duration-300 hover:opacity-70 px-1 pb-1 ${color}`}
        />
      </Link>
    </div>
  );
};
