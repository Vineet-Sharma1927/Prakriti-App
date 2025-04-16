import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Result from './pages/Result';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/result/:prakritiType" element={<Result />} />
        </Routes>
      </main>
      
      <footer className="bg-white dark:bg-dark-200 shadow-md py-4 text-center text-gray-700 dark:text-white text-sm transition-colors duration-200">
        <div className="container mx-auto">
          <p>© {new Date().getFullYear()} Prakriti Quiz - Discover your Ayurvedic constitution</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
