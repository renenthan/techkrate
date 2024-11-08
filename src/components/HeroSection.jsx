// src/components/HeroSection.jsx
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import moval from "../assets/image/moval.png"
import bgVid from "/bgVid.mp4"

function HeroSection() {
  const heroTextRef = useRef(null);
  const subHeadingRef = useRef(null);

  useEffect(() => {
    // Manually split text into words, wrap each word in a span with overflow-hidden wrapper
    const words = heroTextRef.current.innerText.split(" ");
    heroTextRef.current.innerHTML = words
      .map(
        (word) => `<span class="overflow-hidden inline-block"><span class="inline-block">${word}</span></span>`
      )
      .join(" ");

    // Select the inner spans containing each word for animation
    const splitWords = heroTextRef.current.querySelectorAll("span > span");

    // GSAP animation for each word to fade up individually
    gsap.from(splitWords, {
      duration: 1.5,
      opacity: 0,
      y: 50, // Start from below
      ease: "power4.out",
      stagger: 0.1, // Delay between each word animation
    });

    // Subheading fade-in animation
    gsap.fromTo(
      subHeadingRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power2.out" }
    );
  }, []);

  return (
    <section className="relative h-screen flex justify-between items-center bg-black text-white overflow-hidden px-20">
      {/* Background video */}
      <video className="absolute top-0 right-0 w-1/2 h-full object-cover transform scale-x-[-1] z-0" src={bgVid} autoPlay loop muted />

      {/* Text content on the left side */}
      <div className="relative z-20 text-left w-3/5 ">
        <h1 ref={heroTextRef} className="text-6xl md:text-8xl font-semibold leading-tight mb-4">
          Experience Motor Surveying Like Never Before.
        </h1>
        <p ref={subHeadingRef} className="text-lg md:text-2xl">
          Introducing Moval– an advanced platform designed to optimize motor claims processing for insurance companies and empower motor surveyors
          with customizable, AI-driven features such as Damage Detection & Real-Time Reporting.
        </p>
      </div>
      <div className="relative z-20">
        <img src={moval} alt="Moval" className="max-w-full h-auto" />
      </div>
    </section>
  );
}

export default HeroSection;
