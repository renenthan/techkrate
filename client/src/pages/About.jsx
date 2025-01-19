import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Footer from "../components/Footer";
import AboutBg from "../assets/image/AboutBG.png";

gsap.registerPlugin(ScrollTrigger);

const MessageCard = ({ title, message }) => (
  <div className="mt-10 relative z-10 max-w-2xl mx-auto p-8 bg-zinc-900 rounded-xl shadow-xl transform-gpu transition-transform duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-gray-600">
    <h3 className="text-3xl text-center font-semibold mb-6">{title}</h3>
    <p className="text-xl text-gray-300">{message}</p>
  </div>
);

const AboutUs = () => {
  const headerRef = useRef(null);
  const teamRef = useRef(null);
  const bgImageRef = useRef(null);
  const charterRef = useRef(null);
  const ceoMessageRef = useRef(null);
  const cooMessageRef = useRef(null);

  useEffect(() => {
    const fadeInAnimation = (element, trigger) => {
      gsap.fromTo(
        element,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: trigger || element,
            start: 'top 80%',
          },
        }
      );
    };

    fadeInAnimation(headerRef.current);
    fadeInAnimation(charterRef.current);
    fadeInAnimation(ceoMessageRef.current);
    fadeInAnimation(cooMessageRef.current);

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
          className="w-full h-auto max-w-7xl mx-auto object-cover"
        />
      </div>

      {/* Header Section */}
      <div ref={headerRef} className="text-center relative z-10">
        <h2 className="text-7xl  font-bold mb-6 mt-32">About Us</h2>
        <p className="text-lg md:text-2xl text-center text-gray-300 max-w-4xl mx-auto leading-relaxed mt-10"> 
        Your gateway to simplifying the complex. We develop software and SaaS solutions that empower individuals and businesses to navigate and thrive in an increasingly digital world. Our approach transforms intricate problems into clear, actionable tools that work for everyone, regardless of expertise or experience.
        <br /><br />  

        Imagine easily managing your business operations, scaling confidently, or solving daily challenges with absolute clarity. Whether you&apos;re a seasoned tech professional or a first-time user, Techkrate ensures that the experience is intuitive, powerful, and adaptable to your needs.
        <br /><br />

        We don&apos;t just build software; we create tools that bridge the gap between complexity and understanding. The future is complex—Techkrate makes it clear.
        </p>
      </div>

      

      {/* Team Members Section */}
      <div ref={teamRef} className="text-center relative z-10">
        <h3 className="text-3xl font-semibold mt-32 mb-12">Leading Techkrate</h3>
        <div className="grid md:grid-cols-2 gap-12">
          {[
            { name: "Lalit Singh Chauhan", role: "Chief Executive Officer" },
            { name: "Utkarsh Chauhan", role: "Chief Operating Officer" },
          ].map((member, index) => (
            <div key={index} className="space-y-4">
              <div className="overflow-hidden rounded-full mx-auto w-64 h-64 bg-gray-700 flex items-center justify-center text-4xl font-semibold text-white">
                {member.name
                  .split(" ")
                  .map(word => word[0])
                  .join("")}
              </div>
              <h4 className="text-2xl font-semibold">{member.name}</h4>
              <p className="text-gray-400">{member.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CEO and COO Messages */}
      <div className="flex flex-col md:flex-row gap-12">
        <MessageCard
          title="From the CEO"
          message="At Techkrate, we envision a future where complexity is no longer a barrier to innovation. Our mission is to empower businesses with transformative tools that enable them to navigate the digital era with confidence and clarity. This is not just about building software—it's about redefining the way the world works, connects, and grows. Together, we're shaping a smarter, more intuitive tomorrow."
        />
        <MessageCard
          title="From the COO"
          message="Operational excellence is the backbone of innovation, and at Techkrate, we ensure every process, platform, and solution is engineered for scalability, precision, and impact. Our commitment lies in bridging the gap between cutting-edge technology and seamless execution, empowering businesses to achieve their highest potential. The future of SaaS is here, and it's driven by clarity and purpose."
        />
      </div>

      {/* Our Charter Section */}
      <div ref={charterRef} className="text-center relative z-10">
        <h3 className="text-4xl font-bold mb-12">Our Charter</h3>
        <div className="space-y-8 max-w-5xl mx-auto text-left">
          <p className="text-2xl md:text-xl text-gray-200 leading-relaxed">
            At Techkrate, we are not merely building software; we are architecting the next generation of SaaS solutions that empower businesses to thrive in a hyper-digital economy.
          </p>
          <ul className="space-y-4 text-xl text-zinc-400 leading-relaxed">
            <li><strong>Operational Simplification at Scale</strong><br />
            We specialize in abstracting complexity from mission-critical workflows, delivering SaaS platforms that streamline operations and drive unparalleled efficiency across organizations of all sizes.
            </li>

            <li><strong>User-Centric Innovation Framework</strong><br /> 
            Our development philosophy prioritizes intuitive UX design, robust API integrations, and modular functionality, ensuring our platforms align seamlessly with evolving business needs and user expectations.</li>

            <li><strong>Enterprise-Grade Reliability and Excellence</strong><br /> 
            We uphold the highest standards of security, performance, and compliance, delivering resilient SaaS infrastructures that enterprises can trust to handle their most sensitive operations.
            </li>

            <li><strong>Vision-Driven Ecosystem Leadership</strong><br /> 
            As a catalyst for transformation, we lead with a visionary approach—fostering ecosystems of innovation that empower businesses to redefine industry benchmarks and deliver exponential value.
            </li>

            


          </ul>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">This charter encapsulates our commitment to shaping the SaaS landscape through transformative, future-ready solutions that accelerate progress and drive meaningful impact.</p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutUs;
