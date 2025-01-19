import { useState } from "react";
import { Link } from "react-router-dom";
import "./../styles/Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
          <Link to="/" onClick={() => setIsMenuOpen(false)}>
            Cart
          </Link>
        </li>
        <li>
          <Link to="/" onClick={() => setIsMenuOpen(false)}>
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
