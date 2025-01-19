/* eslint-disable react/prop-types */

import ProductCard from "./ProductCard";

const ProductList = ({ products, addToCart }) => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default ProductList;
