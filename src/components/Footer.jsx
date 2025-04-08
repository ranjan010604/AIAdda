import { FaLinkedin, FaTwitter, FaGithub, FaYoutube, FaRobot } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  const links = [
    {
      title: "Product",
      items: [
        { name: "AI Models", link: "/aimodels" },
        { name: "Solutions", link: "/solutions" },
        { name: "Pricing", link: "/pricing" },
        { name: "Integrations", link: "/solutions#integrations" }
      ]
    },
    {
      title: "Resources",
      items: [
        { name: "Documentation", link: "#" },
        { name: "API Reference", link: "#" },
        { name: "Case Studies", link: "/casestudy" },
        { name: "Whitepapers", link: "#" }
      ]
    },
    {
      title: "Company",
      items: [
        { name: "About", link: "/about" },
        { name: "Careers", link: "/careers" },
        { name: "Contact", link: "/contact" },
        { name: "Newsroom", link: "/news" }
      ]
    },
  ];

  const socialLinks = [
    { icon: FaLinkedin, url: "https://linkedin.com/company/ai-adda" },
    { icon: FaTwitter, url: "https://twitter.com/ai_adda" },
    { icon: FaGithub, url: "https://github.com/ai-adda" },
    { icon: FaYoutube, url: "https://youtube.com/@ai-adda" }
  ];

  return (
    <footer className="bg-primary border-t border-gray-800 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="text-2xl text-accent">
                <FaRobot />
              </div>
              <h3 className="text-xl font-bold text-white">AI<span className="text-accent">Adda</span></h3>
            </div>
            <p className="text-gray-400 mb-6">
              Industrial AI orchestration platform for enterprise applications.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-accent transition-colors text-lg"
                  aria-label={`${social.icon.name} social link`}
                >
                  <social.icon />
                </a>
              ))}
            </div>
          </motion.div>

          {links.map((section, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-white font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.items.map((item, i) => (
                  <li key={i}>
                    <a 
                      href={item.link} 
                      className="text-gray-400 hover:text-accent transition-colors text-sm"
                      aria-label={item.name}
                      target={item.link.startsWith('http') ? '_blank' : '_self'}
                      rel={item.link.startsWith('http') ? 'noopener noreferrer' : ''}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} AI Adda. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="/privacy" className="text-gray-500 hover:text-accent transition-colors text-sm" aria-label="Privacy Policy">Privacy Policy</a>
            <a href="/terms" className="text-gray-500 hover:text-accent transition-colors text-sm" aria-label="Terms of Service">Terms of Service</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;