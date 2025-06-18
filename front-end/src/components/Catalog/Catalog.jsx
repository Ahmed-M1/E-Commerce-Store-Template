import CatalogItem from "../CatalogItem/CatalogItem";
import { useEffect, useState } from "react";
import "./Catalog.css";
export default function Catalog(props) {
  const [products, setProducts] = useState([]);

  //Things to do:
  //If the page_name is invalid meaning no data exists for it then throw error

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const requested_products = await response.json();
        const selectedProducts = requested_products.slice(0, 40);
        setProducts(selectedProducts);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };
    fetchProducts();
  }, []);
  const catalogItems = products.map((product) => (
    <CatalogItem key={product.id} product={product} />
  ));

  if (products.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <section className="catalog">
      <h1 className="catalog-header">{props.heading}</h1>
      <div className="catalog-container">{catalogItems}</div>
    </section>
  );
}
