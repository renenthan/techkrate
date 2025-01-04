import { useEffect, useState } from "react";
import { ChevronLeft, Clock } from "lucide-react";
import Navbar from "../components/Navbar";
import axios from "axios";

const Blogs = () => {
  const [selectedPost, setSelectedPost] = useState(null);
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state

  // Fetch blogs on component mount
  useEffect(() => {
    axios
      .get("https://techkrate-backend.onrender.com/blogs")
      .then((res) => {
        setBlogPosts(res.data);
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch((error) => {
        console.error("Error fetching blogs:", error);
        setLoading(false); // Ensure loading stops even if there is an error
      });
  }, []);

  // Component to display the loader
  const Loader = () => (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500"></div>
    </div>
  );

  // Component to display the list of blogs
  const BlogList = () => (
    <div className="relative w-full min-h-screen py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-300/20 to-amber-200/20 backdrop-blur-xl"></div>
      <div className="relative max-w-5xl mx-auto px-4 py-12">
        {blogPosts.map((post) => (
          <div
            key={post._id} // Use `_id` for MongoDB documents
            onClick={() => setSelectedPost(post)}
            className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 mb-6 py-10 cursor-pointer transition-all duration-300 hover:bg-black/40"
          >
            <div className="flex items-center space-x-2 text-white/80 mb-2">
              <Clock className="w-4 h-4" />
              <span className="text-sm">{post.readTime || "Unknown Read Time"}</span>
            </div>

            <h2 className="text-2xl font-bold mb-4 text-white">{post.title}</h2>
            <p className="text-gray-300 leading-relaxed">
              {post.content.slice(0, 100)}... {/* Display excerpt */}
            </p>
          </div>
        ))}
      </div>
    </div>
  );

  // Component to display a single blog post
  const BlogPost = ({ post }) => (
    <div className="relative w-full py-24 min-h-screen overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-300/20 to-amber-200/20 backdrop-blur-xl"></div>
      <div className="relative max-w-5xl mx-auto px-4 py-12">
        <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-8">
          <div className="flex items-center space-x-2 text-white/80 mb-2">
            <Clock className="w-4 h-4" />
            <span className="text-sm">{post.readTime || "Unknown Read Time"}</span>
          </div>

          <h1 className="text-3xl font-bold mb-4 text-white">{post.title}</h1>
          <h2 className="text-xl font-semibold text-gray-300 mb-6">{post.secondTitle}</h2>
          <p className="text-sm text-gray-400 mb-4">
            Author: {post.author || "Unknown Author"} | Published: {new Date(post.date).toLocaleDateString()}
          </p>

          <div className="prose prose-invert">
            {post.content.split("\n\n").map((paragraph, index) => (
              <p key={index} className="text-gray-300 mb-4 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <button
          onClick={() => setSelectedPost(null)}
          className="fixed bottom-8 left-8 flex items-center space-x-2 text-white/80 hover:text-white bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full transition-all duration-300"
        >
          <ChevronLeft className="w-5 h-5" />
          <span>Back</span>
        </button>
      </div>
    </div>
  );

  return (
    <>
      <div className="absolute">
        <Navbar />
      </div>
      <div className="bg-gray-900">
        {loading ? <Loader /> : selectedPost ? <BlogPost post={selectedPost} /> : <BlogList />}
      </div>
    </>
  );
};

export default Blogs;
