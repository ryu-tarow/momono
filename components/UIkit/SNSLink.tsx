interface SNSLinkProps {
  img: string;
  link: string;
  color: string;
}

export const SNSLink = ({ img, link, color }: SNSLinkProps) => {
  return (
    <li
      className={`duration-300 hover:opacity-70 w-1/3 py-2 my-1 text-center rounded-md ${color}`}
    >
      <a href={link}>
        <img src={img} className="m-auto w-8 h-auto" />
      </a>
    </li>
  );
};
