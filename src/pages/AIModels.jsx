import { FaRobot, FaCode, FaBook, FaGraduationCap, FaLanguage, FaChartLine, FaBriefcase, FaStethoscope, FaWallet, FaUtensils, FaHeadset, FaFileAlt, FaLightbulb, FaShieldAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
// Add this at the top
import { Link } from 'react-router-dom';


const AIModels = () => {
  const models = [
    {
      id: "headline-generation",
      title: "Headline Generation",
      description: "Craft compelling headlines that boost engagement",
      icon: <FaLightbulb />,
      category: "Content",
      color: "from-purple-500 to-blue-500",
      link: "https://huggingface.co/spaces/Sudish/headline_generator" // External link
    },
    {
      id: "krishna-ji",
      title: "Talk to Krishna Ji",
      description: "Spiritual guidance through AI conversation",
      icon: <FaHeadset />,
      category: "Spiritual",
      color: "from-yellow-400 to-orange-500",
      link: "https://chatgpt.com/g/g-Fz19UR1Tf-bhagavad-gita-counseling" // External link
    },
    // Add all other models with external links...
    {
      id: "code-generation",
      title: "Code Generation",
      description: "Generate and optimize code snippets",
      icon: <FaCode />,
      category: "Developer",
      color: "from-green-400 to-emerald-500",
      link: "https://app.ai-adda.com/code-gen" // External link
    },
    {
      id: "legal-summarization",
      title: "Legal Summarization",
      description: "Simplify complex legal documents",
      icon: <FaFileAlt />,
      category: "Professional",
      color: "from-blue-400 to-cyan-500",
      link: "https://app.ai-adda.com/legal-ai" // External link
    }
    // ...include all other models with their external links
  ];

  return (
    <div className="min-h-screen bg-gray-900 py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white">Access Our </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-500">
              AI Models
            </span>
          </h1>
          <p className="text-gray-400 max-w-3xl mx-auto text-xl">
            Direct links to all our AI tools - accessible from anywhere
          </p>
        </div>

        {/* Model Grid with External Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {models.map((model, index) => (
            <motion.a
              key={model.id}
              href={model.link} // External URL
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              className={`group relative overflow-hidden rounded-2xl border border-gray-700 hover:border-accent/30 transition-all duration-300 ${model.cardSize}`}
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${model.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`} />
              
              {/* Card Content */}
              <div className="relative h-full p-6 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-lg bg-gray-800 flex items-center justify-center text-white mb-4">
                    {model.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{model.title}</h3>
                  <p className="text-gray-400">{model.description}</p>
                </div>
                
                <div className="mt-6 flex justify-between items-center">
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-gray-800 text-white">
                    {model.category}
                  </span>
                  <span className="text-accent text-sm font-medium flex items-center gap-1">
                    Open Tool <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="mt-24 text-center">
  <Link
    to="/contact"
    className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-gray-900 font-bold px-8 py-3 rounded-lg text-lg transition-all"
  >
    Contact Our Team For Custom Models
  </Link>
</div>

      </div>
    </div>
  );
};

export default AIModels;