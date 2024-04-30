//import { useState } from "react";
//import { getAdverts } from "../service";
import styles from "./advertsPage.module.css";

const adds = [
  {
    id: "60ca495b-ece0-49da-8a34-34cebc053938",
    createdAt: "2024-04-29T13:07:50.000Z",
    name: "mesa",
    sale: true,
    price: 25,
    tags: ["lifestyle"],
    photo: null,
  },
  {
    id: "3a84f308-dd51-4816-805f-14bdbc746064",
    createdAt: "2024-04-29T13:08:46.000Z",
    name: "silla",
    sale: true,
    price: 45,
    tags: ["lifestyle"],
    photo: null,
  },
];
function AdvertsPage() {
  //const [adverts, setAdverts] = useState([]);

  //getAdverts().then((adverts) => console.log(adverts));

  function tagsAdd(tagsList) {
    const tags = tagsList.map((tag) => {
      return `${tag}`;
    });
    return tags.join(" ");
  }
  return (
    <div>
      <ul className={styles.advertsList}>
        {adds.map((adds) => (
          <li key={adds.id}>
            <ul>
              <li>{adds.name}</li>
              <li>Estado:{adds.sale ? "En venta" : "compra"}</li>
              <li>Precio: {adds.price}</li>
              <li>Categoria:{tagsAdd(adds.tags)} </li>
              <li>Photo:{adds.photo}</li>
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdvertsPage;
