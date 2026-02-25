function TimelineItem({ title, company, period, description, icon: Icon, isLeft }) {
  return (
    <div className="relative flex justify-center items-center mb-12">
      {/* The Central Icon/Node */}
      <div className="z-10 w-12 h-12 bg-[#0a0f1a] border-2 border-blue-500 rounded-full flex items-center justify-center text-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)]">
        <Icon size={20} />
      </div>

      {/* The Card */}
      <div className={`absolute w-[45%] p-6 bg-[#0f172a]/80 border border-white/5 rounded-2xl transition-all hover:border-blue-500/30 
        ${isLeft ? "right-[55%] text-right" : "left-[55%] text-left"}`}>
        
        <div className={`flex flex-col ${isLeft ? "items-end" : "items-start"}`}>
          <span className="text-[10px] font-bold text-blue-500 uppercase tracking-widest mb-1">{period}</span>
          <h3 className="text-xl font-bold text-white leading-tight">{title}</h3>
          <p className="text-blue-400 text-sm mb-3 font-medium">{company}</p>
          <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default  TimelineItem;