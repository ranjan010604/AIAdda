import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const tips = [
  "Initializing AI Neural Core...",
  "Optimizing Algorithms...",
  "Connecting to AI Adda Cloud...",
  "Analyzing Data Streams...",
  "Booting Vision Engine...",
  "Establishing Secure Channels...",
];

const Loader = () => {
  const [tipIndex, setTipIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTipIndex((prev) => (prev + 1) % tips.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-0 bg-gradient-to-br from-black via-gray-900 to-gray-950 flex flex-col items-center justify-center z-50 overflow-hidden"
    >
      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-cover opacity-5 pointer-events-none" />

      {/* Glowing Loader Core */}
      <div className="relative w-32 h-32 mb-10">
        <div className="absolute inset-0 rounded-full border-4 border-blue-500/30 animate-spin-slow" />
        <div className="absolute inset-4 rounded-full bg-blue-500/70 blur-sm shadow-2xl shadow-blue-500/20 animate-pulse" />

        {/* Orbiting Dots */}
        {[0, 120, 240].map((angle, i) => (
          <motion.span
            key={i}
            className="absolute w-3 h-3 bg-blue-400 rounded-full"
            style={{
              top: '50%',
              left: '50%',
              transformOrigin: '0 0',
            }}
            animate={{
              rotate: 360,
            }}
            transition={{
              repeat: Infinity,
              duration: 6 + i,
              ease: 'linear',
              delay: i * 0.2,
            }}
            initial={{
              rotate: angle,
              x: 0,
              y: -50,
            }}
          />
        ))}
      </div>

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-3xl md:text-4xl font-bold text-white tracking-widest mb-3"
      >
        AI Adda
      </motion.h1>

      {/* Tips */}
      <AnimatePresence mode="wait">
        <motion.p
          key={tipIndex}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4 }}
          className="text-blue-400 text-sm md:text-base font-medium tracking-wide text-center"
        >
          {tips[tipIndex]}
        </motion.p>
      </AnimatePresence>
    </motion.div>
  );
};

export default Loader;
