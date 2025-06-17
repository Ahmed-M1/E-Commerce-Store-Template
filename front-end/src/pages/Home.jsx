import Banner from "../components/Banner/Banner.jsx";
import Navbar from "../components/Navbar/Navbar.jsx";
import Catalog from "../components/Catalog/Catalog.jsx";
import Footer from "../components/Footer/Footer.jsx";
import Cart from "../components/Cart/Cart.jsx";
export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      {/*Will have prop that tells it to fetch top products*/}
      <Catalog />
      <Footer />
    </>
  );
}
