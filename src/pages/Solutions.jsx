import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FaRobot, 
  FaChartLine, 
  FaArrowRight, 
  FaBrain, 
  FaServer, 
  FaCode, 
  FaCloud, 
  FaShieldAlt 
} from 'react-icons/fa';

export default function Solutions() {
  const solutions = [
    {
      id: "model-development",
      icon: <FaCode className="text-4xl" />,
      title: "Custom AI Model Development",
      description: "Tailored AI models designed for your specific business needs, from concept to implementation.",
      link: "/contact"
    },
    {
      id: "model-training",
      icon: <FaBrain className="text-4xl" />,
      title: "AI Model Training & Fine-Tuning",
      description: "High-performance training with your data to optimize accuracy and efficiency.",
      link: "/contact"
    },
    {
      id: "ai-automation",
      icon: <FaChartLine className="text-4xl" />,
      title: "Workflow Automation",
      description: "AI-powered automation to handle repetitive tasks and streamline operations.",
      link: "/contact"
    },
    {
      id: "digital-personalities",
      icon: <FaRobot className="text-4xl" />,
      title: "AI Assistants & Digital Personalities",
      description: "Custom AI agents that interact naturally with users, mimicking human-like responses.",
      link: "/contact"
    },
    {
      id: "mlops-deployment",
      icon: <FaServer className="text-4xl" />,
      title: "MLOps & Model Deployment",
      description: "Seamless deployment and scaling of AI models in production environments.",
      link: "/contact"
    },
    {
      id: "ai-security",
      icon: <FaShieldAlt className="text-4xl" />,
      title: "AI Security & Compliance",
      description: "Ensuring your AI systems are secure, ethical, and compliant with regulations.",
      link: "/contact"
    }
  ];

  return (
    <div className="py-20 px-6 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="text-white">AI </span>
          <span className="text-accent">Solutions & Services</span>
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          End-to-end AI development, training, and deployment for businesses of all sizes.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {solutions.map((solution, index) => (
          <motion.div
            key={solution.id}
            id={solution.id}
            className="scroll-mt-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="bg-gray-800/50 hover:bg-gray-800/80 transition-all border border-gray-700 rounded-xl p-8 h-full flex flex-col">
              <div className="text-accent mb-6">{solution.icon}</div>
              <h2 className="text-2xl font-bold text-white mb-4">{solution.title}</h2>
              <p className="text-gray-400 mb-6 flex-grow">{solution.description}</p>
              <Link
                to={solution.link}
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-gray-900 font-bold px-6 py-3 rounded-lg w-fit"
              >
                Learn More <FaArrowRight />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}