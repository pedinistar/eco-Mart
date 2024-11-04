import { useLocation } from "react-router-dom";

const PaymentResultPage = () => {
  const location = useLocation();
  const { success } = location.state || { success: null };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h1
          className={`text-center text-4xl font-bold mb-4 ${
            success ? "text-green-600" : "text-red-600"
          }`}
        >
          Payment {success ? "Success" : "Failure"}
        </h1>
        {success ? (
          <div className="text-center">
            <p className="text-lg text-gray-700 mb-4">
              Your payment was successful! Thank you for your purchase.
            </p>
          </div>
        ) : (
          <div className="text-center">
            <p className="text-lg text-gray-700 mb-4">
              Sorry, your payment could not be processed.
            </p>
            <p className="text-lg text-gray-700">Please try again later.</p>
          </div>
        )}
        <div className="mt-6 flex justify-center">
          <button
            onClick={() => (window.location.href = "/")} // Redirect to homepage or another appropriate page
            className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition duration-300"
          >
            Go to Homepage
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentResultPage;
