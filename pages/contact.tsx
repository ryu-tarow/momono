import { BackButton, TitleH1 } from "components/UIkit/index";

export default function Contact() {
  return (
    <div className="max-w-screen-lg m-auto">
      <BackButton link={"/"} />
      <TitleH1 text={"お問い合わせ"} />
    </div>
  );
}
