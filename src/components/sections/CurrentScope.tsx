import { Anchor, Cpu, Database, Network, Repeat, Shield, Settings, Activity } from "lucide-react";

export default function CurrentScope() {
  const responsibilities = [
    { title: "Enterprise Systems", icon: <Database className="text-brand-red" size={24}/>, desc: "Overseeing end-to-end mission-critical infrastructure across logistics and supply chain." },
    { title: "SAP ECC & EWM", icon: <Settings className="text-brand-red" size={24}/>, desc: "Managing comprehensive SAP environments supporting central warehousing and distribution." },
    { title: "Logistics Technology", icon: <Anchor className="text-brand-red" size={24}/>, desc: "Integrating the CargoWise ecosystem and large-scale freight forwarding operations." },
    { title: "AI Enablement", icon: <Cpu className="text-brand-red" size={24}/>, desc: "Laying the foundational structure for AI development agents and intelligent operations." },
    { title: "Enterprise Integrations", icon: <Network className="text-brand-red" size={24}/>, desc: "Architecting seamless APIs and connecting disparate customer-facing web portals." },
    { title: "Governance & DevOps", icon: <Repeat className="text-brand-red" size={24}/>, desc: "Modernizing development pipelines with strict CI/CD and software lifecycle controls." },
    { title: "Business Continuity", icon: <Shield className="text-brand-red" size={24}/>, desc: "Ensuring deep operational resilience and zero-downtime architecture for key services." },
    { title: "Business Alignment", icon: <Activity className="text-brand-red" size={24}/>, desc: "Driving IT budgets, vendor management, and aligning tech investments with strategy." },
  ];

  return (
    <section className="py-24 md:py-32 bg-graphite-900 border-t border-white/5" id="scope">
      <div className="container mx-auto px-6 md:px-12 xl:px-24">
        
        <div className="mb-16 max-w-3xl">
          <h2 className="text-sm font-semibold tracking-widest text-brand-red uppercase mb-3">Current Scope</h2>
          <h3 className="text-4xl md:text-5xl font-heading font-semibold text-white tracking-tight">
            Flagship Leadership at Caribetrans
          </h3>
          <p className="mt-6 text-lg text-steel-400 max-w-2xl leading-relaxed text-balance">
            Leading technology and innovation across a comprehensive logistics environment spanning freight forwarding, air cargo, ocean freight, customs, and integrated warehousing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {responsibilities.map((r, i) => (
            <div key={i} className="glass p-8 rounded-2xl border border-white/5 hover:border-brand-red/30 transition-all duration-300 group">
              <div className="mb-6 p-4 bg-graphite-950/50 rounded-xl inline-block group-hover:scale-110 transition-transform duration-300">
                {r.icon}
              </div>
              <h4 className="text-xl font-semibold text-white mb-3">{r.title}</h4>
              <p className="text-sm text-steel-400 leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
