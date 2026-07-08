/**
 * Single source of truth for all site copy.
 * Content baseline: README.md (executive positioning brief).
 */

export const IDENTITY = {
  name: "Giancarlo Marte",
  shortName: "GM",
  role: "Technology & Innovation Manager",
  roleLine:
    "Technology & Innovation Manager · SAP Solutions Architect · Technology Leader in Logistics, Retail & Manufacturing",
  email: "giancarlo@gmarte.com",
  linkedin: "https://www.linkedin.com/in/gmarte/",
  resume: "/resume.pdf",
  domain: "gmarte.com",
};

export const NAV_LINKS = [
  { label: "Position", href: "#position" },
  { label: "Journey", href: "#journey" },
  { label: "Scope", href: "#scope" },
  { label: "Impact", href: "#impact" },
  { label: "Proof", href: "#proof" },
  { label: "Philosophy", href: "#philosophy" },
];

export const CHAPTERS = [
  { index: "01", id: "hero", label: "Signal" },
  { index: "02", id: "position", label: "Position" },
  { index: "03", id: "journey", label: "Journey" },
  { index: "04", id: "scope", label: "Scope" },
  { index: "05", id: "impact", label: "Impact" },
  { index: "06", id: "proof", label: "Proof" },
  { index: "07", id: "philosophy", label: "Philosophy" },
];

export const HERO = {
  kicker: "Giancarlo Marte — Enterprise Technology Leadership",
  headline: {
    lead: "Enterprise complexity,",
    emphasis: "engineered into advantage.",
  },
  support:
    "Technology leader with 10+ years across enterprise systems, SAP architecture, integrations, digital transformation, and AI-driven innovation — in environments where operations never stop.",
  roleLine: IDENTITY.roleLine,
  ctas: {
    primary: { label: "Explore the impact", href: "#scope" },
    secondary: { label: "View the journey", href: "#journey" },
  },
  ticker: [
    "Freight Forwarding",
    "SAP ECC",
    "SAP EWM",
    "CargoWise",
    "Enterprise APIs",
    "AI Enablement",
    "Air Cargo",
    "Ocean Freight",
    "Customs",
    "Warehousing",
    "DevOps Governance",
    "Business Continuity",
  ],
};

export type StatementSegment = { text: string; em?: boolean; signal?: boolean };

export const POSITION = {
  statement: [
    { text: "I lead technology where the stakes are " },
    { text: "operational", em: true, signal: true },
    {
      text: " — freight moving through ports, warehouses running through the night, ERP platforms carrying the business. My work turns that complexity into ",
    },
    { text: "systems that scale", em: true },
    { text: ", and into decisions the business can trust." },
  ] as StatementSegment[],
  detail:
    "Operating at the intersection of business strategy, enterprise systems, and innovation: SAP architecture, systems integration, AI enablement, development governance, and business continuity — brought together under one operating discipline.",
  stats: [
    { value: 10, suffix: "+", label: "Years in enterprise technology" },
    { value: 3, suffix: "", label: "Industries transformed" },
    { value: 8, suffix: "", label: "Domains under management" },
    { value: 24, suffix: "/7", label: "Operations supported" },
  ],
};

export const JOURNEY = {
  intro:
    "Four phases of one trajectory: from building the systems to architecting them — to leading the technology function itself.",
  phases: [
    {
      index: "P·01",
      era: "Foundation",
      role: "Software & Web Development Lead",
      org: "Early enterprise engagements",
      summary:
        "Directed development teams building business-aligned web platforms and customer portals. Learned the discipline that still defines the work: technology exists to serve an operation.",
      themes: ["Team leadership", "Web platforms", "Delivery discipline"],
    },
    {
      index: "P·02",
      era: "Architecture",
      role: "SAP Solutions Architect",
      org: "Retail & manufacturing sector",
      summary:
        "Architected SAP ECC integration paths connecting core ERP with external sales channels — solutions that measurably increased sales and tightened operational control.",
      themes: ["SAP ECC", "Integration architecture", "Revenue systems"],
    },
    {
      index: "P·03",
      era: "Transformation",
      role: "Enterprise SAP & Integration Leadership",
      org: "Multinational project landscape",
      summary:
        "Led ABAP and technical teams across international implementations. Delivered enterprise SAP and integration programs where go-live meant the operation kept moving.",
      themes: ["Global delivery", "Technical leadership", "ERP programs"],
    },
    {
      index: "P·04",
      era: "Leadership — Present",
      role: "Technology & Innovation Manager",
      org: "Caribetrans",
      summary:
        "Leading technology and innovation across an end-to-end logistics and supply chain environment — enterprise systems, AI initiatives, integrations, DevOps governance, and continuity for a business that never pauses.",
      themes: ["Enterprise strategy", "AI enablement", "Modernization"],
      current: true,
    },
  ],
};

export const SCOPE = {
  intro:
    "Flagship mandate: leading technology across an end-to-end logistics operation — freight forwarding, air cargo, ocean freight, customs, specialized transportation, warehousing, and integrated distribution.",
  interstitialLabel: "Live operating terrain — one signal under control",
  modules: [
    {
      code: "SYS",
      title: "Enterprise Systems",
      desc: "End-to-end ownership of mission-critical infrastructure across logistics and supply chain operations.",
    },
    {
      code: "SAP",
      title: "SAP ECC & EWM",
      desc: "Comprehensive SAP environments supporting central warehousing, distribution, and core business processes.",
    },
    {
      code: "LOG",
      title: "Logistics Technology",
      desc: "The CargoWise ecosystem and large-scale freight forwarding operations, integrated end to end.",
    },
    {
      code: "AI",
      title: "AI Enablement",
      desc: "Foundational structure for AI development agents and intelligent operations inside the development function.",
    },
    {
      code: "API",
      title: "Enterprise Integrations",
      desc: "APIs and integration architecture connecting customer-facing portals with core operational platforms.",
    },
    {
      code: "DEV",
      title: "DevOps & Governance",
      desc: "Modernized development lifecycles — CI/CD pipelines, code governance, and software delivery standards.",
    },
    {
      code: "BCP",
      title: "Business Continuity",
      desc: "Operational resilience and continuity planning for applications the business cannot operate without.",
    },
    {
      code: "BIZ",
      title: "Business Alignment",
      desc: "Budgets, vendor strategy, and investment decisions that keep technology pointed at business outcomes.",
    },
  ],
};

export const IMPACT = {
  intro:
    "Not a list of skills — a set of strategic pillars, each one carried from architecture to operation.",
  pillars: [
    {
      title: "Enterprise Systems",
      desc: "Owning the platforms a business runs on — ERP, WMS, and the operational core — with the reliability standards of infrastructure.",
      tags: ["SAP ECC", "SAP EWM", "CargoWise"],
    },
    {
      title: "Integration Architecture",
      desc: "Designing the connective tissue: APIs, interfaces, and data flows that make separate systems behave as one operation.",
      tags: ["Enterprise APIs", "EDI", "Portals"],
    },
    {
      title: "Digital Transformation",
      desc: "Structured modernization of platforms and digital services — sequenced, governed, and tied to business value.",
      tags: ["Platform strategy", "Modernization"],
    },
    {
      title: "AI Enablement",
      desc: "Building the foundations for AI development agents and intelligent workflows — practical capability, not experimentation theater.",
      tags: ["AI agents", "Dev acceleration"],
    },
    {
      title: "Operational Resilience",
      desc: "Business continuity engineered into the architecture, so mission-critical services survive what operations throw at them.",
      tags: ["Continuity", "High availability"],
    },
    {
      title: "Technology Governance",
      desc: "DevOps, CI/CD, vendor and budget discipline — the controls that let a technology function scale without losing its shape.",
      tags: ["CI/CD", "Vendor strategy", "Budget"],
    },
    {
      title: "Business-Focused Execution",
      desc: "Translating strategy into shipped systems. The measure of architecture is what the business can do with it.",
      tags: ["Strategy → delivery", "Stakeholders"],
    },
  ],
};

export const PROOF = {
  intro: "Selected proof points from the broader journey.",
  items: [
    {
      headline: "Enterprise SAP, delivered globally",
      detail:
        "Architected and implemented enterprise SAP and integration solutions across international operations.",
    },
    {
      headline: "Portals that carry the business",
      detail:
        "Built integrated, high-availability web portals servicing external customers around the clock.",
    },
    {
      headline: "Technical teams, led across borders",
      detail:
        "Led cross-functional ABAP and technical teams through multiple international projects.",
    },
    {
      headline: "Integration that moved revenue",
      detail:
        "Engineered ERP-to-sales-channel integrations that directly increased sales velocity and operational control.",
    },
    {
      headline: "AI foundations, in production",
      detail:
        "Established foundational AI development agents to modernize internal software practices.",
    },
    {
      headline: "Delivery lifecycle, modernized",
      detail:
        "Spearheaded the modernization of development lifecycles and CI/CD platform strategy.",
    },
    {
      headline: "Continuity for the mission-critical",
      detail:
        "Orchestrated business continuity planning for the applications the operation depends on.",
    },
  ],
};

export const PHILOSOPHY = {
  intro: "How the work gets led.",
  principles: [
    {
      title: "Innovation is practical.",
      desc: "New technology earns its place by changing an operational outcome — or it waits.",
    },
    {
      title: "Execution is the strategy.",
      desc: "A roadmap is only as credible as the last thing that shipped on it.",
    },
    {
      title: "Transformation is structured.",
      desc: "Sequenced, governed, reversible where it must be. Ambition without structure is risk.",
    },
    {
      title: "Complexity is raw material.",
      desc: "The job is to turn operational complexity into systems that scale — not to admire it.",
    },
    {
      title: "Technology serves the business.",
      desc: "Every platform decision traces back to a business capability someone is accountable for.",
    },
  ],
};

export const CTA = {
  kicker: "Next mandate",
  headline: {
    lead: "Let’s build the next stage of",
    emphasis: "enterprise transformation.",
  },
  support:
    "For executive recruiters, CIOs, and technology leaders: direct lines, no friction.",
  actions: [
    { label: "Connect on LinkedIn", href: IDENTITY.linkedin, external: true, primary: true },
    { label: "giancarlo@gmarte.com", href: `mailto:${IDENTITY.email}`, external: false, primary: false },
    { label: "Download résumé", href: IDENTITY.resume, external: true, primary: false },
  ],
};
