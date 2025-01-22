import Navbar from "./Navbar";
import "./../styles/Cart.css";
import { useCart } from "../Provider/CartProvider";
import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, clearCart } = useCart();
  const [orderSuccess, setOrderSuccess] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const navigate = useNavigate();
  // console.log(cartItems);
  const totalPrice = cartItems?.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      navigate("/"); // Redirect to the products or home page
      return;
    }
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setOrderSuccess(true);
      clearCart();
    }, 1500);
  };

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
          <button
            className="checkout-btn"
            onClick={handleCheckout}
            disabled={isProcessing}
          >
            {isProcessing
              ? "Processing..."
              : cartItems.length === 0
              ? "Add Items to Checkout"
              : "Proceed to Checkout"}
          </button>
        </div>
      </div>
      {/* Order Success Modal */}
      {orderSuccess && (
        <div className="order-success-modal">
          <div className="modal-content">
            <h3>Order Successful!</h3>
            <p>Thank you for your purchase.</p>
            <button
              className="close-btn"
              onClick={() => {
                setOrderSuccess(false);
                toast.success("Your order was successfully processed!", {
                  position: "top-right",
                  autoClose: 3000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                });
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
