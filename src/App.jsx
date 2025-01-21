import { useEffect, useState } from "react";
import ProductList from "./components/ProductList";
import { useCart } from "./Provider/CartProvider";
// import Navbar from "./components/Navbar";

const App = () => {
  const [products, setProducts] = useState([]);

  const { addToCart } = useCart();
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.products); // Logs the array of products
        setProducts(data.products); // Set only the array of products
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  return (
    <>
      {/* <Navbar /> */}
      <div style={{ padding: "20px" }}>
        <h2 style={{ textAlign: "center" }}>Features Product </h2>
        <div className="product-grid">
          {products?.length > 0 ? (
            products.map((product) => (
              <ProductList
                key={product.id}
                product={product}
                addToCart={addToCart}
              />
            ))
          ) : (
            <p>Loading products...</p>
          )}
        </div>
      </div>
    </>
  );
};

export default App;
