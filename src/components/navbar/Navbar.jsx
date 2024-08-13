import "./Navbar.css";
import logo from "../assets/logo.png";
import card_icon from "../assets/cart_icon.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="shopper logo" />
        <p>SHOPPER</p>
      </div>
      <ul className="nav-menu">
        <li>
          Shop <hr />
        </li>
        <li>Men</li>
        <li>Women</li>
        <li>Kids</li>
      </ul>
      <div className="nav-login-cart">
        <button>Login</button>

        <div className="nav-shopping-cart">
          <figure>
            <img src={card_icon} alt="Card Icon" />
          </figure>
          <div className="nav-cart-count">0</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
