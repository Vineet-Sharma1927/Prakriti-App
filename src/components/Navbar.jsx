import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const location = useLocation();
  
  return (
    <motion.nav 
      className="bg-white dark:bg-dark-200 shadow-md py-4 px-6 md:px-12 transition-colors duration-200"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-green-700 dark:text-green-500 flex items-center">
          <span className="mr-2">🌿</span>
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