function InputField({ label, type = "text", placeholder }) {
  return (
    <div className="flex flex-col gap-2 w-full mb-4">
      <label className="text-[10px] uppercase tracking-widest font-bold text-slate-500 ml-1">
        {label}
      </label>
      <input 
        type={type}
        placeholder={placeholder}
        className="w-full bg-[#161e2d] border border-white/5 rounded-xl px-4 py-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500/50 transition-all"
      />
    </div>
  );
}

export default InputField;;