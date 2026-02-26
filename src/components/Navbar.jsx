import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0a0f1a]/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="text-white font-bold text-lg">RankingRenders</Link>

        <div className="hidden md:flex items-center gap-10">
          <Link to="/" className="text-sm text-slate-400 hover:text-white transition-colors">Home</Link>
          <Link to="/services" className="text-sm text-slate-400 hover:text-white transition-colors">Services</Link>
          <Link to="/about" className="text-sm text-slate-400 hover:text-white transition-colors">About</Link>
          <Link to="/contact" className="text-sm text-slate-400 hover:text-white transition-colors">Contact</Link>
          <Link to="/schedule" className="bg-blue-600 text-white px-5 py-2 rounded-full font-bold hover:bg-blue-500 transition-all">Book a Call</Link>
        </div>
        <Link to="/contact" className="bg-blue-600 text-white px-6 py-2 rounded-lg font-bold">
          Hire Me
        </Link>
      </div>
    </nav>
  );
}

export default Navbar