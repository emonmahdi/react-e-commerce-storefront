import { useCart } from "../Provider/CartProvider";
import Navbar from "./Navbar";

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();
  console.log(cartItems);
  const totalPrice = cartItems?.reduce(
    (total, item) => total + item?.price * item?.quantity,
    0
  );

  return (
    <>
      <Navbar />

      <div style={{ padding: "20px" }}>
        <h2>Shopping Cart</h2>
        {cartItems?.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div>
            {cartItems?.length > 0 &&
              cartItems?.map((item) => (
                <div
                  key={item?.id}
                  style={{
                    borderBottom: "1px solid #ccc",
                    marginBottom: "10px",
                    paddingBottom: "10px",
                  }}
                >
                  <h4>{item?.name}</h4>
                  <p>Price: ${item?.price}</p>
                  <p>
                    Quantity:
                    <input
                      type="number"
                      value={item?.quantity}
                      min="1"
                      onChange={(e) =>
                        updateQuantity(item?.id, parseInt(e.target.value))
                      }
                      style={{ width: "50px", marginLeft: "5px" }}
                    />
                  </p>
                  <button onClick={() => removeFromCart(item?.id)}>
                    Remove
                  </button>
                </div>
              ))}
            <h3>Total: ${totalPrice?.toFixed(2)}</h3>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
