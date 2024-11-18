// src/pages/HomePage.jsx
import React from 'react';
import HeroSection from '../components/HeroSection';
import Navbar from '../components/Navbar';
import ThirdSection from '../components/ThirdSection';
import ServiceSection from '../components/ServiceSection'
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer'
const HomePage = () => {
  return (
    <div>
    <Navbar />
  <HeroSection />
  <ThirdSection />
  <ServiceSection/>
  <Testimonials/>
  <Footer/>
</div>
  )
}


export default HomePage;
