"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Cpu, Layers, Zap, Cloud, BarChart3, Code } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const ServiceSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardRefs = useRef([]);

  const services = [
    {
      title: "Strategy & Advisory",
      description: "Custom product creation with design and customization options.",
      icon: <Cpu className="h-12 w-12 text-blue-400" />,
    },
    {
      title: "System Integration & Optimization",
      description: "Seamless integration and optimization of your existing systems.",
      icon: <Layers className="h-12 w-12 text-blue-400" />,
    },
    {
      title: "AI-powered Automation",
      description: "Cutting-edge AI solutions to automate and enhance your processes.",
      icon: <Zap className="h-12 w-12 text-blue-400" />,
    },
    {
      title: "Cloud Solutions & Infrastructure",
      description: "Robust cloud solutions and infrastructure management services.",
      icon: <Cloud className="h-12 w-12 text-blue-400" />,
    },
    {
      title: "Data Analytics and Insights",
      description: "Transform your data into actionable insights for informed decisions.",
      icon: <BarChart3 className="h-12 w-12 text-blue-400" />,
    },
    {
      title: "Custom Application Development",
      description: "Tailored application development to meet your unique needs.",
      icon: <Code className="h-12 w-12 text-blue-400" />,
    },
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const cards = cardRefs.current;

    gsap.fromTo(
      title,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      cards,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: section,
          start: "top 60%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className=" h-screen bg-gradient-to-b from-gray-900 to-black text-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          ref={titleRef}
          className="text-4xl md:text-5xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600"
        >
          Elevate Your Operations with Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
            >
              <div className="flex items-center justify-center mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-center">{service.title}</h3>
              <p className="text-gray-400 text-center">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
