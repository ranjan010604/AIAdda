import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Loader from './components/Loader';
import { AnimatePresence } from 'framer-motion';

// Page Components
import Home from './pages/Home';
import Solutions from './pages/Solutions';
import Pricing from './pages/Pricing';
import Process from './pages/Process';
import Contact from './pages/Contact';
import AIModels from './pages/AIModels';
import CaseStudy from './pages/CaseStudy';
import Careers from './pages/Careers';
import About from './pages/About';
import Newsroom from './pages/Newsroom';

// Single-page components
import Hero from './components/Hero';
import AIShowcase from './components/AIShowcase';
import Features from './components/Features';
import Enterprise from './components/Enterprise';

function App() {
  const [isFirstLoad, setIsFirstLoad] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const hasVisited = localStorage.getItem('hasVisited');
    if (!hasVisited) {
      setIsFirstLoad(true);
      localStorage.setItem('hasVisited', 'true');
    } else {
      setIsFirstLoad(false);
    }

    const timer = setTimeout(() => {
      setLoading(false);
    }, 3500); // Increase loader duration to 3.5s

    return () => clearTimeout(timer);
  }, []);

  if (isFirstLoad && loading) {
    return (
      <AnimatePresence>
        <Loader key="initial-loader" />
      </AnimatePresence>
    );
  }

  return (
    <div className="bg-primary text-gray-200 min-h-screen font-sans">
      <Router>
        <Navbar />
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <AIShowcase />
                  <Features />
                  <Enterprise />
                </>
              }
            />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/process" element={<Process />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/aimodels" element={<AIModels />} />
            <Route path="/casestudy" element={<CaseStudy />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/about" element={<About />} />
            <Route path="/news" element={<Newsroom />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;