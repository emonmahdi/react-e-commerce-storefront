import { useState } from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import products from "./data/products";
// import Navbar from "./components/Navbar";

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    setCartItems(
      cartItems.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  return (
    <>
      {/* <Navbar /> */}
      <div style={{ padding: "20px" }}>
        <h1>E-commerce Storefront</h1>
        <ProductList products={products} addToCart={addToCart} />
        <Cart
          cartItems={cartItems}
          removeFromCart={removeFromCart}
          updateQuantity={updateQuantity}
        />
      </div>
    </>
  );
};

export default App;
