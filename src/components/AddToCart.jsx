import { useState } from "react";
import { useCart } from "../context/CardContext";
import productsData from "../data/products.json";

const AddToCart = ({ id }) => {
  // Find the product with the given id
  const product = productsData.find((p) => p.id === parseInt(id));
  // Get the dispatch function from the cart context
  const { dispatch } = useCart();

  // State to track if the item has been added to the cart
  const [isAdded, setIsAdded] = useState(false);

  // Function to handle adding the product to the cart
  const handleAddToCart = () => {
    // Dispatch an action to add the product to the cart
    dispatch({ type: "ADD_TO_CART", payload: product });
    // Set the isAdded state to true
    setIsAdded(true);
    // Set a timeout to reset the isAdded state after 2 seconds
    setTimeout(() => {
      setIsAdded(false);
    }, 2000);
  };

  // Render the button to add the product to the cart
  return (
    <div>
      <button
        onClick={handleAddToCart}
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-all"
      >
        Add to Cart
      </button>
      {isAdded && (
        <p className="mt-2 text-center text-sm text-green-600">Item added!</p>
      )}
    </div>
  );
};

// Export the AddToCart component
export default AddToCart;
