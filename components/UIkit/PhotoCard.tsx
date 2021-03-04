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
      <h3 className={`text-center border rounded-lg p-1 mx-1 ${color}`}>
        {text}
      </h3>
      <Link href={url}>
        <img
          src={img}
          className="w-screen object-cover h-48 sm:h-72 rounded-lg cursor-pointer duration-300 hover:opacity-70 p-1"
        />
      </Link>
    </div>
  );
};
