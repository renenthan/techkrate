// src/components/Navbar.jsx
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";

function Navbar() {
  const logoRef = useRef(null);
  const linksRef = useRef([]);
  const buttonRef = useRef(null);

  useEffect(() => {
    // Animate the logo
    gsap.fromTo(
      logoRef.current,
      { y: -20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power4.out",
        delay: 0.2,
        clearProps: "all",
      }
    );

    // Animate each link in sequence
    gsap.fromTo(
      linksRef.current,
      { y: -20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power4.out",
        stagger: 0.2, // Stagger each link for sequential effect
        delay: 0.4,
        clearProps: "all",
      }
    );

    // Animate the button
    gsap.fromTo(
      buttonRef.current,
      { y: -20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power4.out",
        delay: 1, // Delay to start after links finish
        clearProps: "all",
      }
    );
  }, []);

  return (
    <nav className="fixed top-3 left-0 w-full bg-transparent text-white p-4 flex justify-between items-center z-50">
      <div className="text-2xl font-bold">
        <span ref={logoRef} className="overflow-hidden inline-block">
          techkrate
        </span>
      </div>
      <div className="space-x-20 text-center flex">
        <Link to="/" className="hover:text-gray-300 overflow-hidden">
          <span ref={(el) => (linksRef.current[0] = el)} className="inline-block">
            HOME
          </span>
        </Link>
        <Link to="/about" className="hover:text-gray-300 overflow-hidden">
          <span ref={(el) => (linksRef.current[1] = el)} className="inline-block">
            ABOUT US
          </span>
        </Link>
        <Link to="/services" className="hover:text-gray-300 overflow-hidden">
          <span ref={(el) => (linksRef.current[2] = el)} className="inline-block">
            SERVICES
          </span>
        </Link>
        <Link to="/products" className="hover:text-gray-300 overflow-hidden">
          <span ref={(el) => (linksRef.current[3] = el)} className="inline-block">
            PRODUCTS
          </span>
        </Link>
      </div>
      <div
        ref={buttonRef}
        className="connect-btn p-4 bg-white rounded-full text-black transition-all duration-100 hover:bg-black group overflow-hidden hover:border-white border-2"
      >
        <Link to="/apply" className="flex items-center space-x-2 font-bold">
          <span className="group-hover:text-white transition-all duration-300 inline-block">Connect with Us</span>
          <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:text-white inline-block">➔</span>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
