import { useNavigate, useParams } from "react-router-dom";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";

import "./../styles/ProductDetails.css";
import { useCart } from "../Provider/CartProvider";

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    // Fetch single product details by ID
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error("Error fetching product:", error));
  }, [id]);

  return (
    <>
      <Navbar />
      <div className="product-details-container">
        <button onClick={() => navigate(-1)} className="back-button">
          ← Go Back
        </button>
        {product ? (
          <div className="product-details-content">
            <div className="product-image-section">
              <img
                src={product?.thumbnail}
                alt={product?.title}
                className="single-product-image"
              />
              <div className="product-gallery">
                {product?.images?.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${product?.title} ${index + 1}`}
                    className="gallery-image"
                  />
                ))}
              </div>
            </div>
            <div className="product-info-section">
              <h1 className="single-product-title">{product?.title}</h1>
              <p className="product-description">{product?.description}</p>
              <p className="product-brand">
                <span style={{ fontWeight: "bold" }}>Brand: </span>{" "}
                <span>{product?.brand}</span>
              </p>
              <p className="product-category">
                <span style={{ fontWeight: "bold" }}>Category: </span>{" "}
                <span>{product?.category}</span>
              </p>
              <p className="product-rating">
                <span style={{ fontWeight: "bold" }}>Rating: </span>{" "}
                <span>{product?.rating} / 5</span>
              </p>
              <p className="product-price">
                <span style={{ fontWeight: "bold" }}>Price: </span>{" "}
                <span>${product?.price?.toFixed(2)}</span>
              </p>
              <p className="product-discount">
                <span style={{ fontWeight: "bold" }}>Discount: </span>{" "}
                <span>{product?.discountPercentage}% off</span>
              </p>
              <div className="product-actions">
                <button
                  className="add-to-cart-button"
                  onClick={() => {
                    addToCart(product);
                  }}
                >
                  Add to Cart
                </button>
                <button
                  className="go-to-cart-button"
                  onClick={() => {
                    navigate("/cart");
                  }}
                >
                  Go to Cart
                </button>
              </div>
            </div>
          </div>
        ) : (
          <p className="loading-text">Loading product details...</p>
        )}
      </div>
    </>
  );
};

export default ProductDetails;
