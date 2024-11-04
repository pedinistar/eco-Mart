import { useParams } from "react-router-dom";
import productsData from "../data/products.json";
import AddToCart from "../components/AddToCart";
import DisplayProducts from "../components/DisplayProducts";
import BackToProducts from "../components/BackToProducts";

const ProductDetailPage = () => {
  const { id } = useParams();
  const product = productsData.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <h1 className="text-center mt-10 text-2xl font-semibold">
        Product Not Found! 😔
      </h1>
    );
  }

  return (
    <>
      <div className="max-w-3xl mx-auto p-4">
        <h1 className="text-center mt-10 text-4xl font-bold">
          {product.title}
        </h1>

        <div className="mt-16 flex justify-center gap-28">
          <div className="image w-full h-[40vh]">
            <img
              src={product.images[0]}
              alt={product.title}
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <h3 className="text-2xl font-semibold">Description:</h3>
            <p className="text-gray-700 mt-4 text-lg">{product.description}</p>
            <h1 className="text-5xl font-bold border-t-2 pt-10 mt-10">
              ${product.price.toFixed(2)}
            </h1>

            <div className="buttons flex justify-between items-center">
              <div className="mt-6 flex justify-center">
                <AddToCart />
              </div>

              <div className="mt-4 text-center">
                <BackToProducts />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-72 py-10">
        <DisplayProducts />
      </div>
    </>
  );
};

export default ProductDetailPage;
