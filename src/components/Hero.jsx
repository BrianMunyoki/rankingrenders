import { ArrowRight } from 'lucide-react';
import Logo  from '../assets/BrianMuemaImage.jpg'

function Hero() {
  return (
    /* 1. min-h-screen: Makes the section take up at least the full height of the monitor.
       2. pt-32: Adds space at the top so the fixed Navbar doesn't cover the text. */
    <section className="min-h-screen bg-[#0a0f1a] flex items-center px-6 pt-32 pb-20 overflow-hidden relative">
      
      {/* Background Glow - This mimics that soft blue light in your designs */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        
        {/* LEFT SIDE: TEXT CONTENT */}
        <div className="z-10">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span className="text-[10px] uppercase tracking-widest font-bold text-blue-400">Available for projects</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.1] mb-6">
            We Rank Brands. <br />
            <span className="text-blue-500 italic">Build and maintain </span> Apps.
          </h1>

          <p className="text-slate-400 text-lg md:text-xl max-w-xl mb-10 leading-relaxed">
            The intersection of <span className="text-white font-medium">Engineering</span> and <span className="text-white font-medium">Growth</span>. Building high-performance software that dominates markets.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 transition-all group">
              View Portfolio 
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-slate-800/50 hover:bg-slate-800 border border-slate-700 text-white px-8 py-4 rounded-xl font-bold transition-all">
              Technical Stack
            </button>
          </div>
        </div>

        
        <div className="relative group">
          {/* This represents that 3D plant or abstract image in your design */}
          <div className="relative z-10 rounded-3xl overflow-hidden border border-white/10 aspect-square bg-gradient-to-br from-slate-800 to-[#0a0f1a] flex items-center justify-center">
             <img 
               src={Logo}
               alt="Project Preview" 
               className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
             />
             {/* Floating Labels from Image 2 */}
             <div className="absolute bottom-6 left-6 space-y-2">
                <div className="bg-black/60 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10 text-xs text-white flex items-center gap-2">
                   <div className="w-2 h-2 bg-blue-500 rounded-sm" /> Growth Engineering
                </div>
                <div className="bg-black/60 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10 text-xs text-white flex items-center gap-2">
                   <div className="w-2 h-2 bg-blue-500 rounded-sm" /> React & Vite Core
                </div>
             </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;