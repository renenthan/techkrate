// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/homePage";
import About from "./pages/About";
import Services from "./pages/Services";
import Products from "./pages/Products";
import Apply from "./pages/Apply";

function App() {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<Products />} />
        <Route path="/apply" element={<Apply />} />
      </Routes>
    </Router>
  );
}

export default App;
