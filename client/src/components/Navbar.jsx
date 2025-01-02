// src/components/Navbar.jsx
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";

const Navbar = ({ thirdSectionOffset }) => {
  const navbarRef = useRef(null);
  const logoRef = useRef(null);
  const linksRef = useRef([]);
  const buttonRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);

  // Animation logic for initial load
  useEffect(() => {
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

  // Scroll behavior for changing navbar background
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition >= thirdSectionOffset && !isScrolled) {
        setIsScrolled(true);
        gsap.to(navbarRef.current, {
          backgroundColor: "rgba(0, 0, 0, 1)",
          duration: 0.5,
          ease: "power2.out",
        });
      } else if (scrollPosition < thirdSectionOffset && isScrolled) {
        setIsScrolled(false);
        gsap.to(navbarRef.current, {
          backgroundColor: "transparent",
          duration: 0.5,
          ease: "power2.out",
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrolled, thirdSectionOffset]);

  return (
    <nav
      ref={navbarRef}
      className="fixed top-0 w-full bg-transparent text-white px-20 pb-4 pt-6 flex justify-between items-center z-50"
    >
      <div className="text-2xl font-bold">
        <span ref={logoRef} className="overflow-hidden inline-block">
          Techkrate
        </span>
      </div>
      <div className="space-x-16 text-center flex">
        <Link
          to="/"
          ref={(el) => (linksRef.current[0] = el)}
          className="relative group text-white hover:text-gray-300 overflow-hidden"
        >
          <span>HOME</span>
          <span className="underline absolute left-0 bottom-0 w-full h-[2px] bg-current"></span>
        </Link>
        <Link
          to="/about"
          ref={(el) => (linksRef.current[1] = el)}
          className="relative group text-white hover:text-gray-300 overflow-hidden"
        >
          <span>ABOUT US</span>
          <span className="underline absolute left-0 bottom-0 w-full h-[2px] bg-current"></span>
        </Link>
        <Link
          to="/products"
          ref={(el) => (linksRef.current[2] = el)}
          className="relative group text-white hover:text-gray-300 overflow-hidden"
        >
          <span>PRODUCTS</span>
          <span className="underline absolute left-0 bottom-0 w-full h-[2px] bg-current"></span>
        </Link>
        <Link
          to="/blogs"
          ref={(el) => (linksRef.current[3] = el)}
          className="relative group text-white hover:text-gray-300 overflow-hidden"
        >
          <span>BLOGS</span>
          <span className="underline absolute left-0 bottom-0 w-full h-[2px] bg-current"></span>
        </Link>
      </div>
      <div
        ref={buttonRef}
        className="connect-btn p-4 bg-white rounded-full text-black transition-all duration-50 hover:bg-black group overflow-hidden hover:border-white border-2"
      >
        <Link to="/contact" className="flex items-center space-x-2 font-bold">
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
};

export default Navbar;
