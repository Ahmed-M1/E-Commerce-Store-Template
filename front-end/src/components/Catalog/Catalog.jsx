import CatalogItem from "../CatalogItem/CatalogItem";
import { useEffect, useState } from "react";
import "./Catalog.css";
export default function Catalog(props) {
  // This is the Home page component that renders the Navbar, Banner, and Catalog components.
  // Will fetch the top products from the API and pass them to the Catalog component.
  const [products, setProducts] = useState([]);

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
      <h1 className="catalog-header">Top Products</h1>
      <div className="catalog-container">{catalogItems}</div>
    </section>
  );
}
