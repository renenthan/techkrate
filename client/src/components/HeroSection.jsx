"use client";

import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import bgVid from "/bgVid.mp4";
import ThirdSection from "./ThirdSection";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const HeroSection = () => {
  const containerRef = useRef(null);
  const textContainersRef = useRef([]);
  const heroTextRefs = useRef([]);
  const subHeadingRefs = useRef([]);
  const nextSectionRef = useRef(null);
  const buttonRef = useRef([]);
  const dotsRef = useRef(null);

  const slides = [
    {
      title: "Turning Complexity Into Clarity",
      subHeading:
        "We distil complex challenges into clear solutions, empowering organizations to advance with precision and purpose. Together, we forge a future where technology illuminates the path to progress and catalyzes meaningful, transformative change.",
      link: "/about",
    },
    {
      title: "Redefining Motor Claims Processing",
      subHeading:
        "Moval revolutionizes motor claims handling by integrating advanced technology with industry-specific workflows. It simplifies vehicle assessments, expedites resolutions, and enhances operational accuracy, providing a streamlined, efficient, and dependable process tailored to insurers and surveyors alike.",
      link: "/moval",
    },
    {
      title: "AI-Driven Assessment Intelligence",
      subHeading:
        "Moval’s AI goes beyond damage detection, extracting complex data from assessment sheets and populating loss estimations instantly. Automating manual inputs accelerates workflows, enhances precision, and empowers surveyors with cutting-edge technology for unparalleled efficiency.",
      link: "/moval",
    },
    {
      title: "Regulatory-Compliant Survey Reports",
      subHeading:
        "Moval ensures survey reports strictly adhere to IRDA guidelines, maintaining compliance and professionalism. Its standardized processes guarantee transparent reporting, enabling insurers and surveyors to meet regulatory requirements while delivering consistent and trustworthy claim assessments.",
      link: "/moval",
    },
    {
      title: "Integrated Management and Mobile Approvals",
      subHeading:
        "Moval offers robust tools for multi-office management and automated estimate imports. Its mobile-enabled platform facilitates instant report approvals, empowering stakeholders to make real-time decisions while enhancing productivity and collaboration across diverse operational setups.",
      link: "/moval",
    },
  ];

  const [totalSlides] = useState(slides.length);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleClick = (index) => {
    gsap.to(buttonRef.current[index], {
      scale: 0.95,
      duration: 0.1,
      ease: "power2.out",
      yoyo: true,
      repeat: 1,
    });
    gsap.to(buttonRef.current[index], {
      boxShadow: "0 0 0 2px rgba(255,255,255,0.5)",
      duration: 0.3,
      ease: "power2.out",
      yoyo: true,
      repeat: 1,
    });
  };

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

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [totalSlides]);

  useEffect(() => {
    gsap.to(dotsRef.current.children, {
      scale: (i) => (i === currentSlide ? 1.5 : 1),
      opacity: (i) => (i === currentSlide ? 1 : 0.5),
      duration: 0.3,
      ease: "power2.out",
    });
  }, [currentSlide]);

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
        <video className="absolute top-0 right-0 w-auto h-full object-cover z-0" autoPlay loop muted playsInline>
          <source src={bgVid} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-0 z-10 "></div>
        <div className="relative z-20 h-full flex font-Helix">
          {slides.map((slide, index) => (
            <div key={index} ref={(el) => (textContainersRef.current[index] = el)} className="min-w-full h-full flex flex-col justify-center">
              <div className="text-left w-full px-4 md:px-8 lg:px-16 pt-12">
                <div className="overflow-hidden">
                  <h2 ref={(el) => (heroTextRefs.current[index] = el)} className="text-7xl md:text-9xl font-bold leading-tight mb-6 text-white">
                    {slide.title}
                  </h2>
                </div>
                <p ref={(el) => (subHeadingRefs.current[index] = el)} className="pt-1 text-lg text-[#9C9C9C] max-w-3xl">
                  {slide.subHeading}
                </p>
                <div
                  ref={(el) => (buttonRef.current[index] = el)}
                  className="connect-btn p-3 bg-white rounded-full text-black transition-all duration-50 hover:bg-black group overflow-hidden hover:border-white hover:text-white border-2 w-[150px] mt-5 place-items-center"
                  onClick={() => handleClick(index)}
                >
                  <Link to={slide.link} className="flex items-center space-x-1.5 font-semibold text-sm">
                    <span className="group-hover:text-white transition-all duration-300 inline-block">Discover More</span>
                    <ArrowRight
                      className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300 ease-in-out"
                      aria-hidden="true"
                    />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Slide indicator dots */}
        <div ref={dotsRef} className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
          {slides.map((_, index) => (
            <div key={index} className="w-3 h-3 rounded-full bg-white transition-all duration-300"></div>
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
