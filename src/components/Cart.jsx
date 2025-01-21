import Navbar from "./Navbar";
import "./../styles/Cart.css";
import { useCart } from "../Provider/CartProvider";
const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();
  console.log(cartItems);
  const totalPrice = cartItems?.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <>
      <Navbar />
      <div className="cart-container">
        <h2 className="cart-heading">Your Shopping Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty. Start shopping!</p>
        ) : (
          <div className="cart-items-list">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img
                  src={item?.images[0]}
                  alt={item.title}
                  className="cart-item-img"
                />
                <div className="cart-item-details">
                  <h4 className="cart-item-name">{item?.title}</h4>
                  <p className="cart-item-price">${item?.price}</p>
                  <div className="cart-item-quantity">
                    <label>Quantity:</label>
                    <input
                      type="number"
                      value={item.quantity}
                      min="1"
                      onChange={(e) =>
                        updateQuantity(item.id, parseInt(e.target.value, 10))
                      }
                    />
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="remove-btn"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
        <div className="cart-summary">
          <h3>Total: ${totalPrice.toFixed(2)}</h3>
          <button className="checkout-btn">Proceed to Checkout</button>
        </div>
      </div>
    </>
  );
};

export default Cart;
