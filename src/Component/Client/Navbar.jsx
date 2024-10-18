import React from 'react';
import logo from '../../assets/Logo.jpg'
import { FiSearch, FiUser, FiHeart, FiShoppingBag } from 'react-icons/fi'; // React Icons for the icons

const Navbar = () => {
  return (
    <nav className="bg-slate-300 shadow-md w-full">
      <div className="container mx-auto px-6 lg:px-12 py-4 flex justify-between items-center">
        
        {/* Left Side - Logo and Navigation Links */}
        <div className="flex items-center space-x-8">
          {/* Logo Section */}
          <a href="/" className="text-white text-2xl font-bold">
            {/* You can replace this text with an actual logo image if needed */}
            <img 
              src={logo}
              alt="Logo" 
              className="h-10"
            />
          </a>

          {/* Navigation Links */}
          <div className="flex items-center space-x-6">
            <a href="/" className="text-black text-lg font-semibold hover:text-gray-600">
              Home
            </a>
            <a href="/about" className="text-black text-lg font-semibold hover:text-gray-600">
              About
            </a>
            <a href="/contact" className="text-black text-lg font-semibold hover:text-gray-600">
              Contact
            </a>
          </div>
        </div>

        {/* Right Side - Icons */}
        <div className="flex items-center space-x-6">
          <button className="text-black hover:text-gray-800">
            <FiSearch className="w-6 h-6" />
          </button>
          <button className="text-black hover:text-gray-800">
            <FiUser className="w-6 h-6" />
          </button>
          <button className="text-black hover:text-gray-800">
            <FiHeart className="w-6 h-6" />
          </button>
          <button className="text-black hover:text-gray-800 relative">
            <FiShoppingBag className="w-6 h-6" />
            {/* Add a bag count bubble if needed */}
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              3
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
