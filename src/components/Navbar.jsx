// src/components/Navbar.jsx
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";

function Navbar() {
  const logoRef = useRef(null);
  const linksRef = useRef([]);
  const buttonRef = useRef(null);

  useEffect(() => {
    // Animate each link with fade-in from above on load
    gsap.fromTo(
      [logoRef.current, ...linksRef.current, buttonRef.current],
      { y: -20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power4.out",
        stagger: 0.2,
        clearProps: "all",
      }
    );

    // Underline animation on hover for each link
    linksRef.current.forEach((link) => {
      const underline = link.querySelector(".underline");
      gsap.set(underline, { scaleX: 0, transformOrigin: "left" });

      link.addEventListener("mouseenter", () => {
        gsap.to(underline, { scaleX: 1, duration: 0.3, ease: "power2.inOut" });
      });

      link.addEventListener("mouseleave", () => {
        gsap.to(underline, { scaleX: 0, duration: 0.3, ease: "power2.inOut" });
      });
    });
  }, []);

  return (
    <nav className="fixed top-3 left-0 w-full bg-transparent text-white p-4 flex justify-between items-center z-50">
      <div className="text-2xl font-bold">
        <span ref={logoRef} className="overflow-hidden inline-block">
          Techkrate
        </span>
      </div>
      <div className="space-x-8 text-center flex">
        {["HOME", "ABOUT US", "SERVICES", "PRODUCTS"].map((item, index) => (
          <Link
            key={item}
            to={`/${item.toLowerCase().replace(" ", "-")}`}
            ref={(el) => (linksRef.current[index] = el)}
            className="relative group text-white hover:text-gray-300 overflow-hidden"
          >
            <span>{item}</span>
            <span className="underline absolute left-0 -bottom-1 w-full h-[2px] bg-current"></span>
          </Link>
        ))}
      </div>
      <div
        ref={buttonRef}
        className="connect-btn p-4 bg-white rounded-full text-black transition-all duration-50 hover:bg-black group overflow-hidden hover:border-white border-2"
      >
        <Link to="/apply" className="flex items-center space-x-2 font-bold">
          <span className="group-hover:text-white transition-all duration-300 inline-block">
            Connect with Us
          </span>
          <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:text-white inline-block">
            ➔
          </span>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
