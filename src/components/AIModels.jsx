import { motion } from 'framer-motion'
import { FaBrain, FaComments, FaChartLine, FaImage, FaCode, FaArrowRight } from 'react-icons/fa'

const AIModels = () => {
  const modelCategories = [
    {
      icon: <FaBrain className="text-3xl text-accent" />,
      title: "Conversational AI",
      description: "Natural language processing models for human-like interactions",
      features: [
        "Customer support chatbots",
        "Virtual assistants",
        "Sentiment analysis",
        "Multilingual support"
      ]
    },
    {
      icon: <FaImage className="text-3xl text-accent" />,
      title: "Computer Vision",
      description: "Image and video analysis for various applications",
      features: [
        "Object detection",
        "Facial recognition",
        "Quality inspection",
        "Augmented reality"
      ]
    },
    {
      icon: <FaChartLine className="text-3xl text-accent" />,
      title: "Predictive Analytics",
      description: "Forecasting and decision-making models",
      features: [
        "Demand forecasting",
        "Risk assessment",
        "Anomaly detection",
        "Predictive maintenance"
      ]
    },
    {
      icon: <FaCode className="text-3xl text-accent" />,
      title: "Generative AI",
      description: "Content creation and synthesis models",
      features: [
        "Text generation",
        "Image synthesis",
        "Code generation",
        "Music composition"
      ]
    },
    {
      icon: <FaComments className="text-3xl text-accent" />,
      title: "Speech AI",
      description: "Voice-enabled applications and services",
      features: [
        "Speech-to-text",
        "Text-to-speech",
        "Voice biometrics",
        "Real-time translation"
      ]
    }
  ]

  return (
    <section id="ai-models" className="py-20 px-6 bg-gray-900 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-white">Our </span>
            <span className="text-accent">AI Model Portfolio</span>
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Cutting-edge artificial intelligence models tailored for your specific business needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modelCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 hover:border-accent transition-all"
            >
              <div className="mb-6">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{category.title}</h3>
              <p className="text-gray-400 mb-4">{category.description}</p>
              
              <ul className="space-y-2">
                {category.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className="mt-6 text-accent hover:text-accent-dark font-medium flex items-center gap-2">
                Explore models <FaArrowRight />
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <button className="bg-accent hover:bg-accent-dark text-primary font-bold px-8 py-4 rounded-lg transition-colors">
            View Full Model Catalog
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default AIModels