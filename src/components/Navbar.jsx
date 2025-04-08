import { FaRobot, FaUserTie, FaTimes } from 'react-icons/fa';
import { FiMenu } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuButtonRef = useRef(null);
  const menuRef = useRef(null);

  const navItems = [
    { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Solutions', path: '/solutions' },
  { name: 'AI Models', path: '/aimodels' },
  { name: 'Process', path: '/process' },
  { name: 'Pricing', path: '/pricing' },
  { name: 'Contact', path: '/contact' }
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(prev => !prev);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    menuButtonRef.current?.focus();
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMobileMenu();
      }
    };

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        closeMobileMenu();
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        closeMobileMenu();
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscape);
      window.addEventListener('resize', handleResize);
      
      setTimeout(() => {
        const firstMenuItem = document.querySelector('.mobile-menu-item');
        firstMenuItem?.focus();
      }, 100);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
      window.removeEventListener('resize', handleResize);
    };
  }, [mobileMenuOpen]);

  return (
    <header className="bg-gray-900 border-b border-gray-800 py-4 px-6 md:px-12 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center relative z-50">
        {/* Logo */}
        <motion.div 
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="flex items-center gap-2 z-50"
        >
          <Link 
            to="/" 
            className="flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded"
            onClick={closeMobileMenu}
            aria-label="AIAdda Home"
          >
            <FaRobot className="text-2xl text-blue-500" aria-hidden="true" />
            <h1 className="text-xl font-bold text-white">AI<span className="text-blue-500">Adda</span></h1>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8" aria-label="Main navigation">
          {navItems.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 * i }}
            >
              <Link 
                to={item.path}
                className="text-gray-300 hover:text-blue-500 transition-colors font-medium text-sm uppercase tracking-wider focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded px-2 py-1"
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Desktop CTA and Mobile Menu Button */}
        <motion.div
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="flex items-center gap-4 z-50"
        >
          <Link 
            to="/contact" 
            className="hidden md:flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 px-4 py-2 rounded-lg hover:bg-blue-500/20 transition-colors text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
          >
            <FaUserTie aria-hidden="true" /> 
            <span>Get Started</span>
          </Link>
          
          <button 
            ref={menuButtonRef}
            className="md:hidden text-2xl text-gray-300 hover:text-blue-500 transition-colors p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded"
            onClick={toggleMobileMenu}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-controls="mobile-menu"
          >
            {mobileMenuOpen ? (
              <FaTimes aria-hidden="true" />
            ) : (
              <FiMenu aria-hidden="true" />
            )}
          </button>
        </motion.div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <>
              {/* Overlay with higher z-index */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 bg-black z-[60] md:hidden"
                onClick={closeMobileMenu}
              />
              
              {/* Menu Content with highest z-index */}
              <motion.nav
                id="mobile-menu"
                ref={menuRef}
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'tween', ease: 'easeInOut', duration: 0.3 }}
                className="md:hidden fixed top-16 right-0 bottom-0 w-80 bg-gray-900 z-[70] overflow-y-auto border-l border-gray-800 shadow-xl"
                aria-label="Mobile navigation"
              >
                <div className="px-6 py-8">
                  <div className="flex flex-col space-y-6">
                    {navItems.map((item) => (
                      <Link
                        key={item.name}
                        to={item.path}
                        className="mobile-menu-item text-lg text-gray-300 hover:text-blue-500 transition-colors py-3 border-b border-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded px-2"
                        onClick={closeMobileMenu}
                        tabIndex={0}
                      >
                        {item.name}
                      </Link>
                    ))}
                    <Link
                      to="/contact"
                      className="mobile-menu-item flex items-center justify-center gap-2 bg-blue-500 text-white font-medium py-3 px-6 rounded-lg mt-4 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900"
                      onClick={closeMobileMenu}
                      tabIndex={0}
                    >
                      <FaUserTie aria-hidden="true" /> 
                      <span>Get Started</span>
                    </Link>
                  </div>
                </div>
              </motion.nav>
            </>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navbar;