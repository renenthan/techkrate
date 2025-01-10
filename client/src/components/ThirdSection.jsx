"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Circle } from "lucide-react";
import BGImage from "../assets/image/bgImage.jpg";

gsap.registerPlugin(ScrollTrigger);

export default function ThirdSection() {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const decorationRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    const decoration = decorationRef.current;
    const image = imageRef.current;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 60%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
        onEnter: () => tl.play(),
        onLeaveBack: () => tl.restart(),
      },
      defaults: { ease: "power2.out", duration: 2 },
    });

    tl.fromTo(content.children, { opacity: 0, y: 50 }, { opacity: 1, y: 0, stagger: 0.5 })
      .fromTo(
        decoration.children,
        { opacity: 0, scale: 0.9 },
        {
          opacity: 0.02,
          scale: 1,
          duration: 3,
          ease: "elastic.out(1, 0.3)",
        },
        "-=2"
      )
      .fromTo(image, { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 1.5 }, "-=1.5");

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex flex-col items-center justify-between bg-black text-white min-h-screen h-screen overflow-hidden py-10 px-6 font-Helix"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-center bg-no-repeat bg-cover filter blur-sm"></div>
      </div>
      <div ref={decorationRef} className="absolute inset-0 overflow-hidden pointer-events-none">
        <Circle className="absolute top-0 left-0 w-96 h-96 text-white opacity-0 -translate-x-1/2 -translate-y-1/2" />
        <Circle className="absolute bottom-0 right-0 w-[40rem] h-[40rem] text-white opacity-0 translate-x-1/4 translate-y-1/4" />
      </div>

      {/* Content Section */}
      <div ref={contentRef} className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
        <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4 leading-none tracking-tight">About</h2>
        <p className="text-lg sm:text-xl md:text-2xl mb-6 text-gray-400 leading-relaxed">
          Techkrate is a SaaS and software development company. Our mission is to craft software solutions that simplify and enhance business
          operations worldwide.
        </p>
        <button className="group inline-flex items-center px-6 py-3 text-lg font-semibold rounded-full bg-white text-black hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white focus:ring-offset-black transition duration-300 ease-in-out">
          Discover More
          <ArrowRight className="ml-2 h-6 w-6 transform group-hover:translate-x-1 transition-transform duration-300 ease-in-out" aria-hidden="true" />
        </button>
      </div>

      {/* Image Section */}
      <div ref={imageRef} className="relative z-10 w-full max-w-5xl mx-auto px-4">
        <img src={BGImage} alt="Background" className="w-auto h-full rounded-lg shadow-2xl" />
      </div>
    </section>
  );
}
