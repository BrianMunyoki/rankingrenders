import { Github, Linkedin, Twitter, MessageSquare,Instagram } from 'lucide-react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0f1a] border-t border-white/5 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Brand Part */}
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
               <div className="w-3 h-3 border border-white rotate-45" />
            </div>
            <span className="text-white font-bold tracking-tighter">
              Ranking<span className="text-slate-500">Renders</span>
            </span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a href="#" className="text-slate-500 hover:text-blue-500 transition-colors"><Twitter size={20} /></a>
            <a href="#" className="text-slate-500 hover:text-blue-500 transition-colors"><Linkedin size={20} /></a>
            <a href="#" className="text-slate-500 hover:text-blue-500 transition-colors"><Github size={20} /></a>
            <a href="#" className="text-slate-500 hover:text-blue-500 transition-colors"><MessageSquare size={20} /></a>
          </div>

          {/* Copyright */}
          <p className="text-slate-500 text-sm font-medium">
            © {currentYear} RankingRenders Studio. All rights reserved.
          </p>
        </div>
        
        {/* Optional: Bottom Links from Image 4 */}
        <div className="flex justify-center gap-8 mt-8 pt-8 border-t border-white/[0.02]">
          {['Privacy', 'Terms', 'Cookies'].map((item) => (
            <a key={item} href="#" className="text-[10px] uppercase tracking-widest text-slate-600 hover:text-slate-400 transition-colors">
              {item}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;