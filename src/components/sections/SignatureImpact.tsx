import { Layers, Workflow, Webhook, BrainCircuit, ShieldAlert, TrendingUp } from "lucide-react";

export default function SignatureImpact() {
  const themes = [
    { title: "Enterprise Systems", icon: <Layers size={22}/>, desc: "Architecting scalable foundations using SAP and enterprise-grade infrastructure to resolve extreme business complexity." },
    { title: "Integration Architecture", icon: <Webhook size={22}/>, desc: "Connecting disparate platforms, portals, and modules using robust APIs for seamless operational data flow." },
    { title: "AI Enablement", icon: <BrainCircuit size={22}/>, desc: "Pioneering the safe, systematic integration of AI agents to accelerate internal development and intelligent automation." },
    { title: "Operational Resilience", icon: <ShieldAlert size={22}/>, desc: "Designing for maximum uptime, rigid governance, and unshakeable business continuity across mission-critical nodes." },
    { title: "Technology Governance", icon: <Workflow size={22}/>, desc: "Enforcing mature CI/CD practices, strict development standards, and rigorous IT vendor/budget management." },
    { title: "Business Execution", icon: <TrendingUp size={22}/>, desc: "Translating executive vision into technological reality, directly driving revenue pipelines and operational efficiency." },
  ];

  return (
    <section className="py-24 md:py-32 bg-graphite-900 border-t border-white/5" id="impact">
      <div className="container mx-auto px-6 md:px-12 xl:px-24">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-semibold tracking-widest text-brand-red uppercase mb-3">Signature Themes</h2>
          <h3 className="text-4xl md:text-5xl font-heading font-semibold text-white tracking-tight mb-6">
            Strategic Impact Pillars
          </h3>
          <p className="text-lg text-steel-400 leading-relaxed text-balance">
            Prioritizing architectural maturity, sustainable growth, and systemic efficiency over isolated code delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {themes.map((theme, idx) => (
            <div key={idx} className="bg-graphite-950/50 p-8 rounded-2xl border border-white/5 hover:border-brand-red/40 hover:bg-graphite-950 hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center group">
              <div className="h-16 w-16 rounded-full bg-graphite-900 border border-white/10 flex items-center justify-center text-brand-red mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                {theme.icon}
              </div>
              <h4 className="text-xl font-semibold text-white mb-3">{theme.title}</h4>
              <p className="text-sm text-steel-400 leading-relaxed">{theme.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
