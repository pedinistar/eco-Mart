import { Link } from "react-router-dom";
import { useCart } from "../context/CardContext";
import BackToProducts from "../components/BackToProducts";

const CartPage = () => {
  const { state, dispatch } = useCart();
  const { cart } = state;

  const handleRemoveFromCart = (item) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: item });
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-center mt-10 text-4xl font-bold">Your Cart</h1>
      {cart.length === 0 ? (
        <p className="text-center mt-10 text-xl">Your cart is empty.😥</p>
      ) : (
        <div className="bg-white shadow-lg rounded-lg p-6">
          <ul className="space-y-4">
            {cart.map((item) => (
              <li
                key={item.id}
                className="flex justify-between items-center border-b pb-4"
              >
                <div className="flex items-center">
                  <img
                    src={item.images[0]}
                    alt={item.title}
                    className="w-20 h-20 object-cover rounded-md mr-4"
                  />
                  <div>
                    <h2 className="text-lg font-semibold">{item.title}</h2>
                    <p className="text-gray-600">${item.price.toFixed(2)}</p>
                  </div>
                </div>
                <button
                  onClick={() => handleRemoveFromCart(item)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition duration-300"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex justify-between items-center">
            <p className="text-lg font-bold">
              Total: $
              {cart.reduce((total, item) => total + item.price, 0).toFixed(2)}
            </p>
            <Link
              to="/checkout"
              className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300"
            >
              Proceed to Checkout
            </Link>
          </div>
        </div>
      )}
      <div className="mt-10 text-center">
        <BackToProducts />
      </div>
    </div>
  );
};

export default CartPage;
