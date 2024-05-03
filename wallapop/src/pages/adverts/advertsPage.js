import styles from "./advertsPage.module.css";
import { getAdverts } from "../service";
import { useState, useEffect } from "react";
import { Button } from "../../components/Button";
import Layout from "../../components/Layout";
import Advert from "../../components/Advert";

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

  function tagsAdd(tagsList) {
    const tags = tagsList.map((tag) => {
      return `${tag}`;
    });
    return tags.join(" ");
  }

  return (
    <Layout title="All adverts">
      <div className="advertsPage">
        {adverts.length > 0 ? (
          <ul className={styles.advertsList}>
            {adverts.map((add) => (
              <Advert {...add}></Advert>
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
