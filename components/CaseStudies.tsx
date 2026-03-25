"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const caseStudies = [
  {
    tag: "Paid Media",
    title: "Scaling Multi-Channel Paid Campaigns to $10M+ Revenue",
    description:
      "How I architected full-funnel ad campaigns across 5 platforms while maintaining a 4.1x ROAS.",
    href: "/case-studies/paid-media",
    bg: "from-[#1E3A5F] to-[#2563EB]",
    stats: ["7.83x Amazon ROAS", "$2M+ Attributed Revenue", "25M+ Impressions"],
    image: "/amazon-metrics.png",
    imageAlt: "Amazon Sponsored Products dashboard showing 7.83x ROAS",
  },
  {
    tag: "AI Automation",
    title: "Building AI Agents That Replaced 30+ Hours of Manual Work",
    description:
      "From data reporting to competitor analysis, how I deployed AI workflows that let a small team operate at scale.",
    href: "/case-studies/ai-automation",
    bg: "from-[#1A1A2E] to-[#16213E]",
    stats: ["0 Lines of Code Written", "Hours Saved Daily", "Claude Code + Replit + ElevenLabs"],
  },
  {
    tag: "DTC / Ecommerce",
    title: "Launching FITH: Building a DTC Brand From Zero",
    description:
      "The strategy behind scaling an inclusive activewear brand across Shopify, TikTok, and Meta.",
    href: "/case-studies/fith-brand",
    bg: "from-[#1A2A1A] to-[#2D4A2D]",
    stats: ["Millions of Organic Impressions", "Thousands of Creator Partners", "$0 Starting Budget"],
  },
  {
    tag: "Influencer & Creator",
    title: "Scaling a Creator Program With Thousands of Partners",
    description:
      "How I built and managed influencer and affiliate programs driving measurable revenue through UGC.",
    href: "/case-studies/creator-program",
    bg: "from-[#2A1A2A] to-[#4A2D4A]",
    stats: ["1,000+ TikTok Shop Affiliates", "200 Monthly Retainer Creators", "3 Hero Products"],
  },
];

const tagColors: Record<string, string> = {
  "Paid Media": "text-[#60A5FA] bg-[#60A5FA]/10",
  "AI Automation": "text-[#A78BFA] bg-[#A78BFA]/10",
  "DTC / Ecommerce": "text-[#34D399] bg-[#34D399]/10",
  "Influencer & Creator": "text-[#F472B6] bg-[#F472B6]/10",
};

function CaseStudyCard({
  cs,
  index,
}: {
  cs: (typeof caseStudies)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <Link href={cs.href} className="block">
        <div className="rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 hover:translate-y-[-2px]">
          {/* Card image — real screenshot if available, otherwise stats banner */}
          {"image" in cs && cs.image ? (
            <div className="h-48 overflow-hidden relative">
              <Image
                src={cs.image as string}
                alt={cs.imageAlt as string}
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                {cs.stats.map((stat) => (
                  <span
                    key={stat}
                    className="text-xs font-medium text-white/90 bg-black/50 backdrop-blur-sm border border-white/20 rounded-full px-3 py-1"
                  >
                    {stat}
                  </span>
                ))}
              </div>
            </div>
          ) : (
            <div
              className={`h-48 bg-gradient-to-br ${cs.bg} flex flex-col items-start justify-end px-6 pb-5`}
            >
              <div className="flex flex-wrap gap-2">
                {cs.stats.map((stat) => (
                  <span
                    key={stat}
                    className="text-xs font-medium text-white/80 bg-white/10 border border-white/15 rounded-full px-3 py-1"
                  >
                    {stat}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Content */}
          <div className="p-6 bg-[#1A1A1A] border-t border-white/5">
            <span
              className={`text-xs font-semibold tracking-widest uppercase px-2.5 py-1 rounded-full ${
                tagColors[cs.tag] || "text-[#999999] bg-white/10"
              }`}
            >
              {cs.tag}
            </span>
            <h3 className="text-lg font-semibold text-white mt-3 mb-2 leading-snug">
              {cs.title}
            </h3>
            <p className="text-sm text-[#999999] leading-relaxed mb-4">{cs.description}</p>
            <span className="inline-flex items-center gap-1.5 text-sm font-medium text-[#2563EB] group-hover:gap-2.5 transition-all">
              View Case Study
              <ArrowUpRight size={14} />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function CaseStudies() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="case-studies" className="py-24 md:py-32 px-6 bg-[#111111]">
      <div className="max-w-[1200px] mx-auto">
        <motion.p
          ref={ref}
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="text-xs font-semibold tracking-widest text-[#666666] uppercase mb-4"
        >
          Case Studies
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="text-[36px] md:text-[40px] font-semibold text-white leading-tight tracking-tight mb-14"
        >
          Work that moved the needle.
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {caseStudies.map((cs, index) => (
            <CaseStudyCard key={cs.href} cs={cs} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
