import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CardContext";

const CheckoutPage = () => {
  const { state, dispatch } = useCart(); // Add dispatch to access the cart context
  const navigate = useNavigate();
  const { cart } = state;

  const handlePaymentSuccess = () => {
    // Mock payment success logic
    dispatch({ type: "CLEAR_CART" }); // Clear the cart
    navigate("/payment-result", { state: { success: true } });
  };

  const handlePaymentFailure = () => {
    // Mock payment failure logic
    navigate("/payment-result", { state: { success: false } });
  };

  const totalAmount = cart
    .reduce((total, item) => total + item.price, 0)
    .toFixed(2);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-center mb-10 text-4xl font-bold">Checkout</h1>
        {cart.length === 0 ? (
          <p className="text-center text-xl text-gray-600">
            Your cart is empty. Please add items to your cart before checking
            out.
          </p>
        ) : (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Order Summary:</h2>
            <ul className="space-y-4">
              {cart.map((item) => (
                <li
                  key={item.id}
                  className="flex justify-between border-b pb-2"
                >
                  <span className="text-lg">{item.title}</span>
                  <span className="text-lg font-semibold">
                    ${item.price.toFixed(2)}
                  </span>
                </li>
              ))}
            </ul>
            <h2 className="text-xl font-bold mt-4">Total: ${totalAmount}</h2>
            <div className="mt-6 flex justify-center">
              <button
                onClick={handlePaymentSuccess}
                className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition duration-300"
              >
                Pay Now
              </button>
              <button
                onClick={handlePaymentFailure}
                className="ml-4 bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition duration-300"
              >
                Fail Payment
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CheckoutPage;
