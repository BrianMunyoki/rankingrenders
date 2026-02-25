function BentoCard({ title, value, label, icon: Icon, colorClass, size = "small" }) {
  return (
    /* size === "large" ? 'col-span-2' : 'col-span-1'
       This is a ternary operator. It tells the box to take up 1 or 2 columns based on our choice. */
    <div className={`bg-[#0f172a] border border-white/5 p-8 rounded-3xl relative overflow-hidden group 
      ${size === "large" ? "md:col-span-2" : "col-span-1"}`}>
      
      {/* Subtle Glow Effect on Hover */}
      <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />

      <div className="relative z-10">
        {/* Top Row: Icon and Badge */}
        <div className="flex justify-between items-start mb-12">
          <div className={`p-3 rounded-xl bg-slate-800/50 ${colorClass}`}>
            <Icon size={24} />
          </div>
          {label && (
             <span className="text-[10px] font-bold uppercase tracking-[2px] text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded">
               {label}
             </span>
          )}
        </div>

        {/* Bottom Content */}
        <div>
          <p className="text-slate-400 text-sm mb-1">{title}</p>
          <h3 className="text-4xl font-bold text-white tracking-tight">{value}</h3>
        </div>
      </div>
    </div>
  );
}

export default BentoCard