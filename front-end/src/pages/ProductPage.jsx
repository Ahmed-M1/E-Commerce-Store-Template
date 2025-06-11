import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Product from "../components/Product/Product";
export default function ProductPage() {
  // This component will display the product details based on the product ID from the URL
  let { id } = useParams();

  // You can fetch product details using the productId and display them here
  return (
    <>
      <Navbar />
      <Product id={id} />
      <Footer />
    </>
  );
}
