import { FaNewspaper, FaMicrophone, FaAward, FaDownload, FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Newsroom = () => {
  const newsItems = [
    {
      id: 1,
      date: "May 15, 2023",
      title: "AIAdda Named to CB Insights AI 100 List",
      type: "Award",
      icon: <FaAward className="text-blue-400 text-2xl" />,
      summary: "Recognized as one of the most promising AI startups globally for our work in ethical AI frameworks",
      link: "/news/ai-100-list"
    },
    {
      id: 2,
      date: "March 28, 2023",
      title: "CEO Rahul Verma Speaks at UN AI Summit",
      type: "Event",
      icon: <FaMicrophone className="text-blue-400 text-2xl" />,
      summary: "Discussing global standards for responsible AI deployment in healthcare applications",
      link: "/news/un-ai-summit"
    },
    {
      id: 3,
      date: "January 10, 2023",
      title: "Forbes Feature: How AIAdda is Transforming FinTech",
      type: "Press",
      icon: <FaNewspaper className="text-blue-400 text-2xl" />,
      summary: "Deep dive into our work with major banks to detect fraudulent transactions in real-time",
      link: "/news/forbes-feature"
    }
  ];

  const mediaResources = [
    { 
      title: "Brand Assets", 
      description: "Logos, color palette, and brand guidelines",
      link: "/media/brand-assets"
    },
    { 
      title: "Press Contacts", 
      description: "Our communications team is available 24/7",
      link: "/media/press-contacts" 
    },
    { 
      title: "Executive Bios", 
      description: "Background on our leadership team",
      link: "/media/executive-bios" 
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Hero Section */}
      <section className="relative py-32 px-6 bg-gradient-to-b from-gray-800 to-gray-900 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          <span className="text-white">AIAdda </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Newsroom</span>
        </motion.h1>
        <p className="text-gray-300 max-w-2xl mx-auto text-xl">
          The latest updates, media coverage, and announcements from our team
        </p>
      </section>

      {/* News Grid */}
      <div className="max-w-7xl mx-auto py-20 px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">Making Headlines</h2>
            <p className="text-gray-300 mb-8">
              Discover how AIAdda is shaping the conversation around responsible AI innovation and deployment across industries.
            </p>
            <div className="bg-gray-800 rounded-xl p-12 flex justify-center">
              <FaNewspaper className="text-[120px] text-blue-400 opacity-70" />
            </div>
          </motion.div>
          
          <div className="space-y-8">
            {newsItems.map((item, index) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-800/50 border border-gray-700 rounded-xl p-8 hover:border-blue-400/30 transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="bg-gray-700 p-3 rounded-lg">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-sm text-blue-400 mb-2">
                      {item.date} • <span className="text-gray-300">{item.type}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                    <p className="text-gray-300 mb-4">{item.summary}</p>
                    <Link 
                      to={item.link}
                      className="text-blue-400 hover:text-blue-300 font-medium flex items-center gap-2 transition-colors"
                      aria-label={`Read more about ${item.title}`}
                    >
                      Read More <FaArrowRight />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Media Kit */}
        <section className="bg-gray-800/30 border border-gray-700 rounded-2xl p-10">
          <h2 className="text-3xl font-bold text-white mb-8">Media Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mediaResources.map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-blue-400/30 transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-white mb-3">{resource.title}</h3>
                <p className="text-gray-300 mb-4">{resource.description}</p>
                <Link 
                  to={resource.link}
                  className="text-blue-400 hover:text-blue-300 font-medium flex items-center gap-2 transition-colors"
                  aria-label={`Download ${resource.title}`}
                >
                  Download <FaDownload />
                </Link>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Newsroom;