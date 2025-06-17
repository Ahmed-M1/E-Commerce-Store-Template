import { useContext } from "react";
import { CartContext } from "../../context/cart";
import clsx from "clsx";
import PropTypes from "prop-types";

import "./Cart.css";
export default function Cart({ showModal, toggle }) {
  const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal } =
    useContext(CartContext);

  return (
    showModal && (
      <>
        <div className="seal-background"></div>
        <div className="cart-modal">
          <div className="cart-top">
            <h1 className="cart-heading">Cart</h1>
            <button className="cart-close" onClick={toggle}>
              Close
            </button>
          </div>
          <div
            className={clsx({
              "cart-items-container": true,
              " empty-cart": cartItems < 1,
            })}
          >
            {cartItems.map((item) => (
              <div className="item-wrapper" key={item.id}>
                <div className="item-cart-info">
                  <div
                    style={{ backgroundImage: `url(${item.image})` }}
                    className="item-image"
                  />
                  <div className="item-details">
                    <h1 className="item-title">{item.title}</h1>
                    <p className="item-price">Rs{item.price}</p>
                    <div className="item-actions">
                      <button
                        className="item-decrement"
                        onClick={() => {
                          removeFromCart(item);
                        }}
                      >
                        -
                      </button>
                      <p>{item.quantity}</p>

                      <button
                        className="item-increment"
                        onClick={() => {
                          addToCart(item);
                        }}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {cartItems < 1 && (
              <h2 className="empty-cart">You Cart is Empty :(</h2>
            )}
          </div>
          {/* {cartItems.length > 0 ? (
          <div className="">
            <h1 className="">Total: ${getCartTotal()}</h1>
            <button
              className=""
              onClick={() => {
                clearCart();
              }}
            >
              Clear cart
            </button>
          </div>
        ) : (
          <h1 className="">Your cart is empty</h1>
        )} */}
        </div>
      </>
    )
  );
}

Cart.propTypes = {
  showModal: PropTypes.bool,
  toggle: PropTypes.func,
};
