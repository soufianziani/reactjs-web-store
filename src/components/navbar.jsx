import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [logOutBtn, setLogOutBtn] = useState(false);
  const [logInBtn, setLogInBtn] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("user")
      ? localStorage.getItem("user")
      : "";
    setLogInBtn(user !== "" ? false : true);
    setLogOutBtn(user !== "" ? true : false);
  }, []);

  const handleLogOut = () => {
    setLogOutBtn(false);
    setLogInBtn(true);
    localStorage.removeItem("user");
    navigate("/");
  };

  const cartCount = useSelector((state) => state.cart.length);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-white z-50 border-b">
        <div className="mx-auto px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex-shrink-0">
              <img
                src="/Logo3 (2).png"
                alt="Logo"
                className="h-10 w-10"
                style={{ width: "115px", height: "60px" }}
              />
            </Link>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  to="/"
                  className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium hover:underline"
                >
                  Home
                </Link>
                <Link
                  to="/products"
                  className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium hover:underline"
                >
                  Products
                </Link>
                <Link
                  to="/about"
                  className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium hover:underline"
                >
                  About
                </Link>
                <Link
                  to="/contact"
                  className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium hover:underline"
                >
                  Contact
                </Link>
                <Link
                  to="/Cart"
                  className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium hover:underline"
                >
                  Cart{" "}
                  <span className="inline-flex items-center justify-center w-4 h-4 ml-2 text-xs font-semibold text-[#A47249] bg-[#F0DDCF] rounded-full">
                    {cartCount}
                  </span>
                </Link>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                type="button"
                className="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-50"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
            <div style={{ marginLeft: "50px", display: "inline-block" }}>
              {logInBtn && (
                <NavLink to="login">
                  <button
                    type="button"
                    className="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-50"
                    aria-expanded="false"
                  >
                    login
                  </button>
                </NavLink>
              )}
              {logOutBtn && (
                <button
                  className="bg-transparent hover:bg-[#A47249] text-[#A47249] font-semibold hover:text-white py-2 px-4 border border-[#A47249]  hover:border-transparent rounded text-[#A47249]"
                  onClick={handleLogOut}
                >
                  Log out
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>
      <div className="mb-10"></div>
    </>
  );
};

export default Navbar;
