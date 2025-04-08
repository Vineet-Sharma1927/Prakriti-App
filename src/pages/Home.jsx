import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div 
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-100 mb-4">Discover Your Prakriti</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">Understand your Ayurvedic body constitution for better health and wellness</p>
        </motion.div>
        
        <motion.div 
          className="bg-white dark:bg-dark-200 rounded-lg shadow-lg p-8 mb-12 transition-colors duration-200"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">What is Prakriti?</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
          Prakriti is a concept from Ayurveda, the ancient Indian system of medicine. It refers to your unique mind-body constitution, determined at birth, which influences your physical, mental, and emotional characteristics. Understanding your Prakriti helps you make better lifestyle, diet, and wellness choices tailored to your natural tendencies.
          </p>
          
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">The Three Doshas</h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <motion.div 
              className="bg-amber-50 dark:bg-amber-900/30 rounded-lg p-5 transition-colors duration-200"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-center mb-3">
                <span className="text-3xl mr-2">🍃</span>
                <h3 className="text-xl font-semibold text-amber-900 dark:text-amber-200">Vata</h3>
              </div>
              <ul className="text-gray-700 dark:text-gray-300 list-disc pl-4">
                <li>Composed of air and ether elements</li>
                <li>Characterized by lightness, dryness, and movement</li>
                <li>Often energetic, creative, and quick-thinking</li>
                <li>May experience anxiety, restlessness, or digestive irregularities when imbalanced</li>
                <li>Benefits from warm, grounding foods, consistent routines, and adequate rest</li>
              </ul>
            </motion.div>
            
            <motion.div 
              className="bg-red-50 dark:bg-red-900/30 rounded-lg p-5 transition-colors duration-200"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-center mb-3">
                <span className="text-3xl mr-2">🔥</span>
                <h3 className="text-xl font-semibold text-red-900 dark:text-red-200">Pitta</h3>
              </div>
              <ul className="text-gray-700 dark:text-gray-300 list-disc pl-4">
                <li>Made of fire and water elements</li>
                <li>Associated with heat, intensity, and sharpness</li>
                <li>Often ambitious, intelligent, and passionate</li>
                <li>Strong digestion and leadership qualities</li>
                <li>Imbalances can lead to irritability, inflammation, or excessive competitiveness</li>
                <li>Requires cooling foods, stress-relieving practices, and relaxation</li>
              </ul>
            </motion.div>
            
            <motion.div 
              className="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-5 transition-colors duration-200"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-center mb-3">
                <span className="text-3xl mr-2">🌊</span>
                <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-200">Kapha</h3>
              </div>
              <ul className="text-gray-700 dark:text-gray-300 list-disc pl-4">
                <li>Governed by earth and water elements</li>
                <li>Known for being stable, heavy, and nurturing</li>
                <li>Typically calm, caring, and steady</li>
                <li>May struggle with sluggishness, weight gain, or emotional attachment when imbalanced</li>
                <li>Thrives on stimulating activities, light and spicy foods</li>
                <li>Needs variety in routines to maintain energy and motivation</li>
              </ul>
            </motion.div>
          </div>
          
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Everyone has all three doshas in their constitution, but usually one or two are more dominant. 
            Taking this quiz will help you discover which dosha is most prominent in your Prakriti.
          </p>
        </motion.div>
        
        <motion.div 
          className="text-center"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <Link to="/quiz">
            <motion.button 
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-xl font-semibold shadow-lg transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Take the Prakriti Quiz
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home; 