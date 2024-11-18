const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Logo and Description */}
        <div>
          <h2 className="text-white text-xl font-semibold">Techrate</h2>
          <p className="mt-2">
            Our solutions make production faster and cheaper. Contact us for
            more information.
          </p>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="text-white font-semibold">Company</h3>
          <ul className="mt-2 space-y-1">
            <li>About Us</li>
            <li>Customers</li>
            <li>Newsroom</li>
            <li>Events</li>
          </ul>
        </div>

        {/* Industries Links */}
        <div>
          <h3 className="text-white font-semibold">Industries</h3>
          <ul className="mt-2 space-y-1">
            <li>Precision Metalforming</li>
            <li>Industrial Manufacturing</li>
            <li>High Tech & Electronics</li>
            <li>Aerospace</li>
          </ul>
        </div>

        {/* Products Links */}
        <div>
          <h3 className="text-white font-semibold">Products</h3>
          <ul className="mt-2 space-y-1">
            <li>Manufacturing Execution System</li>
            <li>Enterprise Resource Planning</li>
            <li>Quality Management System</li>
            <li>Supply Chain Planning</li>
          </ul>
        </div>

        {/* Get In Touch */}
        <div>
          <h3 className="text-white font-semibold">Get In Touch</h3>
          <ul className="mt-2 space-y-1">
            <li>
              <a href="mailto:hallo@prodmast.com" className="hover:underline">
                hallo@prodmast.com
              </a>
            </li>
            <li className="flex space-x-4 mt-4">
              <a href="#" className="hover:text-gray-400">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#" className="hover:text-gray-400">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="hover:text-gray-400">
                <i className="fab fa-facebook"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-sm text-gray-500 flex justify-between items-center px-4">
        <p>© 2024 Prodmast, All rights reserved</p>
        <div className="flex space-x-4">
          <a href="#" className="hover:underline">
            Terms & Conditions
          </a>
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
