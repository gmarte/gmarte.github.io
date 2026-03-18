"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Journey", href: "#journey" },
    { name: "Scope", href: "#scope" },
    { name: "Impact", href: "#impact" },
    { name: "Leadership", href: "#leadership" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "glass py-4 shadow-lg" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 xl:px-24 flex items-center justify-between">
        <Link href="/" className="text-xl font-heading font-semibold tracking-tight">
          Giancarlo Marte<span className="text-brand-red">.</span>
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-steel-300 hover:text-white transition-colors duration-200"
            >
              {link.name}
            </Link>
          ))}
          <a
            href="#contact"
            className="text-sm font-medium border border-steel-400/30 px-5 py-2 rounded-full hover:border-brand-red hover:bg-brand-red-glow/20 transition-all duration-300"
          >
            Connect
          </a>
        </nav>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden text-steel-300 hover:text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full glass border-t border-white/5 py-4 px-6 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-steel-300 font-medium hover:text-white py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="#contact"
            className="text-white bg-brand-red hover:bg-brand-red-light px-5 py-2 rounded-md text-center transition-colors font-medium"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Connect
          </a>
        </div>
      )}
    </header>
  );
}
