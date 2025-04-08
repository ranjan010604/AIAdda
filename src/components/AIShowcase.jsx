import { motion } from 'framer-motion'
import { FaBrain, FaChartLine, FaLanguage, FaCogs, FaShieldAlt } from 'react-icons/fa'

const AIShowcase = () => {
  const aiModels = [
    {
      icon: <FaBrain className="text-3xl" />,
      name: "Predictive AI",
      description: "Forecast industrial equipment failures with 95% accuracy",
      category: "Manufacturing"
    },
    {
      icon: <FaChartLine className="text-3xl" />,
      name: "Analytics AI",
      description: "Real-time processing of industrial IoT data streams",
      category: "Energy"
    },
    {
      icon: <FaLanguage className="text-3xl" />,
      name: "NLP Engine",
      description: "Automated analysis of technical documentation",
      category: "Healthcare"
    },
    {
      icon: <FaCogs className="text-3xl" />,
      name: "Process Optimizer",
      description: "Dynamic adjustment of industrial parameters",
      category: "Automotive"
    },
    {
      icon: <FaShieldAlt className="text-3xl" />,
      name: "Security AI",
      description: "Anomaly detection in industrial networks",
      category: "Cybersecurity"
    }
  ]

  return (
    <section className="py-20 px-6 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-white">Our </span>
            <span className="text-accent">AI Ecosystem</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Specialized AI models designed for industrial applications with cross-system compatibility.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {aiModels.map((model, index) => (
            <motion.div
              key={index}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-850 p-6 rounded-xl border border-gray-800 hover:border-accent transition-all duration-300 hover:shadow-lg hover:shadow-accent/10"
            >
              <div className="text-accent mb-4">{model.icon}</div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-white">{model.name}</h3>
                <span className="text-xs bg-gray-800 text-accent px-2 py-1 rounded-full">{model.category}</span>
              </div>
              <p className="text-gray-400 text-sm">{model.description}</p>
              <button className="mt-4 text-accent text-sm font-medium flex items-center gap-1 hover:text-accent-dark transition-colors">
                Explore <span>→</span>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AIShowcase