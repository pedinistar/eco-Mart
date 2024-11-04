import { LuSearch } from "react-icons/lu";
import { MdPersonOutline } from "react-icons/md";
import { LuShoppingCart } from "react-icons/lu";
import { Link } from "react-router-dom";
import { useCart } from "../context/CardContext";

const Header = () => {
  const { state } = useCart();
  const cartItemCount = state.cart.length;
  return (
    <header className="flex items-center justify-center gap-36 px-36 py-6">
      <Link to="/">
        <h1 className="text-3xl font-semibold">
          <span className="text-green-500">eco</span>Mart
        </h1>
      </Link>
      <div className="search flex gap-2 items-center justify-center border-2 rounded-md px-8 py-1">
        <LuSearch size="23px" />
        <input
          type="search"
          name="search"
          className="px-4 py-2 focus:outline-none w-96 "
          placeholder="Search for..."
        />
      </div>
      <div className="others flex gap-4">
        <Link to="/" className="hover:bg-green-200 px-2 py-2 rounded-md">
          <MdPersonOutline size="25px" className="cursor-pointer" />
        </Link>
        <Link
          to="/cart"
          className="relative hover:bg-green-200 transition-all duration-300 px-2 py-2 rounded-md"
        >
          <LuShoppingCart size="25px" className="cursor-pointer" />
          {cartItemCount > 0 && (
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
              {cartItemCount}
            </span>
          )}
        </Link>
      </div>
    </header>
  );
};

export default Header;
