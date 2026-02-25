import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';

function App() {
  return (
    <div className="selection:bg-blue-500 selection:text-white">
      <Navbar />
      <main>
        <Home />
        <Footer />
      </main>
      
    </div>
  );
}

export default App;