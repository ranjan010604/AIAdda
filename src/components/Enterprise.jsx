import { motion } from 'framer-motion'

const Enterprise = () => {
  return (
    <section className="py-20 px-6 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gray-850 rounded-xl border border-gray-800 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <motion.div 
              initial={{ x: -40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="p-12 lg:p-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="text-white">Ready for </span>
                <span className="text-accent">Industrial Scale</span>
              </h2>
              <p className="text-gray-400 mb-8">
                Our platform is designed to meet the rigorous demands of Fortune 500 industrial operations with:
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  "24/7 dedicated support",
                  "On-premises deployment",
                  "Custom AI model training",
                  "Compliance with industrial standards"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="text-accent mt-1">✓</div>
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
              <button className="bg-accent hover:bg-accent-dark text-primary font-bold px-8 py-3 rounded-lg transition-colors">
                Contact Enterprise Sales
              </button>
            </motion.div>
            <motion.div 
              initial={{ x: 40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary to-gray-900 flex items-center justify-center p-12"
            >
              <div className="relative w-full max-w-md">
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-accent rounded-full filter blur-3xl opacity-20"></div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent rounded-full filter blur-3xl opacity-20"></div>
                <div className="relative bg-gray-850 border border-gray-800 rounded-lg p-8 shadow-lg">
                  <h3 className="text-xl font-bold text-white mb-4">Enterprise Demo</h3>
                  <div className="space-y-4">
                    <input 
                      type="text" 
                      placeholder="Company Name" 
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                    <input 
                      type="email" 
                      placeholder="Work Email" 
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                    <button className="w-full bg-accent hover:bg-accent-dark text-primary font-bold py-3 rounded-lg transition-colors">
                      Request Demo
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Enterprise