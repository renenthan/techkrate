"use client";

import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";

const Navbar = ({ thirdSectionOffset }) => {
  const navbarRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition >= thirdSectionOffset && !isScrolled) {
        setIsScrolled(true);
        gsap.to(navbarRef.current, {
          y: 0,
          backgroundColor: "rgba(0, 0, 0, 1)",
          duration: 0.2,
          ease: "power2.out",
        });
      } else if (scrollPosition < thirdSectionOffset && isScrolled) {
        setIsScrolled(false);
        gsap.to(navbarRef.current, {
          y: 0,
          backgroundColor: "transparent",
          duration: 0.2,
          ease: "none",
        });
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrolled, thirdSectionOffset]);

  return (
    <nav ref={navbarRef} className="fixed top-0 w-full bg-transparent text-white px-20 pb-4 pt-10 flex justify-between items-center z-50 transition-all duration-300">
      <div className="text-2xl font-bold">Techkrate</div>
      <div className="space-x-16 text-center flex">
        <Link to="/" className="hover:text-gray-300">HOME</Link>
        <Link to="/about" className="hover:text-gray-300">ABOUT US</Link>
        <Link to="/products" className="hover:text-gray-300">PRODUCTS</Link>
        <Link to="/blogs" className="hover:text-gray-300">BLOGS</Link>
      </div>
      <div className="connect-btn p-4 bg-white rounded-full text-black transition-all duration-300 hover:bg-black hover:text-white hover:border-white border-2">
        <Link to="/contact" className="flex items-center space-x-2 font-bold">
          <span>Connect with Us</span>
          <span>➔</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

