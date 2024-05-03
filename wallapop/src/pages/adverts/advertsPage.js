import styles from "./advertsPage.module.css";
import { getAdverts } from "../service";
import { useState, useEffect } from "react";
import { Button } from "../../components/Button";
import Layout from "../../components/Layout";
import Advert from "../../components/Advert";
import { Link } from "react-router-dom";

function AdvertsPage() {
  const [adverts, setAdverts] = useState([]);

  useEffect(() => {
    getAdverts().then((adverts) => setAdverts(adverts));
  }, []);

  function EmptyAdverts() {
    return (
      <div className="AdvertsPage-empty">
        There is no add to show.
        <Button>Create an advert</Button>
      </div>
    );
  }

  return (
    <Layout title="All adverts">
      <div className="advertsPage">
        {adverts.length > 0 ? (
          <ul className={styles.advertsList}>
            {adverts.map((advert) => (
              <li key={advert.id}>
                <Link to={`/v1/adverts/${advert.id}`}>
                  <Advert {...advert} />
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <EmptyAdverts />
        )}
      </div>
    </Layout>
  );
}

export default AdvertsPage;
