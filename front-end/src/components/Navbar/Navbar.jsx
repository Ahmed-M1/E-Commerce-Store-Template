import { CiShoppingCart, CiUser, CiSearch } from "react-icons/ci";
import { useContext, useState } from "react";
import { CartContext } from "../../context/cart";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import Cart from "../Cart/Cart";
import Login from "../Login/Login";
export default function Navbar() {
  const userName = "Login / Sign Up"; // This can be replaced with a dynamic value from your state or props
  const { cartItems, showModal, toggle } = useContext(CartContext);
  const [toggleLogin, setToggleLogin] = useState(false);
  function login_modal() {
    setToggleLogin((prev) => !prev);
  }
  return (
    <header>
      <nav className="navbar">
        <div className="upper-navbar">
          <div className="logo">
            <a href="/">
              <img src={logo} alt="Logo" />
              <span>Decoràyte</span>
            </a>
          </div>

          <div className="search-container">
            <input type="text" placeholder="Search..."></input>
            <button>
              <CiSearch style={{ padding: "8px" }} size={20} />
            </button>
          </div>

          <div className="user-icons">
            <div className="nav-btn" onClick={toggle}>
              <CiShoppingCart size={30} />
              {cartItems.length > 0 && (
                <span className="cart-counter">
                  {cartItems.length > 0 ? cartItems.length : null}
                </span>
              )}
              <span>Cart</span>
            </div>
            <Cart showModal={showModal} toggle={toggle} />
            <div className="nav-btn" onClick={login_modal}>
              <CiUser size={30} />
              <span>{userName}</span>
            </div>
          </div>
          {toggleLogin && <Login toggle={login_modal} />}
        </div>

        <div className="lower-navbar">
          <ul className="nav-links">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/Men">Men</a>
            </li>
            <li>
              <a href="/Women">Women</a>
            </li>
            <li>
              <a href="/Jewelery">Jewelery</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
