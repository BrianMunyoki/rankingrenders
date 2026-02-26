import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import ContactPage from './pages/ContactPage';
import Schedule from './pages/Schedule';

function App() {
  return (
    <Router>
      <div className="bg-[#0a0f1a] min-h-screen flex flex-col">
        <Navbar />
        {/* flex-grow ensures the footer stays at the bottom on short pages */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/schedule" element={<Schedule />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;