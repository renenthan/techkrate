
const ServiceSection = () => {
  const services = [
    {
      title: "Strategy & Advisory",
      description: "Custom product creation with design and customization options.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-gray-300"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2L2 7v10l10 5 10-5V7L12 2zM12 4.15L19.6 8 12 11.85 4.4 8 12 4.15zM4 9.89l8 3.81v8.19L4 18.1V9.89zm16 0v8.2l-8 3.8v-8.2l8-3.8z" />
        </svg>
      ),
    },
    {
      title: "System Integration & Optimization",
      description: "Custom product creation with design and customization options.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-gray-300"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M13 4.5V7h5V4.5a1.5 1.5 0 00-1.5-1.5h-2a1.5 1.5 0 00-1.5 1.5zm-2 2.5H6v2h5v2h1v-4h-1zM4 9v6h1v2h5v-2H6v-6H4zm12 0v6h5v-6h-5zm1 1h3v4h-3v-4zM3 17h2v3a1 1 0 001 1h12a1 1 0 001-1v-3h2v3a3 3 0 01-3 3H6a3 3 0 01-3-3v-3z" />
        </svg>
      ),
    },
    {
      title: "AI-powered Automation",
      description: "Procedures and systems in place to ensure high product quality.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-gray-300"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 3C7.58 3 4 6.58 4 11s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zM8 11h3v3h2v-3h3v-2h-3V6h-2v3H8v2z" />
        </svg>
      ),
    },
    {
      title: "Cloud Solutions & Infrastructure Management",
      description:
        "Details on the latest manufacturing technologies and ongoing innovations.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-gray-300"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M17.83 10.17A5.994 5.994 0 0012 4c-3.31 0-6 2.69-6 6 0 .22.02.43.04.64A4.992 4.992 0 002 15c0 2.76 2.24 5 5 5h11c2.76 0 5-2.24 5-5s-2.24-5-5-5h-1.17z" />
        </svg>
      ),
    },
    {
      title: "Data Analytics and Insight Generation",
      description: "Packaging and logistics for shipping to customers and distributors.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-gray-300"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M3 3h18v2H3V3zm0 4h18v14H3V7zm4 2h10v10H7V9z" />
        </svg>
      ),
    },
    {
      title: "Personalized Application Development & Management",
      description:
        "Services to help companies understand market needs and provide strategic advice.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-gray-300"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2C8.13 2 5 5.13 5 9c0 1.95.76 3.72 2 5.03V19h2v-5h6v5h2v-4.97c1.24-1.31 2-3.08 2-5.03 0-3.87-3.13-7-7-7zm0 2c2.76 0 5 2.24 5 5 0 1.22-.5 2.33-1.28 3.15A5.505 5.505 0 0012 14a5.505 5.505 0 00-3.72-1.85C9.5 11.33 10 10.22 10 9c0-2.76 2.24-5 5-5z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-black text-white py-16 h-screen">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-semibold mb-8">
          Simplify operations with our efficient, quality-focused services.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center">
              {service.icon}
              <h3 className="text-xl font-bold mt-4">{service.title}</h3>
              <p className="text-gray-400 mt-2">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
