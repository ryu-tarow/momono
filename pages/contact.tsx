import { BackButton, TitleH1 } from "components/UIkit/index";

export default function Contact() {
  return (
    <div className="max-w-screen-lg m-auto">
      <BackButton link={"/"} />
      <TitleH1 text={"お問い合わせ"} />
      <p className="text-center text-sm p-2 text-gray-600">準備中</p>
    </div>
  );
}
