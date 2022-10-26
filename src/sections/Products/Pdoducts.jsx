import { ProductCard } from "componenets/ProductCard";
import { productsList } from "constants";

export const Products = () => {
  return (
    // ----- section container ----- 
    <div className="products-section">
      {/* ------- section title ------  */}
      <div className="products-text-content">
        <h2>
          <span className="granate">Explore our</span>
          <span className="vermell">standing desks</span>
          <span className="dashed-border"></span>
        </h2>
      </div>
      {/* -------- products list ---------  */}
      <div className="products-container">
        {productsList.map((product) => <ProductCard item={product} key={product.id}/> )}
      </div>
    </div>
  );
};
