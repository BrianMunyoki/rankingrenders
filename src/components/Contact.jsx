import { useState } from 'react'; // Import the hook
import { Send, CheckCircle } from 'lucide-react';

function Contact() {
  // 1. Define 'isSubmitted' state. Initially, it's false.
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the page from refreshing
    
    // In a real app, you'd send data to an API here.
    // For now, we simulate a success state.
    setIsSubmitted(true);
    
    // Reset the success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-24 bg-[#0a0f1a] px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* ... (Keep your left-side content the same) ... */}

        <div className="bg-[#0f172a] border border-white/5 p-10 rounded-[40px] relative overflow-hidden">
          {/* 2. Conditional Rendering: If submitted, show success message */}
          {isSubmitted ? (
            <div className="flex flex-col items-center justify-center py-20 text-center animate-in fade-in zoom-in duration-500">
              <div className="w-20 h-20 bg-blue-500/20 rounded-full flex items-center justify-center mb-6">
                <CheckCircle className="text-blue-500" size={40} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Message Received!</h3>
              <p className="text-slate-400">I'll get back to you within 24 hours.</p>
            </div>
          ) : (
            /* 3. The Form: Notice the onSubmit handler */
            <form className="relative z-10" onSubmit={handleSubmit}>
              <h3 className="text-white text-xl font-bold mb-6">Send a Message</h3>
              
              {/* Reuse your InputFields here */}
              <div className="space-y-4">
                <input type="text" placeholder="Full Name" required className="w-full bg-[#161e2d] border border-white/5 rounded-xl px-4 py-4 text-white focus:border-blue-500/50 outline-none" />
                <input type="email" placeholder="Email Address" required className="w-full bg-[#161e2d] border border-white/5 rounded-xl px-4 py-4 text-white focus:border-blue-500/50 outline-none" />
                <textarea rows="4" placeholder="Your Message" required className="w-full bg-[#161e2d] border border-white/5 rounded-xl px-4 py-4 text-white focus:border-blue-500/50 outline-none resize-none" />
              </div>

              <button type="submit" className="w-full mt-8 bg-blue-600 hover:bg-blue-500 text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all active:scale-[0.98]">
                Send Message <Send size={18} />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

export default Contact;