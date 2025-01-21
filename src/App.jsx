import { useEffect, useState } from "react";
import ProductList from "./components/ProductList";
import { useCart } from "./Provider/CartProvider";
import Loading from "./shared/Loading";
// import Navbar from "./components/Navbar";

const App = () => {
  const [products, setProducts] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState([]);
  const [showAll, setShowAll] = useState(false);

  const { addToCart } = useCart();

  const getRandomProduct = (productArray, count) => {
    const shuffled = productArray.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.products); // Logs the array of products
        const fetchedProduct = data.products;
        setProducts(fetchedProduct); // Set only the array of products
        setVisibleProducts(getRandomProduct(fetchedProduct, 12));
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  // Handle "View All Products" button click
  const handleViewAll = () => {
    setShowAll(true); // Show all products
    setVisibleProducts(products); // Set all products to be visible
  };

  return (
    <>
      {/* <Navbar /> */}
      <div style={{ padding: "20px" }}>
        <h2 style={{ textAlign: "center" }}>Features Product </h2>
        <div className="product-grid">
          {visibleProducts?.length > 0 ? (
            visibleProducts.map((product) => (
              <ProductList
                key={product.id}
                product={product}
                addToCart={addToCart}
              />
            ))
          ) : (
            // <p>Loading products...</p>
            <Loading />
          )}
        </div>
        {!showAll && (
          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <button
              onClick={handleViewAll}
              style={{
                padding: "10px 20px",
                backgroundColor: "#007bff",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              View All Products
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default App;
