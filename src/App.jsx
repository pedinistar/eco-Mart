import { IoIosArrowDown } from "react-icons/io";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductListingPage from "./pages/ProductListingPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import CheckoutPage from "./pages/CheckoutPage";
import PaymentResultPage from "./pages/PaymentResultPage";
import { CartProvider } from "./context/CardContext";
import CartPage from "./pages/CartPage";
import Header from "./components/Header";

// Main App component
const App = () => {
  return (
    // Wrap the entire app with the CartProvider to provide cart context
    <CartProvider>
      <Router>
        <Header />
        {/* Navigation bar */}
        <nav className="bg-green-500 font-semibold text-white p-8 flex gap-8 justify-center items-center">
          {/* Links to different product categories */}
          <Link to="/products" className="flex items-center">
            All Products
            <IoIosArrowDown />
          </Link>
          <Link to="/products/samsung" className="flex items-center">
            Samsung
            <IoIosArrowDown />
          </Link>
          <Link to="/products/apple" className="flex items-center">
            Apple (iPhone)
            <IoIosArrowDown />
          </Link>
          <Link to="/products/google" className="flex items-center">
            Google (Pixel)
            <IoIosArrowDown />
          </Link>
          <Link to="/products/oneplus" className="flex items-center">
            OnePlus
            <IoIosArrowDown />
          </Link>
          <Link to="/products/xiaomi" className="flex items-center">
            Xiaomi
            <IoIosArrowDown />
          </Link>
          <Link to="/products/realme" className="flex items-center">
            Realme
            <IoIosArrowDown />
          </Link>
          <Link to="/products/huawei" className="flex items-center">
            Huawei
            <IoIosArrowDown />
          </Link>
          <Link to="/products/sony" className="flex items-center">
            Sony
            <IoIosArrowDown />
          </Link>
        </nav>
        {/* Routes for different pages */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductListingPage />} />
          <Route path="/products/:id" element={<ProductDetailPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/payment-result" element={<PaymentResultPage />} />
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;
