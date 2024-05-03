import "./Advert.css";

const Advert = ({ id, name, price, sale, tags, photo }) => {
  return (
    <ul className="advert-item" key={id}>
      <div className="advert-details">
        <p className="advert-name">{name}</p>
        <p className="advert-photo">
          Foto: {photo && <img src={photo} alt="Advert" />}
        </p>
        <p className="advert-state">Estado: {sale ? "En venta" : "Compra"}</p>
        <p className="advert-price">Precio: {price}</p>
        <p className="advert-tags">
          Categorías:{" "}
          {tags.map((tag, index) => (
            <span key={index}>{tag}</span>
          ))}
        </p>
      </div>
    </ul>
  );
};

export default Advert;
