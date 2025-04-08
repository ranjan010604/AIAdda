import { useRef } from 'react';
import { motion } from 'framer-motion';
import {
  FaPaperPlane, FaMapMarkerAlt, FaPhone, FaEnvelope,
  FaBusinessTime, FaHeadset, FaCalendarAlt, FaTwitter,
  FaLinkedin, FaGithub
} from 'react-icons/fa';

export default function Contact() {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted');
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2 }
    })
  };

  return (
    <div className="relative overflow-hidden py-20 px-6 max-w-7xl mx-auto">
      {/* Animated background blobs */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute w-96 h-96 bg-accent blur-3xl rounded-full top-1/4 left-1/3 animate-pulse" />
        <div className="absolute w-80 h-80 bg-accent blur-2xl rounded-full bottom-1/3 right-1/4 animate-ping" />
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="text-center mb-16 relative z-10"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
          Partner With <span className="text-accent">Our Experts</span>
        </h1>
        <p className="text-gray-400 max-w-3xl mx-auto text-lg">
          Get a free consultation. We’ll respond within 24 hours with a custom AI plan.
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10"
        initial="hidden"
        animate="visible"
      >
        {/* Contact Form */}
        <motion.div variants={fadeInUp} custom={0}>
          <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <FaBusinessTime className="text-accent" />
              Project Inquiry
            </h2>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="text-gray-300">Full Name*</label>
                  <input type="text" id="name" required placeholder="John Doe"
                    className="bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white w-full focus:border-accent focus:outline-none" />
                </div>
                <div>
                  <label htmlFor="company" className="text-gray-300">Company*</label>
                  <input type="text" id="company" required placeholder="Your Company"
                    className="bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white w-full focus:border-accent focus:outline-none" />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="text-gray-300">Work Email*</label>
                <input type="email" id="email" required placeholder="john@company.com"
                  className="bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white w-full focus:border-accent focus:outline-none" />
              </div>
              <div>
                <label htmlFor="service" className="text-gray-300">Service Needed*</label>
                <select id="service" required
                  className="bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white w-full focus:border-accent focus:outline-none">
                  <option value="">Select a service</option>
                  <option value="ai-development">AI Development</option>
                  <option value="model-training">Model Training</option>
                  <option value="automation">Process Automation</option>
                  <option value="mlops">MLOps Deployment</option>
                  <option value="consulting">AI Consulting</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="text-gray-300">Project Details*</label>
                <textarea id="message" required placeholder="Describe your project..."
                  className="bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white w-full h-40 resize-none focus:border-accent focus:outline-none" />
              </div>
              <button type="submit"
                className="bg-accent hover:bg-accent-dark text-primary font-bold px-8 py-4 rounded-lg transition-all flex items-center gap-2 justify-center w-full">
                Request Consultation <FaPaperPlane />
              </button>
            </form>
          </div>
        </motion.div>

        {/* Contact Info */}
        <motion.div variants={fadeInUp} custom={1}>
          <div className="space-y-8">
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <FaHeadset className="text-accent" />
                Contact Channels
              </h2>
              <ContactLine icon={<FaPhone />} title="Sales Inquiries" value="+1 (555) 123-4567" subtitle="Mon-Fri, 9am-5pm EST" />
              <ContactLine icon={<FaEnvelope />} title="Email Us" value="sales@ai-solutions.com" subtitle="support@ai-solutions.com" />
              <ContactLine icon={<FaMapMarkerAlt />} title="Headquarters" value="123 AI Innovation Drive" subtitle="Tech City, TC 10001" />
            </div>

            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <FaCalendarAlt className="text-accent" />
                Schedule a Meeting
              </h2>
              <p className="text-gray-400 mb-4">
                Book a 30-minute Zoom call with our AI engineers.
              </p>
              <a href="https://calendly.com/ai-solutions"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-accent text-white hover:bg-accent hover:text-primary px-6 py-3 rounded-lg transition-all flex items-center gap-2 justify-center w-full">
                View Available Times <FaCalendarAlt />
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* FAQs */}
      <motion.div
        className="mt-20 relative z-10"
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        viewport={{ once: true }}
      >
        <h3 className="text-white text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h3>
        <div className="grid md:grid-cols-2 gap-8">
          <Faq question="How fast can we start?" answer="We can begin within 3–5 business days after project discussion." />
          <Faq question="Do you sign NDAs?" answer="Absolutely. All engagements begin with NDA agreements." />
          <Faq question="What industries do you serve?" answer="We serve finance, healthcare, logistics, retail, and more." />
          <Faq question="Can you integrate with existing tools?" answer="Yes. We specialize in API integration and cloud deployment." />
        </div>
      </motion.div>

      {/* Socials & Trust */}
      <div className="mt-20 text-center space-y-6 relative z-10">
        

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          <TrustBox label="24h" text="Response Time" />
          <TrustBox label="50+" text="Clients" />
          <TrustBox label="15+" text="AI Experts" />
          <TrustBox label="100%" text="NDA Protected" />
        </div>
      </div>
    </div>
  );
}

const ContactLine = ({ icon, title, value, subtitle }) => (
  <div className="flex items-start gap-4 mb-4">
    <div className="text-accent text-xl mt-1">{icon}</div>
    <div>
      <h4 className="text-white font-bold">{title}</h4>
      <p className="text-gray-400">{value}</p>
      {subtitle && <p className="text-sm text-gray-500">{subtitle}</p>}
    </div>
  </div>
);

const TrustBox = ({ label, text }) => (
  <div className="p-6 bg-gray-800/40 rounded-xl text-center">
    <div className="text-3xl font-bold text-accent mb-2">{label}</div>
    <p className="text-gray-400">{text}</p>
  </div>
);

const Faq = ({ question, answer }) => (
  <div className="bg-gray-800/40 p-6 rounded-xl border border-gray-700">
    <h4 className="text-white font-bold mb-2">{question}</h4>
    <p className="text-gray-400">{answer}</p>
  </div>
);
