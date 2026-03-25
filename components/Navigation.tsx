"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "AI & Automation", href: "#ai-automation" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#FAFAFA]/80 nav-blur border-b border-[#E5E5E5]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-[#1A1A1A] font-semibold text-lg tracking-tight hover:text-[#2563EB] transition-colors"
        >
          Abdul Siddiq
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[#666666] hover:text-[#1A1A1A] text-sm font-medium transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/Abdul_Siddiq_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium px-4 py-2 border border-[#1A1A1A] text-[#1A1A1A] rounded-full hover:bg-[#1A1A1A] hover:text-white transition-all"
          >
            Resume
          </a>
        </nav>

        {/* Mobile nav: horizontal scrollable */}
        <nav className="md:hidden flex items-center gap-5 overflow-x-auto scrollbar-hide max-w-[calc(100vw-140px)]">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[#666666] hover:text-[#1A1A1A] text-sm font-medium whitespace-nowrap transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/Abdul_Siddiq_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium px-3 py-1.5 border border-[#1A1A1A] text-[#1A1A1A] rounded-full hover:bg-[#1A1A1A] hover:text-white transition-all whitespace-nowrap"
          >
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
}
