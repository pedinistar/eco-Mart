
import { Link } from "react-router-dom";

const BackToProducts = () => {
  return (
    <Link
      to="/products"
      className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-all duration-300"
    >
      Back to Products
    </Link>
  );
};

export default BackToProducts;
