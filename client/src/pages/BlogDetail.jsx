import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import getDataFromFirestore from "../Getdatafromfirestrore";

const BlogDetail = () => {
  const { id } = useParams(); // Extract the blog ID from the URL
  const [blogPost, setBlogPost] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchBlogPost = async () => {
      if (!id) return;
      try {
        setLoading(true);
        const blogs = await getDataFromFirestore("Blogs");
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
    <div className="min-h-screen bg-black text-white pt-14">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <article className="bg-gray-900 rounded-lg overflow-hidden shadow-2xl">
          {blogPost.ImageURLs && blogPost.ImageURLs[0] && (
            <div className="relative w-full h-72 md:h-96 mb-4">
              <img
                src={blogPost.ImageURLs[0]}
                alt={blogPost.Title}
                className="w-full h-full object-cover"
              />
            </div>
          )}
          
          <div className="p-8">
            <h1 className="text-4xl font-bold mb-4">{blogPost.Title}</h1>
            
            <div className="flex items-center justify-between text-gray-400 mb-6">
              <p>{blogPost.Author || "Unknown"}</p>
              <p>
                {blogPost.Date?.seconds
                  ? new Date(blogPost.Date.seconds * 1000).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })
                  : "Unknown date"}
              </p>
            </div>
            
            <h2 className="text-xl text-gray-300 mb-6 italic">{blogPost["Sub-Heading"]}</h2>
            
            <div className="prose prose-invert max-w-none">
              {blogPost.Content.split("\n").map((paragraph, index) => (
                <p key={index} className="mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </article>
      </div>

      {/* Fixed button at bottom-left corner */}
      <Link
        to="/blogs"
        className="fixed bottom-4 left-4 bg-gray-700 text-white px-4 py-2 rounded-md shadow-lg hover:bg-gray-600 transition-colors"
      >
        ← Back to all blogs
      </Link>
    </div>
  );
};

export default BlogDetail;
