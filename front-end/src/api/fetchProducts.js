import axios from "axios";

export async function fetchProducts(setProducts, category, setShowError) {
  try {
    const response = await axios.get(
      `http://localhost:8000/${category ? category : ""}`,
      { timeout: 10000 }
    );

    const selectedProducts = response.data.slice(0, 40);

    // If no products are found, you can handle it here if necessary
    setProducts(selectedProducts);
  } catch (e) {
    if (e.response && e.response.status === 400) {
      throw new Error("Invalid page name");
    }
    setShowError(true);
    console.log(e);
  }
}
