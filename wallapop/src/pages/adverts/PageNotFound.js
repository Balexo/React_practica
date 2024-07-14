import Layout from "../../components/Layout";
import { Button } from "../../components/Button";
import { useDispatch } from "react-redux";
import { navigateBack } from "../../store/actions";

function PageNotFound() {
  const dispatch = useDispatch();

  const goBack = () => {
    dispatch(navigateBack());
  };

  return (
    <Layout>
      <div>Error 404: This page does not exist any more</div>
      <Button onClick={goBack}> Go back</Button>
    </Layout>
  );
}

export default PageNotFound;
