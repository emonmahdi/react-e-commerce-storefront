import { useEffect, useState } from "react";
import ProductList from "./components/ProductList";
// import Cart from "./components/Cart";
import { useCart } from "./Provider/CartProvider";
// import products from "./data/products";
// import Navbar from "./components/Navbar";

const App = () => {
  const [products, setProducts] = useState([]);
  // const [cartItems, setCartItems] = useState([]);

  // const addToCart = (product) => {
  //   const existingItem = cartItems.find((item) => item.id === product.id);
  //   if (existingItem) {
  //     setCartItems(
  //       cartItems.map((item) =>
  //         item.id === product.id
  //           ? { ...item, quantity: item.quantity + 1 }
  //           : item
  //       )
  //     );
  //   } else {
  //     setCartItems([...cartItems, { ...product, quantity: 1 }]);
  //   }
  // };

  // const removeFromCart = (id) => {
  //   setCartItems(cartItems.filter((item) => item.id !== id));
  // };

  // const updateQuantity = (id, quantity) => {
  //   setCartItems(
  //     cartItems.map((item) => (item.id === id ? { ...item, quantity } : item))
  //   );
  // };

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

        {/* <Cart
          cartItems={cartItems}
          removeFromCart={removeFromCart}
          updateQuantity={updateQuantity}
        /> */}
      </div>
    </>
  );
};

export default App;
