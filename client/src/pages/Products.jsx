import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Bgimage from "../assets/image/bgimage.jpg";
import Download1 from "../assets/image/download1.jpg";

gsap.registerPlugin(ScrollTrigger);

const ProductsPage = () => {
  const [showAllPartners, setShowAllPartners] = useState(false);

  const heroRef = useRef(null);
  const successStoriesRef = useRef(null);
  const partnersRef = useRef(null);
  const productRefs = useRef([]);

  useEffect(() => {
    // Hero section animation
    gsap.fromTo(heroRef.current.querySelector("h1"), { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, delay: 0.5 });
    gsap.fromTo(heroRef.current.querySelector("button"), { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1, delay: 1 });

    // Products section animation
    productRefs.current.forEach((product, index) => {
      if (product) {
        gsap.fromTo(
          product.querySelectorAll(".flex-1"),
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.2,
            scrollTrigger: {
              trigger: product,
              start: "top 80%",
            },
          }
        );
      }
    });

    // Success Stories section animation
    gsap.fromTo(
      successStoriesRef.current.querySelectorAll(".success-story"),
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: successStoriesRef.current,
          start: "top 80%",
        },
      }
    );

    // Partners section animation
    gsap.fromTo(
      partnersRef.current.querySelectorAll(".partner-logo"),
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        stagger: 0.1,
        scrollTrigger: {
          trigger: partnersRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <div className="font-sans bg-gray-900 text-white overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <div ref={heroRef} className="relative h-screen flex items-center justify-center bg-black text-white">
        <div className="text-center z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our AI-powered products, for today&apos;s real-world problems</h1>
          <button className="bg-white text-black px-6 py-3 rounded-full shadow-lg hover:bg-gray-200 transition duration-300">Request Demo</button>
        </div>
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <img src={Bgimage} alt="Background" className="w-full h-full object-cover opacity-30" />
        </div>
      </div>

      {/* Products Section */}
      {[...Array(4)].map((_, index) => (
        <div
          key={index}
          ref={(el) => (productRefs.current[index] = el)}
          className="text-slate-400 container mx-auto px-4 py-16 max-w-7xl"
        >
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Text Content */}
            {index % 2 === 0 && (
              <div className="flex-1 space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-blue-700">How do you assess a car when it&apos;s on the road or one town over?</h2>
                <p className="text-lg">
                  For used car dealers who buy cars sight unseen, and for fleet managers assessing cars in use, it&apos;s a common dilemma.
                </p>
                <p className="text-lg">
                  Tractable&apos;s Applied AI helps you value, inspect and appraise cars even when they&apos;re miles away. Dealers can use AI vision to
                  assess a car&apos;s condition and be confident in making the right purchase price. Fleet managers can access AI-powered video capture
                  and journey tracking to make sure their fleet is traveling safely.
                </p>
              </div>
            )}

            {/* Image Section */}
            <div className="flex-1 relative">
              <div className="aspect-square rounded-full border-2 border-purple-500 overflow-hidden">
                <img src={index % 2 === 0 ? Download1 : "/api/placeholder/600/600"} alt="Aerial view of car lot" className="w-full h-full object-cover" />
              </div>
              <div className="absolute inset-0 rounded-full border-2 border-purple-500 -rotate-6"></div>
            </div>

            {/* Text Content */}
            {index % 2 !== 0 && (
              <div className="flex-1 space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-blue-700">How do you assess a car when it&apos;s on the road or one town over?</h2>
                <p className="text-lg">
                  For used car dealers who buy cars sight unseen, and for fleet managers assessing cars in use, it&apos;s a common dilemma.
                </p>
                <p className="text-lg">
                  Tractable&apos;s Applied AI helps you value, inspect and appraise cars even when they&apos;re miles away. Dealers can use AI vision to
                  assess a car&apos;s condition and be confident in making the right purchase price. Fleet managers can access AI-powered video capture
                  and journey tracking to make sure their fleet is traveling safely.
                </p>
              </div>
            )}
          </div>
        </div>
      ))}

      {/* Customer Success Stories Section */}
      <div ref={successStoriesRef} className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-center text-4xl font-semibold mb-16">Customer Success Stories</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                name: "John Doe",
                company: "ABC Insurance",
                quote: "Tractable's AI has revolutionized our claims process, reducing assessment time by 70% and improving customer satisfaction.",
                image: "https://via.placeholder.com/150",
              },
              {
                name: "Jane Smith",
                company: "XYZ Auto",
                quote:
                  "With Tractable Auto Inspector, we've streamlined our vehicle condition assessments, leading to more accurate pricing and faster turnaround times.",
                image: "https://via.placeholder.com/150",
              },
            ].map((story, index) => (
              <div key={index} className="success-story bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center text-center">
                <img src={story.image} alt={story.name} className="w-24 h-24 rounded-full mb-4" />
                <blockquote className="text-lg italic mb-4">&quot;{story.quote}&quot;</blockquote>
                <p className="font-semibold">{story.name}</p>
                <p className="text-gray-400">{story.company}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Partners Section */}
      <div ref={partnersRef} className="bg-gray-100 py-16">
        <h2 className="text-center text-3xl font-semibold mb-12 text-black">We are proud to work with</h2>
        <div
          className={`container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 ${showAllPartners ? "max-h-full" : "max-h-40 overflow-hidden"}`}
        >
          {[...Array(10)].map((_, index) => (
            <div
              key={index}
              className="partner-logo bg-white p-4 shadow-md rounded flex items-center justify-center transition-transform duration-300 hover:scale-110"
            >
              <img src={`https://via.placeholder.com/150`} alt={`Partner ${index + 1}`} className="max-w-full max-h-16" />
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <button
            onClick={() => setShowAllPartners(!showAllPartners)}
            className="bg-black text-white px-6 py-3 rounded-full shadow-lg hover:bg-gray-800 transition duration-300"
          >
            {showAllPartners ? "Show less" : "Show more"}
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductsPage;
