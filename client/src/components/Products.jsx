import React from "react";
import { Link } from "react-router-dom";
import Download1 from "../assets/image/download1.jpg";

const Products = () => {
  const products = [
    {
      title: "AI-Powered Car Assessment",
      description: "Revolutionize how you assess cars remotely with our cutting-edge AI technology.",
      details: "For used car dealers who buy cars sight unseen, and for fleet managers assessing cars in use, it's a common dilemma. Tractable's Applied AI helps you value, inspect and appraise cars even when they're miles away.",
      link: "/product1"
    },
    {
      title: "Smart Fleet Management",
      description: "Optimize your fleet operations with real-time AI insights and predictive maintenance.",
      details: "Our advanced AI system helps you manage your fleet more efficiently, reducing downtime and maximizing profitability. Dealers can use AI vision to assess a car's condition accurately and quickly.",
      link: "/product2"
    }
  ];

  return (
    <div className="font-sans bg-black text-white overflow-x-hidden min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-center text-4xl sm:text-5xl md:text-6xl font-bold mb-16 leading-tight">
          Revolutionizing Motor Solutions<br />
          with Advanced AI Technology
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-xl overflow-hidden shadow-2xl transition-all duration-300 hover:shadow-white/20 hover:shadow-2xl border border-gray-700"
            >
              <div className="aspect-w-16 aspect-h-9 relative">
                <img 
                  src={Download1} 
                  alt={product.title} 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
              </div>
              <div className="p-8">
                <h2 className="text-2xl font-bold mb-4">{product.title}</h2>
                <p className="text-gray-300 mb-4">{product.description}</p>
                <p className="text-sm text-gray-400 mb-6">{product.details}</p>
                <div className="flex justify-between items-center">
                  <Link 
                    to={product.link}
                    className="px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-colors duration-300"
                  >
                    Discover More
                  </Link>
                  <Link 
                    to="/contact"
                    className="px-6 py-3 border border-white text-white font-semibold rounded-full hover:bg-white hover:text-black transition-colors duration-300"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;

