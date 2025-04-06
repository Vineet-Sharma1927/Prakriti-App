import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import ResultCard from '../components/ResultCard';
import { prakritiInfo } from '../data/prakritiInfo';

const Result = () => {
  const { prakritiType } = useParams();
  const navigate = useNavigate();
  
  useEffect(() => {
    // Redirect to quiz if prakriti type is not valid
    if (!prakritiType || !prakritiInfo[prakritiType]) {
      navigate('/quiz');
    }
  }, [prakritiType, navigate]);
  
  // If the prakriti type is not in the data (possibly a dual dosha type), show a custom message
  if (!prakritiInfo[prakritiType]) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Your Prakriti Result
          </motion.h1>
          
          <motion.div
            className="bg-white dark:bg-dark-200 rounded-lg shadow-lg p-8 transition-colors duration-200"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-semibold mb-4 dark:text-gray-100">
              You have a balanced {prakritiType.replace('-', '-')} constitution
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Your results show a balanced mix of multiple doshas. This is quite common and indicates a constitution 
              that draws strengths from different elements. For detailed recommendations, consider consulting an 
              Ayurvedic practitioner who can provide more personalized guidance.
            </p>
            
            <motion.button
              onClick={() => navigate('/quiz')}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Retake Quiz
            </motion.button>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <motion.h1 
          className="text-3xl font-bold text-center text-gray-800 dark:text-gray-100 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Your Prakriti Result
        </motion.h1>
        
        <ResultCard prakritiType={prakritiType} />
      </div>
    </div>
  );
};

export default Result; 