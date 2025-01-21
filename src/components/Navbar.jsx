import { useState } from "react";
import { Link } from "react-router-dom";
import { BsCart } from "react-icons/bs";
import "./../styles/Navbar.css";
import { useCart } from "../Provider/CartProvider";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { cartItems } = useCart();
  console.log(cartItems);

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>E-Commerce Store</h1>
      </div>
      <button className="navbar-toggle" onClick={toggleMenu}>
        {isMenuOpen ? "✖" : "☰"}
      </button>
      <ul className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
        <li>
          <Link to="/" onClick={() => setIsMenuOpen(false)}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/" onClick={() => setIsMenuOpen(false)}>
            Products
          </Link>
        </li>
        <li>
          <Link to="/cart" onClick={() => setIsMenuOpen(false)}>
            <BsCart /> {totalItems}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
