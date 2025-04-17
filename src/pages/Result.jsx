import { useEffect, useState } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import ResultCard from '../components/ResultCard';
import Chatbot from '../components/Chatbot';
import { prakritiInfo } from '../data/prakritiInfo';

const Result = () => {
  const { prakritiType } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [showChatbot, setShowChatbot] = useState(false);
  
  // Extract dosha breakdown from location state or use default empty object
  const doshaBreakdown = location.state?.doshaBreakdown || {};
  
  useEffect(() => {
    // Redirect to quiz if prakriti type is not valid
    if (!prakritiType || !prakritiInfo[prakritiType]) {
      navigate('/quiz');
    }
    
    // Set default username if not present
    if (!localStorage.getItem('userName')) {
      localStorage.setItem('userName', 'there');
    }
  }, [prakritiType, navigate]);
  
  const handleOpenChatbot = () => {
    setShowChatbot(true);
  };
  
  const handleCloseChatbot = () => {
    setShowChatbot(false);
  };
  
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
            
            {/* Display dosha breakdown for dual types */}
            {Object.keys(doshaBreakdown).length > 0 && (
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2 dark:text-gray-100">Your Dosha Composition</h3>
                <div className="flex justify-center gap-4">
                  {Object.entries(doshaBreakdown).map(([dosha, percentage]) => (
                    <div key={dosha} className="text-gray-700 dark:text-gray-300">
                      <span className="font-medium">{dosha}:</span> {percentage}%
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Your results show a balanced mix of multiple doshas. This is quite common and indicates a constitution 
              that draws strengths from different elements. For detailed recommendations, consider consulting an 
              Ayurvedic practitioner who can provide more personalized guidance.
            </p>
            
            <div className="flex justify-center gap-4">
              <motion.button
                onClick={handleOpenChatbot}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                </svg>
                Chat with Assistant
              </motion.button>
            
              <motion.button
                onClick={() => navigate('/quiz')}
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Retake Quiz
              </motion.button>
            </div>
          </motion.div>
        </div>
        
        {/* Chatbot Component */}
        <AnimatePresence>
          {showChatbot && <Chatbot prakriti={prakritiType} onClose={handleCloseChatbot} />}
        </AnimatePresence>
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
          Your Personalized Ayurvedic Profile
        </motion.h1>
        
        <ResultCard prakritiType={prakritiType} doshaBreakdown={doshaBreakdown} onOpenChatbot={handleOpenChatbot} />
      </div>
      
      {/* Chatbot Component */}
      <AnimatePresence>
        {showChatbot && <Chatbot prakriti={prakritiType} onClose={handleCloseChatbot} />}
      </AnimatePresence>
    </div>
  );
};

export default Result; 