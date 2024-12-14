"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Circle } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function ThirdSection() {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const decorationRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    const decoration = decorationRef.current;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 60%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
        onEnter: () => tl.play(),
        onLeaveBack: () => tl.restart(),
      },
      defaults: { ease: "power2.out", duration: 2 }
    });

    tl.fromTo(content.children, 
      { opacity: 0, y: 50 }, 
      { opacity: 1, y: 0, stagger: 0.5 }
    )
    .fromTo(decoration.children, 
      { opacity: 0, scale: 0.9 }, 
      { opacity: 0.02, scale: 1, duration: 3, ease: "elastic.out(1, 0.3)" }, 
      "-=2"
    );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex items-center justify-center bg-black text-white min-h-screen overflow-hidden py-20"
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-center bg-no-repeat bg-cover filter blur-sm"></div>
      </div>
      <div ref={decorationRef} className="absolute inset-0 overflow-hidden pointer-events-none">
        <Circle className="absolute top-0 left-0 w-96 h-96 text-white opacity-0 -translate-x-1/2 -translate-y-1/2" />
        <Circle className="absolute bottom-0 right-0 w-[40rem] h-[40rem] text-white opacity-0 translate-x-1/4 translate-y-1/4" />
      </div>
      <div ref={contentRef} className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <h2 className="text-6xl sm:text-7xl md:text-8xl font-bold mb-4 leading-none tracking-tight">
          Techkrate
        </h2>
        <p className="text-3xl sm:text-4xl md:text-5xl font-light mb-8 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
          Redefining Motor Claims
        </p>
        <p className="text-lg sm:text-xl md:text-2xl mb-12 text-gray-400 max-w-3xl mx-auto leading-relaxed">
          Turning complexity into clarity by designing solutions that anticipate needs, inspire change & elevate your experience.
        </p>
        <button
          className="group inline-flex items-center px-8 py-4 text-lg font-semibold rounded-full bg-white text-black hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white focus:ring-offset-black transition duration-300 ease-in-out"
        >
          Discover More
          <ArrowRight className="ml-2 h-6 w-6 transform group-hover:translate-x-1 transition-transform duration-300 ease-in-out" aria-hidden="true" />
        </button>
      </div>
    </section>
  );
}
