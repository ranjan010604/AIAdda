import { motion } from 'framer-motion'
import { FaPlug, FaServer, FaLock, FaChartBar } from 'react-icons/fa'

const Features = () => {
  const features = [
    {
      icon: <FaPlug className="text-3xl" />,
      title: "Seamless Integration",
      description: "Connect with existing industrial systems through standardized APIs"
    },
    {
      icon: <FaServer className="text-3xl" />,
      title: "Edge Deployment",
      description: "Run AI models directly on industrial edge devices"
    },
    {
      icon: <FaLock className="text-3xl" />,
      title: "Zero Trust Security",
      description: "Military-grade encryption for all AI communications"
    },
    {
      icon: <FaChartBar className="text-3xl" />,
      title: "Performance Analytics",
      description: "Monitor all AI systems through unified dashboards"
    }
  ]

  return (
    <section className="py-20 px-6 bg-primary">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-white">Enterprise </span>
            <span className="text-accent">Platform Features</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Designed for mission-critical industrial operations with 99.99% uptime SLA.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-850 p-8 rounded-xl border border-gray-800 hover:border-accent transition-all duration-300"
            >
              <div className="text-accent mb-6">{feature.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features