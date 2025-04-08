import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-primary to-gray-900 px-6 overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent rounded-full filter blur-3xl opacity-20"></div>
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
        >
          <span className="text-white">Get Your Own </span>
          <span className="text-accent">Tailored AI</span>
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-400 text-lg md:text-xl mb-8 max-w-3xl mx-auto"
        >
          We build custom AI solutions for content creators, businesses, and more.
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="grid md:grid-cols-3 gap-6 mb-12 text-left"
        >
          <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
            <h3 className="text-accent font-bold mb-2">Customer Support AI</h3>
            <p className="text-gray-300">AI to answer customer queries efficiently and intelligently.</p>
          </div>

          <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
            <h3 className="text-accent font-bold mb-2">Automated Response AI</h3>
            <p className="text-gray-300">AI that responds on your behalf to automate interactions.</p>
          </div>

          <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
            <h3 className="text-accent font-bold mb-2">Workflow Automation</h3>
            <p className="text-gray-300">Enhance productivity and efficiency with automated workflows.</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link to="/contact">
            <button className="bg-accent hover:bg-accent-dark text-primary font-bold px-8 py-4 rounded-lg transition-colors flex items-center justify-center gap-2">
              Contact Us <FaArrowRight />
            </button>
          </Link>

          <Link to="/about">
            <button className="bg-transparent border border-gray-700 hover:border-accent text-white px-8 py-4 rounded-lg transition-colors">
              Learn More
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
