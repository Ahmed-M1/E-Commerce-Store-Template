import Banner from "../components/Banner/Banner.jsx";
import Navbar from "../components/Navbar/Navbar.jsx";
import Catalog from "../components/Catalog/Catalog.jsx";
import Footer from "../components/Footer/Footer.jsx";
import { useParams } from "react-router-dom";
export default function Shopping() {
  //Will be dynamic and will show pages based on type of product
  const { page_name } = useParams();
  function formatString(input) {
    return input
      .replace(/-/g, " ") // Replace hyphens with spaces
      .replace(/\b\w/g, (char) => char.toUpperCase()); // Capitalize first letter of each word
  }
  return (
    <>
      <Navbar />
      {page_name ? null : <Banner />}
      {/*Will have prop that tells it to fetch top products*/}
      <Catalog
        heading={page_name ? formatString(page_name) : "Popular Products"}
      />
      <Footer />
    </>
  );
}
