function TechChip({ name }) {
  return (
    /* 1. bg-slate-800/40: Gives that dark, semi-transparent look.
       2. border-white/5: Adds the subtle edge from your design.
       3. hover:border-blue-500/50: Makes it interactive.
    */
    <span className="px-4 py-2 bg-slate-800/40 border border-white/5 rounded-lg text-slate-300 text-sm font-medium transition-all hover:border-blue-500/50 hover:text-white cursor-default">
      {name}
    </span>
  );
}

export default TechChip;