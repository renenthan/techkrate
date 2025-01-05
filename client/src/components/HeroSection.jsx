"use client";

import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import bgVid from "/bgVid.mp4";
import ThirdSection from "./ThirdSection";
import { ArrowRight } from 'lucide-react';

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
        duration: 1,
        y: "100%",
        ease: "power4.out",
        stagger: 0.05,
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
      <div ref={containerRef} className="overflow-hidden h-screen relative font-Helix">
        <video className="absolute top-0 right-0 w-full h-full object-cover z-0" autoPlay loop muted playsInline>
          <source src={bgVid} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-0 z-10 "></div>
        <div className="relative z-20 h-full flex font-Helix">
          {[0, 1, 2, 3].map((index) => (
            <div key={index} ref={(el) => (textContainersRef.current[index] = el)} className="min-w-full h-full flex flex-col justify-center">
              <div className="text-left w-full px-4 md:px-8 lg:px-16 pt-12">
                <div className="overflow-hidden">
                  <h2
                    ref={(el) => (heroTextRefs.current[index] = el)}
                    className="text-7xl md:text-9xl font-bold leading-tight mb-6 text-white"
                  >
                    {index === 0 && "Experience Motor Surveying Like Never Before."}    
                    {index === 1 && "Revolutionizing Motor Claims Processing"}
                    {index === 2 && "Transforming Surveying"}
                    {index === 3 && "Join the Revolution"}
                  </h2>
                </div>
                <p
                  ref={(el) => (subHeadingRefs.current[index] = el)}
                  className="pt-1 text-lg text-[#9C9C9C] max-w-3xl"
                >
                  {index === 0 &&
                    "Introducing Moval– an advanced platform designed to optimize motor claims processing for insurance companies and empower motor surveyors with customizable, AI-driven features such as Damage Detection & Real-Time Reporting."}
                  {index === 1 &&
                    "Our cutting-edge AI technology streamlines the entire claims process, reducing turnaround times and improving accuracy. Experience the future of motor surveying with Moval."}
                  {index === 2 &&
                    "Use advanced analytics to redefine how motor claims are handled, minimizing errors and improving satisfaction rates."}
                  {index === 3 && "Be a part of the movement to bring innovation and speed to motor claims processing with Moval."}
                </p>
                {(index === 0 || index === 3) && (
                  <div
                    ref={buttonRef}
                    className="connect-btn p-3 bg-white rounded-full text-black transition-all duration-50 hover:bg-black group overflow-hidden hover:border-white hover:text-white border-2 w-[150px] mt-5 place-items-center"
                  >
                    <Link to="/contact" className="flex items-center space-x-1.5 font-semibold text-sm">
                      <span className="group-hover:text-white transition-all duration-300 inline-block">Discover More</span>
                      <ArrowRight
                        className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300 ease-in-out "
                        aria-hidden="true"
                      />
                    </Link>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={scrollToNextSection}
          className="group fixed bottom-8 right-8 w-10 h-10 bg-white rounded-full overflow-hidden transition-all duration-300 focus:outline-none outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 z-30 hover:bg-[#262626]"
          aria-label="Scroll to next section"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-2 h-2 border-r-2 border-b-2 border-black transform rotate-45 transition-colors duration-300 group-hover:border-white"></div>
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
