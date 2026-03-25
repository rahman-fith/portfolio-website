"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Linkedin } from "lucide-react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-24 md:py-32 px-6 bg-[#FAFAFA]">
      <div className="max-w-[1200px] mx-auto" ref={ref}>
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="text-xs font-semibold tracking-widest text-[#999999] uppercase mb-12"
        >
          About
        </motion.p>

        <div className="grid md:grid-cols-5 gap-12 md:gap-16 items-start">
          {/* Left: photo placeholder + contact links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-2 flex flex-col gap-6"
          >
            {/* Headshot placeholder */}
            <div className="w-full aspect-[4/5] bg-[#E5E5E5] rounded-2xl flex flex-col items-center justify-center text-center p-6">
              <div className="w-16 h-16 rounded-full bg-[#CCCCCC] mb-4" />
              <p className="text-sm text-[#999999] font-medium">
                Professional photo placeholder
              </p>
              <p className="text-xs text-[#BBBBBB] mt-1">400 x 500px, portrait</p>
              {/* [PLACEHOLDER: Replace this block with a Next.js Image component pointing to your actual headshot] */}
            </div>

            {/* Contact links below photo */}
            <div className="flex flex-col gap-3">
              <a
                href="mailto:ar.siddiq1025@gmail.com"
                className="inline-flex items-center gap-2 text-sm text-[#666666] hover:text-[#2563EB] transition-colors"
              >
                <Mail size={14} />
                ar.siddiq1025@gmail.com
              </a>
              <a
                href="https://linkedin.com/in/arsiddiq"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-[#666666] hover:text-[#2563EB] transition-colors"
              >
                <Linkedin size={14} />
                linkedin.com/in/arsiddiq
              </a>
            </div>
          </motion.div>

          {/* Right: stats first, then copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-3 flex flex-col gap-6"
          >
            {/* Stats row — first thing a recruiter sees */}
            <div className="grid grid-cols-4 gap-4 pb-6 border-b border-[#E5E5E5]">
              {[
                { value: "7+", label: "Years Experience" },
                { value: "$10M+", label: "Annual Revenue" },
                { value: "4.1x", label: "Avg. ROAS" },
                { value: "5", label: "Ad Platforms" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-[26px] font-bold text-[#1A1A1A]">{stat.value}</p>
                  <p className="text-xs text-[#999999] mt-1 leading-tight">{stat.label}</p>
                </div>
              ))}
            </div>

            <h2 className="text-[32px] md:text-[36px] font-semibold text-[#1A1A1A] leading-tight tracking-tight">
              7+ years at the intersection of marketing, ecommerce, and AI.
            </h2>

            <div className="flex flex-col gap-4 text-[17px] text-[#444444] leading-relaxed">
              <p>
                I lead multi-channel marketing at Innova Electronics across Meta, Google, Amazon, TikTok, and Shopify, contributing to $10M+ in annual digital revenue while maintaining a 4.1x average ROAS. I also co-founded FITH, a modest activewear DTC brand, from a cold garage with zero budget and no retail background.
              </p>
              <p>
                What separates me is how I apply AI to real business problems. I design and deploy production automation agents for data reporting, competitor analysis, content pipelines, and inventory forecasting using Claude Code, Replit, and Lovable. No dev background required. Before ecommerce, 3+ years in agency operations taught me how to build systems that scale without breaking.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
