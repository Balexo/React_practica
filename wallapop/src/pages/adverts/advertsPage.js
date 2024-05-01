import styles from "./advertsPage.module.css";
import { getAdverts } from "../service";
import { useState, useEffect } from "react";
import { logout } from "../service";
import { Button } from "../../components/Button";
import Layout from "../../components/Layout";

function AdvertsPage({ onLogout, isLogged }) {
  const [adverts, setAdverts] = useState([]);

  useEffect(() => {
    getAdverts().then((adverts) => setAdverts(adverts));
  }, []);

  function tagsAdd(tagsList) {
    const tags = tagsList.map((tag) => {
      return `${tag}`;
    });
    return tags.join(" ");
  }
  return (
    <Layout onLogout={onLogout} isLogged={isLogged}>
      <div>
        <ul className={styles.advertsList}>
          {adverts.map((add) => (
            <li key={add.id}>
              <ul>
                <li>{add.name}</li>
                <li>Estado:{add.sale ? "En venta" : "compra"}</li>
                <li>Precio: {add.price}</li>
                <li>Categoria:{tagsAdd(add.tags)} </li>
                <li>Photo:{add.photo}</li>
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}

export default AdvertsPage;
