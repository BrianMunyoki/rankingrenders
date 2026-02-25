export default function Navbar() {
  // This function handles the "Smooth" part
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0a0f1a]/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <div onClick={() => handleScroll('home')} className="cursor-pointer">
          <span className="text-white font-bold tracking-tight text-lg">RankingRenders</span>
        </div>

        {/* Links */}
        <div className="hidden md:flex items-center gap-10">
          {[
            { name: 'Projects', id: 'projects' },
            { name: 'Services', id: 'skills' },
            { name: 'About', id: 'about' }
          ].map((link) => (
            <button 
              key={link.id} 
              onClick={() => handleScroll(link.id)}
              className="text-sm text-slate-400 hover:text-blue-500 transition-colors"
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* The Contact Button */}
        <button 
          onClick={() => handleScroll('contact')}
          className="bg-blue-600 text-white px-6 py-2.5 rounded-lg font-semibold text-sm hover:bg-blue-500 transition-all"
        >
          Hire Me
        </button>
      </div>
    </nav>
  );
}