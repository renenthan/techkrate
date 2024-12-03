import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faLinkedinIn,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Navbar from "../components/Navbar";

function Contact() {
  return (
    <>
      <Navbar/>
      <div className="min-h-screen bg-black text-white flex flex-col">
        {/* Main Content */}
        <div className="flex-grow flex flex-col md:flex-row justify-center items-center px-8 md:px-32 py-16">
          {/* Left Section */}
          <div className="bg-gradient-to-b from-blue-500 to-blue-700 text-white p-10 rounded-lg w-full md:w-1/2">
            <h2 className="text-4xl font-bold mb-6">Get in touch</h2>
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
            <div className="flex space-x-4 mt-4">
              <a href="#" className="hover:opacity-75">
                <FontAwesomeIcon icon={faFacebookF}  />
              </a>
              <a href="#" className="hover:opacity-75">
                <FontAwesomeIcon icon={faLinkedinIn}  />
              </a>
              <a href="#" className="hover:opacity-75">
                <FontAwesomeIcon icon={faInstagram}  />
              </a>
              <a href="#" className="hover:opacity-75">
                <FontAwesomeIcon icon={faTwitter}  />
              </a>
            </div>
          </div>

          {/* Right Section */}
          <div className="bg-black text-gray-300 p-10 rounded-lg w-full md:w-1/2 mt-10 md:mt-0">
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
                  I’d like to receive more information about the company. I
                  understand and agree to the{" "}
                  <a href="#" className="text-blue-400 underline">
                    Privacy Policy
                  </a>
                </label>
              </div>
              <button
                type="submit"
                className="bg-blue-600 w-full text-white p-3 mt-6 rounded-md"
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
