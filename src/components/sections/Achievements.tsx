import { CheckCircle2 } from "lucide-react";

export default function Achievements() {
  const achievements = [
    "Architected and implemented enterprise SAP systems and integration solutions globally.",
    "Built and deployed integrated, high-availability web portals servicing external customers.",
    "Led cross-functional ABAP and technical teams across multiple international projects.",
    "Engineered integration solutions that directly increased sales velocity and operational control.",
    "Established foundational AI development agents to modernize internal software practices.",
    "Spearheaded the modernization of development lifecycles and CI/CD platform strategy.",
    "Orchestrated unshakeable business continuity planning for mission-critical applications.",
  ];

  return (
    <section className="py-24 md:py-32 bg-graphite-950 border-t border-white/5" id="achievements">
      <div className="container mx-auto px-6 md:px-12 xl:px-24">
        
        <div className="mb-16">
          <h2 className="text-sm font-semibold tracking-widest text-brand-red uppercase mb-3">Proof Points</h2>
          <h3 className="text-4xl md:text-5xl font-heading font-semibold text-white tracking-tight">
            Selected Achievements
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-6">
          {achievements.map((item, idx) => (
            <div key={idx} className="flex items-start gap-4 p-6 glass rounded-xl border border-white/5 hover:border-brand-red/20 transition-colors">
              <CheckCircle2 className="text-brand-red shrink-0 mt-1" size={20} />
              <p className="text-steel-300 text-lg leading-relaxed text-balance">{item}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
