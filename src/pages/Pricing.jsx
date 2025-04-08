import { Link } from 'react-router-dom';
import { FaCheck, FaLightbulb, FaServer, FaShieldAlt, FaRocket } from 'react-icons/fa';

export default function Pricing() {
  const plans = [
    {
      name: "Prototype",
      price: "$4,500",
      description: "Ideal for testing AI concepts",
      icon: <FaLightbulb className="text-accent text-2xl" />,
      features: [
        "Basic model architecture",
        "1-2 use case implementations",
        "Monthly support",
        "Limited dataset training"
      ],
      link: "/contact"
    },
    {
      name: "Professional",
      price: "$12,000",
      description: "For production-ready solutions",
      icon: <FaServer className="text-accent text-2xl" />,
      features: [
        "Custom model development",
        "Full dataset training",
        "Priority support",
        "Basic MLOps pipeline",
        "API integration"
      ],
      link: "/contact",
      featured: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "End-to-end AI systems",
      icon: <FaShieldAlt className="text-accent text-2xl" />,
      features: [
        "Multi-model architecture",
        "Continuous training",
        "Dedicated ML engineers",
        "Advanced MLOps",
        "Security & compliance",
        "24/7 support"
      ],
      link: "/contact"
    }
  ];

  return (
    <div className="py-20 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">
          <span className="text-white">AI Service </span>
          <span className="text-accent">Tiers</span>
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Transparent pricing for every stage of your AI journey
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <div 
            key={index}
            className={`relative bg-gray-800/50 hover:bg-gray-800/80 transition-all p-8 rounded-xl border ${
              plan.featured 
                ? 'border-accent shadow-lg shadow-accent/20' 
                : 'border-gray-700'
            }`}
          >
            {/* Featured badge */}
            {plan.featured && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-accent text-gray-900 font-bold px-4 py-1 rounded-full text-sm">
                Most Popular
              </div>
            )}

            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-2xl font-bold text-white">{plan.name}</h2>
                <p className="text-gray-400">{plan.description}</p>
              </div>
              <div>{plan.icon}</div>
            </div>

            <p className="text-4xl font-bold text-accent mb-6">
              {plan.price}
              {plan.price !== "Custom" && (
                <span className="text-lg text-gray-400">/project</span>
              )}
            </p>
            
            <ul className="space-y-3 mb-8">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-300">
                  <FaCheck className="text-accent mt-1 flex-shrink-0" /> 
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            
            <Link
              to={plan.link}
              className={`w-full block text-center py-3 rounded-lg font-bold transition-all ${
                plan.featured 
                  ? 'bg-accent hover:bg-accent-dark text-gray-900' 
                  : 'bg-gray-700 hover:bg-gray-600 text-white'
              }`}
            >
              {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
            </Link>
          </div>
        ))}
      </div>

      {/* Enterprise note */}
      <div className="mt-12 p-6 bg-gray-800/30 border border-gray-700 rounded-xl max-w-3xl mx-auto">
        <div className="flex items-start gap-4">
          <FaRocket className="text-accent text-xl mt-1 flex-shrink-0" />
          <div>
            <h3 className="text-white font-bold mb-2">Need something bigger?</h3>
            <p className="text-gray-400">
              Our enterprise plans include dedicated AI teams, custom SLAs, and 
              white-glove deployment for large-scale implementations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}