import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowRight, FaRobot, FaLightbulb } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="space-y-20 pb-20">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-950 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            <span className="text-white">Your Custom </span>
            <span className="text-accent">AI Assistant</span>
          </motion.h1>
          
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            We build AI solutions that speak, write, and interact with your unique voice.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/solutions" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent hover:bg-accent-dark text-gray-900 font-bold px-8 py-3 rounded-lg flex items-center justify-center gap-2"
            >
              Explore Solutions <FaArrowRight />
            </Link>
            <Link 
              to="/contact" 
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-700 hover:border-accent text-white px-8 py-3 rounded-lg flex items-center justify-center gap-2"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <FaRobot className="text-3xl text-accent" />,
              title: "AI Personalities",
              link: "/solutions#personalities"
            },
            {
              icon: <FaLightbulb className="text-3xl text-accent" />,
              title: "Smart Automation",
              link: "/solutions#automation"
            }
          ].map((feature, index) => (
            <Link 
              key={index}
              to={feature.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-gray-700 p-8 rounded-xl border border-gray-700 hover:border-accent transition-all"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-white">{feature.title}</h3>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}