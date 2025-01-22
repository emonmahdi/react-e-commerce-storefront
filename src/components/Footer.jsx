import "./../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* About Section */}
        <div className="footer-section about">
          <h2>About Us</h2>
          <p>
            Welcome to our e-commerce store! We provide the best products at
            affordable prices. Shop with confidence and enjoy a seamless
            shopping experience.
          </p>
        </div>

        {/* Links Section */}
        <div className="footer-section links">
          <h2>Quick Links</h2>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Products</a>
            </li>
            <li>
              <a href="/cart">Cart</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="footer-section contact">
          <h2>Contact Us</h2>
          <p>Email: developeremon1997@gmail.com</p>
          <p>Phone: +88-01908-131513</p>
          <p>
            Address: Chowmatha Barisal, Oposit of Mohila TTC Barisal, Barisal
            Sadar.
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} E-Commerce Store. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
