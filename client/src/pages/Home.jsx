// src/pages/HomePage.jsx
import HeroSection from '../components/HeroSection';
import Navbar from '../components/Navbar';
import ServiceSection from '../components/ServiceSection'
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer'
import React from 'react';
import ThirdSection from '../components/ThirdSection';

const Home = () => {
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


export default Home;
