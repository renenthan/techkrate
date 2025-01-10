import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Footer from "../components/Footer";
import AboutBg from "../assets/image/AboutBG.png";

gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
  const headerRef = useRef(null);
  const teamRef = useRef(null);
  const bgImageRef = useRef(null);

  useEffect(() => {
    // Header animation
    gsap.fromTo(
      headerRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: headerRef.current,
          start: 'top 80%',
        },
      }
    );

    // Team members animation
    gsap.fromTo(
      teamRef.current.children,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: teamRef.current,
          start: 'top 80%',
        },
      }
    );

    // Background image animation
    gsap.fromTo(
      bgImageRef.current,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: bgImageRef.current,
          start: 'top 80%',
        },
      }
    );
  }, []);

  return (
    <div className="bg-black text-white px-6 md:px-16 py-20 space-y-20 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute top-0 right-0 w-auto h-full opacity-100 z-0">
        <img
          ref={bgImageRef}
          src={AboutBg}
          alt="About Us Background"
          className="w-full h-auto max-w-7xl mx-auto object-contain"
        />
      </div>

      {/* Header Section */}
      <div ref={headerRef} className="text-center relative z-10">
        <h2 className="text-5xl font-bold mb-6 mt-16">About Us</h2>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Techkrate is your gateway to simplifying the complex. We develop software and SaaS solutions that empower individuals and businesses to navigate and thrive in an increasingly digital world. Our approach transforms intricate problems into clear, actionable tools that work for everyone, regardless of expertise or experience.<br /><br />

          Imagine managing your business operations easily, scaling with confidence, or solving daily challenges with clarity. Whether you're a seasoned tech professional or a first-time user, Techkrate ensures that the experience is intuitive, powerful, and adaptable to your needs.<br /><br />

          We don't just build software; we create tools that bridge the gap between complexity and understanding. We're here to empower you, offering clarity in every click, process, and solution. The future is complex—Techkrate makes it clear.
        </p>
      </div>

      {/* Team Members Section */}
      <div ref={teamRef} className="text-center relative z-10">
        <h3 className="text-3xl font-semibold mb-12">Our Team</h3>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-4">
            <a href="https://www.linkedin.com/in/team-member-1" target="_blank" rel="noopener noreferrer" className="block overflow-hidden rounded-full mx-auto w-64 h-64">
              <img
                src="https://via.placeholder.com/300x300"
                alt="John Doe"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              />
            </a>
            <h4 className="text-2xl font-semibold">John Doe</h4>
            <p className="text-gray-400">Chief Executive Officer</p>
          </div>
          <div className="space-y-4">
            <a href="https://www.linkedin.com/in/team-member-2" target="_blank" rel="noopener noreferrer" className="block overflow-hidden rounded-full mx-auto w-64 h-64">
              <img
                src="https://via.placeholder.com/300x300"
                alt="Jane Smith"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              />
            </a>
            <h4 className="text-2xl font-semibold">Jane Smith</h4>
            <p className="text-gray-400">Chief Technology Officer</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutUs;
