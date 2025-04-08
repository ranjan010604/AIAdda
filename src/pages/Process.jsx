import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBrain, FaCode, FaRocket, FaChartLine, FaUserCog, FaServer, FaCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Process = () => {
  const [activeStep, setActiveStep] = useState(0);

  const processSteps = [
    {
      title: "Discovery & Planning",
      icon: <FaUserCog className="text-3xl" />,
      description: "We analyze your business needs and define AI objectives",
      details: [
        "Requirement gathering session",
        "Use case identification",
        "ROI analysis",
        "Project roadmap creation"
      ],
      duration: "1-2 weeks"
    },
    {
      title: "Data Preparation",
      icon: <FaServer className="text-3xl" />,
      description: "We collect and prepare your data for AI training",
      details: [
        "Data auditing & cleaning",
        "Annotation & labeling",
        "Feature engineering",
        "Dataset versioning"
      ],
      duration: "2-4 weeks"
    },
    {
      title: "Model Development",
      icon: <FaBrain className="text-3xl" />,
      description: "We build and train custom AI models for your needs",
      details: [
        "Algorithm selection",
        "Model architecture design",
        "Training & validation",
        "Performance benchmarking"
      ],
      duration: "3-6 weeks"
    },
    {
      title: "Integration",
      icon: <FaCode className="text-3xl" />,
      description: "We deploy the AI solution into your infrastructure",
      details: [
        "API development",
        "System integration",
        "Load testing",
        "Security hardening"
      ],
      duration: "2-3 weeks"
    },
    {
      title: "Optimization",
      icon: <FaChartLine className="text-3xl" />,
      description: "We continuously monitor and improve your AI",
      details: [
        "Performance monitoring",
        "Feedback loop implementation",
        "Model retraining",
        "Scalability planning"
      ],
      duration: "Ongoing"
    }
  ];

  const nextStep = () => {
    setActiveStep((prev) => (prev < processSteps.length - 1 ? prev + 1 : prev));
  };

  const prevStep = () => {
    setActiveStep((prev) => (prev > 0 ? prev - 1 : prev));
  };

  return (
    <section id="ai-process" className="py-20 px-6 bg-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">AI Implementation </span>
            <span className="text-accent">Process</span>
          </h1>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            Our proven methodology for successful AI integration
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Process Timeline */}
          <div className="lg:w-1/4">
            <div className="relative">
              <div className="absolute left-6 top-0 h-full w-0.5 bg-gradient-to-b from-accent/20 to-transparent hidden lg:block" />
              
              <div className="space-y-4">
                {processSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className={`flex items-start gap-4 p-4 rounded-xl cursor-pointer transition-all ${activeStep === index ? 'bg-gray-800 border-l-4 border-accent' : 'hover:bg-gray-800/50'}`}
                    onClick={() => setActiveStep(index)}
                  >
                    <div className={`p-2 rounded-full ${activeStep === index ? 'bg-accent text-gray-900' : 'bg-gray-800 text-accent'}`}>
                      {step.icon}
                    </div>
                    <div>
                      <h3 className={`font-medium ${activeStep === index ? 'text-white' : 'text-gray-400'}`}>
                        {step.title}
                      </h3>
                      <p className="text-xs text-gray-500">{step.duration}</p>
                    </div>
                    {activeStep === index && (
                      <div className="ml-auto text-accent">
                        <FaCheckCircle />
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Process Details */}
          <div className="lg:w-3/4">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="bg-gray-800/50 border border-gray-700 rounded-xl p-8 h-full"
              >
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <div className="text-accent mb-2">
                      {processSteps[activeStep].icon}
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-2">
                      {processSteps[activeStep].title}
                    </h2>
                    <p className="text-gray-400">
                      {processSteps[activeStep].description}
                    </p>
                  </div>
                  <div className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm">
                    {processSteps[activeStep].duration}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {processSteps[activeStep].details.map((detail, index) => (
                    <div key={index} className="flex items-start gap-3 bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                      <div className="text-accent mt-0.5">
                        <FaCheckCircle className="text-sm" />
                      </div>
                      <p className="text-gray-300">{detail}</p>
                    </div>
                  ))}
                </div>

                <div className="flex justify-between mt-8">
                  <button
                    onClick={prevStep}
                    disabled={activeStep === 0}
                    className={`px-6 py-2 rounded-lg ${activeStep === 0 ? 'bg-gray-800 text-gray-600 cursor-not-allowed' : 'bg-gray-700 hover:bg-gray-600 text-white'}`}
                  >
                    Previous
                  </button>
                  {activeStep < processSteps.length - 1 ? (
                    <button
                      onClick={nextStep}
                      className="bg-accent hover:bg-accent-dark text-gray-900 font-medium px-6 py-2 rounded-lg"
                    >
                      Next Step
                    </button>
                  ) : (
                    <Link
                      to="/contact"
                      className="bg-accent hover:bg-accent-dark text-gray-900 font-medium px-6 py-2 rounded-lg inline-block"
                    >
                      Start Your Project
                    </Link>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;