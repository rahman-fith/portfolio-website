"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Linkedin, ArrowUpRight } from "lucide-react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="py-24 md:py-32 px-6 bg-[#FAFAFA]">
      <div className="max-w-[1200px] mx-auto">
        <div className="max-w-2xl mx-auto text-center">
          <motion.p
            ref={ref}
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4 }}
            className="text-xs font-semibold tracking-widest text-[#999999] uppercase mb-4"
          >
            Let&apos;s Connect
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="text-[36px] md:text-[40px] font-semibold text-[#1A1A1A] leading-tight tracking-tight mb-5"
          >
            Interested in working together?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[17px] text-[#666666] leading-relaxed mb-10"
          >
            I&apos;m currently exploring new opportunities in ecommerce marketing, growth
            strategy, and AI-powered marketing operations.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-10"
          >
            <a
              href="mailto:ar.siddiq1025@gmail.com"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-[#1A1A1A] text-white font-semibold rounded-full hover:bg-[#333333] transition-colors text-sm"
            >
              <Mail size={15} />
              ar.siddiq1025@gmail.com
            </a>
            <a
              href="https://linkedin.com/in/arsiddiq"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 border border-[#E5E5E5] text-[#1A1A1A] font-semibold rounded-full hover:border-[#1A1A1A] transition-colors text-sm"
            >
              <Linkedin size={15} />
              linkedin.com/in/arsiddiq
              <ArrowUpRight size={13} className="text-[#999999]" />
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="text-sm text-[#999999]"
          >
            Based in Los Angeles, CA. Open to on-site, hybrid, and remote roles.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
