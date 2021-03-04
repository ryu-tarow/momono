import Layout from "components/Layout";
import { TitleH1 } from "components/UIkit/index";

export default function Anime() {
  return (
    <Layout>
      <div className="max-w-screen-lg m-auto">
        <TitleH1 text={"アニメ"} />
      </div>
    </Layout>
  );
}
