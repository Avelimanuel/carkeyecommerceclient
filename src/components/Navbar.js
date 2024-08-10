import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

export const Navbar = () => {
  return (
    <nav className="bg-red-500 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center py-4">
          <div className="text-xl font-bold text-gray-800">
            <h1>Carkey Experts Kenya</h1>
          </div>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 items-center text-gray-700 mt-4 md:mt-0">
            <Link to="/" className="hover:text-blue-500 font-bold text-black">
              Key types
            </Link>
            <Link
              to="/keycovers"
              className="hover:text-blue-500 font-bold text-black"
            >
              Key Covers
            </Link>
            <Link
              to="/services"
              className="hover:text-blue-500 font-bold text-black"
            >
              Our Services
            </Link>
            {/* <Link to="/checkout" className="hover:text-blue-500">
              <FontAwesomeIcon icon={faShoppingCart} />
            </Link> */}
            {/* <Link
              to="/authentication"
              className="hover:text-blue-500 font-bold text-black"
            >
              Login
            </Link> */}
          </div>
        </div>
      </div>
    </nav>
  );
};
