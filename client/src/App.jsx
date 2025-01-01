// src/App.jsx
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Services from "./pages/Services";
import Products from "./pages/Products";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Blogs from "./pages/Blogs";
import Login from "./components/Login";
import AddBlog from "./pages/Addblog";
import ProtectedRoute from "./lib/protected";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/login" element={<Login />} />
        {/* Protected AddBlog Route */}
        <Route
          path="/addblog"
          element={
            <ProtectedRoute>
              <AddBlog />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
