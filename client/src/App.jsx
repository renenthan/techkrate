import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Products from "./components/Products";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Blogs from "./pages/Blogs";
import Login from "./components/Login";
import AddBlog from "./pages/Addblog";
import { useState } from "react";
import BlogDetail from "./pages/BlogDetail";
import Navbar from "./components/Navbar";
import Product1 from "./pages/Product1";
import Product2 from "./pages/Product2";


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/moval" element={<Product1/>} />
        <Route path="/cars" element={<Product2/>} />
        <Route path="/blogs/:id" element={<BlogDetail />} />

        <Route
          path="/login"
          element={<Login setIsAuthenticated={setIsAuthenticated} />}
        />
        {/* Protected AddBlog Route */}
        <Route
          path="/addblog"
          element={
            isAuthenticated ? <AddBlog /> : <Navigate to="/login" replace />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
