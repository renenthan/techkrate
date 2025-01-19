import { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { gsap } from "gsap";
import { Resend } from "resend";

const resend = new Resend("re_BvqMTmdb_FGmUMTj2AvMuaXn4rZDDkEDv");

function Contact() {
  const titleRef = useRef(null);
  const formRef = useRef(null);
  const inputRefs = useRef([]); // Store references for all inputs

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Collect form data
    const data = {};
    inputRefs.current.forEach((input, index) => {
      if (input) {
        data[input.name] = input.value;
      } else {
        console.error(`Input reference at index ${index} is undefined.`);
      }
    });

    try {
      // Sending email using Resend
      const response = await resend.emails.send({
        from: "chitvan22jain@gmail.com",
        to: "chitvan22jain@gmail.com",
        subject: "Contact Form Submission",
        html: `
          <h1>Contact Form Submission</h1>
          <p>First Name: ${data.firstName || "N/A"}</p>
          <p>Last Name: ${data.lastName || "N/A"}</p>
          <p>Company: ${data.companyName || "N/A"}</p>
          <p>Email: ${data.email || "N/A"}</p>
          <p>Phone: ${data.phoneNumber || "N/A"}</p>
          <p>Message: ${data.message || "N/A"}</p>
        `,
      });
      console.log("Email sent successfully:", response);
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white flex flex-col">
      <div className="flex-grow flex flex-col lg:flex-row justify-center items-center px-4 md:px-8 lg:px-16 py-16 space-y-10 lg:space-y-0 lg:space-x-12">
        <div className="bg-gradient-to-br from-blue-900 to-blue-700 text-white px-8 py-12 rounded-2xl w-full lg:w-1/2 max-w-md lg:max-w-lg shadow-2xl">
          <h2 ref={titleRef} className="text-4xl font-bold mb-8 text-blue-100">
            Get in touch
          </h2>
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <FontAwesomeIcon icon={faPhone} className="text-blue-300" />
              <p>+1 234 567 890</p>
            </div>
            <div className="flex items-center space-x-4">
              <FontAwesomeIcon icon={faEnvelope} className="text-blue-300" />
              <p>info@yourdomain.com</p>
            </div>
            <div className="flex items-center space-x-4">
              <FontAwesomeIcon icon={faLocationDot} className="text-blue-300" />
              <p>1234 Street Name, City, Country</p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-300 hover:text-blue-400">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
              <a href="#" className="text-blue-300 hover:text-blue-400">
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div
          ref={formRef}
          className="bg-gray-900 text-gray-100 p-6 rounded-lg w-full lg:w-2/5 max-w-md shadow-xl border border-gray-800"
        >
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block mb-1 text-xs font-medium text-gray-400">
                  First Name
                </label>
                <input
                  type="text"
                  ref={(el) => (inputRefs.current[0] = el)}
                  name="firstName"
                  className="w-full p-2 bg-transparent border-b border-gray-700 text-white text-sm focus:outline-none"
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
                  name="lastName"
                  className="w-full p-2 bg-transparent border-b border-gray-700 text-white text-sm focus:outline-none"
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div>
              <label className="block mb-1 text-xs font-medium text-gray-400">
                Email
              </label>
              <input
                type="email"
                ref={(el) => (inputRefs.current[2] = el)}
                name="email"
                className="w-full p-2 bg-transparent border-b border-gray-700 text-white text-sm focus:outline-none"
                placeholder="Email"
              />
            </div>
            <div>
              <label className="block mb-1 text-xs font-medium text-gray-400">
                Phone Number
              </label>
              <input
                type="tel"
                ref={(el) => (inputRefs.current[3] = el)}
                name="phoneNumber"
                className="w-full p-2 bg-transparent border-b border-gray-700 text-white text-sm focus:outline-none"
                placeholder="Phone Number"
              />
            </div>
            <div>
              <label className="block mb-1 text-xs font-medium text-gray-400">
                Company Name
              </label>
              <input
                type="text"
                ref={(el) => (inputRefs.current[4] = el)}
                name="companyName"
                className="w-full p-2 bg-transparent border-b border-gray-700 text-white text-sm focus:outline-none"
                placeholder="Company Name"
              />
            </div>
            <div>
              <label className="block mb-1 text-xs font-medium text-gray-400">
                Message
              </label>
              <textarea
                ref={(el) => (inputRefs.current[5] = el)}
                name="message"
                className="w-full p-2 bg-transparent border border-gray-700 text-white text-sm focus:outline-none"
                placeholder="Your Message"
                rows="4"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700"
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
