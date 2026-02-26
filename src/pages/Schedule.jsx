import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

function Schedule() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      // This styles the calendar to match your dark theme
      cal("ui", { 
        theme: "dark", 
        styles: { branding: { brandColor: "#3b82f6" } },
        hideEventTypeDetails: false,
        layout: "month_view"
      });
    })();
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0f1a] pt-32 pb-20 px-6 text-center">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Book a <span className="text-blue-500">Strategy</span> Session
        </h1>
        <p className="text-slate-400 mb-12 text-lg">
          Select a time that works for you to discuss your vision.
        </p>
        
        <div className="rounded-[40px] overflow-hidden border border-white/5 shadow-2xl bg-[#0f172a]">
          <Cal 
            calLink="brian-muema/30min" 
            style={{ width: "100%", height: "100%", minHeight: "700px" }}
            config={{ theme: 'dark' }}
          />
        </div>
      </div>
    </div>
  );
}

export default Schedule;