import { TrendingUp, Users, Code2, Rocket } from 'lucide-react';
import BentoCard from './BentoCard';

function ProjectGrid() {
  return (
    <section className="py-20 bg-[#0a0f1a] px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-12">Marketing Wins & Software Builds</h2>
        
        {/* The Grid: 3 columns on large screens, 1 on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card 1: Performance */}
          <BentoCard 
            title="Average ROAS"
            value="8.5x"
            label="Performance"
            icon={TrendingUp}
            colorClass="text-blue-500"
          />

          {/* Card 2: Large Feature Card (takes 2 columns) */}
          <BentoCard 
            size="large"
            title="SaaS Dashboard Build"
            value="Enterprise Level"
            icon={Code2}
            colorClass="text-purple-500"
          />

          {/* Card 3: Growth Metric */}
          <BentoCard 
            title="DAU Increase"
            value="+140%"
            label="Verified Growth"
            icon={Users}
            colorClass="text-blue-400"
          />

          {/* Card 4: CTA Card */}
          <div className="bg-blue-600 rounded-3xl p-8 flex flex-col justify-center items-center text-center group cursor-pointer hover:bg-blue-500 transition-colors">
            <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mb-4">
              <Rocket className="text-white" />
            </div>
            <h3 className="text-xl font-bold text-white">Start a Project</h3>
            <p className="text-blue-100 text-sm">Available for Q1 2026</p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default ProjectGrid;