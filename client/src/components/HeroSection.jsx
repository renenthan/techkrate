"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import bgVid from "/bgVid.mp4";
import ThirdSection from "./ThirdSection";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const HeroSection = () => {
  const containerRef = useRef(null);
  const textContainersRef = useRef([]);
  const heroTextRefs = useRef([]);
  const subHeadingRefs = useRef([]);
  const nextSectionRef = useRef(null);
  const [nextSectionOffset, setNextSectionOffset] = useState(0);
  const buttonRef = useRef(null);

  const handleClick = () => {
    gsap.to(buttonRef.current, {
      scale: 0.95,
      duration: 0.1,
      ease: "power2.out",
      yoyo: true,
      repeat: 1,
    });
    gsap.to(buttonRef.current, {
      boxShadow: "0 0 0 2px rgba(255,255,255,0.5)",
      duration: 0.3,
      ease: "power2.out",
      yoyo: true,
      repeat: 1,
    });
  };

  useEffect(() => {
    const textContainers = textContainersRef.current;
    const totalSections = textContainers.length;

    gsap.to(textContainers, {
      xPercent: -100 * (totalSections - 1),
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1,
        snap: 1 / (totalSections - 1),
        end: () => "+=" + window.innerHeight * (totalSections - 1),
        anticipatePin: 1,
      },
    });

    heroTextRefs.current.forEach((heroTextRef, index) => {
      const words = heroTextRef.innerText.split(" ");
      heroTextRef.innerHTML = words.map((word) => `<span class="inline-block"><span class="inline-block">${word}</span></span>`).join(" ");

      const splitWords = heroTextRef.querySelectorAll("span > span");

      gsap.from(splitWords, {
        duration: 1.5,
        opacity: 0,
        y: 50,
        ease: "power4.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: textContainersRef.current[index],
          start: "top center",
          end: "bottom center",
          toggleActions: "play none none reverse",
        },
      });

      gsap.fromTo(
        subHeadingRefs.current[index],
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: textContainersRef.current[index],
            start: "top center",
            end: "bottom center",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    if (nextSectionRef.current) {
      setNextSectionOffset(nextSectionRef.current.offsetTop);
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const scrollToNextSection = () => {
    const nextSection = document.querySelector("#next-section");
    if (nextSection) {
      gsap.to(window, {
        duration: 1.5,
        scrollTo: {
          y: nextSection,
          offsetY: 0,
        },
        ease: "power3.inOut",
      });
    }
  };

  return (
    <>
      <div ref={containerRef} className="overflow-hidden h-screen relative">
        <video className="absolute top-0 right-0 w-full h-full object-cover z-0" autoPlay loop muted playsInline>
          <source src={bgVid} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
        <div className="relative z-20 h-full flex font-Helix">
          {[0, 1, 2, 3].map((index) => (
            <div key={index} ref={(el) => (textContainersRef.current[index] = el)} className="min-w-full h-full flex flex-col justify-center">
              <div className="text-left w-full px-4 md:px-8 lg:px-16 pt-20 md:pt-28"> {/* Adjusted padding */}
                <h2 ref={(el) => (heroTextRefs.current[index] = el)} className="text-7xl md:text-9xl font-bold leading-tight mb-6 text-white">
                  {index === 0 && "Experience Motor Surveying."}
                  {index === 1 && "Revolutionizing Motor Claims Processing"}
                  {index === 2 && "Transforming Surveying"}
                  {index === 3 && "Join the Revolution"}
                </h2>
                <p ref={(el) => (subHeadingRefs.current[index] = el)} className="text-xl md:text-2xl mt-4 max-w-2xl font-normal text-white">
                  {index === 0 &&
                    "Introducing Moval– an advanced platform designed to optimize motor claims processing for insurance companies and empower motor surveyors with customizable, AI-driven features such as Damage Detection & Real-Time Reporting."}
                  {index === 1 &&
                    "Our cutting-edge AI technology streamlines the entire claims process, reducing turnaround times and improving accuracy. Experience the future of motor surveying with Moval."}
                  {index === 2 &&
                    "Use advanced analytics to redefine how motor claims are handled, minimizing errors and improving satisfaction rates."}
                  {index === 3 && "Be a part of the movement to bring innovation and speed to motor claims processing with Moval."}
                </p>
                {(index === 0 || index === 3) && ( /* Button for both first and fourth sections */
                  <div className="mt-8">
                    <button
                      ref={buttonRef}
                      onClick={handleClick}
                      className="px-8 py-4 text-lg font-bold bg-white text-black rounded-full overflow-hidden shadow-lg group hover:shadow-xl transition-all duration-300 relative"
                    >
                      <span className="relative z-10">Discover More</span>
                      <span className="absolute bottom-0 left-0 h-0 w-full bg-gray-200 transition-all duration-300 group-hover:h-full"></span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={scrollToNextSection}
          className="group fixed bottom-8 right-8 w-16 h-16 bg-black rounded-full overflow-hidden transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 z-30"
          aria-label="Scroll to next section"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-6 h-6 border-r-2 border-b-2 border-white transform rotate-45 transition-colors duration-300">
              <div
                className="absolute w-3 h-3 border-r border-b border-white transform rotate-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 transition-all duration-300 group-hover:opacity-100"
                aria-hidden="true"
              ></div>
            </div>
          </div>
        </button>
      </div>
      <div id="next-section" ref={nextSectionRef} className="h-screen bg-gray-900">
        <ThirdSection />
      </div>
    </>
  );
};

export default HeroSection;
