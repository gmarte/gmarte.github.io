import { ArrowRight } from "lucide-react";

export default function LeadershipPhilosophy() {
  return (
    <section className="py-24 md:py-32 bg-graphite-900 border-t border-white/5 relative overflow-hidden" id="leadership">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-red-dark/15 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 xl:px-24 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-sm font-semibold tracking-widest text-brand-red uppercase mb-3">Leadership Philosophy</h2>
            <h3 className="text-4xl md:text-5xl font-heading font-semibold text-white tracking-tight mb-12">
              Transforming Complexity into Execution
            </h3>
          </div>

          <div className="space-y-8 text-xl text-steel-400 leading-relaxed font-light mb-16 px-4 md:px-8 border-l-2 border-brand-red/50">
            <p>
              True technology leadership is not about adopting the newest framework—it is about <strong className="text-white font-medium">practical innovation</strong> and <strong className="text-white font-medium">strong execution</strong>.
            </p>
            <p>
              I believe in structured transformation. Designing architecture that resolves chaotic operational complexity into clean, scalable systems. It is the discipline of building technology <strong className="text-white font-medium">that fundamentally serves and accelerates the business.</strong>
            </p>
          </div>
          
          <div className="glass p-10 md:p-14 text-center rounded-2xl border border-brand-red/20 bg-graphite-950/80 shadow-2xl mt-12" id="contact">
            <h4 className="text-2xl md:text-3xl font-heading font-semibold text-white mb-8 text-balance">
              Let’s build the next stage of enterprise transformation.
            </h4>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="mailto:giancarlo@gmarte.com" className="bg-brand-red hover:bg-brand-red-light text-white px-8 py-4 rounded-md font-medium transition-colors w-full sm:w-auto flex items-center justify-center gap-2">
                Contact Me <ArrowRight size={18} />
              </a>
              <a href="https://www.linkedin.com/in/gmarte/" target="_blank" rel="noopener noreferrer" className="bg-graphite-800 hover:bg-graphite-700 text-white border border-white/10 px-8 py-4 rounded-md font-medium transition-colors w-full sm:w-auto">
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
