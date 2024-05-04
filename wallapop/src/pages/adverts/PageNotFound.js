import Layout from "../../components/Layout";
import { Navigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { Button } from "../../components/Button";
function PageNotFound() {
  const navigate = Navigate();
  const location = useLocation();
  const [error, setError] = useState(null);

  const resetError = () => {
    setError(null);
    navigate("/v1/adverts");
    const to = location.state?.from || "/";
    navigate(to, { replace: true });
  };

  return (
    <Layout>
      <div>Error 404: This page does not exist any more</div>
      <Button onclick={resetError}>Come back</Button>
    </Layout>
  );
}

export default PageNotFound;
