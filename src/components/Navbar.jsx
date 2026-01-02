import { useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { Link } from "react-router-dom";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // simulate login state
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <nav className="w-full bg-white fixed top-0 left-0 shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <img src="/Logo.png" alt="WellFood Logo" className="h-8 w-auto" />

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-700">
          <Link to="/">
          <li className="hover:text-[#D8A85B] cursor-pointer">HOME</li>
          </Link>
          <Link to="/shop">
          <li className="hover:text-[#D8A85B] cursor-pointer">SHOP</li>
          </Link>
          <Link to="/blogs">
          <li className="hover:text-[#D8A85B] cursor-pointer">BLOGS</li>
          </Link>
          <Link to="/contact">
          <li className="hover:text-[#D8A85B] cursor-pointer">CONTACT US</li>
          </Link>
        </ul>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          
          {/* SIGN IN (only if NOT logged in) */}
          {!isLoggedIn && (
            <Link to="/signup">
            <button
              onClick={() => setIsLoggedIn(true)}
              className="hidden md:block bg-[#4C9E84] text-white px-8 py-2 rounded-full text-sm font-medium hover:bg-[#D8A85B] transition"
            >
              SIGN IN
            </button>
            </Link>
          )}

          {/* USER ICON (only if logged in) */}
          {isLoggedIn && (
            <Link to="/profile">
            <img
              src="/user.png"
              alt="User"
              className="h-6 w-6 rounded-full cursor-pointer hidden md:block"
            />
            </Link>
          )}

          {/* Cart */}
          <Link to="/cart">
          <img
            src="/shopping-cart.png"
            alt="Cart"
            className="h-5 w-5 cursor-pointer"
          />
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-gray-700 text-2xl"
          >
            {menuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col space-y-4 px-6 py-4 text-sm font-medium text-gray-700">
            <Link to="/">
            <li className="hover:text-[#D8A85B] cursor-pointer">HOME</li>
            </Link>
            <Link to="/shop">
            <li className="hover:text-[#D8A85B] cursor-pointer">SHOP</li>
            </Link>
            <Link to="/blogs">
            <li className="hover:text-[#D8A85B] cursor-pointer">BLOGS</li>
            </Link>
            <Link to="/contact">
            <li className="hover:text-[#D8A85B] cursor-pointer">CONTACT US</li>
            </Link>

            {/* Mobile Sign In */}
            {!isLoggedIn && (
              <Link to="/signup">
              <button
                onClick={() => {
                  setIsLoggedIn(true);
                  setMenuOpen(false);
                }}
                className="bg-[#4C9E84] text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-[#D8A85B] transition w-fit"
              >
                SIGN IN
              </button> 
              </Link>
            )}

            {/* Mobile User Icon */}
            {isLoggedIn && (
              <Link to="/profile">
              <img
                src="/user.png"
                alt="User"
                className="h-8 w-8 rounded-full cursor-pointer"
              />
              </Link>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
