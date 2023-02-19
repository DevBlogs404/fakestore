import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Products from "./pages/Products";
import CartPage from "./pages/CartPage";
import SingleProduct from "./pages/SingleProduct";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/cart" element={<CartPage />}></Route>
        <Route path="/product/:id" element={<SingleProduct />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
