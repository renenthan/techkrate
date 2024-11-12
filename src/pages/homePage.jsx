// src/pages/HomePage.jsx
import React from 'react';
import HeroSection from '../components/HeroSection';
import Navbar from '../components/Navbar';
import ThirdSection from '../components/ThirdSection';
const homePage = () => {
  return (
    <div>
    <Navbar />
  <HeroSection />
  <ThirdSection />
</div>
  )
}


export default homePage;
