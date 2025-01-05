import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { marked } from "marked";
import getDataFromFirestore from "../Getdatafromfirestrore";

const BlogDetail = () => {
  const { id } = useParams();
  const [blogPost, setBlogPost] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchBlogPost = async () => {
      if (!id) return;
      try {
        setLoading(true);
        const blogs = await getDataFromFirestore("blogs");
        const selectedPost = blogs.find((post) => post.id === id);
        setBlogPost(selectedPost);
      } catch (error) {
        console.error("Error fetching blog post:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPost();
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-white"></div>
      </div>
    );
  }

  if (!blogPost) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
        <p className="text-xl mb-4">Blog post not found.</p>
        <Link to="/blogs" className="text-white underline hover:text-gray-300 transition-colors">
          Return to all blogs
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white py-8 flex items-center justify-center">
      {/* Fixed panel */}
      <div className="fixed inset-0 max-w-4xl mx-auto h-[80vh] mt-32 w-[90%] lg:w-[60%] bg-gradient-to-br from-white/20 via-white/10 to-white/5 rounded-lg overflow-hidden shadow-2xl border border-white/30 ">
        {/* Scrollable content */}
        <div className="h-full overflow-y-auto overflow-auto scrollbar-hide">
          <div className="relative w-full h-72 md:h-96 mb-4">
            <img src={blogPost.imageUrl} alt={blogPost.Title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
          </div>

          <div className="p-8">
            <h1 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-white">
              {blogPost.title}
            </h1>

            <div className="flex items-center justify-between text-gray-300 mb-6">
              <p className="text-gray-400">{blogPost.author || "Unknown"}</p>
              <p className="text-sm text-gray-400">
                {blogPost.date?.seconds ? new Date(blogPost.date.seconds * 1000).toLocaleDateString() : "Unknown"}
              </p>
            </div>

            <h2 className="text-xl text-gray-300 mb-6 italic">{blogPost["secondTitle"]}</h2>

            <div className="prose prose-invert max-w-none">
              <div dangerouslySetInnerHTML={{ __html: marked(blogPost.content) }} />
            </div>
          </div>
        </div>
      </div>

      {/* Back to blogs button */}
      <Link
        to="/blogs"
        className="fixed bottom-4 left-4 bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-md text-white px-6 py-3 rounded-full shadow-lg hover:from-white/30 hover:to-white/20 transition-all duration-300 border border-white/30"
      >
        ← Back to all blogs
      </Link>
    </div>
  );
};

export default BlogDetail;
