import Image from "next/image";
import QRCode from "react-qr-code";
import { Mail, FileText, Globe, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Giancarlo Marte | Connect",
  description: "Digital business card and executive contact links.",
};

export default function NetworkPage() {
  const linkedinUrl = "https://www.linkedin.com/in/gmarte/";

  return (
    <div className="min-h-screen bg-graphite-950 flex flex-col items-center justify-center py-12 px-4 relative overflow-hidden -mt-20">
      {/* Background ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-[500px] bg-brand-red/10 blur-[100px] rounded-full pointer-events-none opacity-50" />
      
      <div className="z-10 w-full max-w-md bg-graphite-900/60 border border-white/10 rounded-3xl p-8 sm:p-10 shadow-2xl backdrop-blur-md flex flex-col items-center">
        
        {/* Profile Picture */}
        <div className="relative w-32 h-32 mb-6 rounded-full overflow-hidden border-[3px] border-brand-red shadow-[0_0_20px_rgba(164,0,0,0.3)]">
          <Image 
            src="/profile.jpg" 
            alt="Giancarlo Marte" 
            fill 
            className="object-cover"
            priority
          />
        </div>

        {/* Identity Block */}
        <h1 className="text-3xl font-bold font-outfit text-white mb-1">Giancarlo Marte</h1>
        <h2 className="text-brand-red font-semibold tracking-widest text-[11px] uppercase mb-8 text-center leading-relaxed">
          Technology & Innovation Manager<br/>
          <span className="text-steel-400">SAP Solutions Architect</span>
        </h2>

        {/* Live LinkedIn QR Code */}
        <div className="bg-white p-4 rounded-2xl shadow-[0_0_30px_rgba(255,255,255,0.1)] mb-4">
          <QRCode 
            value={linkedinUrl} 
            size={180}
            fgColor="#050505"
            bgColor="#ffffff"
            level="H"
          />
        </div>
        <p className="text-steel-400 text-xs font-medium tracking-wide uppercase mb-10 text-center">
          Scan to connect on LinkedIn
        </p>

        {/* High-Contrast Action Buttons */}
        <div className="w-full space-y-3">
          <a href="mailto:giancarlo@gmarte.com" className="flex items-center justify-between w-full bg-graphite-800 hover:bg-brand-red text-white border border-white/5 hover:border-brand-red px-6 py-4 rounded-xl font-medium transition-all group shadow-md">
            <div className="flex items-center gap-4">
              <Mail size={20} className="text-brand-red group-hover:text-white transition-colors" />
              <span>Email Me</span>
            </div>
            <ArrowRight size={18} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-white" />
          </a>

          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between w-full bg-graphite-800 hover:bg-graphite-700 text-white border border-white/5 hover:border-white/10 px-6 py-4 rounded-xl font-medium transition-all group shadow-md">
            <div className="flex items-center gap-4">
              <FileText size={20} className="text-steel-400 group-hover:text-white transition-colors" />
              <span>Download Resume</span>
            </div>
            <ArrowRight size={18} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-steel-400 group-hover:text-white" />
          </a>

          <a href="/" className="flex items-center justify-between w-full bg-graphite-800 hover:bg-graphite-700 text-white border border-white/5 hover:border-white/10 px-6 py-4 rounded-xl font-medium transition-all group shadow-md">
            <div className="flex items-center gap-4">
              <Globe size={20} className="text-steel-400 group-hover:text-white transition-colors" />
              <span>View Full Portfolio</span>
            </div>
            <ArrowRight size={18} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-steel-400 group-hover:text-white" />
          </a>
        </div>
      </div>
    </div>
  );
}
