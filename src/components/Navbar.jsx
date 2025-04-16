import { Link, useLocation } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import ThemeToggle from './ThemeToggle';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  
  // Transform opacity for the shadow based on scroll position
  const shadowOpacity = useTransform(scrollY, [0, 50], [0, 1]);
  
  // Monitor scroll position to change navbar styles
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <motion.nav 
      className={`fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-dark-200/95 backdrop-blur-sm py-4 px-6 md:px-12 transition-all duration-200 ${
        scrolled ? 'shadow-md py-3' : 'py-4'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        boxShadow: scrolled ? '0 4px 6px rgba(0, 0, 0, 0.1)' : 'none',
      }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-green-700 dark:text-green-500 flex items-center">
          <motion.span 
            className="mr-2"
            animate={{ rotate: scrolled ? [0, 5, -5, 0] : 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            🌿
          </motion.span>
          <span>Prakriti Quiz</span>
        </Link>
        
        <div className="flex items-center space-x-6">
          <div className="space-x-4">
            <Link 
              to="/" 
              className={`transition-colors duration-300 ${
                location.pathname === '/' 
                  ? 'text-green-600 dark:text-green-400 font-semibold' 
                  : 'text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/quiz" 
              className={`transition-colors duration-300 ${
                location.pathname === '/quiz' 
                  ? 'text-green-600 dark:text-green-400 font-semibold' 
                  : 'text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400'
              }`}
            >
              Take Quiz
            </Link>
          </div>
          
          <ThemeToggle />
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar; 