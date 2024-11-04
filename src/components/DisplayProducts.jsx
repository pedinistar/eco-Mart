import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import productsData from "../data/products.json";
import AddToCart from "./AddToCart";

const DisplayProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(productsData);
  }, []);

  return (
    <>
      <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-8 h-fit">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white border rounded-lg shadow-lg overflow-hidden"
          >
            <div className="image mt-2 w-full h-96">
              <img
                src={product.images[0]}
                alt={product.title}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="p-4">
              <h2 className="text-xl font-semibold mb-1">{product.title}</h2>
              <p className="text-gray-600 line-clamp-2 overflow-hidden">
                {product.description}
              </p>
              <p className="text-lg font-bold mt-2">
                ${product.price.toFixed(2)}
              </p>
              <div className="buttons flex justify-between items-center mt-4">
                <Link
                  to={`/products/${product.id}`}
                  className="text-blue-500 font-semibold"
                >
                  View Details
                </Link>
                <AddToCart id={product.id} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default DisplayProducts;
