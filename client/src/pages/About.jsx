import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Footer from "../components/Footer";
import bgVid from "/bgVid.mp4";

gsap.registerPlugin(ScrollTrigger);

const MessageCard = ({ title, message }) => (
  <div className="group relative z-10 max-w-2xl mx-auto p-8 bg-zinc-900/80 backdrop-blur-lg rounded-2xl shadow-xl transform-gpu transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    <h3 className="text-3xl text-center font-semibold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text ">{title}</h3>
    <p className="text-xl text-gray-300 relative z-10">{message}</p>
  </div>
);

const TeamMember = ({ name, role }) => (
  <div className="group relative space-y-4 perspective-1000">
    <div className="relative transform transition-all duration-700 preserve-3d group-hover:rotate-y-180">
      <div className="overflow-hidden rounded-2xl mx-auto w-72 h-72 bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center text-6xl font-semibold text-white shadow-xl">
        {name.split(" ").map(word => word[0]).join("")}
      </div>
      <div className="absolute inset-0 rounded-2xl bg-zinc-900/90 backdrop-blur-lg rotate-y-180 backface-hidden p-6 flex flex-col items-center justify-center">
        <p className="text-lg text-gray-300">
          {role === "Chief Executive Officer" ? 
            "Visionary leader driving innovation and strategic growth" :
            "Operational mastermind ensuring excellence in execution"}
        </p>
      </div>
    </div>
    <h4 className="text-2xl font-semibold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">{name}</h4>
    <p className="text-gray-400">{role}</p>
  </div>
);

const CharterItem = ({ title, content }) => (
  <li className="group relative p-6 bg-zinc-900/50 backdrop-blur-lg rounded-xl transition-all duration-500 hover:bg-zinc-900/80">
    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    <h4 className="text-xl font-semibold mb-2 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">{title}</h4>
    <p className="text-zinc-400">{content}</p>
  </li>
);

const AboutUs = () => {
  const headerRef = useRef(null);
  const teamRef = useRef(null);
  const charterRef = useRef(null);

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
    <div className="relative min-h-screen text-white overflow-hidden">
      <video
        className="fixed top-0 left-0 w-screen h-screen object-cover opacity-40"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={bgVid} type="video/mp4" />
      </video>

      <div className="relative z-10 px-6 md:px-16 py-20 space-y-32">
        {/* Header Section */}
        <div ref={headerRef} className="text-center max-w-6xl mx-auto">
          <div className="relative">
            <h2 className="text-8xl font-bold mb-6 mt-32 bg-gradient-to-r text-white bg-clip-text text-transparent">
              About Us
            </h2>
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 blur-3xl opacity-20 -z-10" />
          </div>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mt-10 space-y-6">
            Your gateway to simplifying the complex. We develop software and SaaS solutions that empower individuals and businesses to navigate and thrive in an increasingly digital world. Our approach transforms intricate problems into clear, actionable tools that work for everyone, regardless of expertise or experience.
            <br /><br />
            Imagine easily managing your business operations, scaling confidently, or solving daily challenges with absolute clarity. Whether you're a seasoned tech professional or a first-time user, Techkrate ensures that the experience is intuitive, powerful, and adaptable to your needs.
            <br /><br />
            We don't just build software; we create tools that bridge the gap between complexity and understanding. The future is complex—Techkrate makes it clear.
          </p>
        </div>

        {/* Team Members Section */}
        <div ref={teamRef} className="text-center max-w-6xl mx-auto">
          <h3 className="text-4xl font-semibold mb-16 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text ">
            Leading Techkrate
          </h3>
          <div className="grid md:grid-cols-2 gap-16 justify-items-center">
            {[
              { name: "Lalit Singh Chauhan", role: "Chief Executive Officer" },
              { name: "Utkarsh Chauhan", role: "Chief Operating Officer" },
            ].map((member, index) => (
              <TeamMember key={index} {...member} />
            ))}
          </div>
        </div>

        {/* CEO and COO Messages */}
        <div className="grid md:grid-cols-2 gap-12 max-w-7xl mx-auto">
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
        <div ref={charterRef} className="text-center max-w-6xl mx-auto">
          <h3 className="text-5xl font-bold mb-12 bg-gradient-to-r  ">
            Our Charter
          </h3>
          <div className="space-y-8">
            <p className="text-2xl text-gray-200 leading-relaxed">
              At Techkrate, we are not merely building software; we are architecting the next generation of SaaS solutions that empower businesses to thrive in a hyper-digital economy.
            </p>
            <ul className="grid gap-6">
              <CharterItem
                title="Operational Simplification at Scale"
                content="We specialize in abstracting complexity from mission-critical workflows, delivering SaaS platforms that streamline operations and drive unparalleled efficiency across organizations of all sizes."
              />
              <CharterItem
                title="User-Centric Innovation Framework"
                content="Our development philosophy prioritizes intuitive UX design, robust API integrations, and modular functionality, ensuring our platforms align seamlessly with evolving business needs and user expectations."
              />
              <CharterItem
                title="Enterprise-Grade Reliability and Excellence"
                content="We uphold the highest standards of security, performance, and compliance, delivering resilient SaaS infrastructures that enterprises can trust to handle their most sensitive operations."
              />
              <CharterItem
                title="Vision-Driven Ecosystem Leadership"
                content="As a catalyst for transformation, we lead with a visionary approach—fostering ecosystems of innovation that empower businesses to redefine industry benchmarks and deliver exponential value."
              />
            </ul>
            <p className="text-xl text-gray-300 leading-relaxed mt-8">
              This charter encapsulates our commitment to shaping the SaaS landscape through transformative, future-ready solutions that accelerate progress and drive meaningful impact.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutUs;