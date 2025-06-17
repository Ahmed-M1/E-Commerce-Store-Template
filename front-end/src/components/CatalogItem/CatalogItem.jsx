import "./CatalogItem.css";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/cart";
export default function CatalogItem(props) {
  const style = {
    backgroundImage: `url(${props.product.image})`,
  };
  const { addToCart, toggle } = useContext(CartContext);
  return (
    <div className="catalog-item">
      <a href={`/product/${props.product.id}`} className="catalog-item-link">
        <div className="catalog-item-image" style={style}></div>
      </a>
      <div className="catalog-item-details">
        <h1>{props.product.title}</h1>
        <h2>Rs{props.product.price}</h2>
        <button
          onClick={() => {
            addToCart(props.product);
            toggle();
          }}
          className="add-to-cart"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
