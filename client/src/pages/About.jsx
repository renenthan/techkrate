import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Footer from "../components/Footer";

gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
  const headerRef = useRef(null);
  const missionRef = useRef(null);
  const storyRef = useRef(null);
  const teamRef = useRef(null);

  useEffect(() => {
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

    gsap.fromTo(
      missionRef.current.children,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: missionRef.current,
          start: 'top 80%',
        },
      }
    );

    gsap.fromTo(
      storyRef.current.children,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: storyRef.current,
          start: 'top 80%',
        },
      }
    );

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
  }, []);

  return (
      <div className="bg-black text-white px-6 md:px-16 py-20 space-y-20">
        {/* Header Section */}
        <div ref={headerRef} className="text-center">
          <h2 className="text-5xl font-bold mb-6 mt-16">About Us</h2>
          <p className="text-xl text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        {/* Two Columns Section */}
        <div ref={missionRef} className="grid md:grid-cols-2 gap-20 items-center">
          <div>
            <img
              src="https://via.placeholder.com/800x600"
              alt="Team"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          <div>
            <h3 className="text-3xl font-semibold mb-6 text-white">
              Our Mission: Lorem Ipsum Dolor Sit Amet
            </h3>
            <p className="text-lg text-gray-400 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>

        {/* Our Story Section */}
        <div ref={storyRef} className="grid md:grid-cols-2 gap-20 items-center">
          <div>
            <h3 className="text-3xl font-semibold mb-6 text-white">Our Story</h3>
            <p className="text-lg text-gray-400 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div>
            <img
              src="https://via.placeholder.com/800x600"
              alt="Office"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>

        {/* Team Members Section */}
        <div ref={teamRef} className="text-center">
          <h3 className="text-3xl font-semibold mb-12 text-white">Our Team</h3>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <a href="https://www.linkedin.com/in/team-member-1" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://via.placeholder.com/300x300"
                  alt="John Doe"
                  className="rounded-full mx-auto transition-transform duration-300 hover:scale-105 w-64 h-64"
                />
              </a>
              <h4 className="text-2xl font-semibold">John Doe</h4>
              <p className="text-gray-400">Chief Executive Officer</p>
            </div>
            <div className="space-y-4">
              <a href="https://www.linkedin.com/in/team-member-2" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://via.placeholder.com/300x300"
                  alt="Jane Smith"
                  className="rounded-full mx-auto transition-transform duration-300 hover:scale-105 w-64 h-64"
                />
              </a>
              <h4 className="text-2xl font-semibold">Jane Smith</h4>
              <p className="text-gray-400">Chief Technology Officer</p>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
  );
};

export default AboutUs;
