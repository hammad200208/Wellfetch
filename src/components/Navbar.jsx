import { useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <img src="/Logo.png" alt="WellFood Logo" className="h-8 w-auto" />

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-700">
          <li className="hover:text-[#D8A85B] cursor-pointer">HOME</li>
          <li className="hover:text-[#D8A85B] cursor-pointer">SHOP</li>
          <li className="hover:text-[#D8A85B] cursor-pointer">BLOGS</li>
          <li className="hover:text-[#D8A85B] cursor-pointer">CONTACT US</li>
        </ul>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          {/* Sign In */}
          <button className="hidden md:block bg-[#4C9E84] text-white px-8 py-2 rounded-full text-sm font-medium hover:bg-[#D8A85B] transition">
            SIGN IN
          </button>

          {/* Cart */}
          <img
            src="/shopping-cart.png"
            alt="Cart"
            className="h-5 w-5 cursor-pointer"
          />

          {/* Mobile Menu Icon */}
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
            <li className="hover:text-[#D8A85B] cursor-pointer">HOME</li>
            <li className="hover:text-[#D8A85B] cursor-pointer">SHOP</li>
            <li className="hover:text-[#D8A85B] cursor-pointer">BLOGS</li>
            <li className="hover:text-[#D8A85B] cursor-pointer">CONTACT US</li>

            <button className="bg-[#4C9E84] text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-[#D8A85B] transition w-fit">
              SIGN IN
            </button>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
