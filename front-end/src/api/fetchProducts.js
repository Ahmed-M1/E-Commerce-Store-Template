import axios from "axios";
export async function fetchProducts(
  setProducts,
  category,
  setShowError,
  setLoading,
  navigate,
  setConnAttempt
) {
  try {
    const response = await axios.get(
      `http://localhost:8000/${category ? category : ""}`,
      //After 10 seconds trying to connect if its not working
      { timeout: 10000 }
    );
    const selectedProducts = response.data.slice(0, 40);
    // If no products are found, you can handle it here if necessary
    setProducts(selectedProducts);
  } catch (e) {
    if (e.response && e.response.status === 400) {
      navigate("/"); // Redirect to error page
    }
    setShowError(true);
  } finally {
    setLoading(false);
  }
}
