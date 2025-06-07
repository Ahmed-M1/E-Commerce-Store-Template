import { CiShoppingCart, CiUser, CiSearch } from "react-icons/ci";
import "./Navbar.css";
export default function Navbar() {
  return (
    <header>
      <nav className="navbar">
        <div className="upper-navbar">
          <div className="logo">Decorayte</div>

          <div className="search-container">
            <input type="text" placeholder="Search..."></input>
            <button>
              <CiSearch size={20} />
            </button>
          </div>

          <div className="user-icons">
            <CiUser size={30} />
            <CiShoppingCart size={30} />
          </div>
        </div>

        {/* <div className="lower-navbar">
          <ul className="nav-links">
            <li>
              <a href="#bestsellers">Bestsellers</a>
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
        </div> */}
      </nav>
    </header>
  );
}
