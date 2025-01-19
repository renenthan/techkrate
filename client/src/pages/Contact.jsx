import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import Resend from "resend";

const resend = new Resend("re_Y9j4nSa3_GxAzzYj3cwbseLEZq9nzY7Sr");

function Contact() {
  const formRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      first_name: formRef.current[0].value,
      last_name: formRef.current[1].value,
      company_name: formRef.current[2].value,
      email: formRef.current[3].value,
      phone_number: formRef.current[4].value,
      message: formRef.current[5].value,
    };

    try {
      const response = await resend.sendEmail({
        from: "shashwatchauhan12@gmail.com",
        to: "chitvan22jain@gmail.com",
        subject: "Contact Form Submission",
        text: `
          First Name: ${formData.first_name}
          Last Name: ${formData.last_name}
          Company: ${formData.company_name}
          Email: ${formData.email}
          Phone: ${formData.phone_number}
          Message: ${formData.message}
        `,
      });

      console.log("Email sent successfully", response);
      // You can also show a success message to the user
    } catch (error) {
      console.error("Error sending email", error);
      // Handle error (e.g., show error message)
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white flex flex-col">
      <div className="flex-grow flex flex-col lg:flex-row justify-center items-center px-4 md:px-8 lg:px-16 py-16 space-y-10 lg:space-y-0 lg:space-x-12">
        <div className="bg-gradient-to-br from-blue-900 to-blue-700 text-white px-8 py-12 rounded-2xl w-full lg:w-1/2 max-w-md lg:max-w-lg shadow-2xl">
          <h2 className="text-4xl font-bold mb-8 text-blue-100">Get in touch</h2>
          <div className="space-y-6">
            <p className="flex items-start space-x-4">
              <FontAwesomeIcon icon={faLocationDot} className="text-xl mt-1 text-blue-300" />
              <span>
                416, Sector 1, Vasundhara, Ghaziabad...
                <br />
                Delhi NCR (201012)
              </span>
            </p>
            <p className="flex items-center space-x-4">
              <FontAwesomeIcon icon={faEnvelope} className="text-xl text-blue-300" />
              <a href="mailto:support@techkrate.com" className="hover:underline transition-all duration-300">
                support@techkrate.com
              </a>
            </p>
            <p className="flex items-center space-x-4">
              <FontAwesomeIcon icon={faPhone} className="text-xl text-blue-300" />
              <a href="https://wa.me/919990547098" target="_blank" rel="noopener noreferrer" className="hover:underline transition-all duration-300">
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
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a
              href="https://www.youtube.com/@techkrate4281"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-300 transition-all duration-300 text-2xl"
            >
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </div>
        </div>

        <div ref={formRef} className="bg-gray-900 text-gray-100 p-6 rounded-lg w-full lg:w-2/5 max-w-md shadow-xl border border-gray-800">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block mb-1 text-xs font-medium text-gray-400">First Name</label>
                <input
                  type="text"
                  name="first_name"
                  className="w-full p-2 bg-transparent border-b border-gray-700 text-white text-sm focus:outline-none focus:ring-0 focus:border-blue-500 placeholder-gray-400 transition-all duration-300"
                  placeholder="First Name"
                />
              </div>
              <div>
                <label className="block mb-1 text-xs font-medium text-gray-400">Last Name</label>
                <input
                  type="text"
                  name="last_name"
                  className="w-full p-2 bg-transparent border-b border-gray-700 text-white text-sm focus:outline-none focus:ring-0 focus:border-blue-500 placeholder-gray-400 transition-all duration-300"
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div>
              <label className="block mb-1 text-xs font-medium text-gray-400">Company Name</label>
              <input
                type="text"
                name="company_name"
                className="w-full p-2 bg-transparent border-b border-gray-700 text-white text-sm focus:outline-none focus:ring-0 focus:border-blue-500 placeholder-gray-400 transition-all duration-300"
                placeholder="Company Name"
              />
            </div>
            <div>
              <label className="block mb-1 text-xs font-medium text-gray-400">Email</label>
              <input
                type="email"
                name="email"
                className="w-full p-2 bg-transparent border-b border-gray-700 text-white text-sm focus:outline-none focus:ring-0 focus:border-blue-500 placeholder-gray-400 transition-all duration-300"
                placeholder="Email@gmail.com"
              />
            </div>
            <div>
              <label className="block mb-1 text-xs font-medium text-gray-400">Phone Number</label>
              <input
                type="text"
                name="phone_number"
                className="w-full p-2 bg-transparent border-b border-gray-700 text-white text-sm focus:outline-none focus:ring-0 focus:border-blue-500 placeholder-gray-400 transition-all duration-300"
                placeholder="(+995) 555-55-55-55"
              />
            </div>
            <div>
              <label className="block mb-1 text-xs font-medium text-gray-400">Message</label>
              <textarea
                name="message"
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
