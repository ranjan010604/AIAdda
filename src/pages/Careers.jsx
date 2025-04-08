import { 
  FaBriefcase, 
  FaGraduationCap, 
  FaUsers, 
  FaCodeBranch, 
  FaBrain, 
  FaServer, 
  FaLaptopCode,
  FaCheck
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Careers = () => {
  const openings = [
    {
      title: "Senior ML Engineer",
      type: "Full-time",
      location: "Bangalore | Remote",
      department: "Engineering",
      icon: <FaLaptopCode className="text-4xl" />
    },
    {
      title: "AI Research Scientist",
      type: "Full-time",
      location: "Bangalore",
      department: "R&D",
      icon: <FaBrain className="text-4xl" />
    },
    {
      title: "DevOps Engineer - AI",
      type: "Full-time",
      location: "Remote",
      department: "Engineering",
      icon: <FaServer className="text-4xl" />
    }
  ];

  const benefits = [
    { 
      icon: <FaGraduationCap className="text-3xl" />, 
      title: "Learning Budget", 
      description: "$3,000 annual budget for courses and conferences" 
    },
    { 
      icon: <FaUsers className="text-3xl" />, 
      title: "Mentorship", 
      description: "1:1 mentorship from industry veterans" 
    },
    { 
      icon: <FaCodeBranch className="text-3xl" />, 
      title: "Cutting-edge Tech", 
      description: "Work with latest AI frameworks and hardware" 
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Hero Section */}
      <section className="relative py-32 px-6 bg-gradient-to-br from-gray-800 to-gray-900 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          <span className="text-white">Build the Future of </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">AI</span>
        </motion.h1>
        <p className="text-gray-300 max-w-2xl mx-auto text-xl mb-8">
          Join our team of world-class engineers and researchers pushing the boundaries of artificial intelligence
        </p>
        <Link 
          to="#openings" 
          className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold px-8 py-3 rounded-lg transition-colors duration-300"
          aria-label="View open positions"
        >
          View Open Positions
        </Link>
      </section>

      {/* Why Join Us */}
      <section className="max-w-7xl mx-auto py-20 px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-28">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-8">Why Join AIAdda?</h2>
            <ul className="space-y-6">
              {[
                {
                  title: "Impact at Scale",
                  description: "Your work will power AI systems used by millions globally"
                },
                {
                  title: "Research Freedom",
                  description: "20% time for independent research and experimentation"
                },
                {
                  title: "Growth Focus",
                  description: "Promote from within policy with clear career ladders"
                }
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="text-blue-400 mt-1">
                    <FaCheck className="text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="bg-gray-800 p-12 rounded-full">
              <FaBriefcase className="text-[120px] text-blue-400" />
            </div>
          </motion.div>
        </div>

        {/* Benefits */}
        <section className="mb-28">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-800/50 border border-gray-700 rounded-xl p-8 hover:border-blue-400/30 transition-all duration-300"
              >
                <div className="text-blue-400 mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Open Positions */}
        <section id="openings" className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-8">Open Positions</h2>
          <div className="space-y-6">
            {openings.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-blue-400/30 transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="bg-gray-700 p-4 rounded-lg flex-shrink-0">
                    {job.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-bold text-white">{job.title}</h3>
                        <div className="flex flex-wrap gap-3 mt-3">
                          <span className="text-sm bg-gray-700 text-blue-400 px-3 py-1 rounded-full">
                            {job.type}
                          </span>
                          <span className="text-sm bg-gray-700 text-blue-400 px-3 py-1 rounded-full">
                            {job.location}
                          </span>
                          <span className="text-sm bg-gray-700 text-blue-400 px-3 py-1 rounded-full">
                            {job.department}
                          </span>
                        </div>
                      </div>
                      <button 
                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold px-6 py-2 rounded-lg whitespace-nowrap transition-colors duration-300 mt-4 md:mt-0"
                        aria-label={`Apply for ${job.title} position`}
                      >
                        Apply Now
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </section>
    </div>
  );
};

export default Careers;