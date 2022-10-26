import CheckIcon from "assets/icons/check.svg";

export const ProductCard = ({ item }) => {
  return (
    // ----- card container -------
    <div className="card" key={item.id}>
      {/* ------- card image ------- */}
      <div
        className="card-cover"
        style={{
          background: `url(${item.cover})`,
        }}
      >
        {/* ------- discount span ------ */}
        {item.discount && <span className="discount">{item.discount}%</span>}
        {/* -------- sizes --------- */}
        <div className="sizes">
          {item.sizes.map((size, index) => (
            <span key={index}>{size}</span>
          ))}
        </div>
      </div>
      {/* ------ cart content ------- */}
      <div className="card-content">
        <div className="card-header">
          <span className="title">{item.title}</span>
          <span className="price">from {item.price}&euro;</span>
        </div>
        <ul className="card-properties">
          {item.properties.map((property, index) => (
            <li key={index}>
              <img src={CheckIcon} alt="check" />
              {property}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
