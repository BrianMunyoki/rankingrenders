import { Mail, Linkedin, Github, Send, PhoneCall } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    /* pt-32 ensures the content starts below your fixed Navbar */
    <div className="min-h-screen bg-[#0a0f1a] pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        {/* LEFT SIDE: TEXT & SOCIALS */}
        <div className="space-y-8">
          <div>
            <span className="text-blue-500 font-bold text-xs uppercase tracking-[3px] mb-4 block">Get in Touch</span>
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
              Ready to <span className="text-blue-500">Scale</span> <br /> Your Vision?
            </h1>
          </div>
          
          <p className="text-slate-400 text-lg leading-relaxed max-w-md">
            Transforming blueprints into hyper-realistic digital experiences. Fill out the form or schedule a direct call to start our collaboration.
          </p>

          <div className="space-y-6">
            <ContactMethod icon={Mail} label="Email Us" value="hello@rankingrenders.com" />
            <ContactMethod icon={Linkedin} label="LinkedIn" value="linkedin.com/company/rankingrenders" />
            <ContactMethod icon={Github} label="Open Source" value="github.com/rankingrenders" />
          </div>

          <button className="flex items-center gap-3 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-2xl font-bold transition-all shadow-[0_0_20px_rgba(59,130,246,0.3)]">
            Book a Strategy Call <PhoneCall size={18} />
          </button>
        </div>

        {/* RIGHT SIDE: THE FORM CARD */}
        <div className="bg-[#0f172a] border border-white/5 p-8 md:p-12 rounded-[40px] shadow-2xl">
          {isSubmitted ? (
            <div className="text-center py-20 animate-in fade-in zoom-in duration-500">
              <h2 className="text-2xl font-bold text-white mb-2">Message Sent!</h2>
              <p className="text-slate-400">I'll get back to you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <FormInput label="Full Name" placeholder="John Doe" />
              <FormInput label="Email Address" type="email" placeholder="john@example.com" />
              
              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-slate-500 ml-1">Message</label>
                <textarea 
                  rows="5"
                  placeholder="Tell us about your project..."
                  className="w-full bg-[#161e2d] border border-white/5 rounded-xl px-4 py-4 text-white focus:border-blue-500/50 outline-none resize-none transition-all"
                />
              </div>

              <button className="w-full bg-blue-600 hover:bg-blue-500 text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all">
                Send Message <Send size={18} />
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}

// Sub-components to keep code clean
function ContactMethod({ icon: Icon, label, value }) {
  return (
    <div className="flex items-center gap-4 group">
      <div className="w-12 h-12 bg-[#161e2d] rounded-xl flex items-center justify-center text-blue-500 border border-white/5 group-hover:border-blue-500/50 transition-all">
        <Icon size={20} />
      </div>
      <div>
        <p className="text-[10px] uppercase text-slate-500 font-bold tracking-widest">{label}</p>
        <p className="text-white font-medium">{value}</p>
      </div>
    </div>
  );
}

function FormInput({ label, type = "text", placeholder }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-[10px] uppercase tracking-widest font-bold text-slate-500 ml-1">{label}</label>
      <input 
        type={type} 
        placeholder={placeholder}
        className="w-full bg-[#161e2d] border border-white/5 rounded-xl px-4 py-4 text-white focus:border-blue-500/50 outline-none transition-all"
      />
    </div>
  );
}