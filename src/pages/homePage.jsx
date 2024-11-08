// src/pages/HomePage.jsx
import React from 'react';
import HeroSection from '../components/HeroSection';
import ThirdSection from '../components/ThirdSection';
import Navbar from '../components/Navbar';

function HomePage() {
  return (
    <div>
        <Navbar />
      <HeroSection />
      <ThirdSection />
    </div>
  );
}

export default HomePage;
