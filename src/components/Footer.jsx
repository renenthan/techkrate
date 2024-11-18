import React from 'react'
import { Youtube, Linkedin, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      {/* Top separator with gradient */}
      <div className="h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-30" />

      <div className="max-w-7xl mx-auto px-8 pt-12 pb-2">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-16">
          {/* Column 1: Logo and Description */}
          <div className="xl:col-span-1">
            <h2 className="text-2xl font-bold text-blue-500">Moval</h2>
            <p className="mt-2 text-gray-400 pr-4">
              Advanced motor claims processing platform. Optimize your insurance operations with AI-driven solutions.
            </p>
          </div>

          {/* Column 2: Company Links */}
          <div>
            <h3 className="text-lg font-semibold text-blue-400">Company</h3>
            <ul className="mt-2 space-y-2">
              <li><a href="#" className="hover:text-blue-500 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Customers</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Newsroom</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Events</a></li>
            </ul>
          </div>

          {/* Column 3: Products Links */}
          <div>
            <h3 className="text-lg font-semibold text-blue-400">Products</h3>
            <ul className="mt-2 space-y-2">
              <li><a href="#" className="hover:text-blue-500 transition-colors">Damage Detection</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Real-Time Reporting</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">AI-Driven Analysis</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Custom Solutions</a></li>
            </ul>
          </div>

          {/* Column 4: Contact Information */}
          <div>
            <h3 className="text-lg font-semibold text-blue-400">Get In Touch</h3>
            <ul className="mt-2 space-y-2">
              <li>Mobile: <a href="tel:+919990547098" className="hover:text-blue-500 transition-colors">+91 9990547098</a></li>
              <li>Landline: <a href="tel:+911203187109" className="hover:text-blue-500 transition-colors">+91 1203187109</a></li>
              <li className="text-sm text-gray-400">416, Sector 1, Vasundhara, Ghaziabad - 201012 Delhi NCR</li>
            </ul>
            {/* Social Media Links */}
            <div className="flex mt-4 space-x-4">
              <a
                href="https://www.youtube.com/@techkrate4281"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={24} />
              </a>
              <a
                href="https://www.linkedin.com/company/techkrate/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
            </div>
          </div>

          {/* Column 5: Map */}
          <div className="xl:col-span-1">
            <h3 className="text-lg font-semibold text-blue-400 mb-2">Our Location</h3>
            <div className="w-full h-48 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.8923728197974!2d77.3890273!3d28.662941099999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf072b2211a6f%3A0x96e696e17da5e1ee!2s1%2F416%2C%20Sector%201%2C%20Vasundhara%2C%20Ghaziabad%2C%20Uttar%20Pradesh%20201012!5e0!3m2!1sen!2sin!4v1731923497500!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Moval Office Location"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-4 text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center">
          <p>© 2024 Moval, All rights reserved</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-blue-500 transition-colors">
              Terms & Conditions
            </a>
            <a href="#" className="hover:text-blue-500 transition-colors">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}