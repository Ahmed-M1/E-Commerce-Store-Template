import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shopping from "./pages/Shopping";
import Contact from "./pages/Contact";
import ProductPage from "./pages/ProductPage";
import Form from "./pages/Form";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:page_name" element={<Shopping />} />
        <Route path="/" element={<Shopping />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/signup" element={<Form />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
