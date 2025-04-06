import { motion } from 'framer-motion';

const QuestionCard = ({ question, onSelectOption, selectedOption }) => {
  return (
    <motion.div 
      className="bg-white dark:bg-dark-200 rounded-lg shadow-lg p-6 mb-8 max-w-2xl mx-auto transition-colors duration-200"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-xl md:text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-100">{question.question}</h2>
      
      <div className="space-y-4">
        {question.options.map((option, index) => (
          <motion.button
            key={index}
            onClick={() => onSelectOption(option.type)}
            className={`w-full text-left p-4 rounded-md border-2 transition-all duration-300 ${
              selectedOption === option.type 
                ? 'border-green-500 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400' 
                : 'border-gray-200 dark:border-dark-400 hover:border-green-300 dark:hover:border-green-700 hover:bg-green-50 dark:hover:bg-green-900/10 dark:text-gray-200'
            }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="font-medium">{option.text}</span>
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
};

export default QuestionCard; 