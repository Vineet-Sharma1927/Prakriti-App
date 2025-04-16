import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import QuestionCard from '../components/QuestionCard';
import { questions } from '../data/questions';

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);
  const [userName, setUserName] = useState('');
  const navigate = useNavigate();

  const currentQuestion = questions[currentQuestionIndex];
  const totalQuestions = questions.length;
  
  useEffect(() => {
    // Check if user has a name stored
    const storedName = localStorage.getItem('userName');
    if (storedName && storedName !== 'there') {
      setUserName(storedName);
      setShowWelcome(false); // Skip welcome if name exists
    }
  }, []);
  
  const handleStartQuiz = () => {
    // Store user name (if empty, store default)
    localStorage.setItem('userName', userName.trim() || 'there');
    setShowWelcome(false);
  };
  
  const handleSelectOption = (optionType) => {
    setSelectedOptions({
      ...selectedOptions,
      [currentQuestionIndex]: optionType
    });
  };
  
  const goToNextQuestion = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };
  
  const goToPreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };
  
  const handleSubmit = () => {
    setIsSubmitting(true);
    
    // Count dosha frequencies
    const counts = {
      vata: 0,
      pitta: 0,
      kapha: 0
    };
    
    Object.values(selectedOptions).forEach(type => {
      counts[type]++;
    });
    
    // Calculate total answers and percentages
    const totalAnswers = Object.values(counts).reduce((sum, count) => sum + count, 0);
    
    // Calculate percentages and round to nearest integer
    const doshaBreakdown = {
      Vata: Math.round((counts.vata / totalAnswers) * 100),
      Pitta: Math.round((counts.pitta / totalAnswers) * 100),
      Kapha: Math.round((counts.kapha / totalAnswers) * 100)
    };
    
    // Find the dominant dosha
    let dominantDosha = 'vata';
    if (counts.pitta > counts[dominantDosha]) {
      dominantDosha = 'pitta';
    }
    if (counts.kapha > counts[dominantDosha]) {
      dominantDosha = 'kapha';
    }
    
    // Handle ties
    if (counts.vata === counts.pitta && counts.vata === counts.kapha) {
      dominantDosha = 'vata-pitta-kapha'; // All three are equal
    } else if (counts.vata === counts.pitta && counts.vata > counts.kapha) {
      dominantDosha = 'vata-pitta';
    } else if (counts.vata === counts.kapha && counts.vata > counts.pitta) {
      dominantDosha = 'vata-kapha';
    } else if (counts.pitta === counts.kapha && counts.pitta > counts.vata) {
      dominantDosha = 'pitta-kapha';
    }
    
    // Navigate to result page with the dominant dosha and dosha breakdown
    navigate(`/result/${dominantDosha}`, { state: { doshaBreakdown } });
  };
  
  const progressPercentage = (Object.keys(selectedOptions).length / totalQuestions) * 100;

  // Welcome screen
  if (showWelcome) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <motion.div 
            className="bg-white dark:bg-dark-200 rounded-lg shadow-lg p-8 transition-colors duration-200"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-3">
                Welcome to the Prakriti Assessment
              </h1>
              <p className="text-gray-600 dark:text-gray-300">
                Let's personalize your results. What should we call you?
              </p>
            </div>
            
            <div className="mb-6">
              <label htmlFor="userName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Your Name (optional)
              </label>
              <input
                type="text"
                id="userName"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 dark:bg-dark-300 dark:text-white"
                placeholder="Enter your name"
              />
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                This helps us personalize your recommendations. We don't store any personal data.
              </p>
            </div>
            
            <motion.button
              onClick={handleStartQuiz}
              className="w-full bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Start the Assessment
            </motion.button>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          className="mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4">Prakriti Assessment</h1>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Answer the following questions based on your natural tendencies throughout your life, 
            not how you feel currently or during a specific season.
          </p>
          
          {/* Progress bar */}
          <div className="w-full bg-gray-200 dark:bg-dark-400 rounded-full h-2.5 mb-6 transition-colors duration-200">
            <motion.div 
              className="bg-green-600 h-2.5 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progressPercentage}%` }}
              transition={{ duration: 0.5 }}
            ></motion.div>
          </div>
          
          <div className="text-sm text-gray-500 dark:text-gray-400">
            Question {currentQuestionIndex + 1} of {totalQuestions}
          </div>
        </motion.div>
        
        <AnimatePresence mode="wait">
          <QuestionCard 
            key={currentQuestionIndex}
            question={currentQuestion} 
            onSelectOption={handleSelectOption}
            selectedOption={selectedOptions[currentQuestionIndex]}
          />
        </AnimatePresence>
        
        <div className="flex justify-between max-w-2xl mx-auto mt-6">
          <motion.button
            onClick={goToPreviousQuestion}
            disabled={currentQuestionIndex === 0}
            className={`px-6 py-2 rounded-lg font-medium transition-colors duration-200 ${
              currentQuestionIndex === 0 
                ? 'bg-gray-200 dark:bg-dark-400 text-gray-400 dark:text-white cursor-not-allowed' 
                : 'bg-gray-200 dark:bg-dark-400 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-dark-500'
            }`}
            whileHover={currentQuestionIndex !== 0 ? { scale: 1.05 } : {}}
            whileTap={currentQuestionIndex !== 0 ? { scale: 0.95 } : {}}
          >
            Previous
          </motion.button>
          
          {currentQuestionIndex < totalQuestions - 1 ? (
            <motion.button
              onClick={goToNextQuestion}
              disabled={!selectedOptions[currentQuestionIndex]}
              className={`px-6 py-2 rounded-lg font-medium transition-colors duration-200 ${
                !selectedOptions[currentQuestionIndex]
                  ? 'bg-gray-200 dark:bg-dark-400 text-gray-400 dark:text-white cursor-not-allowed'
                  : 'bg-green-600 text-white hover:bg-green-700'
              }`}
              whileHover={selectedOptions[currentQuestionIndex] ? { scale: 1.05 } : {}}
              whileTap={selectedOptions[currentQuestionIndex] ? { scale: 0.95 } : {}}
            >
              Next
            </motion.button>
          ) : (
            <motion.button
              onClick={handleSubmit}
              disabled={!selectedOptions[currentQuestionIndex] || isSubmitting}
              className={`px-6 py-2 rounded-lg font-medium transition-colors duration-200 ${
                !selectedOptions[currentQuestionIndex] || isSubmitting
                  ? 'bg-gray-200 dark:bg-dark-400 text-gray-400 dark:text-gray-500 cursor-not-allowed'
                  : 'bg-green-600 text-white hover:bg-green-700'
              }`}
              whileHover={selectedOptions[currentQuestionIndex] && !isSubmitting ? { scale: 1.05 } : {}}
              whileTap={selectedOptions[currentQuestionIndex] && !isSubmitting ? { scale: 0.95 } : {}}
            >
              {isSubmitting ? 'Submitting...' : 'See Results'}
            </motion.button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Quiz; 