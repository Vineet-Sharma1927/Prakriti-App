import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState } from 'react';

const Home = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };
  
  const faqItems = [
    {
      question: "Is this based on real Ayurveda?",
      answer: "Yes, this quiz is based on traditional Ayurvedic principles that have been practiced for thousands of years. The assessment helps identify your dominant dosha according to Ayurvedic teachings about constitutional types."
    },
    {
      question: "How accurate is the Prakriti assessment?",
      answer: "This assessment provides a general indication of your Prakriti (constitution). For a more comprehensive and personalized analysis, it's recommended to consult with a qualified Ayurvedic practitioner who can consider all aspects of your health and lifestyle."
    },
    {
      question: "Can my Prakriti change over time?",
      answer: "Your Prakriti is your natural constitution determined at birth and remains constant throughout your life. However, your current state (Vikriti) can fluctuate based on diet, lifestyle, environment, and other factors."
    },
    {
      question: "How can I use my Prakriti results?",
      answer: "Understanding your Prakriti can help you make lifestyle choices that support your natural constitution. This includes selecting appropriate foods, exercises, daily routines, and stress management techniques tailored to your dosha balance."
    }
  ];

  const testimonials = [
    {
      quote: "Understanding my Vata constitution has transformed my approach to health. The dietary recommendations have significantly improved my digestion and energy levels.",
      name: "Priya Sharma",
      title: "Yoga Instructor",
      avatar: "👩‍🏫"
    },
    {
      quote: "As someone with a Pitta-dominant constitution, learning how to balance my natural tendencies has helped me manage stress and improve my relationships.",
      name: "Rahul Patel",
      title: "Software Engineer",
      avatar: "👨‍💻"
    },
    {
      quote: "The Kapha balancing techniques I learned after taking this assessment have helped me stay motivated and energized throughout the day.",
      name: "Meera Gupta",
      title: "Nutritionist",
      avatar: "👩‍⚕️"
    }
  ];

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
        
        {/* Infographics Section */}
        <motion.div
          className="bg-white dark:bg-dark-200 rounded-lg shadow-lg p-8 mb-12 transition-colors duration-200"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6 text-center">How Prakriti Influences Your Health</h2>
          
          <div className="flex space-x-2 mb-6 overflow-x-auto py-2">
            <button 
              onClick={() => setActiveTab(0)}
              className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap ${
                activeTab === 0 
                  ? 'bg-green-600 text-white' 
                  : 'bg-gray-100 dark:bg-dark-400 text-gray-700 dark:text-gray-300'
              }`}
            >
              Nutrition
            </button>
            <button 
              onClick={() => setActiveTab(1)}
              className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap ${
                activeTab === 1 
                  ? 'bg-green-600 text-white' 
                  : 'bg-gray-100 dark:bg-dark-400 text-gray-700 dark:text-gray-300'
              }`}
            >
              Exercise
            </button>
            <button 
              onClick={() => setActiveTab(2)}
              className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap ${
                activeTab === 2 
                  ? 'bg-green-600 text-white' 
                  : 'bg-gray-100 dark:bg-dark-400 text-gray-700 dark:text-gray-300'
              }`}
            >
              Daily Routine
            </button>
          </div>
          
          <div className="relative overflow-hidden rounded-lg min-h-[300px]">
            {/* Nutrition Tab */}
            <motion.div 
              className="absolute inset-0 p-4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ 
                opacity: activeTab === 0 ? 1 : 0,
                x: activeTab === 0 ? 0 : 20,
                zIndex: activeTab === 0 ? 10 : -10
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="md:w-1/2 flex justify-center">
                  <div className="relative w-64 h-64 rounded-full bg-green-50 dark:bg-green-900/20 flex items-center justify-center">
                    <div className="absolute inset-0 rounded-full border-4 border-dashed border-green-200 dark:border-green-700 animate-spin-slow"></div>
                    
                    {/* Vata Food Placeholder */}
                    <div className="absolute top-4 right-4 w-16 h-16 rounded-full bg-amber-100 dark:bg-amber-800 flex items-center justify-center shadow-lg" title="Vata Foods">
                      <span className="text-3xl">🍲</span>
                    </div>
                    
                    {/* Pitta Food Placeholder */}
                    <div className="absolute bottom-4 right-4 w-16 h-16 rounded-full bg-red-100 dark:bg-red-800 flex items-center justify-center shadow-lg" title="Pitta Foods">
                      <span className="text-3xl">🥗</span>
                    </div>
                    
                    {/* Kapha Food Placeholder */}
                    <div className="absolute bottom-4 left-4 w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-800 flex items-center justify-center shadow-lg" title="Kapha Foods">
                      <span className="text-3xl">🌶️</span>
                    </div>
                    
                    <div className="w-20 h-20 rounded-full bg-white dark:bg-dark-300 flex items-center justify-center shadow-xl">
                      <span className="text-4xl">🍽️</span>
                    </div>
                  </div>
                </div>
                
                <div className="md:w-1/2">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-100">Food Is Medicine</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    According to Ayurveda, different foods balance or aggravate particular doshas. When you eat according to your Prakriti, you support optimal digestion and overall health.
                  </p>
                  
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <span className="text-amber-500 mr-2 mt-1">●</span>
                      <p className="text-sm text-gray-600 dark:text-gray-400"><strong>Vata</strong> benefits from warm, moist, heavier foods with sweet, sour, and salty tastes.</p>
                    </div>
                    
                    <div className="flex items-start">
                      <span className="text-red-500 mr-2 mt-1">●</span>
                      <p className="text-sm text-gray-600 dark:text-gray-400"><strong>Pitta</strong> benefits from cooling, moderately heavy foods with sweet, bitter, and astringent tastes.</p>
                    </div>
                    
                    <div className="flex items-start">
                      <span className="text-blue-500 mr-2 mt-1">●</span>
                      <p className="text-sm text-gray-600 dark:text-gray-400"><strong>Kapha</strong> benefits from light, dry, warming foods with pungent, bitter, and astringent tastes.</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Exercise Tab */}
            <motion.div 
              className="absolute inset-0 p-4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ 
                opacity: activeTab === 1 ? 1 : 0,
                x: activeTab === 1 ? 0 : 20,
                zIndex: activeTab === 1 ? 10 : -10
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="md:w-1/2 flex justify-center">
                  <div className="w-64 h-64 flex items-center justify-center">
                    <div className="grid grid-cols-3 grid-rows-3 gap-2 w-full h-full">
                      {/* Yoga */}
                      <div className="col-span-2 row-span-2 bg-amber-50 dark:bg-amber-900/30 rounded-lg flex items-center justify-center shadow-md">
                        <span className="text-4xl">🧘‍♀️</span>
                      </div>
                      
                      {/* Running */}
                      <div className="bg-red-50 dark:bg-red-900/30 rounded-lg flex items-center justify-center shadow-md">
                        <span className="text-2xl">🏃‍♂️</span>
                      </div>
                      
                      {/* Swimming */}
                      <div className="bg-blue-50 dark:bg-blue-900/30 rounded-lg flex items-center justify-center shadow-md">
                        <span className="text-2xl">🏊‍♀️</span>
                      </div>
                      
                      {/* Walking */}
                      <div className="col-span-2 bg-green-50 dark:bg-green-900/30 rounded-lg flex items-center justify-center shadow-md">
                        <span className="text-2xl">🚶‍♀️</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="md:w-1/2">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-100">Exercise for Your Type</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Different exercise intensities and styles are beneficial for balancing each dosha. The right exercise for your Prakriti can energize rather than deplete you.
                  </p>
                  
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <span className="text-amber-500 mr-2 mt-1">●</span>
                      <p className="text-sm text-gray-600 dark:text-gray-400"><strong>Vata</strong> benefits from gentle, grounding exercises like walking, yoga, and tai chi.</p>
                    </div>
                    
                    <div className="flex items-start">
                      <span className="text-red-500 mr-2 mt-1">●</span>
                      <p className="text-sm text-gray-600 dark:text-gray-400"><strong>Pitta</strong> benefits from moderate exercise in cool environments like swimming and moonlight walks.</p>
                    </div>
                    
                    <div className="flex items-start">
                      <span className="text-blue-500 mr-2 mt-1">●</span>
                      <p className="text-sm text-gray-600 dark:text-gray-400"><strong>Kapha</strong> benefits from vigorous, stimulating exercise like running, HIIT, and aerobics.</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Daily Routine Tab */}
            <motion.div 
              className="absolute inset-0 p-4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ 
                opacity: activeTab === 2 ? 1 : 0,
                x: activeTab === 2 ? 0 : 20,
                zIndex: activeTab === 2 ? 10 : -10
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="md:w-1/2 flex justify-center">
                  <div className="w-64 h-64 relative">
                    <div className="absolute inset-0 rounded-full border-4 border-gray-200 dark:border-gray-700"></div>
                    
                    {/* Morning */}
                    <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 bg-amber-100 dark:bg-amber-800 rounded-full w-12 h-12 flex items-center justify-center shadow-lg">
                      <span className="text-xl">🌅</span>
                    </div>
                    
                    {/* Noon */}
                    <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 bg-red-100 dark:bg-red-800 rounded-full w-12 h-12 flex items-center justify-center shadow-lg">
                      <span className="text-xl">☀️</span>
                    </div>
                    
                    {/* Evening */}
                    <div className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 bg-blue-100 dark:bg-blue-800 rounded-full w-12 h-12 flex items-center justify-center shadow-lg">
                      <span className="text-xl">🌙</span>
                    </div>
                    
                    {/* Clock hand */}
                    <div className="absolute left-1/2 top-1/2 w-1 h-24 bg-gray-400 dark:bg-gray-500 -translate-x-1/2 -translate-y-full origin-bottom animate-spin-slow"></div>
                    
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-white dark:bg-dark-300 flex items-center justify-center shadow-xl">
                        <span className="text-2xl">⏰</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="md:w-1/2">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-100">Daily Rhythms Matter</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Ayurveda emphasizes the importance of daily routines (Dinacharya) aligned with your Prakriti and natural cycles for optimal health and balance.
                  </p>
                  
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <span className="text-amber-500 mr-2 mt-1">●</span>
                      <p className="text-sm text-gray-600 dark:text-gray-400"><strong>Vata</strong> benefits from regular routines, early bedtimes, and warming practices.</p>
                    </div>
                    
                    <div className="flex items-start">
                      <span className="text-red-500 mr-2 mt-1">●</span>
                      <p className="text-sm text-gray-600 dark:text-gray-400"><strong>Pitta</strong> benefits from cooling practices, moderate schedules, and time for relaxation.</p>
                    </div>
                    
                    <div className="flex items-start">
                      <span className="text-blue-500 mr-2 mt-1">●</span>
                      <p className="text-sm text-gray-600 dark:text-gray-400"><strong>Kapha</strong> benefits from early rising, dynamic schedules, and energizing practices.</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
        
        {/* Testimonials/Expert Advice Section */}
        <motion.div
          className="bg-white dark:bg-dark-200 rounded-lg shadow-lg p-8 mb-12 transition-colors duration-200"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mr-4">
              <span className="text-3xl">👨‍⚕️</span>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Expert Insights</h2>
              <p className="text-gray-600 dark:text-gray-400">Dr. Aditya Verma, Ayurvedic Physician</p>
            </div>
          </div>
          
          <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg mb-8 border-l-4 border-green-500">
            <p className="text-gray-700 dark:text-gray-300 italic mb-4">
              "Ayurveda teaches us that each person is unique, with individual health needs based on their constitutional type or Prakriti. Understanding your Prakriti is the first step toward personalized wellness."
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              "This assessment will give you valuable insights into your natural tendencies and optimal health practices. Remember that balance is the key to health in Ayurveda - it's about making small, consistent adjustments to your lifestyle that align with your unique constitution."
            </p>
          </div>
          
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">User Experiences</h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index}
                className="bg-gray-50 dark:bg-dark-300 p-5 rounded-lg shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900/40 flex items-center justify-center mr-3">
                    <span className="text-xl">{testimonial.avatar}</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 dark:text-gray-100">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.title}</p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm italic">"{testimonial.quote}"</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* FAQ Section */}
        <motion.div
          className="bg-white dark:bg-dark-200 rounded-lg shadow-lg p-8 mb-12 transition-colors duration-200"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6 text-center">Frequently Asked Questions</h2>
          
          <div className="space-y-4">
            {faqItems.map((faq, index) => (
              <div 
                key={index} 
                className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden"
              >
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none bg-gray-50 dark:bg-dark-300"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="font-medium text-gray-800 dark:text-gray-100">{faq.question}</span>
                  <svg 
                    className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 ${openFaqIndex === index ? 'rotate-180' : ''}`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                <motion.div
                  initial={false}
                  animate={{ 
                    height: openFaqIndex === index ? 'auto' : 0,
                    opacity: openFaqIndex === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="p-6 bg-white dark:bg-dark-200 text-gray-600 dark:text-gray-300">
                    {faq.answer}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
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