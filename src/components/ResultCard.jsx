import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { prakritiInfo } from '../data/prakritiInfo';
import { useState } from 'react';

const ResultCard = ({ prakritiType, doshaBreakdown = {}, onOpenChatbot }) => {
  const info = prakritiInfo[prakritiType];
  const [activeTab, setActiveTab] = useState('diet');
  
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

  // Get all doshas with percentages, default to 0% if not provided
  const doshaPercentages = {
    Vata: doshaBreakdown.Vata || 0,
    Pitta: doshaBreakdown.Pitta || 0,
    Kapha: doshaBreakdown.Kapha || 0
  };
  
  // Get the user's name from localStorage or use a default
  const userName = localStorage.getItem('userName') || 'there';
  
  // For debugging - log the video URL
  console.log('Video URL:', info.videoReference);
  console.log('Embed URL:', getEmbedUrl(info.videoReference));

  return (
    <motion.div 
      className={`${info.color} ${info.darkColor} rounded-lg shadow-lg p-6 md:p-8 max-w-4xl mx-auto transition-colors duration-200`}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Doctor Avatar and Personalized Greeting */}
      <motion.div 
        className="bg-white/90 dark:bg-dark-300/90 backdrop-blur-sm rounded-lg p-5 shadow-md mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
      >
        <div className="flex items-start">
          <div className="relative">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-blue-100 flex items-center justify-center overflow-hidden border-2 border-blue-500">
              <svg xmlns="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN2O8NRcFfY2DdswYKaEiamPKazuxyKfOgwg&s" className="h-10 w-10 md:h-12 md:w-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <div className="absolute -right-1 bottom-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
          </div>
          <div className="ml-4 flex-1">
            <h3 className="text-lg md:text-xl font-semibold text-gray-800 dark:text-gray-100">Dr. Ayush Sharma</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">Ayurvedic Health Consultant</p>
            <div className="mt-2 text-gray-700 dark:text-gray-300">
              <p>Hello <span className="font-semibold">{userName}</span>, I've analyzed your Prakriti assessment results. Your dominant constitution is <span className="font-semibold">{info.title}</span>, which provides valuable insights into your natural tendencies and optimal health practices.</p>
            </div>
          </div>
        </div>
      </motion.div>
      
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
      
      <p className="text-lg mb-4">{info.description}</p>
      
      {/* Dosha Percentage Breakdown */}
      <motion.div 
        className="mb-8 bg-white/80 dark:bg-dark-300/80 backdrop-blur-sm rounded-lg p-5 shadow-sm"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <h3 className="text-xl font-semibold mb-3 text-center">Your Dosha Composition</h3>
        <div className="flex flex-wrap justify-center gap-4">
          {Object.entries(doshaPercentages).map(([dosha, percentage]) => 
            percentage > 0 ? (
              <div key={dosha} className="flex flex-col items-center">
                <div className="text-lg font-medium">{dosha}</div>
                <div className="w-24 h-24 relative mb-2">
                  <svg className="w-full h-full" viewBox="0 0 36 36">
                    <path
                      d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#e6e6e6"
                      strokeWidth="3"
                    />
                    <path
                      d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke={dosha === 'Vata' ? '#F59E0B' : dosha === 'Pitta' ? '#EF4444' : '#3B82F6'}
                      strokeWidth="3"
                      strokeDasharray={`${percentage}, 100`}
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center text-xl font-bold">
                    {percentage}%
                  </div>
                </div>
              </div>
            ) : null
          )}
        </div>
      </motion.div>
      
      {/* Interactive Tabs */}
      <div className="mb-6">
        <div className="flex overflow-x-auto space-x-1 p-1 bg-white/50 dark:bg-dark-400/50 rounded-lg mb-4">
          <button 
            onClick={() => setActiveTab('diet')}
            className={`px-4 py-2 rounded-md text-sm font-medium whitespace-nowrap transition-colors duration-200 ${
              activeTab === 'diet' 
                ? 'bg-green-600 text-white shadow-md' 
                : 'text-gray-700 dark:text-gray-300 hover:bg-white/60 dark:hover:bg-dark-300/60'
            }`}
          >
            Diet Recommendations
          </button>
          <button 
            onClick={() => setActiveTab('lifestyle')}
            className={`px-4 py-2 rounded-md text-sm font-medium whitespace-nowrap transition-colors duration-200 ${
              activeTab === 'lifestyle' 
                ? 'bg-green-600 text-white shadow-md' 
                : 'text-gray-700 dark:text-gray-300 hover:bg-white/60 dark:hover:bg-dark-300/60'
            }`}
          >
            Lifestyle & Exercise
          </button>
          <button 
            onClick={() => setActiveTab('learn')}
            className={`px-4 py-2 rounded-md text-sm font-medium whitespace-nowrap transition-colors duration-200 ${
              activeTab === 'learn' 
                ? 'bg-green-600 text-white shadow-md' 
                : 'text-gray-700 dark:text-gray-300 hover:bg-white/60 dark:hover:bg-dark-300/60'
            }`}
          >
            Learn More
          </button>
        </div>
        
        {/* Tab Content */}
        <div className="bg-white/80 dark:bg-dark-300/80 backdrop-blur-sm rounded-lg p-5 shadow-sm min-h-[350px]">
          {activeTab === 'diet' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-6"
            >
              <h3 className="text-xl font-semibold mb-4">Diet Recommendations for {info.title} Prakriti</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/60 dark:bg-dark-200/60 p-4 rounded-lg shadow-sm">
                  <h4 className="text-lg font-medium flex items-center text-green-700 dark:text-green-400 mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Foods to Include
                  </h4>
                  
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-medium text-gray-700 dark:text-gray-300">Grains:</h5>
                      <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400">
                        {info.foods.recommended.filter(food => food.includes('grain') || food.includes('rice') || food.includes('wheat')).map((food, index) => (
                          <li key={index}>{food}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h5 className="font-medium text-gray-700 dark:text-gray-300">Vegetables:</h5>
                      <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400">
                        {info.foods.recommended.filter(food => food.includes('vegetable') || food.includes('vegetables')).map((food, index) => (
                          <li key={index}>{food}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h5 className="font-medium text-gray-700 dark:text-gray-300">Fruits:</h5>
                      <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400">
                        {info.foods.recommended.filter(food => food.includes('fruit') || food.includes('fruits')).map((food, index) => (
                          <li key={index}>{food}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h5 className="font-medium text-gray-700 dark:text-gray-300">Other Foods:</h5>
                      <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400">
                        {info.foods.recommended.filter(food => 
                          !food.includes('grain') && !food.includes('rice') && !food.includes('wheat') && 
                          !food.includes('vegetable') && !food.includes('vegetables') && 
                          !food.includes('fruit') && !food.includes('fruits')
                        ).map((food, index) => (
                          <li key={index}>{food}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/60 dark:bg-dark-200/60 p-4 rounded-lg shadow-sm">
                  <h4 className="text-lg font-medium flex items-center text-red-700 dark:text-red-400 mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    Foods to Avoid
                  </h4>
                  
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-medium text-gray-700 dark:text-gray-300">Foods:</h5>
                      <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400">
                        {info.foods.avoid.map((food, index) => (
                          <li key={index}>{food}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border-l-4 border-yellow-400">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-yellow-800 dark:text-yellow-200">
                      These dietary recommendations are general guidelines for your dosha type. Individual needs may vary based on your specific health conditions, age, season, and other factors.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
          
          {activeTab === 'lifestyle' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-6"
            >
              <h3 className="text-xl font-semibold mb-4">Lifestyle & Exercise for {info.title} Prakriti</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/60 dark:bg-dark-200/60 p-4 rounded-lg shadow-sm">
                  <h4 className="text-lg font-medium text-purple-700 dark:text-purple-400 mb-3 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Daily Routine
                  </h4>
                  <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400 space-y-2">
                    {info.lifestyle.map((tip, index) => (
                      <li key={index}>{tip}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-white/60 dark:bg-dark-200/60 p-4 rounded-lg shadow-sm">
                  <h4 className="text-lg font-medium text-blue-700 dark:text-blue-400 mb-3 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    Exercise Recommendations
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{info.exercise}</p>
                  
                  <h5 className="font-medium text-gray-700 dark:text-gray-300 mb-2">Recommended Activities:</h5>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {generateExerciseChips(prakritiType).map((exercise, index) => (
                      <span key={index} className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded-full">
                        {exercise}
                      </span>
                    ))}
                  </div>
                  
                  <h5 className="font-medium text-gray-700 dark:text-gray-300 mb-2">Weekly Exercise Plan:</h5>
                  <div className="bg-white/40 dark:bg-dark-400/40 p-3 rounded">
                    <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mb-2">
                      <span>Less Intense</span>
                      <span>More Intense</span>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-dark-500 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-green-400 to-blue-500" 
                        style={{ 
                          width: prakritiType.includes('vata') ? '40%' : 
                                 prakritiType.includes('pitta') ? '80%' : '60%' 
                        }}
                      ></div>
                    </div>
                    <div className="mt-3 text-sm text-gray-600 dark:text-gray-300">
                      {prakritiType.includes('vata') ? 
                        'Focus on gentle, grounding exercises 3-4 times per week' : 
                        prakritiType.includes('pitta') ? 
                        'Moderate to intense exercise 4-5 times per week, avoiding overheating' : 
                        'Regular, moderately intense exercise 5-6 times per week to stimulate metabolism'
                      }
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border-l-4 border-blue-400">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-blue-800 dark:text-blue-200">
                      Consistency is key with lifestyle changes. Start with small adjustments and gradually incorporate more recommendations into your routine.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
          
          {activeTab === 'learn' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <h3 className="text-xl font-semibold mb-4">Learn More About {info.title}</h3>
              <p className="mb-4 text-gray-700 dark:text-gray-300">Watch this informative video for more details about {info.title} and how to balance it:</p>
              
              {/* YouTube Video Embed */}
              <div className="relative pb-[56.25%] h-0 overflow-hidden max-w-2xl mx-auto mb-6 bg-gray-100 dark:bg-gray-800 rounded-lg">
                {prakritiType === 'vata' && (
                  <iframe 
                    className="absolute top-0 left-0 w-full h-full rounded-lg shadow-md"
                    src="https://www.youtube.com/embed/w7MxiSnCHAs"
                    title="Vata Dosha Information Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                )}
                
                {prakritiType === 'pitta' && (
                  <iframe 
                    className="absolute top-0 left-0 w-full h-full rounded-lg shadow-md"
                    src="https://www.youtube.com/embed/OuoT_OiWL1c"
                    title="Pitta Dosha Information Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                )}
                
                {prakritiType === 'kapha' && (
                  <iframe 
                    className="absolute top-0 left-0 w-full h-full rounded-lg shadow-md"
                    src="https://www.youtube.com/embed/03KTYZ0vwrw"
                    title="Kapha Dosha Information Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                )}
                
                {/* For dual doshas or any other types */}
                {!['vata', 'pitta', 'kapha'].includes(prakritiType) && (
                  <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center p-4 text-center">
                    <p className="text-gray-600 dark:text-gray-400 mb-4">Video not available for combined dosha types.</p>
                    <button 
                      className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
                      onClick={() => window.open('https://www.youtube.com/results?search_query=ayurveda+' + prakritiType, '_blank')}
                    >
                      Search on YouTube
                    </button>
                  </div>
                )}
              </div>
              
              <h4 className="text-lg font-medium mb-3">Additional Resources</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white/60 dark:bg-dark-200/60 p-4 rounded-lg shadow-sm">
                  <h5 className="font-medium text-gray-800 dark:text-gray-200 mb-2">Books</h5>
                  <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400">
                    <li>Prakriti: Your Ayurvedic Constitution by Dr. Robert Svoboda</li>
                    <li>Ayurveda: The Science of Self-Healing by Dr. Vasant Lad</li>
                    <li>Perfect Health by Deepak Chopra</li>
                  </ul>
                </div>
                <div className="bg-white/60 dark:bg-dark-200/60 p-4 rounded-lg shadow-sm">
                  <h5 className="font-medium text-gray-800 dark:text-gray-200 mb-2">Online Resources</h5>
                  <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400">
                    <li>National Ayurvedic Medical Association</li>
                    <li>The Ayurvedic Institute</li>
                    <li>Banyan Botanicals Dosha Guide</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
      
      {/* Call-to-Action Buttons */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-8">
        <motion.button
          onClick={onOpenChatbot}
          className="w-full bg-blue-600 text-white hover:bg-blue-700 px-4 py-3 rounded-lg shadow font-medium transition-colors duration-200 text-sm flex items-center justify-center"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
          </svg>
          Chat Assistant
        </motion.button>
        
        <Link to="/quiz">
          <motion.button 
            className="w-full bg-white dark:bg-dark-300 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-dark-400 px-4 py-3 rounded-lg shadow font-medium transition-colors duration-200 text-sm"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Retake Quiz
          </motion.button>
        </Link>
        
        <motion.button 
          className="w-full bg-green-600 text-white hover:bg-green-700 px-4 py-3 rounded-lg shadow font-medium transition-colors duration-200 text-sm"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => alert("This feature will be available soon!")}
        >
          Download Report
        </motion.button>
        
        <motion.button 
          className="w-full bg-purple-600 text-white hover:bg-purple-700 px-4 py-3 rounded-lg shadow font-medium transition-colors duration-200 text-sm"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => alert("This feature will be available soon!")}
        >
          Connect with Expert
        </motion.button>
      </div>
    </motion.div>
  );
};

// Helper function to generate exercise recommendations based on prakriti type
function generateExerciseChips(prakritiType) {
  if (prakritiType.includes('vata')) {
    return ['Yoga', 'Tai Chi', 'Walking', 'Swimming', 'Gentle Cycling', 'Light Hiking'];
  } else if (prakritiType.includes('pitta')) {
    return ['Swimming', 'Moonlight Walks', 'Cycling', 'Team Sports', 'Winter Sports', 'Moderate Hiking'];
  } else {
    return ['Brisk Walking', 'Jogging', 'HIIT', 'Aerobics', 'Martial Arts', 'Hot Yoga', 'Mountain Climbing'];
  }
}

export default ResultCard; 