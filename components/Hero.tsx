"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[#FAFAFA] px-6 pt-16">
      <div className="max-w-[1200px] mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-3xl"
        >
          {/* Eyebrow label */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            className="text-xs font-semibold tracking-widest text-[#2563EB] uppercase mb-6"
          >
            Los Angeles, CA
          </motion.p>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
            className="text-[52px] md:text-[64px] font-bold text-[#1A1A1A] leading-[1.08] tracking-tight mb-6"
          >
            I build marketing engines
            <br />
            <span className="text-[#2563EB]">that actually scale.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.25 }}
            className="text-lg md:text-xl text-[#666666] font-normal mb-10 leading-relaxed"
          >
            Digital Marketing &amp; Ecommerce. AI Automation. DTC Growth Strategy.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.35 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#case-studies"
              className="inline-flex items-center px-7 py-3.5 bg-[#2563EB] text-white font-semibold rounded-full hover:bg-[#1d4ed8] transition-colors text-sm"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center px-7 py-3.5 border border-[#1A1A1A] text-[#1A1A1A] font-semibold rounded-full hover:bg-[#1A1A1A] hover:text-white transition-all text-sm"
            >
              Get In Touch
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
        >
          <span className="text-xs text-[#999999] tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-px h-8 bg-[#E5E5E5]"
          />
        </motion.div>
      </div>
    </section>
  );
}
