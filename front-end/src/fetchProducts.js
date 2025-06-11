const fetchProducts = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }
  return response.json();
};

export default fetchProducts;
// This function fetches products from the API and returns them as a JSON object.
// It can be used in components to get product data for rendering.