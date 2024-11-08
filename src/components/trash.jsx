// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="fixed top-3 left-0 w-full bg-transparent text-white p-4 flex justify-between items-center z-50">
      <div className="text-2xl font-bold">techkrate</div>
      <div className="space-x-8 text-center">
        <Link to="/" className="hover:text-gray-300">
          HOME
        </Link>
        <Link to="/about" className="hover:text-gray-300">
          ABOUT US
        </Link>
        <Link to="/services" className="hover:text-gray-300">
          SERVICES
        </Link>
        <Link to="/products" className="hover:text-gray-300">
          PRODUCTS
        </Link>
      </div>
      <div className="connect-btn p-4 bg-white rounded-full text-black transition-all duration-300 hover:bg-black group">
        <Link to="/apply" className="flex items-center space-x-2 font-bold">
          <span className="group-hover:text-white transition-all duration-300">
            Connect with Us
          </span>
          <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:text-white">
            ➔
          </span>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
