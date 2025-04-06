import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { prakritiInfo } from '../data/prakritiInfo';

const ResultCard = ({ prakritiType }) => {
  const info = prakritiInfo[prakritiType];
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  // Convert YouTube URL to embed format
  const getEmbedUrl = (url) => {
    // Extract video ID
    const videoIdMatch = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^&?]+)/);
    if (videoIdMatch && videoIdMatch[1]) {
      return `https://www.youtube.com/embed/${videoIdMatch[1]}`;
    }
    return url; // Return original if unable to convert
  };

  return (
    <motion.div 
      className={`${info.color} ${info.darkColor} rounded-lg shadow-lg p-6 md:p-8 max-w-4xl mx-auto transition-colors duration-200`}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-center mb-6">
        <motion.span 
          className="text-5xl md:text-6xl"
          initial={{ rotate: -30, scale: 0.8 }}
          animate={{ rotate: 0, scale: 1 }}
          transition={{ duration: 0.5, type: 'spring' }}
        >
          {info.icon}
        </motion.span>
        <h2 className="text-2xl md:text-3xl font-bold ml-4">{info.title}</h2>
      </div>
      
      <p className="text-lg mb-8">{info.description}</p>
      
      <motion.div 
        className="grid md:grid-cols-2 gap-6"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={item} className="bg-white/60 dark:bg-dark-300/70 backdrop-blur-sm rounded-lg p-5 shadow-sm">
          <h3 className="text-xl font-semibold mb-3">Recommended Foods</h3>
          <ul className="list-disc pl-5 space-y-1">
            {info.foods.recommended.map((food, index) => (
              <li key={index}>{food}</li>
            ))}
          </ul>
          
          <h3 className="text-xl font-semibold mt-5 mb-3">Foods to Avoid</h3>
          <ul className="list-disc pl-5 space-y-1">
            {info.foods.avoid.map((food, index) => (
              <li key={index}>{food}</li>
            ))}
          </ul>
        </motion.div>
        
        <motion.div variants={item} className="bg-white/60 dark:bg-dark-300/70 backdrop-blur-sm rounded-lg p-5 shadow-sm">
          <h3 className="text-xl font-semibold mb-3">Exercise Recommendations</h3>
          <p>{info.exercise}</p>
          
          <h3 className="text-xl font-semibold mt-5 mb-3">Lifestyle Tips</h3>
          <ul className="list-disc pl-5 space-y-1">
            {info.lifestyle.map((tip, index) => (
              <li key={index}>{tip}</li>
            ))}
          </ul>
        </motion.div>
      </motion.div>

      <motion.div 
        variants={item} 
        className="mt-8 bg-white/60 dark:bg-dark-300/70 backdrop-blur-sm rounded-lg p-5 shadow-sm text-center"
      >
        <h3 className="text-xl font-semibold mb-3">Learn More About {info.title}</h3>
        <p className="mb-4">Watch this informative video for more details about {info.title} and how to balance it:</p>
        <div className="relative pb-[56.25%] h-0 overflow-hidden max-w-2xl mx-auto">
          <iframe 
            className="absolute top-0 left-0 w-full h-full rounded-lg shadow-md"
            src={getEmbedUrl(info.videoReference)}
            title={`${info.title} Information Video`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </motion.div>
      
      <div className="mt-10 flex justify-center">
        <Link to="/quiz">
          <motion.button 
            className="bg-white dark:bg-dark-300 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-dark-400 px-6 py-3 rounded-lg shadow font-medium transition-colors duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Retake Quiz
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );
};

export default ResultCard; 