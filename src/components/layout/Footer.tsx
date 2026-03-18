import Link from "next/link";
import { Linkedin, Mail, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full relative z-10 border-t border-white/5 bg-graphite-950 py-12 md:py-16 mt-24">
      <div className="container mx-auto px-6 md:px-12 xl:px-24 flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
        
        <div className="flex flex-col space-y-4 max-w-sm text-center md:text-left">
          <Link href="/" className="text-2xl font-heading font-semibold tracking-tight">
            Giancarlo Marte<span className="text-brand-red">.</span>
          </Link>
          <p className="text-steel-400 text-sm">
            Technology & Innovation Manager. Turning enterprise complexity into scalable execution.
          </p>
        </div>

        <div className="flex space-x-6">
          <a
            href="https://www.linkedin.com/in/gmarte/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-steel-400 hover:text-brand-red transition-colors flex items-center gap-1 group"
          >
            <Linkedin size={20} />
            <span className="text-sm font-medium hidden sm:inline-block border-b border-transparent group-hover:border-brand-red transition-all">
              LinkedIn
            </span>
          </a>
          <a
            href="mailto:giancarlo@gmarte.com"
            className="text-steel-400 hover:text-brand-red transition-colors flex items-center gap-1 group"
          >
            <Mail size={20} />
            <span className="text-sm font-medium hidden sm:inline-block border-b border-transparent group-hover:border-brand-red transition-all">
              Email
            </span>
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-steel-400 hover:text-brand-red transition-colors flex items-center gap-1 group"
          >
            <ArrowUpRight size={20} />
            <span className="text-sm font-medium hidden sm:inline-block border-b border-transparent group-hover:border-brand-red transition-all">
              Resume
            </span>
          </a>
        </div>
      </div>
      
      <div className="container mx-auto px-6 md:px-12 xl:px-24 mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-steel-400">
        <p>&copy; {new Date().getFullYear()} Giancarlo Marte. All rights reserved.</p>
        <p className="mt-2 md:mt-0">Built with modern enterprise standards.</p>
      </div>
    </footer>
  );
}
