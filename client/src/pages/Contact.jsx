import { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { gsap } from "gsap";

function Contact() {
  const titleRef = useRef(null);
  const formRef = useRef(null);
  const inputRefs = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, delay: 0.3 }
    );
    gsap.fromTo(
      formRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, delay: 0.6 }
    );
    inputRefs.current.forEach((input, index) => {
      gsap.fromTo(
        input,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, delay: 0.8 + index * 0.1 }
      );
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white flex flex-col">
      {/* Main Content */}
      <div className="flex-grow flex flex-col lg:flex-row justify-center items-center px-4 md:px-8 lg:px-16 py-16 space-y-10 lg:space-y-0 lg:space-x-12">
        {/* Left Section */}
        <div className="bg-gradient-to-br from-blue-900 to-blue-700 text-white px-8 py-12 rounded-2xl w-full lg:w-1/2 max-w-md lg:max-w-lg shadow-2xl">
          <h2 ref={titleRef} className="text-4xl font-bold mb-8 text-blue-100">
            Get in touch
          </h2>
          <div className="space-y-6">
            <p className="flex items-start space-x-4">
              <FontAwesomeIcon
                icon={faLocationDot}
                className="text-xl mt-1 text-blue-300"
              />
              <span>
                416, Sector 1, Vasundhara, Ghaziabad
                <br />
                Delhi NCR (201012)
              </span>
            </p>
            <p className="flex items-center space-x-4">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="text-xl text-blue-300"
              />
              <a
                href="mailto:support@techkrate.com"
                className="hover:underline transition-all duration-300"
                title="Send an email to support@techkrate.com"
              >
                support@techkrate.com
              </a>
            </p>
            <p className="flex items-center space-x-4">
              <FontAwesomeIcon
                icon={faPhone}
                className="text-xl text-blue-300"
              />
              <a
                href="https://wa.me/919990547098"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline transition-all duration-300"
                title="Chat on WhatsApp"
              >
                +91-9990547098
              </a>
            </p>
          </div>
          <div className="flex space-x-6 mt-8">
            <a
              href="https://www.linkedin.com/company/techkrate"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-300 transition-all duration-300 text-2xl"
              title="Visit Techkrate on LinkedIn"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a
              href="https://www.youtube.com/@techkrate4281"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-300 transition-all duration-300 text-2xl"
              title="Visit Techkrate on YouTube"
            >
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div
          ref={formRef}
          className="bg-gray-900 text-gray-100 p-6 rounded-lg w-full lg:w-2/5 max-w-md shadow-xl border border-gray-800"
        >
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block mb-1 text-xs font-medium text-gray-400">
                  First Name
                </label>
                <input
                  type="text"
                  ref={(el) => (inputRefs.current[0] = el)}
                  className="w-full p-2 bg-transparent border-b border-gray-700 text-white text-sm focus:outline-none focus:ring-0 focus:border-blue-500 placeholder-gray-400 transition-all duration-300"
                  placeholder="First Name"
                />
              </div>
              <div>
                <label className="block mb-1 text-xs font-medium text-gray-400">
                  Last Name
                </label>
                <input
                  type="text"
                  ref={(el) => (inputRefs.current[1] = el)}
                  className="w-full p-2 bg-transparent border-b border-gray-700 text-white text-sm focus:outline-none focus:ring-0 focus:border-blue-500 placeholder-gray-400 transition-all duration-300"
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div>
              <label className="block mb-1 text-xs font-medium text-gray-400">
                Company Name
              </label>
              <input
                type="text"
                ref={(el) => (inputRefs.current[2] = el)}
                className="w-full p-2 bg-transparent border-b border-gray-700 text-white text-sm focus:outline-none focus:ring-0 focus:border-blue-500 placeholder-gray-400 transition-all duration-300"
                placeholder="Company Name"
              />
            </div>
            <div>
              <label className="block mb-1 text-xs font-medium text-gray-400">
                Email
              </label>
              <input
                type="email"
                ref={(el) => (inputRefs.current[3] = el)}
                className="w-full p-2 bg-transparent border-b border-gray-700 text-white text-sm focus:outline-none focus:ring-0 focus:border-blue-500 placeholder-gray-400 transition-all duration-300"
                placeholder="Email@gmail.com"
              />
            </div>
            <div>
              <label className="block mb-1 text-xs font-medium text-gray-400">
                Phone Number
              </label>
              <input
                type="text"
                ref={(el) => (inputRefs.current[4] = el)}
                className="w-full p-2 bg-transparent border-b border-gray-700 text-white text-sm focus:outline-none focus:ring-0 focus:border-blue-500 placeholder-gray-400 transition-all duration-300"
                placeholder="(+995) 555-55-55-55"
              />
            </div>
            <div>
              <label className="block mb-1 text-xs font-medium text-gray-400">
                Message
              </label>
              <textarea
                ref={(el) => (inputRefs.current[5] = el)}
                className="w-full p-2 bg-transparent border-b border-gray-700 text-white text-sm focus:outline-none focus:ring-0 focus:border-blue-500 placeholder-gray-400 transition-all duration-300"
                rows="3"
                placeholder="Tell us what we can help you with"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-sm font-medium"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
