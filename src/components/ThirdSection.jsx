// src/components/ThirdSection.jsx
import React, { useEffect } from 'react';
import { gsap } from 'gsap';

function ThirdSection() {

  return (
    <section className="third-section h-screen flex items-center justify-center bg-black text-white">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-4">Build A Climate Company</h2>
        <p className="text-lg">
          Over 12 months, you will work with us to uncover high-impact
          opportunities and shape the most promising idea into a new venture.
        </p>
        <button className="mt-8 px-6 py-3 bg-white text-black rounded-lg">
          How It Works
        </button>
      </div>
    </section>
  );
}

export default ThirdSection;
