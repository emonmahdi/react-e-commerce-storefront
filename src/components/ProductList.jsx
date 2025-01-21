/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import "./../styles/ProductList.css";

//
const ProductList = ({ product, addToCart }) => {
  const { id, title, images, price, stock } = product;
  return (
    <div className="product-card">
      <img src={images[0]} alt={title} className="card_product-image" />
      <div className="product-info">
        <Link to={`/product/${id}`} className="title-link">
          <h2 className="product-title">{title}</h2>
        </Link>
        <div className="price_stock">
          <div>
            <p className="product-price">${price}</p>
          </div>
          <div>
            {" "}
            <p className="" style={{ paddingRight: "15px" }}>
              Stock: <span style={{ color: "green" }}>{stock}</span>
            </p>
          </div>
        </div>

        <button onClick={() => addToCart(product)} className="addToCartBtn">
          Add To Cart
        </button>
        {/* <p className="product-description">{description}</p> */}
      </div>
    </div>
  );
};

export default ProductList;
