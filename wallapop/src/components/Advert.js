import "./Advert.css";

const Advert = ({ id, name, price, sale, tags, photo }) => {
  return (
    <li className="advert-id">
      <ul key={id}>
        <li className="advert-name">{name}</li>
        <li className="advert-photo">
          Foto:{photo && <img src={photo} alt="Advert" />}
        </li>
        <li className="advert-state">Estado:{sale ? "En venta" : "compra"}</li>
        <li className="advert-price">Precio: {price}</li>
        <li className="advert-tags">
          Categoria:{tags.join(" - ")}
          {" - "}
        </li>
      </ul>
    </li>
  );
};

export default Advert;
