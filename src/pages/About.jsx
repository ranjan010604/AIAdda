import { FaRocket, FaUsers, FaChartLine, FaGlobe, FaLightbulb, FaServer, FaCode } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { teamMembers } from '../data/teamData';

const About = () => {
  const stats = [
    { value: "50+", label: "AI Experts", icon: <FaUsers className="text-accent text-2xl" /> },
    { value: "100+", label: "Successful Deployments", icon: <FaRocket className="text-accent text-2xl" /> },
    { value: "15+", label: "Industries Served", icon: <FaGlobe className="text-accent text-2xl" /> },
    { value: "92%", label: "Client Retention", icon: <FaChartLine className="text-accent text-2xl" /> }
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <div className="relative py-20 px-6 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            <span className="text-white">Redefining Possibilities with </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-500">AI</span>
          </motion.h1>
          <p className="text-gray-400 max-w-3xl mx-auto text-xl">
            Pioneering ethical AI solutions since 2018, transforming businesses globally
          </p>
        </div>
      </div>

      {/* Our Story */}
      <div className="max-w-7xl mx-auto py-20 px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-400">
              <p>
                Founded in Bangalore by a team of AI researchers from IIT and MIT, AIAdda began as a passion project to democratize artificial intelligence.
              </p>
              <p>
                Today, we're a global team of 150+ engineers, data scientists, and domain experts delivering transformative AI solutions to Fortune 500 companies and startups alike.
              </p>
              <p>
                Our patented neural architecture framework has been recognized by Gartner as a "Cool Vendor in AI" for three consecutive years.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="w-full max-w-lg bg-gray-800/50 border border-gray-700 rounded-xl overflow-hidden">
              <img 
                src="/images/vision.png" 
                alt="Our Vision" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-gray-800/50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 h-full hover:shadow-lg hover:shadow-accent/10 transition-all">
                  <div className="flex justify-center mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Leadership */}
      <div className="max-w-7xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Meet Our Leadership</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((leader, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-800/50 border border-gray-700 rounded-xl overflow-hidden hover:shadow-lg hover:shadow-accent/10 transition-all"
            >
              <div className="h-64 bg-gray-800/30 flex items-center justify-center">
                <img 
                  src={leader.image} 
                  alt={leader.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white">{leader.name}</h3>
                <p className="text-accent mb-3">{leader.role}</p>
                <p className="text-gray-400">{leader.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Discover how our AI solutions can drive innovation and growth for your organization.
          </p>
          <a
            href="/contact"
            className="inline-block bg-accent hover:bg-accent-dark text-gray-900 font-bold px-8 py-3 rounded-lg text-lg transition-all"
          >
            Schedule Consultation
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;