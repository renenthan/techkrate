import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const AboutUs = () => {
  return (
    <>
    <Navbar/>
    <div className="bg-black text-white px-6 md:px-16 py-20 space-y-20">
      {/* Header Section */}
      <div className="text-center">
        <h2 className="text-5xl font-bold mb-6 mt-16">About Us</h2>
        <p className="text-xl text-gray-400">
          Our company and culture are crafted to deliver delightful experiences.
        </p>
      </div>

      {/* Two Columns Section */}
      <div className="grid md:grid-cols-2 gap-20 items-center">
        <div>
          <img
            src="https://via.placeholder.com/800x600"
            alt="Team"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div>
          <h3 className="text-3xl font-semibold mb-6 text-white">
            Our Mission: Helping Millions of Organizations Grow Better
          </h3>
          <p className="text-lg text-gray-400 leading-relaxed">
            We believe that growth is about helping businesses thrive and
            creating opportunities for their success. By empowering
            organizations with the right tools, we make growth sustainable.
          </p>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="grid md:grid-cols-2 gap-20 items-center">
        <div>
          <h3 className="text-3xl font-semibold mb-6 text-white">Our Story</h3>
          <p className="text-lg text-gray-400 leading-relaxed">
            In 2006, our founders set out to create a company that transformed
            how businesses engage with their customers. Since then, we've
            grown to serve millions of businesses worldwide by simplifying
            marketing, sales, and customer engagement.
          </p>
        </div>
        <div>
          <img
            src="https://via.placeholder.com/800x600"
            alt="Office"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default AboutUs;
