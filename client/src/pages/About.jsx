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
  const charterRef = useRef(null);
  const ceoMessageRef = useRef(null);
  const cooMessageRef = useRef(null);

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

    // Our Charter animation
    gsap.fromTo(
      charterRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: charterRef.current,
          start: 'top 80%',
        },
      }
    );

    // CEO message 3D box animation
    gsap.fromTo(
      ceoMessageRef.current,
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ceoMessageRef.current,
          start: 'top 80%',
        },
      }
    );

    // COO message 3D box animation
    gsap.fromTo(
      cooMessageRef.current,
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cooMessageRef.current,
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
        <h2 className="text-5xl font-bold mb-6 mt-16">About Us</h2>
        <p className="text-xl text-left text-gray-300 max-w-4xl mx-auto">
          Your gateway to simplifying the complex. We develop software and SaaS solutions that empower individuals and businesses to navigate and thrive in an increasingly digital world. Our approach transforms intricate problems into clear, actionable tools that work for everyone, regardless of expertise or experience.
          <br /><br />
          Imagine easily managing your business operations, scaling confidently, or solving daily challenges with absolute clarity. Whether you&apos;re a seasoned tech professional or a first-time user, Techkrate ensures that the experience is intuitive, powerful, and adaptable to your needs.
          <br /><br />
          We don&apos;t just build software; we create tools that bridge the gap between complexity and understanding. The future is complex—Techkrate makes it clear.
        </p>
      </div>

       {/* Our Charter Section */}
       <div ref={charterRef} className="text-center relative z-10">
        <h3 className="text-3xl font-semibold mb-12">Our Charter</h3>
        <div className="space-y-8 max-w-4xl mx-auto text-left">
          <p className="text-xl text-gray-300">
            At Techkrate, we are not merely building software; we are architecting the next generation of SaaS solutions that empower businesses to thrive in a hyper-digital economy. Our guiding principles embody the values that define a global leader in technology-driven transformation:
          </p>
          <ul className="space-y-4 text-lg text-gray-400">
            <li><strong>Operational Simplification at Scale:</strong> We specialize in abstracting complexity from mission-critical workflows, delivering SaaS platforms that streamline operations and drive unparalleled efficiency across organizations of all sizes.</li>
            <li><strong>Agile Empowerment for Dynamic Growth:</strong> Designed with scalability and adaptability at the core, our solutions enable enterprises to pivot rapidly, capitalize on emerging opportunities, and achieve sustained growth in volatile markets.</li>
            <li><strong>User-Centric Innovation Framework:</strong> Our development philosophy prioritizes intuitive UX design, robust API integrations, and modular functionality, ensuring our platforms align seamlessly with evolving business needs and user expectations.</li>
            <li><strong>Enterprise-Grade Reliability and Excellence:</strong> Techkrate is committed to delivering highly secure, mission-critical platforms that offer high availability, real-time performance, and advanced analytical capabilities for enterprises worldwide.</li>
          </ul>
        </div>
      </div>

      {/* Team Members Section */}
      <div ref={teamRef} className="text-center relative z-10">
        <h3 className="text-3xl font-semibold mb-12">Leading Techkrate</h3>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-4">
            <a href="https://www.linkedin.com/in/team-member-1" target="_blank" rel="noopener noreferrer" className="block overflow-hidden rounded-full mx-auto w-64 h-64">
              <img
                src="https://avatars.dicebear.com/api/human/ceo.svg"
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
                src="https://avatars.dicebear.com/api/human/coo.svg"
                alt="Jane Smith"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              />
            </a>
            <h4 className="text-2xl font-semibold">Jane Smith</h4>
            <p className="text-gray-400">Chief Operating Officer</p>
          </div>
        </div>
      </div>

      {/* CEO Message Section with Hover Effect */}
      <div className='flex'>
      <div ref={ceoMessageRef} className="text-center relative z-10 max-w-2xl mx-auto p-8 bg-zinc-900 rounded-xl shadow-xl transform-gpu transition-transform duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-gray-600">
        <h3 className="text-3xl font-semibold mb-6">From the CEO</h3>
        <p className="text-xl text-gray-300">
          "At Techkrate, we envision a future where complexity is no longer a barrier to innovation. Our mission is to empower businesses with transformative tools that enable them to navigate the digital era with confidence and clarity. This is not just about building software—it’s about redefining the way the world works, connects, and grows. Together, we’re shaping a smarter, more intuitive tomorrow."
        </p>
      </div>

      {/* COO Message Section with Hover Effect */}
      <div ref={cooMessageRef} className="text-center relative z-10 max-w-2xl mx-auto p-8 bg-zinc-900 rounded-xl shadow-xl transform-gpu transition-transform duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-gray-600">
        <h3 className="text-3xl font-semibold mb-6">From the COO</h3>
        <p className="text-xl text-gray-300">
          "Operational excellence is the backbone of innovation, and at Techkrate, we ensure every process, platform, and solution is engineered for scalability, precision, and impact. Our commitment lies in bridging the gap between cutting-edge technology and seamless execution, empowering businesses to achieve their highest potential. The future of SaaS is here, and it’s driven by clarity and purpose."
        </p>
      </div>
      </div>
     

      <Footer />
    </div>
  );
};

export default AboutUs;
