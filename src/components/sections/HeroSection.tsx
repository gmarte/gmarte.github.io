"use client";

import { ArrowRight, FileText, Globe, Linkedin } from "lucide-react";
import NetworkScene from "../3d/NetworkScene";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden" id="home">
      <NetworkScene />
      
      <div className="container relative z-20 mx-auto px-6 md:px-12 xl:px-24">
        <div className="max-w-4xl">
          <div className="inline-block mb-6 px-3 py-1 border border-steel-400/20 bg-graphite-900/40 glass rounded-full">
            <span className="text-xs font-semibold tracking-wider text-steel-300 uppercase">Enterprise Systems & Innovation</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-semibold tracking-tight text-white mb-6 leading-tight">
            Technology & Innovation Manager<span className="text-brand-red">.</span><br className="max-md:hidden" />
            <span className="text-steel-400 text-3xl md:text-5xl lg:text-6xl block mt-3">
              SAP Solutions Architect.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-steel-400 mb-10 max-w-2xl text-balance leading-relaxed">
            Technology leader with 10+ years of experience in enterprise systems, SAP, integrations, digital transformation, and AI-driven innovation. Bridging operational complexity and scalable solutions.
          </p>
          
          <div className="flex flex-wrap gap-4 items-center">
            <a href="#journey" className="flex items-center gap-2 bg-brand-red hover:bg-brand-red-light text-white px-6 py-3 rounded-md font-medium transition-colors">
              View Journey <ArrowRight size={18} />
            </a>
            <a href="#impact" className="flex items-center gap-2 bg-graphite-800 hover:bg-graphite-700 text-white border border-white/10 px-6 py-3 rounded-md font-medium transition-colors">
              Explore Impact <Globe size={18} />
            </a>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-steel-300 hover:text-white px-4 py-3 font-medium transition-colors">
              <FileText size={18} /> Resume
            </a>
            <a href="https://www.linkedin.com/in/gmarte/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-steel-300 hover:text-white px-4 py-3 font-medium transition-colors">
              <Linkedin size={18} /> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
