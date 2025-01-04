import {  useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

import Download1 from "../assets/image/download1.jpg";
import { Navigate } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const Products = () => {
  const productRefs = useRef([]);

  useEffect(() => {
    // Products section animation
    productRefs.current.forEach((product, index) => {
      if (product) {
        gsap.fromTo(
          product.querySelectorAll(".flex-1"),
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.2,
            scrollTrigger: {
              trigger: product,
              start: "top 80%",
            },
          }
        );
      }
    });
  }, []);

  // Mouse move handler for dynamic 3D effect
  const handleMouseMove = (index, e) => {
    const product = productRefs.current[index];
    const bounds = product.getBoundingClientRect();
    const centerX = bounds.left + bounds.width / 2;
    const centerY = bounds.top + bounds.height / 2;

    const offsetX = e.clientX - centerX;
    const offsetY = e.clientY - centerY;

    // Increased tilt values for more pronounced effect
    const rotationX = (offsetY / bounds.height) * 40; // Max tilt in Y-axis (up/down)
    const rotationY = -(offsetX / bounds.width) * 40; // Max tilt in X-axis (left/right)

    // Apply rotation based on mouse position
    gsap.to(product, {
      rotationX: rotationX,
      rotationY: rotationY,
      scale: 1.001, // Increased scale for more depth
      boxShadow: "0px 50px 100px rgba(0, 0, 0, 0.4)", // Stronger shadow for more depth
      transformOrigin: "center center",
      ease: "power3.out", // Smooth transition
      duration: 0.3,
    });
  };

  // Reset animation on mouse leave
  const handleMouseLeave = (index) => {
    gsap.to(productRefs.current[index], {
      rotationX: 0,
      rotationY: 0,
      scale: 1, // Reset scale
      boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.2)", // Softer shadow on leave
      duration: 0.3,
      ease: "power3.in",
    });
  };

  return (
    <div className="font-sans bg-black text-white overflow-x-hidden ">
      {/* Products Section */}
      {[...Array(2)].map((_, index) => (
        <div
          key={index}
          ref={(el) => (productRefs.current[index] = el)}
          className="text-slate-200 container mx-auto px-4 py-16 max-w-7xl group hover:bg-[#0D0D0D] "  // Removed hover effect from here
          onMouseMove={(e) => handleMouseMove(index, e)} // Track mouse movement for dynamic effect
          onMouseLeave={() => handleMouseLeave(index)} // Reset the rotation on mouse leave
        >
          <div className="flex flex-col md:flex-row items-center gap-12 perspective-1500"> {/* Add perspective for 3D effect */}
            {/* Text Content */}
            {index % 2 === 0 && (
              <div className="flex-1 space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-white">How do you assess a car when it&apos;s on the road or one town over?</h2>
                <p className="text-lg">
                  For used car dealers who buy cars sight unseen, and for fleet managers assessing cars in use, it&apos;s a common dilemma.
                </p>
                <p className="text-lg">
                  Tractable&apos;s Applied AI helps you value, inspect and appraise cars even when they&apos;re miles away. Dealers can use AI vision to
                  assess a car&apos;s condition
                </p>

                {/* Buttons */}
                <div className="flex justify-center gap-6 mt-6">
                  <button className="px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-200 transition-all text-lg" onClick={Navigate("/product1")}>
                  <Link to="/product1">Discover More</Link>
                  </button>
                  <button className="px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-200 transition-all text-lg">
                    <Link to="/contact">Contact</Link>
                  </button>
                </div>
              </div>
            )}

            {/* Image Section */}
            <div className="flex-1 relative">
              <div className="aspect-square w-80 h-80 mx-auto rounded-full border-4 border-purple-500 overflow-hidden">
                <img src={Download1} alt="Aerial view of car lot" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Text Content */}
            {index % 2 !== 0 && (
              <div className="flex-1 space-y-6 mt-20">
                <h2 className="text-3xl md:text-4xl font-bold text-white">How do you assess a car when it&apos;s on the road or one town over?</h2>
                <p className="text-lg">
                  For used car dealers who buy cars sight unseen, and for fleet managers assessing cars in use, it&apos;s a common dilemma.
                </p>
                <p className="text-lg">
                  Tractable&apos;s Applied AI helps you value, inspect and appraise cars even when they&apos;re miles away. Dealers can use AI vision to
                  assess a car&apos;s .
                </p>

                {/* Buttons */}
                <div className="flex justify-center gap-6 mt-6">
                  <button className="px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-200 transition-all text-lg" onClick={() =>{
                    Navigate("/product2")
                  }}>
                     <Link to="/product2">Discover More</Link>
                  </button>
                  <button className="px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-200 transition-all text-lg">
                    <Link to="/contact">Contact</Link>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
