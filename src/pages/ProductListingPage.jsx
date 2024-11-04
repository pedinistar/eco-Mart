import { Link } from "react-router-dom";
import DisplayProducts from "../components/DisplayProducts";

const ProductListingPage = () => {
  return (
    <section className="products px-72 py-10">
      <div className="font-light">
        <Link to="/">Home </Link>/<Link to="/products"> All Products</Link>
      </div>
      <h1 className="text-5xl mt-10 mb-10 font-semibold">All Products</h1>
      <div className="w-full h-28 mb-20 flex">
        <div className="filter w-[80%] h-full flex flex-col justify-center gap-2">
          <p className="font-light">Filter:</p>
          <div className="flex gap-4">
            <select
              name="Price"
              id="price-filter"
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white shadow-sm hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 transition ease-in-out duration-150"
            >
              <option value="">High to Low</option>
              <option value="">Low to High</option>
            </select>

            <select
              name="Product Type"
              id="product-type-filter"
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white shadow-sm hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 transition ease-in-out duration-150"
            >
              <option value="">Electronics</option>
              <option value="">Fashion</option>
              <option value="">Home Appliances</option>
              <option value="">Books</option>
            </select>

            <select
              name="Availability"
              id="availability-filter"
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white shadow-sm hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 transition ease-in-out duration-150"
            >
              <option value="">In Stock</option>
              <option value="">Out of Stock</option>
            </select>

            <select
              name="Highlight"
              id="highlight-filter"
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white shadow-sm hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 transition ease-in-out duration-150"
            >
              <option value="">Best Seller</option>
              <option value="">New Arrival</option>
              <option value="">Limited Edition</option>
            </select>
          </div>
        </div>
        <div className="sort flex flex-col justify-center gap-2">
          <p className="font-light">Sort by:</p>
          <select
            name="Featured"
            id="featured-filter"
            className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white shadow-sm hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 transition ease-in-out duration-150"
          >
            <option value="">All</option>
            <option value="new">New Arrivals</option>
            <option value="top-rated">Top Rated</option>
            <option value="bestseller">Bestsellers</option>
          </select>
        </div>
      </div>
      <DisplayProducts />
    </section>
  );
};

export default ProductListingPage;
