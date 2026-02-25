import { Code2, BarChart3 } from 'lucide-react';
import TechChip from './TechChip';

function Expertise() {
  const softwareStack = ["React.js", "TypeScript", "Vite", "Node.js", "Tailwind CSS", "PostgreSQL", "Next.js", "AWS"];
  const marketingStack = ["Google Ads", "Ahrefs", "Meta Ads", "Conversion API", "GTM & GA4", "SEO Engineering", "Semrush", "Lead Gen Funnels"];

  return (
    <section className="py-24 bg-[#0a0f1a] px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Expertise Clusters</h2>
          <p className="text-slate-400">How I merge technical architecture with growth strategies</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          
          {/* SOFTWARE TECH BOX */}
          <div className="bg-[#0f172a]/50 border border-white/5 p-10 rounded-3xl">
            <div className="flex items-center gap-3 mb-8 text-blue-500">
              <Code2 size={24} />
              <h3 className="text-xl font-bold text-white">Software Tech</h3>
            </div>
            {/* flex-wrap is the secret here! It keeps the chips organized */}
            <div className="flex flex-wrap gap-3">
              {softwareStack.map((tech) => (
                <TechChip key={tech} name={tech} />
              ))}
            </div>
          </div>

          {/* MARKETING TECH BOX */}
          <div className="bg-[#0f172a]/50 border border-white/5 p-10 rounded-3xl">
            <div className="flex items-center gap-3 mb-8 text-blue-500">
              <BarChart3 size={24} />
              <h3 className="text-xl font-bold text-white">Marketing Tech</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {marketingStack.map((tech) => (
                <TechChip key={tech} name={tech} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Expertise;