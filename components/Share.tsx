import {
    TwitterShareButton,
    FacebookShareButton,
    HatenaShareButton,
    TwitterIcon,
    FacebookIcon,
    HatenaIcon,
} from "react-share";

interface Props {
    text: string,
    url: string,
}

export const Share = ({ text, url }: Props) => {
    return (
        <ul className="flex justify-center">
            <li className="m-2">
                <TwitterShareButton url={url} title={text}>
                    <TwitterIcon size={32} round={true} />
                </TwitterShareButton>
            </li>
            <li className="m-2">
                <FacebookShareButton url={url}>
                    <FacebookIcon size={32} round={true} />
                </FacebookShareButton>
            </li>
            <li className="m-2">
                <HatenaShareButton url={url} title={text}>
                    <HatenaIcon size={32} round={true} />
                </HatenaShareButton>
            </li>
        </ul>
    )
}