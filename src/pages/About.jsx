import { Code2, BarChart3, Rocket, Code, GraduationCap, ArrowRight } from 'lucide-react';
import TechChip from '../components/TechChip';
import TimelineItem from '../components/TimelineItem';
import BrianMuemaImage from '../assets/BrianMuemaImage.jpg';

function About() {
  const softwareStack = ["React.js", "TypeScript", "Vite", "Node.js", "Tailwind CSS", "PostgreSQL", "Next.js", "AWS"];
  const marketingStack = ["Google Ads", "Ahrefs", "Meta Ads", "Conversion API", "GTM & GA4", "SEO Engineering", "Semrush", "Lead Gen Funnels"];

  return (
    <div className="min-h-screen bg-[#0a0f1a] pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* SECTION 1: THE DUAL-EXPERTISE HEADER (From Image 3) */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-32">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full mb-6">
               <span className="text-[10px] uppercase tracking-widest font-bold text-blue-400">Available for projects</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
              Engineering <span className="text-blue-500">×</span> <br /> 
              Marketing Expert
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed max-w-xl mb-8">
              Dual-expertise specialist focused on building high-performance web applications and scaling them through data-driven marketing engineering. Bridging the gap between clean code and aggressive growth.
            </p>
            <div className="flex gap-8 border-t border-white/5 pt-8">
              <div>
                <p className="text-3xl font-bold text-white">5+</p>
                <p className="text-xs uppercase tracking-widest text-slate-500">Years Exp</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">40+</p>
                <p className="text-xs uppercase tracking-widest text-slate-500">Apps Built</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">$2M+</p>
                <p className="text-xs uppercase tracking-widest text-slate-500">Ad Spend Managed</p>
              </div>
            </div>
          </div>

          {/* Portrait Placeholder from Design */}
          <div className="relative justify-self-center lg:justify-self-end">
             <div className="w-72 h-80 md:w-80 md:h-96 bg-gradient-to-br from-blue-600 to-blue-900 rounded-3xl rotate-3 absolute inset-0 -z-10 opacity-20" />
             <div className="w-72 h-80 md:w-80 md:h-96 bg-slate-800 rounded-3xl overflow-hidden border border-white/10">
                <img src={BrianMuemaImage} alt="Profile" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
             </div>
          </div>
        </div>

        {/* SECTION 2: EXPERTISE CLUSTERS */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-2">Expertise Clusters</h2>
            <p className="text-slate-400">How I merge technical architecture with growth strategies</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <ExpertiseBox title="Software Tech" icon={Code2} stack={softwareStack} />
            <ExpertiseBox title="Marketing Tech" icon={BarChart3} stack={marketingStack} />
          </div>
        </div>

        {/* SECTION 3: TIMELINE (The "Experience & Milestones") */}
        <div>
          <div className="text-center mb-20">
            <h2 className="text-3xl font-bold text-white mb-2">Experience & Milestones</h2>
            <p className="text-slate-400">A journey from code to growth</p>
          </div>
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-blue-600 via-slate-800 to-transparent" />
            <TimelineItem isLeft={false} period="2021 - Present" title="Founder, RankingRenders" company="Strategic Growth & Dev" icon={Rocket} />
            <TimelineItem isLeft={true} period="2019 - 2021" title="Lead Growth Engineer" company="FinTech Unicorn" icon={Code} />
          </div>
        </div>

      </div>
    </div>
  );
}

function ExpertiseBox({ title, icon: Icon, stack }) {
  return (
    <div className="bg-[#0f172a]/50 border border-white/5 p-10 rounded-[32px]">
      <div className="flex items-center gap-3 mb-8 text-blue-500">
        <Icon size={24} />
        <h3 className="text-xl font-bold text-white">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-3">
        {stack.map((tech) => (
          <span key={tech} className="px-4 py-2 bg-slate-800/40 border border-white/5 rounded-lg text-slate-300 text-sm">{tech}</span>
        ))}
      </div>
    </div>
  );
}

export default About;