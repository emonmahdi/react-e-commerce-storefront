/* eslint-disable react/prop-types */

const ProductCard = ({ product, addToCart }) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "10px",
        margin: "10px",
        textAlign: "center",
      }}
    >
      <img
        src={product?.image}
        alt={product?.name}
        style={{ width: "100px", height: "100px" }}
      />
      <h3>{product?.name}</h3>
      <p>{product?.description}</p>
      <p>${product?.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
