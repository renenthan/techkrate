"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Cpu, Layers, Zap, Cloud, BarChart3, Code } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const ServiceSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardRefs = useRef([]);

  const services = [
    {
      title: "Strategy & Advisory",
      description: "Custom product creation with design and customization options.",
      icon: <Cpu className="h-8 w-8" />,
    },
    {
      title: "System Integration",
      description: "Seamless integration and optimization of your existing systems.",
      icon: <Layers className="h-8 w-8" />,
    },
    {
      title: "AI-powered Automation",
      description: "Cutting-edge AI solutions to automate and enhance your processes.",
      icon: <Zap className="h-8 w-8" />,
    },
    {
      title: "Cloud Solutions",
      description: "Robust cloud solutions and infrastructure management services.",
      icon: <Cloud className="h-8 w-8" />,
    },
    {
      title: "Data Analytics",
      description: "Transform your data into actionable insights for informed decisions.",
      icon: <BarChart3 className="h-8 w-8" />,
    },
    {
      title: "Custom Development",
      description: "Tailored application development to meet your unique needs.",
      icon: <Code className="h-8 w-8" />,
    },
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const cards = cardRefs.current;

    gsap.fromTo(
      title,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "top 20%",
          toggleActions: "play none none reverse",
        },
      }
    );

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            end: "top 60%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Hover animation
      const cardBg = card.querySelector('.card-bg');
      const tl = gsap.timeline({ paused: true });

      tl.to(cardBg, {
        opacity: 1,
        duration: 0.3,
        ease: "power2.inOut",
      });

      tl.to(
        card,
        {
          scale: 1.05,
          duration: 0.3,
          ease: "power2.out",
        },
        "-=0.3"
      );

      card.addEventListener("mouseenter", () => tl.play());
      card.addEventListener("mouseleave", () => tl.reverse());
    });
  }, []);

  return (
    <section ref={sectionRef} className="h-screen bg-black text-white flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <h2 ref={titleRef} className="text-4xl md:text-5xl font-bold mb-16 text-center">
          Elevate Your Operations
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className="relative bg-white bg-opacity-5 rounded-lg p-6 overflow-hidden group transition-transform duration-300 ease-in-out"
            >
              <div className="card-bg absolute inset-0 bg-white opacity-0 transition-opacity duration-300 pointer-events-none"></div>
              <div className="relative z-10 flex flex-col items-center space-y-4">
                <div className="p-3 rounded-full border-2 border-white group-hover:border-black transition-colors duration-300">
                  {React.cloneElement(service.icon, {
                    className: "text-white group-hover:text-black transition-colors duration-300",
                  })}
                </div>
                <h3 className="text-lg font-semibold text-center text-white group-hover:text-black transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-400 text-center group-hover:text-gray-800 transition-colors duration-300">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
