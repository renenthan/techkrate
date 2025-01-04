import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from '../components/Navbar';
import Footer from "../components/Footer";
import Bgimage from '../assets/image/bgimage.jpg';

gsap.registerPlugin(ScrollTrigger);

const ProductsPage = () => {
  const [showAllPartners, setShowAllPartners] = useState(false);
  
  const heroRef = useRef(null);
  const productsRef = useRef(null);
  const successStoriesRef = useRef(null);
  const partnersRef = useRef(null);

  useEffect(() => {
    // Hero section animation
    gsap.fromTo(heroRef.current.querySelector('h1'), 
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, delay: 0.5 }
    );
    gsap.fromTo(heroRef.current.querySelector('button'),
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, delay: 1 }
    );

    // Products section animation
    gsap.fromTo(productsRef.current.querySelectorAll('.product-card'),
      { opacity: 0, y: 50 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8, 
        stagger: 0.3,
        scrollTrigger: {
          trigger: productsRef.current,
          start: "top 80%"
        }
      }
    );

    // Success Stories section animation
    gsap.fromTo(successStoriesRef.current.querySelectorAll('.success-story'),
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: successStoriesRef.current,
          start: "top 80%"
        }
      }
    );

    // Partners section animation
    gsap.fromTo(partnersRef.current.querySelectorAll('.partner-logo'),
      { opacity: 0, scale: 0.8 },
      { 
        opacity: 1, 
        scale: 1, 
        duration: 0.5, 
        stagger: 0.1,
        scrollTrigger: {
          trigger: partnersRef.current,
          start: "top 80%"
        }
      }
    );
  }, []);

  return (
    <div className="font-sans bg-black text-white overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <div ref={heroRef} className="relative h-screen flex items-center justify-center bg-black text-white">
        <div className="text-center z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our AI-powered products, for today's real-world problems
          </h1>
          <button className="bg-white text-black px-6 py-3 rounded-full shadow-lg hover:bg-gray-200 transition duration-300">
            Request Demo
          </button>
        </div>
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <img
            src={Bgimage}
            alt="Background"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
      </div>

      {/* Products Section */}
      <div ref={productsRef} className="bg-gray-50 text-gray-800 py-24">
        <h2 className="text-center text-4xl font-bold mb-16 text-gray-900">
          Solutions to help people repair, assess, and protect what matters most
        </h2>
        <div className="container mx-auto px-4 md:px-8 space-y-12">
          {[
            {
              title: "Tractable Auto Estimator",
              description: "Fast visual assessments to quickly understand damage and accelerate claims",
              image: "https://via.placeholder.com/800x400",
              tags: ["Discover more", "Auto claims"],
            },
            {
              title: "Tractable Auto Reviewer",
              description: "Processes claims in minutes, flagging any inconsistencies",
              image: "https://via.placeholder.com/800x400",
              tags: ["Discover more", "Auto claims"],
            },
            {
              title: "Tractable Property Estimator",
              description: "Accurately assess property damage in minutes",
              image: "https://via.placeholder.com/800x400",
              tags: ["Discover more", "Property claims"],
            },
            {
              title: "Tractable Auto Inspector",
              description: "Draw on millions of data points to accurately assess a car's condition throughout its life cycle",
              image: "https://via.placeholder.com/800x400",
              tags: ["Discover more", "Property claims"],
            },
          ].map((product, index) => (
            <div
              key={index}
              className="product-card bg-white p-6 shadow-md rounded-lg flex flex-col md:flex-row items-center transition-all duration-300 hover:shadow-xl hover:scale-101"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full md:w-2/5 h-56 md:h-64 object-cover rounded-lg mb-6 md:mb-0 md:mr-8"
              />
              <div className="md:w-3/5">
                <h3 className="text-2xl font-bold mb-3 text-gray-900">
                  {product.title}
                </h3>
                <p className="text-gray-600 mb-5 text-base leading-relaxed">{product.description}</p>
                <div className="flex space-x-4">
                  {product.tags.map((tag, i) => (
                    <button
                      key={i}
                      className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition duration-300"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Customer Success Stories Section */}
      <div ref={successStoriesRef} className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-center text-4xl font-semibold mb-16">
            Customer Success Stories
          </h2>
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
                quote: "With Tractable Auto Inspector, we've streamlined our vehicle condition assessments, leading to more accurate pricing and faster turnaround times.",
                image: "https://via.placeholder.com/150",
              },
            ].map((story, index) => (
              <div key={index} className="success-story bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center text-center">
                <img src={story.image} alt={story.name} className="w-24 h-24 rounded-full mb-4" />
                <blockquote className="text-lg italic mb-4">"{story.quote}"</blockquote>
                <p className="font-semibold">{story.name}</p>
                <p className="text-gray-400">{story.company}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Partners Section */}
      <div ref={partnersRef} className="bg-gray-100 py-16">
        <h2 className="text-center text-3xl font-semibold mb-12 text-black">
          We are proud to work with
        </h2>
        <div
          className={`container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 ${
            showAllPartners ? "max-h-full" : "max-h-40 overflow-hidden"
          }`}
        >
          {[...Array(10)].map((_, index) => (
            <div
              key={index}
              className="partner-logo bg-white p-4 shadow-md rounded flex items-center justify-center transition-transform duration-300 hover:scale-110"
            >
              <img
                src={`https://via.placeholder.com/150`}
                alt={`Partner ${index + 1}`}
                className="max-w-full max-h-16"
              />
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

      <Footer/>
    </div>
  );
};

export default ProductsPage;

