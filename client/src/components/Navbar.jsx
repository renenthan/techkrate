import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import logo from "../assets/image/logo.svg";
import { ArrowRight } from "lucide-react";

const Navbar = () => {
  const navbarRef = useRef(null);
  const logoRef = useRef(null);
  const linksRef = useRef([]);
  const buttonRef = useRef(null);
  const [hoveredLink, setHoveredLink] = useState(null);
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { duration: 0.3, ease: "power2.out" } });

    tl.fromTo([logoRef.current, ...linksRef.current, buttonRef.current], { y: -20, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.1 });

    linksRef.current.forEach((link, index) => {
      const underline = link.querySelector(".underline");
      gsap.set(underline, { scaleX: 0, transformOrigin: "left" });

      link.addEventListener("mouseenter", () => {
        gsap.to(underline, { scaleX: 1, duration: 0.3, ease: "power2.inOut" });
        setHoveredLink(index);
      });

      link.addEventListener("mouseleave", () => {
        gsap.to(underline, { scaleX: 0, duration: 0.3, ease: "power2.inOut" });
        setHoveredLink(null);
      });
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const visible = prevScrollPos > currentScrollPos || currentScrollPos < 10;

      setIsVisible(visible);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  useEffect(() => {
    gsap.to(navbarRef.current, {
      y: isVisible ? 0 : -100,
      duration: 0.3,
      ease: "power2.inOut",
    });
  }, [isVisible]);

  useEffect(() => {
    linksRef.current.forEach((link, index) => {
      if (index !== hoveredLink) {
        gsap.to(link, { opacity: hoveredLink !== null ? 0.2 : 1, duration: 0.3 });
      } else {
        gsap.to(link, { opacity: 1, duration: 0.3 });
      }
    });
  }, [hoveredLink]);

  return (
    <nav
      ref={navbarRef}
      className="fixed top-0 w-full bg-transparent text-white px-14 pb-4 pt-6 flex justify-between items-center z-50 font-Helix transition-all duration-300"
    >
      <div ref={logoRef} className="text-2xl font-bold flex items-center">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Logo" className="w-20 h-auto" />
          <span className="overflow-hidden inline-block">Techkrate</span>
        </Link>
      </div>
      <div className="space-x-16 text-center text-[15px] flex relative">
        <Link
          to="/"
          ref={(el) => (linksRef.current[0] = el)}
          className="relative group text-white overflow-hidden"
          onMouseEnter={() => setHoveredLink(0)}
          onMouseLeave={() => setHoveredLink(null)}
        >
          <span>HOME</span>
          <span className="underline absolute left-0 bottom-0 w-full h-[2px] bg-current"></span>
        </Link>
        <Link
          to="/about"
          ref={(el) => (linksRef.current[1] = el)}
          className="relative group text-white  overflow-hidden"
          onMouseEnter={() => setHoveredLink(1)}
          onMouseLeave={() => setHoveredLink(null)}
        >
          <span>ABOUT US</span>
          <span className="underline absolute left-0 bottom-0 w-full h-[2px] bg-current"></span>
        </Link>
        <div
          className="relative group text-white cursor-pointer"
          ref={(el) => (linksRef.current[2] = el)}
          onMouseEnter={() => setHoveredLink(2)}
          onMouseLeave={() => setHoveredLink(null)}
        >
          <span>PRODUCTS</span>
          <span className="underline absolute left-0 bottom-0 w-full h-[2px] bg-current"></span>

          <div className="absolute left-1/2 -translate-x-1/2 mt-4 bg-black text-white p-4 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Link to="/product1" className="block py-2 px-4 hover:border-white hover:border-2">
              Moval
            </Link>
            <Link to="/product2" className="block py-2 px-4 hover:border-white hover:border-2">
              Cars
            </Link>
          </div>
        </div>
        <Link
          to="/blogs"
          ref={(el) => (linksRef.current[3] = el)}
          className="relative group text-white overflow-hidden"
          onMouseEnter={() => setHoveredLink(3)}
          onMouseLeave={() => setHoveredLink(null)}
        >
          <span>BLOGS</span>
          <span className="underline absolute left-0 bottom-0 w-full h-[2px] bg-current"></span>
        </Link>
      </div>
      <div
        ref={buttonRef}
        className="connect-btn p-3 bg-white rounded-full text-black transition-all duration-50 hover:bg-black group overflow-hidden hover:border-white border-2 hover:text-white"
      >
        <Link to="/contact" className="flex items-center space-x-1.5 font-semibold text-sm">
          <span className="group-hover:text-white transition-all duration-300 inline-block">Connect with Us</span>
          <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300 ease-in-out" aria-hidden="true" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
