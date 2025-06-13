import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/cart";
import "./Product.css";

export default function Product(props) {
  const { cartItems, addToCart } = useContext(CartContext);
  const [product, setProduct] = useState({});
  useEffect(() => {
    // You can fetch product details using the productId and display them here
    const fetchProductDetails = async () => {
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products/${props.id}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch product details");
        }
        const product_Response = await response.json();
        setProduct({ ...product_Response });
      } catch (error) {
        console.error("Failed to fetch product details:", error);
      }
    };
    fetchProductDetails();
  }, []);

  const style = {
    backgroundImage: `url(${product.image})`,
  };

  // You can fetch product details using the productId and display them here
  return (
    <>
      <div className="product-details">
        <div className="product-image-container" style={style}></div>
        <div className="product-info">
          <h1 className="product-title">{product.title}</h1>
          <h2 className="product-price">Rs{product.price}</h2>
          <p className="product-description">{product.description}</p>
          <button
            onClick={() => addToCart(product)}
            className="add-to-cart product-button"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
}
