"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import bgVid from "/bgVid.mp4";
import { ArrowRight } from "lucide-react";
import ThirdSection from "./ThirdSection";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const HeroSection = () => {
  const containerRef = useRef(null);
  const textContainersRef = useRef([]);
  const heroTextRefs = useRef([]);
  const subHeadingRefs = useRef([]);
  const buttonRef = useRef([]);
  const dotsRef = useRef(null);

  const nextSectionRef = useRef(null);

  const slides = [
    {
      title: "Turning Complexity Into Clarity",
      subHeading:
        "We distil complex challenges into clear solutions, empowering organizations to advance with precision and purpose.",
      link: "/about",
    },
    {
      title: "Redefining Motor Claims Processing",
      subHeading:
        "Moval revolutionizes motor claims handling by integrating advanced technology with industry-specific workflows.",
      link: "/moval",
    },
    {
      title: "AI-Driven Assessment Intelligence",
      subHeading:
        "Moval's AI goes beyond damage detection, extracting complex data from assessment sheets and populating loss estimations instantly.",
      link: "/moval",
    },
    {
      title: "Regulatory-Compliant Survey Reports",
      subHeading:
        "Moval ensures survey reports strictly adhere to IRDA guidelines, maintaining compliance and professionalism.",
      link: "/moval",
    },
    {
      title: "Integrated Management and Mobile Approvals",
      subHeading:
        "Moval offers robust tools for multi-office management and automated estimate imports.",
      link: "/moval",
    },
  ];

  const [totalSlides] = useState(slides.length);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const textContainers = textContainersRef.current;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1,
        snap: 1 / (totalSlides - 1),
        end: () => `+=${window.innerWidth * (totalSlides - 1)}`,
        anticipatePin: 1,
        onUpdate: (self) => {
          const newSlide = Math.round(self.progress * (totalSlides - 1));
          setCurrentSlide(newSlide);
        },
      },
    });

    tl.to(textContainers, {
      xPercent: -100 * (totalSlides - 1),
      ease: "none",
    });

    heroTextRefs.current.forEach((heroTextRef, index) => {
      const words = heroTextRef.innerText.split(" ");
      heroTextRef.innerHTML = words
        .map(
          (word) =>
            `<span class="inline-block"><span class="inline-block">${word}</span></span>`
        )
        .join(" ");

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

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [totalSlides]);

  const scrollToSlide = (index) => {
    gsap.to(window, {
      duration: 1.5,
      scrollTo: { x: containerRef.current.offsetWidth * index, y: 0 },
      ease: "power3.inOut",
    });
  };

  const scrollToNextSection = () => {
    gsap.to(window, {
      duration: 1.5,
      scrollTo: { y: nextSectionRef.current, offsetY: 0 },
      ease: "power3.inOut",
    });
  };

  return (
    <>
      <div
        ref={containerRef}
        className="overflow-hidden h-screen relative font-Helix"
      >
        <video
          className="absolute top-0 right-0 w-auto h-full object-cover z-0"
          autoPlay
          loop  
          muted
          playsInline
        >
          <source src={bgVid} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-0 z-10"></div>
        <div className="relative z-20 h-full flex font-Helix">
          {slides.map((slide, index) => (
            <div
              key={index}
              ref={(el) => (textContainersRef.current[index] = el)}
              className="min-w-full h-full flex flex-col justify-center"
            >
              <div className="text-left w-full px-4 md:px-8 lg:px-16 pt-12">
                <div className="overflow-hidden">
                  <h2
                    ref={(el) => (heroTextRefs.current[index] = el)}
                    className="text-7xl md:text-9xl font-bold leading-tight mb-6 text-white"
                  >
                    {slide.title}
                  </h2>
                </div>
                <p
                  ref={(el) => (subHeadingRefs.current[index] = el)}
                  className="pt-1 text-lg text-[#9C9C9C] max-w-3xl"
                >
                  {slide.subHeading}
                </p>
                <a
                  href={slide.link}
                  className="connect-btn inline-block bg-white rounded-full text-black transition-all duration-50 hover:bg-black group overflow-hidden hover:border-white hover:text-white border-2 w-[170px] mt-5"
                >
                  <div className="flex items-center p-3 justify-center w-full">
                    <span className="transition-all duration-300 inline-block">
                      Discover More
                    </span>
                    <ArrowRight
                      className="ml-2 h-5 w-5 transition-transform duration-300 ease-in-out"
                      aria-hidden="true"
                    />
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
        <div
          ref={dotsRef}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30"
        >
          {slides.map((_, index) => (
            <div
              key={index}
              className={`w-2.5 h-2.5 rounded-full bg-white cursor-pointer transition-all duration-300 ${
                index === currentSlide ? "opacity-100 scale-125" : "opacity-50"
              }`}
              onClick={() => scrollToSlide(index)}
            ></div>
          ))}
        </div>
      </div>

      {/* Button to scroll to next section */}
      {/* <div className="fixed bottom-14 right-14 flex items-center justify-center z-30">
        <button
          onClick={scrollToNextSection}
          className="group w-12 h-12 bg-white rounded-full flex items-center justify-center transition-all duration-300 hover:bg-[#262626]"
          aria-label="Scroll to next section"
        >
          <div className="arrow w-5 h-5 border-r-2 border-b-2 border-black transform rotate-45 transition-colors duration-300 group-hover:border-white"></div>
        </button>
      </div> */}

      <div id="next-section" ref={nextSectionRef} className="h-screen bg-gray-900">
        <ThirdSection />
      </div>
    </>
  );
};

export default HeroSection;
