import { ArrowRight } from 'lucide-react';
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";


const WireSphere = ({ className }) => (
  <svg viewBox="0 0 400 400" className={className}>
    <circle cx="200" cy="200" r="180" 
      className="stroke-purple-500 fill-none opacity-20" />
    <ellipse cx="200" cy="200" rx="180" ry="60" 
      className="stroke-purple-500 fill-none" />
    <ellipse cx="200" cy="200" rx="180" ry="120" 
      transform="rotate(60 200 200)"
      className="stroke-purple-500 fill-none" />
    <ellipse cx="200" cy="200" rx="180" ry="120" 
      transform="rotate(-60 200 200)"
      className="stroke-purple-500 fill-none" />
  </svg>
);

const Button = ({ children, className }) => (
  <button className={`
    flex items-center gap-2 px-6 py-3 
    bg-zinc-800 hover:bg-zinc-700 
    text-white rounded-full transition-colors
    ${className}
  `}>
    {children}
    <ArrowRight size={16} />
  </button>
);

const HomePage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 py-24">
          <div className="relative">
            <WireSphere className="w-full h-auto animate-[spin_20s_linear_infinite]" />
          </div>
          <div className="flex flex-col justify-center gap-6">
            <div className="flex gap-1">
              <div className="w-2 h-2 bg-purple-500 rounded-full" />
              <div className="w-2 h-2 bg-purple-500 rounded-full" />
            </div>
            <h1 className="text-6xl font-bold leading-tight">
              CARS
            </h1>
            <div className="space-y-4 text-zinc-400">
              <p>Over 12 months, you will work with us to uncover high-impact opportunities and shape the most promising idea into a new venture.</p>
              <p>Receive funding, mentorship, hands-on support, access to an unparalleled pool of experts, potential co-founders and advisors.</p>
              <p>If you succeed, we become your first investor and help you raise a seed round.</p>
            </div>
            <Button className="w-fit">
              <Link to="/product1">Discover More</Link>    
            </Button>
          </div>
        </div>

        {/* Radicals Welcome Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 py-24">
          <div className="flex flex-col justify-center gap-6">
            <div className="flex gap-1">
              <div className="w-2 h-2 bg-purple-500 rounded-full" />
              <div className="w-2 h-2 bg-purple-500 rounded-full" />
            </div>
            <h2 className="text-6xl font-bold leading-tight">
              Product 2<br />Welcome
            </h2>
            <div className="space-y-4 text-zinc-400">
              <p>Do you believe climate is the only problem worth working on?</p>
              <p>Do you want to start building instead of just publishing?</p>
              <p>Do you dream of founding your own company?</p>
              <p>Find out more about the hard climate problems we want to solve and what we look for in applicants.</p>
              <p>No prior idea required. (but if you have one and people tell you it's crazy, we'd love to hear it!)</p>
            </div>
            <Button className="w-fit">
            <Link to="/product1">Discover More</Link> 
            </Button>
          </div>
          <div className="relative">
            <WireSphere className="w-full h-auto animate-[spin_20s_linear_infinite]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
