import {Link} from 'react-router-dom';
import { TrendingUp, Code2, LineChart, CheckCircle2, ArrowUpRight } from 'lucide-react';



function Services() {
  const services = [
    {
      title: "Digital Marketing",
      icon: TrendingUp,
      desc: "Dominate your market share and drive massive traffic through integrated advertising and search visibility.",
      features: ["SEO Optimization", "PPC Management", "Link building"],
      cta: "Start Growing",
      tag: null
    },
    {
      title: "Full-Stack Development",
      icon: Code2,
      desc: "High-performance builds using the modern tech stack. We build applications that are fast, secure, and scalable.",
      features: ["React", "API Architectures", "Performance Tuning"],
      cta: "Build Now",
      tag: "Most Requested"
    },
    {
      title: "Strategic Consulting",
      icon: LineChart,
      desc: "Deep analysis of your unit economics to maximize ROAS and architect your business for massive scale.",
      features: ["ROAS Optimization", "Scalability Audits", "Market Positioning"],
      cta: "Consult Today",
      tag: null
    }
    
  ];

  return (
    <div className="min-h-screen bg-[#0a0f1a] pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        <div className="relative rounded-[40px] overflow-hidden bg-slate-900/50 border border-white/5 p-12 md:p-20 mb-24 text-center">
          {/* Decorative Grid Background */}
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#3b82f6 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
          
          <div className="relative z-10">
            <span className="text-blue-500 font-bold text-xs uppercase tracking-[4px] mb-4 block">Our Expertise</span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Scaling Your <span className="text-blue-500">Digital <br /> Presence</span>
            </h1>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
              We combine data-driven growth strategies with high-performance engineering to build market dominance.
            </p>
          </div>
        </div>

        {/* CORE SERVICES GRID */}
        <div className="mb-32">
          <h2 className="text-4xl font-bold text-white mb-12 flex items-center gap-4">
            Core Services <div className="h-1 w-20 bg-blue-600 rounded-full" />
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <ServiceCard key={i} {...s} />
            ))}
          </div>
        </div>

        {/* FINAL CTA SECTION (From Design) */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-[40px] p-12 md:p-20 text-center relative overflow-hidden group">
          <div className="relative z-10">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to render your results?</h2>
            <p className="text-blue-100 mb-10 max-w-xl mx-auto">
              Join 50+ companies that have transformed their digital trajectory with our specialized growth engineering.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/schedule">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-bold hover:bg-blue-50 transition-all shadow-xl">
                Schedule a Strategy Session
              </button>
              </Link>
            
              
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

function ServiceCard({ title, icon: Icon, desc, features, cta, tag }) {
  return (
    <div className={`bg-[#0f172a] border border-white/5 p-10 rounded-[32px] flex flex-col relative transition-all hover:translate-y-[-8px] hover:border-blue-500/30 ${tag ? 'ring-2 ring-blue-600/50' : ''}`}>
      {tag && (
        <span className="absolute -top-4 right-8 bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-lg shadow-lg">
          {tag}
        </span>
      )}
      
      <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-500 mb-8">
        <Icon size={28} />
      </div>

      <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow">{desc}</p>

      <div className="space-y-4 mb-10">
        {features.map((f, i) => (
          <div key={i} className="flex items-center gap-3 text-slate-300 text-sm">
            <CheckCircle2 size={16} className="text-blue-500" />
            {f}
          </div>
        ))}
      </div>

      <button className={`w-full py-4 rounded-xl font-bold transition-all ${tag ? 'bg-blue-600 text-white hover:bg-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.4)]' : 'bg-slate-800 text-white hover:bg-slate-700'}`}>
        {cta}
      </button>
    </div>
  );
}


export default Services;