import { IoIosArrowDown } from "react-icons/io";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductListingPage from "./pages/ProductListingPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import CheckoutPage from "./pages/CheckoutPage";
import PaymentResultPage from "./pages/PaymentResultPage";
import { CartProvider } from "./context/CardContext";
import CartPage from "./pages/CartPage";
import { MdOutlineErrorOutline } from "react-icons/md";
import Header from "./components/Header";
import { useEffect, useRef, useState } from "react";

// Main App component
const App = () => {
  const containerRef = useRef(null);
  const [isLaptop, setIsLaptop] = useState(true);

  useEffect(() => {
    const checkScreenSize = () => {
      if (window.innerWidth < 1024) {
        setIsLaptop(false);
      } else {
        setIsLaptop(true);
      }
    };

    checkScreenSize();

    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  if (!isLaptop) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen px-10">
        <MdOutlineErrorOutline size="40px" />
        <h1 className="mt-5 sm:text-2xl font-semibold text-center">
          Please use a laptop for the best experience
        </h1>
      </div>
    );
  }
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
