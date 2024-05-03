import { useParams } from "react-router-dom";
import Layout from "../components/Layout";
export function AdvertPage() {
  const params = useParams();
  console.log(params);

  return (
    <Layout>
      {" "}
      <div>New add</div>
    </Layout>
  );
}

export default AdvertPage;
