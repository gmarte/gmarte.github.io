import { Briefcase, Calendar } from "lucide-react";

export default function CareerTimeline() {
  const experiences = [
    { 
      period: "Present", 
      role: "Technology & Innovation Manager", 
      company: "Caribetrans", 
      desc: "Leading end-to-end technology infrastructure, AI initiatives, enterprise integrations, and DevOps across a complex logistics environment." 
    },
    { 
      period: "Prior", 
      role: "Lead SAP Solutions Architect", 
      company: "Retail & Manufacturing Sector", 
      desc: "Architected modern SAP ECC integration paths, connecting core ERP systems with external sales platforms to drive revenue and operational control." 
    },
    { 
      period: "Early Leadership", 
      role: "Software & Web Development Lead", 
      company: "Various Enterprises", 
      desc: "Directed development teams emphasizing structured execution, business-aligned web portals, and bridging business strategy with code delivery." 
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-graphite-950 border-t border-white/5" id="journey">
      <div className="container mx-auto px-6 md:px-12 xl:px-24">
        
        <div className="mb-16">
          <h2 className="text-sm font-semibold tracking-widest text-brand-red uppercase mb-3">Career Journey</h2>
          <h3 className="text-4xl md:text-5xl font-heading font-semibold text-white tracking-tight">
            Evolution of Leadership
          </h3>
        </div>

        <div className="relative border-l border-white/10 ml-4 md:ml-8 space-y-12">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative pl-10 md:pl-16 group">
              <div className="absolute -left-[21px] top-1 h-10 w-10 rounded-full bg-graphite-950 border-2 border-brand-red flex items-center justify-center group-hover:bg-brand-red transition-colors duration-300">
                <Briefcase size={16} className="text-white" />
              </div>
              
              <div className="glass p-8 rounded-2xl border border-white/5 hover:border-white/10 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
                  <div>
                    <h4 className="text-2xl font-semibold text-white">{exp.role}</h4>
                    <p className="text-brand-red font-medium mt-1 uppercase tracking-wide text-sm">{exp.company}</p>
                  </div>
                  <div className="flex items-center gap-2 text-steel-400 bg-graphite-900/50 px-4 py-2 rounded-full text-sm font-medium border border-white/5">
                    <Calendar size={14} /> {exp.period}
                  </div>
                </div>
                <p className="text-steel-300 leading-relaxed max-w-3xl">
                  {exp.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
