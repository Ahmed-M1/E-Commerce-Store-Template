import { CiShoppingCart, CiUser, CiSearch } from "react-icons/ci";
import "./Navbar.css";
import logo from "../../assets/logo.png";
export default function Navbar() {
  const userName = "Login / Sign Up"; // This can be replaced with a dynamic value from your state or props

  return (
    <header>
      <nav className="navbar">
        <div className="upper-navbar">
          <div className="logo">
            <img src={logo} alt="Logo" />
            <span>Decoràyte</span>
          </div>

          <div className="search-container">
            <input type="text" placeholder="Search..."></input>
            <button>
              <CiSearch size={20} />
            </button>
          </div>

          <div className="user-icons">
            <div className="cart-icon">
              <CiShoppingCart size={30} />
              <span>Cart</span>
            </div>
            <div className="search-icon">
              <CiUser size={30} />
              <span>{userName}</span>
            </div>
          </div>
        </div>

        <div className="lower-navbar">
          <ul className="nav-links">
            <li>
              <a href="#bestsellers">Best sellers</a>
            </li>
            <li>
              <a href="#home-decor">Home Decor</a>
            </li>
            <li>
              <a href="#wall-arts">Wall Arts</a>
            </li>
            <li>
              <a href="#lighting">Lighting</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
