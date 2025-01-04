import { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faLinkedinIn, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import Navbar from "../components/Navbar";
import { gsap } from "gsap";

function Contact() {
  const socialIconsRef = useRef(null);
  const formRef = useRef(null);
  const titleRef = useRef(null);

  // GSAP Animations on page load
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
    gsap.fromTo(
      socialIconsRef.current,
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 1, delay: 1 }
    );
  }, []);

  // GSAP Hover Animation for Social Icons
  const handleIconHover = (e) => {
    gsap.to(e.target, {
      scale: 1.2,
      rotation: 15,
      duration: 0.3,
      ease: "power3.out",
    });
  };

  const handleIconLeave = (e) => {
    gsap.to(e.target, {
      scale: 1,
      rotation: 0,
      duration: 0.3,
      ease: "power3.in",
    });
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-black text-white flex flex-col">
        {/* Main Content */}
        <div className="flex-grow flex flex-col md:flex-row justify-center items-center px-8 md:px-32 py-16">
          {/* Left Section */}
          <div className="bg-gradient-to-b from-blue-500 to-blue-700 text-white px-10 py-20 rounded-lg w-full md:w-1/2 max-w-md md:max-w-lg">
            <h2 ref={titleRef} className="text-4xl font-bold mb-6">
              Get in touch
            </h2>
            <p className="mb-4">
              <strong>Visit us</strong>
              <br />
              Come say hello at our office HQ.
              <br />
              67 Wisteria Way Croydon South VIC 3136 AU
            </p>
            <p className="mb-4">
              <strong>Chat to us</strong>
              <br />
              Our friendly team is here to help.
              <br />
              hello@paysphere.com
            </p>
            <p className="mb-4">
              <strong>Call us</strong>
              <br />
              Mon-Fri from 8am to 5pm
              <br />
              (+995) 555-55-55-55
            </p>
            <div
              ref={socialIconsRef}
              className="flex space-x-4 mt-4"
            >
              <a
                href="#"
                onMouseEnter={handleIconHover}
                onMouseLeave={handleIconLeave}
                className="hover:opacity-75"
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a
                href="#"
                onMouseEnter={handleIconHover}
                onMouseLeave={handleIconLeave}
                className="hover:opacity-75"
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
              <a
                href="#"
                onMouseEnter={handleIconHover}
                onMouseLeave={handleIconLeave}
                className="hover:opacity-75"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a
                href="#"
                onMouseEnter={handleIconHover}
                onMouseLeave={handleIconLeave}
                className="hover:opacity-75"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </div>
          </div>

          {/* Right Section */}
          <div
            ref={formRef}
            className="bg-black text-gray-300 p-10 rounded-lg w-full md:w-1/2 max-w-md md:max-w-lg mt-10 md:mt-0"
          >
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block mb-2">First Name</label>
                  <input
                    type="text"
                    className="w-full p-3 border border-gray-700 rounded-md bg-black text-white"
                    placeholder="Randomfirst"
                  />
                </div>
                <div>
                  <label className="block mb-2">Last Name</label>
                  <input
                    type="text"
                    className="w-full p-3 border border-gray-700 rounded-md bg-black text-white"
                    placeholder="Randomlast"
                  />
                </div>
              </div>
              <div className="mt-4">
                <label className="block mb-2">Company Name</label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-700 rounded-md bg-black text-white"
                  placeholder="RandomCompany"
                />
              </div>
              <div className="mt-4">
                <label className="block mb-2">Email</label>
                <input
                  type="email"
                  className="w-full p-3 border border-gray-700 rounded-md bg-black text-white"
                  placeholder="Random@gmail.com"
                />
              </div>
              <div className="mt-4">
                <label className="block mb-2">Phone Number</label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-700 rounded-md bg-black text-white"
                  placeholder="(+995) 555-55-55-55"
                />
              </div>
              <div className="mt-4">
                <label className="block mb-2">Message</label>
                <textarea
                  className="w-full p-3 border border-gray-700 rounded-md bg-black text-white"
                  rows="4"
                  placeholder="Tell us what we can help you with"
                ></textarea>
              </div>
              <div className="flex items-start mt-4">
                <input type="checkbox" className="mr-2" />
                <label>
                  I’d like to receive more information about the company. I understand and agree to the{" "}
                  <a href="#" className="text-blue-400 underline">
                    Privacy Policy
                  </a>
                </label>
              </div>
              <button
                type="submit"
                className="bg-blue-600 w-full text-white p-3 mt-6 rounded-md hover:scale-105 transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
