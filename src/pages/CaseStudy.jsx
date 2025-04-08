// CaseStudy.jsx
import {
  FaLightbulb,
  FaCode,
  FaRobot,
  FaServer,
  FaCheckCircle,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CaseStudy = () => {
  const caseStudies = [
    {
      id: "fintech-ai",
      title: "AI-Powered Financial Risk Assessment",
      client: "Fortune 500 FinTech",
      timeline: "6 Months",
      results: "78% risk prediction accuracy",
      pipeline: [
        {
          phase: "Discovery",
          icon: <FaLightbulb className="text-accent text-lg" />,
          tasks: [
            "Client needs analysis",
            "Data audit",
            "Success metrics definition",
          ],
        },
        {
          phase: "Development",
          icon: <FaCode className="text-accent text-lg" />,
          tasks: [
            "Custom model architecture",
            "Data preprocessing pipeline",
            "API integration",
          ],
        },
        {
          phase: "Training",
          icon: <FaRobot className="text-accent text-lg" />,
          tasks: [
            "Transfer learning implementation",
            "Hyperparameter tuning",
            "Bias mitigation",
          ],
        },
        {
          phase: "Deployment",
          icon: <FaServer className="text-accent text-lg" />,
          tasks: [
            "MLOps pipeline setup",
            "A/B testing framework",
            "Monitoring dashboard",
          ],
        },
        {
          phase: "Results",
          icon: <FaCheckCircle className="text-accent text-lg" />,
          tasks: [
            "78% prediction accuracy",
            "40% false positives reduction",
            "$2.3M annual savings",
          ],
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-black py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl font-extrabold mb-4 text-white tracking-tight">
            <span className="text-accent">Case Studies</span> at AIAdda
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light">
            Explore our real-world solutions crafted using a proven AI pipeline.
          </p>
        </motion.div>

        {caseStudies.map((study) => (
          <div key={study.id}>
            <div className="mb-16">
              <div className="flex justify-between items-center flex-wrap gap-6">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-3">
                    {study.title}
                  </h2>
                  <div className="flex gap-3 flex-wrap">
                    <span className="bg-gray-800 text-accent px-3 py-1 rounded-full text-sm">
                      Client: {study.client}
                    </span>
                    <span className="bg-gray-800 text-accent px-3 py-1 rounded-full text-sm">
                      Timeline: {study.timeline}
                    </span>
                    <span className="bg-gray-800 text-accent px-3 py-1 rounded-full text-sm">
                      Results: {study.results}
                    </span>
                  </div>
                </div>
                <Link
                  to="/contact"
                  className="bg-accent hover:bg-accent-dark text-black font-semibold px-6 py-3 rounded-lg shadow transition duration-300"
                >
                  Replicate This Success
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-accent/60 z-0"></div>
              <div className="space-y-20 relative z-10">
                {study.pipeline.map((phase, i) => {
                  const isLeft = i % 2 === 0;
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className={`flex flex-col md:flex-row items-center ${
                        isLeft ? "md:justify-start" : "md:justify-end"
                      }`}
                    >
                      <div
                        className={`w-full md:w-1/2 bg-gray-900 border border-gray-700 p-6 rounded-xl shadow-xl transition duration-300 hover:bg-gray-800/70 hover:scale-[1.02] ${
                          isLeft ? "md:mr-10" : "md:ml-10"
                        }`}
                      >
                        <h3 className="text-xl font-semibold text-white mb-3">
                          {phase.phase}
                        </h3>
                        <ul className="space-y-2 text-gray-300 text-sm list-disc list-inside">
                          {phase.tasks.map((task, j) => (
                            <li key={j}>{task}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="hidden md:flex items-center justify-center absolute left-1/2 transform -translate-x-1/2 bg-black border-4 border-accent w-10 h-10 rounded-full z-10">
                        {phase.icon}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-24 mb-28">
              {[
                { value: "78%", label: "Prediction Accuracy" },
                { value: "40%", label: "False Positives Reduced" },
                { value: "6x", label: "Faster Processing" },
                { value: "$2.3M", label: "Annual Savings" },
              ].map((metric, i) => (
                <div
                  key={i}
                  className="bg-gray-900 border border-gray-700 p-6 rounded-lg text-center hover:scale-105 transition-transform duration-300"
                >
                  <div className="text-3xl font-extrabold text-accent mb-2">
                    {metric.value}
                  </div>
                  <div className="text-gray-400 text-sm font-light">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Business with AI?
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8 font-light">
            Let’s replicate these results with a solution tailored to your needs.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-accent hover:bg-accent-dark text-black font-bold px-8 py-4 rounded-lg text-lg transition shadow"
          >
            Start Your AI Journey
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default CaseStudy;
