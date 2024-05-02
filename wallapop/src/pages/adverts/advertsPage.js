import styles from "./advertsPage.module.css";
import { getAdverts } from "../service";
import { useState, useEffect } from "react";
import { logout } from "../service";
import { Button } from "../../components/Button";
import Layout from "../../components/Layout";

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
              <li className="advert-id" key={add.id}>
                <ul>
                  <li className="advert-name">{add.name}</li>
                  <li className="advert-state">
                    Estado:{add.sale ? "En venta" : "compra"}
                  </li>
                  <li className="advert-price">Precio: {add.price}</li>
                  <li className="advert-tags">
                    Categoria:{tagsAdd(add.tags)}{" "}
                  </li>
                  <li className="advert-photo">Photo:{add.photo}</li>
                </ul>
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
