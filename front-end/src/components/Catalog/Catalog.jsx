import CatalogItem from "../CatalogItem/CatalogItem";
import { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";
import "./Catalog.css";
import { useParams, useNavigate } from "react-router";
import { fetchProducts } from "../../api/fetchProducts";

export default function Catalog(props) {
  const [products, setProducts] = useState([]);
  const [showError, setShowError] = useState(false);
  const [loading, setLoading] = useState(true);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        await fetchProducts(setProducts, params.page_name, setShowError);
      } catch (error) {
        if (error.message === "Invalid page name") {
          navigate("/"); // Redirect to error page
        } else {
          setShowError(true);
        }
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [params.page_name, navigate]);

  const catalogItems = products.map((product) => (
    <CatalogItem key={product.id} product={product} />
  ));

  return (
    <section className="catalog">
      <h1 className="catalog-header">{props.heading}</h1>
      {showError && (
        <h1 className="error-display">
          No Products Found! :( The server may be down
        </h1>
      )}
      {loading && !showError && (
        <div className="spinner-container">
          <ClipLoader
            color={"#007BFF"}
            loading={loading}
            size={100}
            aria-label="Loading Spinner"
            data-testid="loader"
            cssOverride={{
              display: "block",
              margin: "0 auto",
            }}
            width={12}
          />
        </div>
      )}
      {!loading && products.length === 0 && !showError && (
        <h1 className="error-display">No Products Found!</h1>
      )}
      <div className="catalog-container">{catalogItems}</div>
    </section>
  );
}
