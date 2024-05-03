import { useParams } from "react-router-dom";
import Layout from "../components/Layout";
import { useState, useEffect } from "react";
import { Button } from "../components/Button";
import { getUniqueAdvert } from "./service";
import Advert from "../components/Advert";

export function AdvertPage() {
  const params = useParams();

  const [advert, setAdvert] = useState(null);

  useEffect(() => {
    async function getAdvert() {
      const advert = await getUniqueAdvert(params.advertId);
      setAdvert(advert);
    }
    getAdvert();
  }, [params.advertId]);

  return (
    <Layout title="Advert detail">
      {advert && (
        <Advert
          id={advert.id}
          photo={advert.photo}
          name={advert.name}
          price={advert.price}
          tags={advert.tags}
        />
      )}
    </Layout>
  );
}

export default AdvertPage;
