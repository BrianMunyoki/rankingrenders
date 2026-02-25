import { Rocket, Code, GraduationCap } from 'lucide-react';
import TimelineItem from './TimelineItem';

function Experience() {
  return (
    <section className="py-24 bg-[#0a0f1a] px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-white mb-4">Experience & Milestones</h2>
          <p className="text-slate-400">A journey from code to growth</p>
        </div>

        <div className="relative">
          {/* THE VERTICAL LINE: 'absolute' allows it to sit behind the items */}
          <div className="absolute left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-blue-600/50 via-slate-800 to-transparent" />

          <div className="space-y-24 md:space-y-0">
            <TimelineItem 
              isLeft={false}
              period="2021 - Present"
              title="Founder, RankingRenders"
              company="Strategic Growth & Dev"
              description="Architecting bespoke web applications for SaaS companies while managing $50k+/month in performance marketing spend."
              icon={Rocket}
            />
            
            <TimelineItem 
              isLeft={true}
              period="2019 - 2021"
              title="Lead Growth Engineer"
              company="FinTech Unicorn"
              description="Developed automated marketing pipelines and custom attribution modeling software for a FinTech unicorn."
              icon={Code}
            />

            <TimelineItem 
              isLeft={false}
              period="2017 - 2019"
              title="Senior Fullstack Developer"
              company="Fortune 500 Clients"
              description="Built and scaled cloud-native applications using React and Node.js for Fortune 500 clients."
              icon={GraduationCap}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;