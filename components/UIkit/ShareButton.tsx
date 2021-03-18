import {
  TwitterShareButton,
  FacebookShareButton,
  HatenaShareButton,
  LineShareButton,
  TwitterIcon,
  FacebookIcon,
  HatenaIcon,
  LineIcon,
} from "react-share";

interface Props {
  text: string;
  url: string;
}

export const ShareButton = ({ text, url }: Props) => {
  return (
    <ul className="flex justify-center">
      <li className="my-2 mx-1 duration-300 hover:opacity-70">
        <TwitterShareButton url={url} title={text}>
          <TwitterIcon size={32} round={true} />
        </TwitterShareButton>
      </li>
      <li className="my-2 mx-1 duration-300 hover:opacity-70">
        <FacebookShareButton url={url}>
          <FacebookIcon size={32} round={true} />
        </FacebookShareButton>
      </li>
      <li className="my-2 mx-1 duration-300 hover:opacity-70">
        <HatenaShareButton url={url} title={text}>
          <HatenaIcon size={32} round={true} />
        </HatenaShareButton>
      </li>
      <li className="my-2 mx-1 duration-300 hover:opacity-70">
        <LineShareButton url={url} title={text}>
          <LineIcon size={32} round={true} />
        </LineShareButton>
      </li>
    </ul>
  );
};
